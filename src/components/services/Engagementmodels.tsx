import { MODELS } from "@/data/ServiceData";
import Reveal from "../motions/reveal";
import Badge from "../common/Badge";
import SectionTitle from "../common/SectionTitle";

export default function EngagementModels() {
  return (
    <section id="engage" className="scroll-mt-32 p-[46px_clamp(20px,5vw,64px)]">
      <div className="max-w-7xl mx-auto flex flex-col gap-6 md:gap-10">
        <div className="flex flex-col items-start gap-2 md:gap-4">
          <Reveal y={12}>
            <Badge label="HOW WE ENGAGE" />
          </Reveal>
          <Reveal delay={0.1}>
            <SectionTitle title="Pick the working model that fits." className="max-w-150"/>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {MODELS.map((model, i) => (
            <Reveal key={model.title} delay={i * 0.1}>
              <div className="h-full border border-white/14 bg-[#141414] p-7 sm:px-[26px] sm:py-[30px]">
                <div className="mb-5 flex h-[46px] w-[46px] items-center justify-center border border-white/14 bg-black-01 text-white-01">
                  <svg viewBox="0 0 24 24" width={22} height={22} fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                    {model.icon}
                  </svg>
                </div>
                <h3 className="mb-2.5 font-fraunces text-lg font-semibold text-white-01">{model.title}</h3>
                <p className="mb-4.5 text-sm leading-[1.65] text-gray-02">{model.description}</p>
                <span className="inline-block border border-white/14 px-3 py-1.5 font-jetbrain text-[11px] uppercase tracking-[.05em] text-gray-02">{model.bestFor}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
