import type { ReactNode } from "react";

type Stat = {
  value: number;
  suffix: string;
  label: string;
};

export const ServiceStats: Stat[] = [
  { value: 5, suffix: "+", label: "Years active" },
  { value: 80, suffix: "+", label: "Projects shipped" },
  { value: 30, suffix: "+", label: "Clients served" },
  { value: 24, suffix: "h", label: "Avg. response time" },
];

type Model = {
  icon: ReactNode;
  title: string;
  description: string;
  bestFor: string;
};

export const MODELS: Model[] = [
  {
    title: "Fixed-Price Project",
    description: "A defined scope, timeline, and cost agreed upfront — no surprises along the way.",
    bestFor: "Best for a clear scope",
    icon: (
      <>
        <circle cx={12} cy={12} r={9} />
        <circle cx={12} cy={12} r={5} />
        <circle cx={12} cy={12} r={1} />
      </>
    ),
  },
  {
    title: "Dedicated Team",
    description: "A consistent team embedded with yours on a monthly basis — for ongoing product work.",
    bestFor: "Best for ongoing work",
    icon: (
      <>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx={9} cy={7} r={4} />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
  },
  {
    title: "Hourly / Time & Material",
    description: "Flexible hours billed as work is completed — suited to evolving or exploratory requirements.",
    bestFor: "Best for flexibility",
    icon: (
      <>
        <circle cx={12} cy={12} r={9} />
        <polyline points="12 7 12 12 15 14" />
      </>
    ),
  },
];
