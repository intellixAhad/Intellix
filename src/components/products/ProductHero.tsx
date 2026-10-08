import Badge from "@/components/common/Badge";
import Reveal from "../motions/reveal";
import Button from "../common/Button";
import Title from "../common/HeroTitle";

const GRID_LINES = "repeating-linear-gradient(0deg, rgba(255,255,255,.07) 0px, rgba(255,255,255,.07) 1px, transparent 1px, transparent 64px), repeating-linear-gradient(90deg, rgba(255,255,255,.07) 0px, rgba(255,255,255,.07) 1px, transparent 1px, transparent 64px)";

const ProductHero = () => {
  return (
    <section id="top" className="relative overflow-hidden flex flex-col items-center justify-center px-[clamp(20px,5vw,64px)] pt-12 pb-16 md:pt-16 md:pb-24">
      <div aria-hidden="true" className="pointer-events-none absolute -top-17.5 -right-22.5 h-80 w-80 md:h-120 md:w-120 rounded-full bg-[radial-gradient(circle_at_35%_35%,rgba(255,255,255,0.14),rgba(255,255,255,0)_65%)] blur-[50px]" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-20 -left-22.5 h-80 w-80 md:h-120 md:w-120 rounded-full bg-[radial-gradient(circle_at_40%_40%,rgba(255,255,255,0.09),rgba(255,255,255,0)_65%)] blur-[50px]" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ backgroundImage: GRID_LINES }} />

      <div className="relative w-full max-w-7xl mx-auto flex flex-col items-center justify-center gap-2 md:gap-4 text-center">
        <Reveal y={12}>
          <Badge label="our product" />
        </Reveal>
        <Reveal delay={0.1}>
          <Title title="Meet Verbosa.ai — your AI sales team." long={1000} />
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-base md:text-[20px] leading-[1.7] text-gray-02 max-w-190 font-light tracking-wide">
            Verbosa.ai is Intellix's in-house AI sales automation platform — an all-in-one workforce that finds leads, calls and messages them, and follows up over email, so sales teams can focus on closing instead of chasing.
          </p>
        </Reveal>
        <Reveal delay={0.3} className="mt-2 flex gap-4 justify-center w-full flex-wrap">
          <Button title="visit verbosa.ai" link="/contact" variant="primary" />
          <Button title="talk to us" link="/contact" variant="secondary" />
        </Reveal>
      </div>
    </section>
  );
};

export default ProductHero;
