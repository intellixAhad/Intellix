export type Project = {
  id: number;
  slug: string;
  category: string;
  title: string;
  description: string;
  initials: string; // fallback badge if the image is missing
  image: string; // served from /public, so no "public" in the path
  liveUrl: string;
  detailsHref: string;
};

const projects: Project[] = [
  {
    id: 1,
    slug: "meridian-media-group",
    category: "Media & Entertainment",
    title: "Meridian Media Group",
    description: "A six-video product launch series edited for social — 1.2M+ views to date.",
    initials: "MM",
    image: "https://picsum.photos/seed/meridian-media/800/500",
    liveUrl: "https://meridianmedia.com",
    detailsHref: "/projects/meridian-media-group",
  },
  {
    id: 2,
    slug: "northwind-outdoors",
    category: "Retail & E-commerce",
    title: "Northwind Outdoors",
    description: "Product showcase videos and ad cutdowns that lifted conversion across paid campaigns.",
    initials: "NO",
    image: "https://picsum.photos/seed/northwind-outdoors/800/500",
    liveUrl: "https://northwindoutdoors.com",
    detailsHref: "/projects/northwind-outdoors",
  },
  {
    id: 3,
    slug: "lumen-health",
    category: "Healthcare",
    title: "Lumen Health",
    description: "Patient education animations simplifying complex procedures into short, clear explainers.",
    initials: "LH",
    image: "https://picsum.photos/seed/lumen-health/800/500",
    liveUrl: "https://lumenhealth.com",
    detailsHref: "/projects/lumen-health",
  },
  {
    id: 4,
    slug: "apex-fitness",
    category: "Fitness & Wellness",
    title: "Apex Fitness",
    description: "A 12-week transformation campaign cut into weekly episodes and daily short-form clips.",
    initials: "AF",
    image: "https://picsum.photos/seed/apex-fitness/800/500",
    liveUrl: "https://apexfitness.com",
    detailsHref: "/projects/apex-fitness",
  },
  {
    id: 5,
    slug: "harbor-capital",
    category: "Finance",
    title: "Harbor Capital",
    description: "Investor update videos with motion graphics that turn quarterly data into a clear story.",
    initials: "HC",
    image: "https://picsum.photos/seed/harbor-capital/800/500",
    liveUrl: "https://harborcapital.com",
    detailsHref: "/projects/harbor-capital",
  },
  {
    id: 6,
    slug: "bloom-botanics",
    category: "Lifestyle & Beauty",
    title: "Bloom Botanics",
    description: "Seasonal skincare launch reels shot and edited for Instagram and TikTok.",
    initials: "BB",
    image: "https://picsum.photos/seed/bloom-botanics/800/500",
    liveUrl: "https://bloombotanics.com",
    detailsHref: "/projects/bloom-botanics",
  },
  {
    id: 7,
    slug: "vertex-labs",
    category: "SaaS & Technology",
    title: "Vertex Labs",
    description: "Product walkthrough and feature announcement videos for a B2B software launch.",
    initials: "VL",
    image: "https://picsum.photos/seed/vertex-labs/800/500",
    liveUrl: "https://vertexlabs.io",
    detailsHref: "/projects/vertex-labs",
  },
  {
    id: 8,
    slug: "saffron-table",
    category: "Food & Hospitality",
    title: "Saffron Table",
    description: "Restaurant brand film and menu spotlights that doubled weekend reservations.",
    initials: "ST",
    image: "https://picsum.photos/seed/saffron-table/800/500",
    liveUrl: "https://saffrontable.com",
    detailsHref: "/projects/saffron-table",
  },
  {
    id: 9,
    slug: "skyline-realty",
    category: "Real Estate",
    title: "Skyline Realty",
    description: "Cinematic property tours and agent intro videos edited for listings and social.",
    initials: "SR",
    image: "https://picsum.photos/seed/skyline-realty/800/500",
    liveUrl: "https://skylinerealty.com",
    detailsHref: "/projects/skyline-realty",
  },
  {
    id: 10,
    slug: "evergreen-academy",
    category: "Education",
    title: "Evergreen Academy",
    description: "A 20-lesson course library edited with chapters, captions, and on-screen callouts.",
    initials: "EA",
    image: "/projects/evergreen-academy.jpg",
    liveUrl: "https://picsum.photos/seed/evergreen-academy/800/500",
    detailsHref: "/projects/evergreen-academy",
  },
];


export default projects