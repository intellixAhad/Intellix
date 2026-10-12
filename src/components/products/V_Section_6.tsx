"use client";

import AudienceChip from "@/components/products/AudienceChip";
import { StaggerGroup, StaggerItem } from "@/components/motions/StaggerReveal";
import Badge from "../common/Badge";
import Reveal from "../motions/reveal";
import SectionTitle from "../common/SectionTitle";

const PHONE_ICON = (
  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.63 2.63a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.45-1.2a2 2 0 0 1 2.11-.45c.85.3 1.73.51 2.63.63A2 2 0 0 1 22 16.92z" />
);

const PEOPLE_ICON = (
  <>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx={12} cy={7} r={4} />
  </>
);

const SEARCH_ICON = (
  <>
    <circle cx={11} cy={11} r={8} />
    <line x1={21} y1={21} x2={16.65} y2={16.65} />
  </>
);

const audiences = [
  { label: "SDRs & Outbound Teams", icon: PHONE_ICON },
  { label: "B2B Sales Orgs", icon: PEOPLE_ICON },
  { label: "Contact Centers", icon: PHONE_ICON },
  { label: "Cold Outreach Teams", icon: SEARCH_ICON },
];

export default function V_Section_6() {
  return (
    <section className="p-[46px_clamp(20px,5vw,64px)_46px]">
      <div className="max-w-7xl mx-auto flex flex-col gap-6 md:gap-10">
        <div className="flex flex-col items-start gap-2 md:gap-4">
          <Reveal y={12}>
            <Badge label="Who it's for" />
          </Reveal>
          <Reveal delay={0.1}>
            <SectionTitle title="Built for teams that live in outbound." />
          </Reveal>
        </div>

        <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {audiences.map((audience) => (
            <StaggerItem key={audience.label} className="h-full">
              <AudienceChip icon={audience.icon} label={audience.label} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
