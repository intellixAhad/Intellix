import Button from "../common/Button";
import GlassBox from "../common/GlassBox";
import SectionDescription from "../common/SectionDescription";
import SectionTitle from "../common/SectionTitle";
import Reveal from "../motions/reveal";

export default function ServiceCta() {
  return (
    <section className="p-[46px_clamp(20px,5vw,64px)]">
      <GlassBox className="gap-3 md:gap-4 flex flex-col items-center">
        <Reveal delay={0.1}>
          <SectionTitle title="Not sure which service you need?" className="text-center" />
        </Reveal>
        <Reveal delay={0.2}>
          <SectionDescription description="Tell us what you&apos;re building and we&apos;ll point you to the right mix of services — no obligation." className="text-center" />
        </Reveal>
        <Reveal delay={0.3} className="flex flex-wrap justify-center gap-3.5">
          <Button title="Let&apos;s Talk" link="/contact" variant="primary" />
        </Reveal>
      </GlassBox>
    </section>
  );
}
