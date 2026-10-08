import Reveal from "../motions/reveal";
import { stepData } from "@/data/ServiceData";


export default function ProcessTimeline() {
  return (
    <section id="process" className="relative mx-auto max-w-7xl scroll-mt-32 overflow-hidden px-[clamp(20px,5vw,64px)] py-14 sm:py-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "repeating-linear-gradient(115deg, rgba(255,255,255,.035) 0px, rgba(255,255,255,.035) 1px, transparent 1px, transparent 64px)",
        }}
      />

      <Reveal>
        <div className="relative mb-10 max-w-150 sm:mb-12">
          <div className="mb-3.5 flex items-center gap-2.5">
            <span className="h-1.5 w-1.5 shrink-0 bg-white" />
            <p className="m-0 font-jetbrain text-xs font-semibold uppercase tracking-[.08em] text-gray-02">HOW WE WORK</p>
          </div>
          <h2 className="m-0 font-fraunces text-[28px] font-semibold tracking-[-0.01em] text-white-01 sm:text-[34px]">From first call to launch.</h2>
        </div>
      </Reveal>

      <div className="relative pl-14 sm:pl-[52px]">
        <div className="absolute bottom-1.5 left-[15px] top-1.5 w-0.5 bg-white/14 sm:left-[19px]" />

        <div className="flex flex-col gap-9">
          {stepData.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.1}>
              <div className="relative">
                <span className="absolute -left-14 top-0 flex h-9 w-9 items-center justify-center border border-white bg-[#141414] font-fraunces text-[13px] font-semibold text-white sm:-left-[52px] sm:h-10 sm:w-10 sm:text-sm">{step.number}</span>
                <h3 className="mb-1.5 font-fraunces text-base font-semibold text-white-01 sm:text-[17px]">{step.title}</h3>
                <p className="m-0 text-sm leading-[1.6] text-gray-02">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
