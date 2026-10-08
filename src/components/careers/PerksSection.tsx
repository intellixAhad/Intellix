import Badge from "@/components/common/Badge";
import Reveal from "@/components/motions/reveal";
import InteractiveCard from "@/components/common/InteractiveCard";
import { PerksData } from "@/data/CareerData";
import SectionTitle from "../common/SectionTitle";
import SectionDescription from "../common/SectionDescription";

const CareerReasonSection = () => {
  return (
    <section id="careerperks" className="p-[92px_clamp(20px,5vw,64px)_46px]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 gap-2 md:gap-4 flex flex-col items-start">
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
        <Reveal delay={0.3}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {PerksData.map(({ title, description, icon }, index) => (
              <InteractiveCard key={title} icon={icon} number={String(index + 1)} title={title} description={description} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CareerReasonSection;
