import Reveal from "../motions/reveal";
import Badge from "@/components/common/Badge";
import SectionTitle from "../common/SectionTitle";
import SectionDescription from "../common/SectionDescription";
import Button from "../common/Button";

const F_Section_1 = () => {
  return (
    <section className="p-[92px_clamp(20px,5vw,64px)_46px]">
      <div className="max-w-7xl mx-auto flex flex-col gap-2 md:gap-4">
        <Reveal y={12}>
          <Badge label="Product Two" />
        </Reveal>
        <Reveal delay={0.1}>
          <SectionTitle title="FreeNation — secure conferencing for government." />
        </Reveal>
        <Reveal delay={0.2}>
          <SectionDescription description="A sovereign government and military conferencing platform, built so every message, meeting and file is provably who it says it is — and unreadable to anyone else, including its own operators." />
        </Reveal>
        <Reveal delay={0.3} className="flex gap-4">
          <Button title="Request A Briffing" link="/contact" variant="primary" />
          <Button title="Talk to Us" link="/contact" variant="secondary" />
        </Reveal>
      </div>
    </section>
  );
};

export default F_Section_1;
