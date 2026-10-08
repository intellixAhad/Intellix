import Badge from "@/components/common/Badge";
import Image from "next/image";
import Button from "@/components/common/Button";
import Link from "next/link";
import Reveal from "@/components/motions/reveal";
import TestimonialsSection from "@/components/TestimonialsSection";
import Orb from "@/components/common/Orb";
import ContactFaq, { type FaqItem } from "@/components/contact/ContactFaq";
import Hero from "@/components/home/Hero";
import StatisticsBox from "@/components/common/StatisticsBox";
import ServiceSection from "@/components/home/ServiceSection";
import IndustryFieldsSections from "@/components/home/IndustryFieldsSections";
import ProductSection from "@/components/home/ProductSection";
import ProjectSection from "@/components/home/ProjectSection";
import SectionTitle from "@/components/common/SectionTitle";
import { StaggerGroup, StaggerItem } from "@/components/motions/StaggerReveal";
import WhyIntellixSection from "@/components/home/WhyIntellixSection";
import TechnologySection from "@/components/home/TechnologySection";

const FAQS: FaqItem[] = [
  {
    q: "What services does Intellix provide?",
    a: "We offer web development, graphic design, video editing, and BPO (back-office) services, along with our own in-house products like Verbosa.ai.",
  },
  {
    q: "Do you work with startups as well as established businesses?",
    a: "Yes. We work with early-stage startups, growing businesses, and established companies — tailoring our process and team size to fit your budget and timeline.",
  },
  {
    q: "What does your project process look like?",
    a: "We follow four stages: Discover, Design, Build, and Launch &amp; Support — with regular check-ins so you always know where your project stands.",
  },
  {
    q: "Do you work with clients outside Bangladesh?",
    a: "Yes. We're a remote-first team based in Dhaka, and we regularly work with clients around the world over video calls, chat, and shared project boards.",
  },
  {
    q: "How do I get a quote for my project?",
    a: "Fill out the contact form below with a bit of detail about your project, and our team will get back to you with next steps and a proposal.",
  },
];

const page = () => {
  const infoCards = [
    {
      label: "EMAIL",
      value: "hello@intellixsolutions.co",
      icon: (
        <>
          <path d="M22 6c0 1.1-.9 2-2 2H4a2 2 0 0 1-2-2" />
          <path d="M2 6l10 7L22 6" />
          <rect x={2} y={4} width={20} height={16} rx={0} />
        </>
      ),
    },
    {
      label: "PHONE",
      value: "01973336001",
      icon: (
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      ),
    },
    {
      label: "LOCATION",
      value: "Dhaka, Bangladesh",
      icon: (
        <>
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx={12} cy={10} r={3} />
        </>
      ),
    },
    {
      label: "RESPONSE TIME",
      value: "Within 1 business day",
      icon: (
        <>
          <circle cx={12} cy={12} r={10} />
          <polyline points="12 6 12 12 16 14" />
        </>
      ),
    },
  ];

  return (
    <>
      <Hero />

      <StatisticsBox N1={28} P1="+" T1="Projects Delivered" N2={12} P2="+" T2="Clients Served" N3={10} P3="+" T3="Team Members" N4={4} T4="Core Service Line" />

      <ServiceSection />

      <IndustryFieldsSections />

      <ProductSection />

      <ProjectSection />

      <WhyIntellixSection />

      <TechnologySection />

      <section id="process" className="relative overflow-hidden p-[92px_clamp(20px,5vw,64px)_46px]">
        <div aria-hidden="true" className="pointer-events-none absolute -right-15 -top-12.5 h-90 w-90 rounded-full bg-[radial-gradient(circle_at_35%_35%,rgba(255,255,255,0.11),rgba(255,255,255,0)_65%)] blur-[50px]" />

        <div aria-hidden="true" className="pointer-events-none absolute -bottom-15 -left-12.5 h-100 w-100 rounded-full bg-[radial-gradient(circle_at_40%_40%,rgba(255,255,255,0.08),rgba(255,255,255,0)_65%)] blur-[50px]" />

        <svg className="pointer-events-none absolute left-[8%] top-[295] hidden h-1 w-[84%] lg:block" viewBox="0 0 100 1" preserveAspectRatio="none">
          <line x1="0" y1="0.5" x2="100" y2="0.5" stroke="rgba(255,255,255,.08)" strokeWidth="0.6" strokeDasharray="2,2" />
        </svg>

        <div className="max-w-7xl mx-auto">
          <div>
            <Badge label="how we work" />
            <h2 className="m-0 max-w-2xl font-playfair text-[clamp(2rem,5vw,3rem)] font-bold leading-[1.05] text-white-01 italic">A clear process, from first call to launch.</h2>
          </div>

          <div className="relative grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 mt-12">
            <div className="flex flex-col items-center justify-start">
              <div className="mb-3.5 font-jetbrain italic text-[38px] font-bold text-white">01</div>
              <h3 className="mb-2 mt-0 font-jetbrain text-[16.5px] font-semibold text-white-01">Discover</h3>
              <p className="m-0 text-[14px] leading-[1.6] text-gray-02 text-center max-w-55">We learn your goals, users, and constraints before writing a single line of code.</p>
            </div>

            <div className="flex flex-col items-center justify-start">
              <div className="mb-3.5 font-jetbrain italic text-[38px] font-bold text-white">02</div>
              <h3 className="mb-2 mt-0 font-jetbrain text-[16.5px] font-semibold text-white-01">Design</h3>
              <p className="m-0 text-[14px] leading-[1.6] text-gray-02 text-center max-w-55">Wireframes and visual design turn ideas into a clear, testable plan.</p>
            </div>

            <div className="flex flex-col items-center justify-start">
              <div className="mb-3.5 font-jetbrain italic text-[38px] font-bold text-white">03</div>
              <h3 className="mb-2 mt-0 font-jetbrain text-[16.5px] font-semibold text-white-01">Build</h3>
              <p className="m-0 text-[14px] leading-[1.6] text-gray-02 text-center max-w-55">Our developers build your product with clean, maintainable, and scalable code.</p>
            </div>

            <div className="flex flex-col items-center justify-start">
              <div className="mb-3.5 font-jetbrain italic text-[38px] font-bold text-white">04</div>
              <h3 className="mb-2 mt-0 font-jetbrain text-[16.5px] font-semibold text-white-01">Launch &amp; Support</h3>
              <p className="m-0 text-[14px] leading-[1.6] text-gray-02 text-center max-w-55">We ship, monitor, and stay on to support and improve what we built.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="relative mx-auto w-full  max-w-360 overflow-hidden p-[46px_clamp(20px,5vw,64px)]">
        <div className="relative grid grid-cols-1 lg:grid-cols-[1.1fr_.9fr] items-center gap-11 overflow-hidden border border-white/[0.14] bg-[#141414] p-[clamp(32px,5vw,56px)]">
          <div aria-hidden="true" className="pointer-events-none absolute -top-15 -right-15 h-80 w-[320px] rounded-full bg-[radial-gradient(circle_at_35%_35%,rgba(255,255,255,0.12),rgba(255,255,255,0)_65%)] blur-[50px] " />

          <div aria-hidden="true" className="pointer-events-none absolute -bottom-17.5 -left-12.5 h-85 w-85 rounded-full bg-[radial-gradient(circle_at_40%_40%,rgba(255,255,255,0.08),rgba(255,255,255,0)_65%)] blur-[50px]" />

          {/* Left Content */}
          <div className="flex flex-col gap-2 md:gap-4 items-start">
            <Reveal y={12}>
              <Badge label="who we are" />
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="m-0 max-w-2xl font-playfair text-[clamp(2rem,5vw,3rem)] font-bold leading-[1.05] text-white-01 italic">A small, focused team building real products.</h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-base md:text-[20px] leading-[1.7] text-gray-02 font-light tracking-wide text-start">Intellix is a remote-first team of developers, designers, and editors working out of Dhaka, Bangladesh — covering everything from client projects to our own product, Verbosa.ai.</p>
            </Reveal>
            <Reveal delay={0.3} className="flex flex-wrap gap-2.5">
              <span className="border border-white/[0.14] px-3.5 py-1.75 text-[12.5px] font-semibold text-gray-02">Remote-First</span>
              <span className="border border-white/[0.14] px-3.5 py-1.75 text-[12.5px] font-semibold text-gray-02">Based in Dhaka</span>
              <span className="border border-white/[0.14] px-3.5 py-1.75 text-[12.5px] font-semibold text-gray-02">4 Core Service Lines</span>
            </Reveal>
            <Reveal delay={0.4}>
              <Button title="Meet the Team" link="/about" variant="primary" />
            </Reveal>
          </div>

          <div className="relative z-10 grid grid-cols-3 gap-2.5">
            <div className="aspect-square overflow-hidden border border-white/[0.14]">
              <Image width={400} height={400} src="/default_image_02.jpg" alt="Portrait of a team member" className="block h-full w-full object-cover" loading="lazy" />
            </div>

            <div className="mt-0 aspect-square overflow-hidden border border-white/[0.14] sm:mt-4.5">
              <Image width={400} height={400} src="/default_image_02.jpg" alt="Portrait of a team member" className="block h-full w-full object-cover" loading="lazy" />
            </div>

            <div className="aspect-square overflow-hidden border border-white/[0.14] sm:mt-9">
              <Image width={400} height={400} src="/default_image_02.jpg" alt="Portrait of a team member" className="block h-full w-full object-cover" loading="lazy" />
            </div>

            <div className="mt-0 aspect-square overflow-hidden border border-white/[0.14] sm:-mt-4.5">
              <Image width={400} height={400} src="/default_image_02.jpg" alt="Portrait of a team member" className="block h-full w-full object-cover" loading="lazy" />
            </div>

            <div className="aspect-square overflow-hidden border border-white/[0.14]">
              <Image width={400} height={400} src="/default_image_02.jpg" alt="Portrait of a team member" className="block h-full w-full object-cover" loading="lazy" />
            </div>

            <div className="mt-0 aspect-square overflow-hidden border border-white/[0.14] sm:mt-4.5">
              <Image width={400} height={400} src="/default_image_02.jpg" alt="Portrait of a team member" className="block h-full w-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />

      <section id="faq" className="p-[46px_clamp(20px,5vw,64px)]">
        <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-8 lg:grid-cols-[.85fr_1.15fr] lg:gap-14">
          <div className="flex flex-col gap-2 md:gap-4 items-start">
            <Reveal y={12}>
              <Badge label="FAQ" />
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mb-3 max-w-2xl font-playfair text-[clamp(2rem,5vw,3rem)] font-bold leading-[1.05] text-white-01 italic">Questions, answered.</h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mb-5 text-base md:text-[20px] leading-[1.7] text-gray-02 max-w-115 font-light tracking-wide text-start">Everything you might want to know before starting a project with us. Can&apos;t find it here?</p>
            </Reveal>
            <Reveal delay={0.3}>
              <Orb width={320} height={320} />
            </Reveal>
          </div>
          <Reveal delay={0.1} className="w-full">
            <ContactFaq items={FAQS} />
          </Reveal>
        </div>
      </section>

      <section id="careers" className="p-[46px_clamp(20px,5vw,64px)]">
        <div className="relative rounded-none bg-white/3 backdrop-blur-sm max-w-7xl mx-auto overflow-hidden">
          <div aria-hidden="true" className="pointer-events-none absolute -top-15 -right-15 h-80 w-[320px] rounded-full bg-[radial-gradient(circle_at_35%_35%,rgba(255,255,255,0.12),rgba(255,255,255,0)_65%)] blur-[50px] -z-1" />

          <div aria-hidden="true" className="pointer-events-none absolute -bottom-17.5 -left-12.5 h-85 w-85 rounded-full bg-[radial-gradient(circle_at_40%_40%,rgba(255,255,255,0.08),rgba(255,255,255,0)_65%)] blur-[50px] -z-1" />
          <div className="grid grid-cols-1 items-center gap-8 bg-transparent px-[clamp(24px,5vw,64px)] py-10 md:gap-11 md:py-14 lg:grid-cols-[1.1fr_.9fr]">
            <div className="gap-2 md:gap-4 flex flex-col items-start">
              <Reveal y={12}>
                <Badge label="We are hiring" />
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="m-0 max-w-2xl font-playfair text-[clamp(2rem,5vw,3rem)] font-bold leading-[1.05] text-white-01 italic">Build the future with us.</h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-base md:text-[20px] leading-[1.7] text-gray-02 max-w-190 font-light tracking-wide text-start">We&apos;re always looking for talented developers, designers, and editors to join our growing, remote-first team.</p>
              </Reveal>
              <Reveal delay={0.3}>
                <Button title="Open Positions" link="/contact" />
              </Reveal>
            </div>

            <div className="flex flex-col gap-3">
              <Link href="careers.html" className="flex flex-wrap items-start justify-between gap-2 border border-white/14 bg-black-01 hover:bg-white-01/9 cursor-pointer rounded-none px-4.5 py-4 sm:items-center">
                <span className="text-[14.5px] font-semibold text-white-01">Frontend Developer</span>
                <span className="text-xs text-gray-00 font-jetbrain sm:whitespace-nowrap">Remote · Full-time</span>
              </Link>
              <Link href="careers.html" className="flex flex-wrap items-start justify-between gap-2 border border-white/14 bg-black-01 hover:bg-white-01/9 cursor-pointer rounded-none px-4.5 py-4 sm:items-center">
                <span className="text-[14.5px] font-semibold text-white-01">Video Editor</span>
                <span className="text-xs text-gray-00 font-jetbrain sm:whitespace-nowrap">Dhaka · Contract</span>
              </Link>
              <Link href="careers.html" className="flex flex-wrap items-start justify-between gap-2 border border-white/14 bg-black-01 hover:bg-white-01/9 cursor-pointer rounded-none px-4.5 py-4 sm:items-center">
                <span className="text-[14.5px] font-semibold text-white-01">BPO Associate</span>
                <span className="text-xs text-gray-00 font-jetbrain sm:whitespace-nowrap">Remote · Part-time</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="p-[46px_clamp(20px,5vw,64px)_92px]">
        <div className="rounded-none bg-white/3 backdrop-blur-sm max-w-7xl mx-auto">
          <div className="relative grid grid-cols-1 items-center gap-8 overflow-hidden rounded-none bg-transparent px-[clamp(24px,5vw,64px)] py-10 md:gap-13 md:py-14 lg:grid-cols-[1.1fr_.9fr]">
            <div className="relative gap-2 md:gap-4 flex flex-col items-start">
              <Reveal y={12}>
                <Badge label="Get in touch" />
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="m-0 max-w-2xl font-playfair text-[clamp(2rem,5vw,3rem)] font-bold leading-[1.05] text-white-01 italic">Have a project in mind?</h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-base md:text-[20px] leading-[1.7] text-gray-02 max-w-190 font-light tracking-wide text-start">Tell us a bit about what you&apos;re building. We usually reply within one business day.</p>
              </Reveal>
              <Reveal delay={0.3}>
                <Button title="Contact Us" link="/contact" variant="primary" />
              </Reveal>
            </div>

            <div className="relative flex flex-col gap-4">
              {infoCards.map((card) => (
                <div key={card.label} className="flex items-center gap-3 py-3.5 px-4 rounded-none border border-white/14 bg-black-01 hover:bg-white-01/9 cursor-pointer">
                  <span className="w-10 h-10 rounded-none bg-[#141414] border border-white/14 flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="#F5F5F2" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      {card.icon}
                    </svg>
                  </span>
                  <div className="min-w-0">
                    <div className="font-jetbrain text-[11px] tracking-[0.06em] text-gray-00 font-semibold mb-1">{card.label}</div>
                    <div className="wrap-break-words text-[15px] font-medium text-white-01">{card.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
