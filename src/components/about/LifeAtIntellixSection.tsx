"use client";

import WorkTag from "@/components/about/WorkTag";
import FadeIn from "@/components/motions/FadeIn";
import { StaggerGroup, StaggerItem } from "@/components/motions/StaggerReveal";
import FloatingBlob from "@/components/motions/FloatingBlob";
import Badge from "../Badge";

const workTags = [
  "Remote-Friendly",
  "Async by Default",
  "Flexible Hours",
  "Learning Budget",
  "Health Coverage",
  "Team Offsites",
  "Equipment Provided",
  "Performance Bonuses",
];

export default function LifeAtIntellixSection() {
  return (
    <section className="section-pad relative z-1 overflow-hidden px-[clamp(20px,5vw,64px)] py-[110px]">
      <FloatingBlob className="absolute -top-10 -left-10 w-[320px] h-[320px] bg-white/5 blur-3xl" />
      <FloatingBlob
        className="absolute -bottom-16 -right-10 w-[280px] h-[280px] bg-white/5 blur-3xl"
        duration={13}
      />

      <div className="relative max-w-360 mx-auto">
        <FadeIn className="max-w-[640px] mb-10">
          <Badge label="Life at Intellix"/>
          <h2 className="font-fraunces text-[34px] font-bold tracking-[-0.01em] text-[#F5F5F2] m-0">
            How we work, day to day.
          </h2>
        </FadeIn>

        <StaggerGroup className="flex flex-wrap gap-3">
          {workTags.map((tag) => (
            <StaggerItem key={tag}>
              <WorkTag label={tag} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
