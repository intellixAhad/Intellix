"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { EASE } from "./easing";

type StaggerGroupProps = {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  once?: boolean;
};

export function StaggerGroup({
  children,
  className,
  stagger = 0.08,
  once = true,
}: StaggerGroupProps) {
  const variants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: 0.05 } },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.2 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

type StaggerItemProps = {
  children: React.ReactNode;
  className?: string;
  y?: number;
};

export function StaggerItem({ children, className, y = 20 }: StaggerItemProps) {
  const shouldReduceMotion = useReducedMotion();

  const variants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : y },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
  };

  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  );
}
