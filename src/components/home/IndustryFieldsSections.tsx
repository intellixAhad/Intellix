import IndustryCard from "./IndustryCard";
import { IndustryData } from "@/data/HomePageData";
import SectionTitle from "../common/SectionTitle";
import Badge from "../common/Badge";
import Reveal from "../motions/reveal";
import { StaggerGroup, StaggerItem } from "../motions/StaggerReveal";

const IndustryFieldsSections = () => {
  return (
    <section className="p-[46px_clamp(20px,5vw,64px)_46px]">
      <div className="max-w-7xl mx-auto flex flex-col gap-6 md:gap-10">
        <div className="flex flex-col items-start gap-2 md:gap-4">
          <Reveal y={12}>
            <Badge label="industries we support" />
          </Reveal>
          <Reveal delay={0.1}>
            <SectionTitle title="Built for founders and teams across every sector." />
          </Reveal>
        </div>

        <StaggerGroup className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {IndustryData.map(({ title, icon }, index) => (
            <StaggerItem key={index} className="h-full">
              <IndustryCard title={title} icon={icon} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
};

export default IndustryFieldsSections;
