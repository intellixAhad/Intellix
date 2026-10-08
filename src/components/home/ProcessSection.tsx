import Badge from "../common/Badge";
import SectionTitle from "../common/SectionTitle";
import Reveal from "../motions/reveal";
import { StaggerGroup, StaggerItem } from "../motions/StaggerReveal";

const ProcessSection = () => {
  return (
    <section id="our-process" className="relative p-[92px_clamp(20px,5vw,64px)]">
      <div aria-hidden="true" className="pointer-events-none absolute -right-15 -top-12.5 h-90 w-90 rounded-full bg-[radial-gradient(circle_at_35%_35%,rgba(255,255,255,0.11),rgba(255,255,255,0)_65%)] blur-[50px]" />

      <div aria-hidden="true" className="pointer-events-none absolute -bottom-15 -left-12.5 h-100 w-100 rounded-full bg-[radial-gradient(circle_at_40%_40%,rgba(255,255,255,0.08),rgba(255,255,255,0)_65%)] blur-[50px]" />

      <svg className="pointer-events-none absolute left-[8%] top-[305] hidden h-1 w-[84%] lg:block" viewBox="0 0 100 1" preserveAspectRatio="none">
        <line x1="0" y1="0.5" x2="100" y2="0.5" stroke="rgba(255,255,255,.08)" strokeWidth="0.6" strokeDasharray="2,2" />
      </svg>

      <div className="max-w-7xl mx-auto flex flex-col gap-6 md:gap-10">
        <div className="flex flex-col items-start gap-2 md:gap-4">
          <Reveal y={12}>
            <Badge label="how we work" />
          </Reveal>
          <Reveal delay={0.1}>
            <SectionTitle title="A clear process, from first call to launch." />
          </Reveal>
        </div>

        <StaggerGroup className="relative grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <StaggerItem className="flex flex-col items-center justify-start">
            <div className="mb-3.5 font-jetbrain italic text-[38px] font-bold text-white">01</div>
            <h3 className="mb-2 mt-0 font-jetbrain text-[16.5px] font-semibold text-white-01">Discover</h3>
            <p className="m-0 text-[14px] leading-[1.6] text-gray-02 text-center max-w-55">We learn your goals, users, and constraints before writing a single line of code.</p>
          </StaggerItem>

          <StaggerItem className="flex flex-col items-center justify-start">
            <div className="mb-3.5 font-jetbrain italic text-[38px] font-bold text-white">02</div>
            <h3 className="mb-2 mt-0 font-jetbrain text-[16.5px] font-semibold text-white-01">Design</h3>
            <p className="m-0 text-[14px] leading-[1.6] text-gray-02 text-center max-w-55">Wireframes and visual design turn ideas into a clear, testable plan.</p>
          </StaggerItem>

          <StaggerItem className="flex flex-col items-center justify-start">
            <div className="mb-3.5 font-jetbrain italic text-[38px] font-bold text-white">03</div>
            <h3 className="mb-2 mt-0 font-jetbrain text-[16.5px] font-semibold text-white-01">Build</h3>
            <p className="m-0 text-[14px] leading-[1.6] text-gray-02 text-center max-w-55">Our developers build your product with clean, maintainable, and scalable code.</p>
          </StaggerItem>

          <StaggerItem className="flex flex-col items-center justify-start">
            <div className="mb-3.5 font-jetbrain italic text-[38px] font-bold text-white">04</div>
            <h3 className="mb-2 mt-0 font-jetbrain text-[16.5px] font-semibold text-white-01">Launch &amp; Support</h3>
            <p className="m-0 text-[14px] leading-[1.6] text-gray-02 text-center max-w-55">We ship, monitor, and stay on to support and improve what we built.</p>
          </StaggerItem>
        </StaggerGroup>
      </div>
    </section>
  );
};

export default ProcessSection;
