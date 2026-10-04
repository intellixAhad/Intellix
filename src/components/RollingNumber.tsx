"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { memo, useMemo, useRef } from "react";

type RollingNumberProps = {
  prefix?: string;
  number: number;
  suffix?: string;
  className?: string;
  format?: boolean; // 12500 -> 12,500
};

const DIGITS = Array.from({ length: 10 }, (_, i) => i);

// Deterministic "random" start per position, so server and client agree (no hydration mismatch)
const startFor = (target: number, index: number) => (target + 3 + index * 7) % 10;

const RollingNumber = ({ prefix = "", number, suffix = "", className = "", format = false }: RollingNumberProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduceMotion = useReducedMotion();

  const chars = useMemo(() => (format ? number.toLocaleString("en-US") : String(number)).split(""), [number, format]);

  const label = `${prefix}${chars.join("")}${suffix}`;

  return (
    <div ref={ref} className={`flex items-center justify-center font-fraunces text-[38px] font-bold leading-none text-white tabular-nums ${className}`}>
      <span className="sr-only">{label}</span>

      <span aria-hidden="true" className="flex items-center">
        {prefix && <span>{prefix}</span>}

        {chars.map((char, index) => {
          if (!/\d/.test(char)) return <span key={`s-${index}`}>{char}</span>;

          const target = Number(char);
          const start = reduceMotion ? target : startFor(target, index);

          return (
            <span key={index} className="relative inline-block h-[1em] w-[1ch] overflow-hidden">
              <motion.span
                className="absolute inset-x-0 top-0 flex flex-col will-change-transform"
                initial={{ y: `-${start}em` }}
                animate={inView ? { y: `-${target}em` } : undefined}
                transition={reduceMotion ? { duration: 0 } : { duration: 1.2 + index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                {DIGITS.map((d) => (
                  <span key={d} className="flex h-[1em] items-center justify-center">
                    {d}
                  </span>
                ))}
              </motion.span>
            </span>
          );
        })}

        {suffix && <span>{suffix}</span>}
      </span>
    </div>
  );
};

export default memo(RollingNumber);
