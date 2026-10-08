"use client";

import { useEffect, useId, useRef, useState } from "react";

/* ------------------------------------------------------------------ */
/*  Config                                                             */
/* ------------------------------------------------------------------ */

const BLUE = "#38bdf8";
const GREEN = "#34d399";
const TRACE = "rgba(148,163,184,0.14)";
const NODE_IDLE = "rgba(148,163,184,0.28)";
const BG = "#05070d";

const START = { x: 32, y: 32 }; // top-left corner where the trace begins
const OFF = 60; // how far past the viewport edge the trace exits (px)
const DIAG = 90; // vertical drop of each 45° bend (px)
const GAP_VH = 0.7; // how long the trace stays hidden off-screen, in viewport heights
const BOTTOM_PAD = 120; // keep the final node this far above the page bottom
const EASE = 0.14; // how quickly the tip catches up to the scroll position (0–1)

/** Fake glow: stacked strokes behind the tip instead of an SVG blur filter (cheap on tall pages). */
const COMET = [
  { len: 220, width: 10, opacity: 0.06 },
  { len: 160, width: 6, opacity: 0.12 },
  { len: 110, width: 3, opacity: 0.45 },
] as const;

/* ------------------------------------------------------------------ */
/*  Geometry                                                           */
/* ------------------------------------------------------------------ */

type Pt = { x: number; y: number };
type Stub = { d: string; node: Pt; at: number }; // `at` = distance along the main trace where it lights up
type Circuit = { w: number; h: number; d: string; points: Pt[]; cum: number[]; total: number; stubs: Stub[] };

/** Seeded random, so the pattern is stable between renders and resizes. */
function rng(seed: number) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Builds one long trace: starts top-left, staircases across to the right edge,
 * drops down off-screen, comes back in from the right, crosses left, and so on
 * until it ends on a node near the bottom of the page.
 */
function buildCircuit(w: number, h: number, vh: number): Circuit {
  const rand = rng(7);
  const steps = w < 768 ? 2 : 4; // bends per crossing
  const dy = Math.min(DIAG, ((w + OFF * 2) * 0.5) / steps);
  const gap = vh * GAP_VH;
  const limit = h - BOTTOM_PAD;

  const points: Pt[] = [{ ...START }];
  const cum: number[] = [0];
  const stubs: Stub[] = [];
  let x = START.x;
  let y = START.y;
  let dir = 1;
  let row = 0;
  let forceLast = false;
  const lastSteps = Math.max(1, Math.floor(steps / 2));

  const to = (nx: number, ny: number) => {
    const len = Math.hypot(nx - x, ny - y);
    if (len < 0.5) return;
    cum.push(cum[cum.length - 1] + len);
    points.push({ x: nx, y: ny });
    x = nx;
    y = ny;
  };

  while (true) {
    const rowDy = row === 0 ? dy / 2 : dy; // keep the first crossing high on the hero
    const last = forceLast || y + steps * rowDy + gap + lastSteps * dy > limit;
    const n = last ? lastSteps : steps;
    const endX = last ? w / 2 : dir > 0 ? w + OFF : -OFF;
    const flat = Math.max(0, Math.abs(endX - x) - n * rowDy);
    const weights = Array.from({ length: n + 1 }, () => 0.5 + rand());
    const sum = weights.reduce((a, b) => a + b, 0);

    weights.forEach((wt, i) => {
      const run = (flat * wt) / sum;
      const midX = x + (dir * run) / 2;

      // Occasional side branch with a node, only where it's on-screen
      if (run > 90 && midX > 24 && midX < w - 24 && rand() < 0.6) {
        const sy = y + (rand() < 0.5 ? -1 : 1) * (28 + rand() * 24);
        const sx = rand() < 0.5 ? midX : midX + dir * (24 + rand() * 20);
        stubs.push({ d: `M ${midX} ${y} V ${sy} H ${sx}`, node: { x: sx, y: sy }, at: cum[cum.length - 1] + run / 2 });
      }

      to(x + dir * run, y); // horizontal run
      if (i < n) to(x + dir * rowDy, y + rowDy); // 45° bend
    });

    if (last) break;

    // Drop down while outside the viewport. If only the final row fits after this,
    // stretch the drop so the circuit ends near the bottom of the page.
    let drop = gap;
    if (y + gap + steps * dy + gap + lastSteps * dy > limit) {
      drop = Math.max(gap, limit - y - lastSteps * dy);
      forceLast = true;
    }
    to(x, y + drop);
    dir *= -1;
    row++;
  }

  const total = cum[cum.length - 1];
  stubs.unshift({ d: "", node: { ...START }, at: 0 }); // start node
  stubs.push({ d: "", node: { x, y }, at: total - 1 }); // end node

  const d = points.map((p, i) => `${i ? "L" : "M"} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(" ");
  return { w, h, d, points, cum, total, stubs };
}

function pointAt(c: Circuit, len: number): Pt {
  const { points, cum } = c;
  if (len <= 0) return points[0];
  for (let i = 1; i < points.length; i++) {
    if (cum[i] >= len) {
      const t = (len - cum[i - 1]) / (cum[i] - cum[i - 1]);
      return {
        x: points[i - 1].x + (points[i].x - points[i - 1].x) * t,
        y: points[i - 1].y + (points[i].y - points[i - 1].y) * t,
      };
    }
  }
  return points[points.length - 1];
}

/** Distance along the trace where it first reaches page height `y`. */
function lengthAtY(c: Circuit, y: number): number {
  const { points, cum } = c;
  if (y <= points[0].y) return 0;
  for (let i = 1; i < points.length; i++) {
    const a = points[i - 1];
    const b = points[i];
    if (b.y >= y && b.y > a.y) return cum[i - 1] + ((cum[i] - cum[i - 1]) * (y - a.y)) / (b.y - a.y);
  }
  return c.total;
}

function mix(a: string, b: string, t: number) {
  const pa = parseInt(a.slice(1), 16);
  const pb = parseInt(b.slice(1), 16);
  const ch = (s: number) => Math.round(((pa >> s) & 255) + (((pb >> s) & 255) - ((pa >> s) & 255)) * t);
  return `rgb(${ch(16)},${ch(8)},${ch(0)})`;
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

/**
 * Place inside a `relative` page wrapper. It fills the wrapper, and the tip of the
 * trace follows scroll progress through that wrapper.
 */
export default function ScrollCircuit({ className = "" }: { className?: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const litRef = useRef<SVGPathElement>(null);
  const cometRefs = useRef<(SVGPathElement | null)[]>([]);
  const stubRefs = useRef<(SVGGElement | null)[]>([]);
  const headRef = useRef<SVGGElement>(null);
  const haloRefs = useRef<(SVGCircleElement | null)[]>([]);
  const [circuit, setCircuit] = useState<Circuit | null>(null);
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  const gradId = `sc-grad-${uid}`;

  // Rebuild the pattern whenever the page size changes
  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    let prev = "";
    const ro = new ResizeObserver(([entry]) => {
      const w = Math.round(entry.contentRect.width);
      const h = Math.round(entry.contentRect.height);
      const key = `${w}x${h}`;
      if (!w || !h || key === prev) return;
      prev = key;
      setCircuit(buildCircuit(w, h, window.innerHeight));
    });
    ro.observe(wrap);
    return () => ro.disconnect();
  }, []);

  // Scroll → tip position
  useEffect(() => {
    const wrap = wrapRef.current;
    if (!circuit || !wrap) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const startY = circuit.points[0].y;
    const endY = circuit.points[circuit.points.length - 1].y;
    let current = 0;
    let raf = 0;

    const target = () => {
      const r = wrap.getBoundingClientRect();
      const max = Math.max(1, r.height - window.innerHeight);
      const scrolled = Math.min(max, Math.max(0, -r.top));
      const t = scrolled / max;
      // Tip rides from the top of the viewport (page start) to the bottom (page end)
      const y = scrolled + t * window.innerHeight;
      return t > 0.995 ? circuit.total : lengthAtY(circuit, Math.min(endY, Math.max(startY, y)));
    };

    const paint = (len: number) => {
      litRef.current?.setAttribute("stroke-dashoffset", `${circuit.total - len}`);
      cometRefs.current.forEach((el, i) => el?.setAttribute("stroke-dashoffset", `${COMET[i].len - len}`));

      const p = pointAt(circuit, len);
      const color = mix(BLUE, GREEN, p.y / circuit.h);
      headRef.current?.setAttribute("transform", `translate(${p.x} ${p.y})`);
      haloRefs.current.forEach((el) => el?.setAttribute("fill", color));

      stubRefs.current.forEach((el, i) => {
        if (!el) return;
        const on = len >= circuit.stubs[i].at ? "1" : "0";
        if (el.dataset.on !== on) el.dataset.on = on;
      });
    };

    const tick = () => {
      const goal = target();
      const diff = goal - current;
      current = reduced || Math.abs(diff) < 0.5 ? goal : current + diff * EASE;
      paint(current);
      raf = Math.abs(goal - current) > 0.5 ? requestAnimationFrame(tick) : 0;
    };
    const kick = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };

    current = target();
    paint(current);
    window.addEventListener("scroll", kick, { passive: true });
    window.addEventListener("resize", kick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", kick);
      window.removeEventListener("resize", kick);
    };
  }, [circuit]);

  return (
    <div
      ref={wrapRef}
      aria-hidden
      className={className}
      style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}
    >
      {circuit && (
        <svg
          width={circuit.w}
          height={circuit.h}
          viewBox={`0 0 ${circuit.w} ${circuit.h}`}
          fill="none"
          style={{ position: "absolute", top: 0, left: 0 }}
        >
          <defs>
            <linearGradient id={gradId} gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2={circuit.h}>
              <stop offset="0" stopColor={BLUE} />
              <stop offset="1" stopColor={GREEN} />
            </linearGradient>
            <style>{`
              .sc-stub path { stroke: ${TRACE}; transition: stroke .3s; }
              .sc-stub circle { stroke: ${NODE_IDLE}; transform-box: fill-box; transform-origin: center; transition: stroke .3s; }
              .sc-stub[data-on="1"] path { stroke: url(#${gradId}); stroke-opacity: .7; }
              .sc-stub[data-on="1"] circle { stroke: url(#${gradId}); animation: sc-pop .6s ease-out; }
              @keyframes sc-pop { 0% { transform: scale(1); } 30% { transform: scale(1.9); } 100% { transform: scale(1); } }
              @media (prefers-reduced-motion: reduce) { .sc-stub[data-on="1"] circle { animation: none; } }
            `}</style>
          </defs>

          {/* Unlit trace */}
          <path d={circuit.d} stroke={TRACE} strokeWidth={1.5} strokeLinejoin="round" />

          {/* Branches + nodes (light up as the tip passes) */}
          {circuit.stubs.map((s, i) => (
            <g
              key={i}
              className="sc-stub"
              ref={(el) => {
                stubRefs.current[i] = el;
              }}
            >
              {s.d && <path d={s.d} strokeWidth={1.25} strokeLinejoin="round" />}
              <circle cx={s.node.x} cy={s.node.y} r={3.5} fill={BG} strokeWidth={1.5} />
            </g>
          ))}

          {/* Lit trace (everything behind the tip) */}
          <path
            ref={litRef}
            d={circuit.d}
            stroke={`url(#${gradId})`}
            strokeWidth={1.5}
            strokeOpacity={0.85}
            strokeLinejoin="round"
            strokeDasharray={`${circuit.total} ${circuit.total}`}
            strokeDashoffset={circuit.total}
          />

          {/* Comet glow right behind the tip */}
          {COMET.map((c, i) => (
            <path
              key={i}
              ref={(el) => {
                cometRefs.current[i] = el;
              }}
              d={circuit.d}
              stroke={`url(#${gradId})`}
              strokeWidth={c.width}
              strokeOpacity={c.opacity}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray={`${c.len} ${circuit.total * 2}`}
              strokeDashoffset={c.len}
            />
          ))}

          {/* Tip */}
          <g ref={headRef} transform={`translate(${START.x} ${START.y})`}>
            <circle
              ref={(el) => {
                haloRefs.current[0] = el;
              }}
              r={14}
              fill={BLUE}
              opacity={0.15}
            />
            <circle
              ref={(el) => {
                haloRefs.current[1] = el;
              }}
              r={6}
              fill={BLUE}
              opacity={0.45}
            />
            <circle r={2.5} fill="#fff" />
          </g>
        </svg>
      )}
    </div>
  );
}
