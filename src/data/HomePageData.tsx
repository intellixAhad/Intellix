import { type FaqItem } from "@/components/contact/ContactFaq";

export const servicesData = [
  {
    title: "Web Development",
    description: "Custom websites, web apps, and platforms built with modern frameworks — from marketing sites to full-stack products.",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <polyline points="8 6 2 12 8 18" />
        <polyline points="16 6 22 12 16 18" />
      </svg>
    ),
  },
  {
    title: "Graphic Design",
    description: "Brand identities, UI design, and visual assets that make your product and marketing instantly recognizable.",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
  },
  {
    title: "Video Editing",
    description: "Promotional videos, social content, and motion graphics edited to hold attention and drive engagement.",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="15" height="14" rx="2" />
        <polygon points="17 9 22 6 22 18 17 15" />
      </svg>
    ),
  },
  {
    title: "BPO Services",
    description: "Reliable back-office and support teams handling operations so you can focus on growing your core business.",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
      </svg>
    ),
  },
];

export const IndustryData = [
  {
    title: "Startups",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2c2 2 3 5 3 8 0 2-.5 4-1 5l-2 3-2-3c-.5-1-1-3-1-5 0-3 1-6 3-8z"></path>
        <circle cx="12" cy="9" r="1.4"></circle>
        <path d="M8 16l-3 3 1 3 3-1"></path>
        <path d="M16 16l3 3-1 3-3-1"></path>
      </svg>
    ),
  },
  {
    title: "E-commerce",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 8h12l-1 12H7L6 8z"></path>
        <path d="M9 8V6a3 3 0 0 1 6 0v2"></path>
      </svg>
    ),
  },
  {
    title: "Real Estate",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 22h18"></path>
        <path d="M6 22V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v18"></path>
        <line x1="9" y1="9" x2="9.01" y2="9"></line>
        <line x1="14" y1="9" x2="14.01" y2="9"></line>
        <line x1="9" y1="13" x2="9.01" y2="13"></line>
        <line x1="14" y1="13" x2="14.01" y2="13"></line>
        <line x1="9" y1="17" x2="9.01" y2="17"></line>
        <line x1="14" y1="17" x2="14.01" y2="17"></line>
      </svg>
    ),
  },
  {
    title: "Media & Entertainment",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 8l1-3 4 1-1 3z"></path>
        <path d="M8 6l1-3 4 1-1 3z"></path>
        <rect x="3" y="8" width="18" height="12" rx="1"></rect>
      </svg>
    ),
  },
  {
    title: "Healthcare",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9"></circle>
        <line x1="12" y1="8" x2="12" y2="16"></line>
        <line x1="8" y1="12" x2="16" y2="12"></line>
      </svg>
    ),
  },
  {
    title: "Finance",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="12" width="4" height="9"></rect>
        <rect x="10" y="6" width="4" height="15"></rect>
        <rect x="17" y="9" width="4" height="12"></rect>
      </svg>
    ),
  },
];

export const FAQS: FaqItem[] = [
  {
    q: "What services does Intellix provide?",
    a: "We offer web development, graphic design, video editing, and BPO (back-office) services, along with our own in-house products like Verbosa.ai.",
  },
  {
    q: "Do you work with startups as well as established businesses?",
    a: "Yes. We work with early-stage startups, growing businesses, and established companies — tailoring our process and team size to fit your budget and timeline.",
  },
  {
    q: "What does your project process look like?",
    a: "We follow four stages: Discover, Design, Build, and Launch &amp; Support — with regular check-ins so you always know where your project stands.",
  },
  {
    q: "Do you work with clients outside Bangladesh?",
    a: "Yes. We're a remote-first team based in Dhaka, and we regularly work with clients around the world over video calls, chat, and shared project boards.",
  },
  {
    q: "How do I get a quote for my project?",
    a: "Fill out the contact form below with a bit of detail about your project, and our team will get back to you with next steps and a proposal.",
  },
];

export const IntellixDeteails = [
  {
    label: "EMAIL",
    value: "hello@intellixsolutions.co",
    icon: (
      <>
        <path d="M22 6c0 1.1-.9 2-2 2H4a2 2 0 0 1-2-2" />
        <path d="M2 6l10 7L22 6" />
        <rect x={2} y={4} width={20} height={16} rx={0} />
      </>
    ),
  },
  {
    label: "PHONE",
    value: "01973336001",
    icon: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    ),
  },
  {
    label: "LOCATION",
    value: "Dhaka, Bangladesh",
    icon: (
      <>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx={12} cy={10} r={3} />
      </>
    ),
  },
  {
    label: "RESPONSE TIME",
    value: "Within 1 business day",
    icon: (
      <>
        <circle cx={12} cy={12} r={10} />
        <polyline points="12 6 12 12 16 14" />
      </>
    ),
  },
];
