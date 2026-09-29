import Reveal from "../reveal";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

// PLACEHOLDER CONTENT — replace with real client testimonials, names, and companies before launch.
const TESTIMONIALS: Testimonial[] = [
  {
    quote: "They moved fast without cutting corners — exactly what we needed heading into launch.",
    name: "A. Rahman",
    role: "Founder, [Client Company]",
  },
  {
    quote: "Communication was clear at every stage, and the handoff docs made onboarding our own dev easy.",
    name: "S. Chowdhury",
    role: "Product Lead, [Client Company]",
  },
  {
    quote: "The design system they built is still what our whole team works from a year later.",
    name: "T. Karim",
    role: "Co-founder, [Client Company]",
  },
];

// PLACEHOLDER — swap for real client names/logos.
const CLIENT_WORDMARKS = ["Nova Robotics", "Fieldstone Capital", "Loop Analytics", "Pier & Co.", "Hatch Studio"];

export default function TestimonialStrip() {
  return (
    <section id="reviews" className="mx-auto max-w-[1240px] scroll-mt-32 px-[clamp(20px,5vw,64px)] py-14 sm:py-16">
      <Reveal>
        <div className="mb-8 max-w-160 sm:mb-10">
          <div className="mb-3.5 flex items-center gap-2.5">
            <span className="h-1.5 w-1.5 shrink-0 bg-white" />
            <p className="m-0 font-jetbrain text-xs font-semibold uppercase tracking-[.08em] text-gray-02">WHAT CLIENTS SAY</p>
          </div>
          <h2 className="m-0 font-fraunces text-[28px] font-semibold tracking-[-0.01em] text-white-01 sm:text-[34px]">Trusted by teams who ship.</h2>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.08}>
            <div className="flex h-full flex-col border border-white/14 bg-[#141414] p-6 sm:p-7">
              <svg viewBox="0 0 24 24" width={22} height={22} fill="#3A3A36" className="mb-4">
                <path d="M7 7c-3 0-5 2.5-5 6s2 6 5 6c2 0 3-1 3-3 0-1.5-1-2.5-2.5-2.5-.2 0-.4 0-.5.1C7.2 12.6 8 11 10 11V9c-1.7 0-3 .3-3 .3V7zm11 0c-3 0-5 2.5-5 6s2 6 5 6c2 0 3-1 3-3 0-1.5-1-2.5-2.5-2.5-.2 0-.4 0-.5.1.2-1.6 1-3.1 3-3.1V9c-1.7 0-3 .3-3 .3V7z" />
              </svg>
              <p className="mb-5 flex-grow text-[14.5px] leading-[1.7] text-gray-02">{t.quote}</p>
              <div>
                <div className="text-sm font-semibold text-white-01">{t.name}</div>
                <div className="text-xs text-gray-00">{t.role}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2}>
        <div className="mt-10 border-t border-white/14 pt-8 sm:mt-12">
          <p className="mb-5 font-jetbrain text-[11px] uppercase tracking-[.05em] text-gray-00">Trusted by</p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            {CLIENT_WORDMARKS.map((name) => (
              <span key={name} className="font-fraunces text-lg text-gray-00/70 sm:text-xl">
                {name}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
