import Badge from "../common/Badge";
import Reveal from "../motions/reveal";
import InteractiveCard from "../common/InteractiveCard";
import { hiringStepsData } from "@/data/CareerData";
import SectionTitle from "../common/SectionTitle";
import SectionDescription from "../common/SectionDescription";

const HiringStepsSection = () => {
  return (
    <section id="hiringprocess" className="p-[46px_clamp(20px,5vw,64px)]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 md:mb-10 gap-3 md:gap-4 flex flex-col items-start">
          <Reveal y={12}>
            <Badge label="Our Perks" />
          </Reveal>
          <Reveal delay={0.1}>
            <SectionTitle title="Why people stay" />
          </Reveal>
          <Reveal delay={0.2}>
            <SectionDescription description="No layers of process between you and the work. Small teams, direct client exposure, and room to grow past your job title." />
          </Reveal>
        </div>
        <Reveal delay={0.3} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {hiringStepsData.map(({ title, description }, index) => (
            <InteractiveCard key={index} title={title} description={description} />
          ))}
        </Reveal>
      </div>
    </section>
  );
};

export default HiringStepsSection;
