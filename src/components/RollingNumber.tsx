"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { memo, useEffect, useRef, useState } from "react";

type RollingNumberProps = {
  prefix?: string;
  number: number;
  suffix?: string;
  className?: string;
  format?: boolean; // 12500 -> 12,500
  duration?: number; // seconds
};

const CountUpNumber = ({ prefix = "", number, suffix = "", className = "", format = false, duration = 2 }: RollingNumberProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduceMotion = useReducedMotion();

  const [value, setValue] = useState(reduceMotion ? number : 0);

  useEffect(() => {
    if (!inView) return;

    if (reduceMotion) {
      setValue(number);
      return;
    }

    const controls = animate(0, number, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setValue(Math.round(latest)),
    });

    return () => controls.stop();
  }, [inView, number, duration, reduceMotion]);

  const display = format ? value.toLocaleString("en-US") : String(value);
  const finalLabel = `${prefix}${format ? number.toLocaleString("en-US") : number}${suffix}`;

  return (
    <div ref={ref} className={`flex items-center justify-center font-jetbrain italic text-[48px] md:text-[68px] font-bold leading-none text-white-01 tabular-nums ${className}`}>
      <span className="sr-only">{finalLabel}</span>
      <span aria-hidden="true">
        {prefix}
        {display}
        {suffix}
      </span>
    </div>
  );
};

export default memo(CountUpNumber);
