import FadeIn from "@/components/motions/FadeIn";
import Button from "../Button";

export default function CareersCTA() {
  return (
    <section className="p-[92px_clamp(20px,5vw,64px)]">
      <div className="max-w-7xl mx-auto relative gap-11 overflow-hidden border border-white/[0.14] bg-[#141414] p-[80px_clamp(32px,5vw,56px)] text-center">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-[60px] -right-[60px] h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle_at_35%_35%,rgba(255,255,255,0.12),rgba(255,255,255,0)_65%)] blur-[50px]"
        />

        <div
          aria-hidden="true"
          className="
        pointer-events-none
        absolute -bottom-[70px] -left-[50px] h-[340px] w-[340px] rounded-full bg-[radial-gradient(circle_at_40%_40%,rgba(255,255,255,0.08),rgba(255,255,255,0)_65%)] blur-[50px] "
        />

        <FadeIn y={28}>
          <h2 className="relative font-plex text-[28px] sm:text-4xl font-bold tracking-[-0.01em] mb-4">Don&apos;t see the right role?</h2>
          <p className="relative text-[15.5px] max-w-120 mx-auto mb-7.5">We&apos;re growing quickly. Reach out anyway — tell us what you&apos;re good at and we&apos;ll keep you in mind.</p>
          <div className="relative flex flex-wrap justify-center gap-3.5">
            <Button title="Get in Touch" link="/contact" variant="primary" />
            <Button title="Meet the Team" link="/about" variant="secondary" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
