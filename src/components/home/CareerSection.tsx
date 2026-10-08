import GlassBox from "../common/GlassBox";
import Reveal from "../motions/reveal";
import Badge from "../common/Badge";
import SectionTitle from "../common/SectionTitle";
import SectionDescription from "../common/SectionDescription";
import Button from "../common/Button";
import { StaggerGroup, StaggerItem } from "../motions/StaggerReveal";

const CareerSection = () => {
  return (
    <section id="careers" className="p-[46px_clamp(20px,5vw,64px)]">
      <GlassBox className="grid grid-cols-1 lg:grid-cols-[1.1fr_.9fr] items-center gap-8">
        <div className="gap-2 md:gap-4 flex flex-col items-start">
          <Reveal y={12}>
            <Badge label="We are hiring" />
          </Reveal>
          <Reveal delay={0.1}>
            <SectionTitle title="Build the future with us." />
          </Reveal>
          <Reveal delay={0.2}>
            <SectionDescription description="We're always looking for talented developers, designers, and editors to join our growing, remote-first team." />
          </Reveal>
          <Reveal delay={0.3}>
            <Button title="Open Positions" link="/careers" />
          </Reveal>
        </div>
        <StaggerGroup className="flex flex-col gap-3">
          <StaggerItem className="flex flex-wrap items-start justify-between gap-2 border border-white/14 bg-black-01 hover:bg-white-01/9 cursor-pointer rounded-none px-4.5 py-4 sm:items-center">
            <span className="text-[14.5px] font-semibold text-white-01">Frontend Developer</span>
            <span className="text-xs text-gray-00 font-jetbrain sm:whitespace-nowrap">Remote · Full-time</span>
          </StaggerItem>
          <StaggerItem className="flex flex-wrap items-start justify-between gap-2 border border-white/14 bg-black-01 hover:bg-white-01/9 cursor-pointer rounded-none px-4.5 py-4 sm:items-center">
            <span className="text-[14.5px] font-semibold text-white-01">Video Editor</span>
            <span className="text-xs text-gray-00 font-jetbrain sm:whitespace-nowrap">Dhaka · Contract</span>
          </StaggerItem>
          <StaggerItem className="flex flex-wrap items-start justify-between gap-2 border border-white/14 bg-black-01 hover:bg-white-01/9 cursor-pointer rounded-none px-4.5 py-4 sm:items-center">
            <span className="text-[14.5px] font-semibold text-white-01">BPO Associate</span>
            <span className="text-xs text-gray-00 font-jetbrain sm:whitespace-nowrap">Remote · Part-time</span>
          </StaggerItem>
        </StaggerGroup>
      </GlassBox>
    </section>
  );
};

export default CareerSection;
