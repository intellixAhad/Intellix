"use client";

import { useId, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

export interface FaqItem {
  q: string;
  a: ReactNode;
}

export default function ContactFaq({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const baseId = useId();

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${baseId}-panel-${i}`;

        return (
          <div key={item.q} className="border border-white/[0.14] bg-[#141414] px-5.5 py-5">
            <h3>
              <button type="button" onClick={() => setOpen(isOpen ? null : i)} aria-expanded={isOpen} aria-controls={panelId} className="group flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left">
                <span className="font-jetbrain text-[17px] font-semibold text-white-01 tracking-tighter transition-colors group-hover:text-white">{item.q}</span>
                <motion.svg animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }} className="shrink-0" viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="#6E6E6A" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </motion.svg>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div id={panelId} role="region" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
                  <div className="pb-5 text-base leading-[1.7] text-gray-02">{item.a}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
