"use client";

import ValueCard from "@/components/about/ValueCard";
import FadeIn from "@/components/motions/FadeIn";
import { StaggerGroup, StaggerItem } from "@/components/motions/StaggerReveal";
import Badge from "../Badge";

const COMPASS_ICON = (
  <>
    <circle cx={12} cy={12} r={10} />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </>
);

const BOLT_ICON = (
  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
);

const SHIELD_ICON = (
  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
);

const HANDSHAKE_ICON = (
  <>
    <path d="M22 11l-5-5-2 2-3-3-7 7 3 3-2 2 5 5 2-2 3 3 7-7-3-3z" />
  </>
);

const values = [
  {
    icon: COMPASS_ICON,
    title: "Client-First Direction",
    description:
      "We build toward outcomes our clients can measure, not features that look good in a demo.",
  },
  {
    icon: BOLT_ICON,
    title: "Move With Speed",
    description:
      "Small, senior teams ship fast. We favor shipping a working version this week over a perfect one next quarter.",
  },
  {
    icon: SHIELD_ICON,
    title: "Reliability by Default",
    description:
      "Voice and outbound infrastructure has to work every time. We engineer for the failure cases first.",
  },
  {
    icon: HANDSHAKE_ICON,
    title: "Long-Term Partnership",
    description:
      "We work like an extension of our clients' teams, not a vendor that disappears after launch.",
  },
];

export default function ValuesSection() {
  return (
    <section className="section-pad relative z-1 px-[clamp(20px,5vw,64px)] pb-[110px]">
      <div className="relative max-w-360 mx-auto">
        <FadeIn className="max-w-[640px] mb-12">
          <Badge label="Mission & Values"/>
          <h2 className="font-fraunces text-[34px] font-bold tracking-[-0.01em] text-[#F5F5F2] m-0">
            What drives how we build.
          </h2>
        </FadeIn>

        <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {values.map((value) => (
            <StaggerItem key={value.title} className="h-full">
              <ValueCard
                icon={value.icon}
                title={value.title}
                description={value.description}
              />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
