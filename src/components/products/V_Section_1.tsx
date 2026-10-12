import Reveal from "../motions/reveal";
import Badge from "@/components/common/Badge";
import SectionTitle from "../common/SectionTitle";
import SectionDescription from "../common/SectionDescription";
import Button from "../common/Button";

const V_Section_1 = () => {
  return (
    <section className="p-[92px_clamp(20px,5vw,64px)_46px]">
      <div className="max-w-7xl mx-auto flex flex-col gap-2 md:gap-4">
        <Reveal y={12}>
          <Badge label="Product One" />
        </Reveal>
        <Reveal delay={0.1}>
          <SectionTitle title="Verbosa.ai - Your AI sales team." />
        </Reveal>
        <Reveal delay={0.2}>
          <SectionDescription description="Intellix's in-house AI sales automation platform: an all-in-one workforce that finds leads, calls and messages them, and follows up over email, so sales teams can focus on closing instead of chasing." />
        </Reveal>
        <Reveal delay={0.3} className="flex gap-4">
            <Button title="Visit Verbosa.ai" link="https://verbosa.ai" variant="primary"/>
            <Button title="Talk to Us" link="/contact" variant="secondary"/>
        </Reveal>
      </div>
    </section>
  );
};

export default V_Section_1;
