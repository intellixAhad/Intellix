import Reveal from "../motions/reveal";
import Badge from "../common/Badge";
import SectionTitle from "../common/SectionTitle";
import { StaggerGroup, StaggerItem } from "../motions/StaggerReveal";

const WhyIntellixSection = () => {
  return (
    <section id="why-intellix" className="p-[46px_clamp(20px,5vw,64px)_92px]">
      <div className="max-w-7xl mx-auto flex flex-col gap-6 md:gap-10">
        <div className="flex flex-col items-start gap-2 md:gap-4">
          <Reveal y={12}>
            <Badge label="why intellix" />
          </Reveal>
          <Reveal delay={0.1}>
            <SectionTitle title="A team that thinks like a partner, not a vendor." />
          </Reveal>
        </div>

        <StaggerGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <StaggerItem className="relative flex gap-4.5 border border-white/[0.14] bg-[#141414] p-6.5">
            <span className="absolute right-4.5 top-4 font-mono text-[12px] text-gray-00">01</span>

            <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-white/[0.14] text-white-01">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                <polyline points="2 17 12 22 22 17" />
                <polyline points="2 12 12 17 22 12" />
              </svg>
            </div>

            <div>
              <h3 className="mb-2 mt-0 font-display text-[17px] font-semibold text-white-01">Full-Stack Expertise</h3>

              <p className="m-0 text-[14px] leading-[1.6] text-gray-02">From front-end interfaces to back-end systems, our team covers the entire product lifecycle in-house.</p>
            </div>
          </StaggerItem>

          <StaggerItem className="relative flex gap-4.5 border border-white/[0.14] bg-[#141414] p-6.5">
            <span className="absolute right-4.5 top-4 font-mono text-[12px] text-gray-00">02</span>

            <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-white/[0.14] text-white-01">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
              </svg>
            </div>

            <div>
              <h3 className="mb-2 mt-0 font-display text-[17px] font-semibold text-white-01">Design-Led Approach</h3>

              <p className="m-0 text-[14px] leading-[1.6] text-gray-02">Every project starts with thoughtful design, because how it looks is as important as how it works.</p>
            </div>
          </StaggerItem>

          <StaggerItem className="relative flex gap-4.5 border border-white/[0.14] bg-[#141414] p-6.5">
            <span className="absolute right-4.5 top-4 font-mono text-[12px] text-gray-00">03</span>

            <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-white/[0.14] text-white-01">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>

            <div>
              <h3 className="mb-2 mt-0 font-display text-[17px] font-semibold text-white-01">Dedicated Teams</h3>

              <p className="m-0 text-[14px] leading-[1.6] text-gray-02">You get a consistent team that understands your product, not a rotating cast of freelancers.</p>
            </div>
          </StaggerItem>

          <StaggerItem className="relative flex gap-4.5 border border-white/[0.14] bg-[#141414] p-6.5">
            <span className="absolute right-4.5 top-4 font-mono text-[12px] text-gray-00">04</span>

            <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-white/[0.14] text-white-01">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                <polyline points="17 6 23 6 23 12" />
              </svg>
            </div>

            <div>
              <h3 className="mb-2 mt-0 font-display text-[17px] font-semibold text-white-01">Built to Scale</h3>

              <p className="m-0 text-[14px] leading-[1.6] text-gray-02">We build on modern, scalable architecture so your product grows without being rebuilt from scratch.</p>
            </div>
          </StaggerItem>
        </StaggerGroup>
      </div>
    </section>
  );
};

export default WhyIntellixSection;
