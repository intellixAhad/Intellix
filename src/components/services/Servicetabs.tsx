"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TABS } from "@/data/ServiceData";
import Reveal from "../motions/reveal";
import Badge from "../common/Badge";
import SectionTitle from "../common/SectionTitle";
import Button from "../common/Button";

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="#9A9A94" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0">
      <circle cx={12} cy={12} r={2} />
    </svg>
  );
}

export default function ServiceTabs() {
  const [active, setActive] = useState(TABS[0].id);
  const sectionRef = useRef<HTMLElement>(null);
  const activeTab = TABS.find((t) => t.id === active) ?? TABS[0];

  useEffect(() => {
    const applyHash = () => {
      const id = window.location.hash.replace("#", "");
      if (TABS.some((t) => t.id === id)) {
        setActive(id);
        sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  const selectTab = (id: string) => {
    setActive(id);
    history.replaceState(null, "", `#${id}`);
  };

  return (
    <section id="services" ref={sectionRef} className="p-[46px_clamp(20px,5vw,64px)]">
      <div className="max-w-7xl mx-auto flex flex-col gap-6 md:gap-10">
        <div className="flex flex-col items-start gap-2 md:gap-4">
          <Reveal y={12}>
            <Badge label="WHAT WE OFFER" />
          </Reveal>
          <Reveal delay={0.1}>
            <SectionTitle title="Four services, one team." />
          </Reveal>
        </div>

        <Reveal delay={0.2} className="relative flex gap-1 overflow-x-auto border-b border-white/14 [-ms-overflow-style:none] scrollbar-none [&::-webkit-scrollbar]:hidden">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => selectTab(tab.id)}
              aria-pressed={active === tab.id}
              className={`relative flex shrink-0 items-center gap-2.5 whitespace-nowrap px-5 py-4 font-jetbrain text-[12.5px] font-semibold uppercase tracking-[.04em] transition-colors duration-300 ${active === tab.id ? "text-white-01" : "text-gray-00 hover:text-gray-02 cursor-pointer"}`}
            >
              <span className="text-[11px] text-gray-00">{tab.index}</span>
              {tab.shortLabel}
              {active === tab.id && <motion.span layoutId="service-tab-underline" className="absolute inset-x-0 -bottom-px h-0.5 bg-white" transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} />}
            </button>
          ))}
        </Reveal>

        <div className="max-w-7xl mx-auto relative overflow-hidden border border-white-01/14 bg-white-01/5 p-3.5 md:px-10 md:py-6 w-full backdrop-blur-md">
          <div aria-hidden="true" className="pointer-events-none absolute -top-15 -right-15 h-80 w-[320px] rounded-full bg-[radial-gradient(circle_at_35%_35%,rgba(255,255,255,0.12),rgba(255,255,255,0)_65%)] blur-[50px]" />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-17.5 -left-12.5 h-85 w-85 rounded-full bg-[radial-gradient(circle_at_40%_40%,rgba(255,255,255,0.08),rgba(255,255,255,0)_65%)] blur-[50px]" />
          <AnimatePresence mode="wait">
            <motion.div key={activeTab.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} className="grid grid-cols-1 items-center gap-10 p-6 sm:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
              <div className="flex flex-col gap-4 md:gap-8 items-start">
                <div className="flex gap-3 items-center flex-wrap">
                  <div className="flex h-11 w-11 items-center justify-center border border-white/14 bg-black-01 text-white-01">
                    <svg viewBox="0 0 24 24" width={21} height={21} fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                      {activeTab.icon}
                    </svg>
                  </div>
                  <SectionTitle title={activeTab.title} />
                </div>

                <ul className="flex flex-wrap gap-2">
                  {activeTab.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckIcon />
                      <span className="text-[14.5px] text-gray-02">{feature}</span>
                    </li>
                  ))}
                </ul>

                {activeTab.tags && activeTab.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 max-w-105">
                    {activeTab.tags.map((tag) => (
                      <span key={tag} className="border border-white/14 px-3 py-1.5 font-jetbrain text-xs text-gray-02">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <Button title={activeTab.ctaLabel} link="/contact" variant="primary" />
              </div>

              <div>{activeTab.visual}</div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
