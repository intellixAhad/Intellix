import Reveal from "../motions/reveal";
import Badge from "../common/Badge";
import SectionTitle from "../common/SectionTitle";
import { StaggerGroup, StaggerItem } from "../motions/StaggerReveal";

const TechnologySection = () => {
  return (
    <section className="relative overflow-hidden border-y border-white/[0.14] bg-black-01 p-[92px_clamp(20px,5vw,64px)]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(115deg,rgba(255,255,255,0.035)_0px,rgba(255,255,255,0.035)_1px,transparent_1px,transparent_64px)]" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-7.5 left-[clamp(0px,4vw,48px)] font-mono text-[200px] font-bold leading-none text-white/4">
        &lt;/&gt;
      </div>

      <div className="mx-auto max-w-7xl flex flex-col gap-6 md:gap-10">
        <div className="flex flex-col items-start gap-2 md:gap-4">
          <Reveal y={12}>
            <Badge label="tools & technologies" />
          </Reveal>
          <Reveal delay={0.1}>
            <SectionTitle title="The stack behind every build." />
          </Reveal>
        </div>

        <StaggerGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          <StaggerItem className="relative border border-white/[0.14] bg-[#141414] px-5.5 py-7">
            <span className="absolute right-5 top-4.5 font-mono text-[12px] text-gray-00">01</span>

            <div className="mb-5 flex h-11.5 w-11.5 items-center justify-center border border-white/[0.14] text-white-01">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
            </div>

            <h3 className="mb-3.5 mt-0 font-display text-[16.5px] font-semibold text-white-01">Frontend &amp; Web</h3>

            <div className="flex flex-wrap gap-2">
              {["React", "Next.js", "TypeScript"].map((item) => (
                <span key={item} className="border border-white/[0.14] px-3 py-1.5 font-mono text-[12px] text-gray-02">
                  {item}
                </span>
              ))}
            </div>
          </StaggerItem>

          <StaggerItem className="relative border border-white/[0.14] bg-[#141414] px-5.5 py-7">
            <span className="absolute right-5 top-4.5 font-mono text-[12px] text-gray-00">02</span>

            <div className="mb-5 flex h-11.5 w-11.5 items-center justify-center border border-white/[0.14] text-white-01">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="6" rx="1" />
                <rect x="2" y="15" width="20" height="6" rx="1" />
                <line x1="6" y1="6" x2="6.01" y2="6" />
                <line x1="6" y1="18" x2="6.01" y2="18" />
              </svg>
            </div>

            <h3 className="mb-3.5 mt-0 font-display text-[16.5px] font-semibold text-white-01">Backend &amp; Infrastructure</h3>

            <div className="flex flex-wrap gap-2">
              {["Node.js", "Laravel", "Django"].map((item) => (
                <span key={item} className="border border-white/[0.14] px-3 py-1.5 font-mono text-[12px] text-gray-02">
                  {item}
                </span>
              ))}
            </div>
          </StaggerItem>

          <StaggerItem className="relative border border-white/[0.14] bg-[#141414] px-5.5 py-7">
            <span className="absolute right-5 top-4.5 font-mono text-[12px] text-gray-00">03</span>

            <div className="mb-5 flex h-11.5 w-11.5 items-center justify-center border border-white/[0.14] text-white-01">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a9 9 0 1 0 0 18c1.1 0 2-.7 2-1.8 0-.5-.2-1-.5-1.3-.3-.3-.5-.8-.5-1.3 0-1 .8-1.8 1.8-1.8H17a4 4 0 0 0 4-4c0-4.4-4-8-9-8z" />
                <circle cx="7.5" cy="10.5" r="1.1" />
                <circle cx="10" cy="7" r="1.1" />
                <circle cx="14.5" cy="7.5" r="1.1" />
                <circle cx="17" cy="11" r="1.1" />
              </svg>
            </div>

            <h3 className="mb-3.5 mt-0 font-display text-[16.5px] font-semibold text-white-01">Design &amp; Creative</h3>

            <div className="flex flex-wrap gap-2">
              {["Figma", "Premiere Pro", "After Effects"].map((item) => (
                <span key={item} className="border border-white/[0.14] px-3 py-1.5 font-mono text-[12px] text-gray-02">
                  {item}
                </span>
              ))}
            </div>
          </StaggerItem>

          <StaggerItem className="relative border border-white/[0.14] bg-[#141414] px-5.5 py-7">
            <span className="absolute right-5 top-4.5 font-mono text-[12px] text-gray-00">04</span>

            <div className="mb-5 flex h-11.5 w-11.5 items-center justify-center border border-white/[0.14] text-white-01">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="7" height="7" rx="1" />
              </svg>
            </div>

            <h3 className="mb-3.5 mt-0 font-display text-[16.5px] font-semibold text-white-01">CMS &amp; Platforms</h3>

            <div className="flex flex-wrap gap-2">
              {["WordPress", "Webflow", "Framer"].map((item) => (
                <span key={item} className="border border-white/[0.14] px-3 py-1.5 font-mono text-[12px] text-gray-02">
                  {item}
                </span>
              ))}
            </div>
          </StaggerItem>
        </StaggerGroup>
      </div>
    </section>
  );
};

export default TechnologySection;
