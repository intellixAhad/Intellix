import type { ReactNode } from "react";
import Reveal from "../motions/reveal";

interface Model {
  icon: ReactNode;
  title: string;
  description: string;
  bestFor: string;
}

const MODELS: Model[] = [
  {
    title: "Fixed-Price Project",
    description: "A defined scope, timeline, and cost agreed upfront — no surprises along the way.",
    bestFor: "Best for a clear scope",
    icon: (
      <>
        <circle cx={12} cy={12} r={9} />
        <circle cx={12} cy={12} r={5} />
        <circle cx={12} cy={12} r={1} />
      </>
    ),
  },
  {
    title: "Dedicated Team",
    description: "A consistent team embedded with yours on a monthly basis — for ongoing product work.",
    bestFor: "Best for ongoing work",
    icon: (
      <>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx={9} cy={7} r={4} />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
  },
  {
    title: "Hourly / Time & Material",
    description: "Flexible hours billed as work is completed — suited to evolving or exploratory requirements.",
    bestFor: "Best for flexibility",
    icon: (
      <>
        <circle cx={12} cy={12} r={9} />
        <polyline points="12 7 12 12 15 14" />
      </>
    ),
  },
];

export default function EngagementModels() {
  return (
    <section id="engage" className="relative mx-auto max-w-[1240px] scroll-mt-32 overflow-hidden px-[clamp(20px,5vw,64px)] py-14 sm:py-16">
      <div aria-hidden="true" className="pointer-events-none absolute -left-[70px] -top-[60px] h-[280px] w-[280px] rounded-full bg-[radial-gradient(circle_at_35%_35%,rgba(255,255,255,0.1),rgba(255,255,255,0)_65%)] blur-[50px] sm:h-[360px] sm:w-[360px]" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-[90px] -right-[60px] h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle_at_60%_60%,rgba(255,255,255,0.08),rgba(255,255,255,0)_65%)] blur-[50px] sm:h-[400px] sm:w-[400px]" />

      <Reveal>
        <div className="relative mb-10 max-w-160 sm:mb-12">
          <div className="mb-3.5 flex items-center gap-2.5">
            <span className="h-1.5 w-1.5 shrink-0 bg-white" />
            <p className="m-0 font-jetbrain text-xs font-semibold uppercase tracking-[.08em] text-gray-02">HOW WE ENGAGE</p>
          </div>
          <h2 className="m-0 font-fraunces text-[28px] font-semibold tracking-[-0.01em] text-white-01 sm:text-[34px]">Pick the working model that fits.</h2>
        </div>
      </Reveal>

      <div className="relative grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
    </section>
  );
}
