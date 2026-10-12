import Reveal from "../motions/reveal";

interface JumpLink {
  label: string;
  href: string;
}

const JUMP_LINKS: JumpLink[] = [
  {
    label: "AI & ML",
    href: "#ai-ml",
  },
  {
    label: "Software",
    href: "#software",
  },
  {
    label: "Website",
    href: "#website",
  },
  {
    label: "Voice AI",
    href: "#voice-ai",
  },
  {
    label: "Cloud & DevOps",
    href: "#cloud-devops",
  },
  {
    label: "Video Editing",
    href: "#video",
  },
  {
    label: "BPO",
    href: "#bpo",
  },
  {
    label: "Webinars",
    href: "#webinar",
  },
];

const JumpSectionButton = () => {
  return (
    <Reveal delay={0.3} className="w-full max-w-3xl">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 w-full">
        {JUMP_LINKS.map((link) => (
          <a key={link.href} href={link.href} className="group border border-white/14 bg-[#141414] px-3 py-1.5 transition-colors duration-300 hover:border-white/30">
            <span className="font-jetbrain text-[12.5px] font-semibold tracking-[.03em] text-gray-02 transition-colors duration-300 group-hover:text-white-01">{link.label}</span>
          </a>
        ))}
      </div>
    </Reveal>
  );
};

export default JumpSectionButton;
