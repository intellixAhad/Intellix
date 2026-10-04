"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { EASE } from "./easing";

type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
};

/**
 * Generic scroll-triggered fade + rise. Use for headings, intro paragraphs,
 * and any standalone block that should animate in once as the user scrolls
 * to it. For a group of siblings that should cascade in one after another,
 * use StaggerGroup/StaggerItem instead.
 */
export default function FadeIn({
  children,
  className,
  delay = 0,
  y = 24,
  once = true,
}: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();

  const variants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : y },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: EASE, delay },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.3 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
