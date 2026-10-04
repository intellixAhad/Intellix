"use client";

import { motion, useReducedMotion } from "framer-motion";

type FloatingBlobProps = {
  className?: string;
  duration?: number;
  range?: number;
};

/**
 * Ambient, infinitely-looping drift for decorative background blurs —
 * distinct from the entrance/stagger/hover effects: this one never stops,
 * so it should stay very slow and very subtle (small `range`, long `duration`).
 */
export default function FloatingBlob({
  className,
  duration = 10,
  range = 18,
}: FloatingBlobProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      aria-hidden="true"
      className={className}
      animate={
        shouldReduceMotion
          ? undefined
          : {
              x: [0, range, 0, -range, 0],
              y: [0, -range * 0.6, 0, range * 0.6, 0],
            }
      }
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}
