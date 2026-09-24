"use client";

import { useEffect, useId, useRef, useState } from "react";

/* ------------------------------------------------------------------ */
/*  Config                                                             */
/* ------------------------------------------------------------------ */

type Point = [number, number];
type Branch = { d: string; node: Point };
type Trace = { d: string; end: Point; color: string; core: string; branches: Branch[] };
type Layout = { viewBox: string; traces: Trace[] };

const BLUE = { color: "#38bdf8", core: "#e0f2fe" };
const GREEN = { color: "#34d399", core: "#d1fae5" };

/** Desktop: traces enter from the left/right edges and converge on the headline. */
const DESKTOP: Layout = {
  viewBox: "0 0 1440 800",
  traces: [
    {
      ...BLUE,
      d: "M -10 600 H 150 L 230 520 H 330 L 410 440 H 470",
      end: [470, 440],
      branches: [
        { d: "M 90 600 V 660", node: [90, 660] },
        { d: "M 280 520 V 580", node: [280, 580] },
      ],
    },
    {
      ...GREEN,
      d: "M 1450 220 H 1290 L 1210 300 H 1110 L 1030 380 H 970",
      end: [970, 380],
      branches: [
        { d: "M 1360 220 V 160", node: [1360, 160] },
        { d: "M 1160 300 V 240 H 1120", node: [1120, 240] },
      ],
    },
  ],
};

/** Mobile: traces drop in from the top/bottom edges so they stay visible on narrow screens. */
const MOBILE: Layout = {
  viewBox: "0 0 400 800",
  traces: [
    {
      ...BLUE,
      d: "M 40 -10 V 90 L 90 140 V 230 L 130 270 H 150",
      end: [150, 270],
      branches: [{ d: "M 90 180 H 60", node: [60, 180] }],
    },
    {
      ...GREEN,
      d: "M 360 810 V 700 L 310 650 V 580 L 270 540 H 250",
      end: [250, 540],
      branches: [{ d: "M 310 620 H 340", node: [340, 620] }],
    },
  ],
};

const RUN_MS = 2000; // time for one pulse to travel the trace
const PAUSE_MS = 3000; // average pause between runs
const JITTER_MS = 1500; // pause is randomised within PAUSE_MS ± JITTER_MS

/** Pulse is 3 stacked dashes: faint long tail, glowing body, bright core head. `len` = fraction of path length. */
const LAYERS = [
  { len: 0.22, width: 1.5, opacity: 0.35, glow: true, core: false },
  { len: 0.08, width: 4, opacity: 0.9, glow: true, core: false },
  { len: 0.03, width: 1.75, opacity: 1, glow: false, core: true },
] as const;
const MAX_LEN = Math.max(...LAYERS.map((l) => l.len));

const TRACE_STROKE = "rgba(148,163,184,0.16)";
const BRANCH_STROKE = "rgba(148,163,184,0.12)";
const BG = "#05070d";

/* ------------------------------------------------------------------ */

function useMedia(query: string) {
  const [match, setMatch] = useState(false);
  useEffect(() => {
    const m = window.matchMedia(query);
    const update = () => setMatch(m.matches);
    update();
    m.addEventListener("change", update);
    return () => m.removeEventListener("change", update);
  }, [query]);
  return match;
}

export default function CircuitBackground({ className = "" }: { className?: string }) {
  const isMobile = useMedia("(max-width: 767px)");
  const reducedMotion = useMedia("(prefers-reduced-motion: reduce)");
  const layout = isMobile ? MOBILE : DESKTOP;
  const glowId = `cb-glow-${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;

  return (
    <svg
      aria-hidden
      className={className}
      viewBox={layout.viewBox}
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
    >
      <defs>
        <filter id={glowId} filterUnits="userSpaceOnUse" x="-100" y="-100" width="1700" height="1000">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {layout.traces.map((trace, i) => (
        <CircuitTrace key={`${isMobile ? "m" : "d"}-${i}`} trace={trace} glowId={glowId} animate={!reducedMotion} />
      ))}
    </svg>
  );
}

function CircuitTrace({ trace, glowId, animate }: { trace: Trace; glowId: string; animate: boolean }) {
  const layerRefs = useRef<(SVGPathElement | null)[]>([]);
  const nodeRef = useRef<SVGGElement>(null);

  useEffect(() => {
    const layers = layerRefs.current.filter((el): el is SVGPathElement => !!el);
    if (!animate || layers.length !== LAYERS.length) return;

    const total = layers[0].getTotalLength();
    const travel = total * (1 + MAX_LEN); // head goes past the end so the tail fully exits

    // Park each dash just before the path start (hidden).
    layers.forEach((el, i) => {
      const len = LAYERS[i].len * total;
      el.style.strokeDasharray = `${len}px ${total * 3}px`;
      el.style.strokeDashoffset = `${len}px`;
      el.style.visibility = "visible";
    });

    const running = new Set<Animation>();
    const track = (a: Animation) => {
      running.add(a);
      a.onfinish = () => running.delete(a);
    };
    let timer: ReturnType<typeof setTimeout>;

    const run = () => {
      layers.forEach((el, i) => {
        const len = LAYERS[i].len * total;
        track(
          el.animate([{ strokeDashoffset: `${len}px` }, { strokeDashoffset: `${len - travel}px` }], {
            duration: RUN_MS,
            easing: "linear",
          }),
        );
      });

      // Flash the end node the moment the head arrives.
      nodeRef.current &&
        track(
          nodeRef.current.animate(
            [
              { transform: "scale(1)", opacity: 0.5 },
              { transform: "scale(1.9)", opacity: 1, offset: 0.2 },
              { transform: "scale(1)", opacity: 0.5 },
            ],
            { duration: 900, delay: RUN_MS / (1 + MAX_LEN), easing: "ease-out" },
          ),
        );

      const pause = PAUSE_MS + (Math.random() * 2 - 1) * JITTER_MS;
      timer = setTimeout(run, RUN_MS + pause);
    };

    // Independent random start so the two lines never sync up.
    timer = setTimeout(run, Math.random() * (RUN_MS + PAUSE_MS));

    return () => {
      clearTimeout(timer);
      running.forEach((a) => a.cancel());
      layers.forEach((el) => (el.style.visibility = "hidden"));
    };
  }, [animate, trace]);

  const [ex, ey] = trace.end;

  return (
    <g>
      {/* Static trace */}
      <path d={trace.d} stroke={TRACE_STROKE} strokeWidth={1.5} strokeLinejoin="round" />
      {trace.branches.map((b, i) => (
        <g key={i}>
          <path d={b.d} stroke={BRANCH_STROKE} strokeWidth={1.25} strokeLinejoin="round" />
          <circle cx={b.node[0]} cy={b.node[1]} r={3} fill={BG} stroke="rgba(148,163,184,0.25)" strokeWidth={1.25} />
        </g>
      ))}

      {/* Travelling pulse */}
      {LAYERS.map((l, i) => (
        <path
          key={i}
          ref={(el) => {
            layerRefs.current[i] = el;
          }}
          d={trace.d}
          stroke={l.core ? trace.core : trace.color}
          strokeWidth={l.width}
          strokeOpacity={l.opacity}
          strokeLinecap="round"
          strokeLinejoin="round"
          filter={l.glow ? `url(#${glowId})` : undefined}
          style={{ visibility: "hidden" }}
        />
      ))}

      {/* End node */}
      <g ref={nodeRef} style={{ transformBox: "fill-box", transformOrigin: "center", opacity: 0.5 }}>
        <circle cx={ex} cy={ey} r={7} fill={trace.color} opacity={0.35} filter={`url(#${glowId})`} />
        <circle cx={ex} cy={ey} r={3.5} fill={BG} stroke={trace.color} strokeWidth={1.5} />
      </g>
    </g>
  );
}
