"use client";

import { useEffect, useRef } from "react";

type RGB = { r: number; g: number; b: number };

const TAU = 6.283185307179586;
const INK_BLOBS = 5;
const BUCKETS = 10;
const LIT_MIN = 0.004;

function parseColor(input: string): RGB {
  const s = String(input || "").trim();
  if (s.charAt(0) === "#") {
    let hex = s.slice(1);
    if (hex.length === 3)
      hex =
        hex.charAt(0) +
        hex.charAt(0) +
        hex.charAt(1) +
        hex.charAt(1) +
        hex.charAt(2) +
        hex.charAt(2);
    const v = parseInt(hex.slice(0, 6), 16);
    return { r: (v >> 16) & 255, g: (v >> 8) & 255, b: v & 255 };
  }
  const m = s.match(/-?\d+(\.\d+)?/g);
  if (m && m.length >= 3)
    return { r: Number(m[0]), g: Number(m[1]), b: Number(m[2]) };
  return { r: 255, g: 255, b: 255 };
}

function alphaOf(input: string): number {
  const s = String(input || "");
  if (s.indexOf("rgba") !== 0) return 1;
  const m = s.match(/[\d.]+\s*\)$/);
  if (!m) return 1;
  const v = parseFloat(m[0]);
  return isNaN(v) ? 1 : Math.min(1, Math.max(0, v));
}

function mix(a: RGB, b: RGB, t: number): RGB {
  const k = t < 0 ? 0 : t > 1 ? 1 : t;
  return {
    r: a.r + (b.r - a.r) * k,
    g: a.g + (b.g - a.g) * k,
    b: a.b + (b.b - a.b) * k,
  };
}

function css(c: RGB, a: number): string {
  const k = a > 1 ? 1 : a < 0 ? 0 : a;
  return (
    "rgba(" +
    Math.round(c.r) +
    "," +
    Math.round(c.g) +
    "," +
    Math.round(c.b) +
    "," +
    Math.round(k * 1000) / 1000 +
    ")"
  );
}

type Ring = {
  x: number;
  y: number;
  born: number;
  speed: number;
  width: number;
  light: number;
  lift: number;
  life: number;
};

export type WaveType = "ripples" | "swell" | "ink" | "flow" | "breathe";
export type ColorMode = "single" | "duo" | "trio";

export interface AuraFieldProps {
  /** Ripples: drifting rings only, the lightest option. Swell: even ocean
   * motion. Ink: bleeding blooms. Flow: a slow current. Breathe: pulses
   * from the centre. */
  waveType?: WaveType;
  /** How many accent colours are blended across the field. */
  colorMode?: ColorMode;
  colorA?: string;
  colorB?: string;
  colorC?: string;
  /** Colour of the dots at rest, before any light reaches them. */
  dotColor?: string;
  background?: string;
  /** Smaller spacing means more dots, up to dotLimit. */
  spacing?: number;
  /** Ceiling on the number of dots. Spacing widens automatically to stay
   * under it. Raise for denser fields, lower on heavy pages. */
  dotLimit?: number;
  dotSize?: number;
  /** Overall speed. Zero holds the field completely still. */
  motion?: number;
  /** How often and how strongly slow waves drift across on their own. */
  waves?: number;
  /** How irregular the waves and the colour flow are. Zero is perfectly
   * even. */
  turbulence?: number;
  /** Strength of the light that follows the cursor. Zero turns it off. */
  pointer?: number;
  clickRipple?: boolean;
  /** How strongly lit dots glow in the accent colours. */
  brightness?: number;
  /** Softens the dots toward the container edges so the field has no
   * visible border. Zero keeps them sharp to the edge. */
  edgeFade?: number;
  /** Render a static (non-animated) CSS dot grid instead of the canvas
   * animation — useful for a server-rendered placeholder, a print/export
   * view, or when the caller wants to force a still frame. */
  frozen?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const defaultProps: Required<Omit<AuraFieldProps, "className" | "style">> = {
  waveType: "ripples",
  colorMode: "duo",
  colorA: "#c9a96a",
  colorB: "#f2eee7",
  colorC: "#8fb3c9",
  dotColor: "rgba(242,238,231,0.10)",
  background: "rgba(0,0,0,0)",
  spacing: 26,
  dotLimit: 6000,
  dotSize: 2.4,
  motion: 1,
  waves: 1,
  turbulence: 0.5,
  pointer: 1,
  clickRipple: true,
  brightness: 1,
  edgeFade: 0.25,
  frozen: false,
};

export default function AuraField(props: AuraFieldProps) {
  const p = { ...defaultProps, ...props };
  const frozen = p.frozen;

  const hostRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const cfg = useRef(p);
  cfg.current = p;

  useEffect(() => {
    if (frozen) return;
    const host = hostRef.current;
    const canvas = canvasRef.current;
    if (!host || !canvas || typeof window === "undefined") return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduced =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let w = 0;
    let h = 0;
    let dots: Float32Array = new Float32Array(0);
    let count = 0;
    let raf = 0;
    let visible = true;
    let engaged = false;
    let engage = 0;
    let nextAmbient = 0;
    const rings: Ring[] = [];
    const ptr = { x: -9999, y: -9999 };
    const cur = { x: -9999, y: -9999 };

    // Reused every frame so the loop never allocates.
    const buckets: number[][] = [];
    for (let i = 0; i < BUCKETS; i++) buckets.push([]);
    const litList: number[] = [];

    const ink: number[] = [];
    for (let i = 0; i < INK_BLOBS; i++) {
      ink.push(
        Math.random() * TAU,
        0.18 + Math.random() * 0.22,
        0.14 + Math.random() * 0.2,
        0.5 + Math.random() * 0.6,
      );
    }

    // If the host sits inside a scaled/transformed ancestor, a bounding
    // rect reports zoomed pixels. Layout size is what we actually need.
    const localScale = () => {
      const rect = host.getBoundingClientRect();
      const ow = host.offsetWidth || 1;
      return rect.width > 0 ? rect.width / ow : 1;
    };

    const build = () => {
      w = Math.max(1, Math.round(host.offsetWidth));
      h = Math.max(1, Math.round(host.offsetHeight));
      // 1.5 is plenty for dots this small and costs far less than 2.
      const dpr = Math.min(1.5, window.devicePixelRatio || 1);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const limit = Math.max(200, cfg.current.dotLimit!);
      let step = Math.max(6, cfg.current.spacing!);
      let cols = Math.ceil(w / step) + 1;
      let rows = Math.ceil(h / step) + 1;
      let guard = 0;
      while (cols * rows > limit && guard < 60) {
        step = step * 1.08;
        cols = Math.ceil(w / step) + 1;
        rows = Math.ceil(h / step) + 1;
        guard++;
      }
      count = cols * rows;
      dots = new Float32Array(count * 2);
      const offX = (w - (cols - 1) * step) / 2;
      const offY = (h - (rows - 1) * step) / 2;
      let k = 0;
      for (let iy = 0; iy < rows; iy++) {
        for (let ix = 0; ix < cols; ix++) {
          dots[k++] = offX + ix * step;
          dots[k++] = offY + iy * step;
        }
      }
    };

    const spawnAmbient = (now: number) => {
      const c = cfg.current;
      const turb = c.turbulence!;
      const vary = (base: number, range: number) =>
        base * (1 + (Math.random() * 2 - 1) * range * turb);
      const side = Math.floor(Math.random() * 4);
      const x =
        side === 0 ? -w * 0.15 : side === 1 ? w * 1.15 : Math.random() * w;
      const y =
        side === 2 ? -h * 0.15 : side === 3 ? h * 1.15 : Math.random() * h;
      const speed = vary(110, 0.55);
      rings.push({
        x: x,
        y: y,
        born: now,
        speed: speed,
        width: vary(190, 0.5),
        light: vary(0.34, 0.6) * c.waves!,
        lift: vary(9, 0.6) * c.waves!,
        life: (Math.max(w, h) * 1.7) / speed + 1.5,
      });
    };

    const onMove = (e: PointerEvent) => {
      const rect = host.getBoundingClientRect();
      const s = localScale();
      ptr.x = (e.clientX - rect.left) / s;
      ptr.y = (e.clientY - rect.top) / s;
      if (!engaged) {
        engaged = true;
        cur.x = ptr.x;
        cur.y = ptr.y;
      }
    };

    const onDown = (e: PointerEvent) => {
      if (!cfg.current.clickRipple) return;
      const rect = host.getBoundingClientRect();
      const s = localScale();
      rings.push({
        x: (e.clientX - rect.left) / s,
        y: (e.clientY - rect.top) / s,
        born: performance.now(),
        speed: 420,
        width: 60,
        light: 1,
        lift: 15,
        life: 2.6,
      });
    };

    const onLeave = () => {
      engaged = false;
    };

    const io = new IntersectionObserver(
      (entries) => {
        visible = entries[0] ? entries[0].isIntersecting : true;
      },
      { threshold: 0 },
    );
    io.observe(host);
    const ro = new ResizeObserver(() => build());
    ro.observe(host);
    build();

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    document.addEventListener("pointerleave", onLeave);

    const start = performance.now();

    const render = (now: number) => {
      raf = requestAnimationFrame(render);
      if (!visible) return;
      const c = cfg.current;
      const t = reduced ? 0 : ((now - start) / 1000) * c.motion!;
      const turb = c.turbulence!;
      const kind = c.waveType;

      cur.x += (ptr.x - cur.x) * 0.14;
      cur.y += (ptr.y - cur.y) * 0.14;
      const wantPointer = c.pointer! > 0 ? (engaged ? 1 : 0) : 0;
      engage += (wantPointer - engage) * 0.06;

      if (!reduced && c.waves! > 0) {
        if (nextAmbient === 0) nextAmbient = now + 400;
        if (now >= nextAmbient) {
          spawnAmbient(now);
          const gap = (kind === "ink" ? 4200 : 2600) / Math.max(0.2, c.waves!);
          nextAmbient = now + gap * (1 + (Math.random() * 2 - 1) * 0.5 * turb);
        }
      }

      ctx.clearRect(0, 0, w, h);
      if (c.background && c.background.indexOf(",0)") === -1) {
        ctx.fillStyle = c.background;
        ctx.fillRect(0, 0, w, h);
      }

      const A = parseColor(c.colorA!);
      const B = c.colorMode === "single" ? A : parseColor(c.colorB!);
      const C = c.colorMode === "trio" ? parseColor(c.colorC!) : B;
      const base = parseColor(c.dotColor!);
      const baseA = alphaOf(c.dotColor!);
      const trio = c.colorMode === "trio";

      const amp = 5 * c.waves!;
      const cx = w / 2;
      const cy = h / 2;
      const fadePx = c.edgeFade! * Math.min(w, h) * 0.5;
      const rad0 = c.dotSize! / 2;
      const useRects = c.dotSize! <= 4;

      const bx: number[] = [];
      const by: number[] = [];
      const br: number[] = [];
      if (kind === "ink") {
        for (let i = 0; i < INK_BLOBS; i++) {
          const o = i * 4;
          const ph = ink[o];
          const sp = ink[o + 3];
          bx.push(cx + Math.sin(t * 0.16 * sp + ph) * w * ink[o + 1]);
          by.push(cy + Math.cos(t * 0.13 * sp + ph * 1.7) * h * ink[o + 2]);
          br.push(
            Math.min(w, h) * (0.3 + 0.12 * Math.sin(t * 0.22 * sp + ph * 2.3)),
          );
        }
      }

      const R = 240;
      const invR2 = 1 / (R * R);
      const pointerCut = R * 2.2 * (R * 2.2);
      const ringK = TAU / 120;
      const ringPh = t * 1.2;
      const pStr = c.pointer!;

      for (let i = rings.length - 1; i >= 0; i--) {
        if ((now - rings[i].born) / 1000 > rings[i].life) rings.splice(i, 1);
      }
      const rcount = rings.length;
      // Precompute each ring so the inner loop only does arithmetic.
      const rX: number[] = [];
      const rY: number[] = [];
      const rIn: number[] = [];
      const rOut: number[] = [];
      const rRad: number[] = [];
      const rW: number[] = [];
      const rL: number[] = [];
      const rP: number[] = [];
      for (let ri = 0; ri < rcount; ri++) {
        const rp = rings[ri];
        const age = (now - rp.born) / 1000;
        const fade = 1 - age / rp.life;
        if (fade <= 0) continue;
        const rad = age * rp.speed;
        const reach = rp.width * 3;
        rX.push(rp.x);
        rY.push(rp.y);
        rRad.push(rad);
        rW.push(rp.width);
        rL.push(rp.light * fade);
        rP.push(rp.lift * fade);
        const lo = rad - reach;
        rIn.push(lo > 0 ? lo * lo : 0);
        rOut.push((rad + reach) * (rad + reach));
      }
      const rn = rX.length;

      for (let i = 0; i < BUCKETS; i++) buckets[i].length = 0;
      litList.length = 0;

      for (let i = 0; i < count; i++) {
        const gx = dots[i * 2];
        const gy = dots[i * 2 + 1];
        let x = gx;
        let y = gy;
        let energy = 0.5;

        if (kind === "swell") {
          const p1 = (gx * 0.9 + gy * 0.45) * (TAU / 900) - t * 0.5;
          const p2 = (gy - gx * 0.5) * (TAU / 520) - t * 0.72;
          const p3 = (gx * 0.3 - gy * 0.2) * (TAU / 1500) + t * 0.33;
          const s1 = Math.sin(p1);
          const s2 = Math.sin(p2) * (0.5 + turb * 0.5);
          const s3 = Math.sin(p3);
          x += (s1 * 0.55 + s2 * 0.3 + s3 * 0.35) * amp;
          y +=
            (Math.cos(p1 * 0.8) * 0.5 +
              Math.cos(p2 * 1.1) * 0.3 * (0.5 + turb * 0.5) +
              Math.cos(p3) * 0.3) *
            amp *
            0.8;
          energy = 0.5 + 0.5 * (s1 * 0.5 + s2 * 0.3 + s3 * 0.2);
        } else if (kind === "flow") {
          const ang =
            (Math.sin(gx * (TAU / 780) + t * 0.36) +
              Math.cos(gy * (TAU / 640) - t * 0.28) * (0.6 + turb)) *
            Math.PI;
          x += Math.cos(ang) * amp;
          y += Math.sin(ang) * amp * 0.9;
          energy = 0.5 + 0.5 * Math.sin(ang);
        } else if (kind === "breathe") {
          const dx = gx - cx;
          const dy = gy - cy;
          const d = Math.sqrt(dx * dx + dy * dy) + 0.0001;
          const s = Math.sin(
            d * (TAU / (520 + 260 * Math.sin(t * 0.21))) - t * 0.9,
          );
          x += (dx / d) * s * amp;
          y += (dy / d) * s * amp;
          energy = 0.5 + 0.5 * s;
        } else if (kind === "ink") {
          let cover = 0;
          for (let bi = 0; bi < INK_BLOBS; bi++) {
            const dx = gx - bx[bi];
            const dy = gy - by[bi];
            const q = dx * dx + dy * dy;
            const r0 = br[bi];
            if (q > r0 * r0 * 6) continue;
            let d = Math.sqrt(q) + 0.0001;
            const ang = Math.atan2(dy, dx);
            d =
              d *
              (1 +
                turb *
                  0.32 *
                  Math.sin(ang * 3 + t * 0.5 + bi) *
                  Math.sin(ang * 5 - t * 0.31));
            const v = Math.exp(-(d * d) / (r0 * r0));
            cover += v;
            const push = v * amp * 0.9;
            x += (dx / d) * push;
            y += (dy / d) * push;
          }
          energy = cover > 1 ? 1 : cover;
        }

        let lit = 0;
        // Ripple energy is tracked apart from the pointer light so a
        // ripple can carry its own colour and its own extra opacity.
        let rip = 0;

        if (engage > 0.001) {
          const dx = x - cur.x;
          const dy = y - cur.y;
          const q = dx * dx + dy * dy;
          if (q < pointerCut && q > 0.0001) {
            const d = Math.sqrt(q);
            const g = Math.exp(-q * invR2) * engage;
            const ring = Math.sin(d * ringK - ringPh);
            const push = g * (3 + ring * 4) * pStr;
            x += (dx / d) * push;
            y += (dy / d) * push;
            lit += g * (0.62 + 0.38 * (0.5 + 0.5 * ring)) * pStr;
          }
        }

        for (let ri = 0; ri < rn; ri++) {
          const dx = x - rX[ri];
          const dy = y - rY[ri];
          const q = dx * dx + dy * dy;
          if (q < rIn[ri] || q > rOut[ri]) continue;
          const dd = Math.sqrt(q);
          const band = (dd - rRad[ri]) / rW[ri];
          const fall = Math.exp(-band * band);
          rip += fall * rL[ri];
          if (dd > 0.0001) {
            const amt = fall * rP[ri];
            x += (dx / dd) * amt;
            y += (dy / dd) * amt;
          }
        }

        lit += rip;
        if (lit > 1) lit = 1;
        if (rip > 1) rip = 1;
        let blend = energy < 0 ? 0 : energy > 1 ? 1 : energy;

        // Soften everything as it nears the container edge.
        let eF = 1;
        if (fadePx > 0.5) {
          let dEdge = x;
          const rx = w - x;
          if (rx < dEdge) dEdge = rx;
          if (y < dEdge) dEdge = y;
          const by2 = h - y;
          if (by2 < dEdge) dEdge = by2;
          if (dEdge < fadePx) {
            let u = dEdge / fadePx;
            if (u < 0) u = 0;
            eF = u * u * (3 - 2 * u);
          }
        }

        if (lit < LIT_MIN) {
          const shade = (0.62 + 0.38 * blend) * eF;
          if (shade * baseA < 0.008) continue;
          let bi = (shade * BUCKETS) | 0;
          if (bi >= BUCKETS) bi = BUCKETS - 1;
          if (bi < 0) bi = 0;
          buckets[bi].push(x, y);
        } else {
          litList.push(x, y, lit, blend, rip, eF);
        }
      }

      // Resting dots: one style and one path per bucket.
      for (let bi = 0; bi < BUCKETS; bi++) {
        const arr = buckets[bi];
        if (arr.length === 0) continue;
        const a = baseA * ((bi + 0.5) / BUCKETS);
        if (a < 0.008) continue;
        ctx.fillStyle = css(base, a);
        if (useRects) {
          const s = rad0 * 2;
          for (let k = 0; k < arr.length; k += 2)
            ctx.fillRect(arr[k] - rad0, arr[k + 1] - rad0, s, s);
        } else {
          ctx.beginPath();
          for (let k = 0; k < arr.length; k += 2) {
            ctx.moveTo(arr[k] + rad0, arr[k + 1]);
            ctx.arc(arr[k], arr[k + 1], rad0, 0, TAU);
          }
          ctx.fill();
        }
      }

      // Lit dots: a small subset, drawn with their own colour.
      for (let k = 0; k < litList.length; k += 6) {
        const x = litList[k];
        const y = litList[k + 1];
        const lit = litList[k + 2];
        const blend = litList[k + 3];
        const rip = litList[k + 4];
        const eF = litList[k + 5];
        let hue = trio
          ? blend < 0.5
            ? mix(A, B, blend * 2)
            : mix(B, C, (blend - 0.5) * 2)
          : mix(A, B, blend);
        // A ripple pulls the colour toward the first accent and adds
        // opacity of its own, so the wave reads as colour, not just light.
        if (rip > 0.002) hue = mix(hue, A, rip > 1 ? 1 : rip);
        const col = mix(base, hue, lit);
        const a =
          (baseA * (0.62 + 0.38 * blend) +
            lit * c.brightness! +
            rip * c.brightness! * 0.55) *
          eF;
        const r = rad0 * (1 + lit * 0.35 + rip * 0.3);
        ctx.fillStyle = css(col, a);
        if (useRects) {
          ctx.fillRect(x - r, y - r, r * 2, r * 2);
        } else {
          ctx.beginPath();
          ctx.arc(x, y, r, 0, TAU);
          ctx.fill();
        }
      }
    };

    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, [frozen]);

  // Static fallback: a plain styled element with a CSS dot grid. No canvas,
  // no listeners, no animation frames. Useful for SSR placeholders, print
  // views, or when the caller explicitly wants a still frame.
  if (frozen) {
    const r = Math.max(0.5, p.dotSize! / 2);
    return (
      <div
        aria-hidden="true"
        className={p.className}
        style={{
          ...p.style,
          position: "relative",
          overflow: "hidden",
          pointerEvents: "none",
          width: p.style?.width ?? "100%",
          height: p.style?.height ?? "100%",
          background: p.background,
          backgroundImage:
            "radial-gradient(circle at center, " +
            p.dotColor +
            " " +
            r +
            "px, rgba(0,0,0,0) " +
            (r + 0.6) +
            "px)",
          backgroundSize: p.spacing + "px " + p.spacing + "px",
        }}
      />
    );
  }

  return (
    <div
      ref={hostRef}
      aria-hidden="true"
      className={p.className}
      style={{
        ...p.style,
        position: "relative",
        overflow: "hidden",
        pointerEvents: "none",
        // Always fill whatever it is placed in, so no box edge shows.
        width: "100%",
        height: "100%",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          position: "absolute",
          inset: 0,
        }}
      />
    </div>
  );
}
