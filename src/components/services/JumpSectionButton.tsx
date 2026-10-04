import type { ReactNode } from "react";
import Reveal from "../reveal";

interface JumpLink {
  label: string;
  href: string;
  icon: ReactNode;
}

const JUMP_LINKS: JumpLink[] = [
  {
    label: "Web Dev",
    href: "#web-development",
    icon: (
      <>
        <polyline points="8 6 2 12 8 18" />
        <polyline points="16 6 22 12 16 18" />
      </>
    ),
  },
  {
    label: "Design",
    href: "#graphic-design",
    icon: (
      <>
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      </>
    ),
  },
  {
    label: "Video",
    href: "#video-editing",
    icon: (
      <>
        <rect x="2" y="5" width="15" height="14" rx="2" />
        <polygon points="17 9 22 6 22 18 17 15" />
      </>
    ),
  },
  {
    label: "BPO",
    href: "#bpo-services",
    icon: <path d="M3 18v-6a9 9 0 0 1 18 0v6" />,
  },
];

const JumpSectionButton = () => {
  return (
    <Reveal delay={0.3} className="w-full max-w-3xl">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 w-full">
        {JUMP_LINKS.map((link) => (
          <a key={link.href} href={link.href} className="group flex items-center justify-center gap-2 border border-white/14 bg-[#141414] px-3.5 py-3 transition-colors duration-300 hover:border-white/30">
            <svg viewBox="0 0 24 24" width={15} height={15} fill="none" stroke="#F5F5F2" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
              {link.icon}
            </svg>
            <span className="font-jetbrain text-[12.5px] font-semibold tracking-[.03em] text-[#A6A6A2] transition-colors duration-300 group-hover:text-white-01">{link.label}</span>
          </a>
        ))}
      </div>
    </Reveal>
  );
};

export default JumpSectionButton;
