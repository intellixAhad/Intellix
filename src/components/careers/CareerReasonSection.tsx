import Badge from "../Badge";
import Reveal from "../reveal";
import CareerReasonCard from "./CareerReasonCard";

export const CareerReasonData = [
  {
    title: "Remote-friendly",
    description: "Work from home or our Dhaka office — whichever gets your best work out of you.",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <rect x={2} y={7} width={20} height={14} rx={2} />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    title: "Real ownership",
    description: "You'll talk to clients and own outcomes early — not just tickets handed down.",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4" />
        <path d="m16.2 7.8 2.9-2.9" />
        <path d="M18 12h4" />
        <path d="m16.2 16.2 2.9 2.9" />
        <path d="M12 18v4" />
        <path d="m4.9 19.1 2.9-2.9" />
        <path d="M2 12h4" />
        <path d="m4.9 4.9 2.9 2.9" />
      </svg>
    ),
  },
  {
    title: "Growth track",
    description: "Clear paths from associate to lead, with mentoring built into how we work.",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20V10" />
        <path d="M18 20V4" />
        <path d="M6 20v-4" />
      </svg>
    ),
  },
  {
    title: "Paid time off",
    description: "Festival holidays plus annual leave, because rested people do better work.",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
];

const CareerReasonSection = () => {
  return (
    <section id="services" className="p-[92px_clamp(20px,5vw,64px)]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-15 gap-2 md:gap-4 w-full max-w-7xl mx-auto flex flex-col items-start justify-center text-center">
          <Reveal y={12}>
            <Badge label="Our Perks" />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="m-0 max-w-2xl font-playfair text-[clamp(2rem,5vw,3rem)] font-bold leading-[1.05] text-white-01 italic">Why people stay</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-base md:text-[20px] leading-[1.7] text-gray-02 max-w-190 font-light tracking-wide text-start">No layers of process between you and the work. Small teams, direct client exposure, and room to grow past your job title.</p>
          </Reveal>
        </div>
        <Reveal delay={0.3}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {CareerReasonData.map(({ title, description, icon }, index) => (
              <CareerReasonCard key={title} number={String(index + 1)} title={title} description={description} icon={icon} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CareerReasonSection;
