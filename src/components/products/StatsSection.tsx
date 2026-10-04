"use client";

import { StaggerGroup, StaggerItem } from "@/components/motions/StaggerReveal";
import FloatingBlob from "@/components/motions/FloatingBlob";
import RollingNumber from "@/components/RollingNumber";

const stats: {
  prefix?: string;
  number: number;
  suffix?: string;
  label: string;
}[] = [
  { prefix: "<", number: 500, suffix: "ms", label: "AI Voice Response Time" },
  { number: 30, suffix: "+", label: "Languages Supported" },
  { number: 22, suffix: "+", label: "Lead Data Sources" },
  { number: 3, suffix: "-in-1", label: "Voice + Chat + Email" },
];

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden border-t border-b border-white/14 py-[70px] px-[clamp(20px,5vw,64px)] z-1">
      <FloatingBlob duration={12} range={16} className="absolute -top-[60px] -left-[60px] w-[340px] h-[340px] rounded-full bg-[radial-gradient(circle_at_40%_40%,rgba(255,255,255,0.11),rgba(255,255,255,0)_65%)] blur-[50px] pointer-events-none" />
      <FloatingBlob duration={14} range={20} className="absolute -bottom-[90px] -right-[70px] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle_at_60%_60%,rgba(255,255,255,0.08),rgba(255,255,255,0)_65%)] blur-[50px] pointer-events-none" />

      <StaggerGroup className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <StaggerItem key={stat.label}>
            <RollingNumber number={stat.number} prefix={stat.prefix} suffix={stat.suffix} />
            <div className="text-[14px] text-gray-02 mt-2 tracking-[0.02em] text-center">{stat.label}</div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
