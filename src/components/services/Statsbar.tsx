import Reveal from "../reveal";

interface Stat {
  value: string;
  label: string;
}

// Placeholder numbers — swap in real figures.
const STATS: Stat[] = [
  { value: "5+", label: "Years active" },
  { value: "80+", label: "Projects shipped" },
  { value: "30+", label: "Clients served" },
  { value: "<24h", label: "Avg. response time" },
];

export default function StatsBar() {
  return (
    <section className="mx-auto max-w-[1240px] px-[clamp(20px,5vw,64px)] pb-14 sm:pb-16">
      <Reveal>
        <div className="grid grid-cols-2 divide-y divide-white/14 border border-white/14 bg-[#141414] sm:grid-cols-4 sm:divide-y-0 sm:divide-x">
          {STATS.map((stat) => (
            <div key={stat.label} className="px-4 py-6 text-center sm:px-6 sm:py-8">
              <div className="mb-1.5 font-fraunces text-[28px] font-semibold text-white-01 sm:text-[32px]">{stat.value}</div>
              <div className="font-jetbrain text-[11px] uppercase tracking-[.05em] text-gray-00">{stat.label}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}