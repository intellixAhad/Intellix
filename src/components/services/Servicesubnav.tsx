"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface NavItem {
  id: string;
  label: string;
}

const ITEMS: NavItem[] = [
  { id: "services", label: "Services" },
  { id: "compare", label: "Compare" },
  { id: "engage", label: "Engage" },
  { id: "process", label: "Process" },
  { id: "reviews", label: "Reviews" },
];

// Adjust to match your actual sticky header's rendered height.
const HEADER_OFFSET = 86;

export default function ServiceSubNav() {
  const [active, setActive] = useState(ITEMS[0].id);
  const clickLock = useRef(false);

  useEffect(() => {
    const sections = ITEMS.map((item) => document.getElementById(item.id)).filter((el): el is HTMLElement => !!el);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (clickLock.current) return;
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: `-${HEADER_OFFSET + 56}px 0px -55% 0px`, threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (!target) return;

    clickLock.current = true;
    setActive(id);
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);

    // Release the lock once the smooth scroll has settled.
    window.setTimeout(() => {
      clickLock.current = false;
    }, 700);
  };

  return (
    <div className="sticky z-40 w-full border-b border-white/14 bg-[#0A0A0A]/90 backdrop-blur-sm" style={{ top: HEADER_OFFSET }}>
      <nav className="mx-auto flex max-w-[1240px] gap-1 overflow-x-auto px-[clamp(20px,5vw,64px)] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {ITEMS.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={handleClick(item.id)}
            className={`relative shrink-0 whitespace-nowrap px-4 py-3.5 font-jetbrain text-[12px] font-semibold uppercase tracking-[.04em] transition-colors duration-300 ${active === item.id ? "text-white-01" : "text-gray-00 hover:text-gray-02"}`}
          >
            {item.label}
            {active === item.id && <motion.span layoutId="subnav-underline" className="absolute inset-x-4 -bottom-px h-[2px] bg-white" transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} />}
          </a>
        ))}
      </nav>
    </div>
  );
}
