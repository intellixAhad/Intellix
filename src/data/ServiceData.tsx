import { ReactNode } from "react";
import BpoVisual from "@/components/services/Bpovisual";
import DesignVisual from "@/components/services/Designvisual";
import VideoVisual from "@/components/services/Videovisual";
import WebDevVisual from "@/components/services/Webdevvisual";

type Stat = {
  suffix: string;
  value: number;
  prefix: string;
  label: string;
};

export const StatisticsData: Stat[] = [
  { suffix: "+", value: 2, prefix: "", label: "Years active" },
  { suffix: "+", value: 28, prefix: "", label: "Projects Delivered" },
  { suffix: "+", value: 12, prefix: "", label: "Clients served" },
  { suffix: "h", value: 24, prefix: "<", label: "Avg. response time" },
];

type TabData = {
  id: string;
  index: string;
  shortLabel: string;
  icon: ReactNode;
  title: string;
  features: string[];
  tags?: string[];
  ctaLabel: string;
  visual: ReactNode;
};

export const TABS: TabData[] = [
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
    features: ["Custom websites & landing pages", "Web applications & internal dashboards", "E-commerce stores & checkout flows", "API & third-party integrations", "CMS setup — WordPress, Webflow, Framer", "Ongoing maintenance & support"],
    tags: ["React", "Next.js", "Node.js", "Laravel", "Django", "Framer", "Webflow"],
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
    features: ["Brand identity & logo design", "UI/UX design for web & mobile", "Marketing collateral & pitch decks", "Social media graphics & templates", "Design systems & component libraries"],
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
    features: ["Promotional & product videos", "Short-form social content & reels", "Motion graphics & animated titles", "Corporate & explainer videos", "Captioning, color grading & sound mix"],
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
    features: ["Customer support — chat, email & tickets", "Data entry & data cleaning", "Virtual assistance & scheduling", "Order processing & back-office operations", "Tier-1 technical support"],
    ctaLabel: "Set Up a Support Team",
    visual: <BpoVisual />,
  },
];

type Row = {
  label: string;
  values: [string, string, string, string];
};

export const COLUMNS = ["Web Dev", "Design", "Video", "BPO"];

export const ROWS: Row[] = [
  { label: "Typical timeline", values: ["2–8 weeks", "1–4 weeks", "3–10 days", "Ongoing"] },
  { label: "Engagement style", values: ["Fixed-price or dedicated team", "Fixed-price project", "Per-project or retainer", "Dedicated team"] },
  { label: "Best for", values: ["New builds & platform work", "Brand & interface work", "Marketing & social content", "Recurring ops work"] },
  { label: "What you get", values: ["Source code & docs", "Design system & assets", "Edited exports, all formats", "Trained staff & reporting"] },
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
