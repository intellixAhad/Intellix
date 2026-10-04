"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "./easing";

type HoverLiftProps = {
  children: React.ReactNode;
  className?: string;
  lift?: number;
};

/** Small hover micro-interaction for cards/rows that read as interactive. */
export default function HoverLift({ children, className, lift = 4 }: HoverLiftProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      whileHover={shouldReduceMotion ? undefined : { y: -lift }}
      transition={{ duration: 0.25, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
