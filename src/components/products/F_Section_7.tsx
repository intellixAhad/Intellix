"use client";

import Badge from "../common/Badge";
import SectionTitle from "../common/SectionTitle";
import Reveal from "../motions/reveal";
import { StaggerGroup, StaggerItem } from "../motions/StaggerReveal";
import { Landmark, Shield, Eye, Building2 } from "lucide-react";
import HoverLift from "../motions/HoverLift";

const audiences = [
  { label: "Government ministries", icon: Landmark },
  { label: "Defense & military", icon: Shield },
  { label: "Intelligence agencies", icon: Eye },
  { label: "Intelligence agencies", icon: Building2 },
];

const F_Section_7 = () => {
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
          {audiences.map((audience) => {
            const Icon = audience.icon;

            return (
              <StaggerItem key={audience.label} className="h-full">
                <HoverLift lift={3} className="h-full">
                  <div className="h-full border border-white/14 bg-[#141414] rounded-none py-6.5 px-4 text-center">
                    <div className="text-[#F5F5F2] mx-auto mb-3 w-[26px] h-[26px]">
                      <Icon />
                    </div>
                    <span className="text-[13.5px] font-semibold text-[#A6A6A2]">{audience.label}</span>
                  </div>
                </HoverLift>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
};

export default F_Section_7;
