import Reveal from "../motions/reveal";

export default function ServiceCta() {
  return (
    <section className="mx-auto max-w-7xl px-[clamp(20px,5vw,64px)] pb-24 pt-5 sm:pb-32">
      <Reveal>
        <div className="bg-white px-6 py-14 text-center sm:px-[clamp(24px,6vw,64px)] sm:py-16">
          <h2 className="mx-auto mb-4 max-w-xl font-fraunces text-[28px] font-semibold tracking-[-0.01em] text-black-01 sm:text-[36px]">Not sure which service you need?</h2>
          <p className="mx-auto mb-7 max-w-120 text-[15.5px] text-black-01/70">Tell us what you&apos;re building and we&apos;ll point you to the right mix of services — no obligation.</p>
          <a href="/contact" className="group inline-flex items-center gap-2 border-[1.5px] border-white bg-black-01 px-7 py-3.5 font-jetbrain text-sm font-semibold uppercase tracking-[.04em] text-white-01 transition-all duration-300 hover:bg-white hover:text-black-01">
            Let&apos;s Talk
            <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
              <line x1={5} y1={12} x2={19} y2={12} />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </Reveal>
    </section>
  );
}
