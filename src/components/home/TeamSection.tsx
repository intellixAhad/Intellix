import Reveal from "../motions/reveal";
import Badge from "../common/Badge";
import Button from "../common/Button";
import Image from "next/image";
import GlassBox from "../common/GlassBox";
import SectionTitle from "../common/SectionTitle";
import SectionDescription from "../common/SectionDescription";
import { StaggerGroup, StaggerItem } from "../motions/StaggerReveal";

const TeamSection = () => {
  return (
    <section id="about" className="relative mx-auto w-full overflow-hidden p-[46px_clamp(20px,5vw,64px)]">
      <GlassBox className="grid grid-cols-1 lg:grid-cols-[1.1fr_.9fr] items-center gap-11">
        <div className="flex flex-col gap-2 md:gap-4 items-start">
          <Reveal y={12}>
            <Badge label="who we are" />
          </Reveal>
          <Reveal delay={0.1}>
            <SectionTitle title="A small, focused team building real products." />
          </Reveal>
          <Reveal delay={0.2}>
            <SectionDescription description="Intellix is a remote-first team of developers, designers, and editors working out of Dhaka, Bangladesh — covering everything from client projects to our own product, Verbosa.ai."/>
          </Reveal>
          <Reveal delay={0.3} className="flex flex-wrap gap-2.5">
            <span className="border border-white/[0.14] px-3.5 py-1.75 text-[12.5px] font-semibold text-gray-02">Remote-First</span>
            <span className="border border-white/[0.14] px-3.5 py-1.75 text-[12.5px] font-semibold text-gray-02">Based in Dhaka</span>
            <span className="border border-white/[0.14] px-3.5 py-1.75 text-[12.5px] font-semibold text-gray-02">4 Core Service Lines</span>
          </Reveal>
          <Reveal delay={0.4}>
            <Button title="Meet the Team" link="/about" variant="primary" />
          </Reveal>
        </div>

        <StaggerGroup className="grid grid-cols-3 gap-2.5">
          <StaggerItem className="aspect-square overflow-hidden border border-white/[0.14]">
            <Image width={400} height={400} src="/default_image_02.jpg" alt="Portrait of a team member" className="block h-full w-full object-cover" loading="lazy" />
          </StaggerItem>

          <StaggerItem className="mt-0 aspect-square overflow-hidden border border-white/[0.14] sm:mt-4.5">
            <Image width={400} height={400} src="/default_image_02.jpg" alt="Portrait of a team member" className="block h-full w-full object-cover" loading="lazy" />
          </StaggerItem>

          <StaggerItem className="aspect-square overflow-hidden border border-white/[0.14] sm:mt-9">
            <Image width={400} height={400} src="/default_image_02.jpg" alt="Portrait of a team member" className="block h-full w-full object-cover" loading="lazy" />
          </StaggerItem>

          <StaggerItem className="mt-0 aspect-square overflow-hidden border border-white/[0.14] sm:-mt-4.5">
            <Image width={400} height={400} src="/default_image_02.jpg" alt="Portrait of a team member" className="block h-full w-full object-cover" loading="lazy" />
          </StaggerItem>

          <StaggerItem className="aspect-square overflow-hidden border border-white/[0.14]">
            <Image width={400} height={400} src="/default_image_02.jpg" alt="Portrait of a team member" className="block h-full w-full object-cover" loading="lazy" />
          </StaggerItem>

          <StaggerItem className="mt-0 aspect-square overflow-hidden border border-white/[0.14] sm:mt-4.5">
            <Image width={400} height={400} src="/default_image_02.jpg" alt="Portrait of a team member" className="block h-full w-full object-cover" loading="lazy" />
          </StaggerItem>
        </StaggerGroup>
      </GlassBox>
    </section>
  );
};

export default TeamSection;
