"use client";

import CapabilityCard from "@/components/products/CapabilityCard";
import { StaggerGroup, StaggerItem } from "@/components/motions/StaggerReveal";
import { v_capabilities } from "@/data/ProductData";
import Reveal from "../motions/reveal";
import SectionTitle from "../common/SectionTitle";
import Badge from "../common/Badge";

export default function V_Section_3() {
  return (
    <section className="relative overflow-hidden z-1 p-[46px_clamp(20px,5vw,64px)]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(115deg,rgba(255,255,255,0.035)_0px,rgba(255,255,255,0.035)_1px,transparent_1px,transparent_64px)]" />
      <div className="relative max-w-7xl mx-auto flex flex-col gap-6 md:gap-10">
        <div className="flex flex-col items-start gap-2 md:gap-4">
          <Reveal y={12}>
            <Badge label="core capabilities" />
          </Reveal>
          <Reveal delay={0.1}>
            <SectionTitle title="Everything an outbound sales team needs." />
          </Reveal>
        </div>

        <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {v_capabilities.map((cap) => (
            <StaggerItem key={cap.index} className="h-full">
              <CapabilityCard index={cap.index} icon={cap.icon} title={cap.title} description={cap.description} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
