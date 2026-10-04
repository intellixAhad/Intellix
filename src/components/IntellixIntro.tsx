"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type IntellixIntroProps = {
  children: React.ReactNode;
  /** Only play once per browser tab session (uses sessionStorage). Default: false */
  once?: boolean;
  /** Called after the intro has fully left the screen */
  onFinish?: () => void;
};

// Exact path data parsed from the Figma SVG export. Each group is one logical
// layer of the logo; groups draw in sequence, paths inside a group ripple in.
const cubeLineGroups: string[][] = [
  // Main cube: outer hexagon + the 3 inner edges from the near corner
  [
    "M398.625 133.216L400 134V359L209 469.274L20.5 360.443L19 133L210.5 26L398.625 133.216Z",
    "M19 133L209 242.697",
    "M209 469.274V242.697",
    "M209 242.697L398.625 133.216",
  ],
  // Waist ring
  ["M336.5 150.35L209 223.962L81.5 149.462L209 80.4619L336.5 150.35Z"],
  // Top face detail
  [
    "M158 167.728L139.5 157.047L121.5 146.655L74 119.231L209.5 41L345 119.231L297.5 146.655",
    "M121.5 146.655L209.5 95.8483L297.5 146.655",
    "M261 167.728L279.5 157.047L297.5 146.655",
    "M139.5 157.047L209.5 116.633L279.5 157.047",
    "M158 167.728L209.5 137.995L261 167.728",
    "M243.5 177.832L209.5 197.462L175.5 177.832L158 167.728",
    "M261 167.728L243.5 177.832",
    "M175.5 177.832L209.5 158.202L243.5 177.832",
    "M209.5 211.462L342.002 134.962L209.5 58.4619L76.9981 134.962L209.5 211.462Z",
  ],
  // Left wall detail
  [
    "M99.4878 228.169L82.1673 218.169L38 192.669L38 348.169L176.564 428.169V374.669",
    "M82.1673 218.169V320.169L176.564 374.669",
    "M176.564 374.669V353.669",
    "M99.4878 228.169V309.169L176.564 353.669",
    "M176.564 353.669V272.669L138.026 250.419L99.4878 228.169",
    "M118 240.669V296.669L175.158 329.669",
    "M138.026 250.419V284.169L175.158 305.607",
    "M52.5 339.169L184.136 415.169V264.169L52.5 188.169V339.169Z",
    "M66.5 329.669L191.5 401.838V257.169L66.5 185V329.669Z",
  ],
  // Right wall detail
  [
    "M319.012 228.169L336.333 218.169L380.5 192.669V348.169L241.936 428.169V374.669",
    "M336.333 218.169V320.169L241.936 374.669",
    "M241.936 374.669V353.669",
    "M319.012 228.169V309.169L241.936 353.669",
    "M241.936 353.669V272.669L280.474 250.419L319.012 228.169",
    "M300.5 240.669V296.669L243.342 329.669",
    "M280.474 250.419V284.169L243.342 305.607",
    "M366 339.169L234.364 415.169V264.169L366 188.169V339.169Z",
    "M352 329.669L227 401.838V257.169L352 185V329.669Z",
  ],
];

const cubeLines = cubeLineGroups.flatMap((group, ring) => group.map((d, j) => ({ d, ring, j })));

const WORDMARK = "Intellix Solutions";

/**
 * Timeline (ms). These are passed to CSS as custom properties, so the JS timers and
 * the CSS animations always stay in sync. Change timing here only.
 *
 *   0      cube lines draw in, layer by layer (~1.45s)
 *   1250   light sweep across the finished cube + ambient "power on"
 *   1750   cube shrinks and lifts to make room for the wordmark
 *   2000   wordmark letters resolve one by one
 *   3700   everything lifts and fades out, revealing the page
 */
const TIMING = { sheen: 1250, collapse: 1750, word: 2000, exit: 3700, exitDuration: 700 };
const REDUCED_TIMING = { exit: 1100, exitDuration: 400 };
const STORAGE_KEY = "intellix-intro-seen";

export default function IntellixIntro({ children, once = false, onFinish }: IntellixIntroProps) {
  const [showIntro, setShowIntro] = useState(true);
  const [exiting, setExiting] = useState(false);
  const exitingRef = useRef(false);
  const doneTimer = useRef<number>(undefined);
  const onFinishRef = useRef(onFinish);
  onFinishRef.current = onFinish;

  const finish = useCallback(() => {
    setShowIntro(false);
    onFinishRef.current?.();
  }, []);

  const startExit = useCallback(
    (duration: number) => {
      if (exitingRef.current) return;
      exitingRef.current = true;
      setExiting(true);
      doneTimer.current = window.setTimeout(finish, duration);
    },
    [finish],
  );

  useEffect(() => {
    if (once) {
      try {
        if (sessionStorage.getItem(STORAGE_KEY)) {
          finish();
          return;
        }
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {
        /* storage blocked: just play the intro */
      }
    }

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const { exit, exitDuration } = reduced ? REDUCED_TIMING : TIMING;

    // Lock page scroll while the intro covers it
    const html = document.documentElement;
    const prevOverflow = html.style.overflow;
    html.style.overflow = "hidden";

    // Tap / click / Esc / Enter / Space skips straight to the exit
    const skip = () => startExit(exitDuration);
    const onKey = (e: KeyboardEvent) => {
      if (["Escape", "Enter", " "].includes(e.key)) skip();
    };
    window.addEventListener("keydown", onKey);

    const exitTimer = window.setTimeout(skip, exit);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(doneTimer.current);
      window.removeEventListener("keydown", onKey);
      html.style.overflow = prevOverflow;
    };
  }, [once, finish, startExit]);

  // Release the scroll lock as soon as the intro starts leaving
  useEffect(() => {
    if (exiting || !showIntro) document.documentElement.style.overflow = "";
  }, [exiting, showIntro]);

  const timingVars = {
    "--t-sheen": `${TIMING.sheen}ms`,
    "--t-collapse": `${TIMING.collapse}ms`,
    "--t-word": `${TIMING.word}ms`,
    "--t-exit": `${TIMING.exitDuration}ms`,
  } as React.CSSProperties;

  return (
    <>
      {children}

      {showIntro && (
        <div
          className={`intellix-intro${exiting ? " intellix-intro--exit" : ""}`}
          style={timingVars}
          aria-hidden="true"
          onPointerDown={() => startExit(TIMING.exitDuration)}
        >
          <div className="intellix-intro__noise" />
          <div className="intellix-intro__ambient" />

          <div className="intellix-intro__stage">
            <div className="intellix-intro__logo">
              <div className="intellix-intro__logo-inner">
                <svg viewBox="0 0 421 478" role="presentation" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="intellix-line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="55%" stopColor="#eaf1ff" />
                      <stop offset="100%" stopColor="#c9dcff" />
                    </linearGradient>

                    <filter id="intellix-glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="2.6" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>

                    {/* Soft diagonal light band used by the sweep */}
                    <linearGradient id="intellix-sheen-gradient" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0" stopColor="#fff" stopOpacity="0" />
                      <stop offset="0.5" stopColor="#fff" stopOpacity="1" />
                      <stop offset="1" stopColor="#fff" stopOpacity="0" />
                    </linearGradient>
                    <mask id="intellix-sheen-mask" maskUnits="userSpaceOnUse" x="-40" y="-40" width="501" height="558">
                      <g transform="rotate(24 210 239)">
                        <rect
                          className="intellix-intro__sheen-band"
                          x="-300"
                          y="-200"
                          width="170"
                          height="880"
                          fill="url(#intellix-sheen-gradient)"
                        />
                      </g>
                    </mask>
                  </defs>

                  {/* Faint blueprint of the full cube that the lines draw over */}
                  <g className="intellix-intro__ghost">
                    {cubeLines.map(({ d }, i) => (
                      <path key={i} d={d} />
                    ))}
                  </g>

                  {/* Main animated lines */}
                  <g className="intellix-intro__paths">
                    {cubeLines.map(({ d, ring, j }, i) => (
                      <path
                        key={i}
                        d={d}
                        pathLength="1"
                        className="intellix-cube-line"
                        style={{ "--ring": ring, "--j": j } as React.CSSProperties}
                      />
                    ))}
                  </g>

                  {/* Light sweep: a bright copy of the lines revealed through a moving band */}
                  <g className="intellix-intro__sheen" mask="url(#intellix-sheen-mask)">
                    {cubeLines.map(({ d }, i) => (
                      <path key={i} d={d} />
                    ))}
                  </g>
                </svg>
              </div>
            </div>

            <div className="intellix-intro__wordmark" aria-label={WORDMARK}>
              {Array.from(WORDMARK).map((ch, i) => (
                <span
                  key={i}
                  className={ch === " " ? "intellix-intro__char intellix-intro__char--space" : "intellix-intro__char"}
                  style={{ "--i": i } as React.CSSProperties}
                >
                  {ch === " " ? " " : ch}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}