import Button from "../Button";
import Reveal from "../reveal";

export default function CareersCTA() {
  return (
    <section className="p-[46px_clamp(20px,5vw,64px)_92px]">
      <div className="max-w-7xl mx-auto relative gap-11 overflow-hidden border border-white/[0.14] bg-[#141414] p-[80px_clamp(32px,5vw,56px)] text-center">
        <div aria-hidden="true" className="pointer-events-none absolute -top-[60px] -right-[60px] h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle_at_35%_35%,rgba(255,255,255,0.12),rgba(255,255,255,0)_65%)] blur-[50px]" />
        <div
          aria-hidden="true"
          className="
        pointer-events-none
        absolute -bottom-[70px] -left-[50px] h-[340px] w-[340px] rounded-full bg-[radial-gradient(circle_at_40%_40%,rgba(255,255,255,0.08),rgba(255,255,255,0)_65%)] blur-[50px] "
        />
        <div className="gap-2 md:gap-4 w-full max-w-7xl mx-auto flex flex-col items-center">
          <Reveal delay={0.1}>
            <h2 className="m-0 max-w-2xl font-playfair text-[clamp(2rem,5vw,3rem)] font-bold leading-[1.05] text-white-01 italic">Don&apos;t see the right role?</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-base md:text-[20px] leading-[1.7] text-gray-02 max-w-190 font-light tracking-wide text-center">We&apos;re growing quickly. Reach out anyway — tell us what you&apos;re good at and we&apos;ll keep you in mind.</p>
          </Reveal>
          <Reveal delay={0.3} className="relative flex flex-wrap justify-center gap-3.5">
              <Button title="Get in Touch" link="/contact" variant="primary" />
              <Button title="Meet the Team" link="/about" variant="secondary" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
