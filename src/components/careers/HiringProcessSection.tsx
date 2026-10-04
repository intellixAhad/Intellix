import Badge from "../Badge";
import Reveal from "../reveal";
import CareerReasonCard from "./CareerReasonCard";
import HiringCard from "./HiringCard";

export const HiringProcessData = [
  {
    title: "Apply",
    description: "Send your CV and a couple of work samples through our page.",
  },
  {
    title: "Intro Call",
    description: "A short call to talk through your background and what you are looking for.",
  },
  {
    title: "Skills round",
    description: "A practical exercise close to real work - never unpaid client-facing tasks.",
  },
  {
    title: "Offer",
    description: "We move fast once there's match, with a clear offer and start date",
  },
];

const HiringProcessSection = () => {
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
            {HiringProcessData.map(({ title, description }, index) => (
              <CareerReasonCard key={index} number={String(index + 1)} title={title} description={description} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default HiringProcessSection;
