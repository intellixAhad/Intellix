"use client";

import { useEffect, useState } from "react";

type IntellixIntroProps = {
  children: React.ReactNode;
};

// Exact path data parsed from the Figma SVG export. Each group is one logical
// layer of the logo — all its subpaths animate together, ring by ring.
const cubeLineGroups: string[][] = [
  // Main cube — outer hexagon + the 3 inner edges from the near corner
  [
    "M398.625 133.216L400 134V359L209 469.274L20.5 360.443L19 133L210.5 26L398.625 133.216Z",
    "M19 133L209 242.697",
    "M209 469.274V242.697",
    "M209 242.697L398.625 133.216",
  ],

  // Waist ring
  [
    "M336.5 150.35L209 223.962L81.5 149.462L209 80.4619L336.5 150.35Z",
  ],

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

// Flatten to {d, ring} pairs — every path keeps track of which ring it belongs to
// so all paths in the same ring share one animation delay.
const cubeLines = cubeLineGroups.flatMap((group, ring) =>
  group.map((d) => ({ d, ring }))
);
const ringCount = cubeLineGroups.length;

export default function IntellixIntro({ children }: IntellixIntroProps) {
  const [showIntro, setShowIntro] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // Cube draws (~1.2s) → collapses to top-center at 1.35s (~0.75s) →
    // wordmark rises into place at 1.95s (~0.7s) → brief hold → exit.
    const exitTimer = window.setTimeout(() => {
      setExiting(true);
    }, 3400);

    const doneTimer = window.setTimeout(() => {
      setShowIntro(false);
    }, 4200);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(doneTimer);
    };
  }, []);

  return (
    <>
      {children}

      {showIntro && (
        <div className={`intellix-intro ${exiting ? "intellix-intro--exit" : ""}`} aria-hidden="true">
          <div className="intellix-intro__noise" />
          <div className="intellix-intro__ambient" />

          <div className="intellix-intro__logo">
            <svg viewBox="0 0 421 478" role="presentation" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="intellix-line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="55%" stopColor="#eaf1ff" />
                  <stop offset="100%" stopColor="#c9dcff" />
                </linearGradient>
                <filter id="intellix-glow" x="-60%" y="-60%" width="220%" height="220%">
                  <feGaussianBlur stdDeviation="2.6" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <g className="intellix-intro__paths">
                {cubeLines.map(({ d, ring }, index) => (
                  <path
                    key={`${index}-${d}`}
                    d={d}
                    pathLength="1"
                    className="intellix-cube-line"
                    style={
                      {
                        "--line-index": ring * 3,
                        "--line-total": ringCount * 3,
                      } as React.CSSProperties
                    }
                  />
                ))}
              </g>
            </svg>
          </div>

          <div className="intellix-intro__wordmark">Intellix Solutions</div>
        </div>
      )}
    </>
  );
}