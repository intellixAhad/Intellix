import ClientTicker from "./ClientTicker";
import Reveal from "../motions/reveal";
import Button from "../common/Button";
import Badge from "../common/Badge";
import Title from "../common/HeroTitle";
import CircuitBackground from "../common/CircuitBackground";
import SectionDescription from "../common/SectionDescription";

const Hero = () => {
  return (
    <section id="top" className="relative flex md:min-h-svh flex-col items-center justify-between overflow-hidden px-[clamp(20px,5vw,64px)] py-6 md:py-0 md:pb-16">
      <CircuitBackground className="-z-10" />
      <div aria-hidden="true" className="absolute -top-17.5 -right-22.5 h-120 w-120 rounded-full bg-[radial-gradient(circle_at_35%_35%,rgba(255,255,255,0.14),rgba(255,255,255,0)_65%)] blur-[50px] pointer-events-none" />
      <div aria-hidden="true" className="absolute -bottom-20 -left-22.5 h-120 w-120 rounded-full bg-[radial-gradient(circle_at_40%_40%,rgba(255,255,255,0.09),rgba(255,255,255,0)_65%)] blur-[50px] pointer-events-none" />
      <div className="absolute right-[clamp(20px,5vw,64px)] top-30 hidden [writing-mode:vertical-rl] font-jetbrain text-[11px] font-semibold tracking-[0.35em] text-gray-01 lg:block">BUILD · DESIGN · AUTOMATE</div>
      <div className="absolute bottom-80 left-[clamp(20px,5vw,64px)] hidden [writing-mode:vertical-rl] font-jetbrain text-[11px] font-semibold tracking-[0.35em] text-gray-01 lg:block">SOFTWARE THAT SHIPS</div>

      <div className="mx-auto flex flex-col w-full max-w-7xl flex-1 items-center justify-center py-8 md:py-12 gap-3 md:gap-4">
        <Reveal y={12}>
          <Badge label="Full-service software Agency" />
        </Reveal>
        <Reveal delay={0.1}>
          <Title title="Software, design & media engineered for real growth." long={1000} />
        </Reveal>
        <Reveal delay={0.2}>
          <SectionDescription
            description="Intellix is a full-service software agency helping startups and businesses with web development, graphic design, video production, and back-office support — plus our own suite of intelligent products, including Verbosa.ai"
            className="text-center max-w-5xl"
            long={1200}
          />
        </Reveal>
        <Reveal delay={0.3} className="flex flex-wrap gap-3.5 mb-7">
          <Button title="start a project" link="/contact" variant="primary" />
          <Button title="explore Verbosa.ai" link="/contact" variant="secondary" />
        </Reveal>
      </div>

      <Reveal delay={0.4} className="mx-auto w-full max-w-7xl py-5 sm:py-8.5">
        <p className="mb-5.5 text-center text-sm tracking-tighter text-gray-02/50 sm:text-base font-jetbrain">Our Trusted Partners</p>
        <ClientTicker />
      </Reveal>
    </section>
  );
};

export default Hero;
