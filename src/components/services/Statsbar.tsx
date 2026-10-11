import RollingNumber from "../common/RollingNumber";
import Reveal from "../motions/reveal";
import { StaggerGroup, StaggerItem } from "../motions/StaggerReveal";
import { StatisticsData } from "@/data/ServiceData";

export default function StatsBar() {
  return (
    <section className="p-[92px_clamp(20px,5vw,64px)_46px]">
      <Reveal delay={0.1} className="mx-auto max-w-7xl">
        <StaggerGroup className="grid grid-cols-2 divide-x divide-y divide-white/14 border border-white/14 bg-white/3 backdrop-blur-md lg:grid-cols-4 lg:divide-y-0 lg:divide-x">
          {StatisticsData.map((stat) => (
            <StaggerItem key={stat.label} className="px-4 py-6 text-center sm:px-6 sm:py-8">
              <RollingNumber suffix={stat.suffix} number={stat.value} prefix={stat.prefix} />
              <div className="font-jetbrain text-[11px] uppercase tracking-wider text-gray-00">{stat.label}</div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Reveal>
    </section>
  );
}
