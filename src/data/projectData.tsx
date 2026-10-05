export type Project = {
  id: number;
  slug: string;
  category: string;
  title: string;
  description: string;
  image: string;
  liveUrl: string;
  detailsHref: string;
};

const projects: Project[] = [
  {
    id: 1,
    slug: "alex-ai",
    category: "Store Front",
    title: "Alex - AI Recruiter for Hiring Great People",
    description: "Alex is the AI recruiter that interviews, screens, and schedules every candidate, so your team hires great people faster, without adding TA headcount.",
    image: "/projects/alex-ai.png",
    liveUrl: "https://www.alex.com/",
    detailsHref: "#",
  },
  {
    id: 2,
    slug: "verdira",
    category: "Landing Page",
    title: "Verdira - A Long-Term Home for Ophthalmology Practices",
    description: "We buy ophthalmology practices from retiring physicians. We keep your staff, bring in a successor doctor, and make sure your patients are taken care of.",
    image: "/projects/verdira.png",
    liveUrl: "https://verdira.com/",
    detailsHref: "#",
  },
  {
    id: 3,
    slug: "sore",
    category: "Landing Page",
    title: "SORE - Optimize your lifestyle at Hamburg's exclusive health club.",
    description:
      "Discover the SORE Health Club in Hamburg, an exclusive fitness and wellness destination featuring personalized training, nutritional counseling, and a unique community experience. Membership is limited, with only 500 spots available. Secure your place on the waiting list now and optimize your lifestyle amidst stylish exclusivity.",
    image: "/projects/sore.png",
    liveUrl: "https://ersteinweisung.sore-health-club.com/",
    detailsHref: "#",
  },
  {
    id: 4,
    slug: "dpp-connect",
    category: "Landing Page",
    title: "DPP Connect - Trusted DPP Placements for Independent Prescribing Training",
    description: "Find, reserve, and connect with vetted Designated Prescribing Practitioners across the UK. Quality-assured support, transparent pricing, and guidance throughout your IP training journey.",
    image: "/projects/dpp-connect.png",
    liveUrl: "https://www.dppconnect.co.uk/",
    detailsHref: "#",
  },
  {
    id: 5,
    slug: "laser-me",
    category: "Landing Page",
    title: "Laser.me - Laser Eye Surgery Treatment & Procedure",
    description: "Laser eye surgery for €999 per eye. See clearly without glasses thanks to modern laser technology at Laser.me",
    image: "/projects/laser-me.png",
    liveUrl: "https://laser.me/",
    detailsHref: "#",
  },
  {
    id: 6,
    slug: "performance-plus",
    category: "Landing Page",
    title: "Performance PLUS | Cardiac Performance Diagnostics",
    description: "Cardiological performance diagnostics for athletes. Exercise ECG, echocardiography, and a personal consultation with a doctor. One-time fee of €199. Request an appointment now.",
    image: "/projects/performance-plus.png",
    liveUrl: "https://performanceplus.framer.website/",
    detailsHref: "#",
  },
];

export default projects;
