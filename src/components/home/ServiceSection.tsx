import Reveal from "../motions/reveal";
import Badge from "../common/Badge";
import SectionTitle from "../common/SectionTitle";
import InteractiveCard from "../common/InteractiveCard";
import Button from "../common/Button";
import { servicesData } from "@/data/HomePageData";
import { StaggerGroup, StaggerItem } from "../motions/StaggerReveal";

const ServiceSection = () => {
  return (
    <section id="services" className="p-[92px_clamp(20px,5vw,64px)_46px]">
      <div className="max-w-7xl mx-auto flex flex-col gap-6 md:gap-10">
        <div className="flex flex-col items-start gap-2 md:gap-4">
          <Reveal y={12}>
            <Badge label="what we do" />
          </Reveal>
          <Reveal delay={0.1}>
            <SectionTitle title="Everything you need to launch, look great, and scale operations." />
          </Reveal>
        </div>
        <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {servicesData.map(({ title, description, icon }, index) => (
            <StaggerItem key={index} className="h-full">
              <InteractiveCard icon={icon} number={String(index + 1)} title={title} description={description} />
            </StaggerItem>
          ))}
        </StaggerGroup>
        <Reveal delay={0.3} className="flex justify-center">
          <Button title="Learn More" link="/services" variant="primary" />
        </Reveal>
      </div>
    </section>
  );
};

export default ServiceSection;
