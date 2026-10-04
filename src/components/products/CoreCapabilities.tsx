"use client";

import CapabilityCard from "@/components/products/CapabilityCard";
import FadeIn from "@/components/motions/FadeIn";
import { StaggerGroup, StaggerItem } from "@/components/motions/StaggerReveal";

const capabilities: {
  index: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}[] = [
  {
    index: "01",
    title: "AI Voice Calls",
    description:
      "Sub-500ms AI voice calls in 30+ languages, built on Verbosa's own full-stack voice infrastructure — not a third-party API.",
    icon: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.63 2.63a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.45-1.2a2 2 0 0 1 2.11-.45c.85.3 1.73.51 2.63.63A2 2 0 0 1 22 16.92z" />
    ),
  },
  {
    index: "02",
    title: "Lead Generation",
    description:
      "Pulls from 22+ data sources to find and qualify prospects that match your ideal customer profile automatically.",
    icon: (
      <>
        <circle cx={11} cy={11} r={8} />
        <line x1={21} y1={21} x2={16.65} y2={16.65} />
      </>
    ),
  },
  {
    index: "03",
    title: "Email Sequences",
    description:
      "Automated, personalized outbound email campaigns that follow up on calls and chats without manual work.",
    icon: (
      <>
        <rect x={2} y={4} width={20} height={16} rx={2} />
        <path d="M22 6l-10 7L2 6" />
      </>
    ),
  },
  {
    index: "04",
    title: "Omnichannel Chat",
    description:
      "Auto-replies on WhatsApp, Instagram, and Messenger — keeping conversations moving wherever prospects are.",
    icon: (
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    ),
  },
];

export default function CoreCapabilities() {
  return (
    <section className="section-pad relative overflow-hidden z-1 pt-[110px] px-[clamp(20px,5vw,64px)] pb-[100px]">
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(115deg,rgba(255,255,255,0.035)_0px,rgba(255,255,255,0.035)_1px,transparent_1px,transparent_64px)]"
      />

      <div className="relative max-w-[1240px] mx-auto">
        <FadeIn className="max-w-[640px] mb-14 text-left">
          <div className="flex items-center gap-[9px] mb-3.5">
            <span className="w-1.5 h-1.5 bg-white inline-block shrink-0" />
            <p className="font-jetbrain text-xs tracking-[.08em] font-semibold text-[#A6A6A2] uppercase m-0">
              Core Capabilities
            </p>
          </div>
          <h2 className="font-fraunces text-4xl font-bold tracking-[-0.01em] text-[#F5F5F2] m-0">
            Everything an outbound sales team needs.
          </h2>
        </FadeIn>

        <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {capabilities.map((cap) => (
            <StaggerItem key={cap.index} className="h-full">
              <CapabilityCard
                index={cap.index}
                icon={cap.icon}
                title={cap.title}
                description={cap.description}
              />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
