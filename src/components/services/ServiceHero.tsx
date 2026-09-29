import Badge from "@/components/Badge";
import Reveal from "../reveal";
import JumpSectionButton from "./JumpSectionButton";

const GRID_LINES = "repeating-linear-gradient(0deg, rgba(255,255,255,.07) 0px, rgba(255,255,255,.07) 1px, transparent 1px, transparent 64px), repeating-linear-gradient(90deg, rgba(255,255,255,.07) 0px, rgba(255,255,255,.07) 1px, transparent 1px, transparent 64px)";

export default function ServiceHero() {
  return (
    <section id="top" className="relative overflow-hidden flex flex-col items-center justify-center px-[clamp(20px,5vw,64px)] pt-12 pb-16 md:pt-16 md:pb-24">
      <div aria-hidden="true" className="pointer-events-none absolute -top-17.5 -right-22.5 h-80 w-80 md:h-120 md:w-120 rounded-full bg-[radial-gradient(circle_at_35%_35%,rgba(255,255,255,0.14),rgba(255,255,255,0)_65%)] blur-[50px]" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-20 -left-22.5 h-80 w-80 md:h-120 md:w-120 rounded-full bg-[radial-gradient(circle_at_40%_40%,rgba(255,255,255,0.09),rgba(255,255,255,0)_65%)] blur-[50px]" />
      {/* Arbitrary Tailwind values can't contain spaces, so the grid lives in a style prop */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ backgroundImage: GRID_LINES }} />

      <div className="relative w-full max-w-7xl mx-auto flex flex-col items-center justify-center gap-4 text-center">
        <Reveal y={12}>
          <Badge label="what we offer" />
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="font-plex font-extrabold leading-[1.06] tracking-[-0.01em] mb-6 text-white-01 text-[58px] text-center max-w-[760]">Everything your product needs, under one roof.</h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-base md:text-[16.5px] leading-[1.7] text-gray-02 max-w-160">Intellix pairs full-stack web development with in-house design, video, and back-office support — so you can brief one team instead of coordinating five freelancers. Here's exactly what each service covers.</p>
        </Reveal>
        <div className="mt-2 flex justify-center w-full">
          <JumpSectionButton />
        </div>
      </div>
    </section>
  );
}
