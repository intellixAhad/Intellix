import Button from "../common/Button";
import GlassBox from "../common/GlassBox";
import SectionDescription from "../common/SectionDescription";
import SectionTitle from "../common/SectionTitle";
import Reveal from "../motions/reveal";

export default function ServiceCta() {
  return (
    <section className="p-[46px_clamp(20px,5vw,64px)_92px]">
      <GlassBox className="flex flex-col items-center gap-2 md:gap-4">
        <Reveal delay={0.1}>
          <SectionTitle title="Not sure which service you need?" className="text-center" />
        </Reveal>
        <Reveal delay={0.2}>
          <SectionDescription description="Tell us what you're building and we'll point you to the right mix of services — no obligation." className="text-center" long={1000} />
        </Reveal>
        <Reveal delay={0.3}>
          <Button title="Let's Talk" link="/contact" variant="primary" />
        </Reveal>
      </GlassBox>
    </section>
  );
}
