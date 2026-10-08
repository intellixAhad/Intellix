import Reveal from "../motions/reveal";
import Badge from "../common/Badge";
import Orb from "../common/Orb";
import { FAQS } from "@/data/HomePageData";
import ContactFaq from "../contact/ContactFaq";
import SectionTitle from "../common/SectionTitle";
import SectionDescription from "../common/SectionDescription";
import { StaggerGroup } from "../motions/StaggerReveal";

const FaqSection = () => {
  return (
    <section id="faq" className="p-[46px_clamp(20px,5vw,64px)]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-8 lg:grid-cols-[.85fr_1.15fr] lg:gap-14">
        <div className="flex flex-col gap-2 md:gap-4 items-start">
          <Reveal y={12}>
            <Badge label="FAQ" />
          </Reveal>
          <Reveal delay={0.1}>
            <SectionTitle title="Questions, answered."/>
          </Reveal>
          <Reveal delay={0.2}>
            <SectionDescription description="Everything you might want to know before starting a project with us. Can&apos;t find it here?"/>
          </Reveal>
          <Reveal delay={0.3}>
            <Orb width={320} height={320} />
          </Reveal>
        </div>
        <StaggerGroup className="w-full">
          <ContactFaq items={FAQS} />
        </StaggerGroup>
      </div>
    </section>
  );
};

export default FaqSection;
