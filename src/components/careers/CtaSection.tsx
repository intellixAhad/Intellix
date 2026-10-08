import Button from "../common/Button";
import GlassBox from "../common/GlassBox";
import SectionDescription from "../common/SectionDescription";
import SectionTitle from "../common/SectionTitle";
import Reveal from "../motions/reveal";

export default function CtaSection() {
  return (
    <section className="p-[46px_clamp(20px,5vw,64px)_92px]">
      <GlassBox className="gap-3 md:gap-4 flex flex-col items-center">
        <Reveal delay={0.1}>
          <SectionTitle title="Don't see the right role?" className="text-center" />
        </Reveal>
        <Reveal delay={0.2}>
          <SectionDescription description="We're growing quickly. Reach out anyway — tell us what you're good at and we'll keep you in mind." className="text-center" />
        </Reveal>
        <Reveal delay={0.3} className="flex flex-wrap justify-center gap-3.5">
          <Button title="Get in Touch" link="/contact" variant="primary" />
          <Button title="Meet the Team" link="/about" variant="secondary" />
        </Reveal>
      </GlassBox>
    </section>
  );
}
