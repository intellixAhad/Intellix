import Badge from "../common/Badge";
import InteractiveCard from "../common/InteractiveCard";
import SectionDescription from "../common/SectionDescription";
import SectionTitle from "../common/SectionTitle";
import Reveal from "../motions/reveal";
import { StaggerGroup, StaggerItem } from "../motions/StaggerReveal";

const services = [
  {
    number: "01",
    title: "Brand Identity",
    description: "Distinctive visual identities that build trust, create recognition, and make your brand unforgettable.",
  },
  {
    number: "02",
    title: "Digital Product Design",
    description: "User-centered designs for web and mobile products that are intuitive, elegant, and built for real users.",
  },
  {
    number: "03",
    title: "Marketing & Creative",
    description: "Scroll-stopping visuals, campaign assets, and creative design that turn ideas into impact.",
  },
];

export default function DesignServices() {
  return (
    <section className="p-[92px_clamp(20px,5vw,64px)_46px]">
      <div className="max-w-7xl mx-auto flex flex-col gap-6 md:gap-10">
        <div className="flex flex-col items-start gap-2 md:gap-4">
          <Reveal y={12}>
            <Badge label="Our design services" />
          </Reveal>
          <Reveal delay={0.1}>
            <SectionTitle title="Good design is more than how it looks." />
          </Reveal>
          <Reveal delay={0.2}>
            <SectionDescription description="We combine strategy, creativity, and technology to build designs that not only look beautiful but also work hard for your business." />
          </Reveal>
        </div>

        <StaggerGroup className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((s, index) => (
            <StaggerItem key={index} className="h-full">
              <InteractiveCard number={s.number} title={s.title} description={s.description} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
