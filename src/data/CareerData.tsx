export const PerksData = [
  {
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <rect x={2} y={7} width={20} height={14} rx={2} />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    title: "Remote-friendly",
    description: "Work from home or our Dhaka office — whichever gets your best work out of you.",
  },
  {
    title: "Real ownership",
    description: "You'll talk to clients and own outcomes early — not just tickets handed down.",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4" />
        <path d="m16.2 7.8 2.9-2.9" />
        <path d="M18 12h4" />
        <path d="m16.2 16.2 2.9 2.9" />
        <path d="M12 18v4" />
        <path d="m4.9 19.1 2.9-2.9" />
        <path d="M2 12h4" />
        <path d="m4.9 4.9 2.9 2.9" />
      </svg>
    ),
  },
  {
    title: "Growth track",
    description: "Clear paths from associate to lead, with mentoring built into how we work.",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20V10" />
        <path d="M18 20V4" />
        <path d="M6 20v-4" />
      </svg>
    ),
  },
  {
    title: "Paid time off",
    description: "Festival holidays plus annual leave, because rested people do better work.",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
];

export const hiringStepsData = [
  {
    title: "Apply",
    description: "Send your CV and a couple of work samples through our page.",
  },
  {
    title: "Intro Call",
    description: "A short call to talk through your background and what you are looking for.",
  },
  {
    title: "Skills round",
    description: "A practical exercise close to real work - never unpaid client-facing tasks.",
  },
  {
    title: "Offer",
    description: "We move fast once there's match, with a clear offer and start date",
  },
];

export type RoleTag = "eng" | "creative" | "ops";

export const filterOptions: { key: "all" | RoleTag; label: string }[] = [
  { key: "all", label: "All" },
  { key: "eng", label: "Engineering" },
  { key: "creative", label: "Creative" },
  { key: "ops", label: "Operations" },
];

export const roles: {
  tag: RoleTag;
  title: string;
  tags: string[];
  icon: React.ReactNode;
}[] = [
  {
    tag: "eng",
    title: "Frontend Developer",
    tags: ["Engineering", "Remote · Full-time", "2+ yrs"],
    icon: (
      <>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </>
    ),
  },
  {
    tag: "creative",
    title: "Graphic Designer",
    tags: ["Creative", "Dhaka · Full-time", "1+ yrs"],
    icon: (
      <>
        <circle cx={12} cy={12} r={10} />
        <circle cx={12} cy={12} r={4} />
      </>
    ),
  },
  {
    tag: "creative",
    title: "Video Editor",
    tags: ["Creative", "Remote · Full-time", "1+ yrs"],
    icon: (
      <>
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x={1} y={5} width={15} height={14} rx={2} />
      </>
    ),
  },
  {
    tag: "ops",
    title: "BPO Associate",
    tags: ["Operations", "Dhaka · Full-time", "Entry-level"],
    icon: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
  },
];