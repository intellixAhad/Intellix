"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import HoverLift from "@/components/motions/HoverLift";
import { EASE } from "@/components/motions/easing";
import Reveal from "../reveal";
import Badge from "../common/Badge";
import { roles, RoleTag, filterOptions } from "@/data/CareerData";
import SectionTitle from "../common/SectionTitle";


export default function OpenPositions() {
  const [filter, setFilter] = useState<"all" | RoleTag>("all");
  const filteredRoles = filter === "all" ? roles : roles.filter((r) => r.tag === filter);

  return (
    <section className="p-[46px_clamp(20px,5vw,64px)]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-start justify-between gap-3 mb-8">
          <Reveal y={12}>
            <Badge label="Available positions" />
          </Reveal>
          <Reveal delay={0.1}>
            <SectionTitle title="Currently we are recruiting" />
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex flex-wrap gap-5.5 mt-10">
              {filterOptions.map((opt) => {
                const isActive = filter === opt.key;
                return (
                  <button
                    key={opt.key}
                    type="button"
                    onClick={() => setFilter(opt.key)}
                    aria-pressed={isActive}
                    className="relative py-[9px] px-[2px] bg-transparent font-jetbrain uppercase tracking-[0.05em] font-semibold text-[12.5px] whitespace-nowrap rounded-none border-0 cursor-pointer hover:text-white-00"
                  >
                    <span className="transition-colors duration-200" style={{ color: isActive ? "white-01" : "gray-02" }}>
                      {opt.label}
                    </span>
                    {isActive && <motion.span layoutId="open-positions-filter-underline" className="absolute left-0 right-0 -bottom-px h-[2px] bg-white" transition={{ type: "spring", stiffness: 380, damping: 32 }} />}
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>

        <motion.div layout className="flex flex-col gap-3.5">
          <AnimatePresence mode="popLayout">
            {filteredRoles.map((role) => (
              <motion.div key={role.title} layout initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.35, ease: EASE }}>
                <HoverLift lift={3}>
                  <Link href="/contact" className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 border border-white/14 bg-[#141414] rounded-none py-7 px-8">
                    <div className="flex items-center gap-4">
                      <span className="w-11 h-11 rounded-none bg-[#141414] border border-white/14 flex items-center justify-center shrink-0 text-[#F5F5F2]">
                        <svg viewBox="0 0 24 24" width={20} height={20} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                          {role.icon}
                        </svg>
                      </span>
                      <div>
                        <h3 className="font-fraunces text-[17px] font-semibold text-[#F5F5F2] mb-1.5">{role.title}</h3>
                        <div className="flex flex-wrap gap-2">
                          {role.tags.map((tag) => (
                            <span key={tag} className="px-2.5 py-1 rounded-none border border-white/14 font-jetbrain uppercase tracking-[0.05em] text-[10.5px] text-[#A6A6A2]">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <span className="inline-flex items-center justify-center sm:justify-start gap-1.5 py-2.5 px-4.5 rounded-none border-[1.5px] border-white/34 text-[#F5F5F2] font-jetbrain uppercase tracking-[0.04em] font-semibold text-xs whitespace-nowrap">
                      Apply
                      <svg viewBox="0 0 24 24" width={14} height={14} fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                        <line x1={5} y1={12} x2={19} y2={12} />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </span>
                  </Link>
                </HoverLift>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {filteredRoles.length === 0 && (
            <motion.div key="no-results" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3, ease: EASE }} className="text-center py-15 px-5 border border-dashed border-white/14 rounded-none mt-2">
              <p className="text-[14.5px] text-[#6E6E6A]">No open roles currently Available right now</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
