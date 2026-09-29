"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import WebDevVisual from "./Webdevvisual";
import DesignVisual from "./Designvisual";
import VideoVisual from "./Videovisual";
import BpoVisual from "./Bpovisual";

interface TabData {
  id: string;
  index: string;
  shortLabel: string;
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
  tags?: string[];
  ctaLabel: string;
  visual: ReactNode;
}

const TABS: TabData[] = [
  {
    id: "web-development",
    index: "01",
    shortLabel: "Web Dev",
    icon: (
      <>
        <polyline points="8 6 2 12 8 18" />
        <polyline points="16 6 22 12 16 18" />
      </>
    ),
    title: "Web Development",
    description:
      "From a lightweight landing page to a full product with its own dashboard, we build with modern, maintainable code — not page-builder shortcuts. Every build is responsive, fast, and structured so a future developer (ours or yours) can pick it up easily.",
    features: [
      "Custom websites & landing pages",
      "Web applications & internal dashboards",
      "E-commerce stores & checkout flows",
      "API & third-party integrations",
      "CMS setup — WordPress, Webflow, Framer",
      "Ongoing maintenance & support",
    ],
    tags: ["React", "Next.js", "Node.js", "Laravel", "Django"],
    ctaLabel: "Start a Web Project",
    visual: <WebDevVisual />,
  },
  {
    id: "graphic-design",
    index: "02",
    shortLabel: "Design",
    icon: (
      <>
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx={11} cy={11} r={2} />
      </>
    ),
    title: "Graphic Design",
    description:
      "Brand and interface design that stays consistent across every touchpoint — from your logo to your app's smallest button state. We hand off organized, reusable files, not just flat exports.",
    features: [
      "Brand identity & logo design",
      "UI/UX design for web & mobile",
      "Marketing collateral & pitch decks",
      "Social media graphics & templates",
      "Design systems & component libraries",
    ],
    tags: ["Figma", "Illustrator", "Photoshop"],
    ctaLabel: "Start a Design Project",
    visual: <DesignVisual />,
  },
  {
    id: "video-editing",
    index: "03",
    shortLabel: "Video",
    icon: (
      <>
        <rect x={2} y={5} width={15} height={14} rx={2} />
        <polygon points="17 9 22 6 22 18 17 15" />
      </>
    ),
    title: "Video Editing",
    description:
      "Raw footage into content that holds attention — cut for pacing, captioned for sound-off viewing, and formatted for wherever it's going to run, from a landing page hero to a 15-second reel.",
    features: [
      "Promotional & product videos",
      "Short-form social content & reels",
      "Motion graphics & animated titles",
      "Corporate & explainer videos",
      "Captioning, color grading & sound mix",
    ],
    tags: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
    ctaLabel: "Start a Video Project",
    visual: <VideoVisual />,
  },
  {
    id: "bpo-services",
    index: "04",
    shortLabel: "BPO",
    icon: (
      <>
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
      </>
    ),
    title: "BPO Services",
    description:
      "Trained back-office staff who plug into your existing tools and workflows, so repetitive operational work gets handled reliably while your core team focuses on what only they can do.",
    features: [
      "Customer support — chat, email & tickets",
      "Data entry & data cleaning",
      "Virtual assistance & scheduling",
      "Order processing & back-office operations",
      "Tier-1 technical support",
    ],
    ctaLabel: "Set Up a Support Team",
    visual: <BpoVisual />,
  },
];

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="#9A9A94" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0">
      <circle cx={12} cy={12} r={9} />
      <polyline points="8 12 11 15 16 9" />
    </svg>
  );
}

export default function ServiceTabs() {
  const [active, setActive] = useState(TABS[0].id);
  const sectionRef = useRef<HTMLElement>(null);
  const activeTab = TABS.find((t) => t.id === active) ?? TABS[0];

  // Let the hero's jump-pills (#web-development etc.) select a tab and land here.
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
    <section id="services" ref={sectionRef} className="mx-auto max-w-[1240px] scroll-mt-32 px-[clamp(20px,5vw,64px)] py-14 sm:py-16">
      <div className="mb-8 max-w-160 sm:mb-10">
        <div className="mb-3.5 flex items-center gap-2.5">
          <span className="h-1.5 w-1.5 shrink-0 bg-white" />
          <p className="m-0 font-jetbrain text-xs font-semibold uppercase tracking-[.08em] text-gray-02">WHAT WE OFFER</p>
        </div>
        <h2 className="m-0 font-fraunces text-[28px] font-semibold tracking-[-0.01em] text-white-01 sm:text-[34px]">
          Four services, one team.
        </h2>
      </div>

      {/* Tab bar */}
      <div className="relative flex gap-1 overflow-x-auto border-b border-white/14 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => selectTab(tab.id)}
            aria-pressed={active === tab.id}
            className={`relative flex shrink-0 items-center gap-2.5 whitespace-nowrap px-5 py-4 font-jetbrain text-[12.5px] font-semibold uppercase tracking-[.04em] transition-colors duration-300 ${
              active === tab.id ? "text-white-01" : "text-gray-00 hover:text-gray-02"
            }`}
          >
            <span className="text-[11px] text-[#6E6E6A]">{tab.index}</span>
            {tab.shortLabel}
            {active === tab.id && (
              <motion.span
                layoutId="service-tab-underline"
                className="absolute inset-x-0 -bottom-px h-[2px] bg-white"
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Active panel */}
      <div className="overflow-hidden border border-t-0 border-white/14 bg-[#141414]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 gap-10 p-6 sm:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14"
          >
            <div>
              <div className="mb-5 flex h-11 w-11 items-center justify-center border border-white/14 bg-black-01 text-white-01">
                <svg viewBox="0 0 24 24" width={21} height={21} fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                  {activeTab.icon}
                </svg>
              </div>

              <h3 className="mb-4 font-fraunces text-[24px] font-semibold tracking-[-0.01em] text-white-01 sm:text-[28px]">
                {activeTab.title}
              </h3>
              <p className="mb-6 max-w-[520px] text-[15px] leading-[1.75] text-gray-02">{activeTab.description}</p>

              <ul className="mb-6 flex flex-col gap-3">
                {activeTab.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <CheckIcon />
                    <span className="text-[14.5px] text-gray-02">{feature}</span>
                  </li>
                ))}
              </ul>

              {activeTab.tags && activeTab.tags.length > 0 && (
                <div className="mb-7 flex flex-wrap gap-2">
                  {activeTab.tags.map((tag) => (
                    <span key={tag} className="border border-white/14 px-3 py-1.5 font-jetbrain text-xs text-gray-02">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <a
                href="/contact"
                className="group inline-flex items-center gap-2 border-[1.5px] border-white bg-white px-6 py-3.5 font-jetbrain text-[13.5px] font-semibold uppercase tracking-[.04em] text-black-01 transition-all duration-300 hover:bg-transparent hover:text-white"
              >
                {activeTab.ctaLabel}
                <svg viewBox="0 0 24 24" width={15} height={15} fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
                  <line x1={5} y1={12} x2={19} y2={12} />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>

            <div>{activeTab.visual}</div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}