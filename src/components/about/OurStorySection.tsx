"use client";

import InfoRow from "@/components/about/InfoRow";
import FadeIn from "@/components/motions/FadeIn";
import { StaggerGroup, StaggerItem } from "@/components/motions/StaggerReveal";
import Badge from "../Badge";

const CALENDAR_ICON = (
  <>
    <rect x={3} y={4} width={18} height={18} rx={0} />
    <line x1={16} y1={2} x2={16} y2={6} />
    <line x1={8} y1={2} x2={8} y2={6} />
    <line x1={3} y1={10} x2={21} y2={10} />
  </>
);

const PIN_ICON = (
  <>
    <path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z" />
    <circle cx={12} cy={10} r={3} />
  </>
);

const TEAM_ICON = (
  <>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx={9} cy={7} r={4} />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </>
);

const TARGET_ICON = (
  <>
    <circle cx={12} cy={12} r={9} />
    <circle cx={12} cy={12} r={5} />
    <circle cx={12} cy={12} r={1} />
  </>
);

const facts = [
  { icon: CALENDAR_ICON, label: "Founded", value: "2021" },
  { icon: PIN_ICON, label: "Headquarters", value: "Dhaka, Bangladesh" },
  { icon: TEAM_ICON, label: "Team Size", value: "30+ Specialists" },
  { icon: TARGET_ICON, label: "Focus", value: "AI Voice & Outbound" },
];

export default function OurStorySection() {
  return (
    <section className="section-pad relative z-1 px-[clamp(20px,5vw,64px)] py-[110px]">
      <div className="relative max-w-360 mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-14 items-start">
        <FadeIn className="max-w-[560px]">
          <Badge label="Our Story"/>
          <h2 className="font-fraunces text-[34px] font-bold tracking-[-0.01em] text-[#F5F5F2] mb-5">
            Built by engineers who got tired of outbound that doesn&apos;t scale.
          </h2>
          <p className="text-sm leading-[1.7] text-[#A6A6A2] mb-4">
            Intellix started as a small software studio in Dhaka, building
            automation tools for teams drowning in manual outreach. We kept
            running into the same wall: every sales and support team wanted
            to sound human at scale, and nothing on the market did that well.
          </p>
          <p className="text-sm leading-[1.7] text-[#A6A6A2]">
            That problem became Verbosa.ai — our AI voice product — and it
            is now the core of everything we build. Today we are a
            distributed team shipping voice, chat, and outbound
            infrastructure for companies across the US, MENA, and South
            Asia.
          </p>
        </FadeIn>

        <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 gap-5 p-7 border border-white/14 bg-[#141414] rounded-none">
          {facts.map((fact) => (
            <StaggerItem key={fact.label}>
              <InfoRow icon={fact.icon} label={fact.label} value={fact.value} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
