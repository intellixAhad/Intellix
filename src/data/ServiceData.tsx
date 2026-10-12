import { ReactNode } from "react";
import { AiMlVisual, SoftwareVisual, WebDevelopmentVisual, VoiceAiVisual, CloudDevOpsVisual, VideoMediaVisual, BpoSupportVisual, WebinarVisual } from "@/components/services/ServiceVisuals";

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
    id: "ai-machine-learning",
    index: "01",
    shortLabel: "AI & ML",
    icon: (
      <>
        <path d="M12 8V4" />
        <path d="M8 8V6a4 4 0 0 1 8 0v2" />
        <rect x={5} y={8} width={14} height={12} rx={3} />
        <path d="M9 12h.01M15 12h.01" />
        <path d="M9 16h6" />
        <path d="M5 12H3M21 12h-2" />
        <path d="M8 20v2M16 20v2" />
      </>
    ),
    title: "AI & Machine Learning",
    features: ["Custom AI applications & intelligent agents", "AI workflow automation & process optimization", "Machine learning models & predictive analytics", "LLM integration, RAG & knowledge assistants", "AI-powered data analysis & decision support", "Third-party AI APIs & system integrations"],
    tags: ["Python", "PyTorch", "TensorFlow", "OpenAI API", "LangChain", "LangGraph", "Hugging Face", "n8n"],
    ctaLabel: "Build an AI Solution",
    visual: <AiMlVisual />,
  },

  {
    id: "custom-software-development",
    index: "02",
    shortLabel: "Software",
    icon: (
      <>
        <polyline points="8 6 2 12 8 18" />
        <polyline points="16 6 22 12 16 18" />
        <line x1={14} y1={4} x2={10} y2={20} />
      </>
    ),
    title: "Custom Software Development",
    features: ["Custom business software & SaaS platforms", "Internal dashboards & management systems", "Backend development & scalable APIs", "Database architecture & data management", "Business system integrations & automation", "Software testing, maintenance & optimization"],
    tags: ["TypeScript", "React", "Next.js", "Node.js", "Python", "NestJS", "PostgreSQL", "Supabase", ".NET"],
    ctaLabel: "Build Custom Software",
    visual: <SoftwareVisual />,
  },

  {
    id: "web-development",
    index: "03",
    shortLabel: "Website",
    icon: (
      <>
        <polyline points="8 6 2 12 8 18" />
        <polyline points="16 6 22 12 16 18" />
        <line x1={14} y1={4} x2={10} y2={20} />
      </>
    ),
    title: "Web Development",
    features: [
      "Business websites & high-converting landing pages",
      "Responsive web applications & interactive dashboards",
      "E-commerce stores & checkout experiences",
      "Custom frontend development & backend integrations",
      "CMS development with WordPress, Webflow & Framer",
      "Website performance, SEO foundations & maintenance",
    ],
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "WordPress", "Framer", "Webflow", "Shopify"],
    ctaLabel: "Start a Web Project",
    visual: <WebDevelopmentVisual />,
  },

  {
    id: "ai-call-center-solutions",
    index: "04",
    shortLabel: "Voice AI",
    icon: (
      <>
        <path d="M3 11a9 9 0 0 1 18 0" />
        <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Z" />
        <path d="M21 11h-3a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-5Z" />
        <path d="M16 21h-4" />
        <path d="M12 21a2 2 0 0 1-2-2" />
      </>
    ),
    title: "AI Call Center Solutions",
    features: [
      "AI voice agents for inbound & outbound calls",
      "Automated customer support & FAQ handling",
      "Lead qualification, appointment booking & follow-ups",
      "Natural voice conversations & multilingual support",
      "CRM, helpdesk & telephony integrations",
      "Call analytics, conversation tracking & optimization",
    ],
    tags: ["Verbosa.ai", "OpenAI Realtime API", "Vapi", "Retell AI", "Twilio", "ElevenLabs", "Deepgram", "LiveKit", "WebRTC"],
    ctaLabel: "Build a Voice AI Solution",
    visual: <VoiceAiVisual />,
  },

  {
    id: "cloud-devops",
    index: "05",
    shortLabel: "Cloud & DevOps",
    icon: (
      <>
        <path d="M20 16.2A4.5 4.5 0 0 0 18 7.5h-1.2A6 6 0 1 0 5 15.5" />
        <path d="M8 16h8" />
        <path d="m10 13-3 3 3 3" />
        <path d="m14 13 3 3-3 3" />
      </>
    ),
    title: "Cloud & DevOps",
    features: [
      "Cloud infrastructure setup & management",
      "CI/CD pipelines & automated deployments",
      "Containerization with Docker & Kubernetes",
      "Infrastructure as code & configuration management",
      "Application monitoring, logging & incident support",
      "Cloud security, scalability & performance optimization",
    ],
    tags: ["AWS", "Microsoft Azure", "Google Cloud", "Cloudflare", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Linux", "Grafana"],
    ctaLabel: "Scale Your Infrastructure",
    visual: <CloudDevOpsVisual />,
  },

  {
    id: "video-media-production",
    index: "06",
    shortLabel: "Video Editing",
    icon: (
      <>
        <rect x={2} y={5} width={15} height={14} rx={2} />
        <polygon points="17 9 22 6 22 18 17 15" />
      </>
    ),
    title: "Video & Media Production",
    features: ["Promotional, brand & product videos", "Short-form videos, reels & social content", "Motion graphics & animated titles", "Corporate videos, tutorials & explainers", "Video ads & campaign creative production", "Professional editing, color grading & sound design"],
    tags: ["Premiere Pro", "After Effects", "DaVinci Resolve", "Final Cut Pro", "CapCut", "Blender", "Photoshop", "Descript"],
    ctaLabel: "Start a Video Project",
    visual: <VideoMediaVisual />,
  },

  {
    id: "bpo-business-support",
    index: "07",
    shortLabel: "BPO",
    icon: (
      <>
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z" />
        <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
      </>
    ),
    title: "BPO & Business Support",
    features: [
      "Customer support across chat, email & tickets",
      "Data entry, data processing & data quality checks",
      "Virtual assistance, scheduling & administrative support",
      "CRM management, lead handling & data enrichment",
      "Order processing & back-office operations",
      "Workflow automation & ongoing operational support",
    ],
    tags: ["Salesforce", "HubSpot", "Zendesk", "Freshdesk", "Google Workspace", "Microsoft 365", "Excel", "Airtable", "Make", "n8n"],
    ctaLabel: "Build Your Support Team",
    visual: <BpoSupportVisual />,
  },

  {
    id: "webinar-solutions",
    index: "08",
    shortLabel: "Webinars",
    icon: (
      <>
        <rect x={3} y={3} width={18} height={13} rx={2} />
        <path d="M8 21h8" />
        <path d="M12 16v5" />
        <path d="m10 7 5 2.5-5 2.5V7Z" />
      </>
    ),
    title: "Webinar Solutions",
    features: [
      "Webinar setup, configuration & event management",
      "Live streaming & virtual event production",
      "Speaker coordination, rehearsals & technical checks",
      "Registration flows, reminders & attendee communication",
      "Audience interaction, polls & Q&A management",
      "Recording, post-event editing & content repurposing",
    ],
    tags: ["Zoom Webinars", "Microsoft Teams", "Webex", "Livestorm", "StreamYard", "OBS Studio", "vMix", "Restream", "Slido", "Eventbrite"],
    ctaLabel: "Plan Your Webinar",
    visual: <WebinarVisual />,
  },
];

type Row = {
  label: string;
  values: [string, string, string, string, string, string, string, string];
};

export const COLUMNS = ["AI & ML", "Software", "Web Dev", "Voice AI", "Cloud & DevOps", "Video", "BPO", "Webinars"];

export const ROWS: Row[] = [
  {
    label: "Typical timeline",
    values: ["2–8+ weeks", "4–16+ weeks", "1–8 weeks", "2–8+ weeks", "1–6+ weeks", "3–10 business days", "1–4 weeks to onboard", "3–10 days to prepare"],
  },
  {
    label: "Engagement style",
    values: ["Project or dedicated team", "Fixed-price or dedicated team", "Fixed-price or retainer", "Pilot, project or ongoing service", "Project or managed service", "Per-project or retainer", "Dedicated team or monthly plan", "Per-event or ongoing support"],
  },
  {
    label: "Best for",
    values: [
      "AI adoption & intelligent automation",
      "Custom platforms & business systems",
      "Websites, web apps & e-commerce",
      "Automated customer calls & lead handling",
      "Reliable infrastructure & deployments",
      "Marketing & branded content",
      "Recurring operational workloads",
      "Virtual events & online training",
    ],
  },
  {
    label: "Typical scope",
    values: [
      "AI agents, ML models & data workflows",
      "SaaS, APIs & internal applications",
      "Business sites, landing pages & stores",
      "Inbound/outbound voice agents & integrations",
      "Cloud setup, CI/CD & infrastructure",
      "Editing, motion graphics & video ads",
      "Customer support & back-office operations",
      "Webinar setup, production & coordination",
    ],
  },
  {
    label: "What you get",
    values: [
      "Integrated AI solution & documentation",
      "Working software, source code & docs",
      "Responsive website & deployment",
      "Configured voice agent & call workflows",
      "Configured infrastructure & deployment pipelines",
      "Edited videos & platform-ready exports",
      "Trained team & operational reporting",
      "Event delivery, recordings & support",
    ],
  },
  {
    label: "Key deliverables",
    values: [
      "Models, agents, APIs & evaluation workflows",
      "Application, database & integrations",
      "Pages, CMS & functional components",
      "Call flows, prompts & system integrations",
      "Infrastructure code, monitoring & CI/CD",
      "Final edits, captions & creative assets",
      "Defined workflows, service processes & reports",
      "Live sessions, recordings & attendee support",
    ],
  },
  {
    label: "Ongoing support",
    values: [
      "Model monitoring & improvements",
      "Bug fixes, updates & new features",
      "Maintenance, updates & optimization",
      "Call monitoring & agent optimization",
      "Monitoring, maintenance & incident response",
      "Content updates & recurring edits",
      "Quality checks & performance reporting",
      "Event support & technical assistance",
    ],
  },
  {
    label: "Collaboration",
    values: [
      "Milestone reviews & model evaluation",
      "Sprint-based development & demos",
      "Design reviews & staging previews",
      "Call-flow reviews & test calls",
      "Infrastructure reviews & deployment checks",
      "Feedback rounds & creative approvals",
      "Defined SLAs & regular reporting",
      "Pre-event rehearsal & live coordination",
    ],
  },
  {
    label: "Ideal clients",
    values: [
      "Teams adopting AI or data-driven workflows",
      "Startups, SMEs & growing enterprises",
      "Businesses building their digital presence",
      "Sales teams & customer-facing businesses",
      "Growing teams & cloud-based businesses",
      "Brands, creators & marketing teams",
      "Businesses needing reliable operational support",
      "Companies, educators & event organizers",
    ],
  },
  {
    label: "Success focus",
    values: [
      "Accuracy, usefulness & measurable efficiency",
      "Reliability, usability & scalability",
      "Performance, experience & conversions",
      "Call quality, resolution & lead outcomes",
      "Uptime, security & deployment efficiency",
      "Content quality & audience engagement",
      "Quality, turnaround time & productivity",
      "Smooth delivery & attendee experience",
    ],
  },
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
