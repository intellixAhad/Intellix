"use client";

import { motion, useReducedMotion } from "framer-motion";

type BadgeProps = {
  label: string;
};

const Badge = ({ label }: BadgeProps) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="inline-flex items-center justify-center gap-2.5">
      <motion.span aria-hidden="true" className="w-1.75 h-1.75 rounded-none bg-white-01 mb-0.75" animate={shouldReduceMotion ? undefined : { opacity: [1, 0.5, 1], scale: [1, 0.75, 1] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }} />
      <span className="font-jetbrain text-xs md:text-base tracking-[.08em] font-semibold text-gray-02 uppercase">{label}</span>
    </div>
  );
};

export default Badge;
