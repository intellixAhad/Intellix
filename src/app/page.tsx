import Badge from "@/components/Badge";
import Image from "next/image";
import Button from "@/components/Button";
import Link from "next/link";
import CircuitBackground from "@/components/CircuitBackground";
import ClientTicker from "@/components/ClientTicker";
import ServiceCard from "@/components/ServiceCard";
import { serviceIcons } from "@/data/serviceIcons";
import IndustryCard from "@/components/IndustryCard";
import { IndustryIcons } from "@/data/IndustryIcons";
import ProductAnimation from "@/components/ProductAnimation";
import { StaggerGroup, StaggerItem } from "@/components/motions/StaggerReveal";
import RollingNumber from "@/components/RollingNumber";
import Reveal from "@/components/reveal";
import ProjectCard from "@/components/ProjectCard";
import projectData from "@/data/projectData";

const stats: {
  prefix?: string;
  number: number;
  suffix?: string;
  label: string;
}[] = [
  { number: 30, suffix: "+", label: "Projects Delivered" },
  { number: 12, suffix: "+", label: "Clients Served" },
  { number: 7, suffix: "+", label: "Team Members" },
  { number: 4, label: "Core Service Line" },
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
      <section id="top" className="relative flex min-h-[100svh] flex-col items-center justify-between overflow-hidden px-[clamp(20px,5vw,64px)] py-6 md:py-0 md:pb-16">
        <CircuitBackground className="-z-10" />
        <div aria-hidden="true" className="absolute -top-17.5 -right-22.5 h-120 w-120 rounded-full bg-[radial-gradient(circle_at_35%_35%,rgba(255,255,255,0.14),rgba(255,255,255,0)_65%)] blur-[50px] pointer-events-none" />
        <div aria-hidden="true" className="absolute -bottom-20 -left-22.5 h-120 w-120 rounded-full bg-[radial-gradient(circle_at_40%_40%,rgba(255,255,255,0.09),rgba(255,255,255,0)_65%)] blur-[50px] pointer-events-none" />
        <div className="absolute right-[clamp(20px,5vw,64px)] top-30 hidden [writing-mode:vertical-rl] font-jetbrain text-[11px] font-semibold tracking-[0.35em] text-gray-01 lg:block">BUILD · DESIGN · AUTOMATE</div>
        <div className="absolute bottom-10 right-[clamp(20px,5vw,64px)] hidden [writing-mode:vertical-rl] font-jetbrain text-[11px] font-semibold tracking-[0.35em] text-gray-01 lg:block">SOFTWARE THAT SHIPS</div>

        <div className="relative mx-auto flex w-full max-w-360 flex-1 items-center justify-center py-12 md:py-16">
          <div className="flex w-full flex-col items-center justify-center">
            <Badge label="Full-service software Agency" />
            <h1 className="mb-6 max-w-[1000px] px-2 text-center font-plex text-[clamp(2rem,6vw,3.625rem)] font-extrabold leading-[1.06] tracking-[-0.01em] text-white-01">
              Software, design & media
              <br className="hidden sm:block" />
              engineered for real growth.
            </h1>
            <p className="mb-9 max-w-[900px] text-center text-[16px] leading-[1.65] text-gray-02 sm:text-[18px]">
              Intellix is a full-service software agency helping startups and businesses with web development, graphic design, video production, and back-office support — plus our own suite of intelligent products, including <strong className="text-white-01">Verbosa.ai</strong>
            </p>
            <div className="flex flex-wrap gap-3.5 mb-7">
              <Button title="start a project" link="/contact" variant="primary" />
              <Button title="explore Verbosa.ai" link="/contact" variant="secondary" />
            </div>
            <p className="text-[13px] text-gray-00 tracking-[0.02em] font-jetbrain">Remote-first team · Based in Dhaka, Bangladesh</p>
          </div>
          {/* <div className="relative">
            <div className="relative rounded-none border border-white/14 bg-[#141414] overflow-hidden">
              <div className="flex items-center gap-2 px-4.5 py-3.5 border-b border-white/14">
                <span className="w-2.75 h-2.75 rounded-full bg-[#F5F5F0]" />
                <span className="w-2.75 h-2.75 rounded-full bg-[#B5B5B0]" />
                <span className="w-2.75 h-2.75 rounded-full bg-[#6E6E68]" />
                <span className="ml-2.5 text-[12.5px] text-gray-00 font-jetbrain">intellix.tsx</span>
              </div>

              <div className="px-6 py-6.5 font-jetbrain text-[13.5px] leading-[1.9]">
                <div>
                  <span className="text-white">const</span> <span className="text-[#D8D8D2]">Intellix</span> <span className="text-[#A8A8A2]">=</span> <span className="text-[#A8A8A2]">()</span> <span className="text-[#A8A8A2]">=&gt;</span> <span className="text-[#A8A8A2]">{"{"}</span>
                </div>
                <div className="pl-5">
                  <span className="text-white">return</span> <span className="text-[#A8A8A2]">(</span>
                </div>
                <div className="pl-10">
                  <span className="text-[#A8A8A2]">&lt;</span>
                  <span className="text-[#D8D8D2]">Agency</span>
                </div>
                <div className="pl-15">
                  <span className="text-[#D8D8D2]">builds</span>
                  <span className="text-[#A8A8A2]">=</span>
                  <span className="text-[#7A7A74]">&quot;ideas&quot;</span>
                </div>
                <div className="pl-15">
                  <span className="text-[#D8D8D2]">delivers</span>
                  <span className="text-[#A8A8A2]">=</span>
                  <span className="text-[#7A7A74]">&quot;impact&quot;</span>
                </div>
                <div className="pl-10">
                  <span className="text-[#A8A8A2]">/&gt;</span>
                </div>
                <div className="pl-5">
                  <span className="text-[#A8A8A2]">);</span>
                </div>
                <div>
                  <span className="text-[#A8A8A2]">{"};"}</span>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -left-4 flex items-center gap-2 px-3.5 py-2.5 rounded-none bg-black-01 border border-white/14">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#F5F5F2" strokeWidth={2}>
                <polyline points="8 6 2 12 8 18" />
                <polyline points="16 6 22 12 16 18" />
              </svg>
              <span className="text-[12.5px] text-white-01 font-semibold font-jetbrain">Web Development</span>
            </div>

            <div className="absolute -bottom-4 -right-4 flex items-center gap-2 px-3.5 py-2.5 rounded-none bg-black-01 border border-white/14">
              <span className="w-2 h-2 rounded-none bg-white" />
              <span className="text-[12.5px] text-white-01 font-semibold font-jetbrain">Verbosa.ai · AI Product</span>
            </div>
          </div> */}
        </div>

        <div className="mx-auto w-full max-w-360 py-5 sm:py-8.5">
          <p className="mb-5.5 text-center text-sm font-semibold tracking-[.15em] text-gray-02 sm:text-base font-jetbrain">Our Trusted Partners</p>
          <ClientTicker />
        </div>
      </section>

      <section className="border-t border-b border-white/14 py-[70px] px-[clamp(20px,5vw,64px)] z-1 bg-white/3 backdrop-blur">
        <StaggerGroup className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <RollingNumber number={stat.number} prefix={stat.prefix} suffix={stat.suffix} />
              <div className="text-[14px] text-gray-02 mt-2 tracking-[0.02em] text-center">{stat.label}</div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <section id="services" className="p-[92px_clamp(20px,5vw,64px)_46px]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-15 text-left">
            <Reveal y={12}>
              <Badge label="what we do" />
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="m-0 max-w-2xl font-playfair text-[clamp(2rem,5vw,3rem)] font-bold leading-[1.05] text-white-01 italic">Everything you need to launch, look great, and scale operations.</h2>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {serviceIcons.map(({ title, description, icon }, index) => (
              <ServiceCard key={title} number={String(index + 1)} title={title} description={description} icon={icon} />
            ))}
          </Reveal>

          <Reveal delay={0.3} className="flex justify-center mt-11">
            <Button title="Learn More" link="/services" variant="primary" />
          </Reveal>
        </div>
      </section>

      <section className="p-[46px_clamp(20px,5vw,64px)_46px]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-15 text-left">
            <Badge label="industries we support" />
            <h2 className="m-0 max-w-2xl font-playfair text-[clamp(2rem,5vw,3rem)] font-bold leading-[1.05] text-white-01 italic">Built for founders and teams across every sector.</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {IndustryIcons.map(({ title, icon }, index) => (
              <IndustryCard key={index} title={title} icon={icon} />
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="p-[46px_clamp(20px,5vw,64px)_46px]">
        <div className="rounded-none bg-[#141414] max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 rounded-none bg-transparent px-[clamp(28px,5vw,64px)] py-14">
            <div>
              <Badge label="our product" />
              <h2 className="m-0 max-w-2xl font-playfair text-[clamp(2rem,5vw,3rem)] font-bold leading-[1.05] text-white-01 italic">Meet Verbosa.ai</h2>
              <p className="my-6.5 text-[16px] text-gray-02">Verbosa.ai is our in-house AI sales automation platform — voice calls, chat, email, and lead generation working together as one AI sales team. It's built and maintained by the same team behind Intellix.</p>
              <div className="mb-7.5 flex gap-5 flex-wrap">
                <span className="text-[12px] text-gray-01">AI-Powered</span>
                <span className="text-[12px] text-gray-01">Built by Intellix</span>
                <span className="text-[12px] text-gray-01">Made in Bangladesh</span>
              </div>
              <div className="flex flex-wrap gap-3.5">
                <Button title="Visit Verbosa.ai" link="https://verbosa.ai/" variant="primary" />
                <Button title="Full Product Page" link="/contact" variant="secondary" />
              </div>
            </div>

            <ProductAnimation />
          </div>
        </div>
      </section>

      <section id="projects" className="p-[46px_clamp(20px,5vw,64px)_46px]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-11 flex flex-wrap items-end justify-between gap-5">
            <div>
              <Badge label="recent projects" />
              <h2 className="m-0 max-w-2xl font-playfair text-[clamp(2rem,5vw,3rem)] font-bold leading-[1.05] text-white-01 italic">A look at what we've been building.</h2>
            </div>
            <Button title="view all project" link="/projects" variant="primary" />
          </div>

          <div className="grid grid-cols-1 gap-5.5 sm:grid-cols-2 lg:grid-cols-3">
            {projectData.slice(0, 3).map((projectData) => (
              <ProjectCard key={projectData.title} category={projectData.category} title={projectData.title} description={projectData.description} liveUrl={projectData.liveUrl} />
            ))}
          </div>
        </div>
      </section>

      <section id="why" className="p-[46px_clamp(20px,5vw,64px)_92px]">
        <div className="max-w-7xl mx-auto">
          <div>
            <Badge label="why intellix" />
            <h2 className="m-0 max-w-2xl font-playfair text-[clamp(2rem,5vw,3rem)] font-bold leading-[1.05] text-white-01 italic">A team that thinks like a partner, not a vendor.</h2>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 mt-12">
            <div className="relative flex gap-[18px] border border-white/[0.14] bg-[#141414] p-[26px]">
              <span className="absolute right-[18px] top-4 font-mono text-[12px] text-gray-00">01</span>

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
            </div>

            <div className="relative flex gap-[18px] border border-white/[0.14] bg-[#141414] p-[26px]">
              <span className="absolute right-[18px] top-4 font-mono text-[12px] text-gray-00">02</span>

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
            </div>

            <div className="relative flex gap-[18px] border border-white/[0.14] bg-[#141414] p-[26px]">
              <span className="absolute right-[18px] top-4 font-mono text-[12px] text-gray-00">03</span>

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
            </div>

            <div className="relative flex gap-[18px] border border-white/[0.14] bg-[#141414] p-[26px]">
              <span className="absolute right-[18px] top-4 font-mono text-[12px] text-gray-00">04</span>

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
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-white/[0.14] bg-black-01 p-[92px_clamp(20px,5vw,64px)]">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(115deg,rgba(255,255,255,0.035)_0px,rgba(255,255,255,0.035)_1px,transparent_1px,transparent_64px)]" />
        <div aria-hidden="true" className="pointer-events-none absolute bottom-[-30px] left-[clamp(0px,4vw,48px)] font-mono text-[200px] font-bold leading-none text-white/[0.04]">
          &lt;/&gt;
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="max-w-360 mx-auto">
            <div>
              <Badge label="tools & technologies" />
              <h2 className="m-0 max-w-2xl font-playfair text-[clamp(2rem,5vw,3rem)] font-bold leading-[1.05] text-white-01 italic">The stack behind every build.</h2>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4 mt-12">
              {/* Frontend */}
              <div className="relative border border-white/[0.14] bg-[#141414] px-5.5 py-7">
                <span className="absolute right-5 top-[18px] font-mono text-[12px] text-gray-00">01</span>

                <div className="mb-5 flex h-[46px] w-[46px] items-center justify-center border border-white/[0.14] text-white-01">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                </div>

                <h3 className="mb-[14px] mt-0 font-display text-[16.5px] font-semibold text-white-01">Frontend &amp; Web</h3>

                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "TypeScript"].map((item) => (
                    <span key={item} className="border border-white/[0.14] px-3 py-[6px] font-mono text-[12px] text-gray-02">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div className="relative border border-white/[0.14] bg-[#141414] px-5.5 py-7">
                <span className="absolute right-5 top-[18px] font-mono text-[12px] text-gray-00">02</span>

                <div className="mb-5 flex h-[46px] w-[46px] items-center justify-center border border-white/[0.14] text-white-01">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="6" rx="1" />
                    <rect x="2" y="15" width="20" height="6" rx="1" />
                    <line x1="6" y1="6" x2="6.01" y2="6" />
                    <line x1="6" y1="18" x2="6.01" y2="18" />
                  </svg>
                </div>

                <h3 className="mb-[14px] mt-0 font-display text-[16.5px] font-semibold text-white-01">Backend &amp; Infrastructure</h3>

                <div className="flex flex-wrap gap-2">
                  {["Node.js", "Laravel", "Django"].map((item) => (
                    <span key={item} className="border border-white/[0.14] px-3 py-[6px] font-mono text-[12px] text-gray-02">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Design */}
              <div className="relative border border-white/[0.14] bg-[#141414] px-5.5 py-7">
                <span className="absolute right-5 top-[18px] font-mono text-[12px] text-gray-00">03</span>

                <div className="mb-5 flex h-[46px] w-[46px] items-center justify-center border border-white/[0.14] text-white-01">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a9 9 0 1 0 0 18c1.1 0 2-.7 2-1.8 0-.5-.2-1-.5-1.3-.3-.3-.5-.8-.5-1.3 0-1 .8-1.8 1.8-1.8H17a4 4 0 0 0 4-4c0-4.4-4-8-9-8z" />
                    <circle cx="7.5" cy="10.5" r="1.1" />
                    <circle cx="10" cy="7" r="1.1" />
                    <circle cx="14.5" cy="7.5" r="1.1" />
                    <circle cx="17" cy="11" r="1.1" />
                  </svg>
                </div>

                <h3 className="mb-[14px] mt-0 font-display text-[16.5px] font-semibold text-white-01">Design &amp; Creative</h3>

                <div className="flex flex-wrap gap-2">
                  {["Figma", "Premiere Pro", "After Effects"].map((item) => (
                    <span key={item} className="border border-white/[0.14] px-3 py-[6px] font-mono text-[12px] text-gray-02">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* CMS */}
              <div className="relative border border-white/[0.14] bg-[#141414] px-5.5 py-7">
                <span className="absolute right-5 top-[18px] font-mono text-[12px] text-gray-00">04</span>

                <div className="mb-5 flex h-[46px] w-[46px] items-center justify-center border border-white/[0.14] text-white-01">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="7" rx="1" />
                    <rect x="14" y="3" width="7" height="7" rx="1" />
                    <rect x="3" y="14" width="7" height="7" rx="1" />
                    <rect x="14" y="14" width="7" height="7" rx="1" />
                  </svg>
                </div>

                <h3 className="mb-[14px] mt-0 font-display text-[16.5px] font-semibold text-white-01">CMS &amp; Platforms</h3>

                <div className="flex flex-wrap gap-2">
                  {["WordPress", "Webflow", "Framer"].map((item) => (
                    <span key={item} className="border border-white/[0.14] px-3 py-[6px] font-mono text-[12px] text-gray-02">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="relative overflow-hidden p-[92px_clamp(20px,5vw,64px)_46px]">
        <div aria-hidden="true" className="pointer-events-none absolute right-[-60px] top-[-50px] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle_at_35%_35%,rgba(255,255,255,0.11),rgba(255,255,255,0)_65%)] blur-[50px]" />

        <div aria-hidden="true" className="pointer-events-none absolute bottom-[-60px] left-[-50px] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle_at_40%_40%,rgba(255,255,255,0.08),rgba(255,255,255,0)_65%)] blur-[50px]" />

        <svg className="pointer-events-none absolute left-[8%] top-[300] hidden h-1 w-[84%] lg:block" viewBox="0 0 100 1" preserveAspectRatio="none">
          <line x1="0" y1="0.5" x2="100" y2="0.5" stroke="rgba(255,255,255,.08)" strokeWidth="0.6" strokeDasharray="2,2" />
        </svg>

        <div className="max-w-7xl mx-auto">
          <div>
            <Badge label="how we work" />
            <h2 className="m-0 max-w-2xl font-playfair text-[clamp(2rem,5vw,3rem)] font-bold leading-[1.05] text-white-01 italic">A clear process, from first call to launch.</h2>
          </div>

          <div className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 mt-12">
            <div>
              <div className="mb-[14px] font-display text-[38px] font-bold text-white">01</div>

              <h3 className="mb-2 mt-0 font-display text-[16.5px] font-semibold text-white-01">Discover</h3>

              <p className="m-0 text-[14px] leading-[1.6] text-gray-02">We learn your goals, users, and constraints before writing a single line of code.</p>
            </div>

            <div>
              <div className="mb-[14px] font-display text-[38px] font-bold text-white">02</div>

              <h3 className="mb-2 mt-0 font-display text-[16.5px] font-semibold text-white-01">Design</h3>

              <p className="m-0 text-[14px] leading-[1.6] text-gray-02">Wireframes and visual design turn ideas into a clear, testable plan.</p>
            </div>

            <div>
              <div className="mb-[14px] font-display text-[38px] font-bold text-white">03</div>

              <h3 className="mb-2 mt-0 font-display text-[16.5px] font-semibold text-white-01">Build</h3>

              <p className="m-0 text-[14px] leading-[1.6] text-gray-02">Our developers build your product with clean, maintainable, and scalable code.</p>
            </div>

            <div>
              <div className="mb-[14px] font-display text-[38px] font-bold text-white">04</div>

              <h3 className="mb-2 mt-0 font-display text-[16.5px] font-semibold text-white-01">Launch &amp; Support</h3>

              <p className="m-0 text-[14px] leading-[1.6] text-gray-02">We ship, monitor, and stay on to support and improve what we built.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="relative mx-auto w-full  max-w-360 overflow-hidden p-[46px_clamp(20px,5vw,64px)]">
        <div className="relative grid grid-cols-1 lg:grid-cols-[1.1fr_.9fr] items-center gap-11 overflow-hidden border border-white/[0.14] bg-[#141414] p-[clamp(32px,5vw,56px)]">
          <div aria-hidden="true" className="pointer-events-none absolute -top-[60px] -right-[60px] h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle_at_35%_35%,rgba(255,255,255,0.12),rgba(255,255,255,0)_65%)] blur-[50px] " />

          <div aria-hidden="true" className="pointer-events-none absolute -bottom-[70px] -left-[50px] h-[340px] w-[340px] rounded-full bg-[radial-gradient(circle_at_40%_40%,rgba(255,255,255,0.08),rgba(255,255,255,0)_65%)] blur-[50px]"/>

          {/* Left Content */}
          <div className="relative z-10">
          
            <div>
              <Badge label="who we are" />
              <h2 className="m-0 max-w-2xl font-playfair text-[clamp(2rem,5vw,3rem)] font-bold leading-[1.05] text-white-01 italic">A small, focused team building real products.</h2>
              <p className="my-6.5 text-[16px] text-gray-02">Intellix is a remote-first team of developers, designers, and editors working out of Dhaka, Bangladesh — covering everything from client projects to our own product, Verbosa.ai.</p>
            </div>

            <div className="mb-7 flex flex-wrap gap-2.5">
              <span className="border border-white/[0.14] px-[14px] py-[7px] text-[12.5px] font-semibold text-gray-02">Remote-First</span>
              <span className="border border-white/[0.14] px-[14px] py-[7px] text-[12.5px] font-semibold text-gray-02">Based in Dhaka</span>
              <span className="border border-white/[0.14] px-[14px] py-[7px] text-[12.5px] font-semibold text-gray-02">4 Core Service Lines</span>
            </div>

            <Button title="Meet the Team" link="/about" variant="primary" />

          </div>

          {/* Team Photos */}
          <div className="relative z-10 grid grid-cols-3 gap-2.5">
            <div className="aspect-square overflow-hidden border border-white/[0.14]">
              <Image width={400} height={400} src="/default_image_02.jpg" alt="Portrait of a team member" className="block h-full w-full object-cover" loading="lazy" />
            </div>

            <div className="mt-0 aspect-square overflow-hidden border border-white/[0.14] sm:mt-[18px]">
              <Image width={400} height={400} src="/default_image_02.jpg" alt="Portrait of a team member" className="block h-full w-full object-cover" loading="lazy" />
            </div>

            <div className="aspect-square overflow-hidden border border-white/[0.14]">
              <Image width={400} height={400} src="/default_image_02.jpg" alt="Portrait of a team member" className="block h-full w-full object-cover" loading="lazy" />
            </div>

            <div className="mt-0 aspect-square overflow-hidden border border-white/[0.14] sm:-mt-[18px]">
              <Image width={400} height={400} src="/default_image_02.jpg" alt="Portrait of a team member" className="block h-full w-full object-cover" loading="lazy" />
            </div>

            <div className="aspect-square overflow-hidden border border-white/[0.14]">
              <Image width={400} height={400} src="/default_image_02.jpg" alt="Portrait of a team member" className="block h-full w-full object-cover" loading="lazy" />
            </div>

            <div className="mt-0 aspect-square overflow-hidden border border-white/[0.14] sm:mt-[18px]">
              <Image width={400} height={400} src="/default_image_02.jpg" alt="Portrait of a team member" className="block h-full w-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="p-[46px_clamp(20px,5vw,64px)]">
        <div className="max-w-7xl mx-auto">
            <div>
              <Badge label="client voices" />
              <h2 className="m-0 max-w-2xl font-playfair text-[clamp(2rem,5vw,3rem)] font-bold leading-[1.05] text-white-01 italic">What partners say about working with us.</h2>
            </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 mt-14">
          {/* Testimonial 1 */}
          <div className="relative overflow-hidden border border-white/[0.14] bg-[#141414] px-6 py-[26px]">
            <svg className="pointer-events-none absolute right-4 top-[14px] opacity-[0.08]" viewBox="0 0 24 24" width="56" height="56" fill="none" stroke="#F5F5F2" strokeWidth="1.4">
              <path d="M7 15h3l2-4V7H5v6h3z" />
              <path d="M15 15h3l2-4V7h-7v6h3z" />
            </svg>

            <p className="relative mb-5.5 text-[14.5px] leading-[1.7] text-gray-02">"[Add a short quote from your client about the results Intellix delivered.]"</p>

            <div className="relative flex items-center gap-3">
              <span className="flex h-[38px] w-[38px] items-center justify-center border border-white/[0.14] text-[12px] font-bold text-gray-02">[?]</span>

              <div>
                <div className="text-[14px] font-semibold text-white-01">[Client Name]</div>

                <div className="text-[12.5px] text-gray-00">[Role, Company]</div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      <section id="faq" className="p-[46px_clamp(20px,5vw,64px)]">
        <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-8 lg:grid-cols-[.85fr_1.15fr] lg:gap-14">
          <div className="lg:sticky lg:top-[100px]">
            <div className="mb-[14px] inline-flex items-center gap-2.5">
              <span className="h-[6px] w-[6px] bg-[#9A9A94]" />
              <p className="m-0 font-mono text-[12px] font-semibold uppercase tracking-[0.1em] text-gray-02">FAQ</p>
            </div>
            <h2 className="mb-4 font-display text-[clamp(1.875rem,4vw,2.375rem)] font-semibold text-white-01">Questions, answered.</h2>
            <p className="mb-7 max-w-[340px] text-[15px] leading-[1.7] text-gray-02">Everything you might want to know before starting a project with us. Can't find it here?</p>
            <Button title="Contact Us" link="/contact" />
          </div>

          {/* FAQ Items */}
          <div className="flex flex-col gap-3">
            {/* FAQ 1 - Open */}
            <div className="overflow-hidden border border-white bg-[#1C1C1C]">
              <button
                type="button"
                aria-expanded="true"
                className="
            flex
            w-full
            items-center
            justify-between
            gap-4
            border-none
            bg-transparent
            px-5.5
            py-5
            text-left
            text-[15.5px]
            font-semibold
            text-white-01
          "
              >
                What services does Intellix provide?
                <span className="relative h-4 w-4 shrink-0">
                  <span className="absolute left-0 top-1/2 h-[2px] w-4 -translate-y-1/2 bg-gray-02" />

                  <span
                    className="
                absolute
                left-0
                top-1/2
                h-[2px]
                w-4
                -translate-y-1/2
                rotate-90
                scale-y-0
                bg-gray-02
              "
                  />
                </span>
              </button>

              <div className="overflow-hidden px-5.5 pb-5.5">
                <p className="m-0 text-[14px] leading-[1.65] text-gray-02">We offer web development, graphic design, video editing, and BPO (back-office) services, along with our own in-house products like Verbosa.ai.</p>
              </div>
            </div>

            {/* FAQ 2 */}
            <div className="overflow-hidden border border-white/[0.14] bg-[#141414]">
              <button
                type="button"
                aria-expanded="false"
                className="
            flex
            w-full
            items-center
            justify-between
            gap-4
            border-none
            bg-transparent
            px-5.5
            py-5
            text-left
            text-[15.5px]
            font-semibold
            text-white-01
          "
              >
                Do you work with startups as well as established businesses?
                <span className="relative h-4 w-4 shrink-0">
                  <span className="absolute left-0 top-1/2 h-[2px] w-4 -translate-y-1/2 bg-gray-02" />
                  <span className="absolute left-0 top-1/2 h-[2px] w-4 -translate-y-1/2 rotate-90 bg-gray-02" />
                </span>
              </button>

              <div className="hidden overflow-hidden px-5.5 pb-5.5">
                <p className="m-0 text-[14px] leading-[1.65] text-gray-02">Yes. We work with early-stage startups, growing businesses, and established companies — tailoring our process and team size to fit your budget and timeline.</p>
              </div>
            </div>

            {/* FAQ 3 */}
            <div className="overflow-hidden border border-white/[0.14] bg-[#141414]">
              <button
                type="button"
                aria-expanded="false"
                className="
            flex
            w-full
            items-center
            justify-between
            gap-4
            border-none
            bg-transparent
            px-5.5
            py-5
            text-left
            text-[15.5px]
            font-semibold
            text-white-01
          "
              >
                What does your project process look like?
                <span className="relative h-4 w-4 shrink-0">
                  <span className="absolute left-0 top-1/2 h-[2px] w-4 -translate-y-1/2 bg-gray-02" />
                  <span className="absolute left-0 top-1/2 h-[2px] w-4 -translate-y-1/2 rotate-90 bg-gray-02" />
                </span>
              </button>

              <div className="hidden overflow-hidden px-5.5 pb-5.5">
                <p className="m-0 text-[14px] leading-[1.65] text-gray-02">We follow four stages: Discover, Design, Build, and Launch &amp; Support — with regular check-ins so you always know where your project stands.</p>
              </div>
            </div>

            {/* FAQ 4 */}
            <div className="overflow-hidden border border-white/[0.14] bg-[#141414]">
              <button
                type="button"
                aria-expanded="false"
                className="
            flex
            w-full
            items-center
            justify-between
            gap-4
            border-none
            bg-transparent
            px-5.5
            py-5
            text-left
            text-[15.5px]
            font-semibold
            text-white-01
          "
              >
                Do you work with clients outside Bangladesh?
                <span className="relative h-4 w-4 shrink-0">
                  <span className="absolute left-0 top-1/2 h-[2px] w-4 -translate-y-1/2 bg-gray-02" />
                  <span className="absolute left-0 top-1/2 h-[2px] w-4 -translate-y-1/2 rotate-90 bg-gray-02" />
                </span>
              </button>

              <div className="hidden overflow-hidden px-5.5 pb-5.5">
                <p className="m-0 text-[14px] leading-[1.65] text-gray-02">Yes. We're a remote-first team based in Dhaka, and we regularly work with clients around the world over video calls, chat, and shared project boards.</p>
              </div>
            </div>

            {/* FAQ 5 */}
            <div className="overflow-hidden border border-white/[0.14] bg-[#141414]">
              <button
                type="button"
                aria-expanded="false"
                className="
            flex
            w-full
            items-center
            justify-between
            gap-4
            border-none
            bg-transparent
            px-5.5
            py-5
            text-left
            text-[15.5px]
            font-semibold
            text-white-01
          "
              >
                How do I get a quote for my project?
                <span className="relative h-4 w-4 shrink-0">
                  <span className="absolute left-0 top-1/2 h-[2px] w-4 -translate-y-1/2 bg-gray-02" />
                  <span className="absolute left-0 top-1/2 h-[2px] w-4 -translate-y-1/2 rotate-90 bg-gray-02" />
                </span>
              </button>

              <div className="hidden overflow-hidden px-5.5 pb-5.5">
                <p className="m-0 text-[14px] leading-[1.65] text-gray-02">Fill out the contact form below with a bit of detail about your project, and our team will get back to you with next steps and a proposal.</p>
              </div>
            </div>

            {/* FAQ 6 */}
            <div className="overflow-hidden border border-white/[0.14] bg-[#141414]">
              <button
                type="button"
                aria-expanded="false"
                className="
            flex
            w-full
            items-center
            justify-between
            gap-4
            border-none
            bg-transparent
            px-5.5
            py-5
            text-left
            text-[15.5px]
            font-semibold
            text-white-01
          "
              >
                Do you offer support after launch?
                <span className="relative h-4 w-4 shrink-0">
                  <span className="absolute left-0 top-1/2 h-[2px] w-4 -translate-y-1/2 bg-gray-02" />
                  <span className="absolute left-0 top-1/2 h-[2px] w-4 -translate-y-1/2 rotate-90 bg-gray-02" />
                </span>
              </button>

              <div className="hidden overflow-hidden px-5.5 pb-5.5">
                <p className="m-0 text-[14px] leading-[1.65] text-gray-02">Yes — our team stays engaged after launch for bug fixes, improvements, and ongoing support so your product keeps running smoothly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="careers" className="p-[46px_clamp(20px,5vw,64px)]">
        <div className="rounded-none bg-[#141414] max-w-7xl mx-auto">
          <div className="grid grid-cols-1 items-center gap-8 bg-transparent px-[clamp(24px,5vw,64px)] py-10 md:gap-11 md:py-14 lg:grid-cols-[1.1fr_.9fr]">
            <div>
              <Badge label="WE are hiring" />
              <h2 className="mb-4 font-playfair text-[clamp(1.875rem,4vw,2.375rem)] font-semibold text-black-01bg-black-01">Build the future with us.</h2>
              <p className="text-[15.5px] leading-[1.7] text-gray-02 mb-7 max-w-[440px] font-plex">We&apos;re always looking for talented developers, designers, and editors to join our growing, remote-first team.</p>
              <Button title="Open Positions" link="/contact" />
            </div>

            <div className="flex flex-col gap-3">
              <Link href="careers.html" className="flex flex-wrap items-start justify-between gap-2 border border-white/14 bg-[#141414] rounded-none px-4.5 py-4 hover:bg-white-01/8 sm:items-center">
                <span className="text-[14.5px] font-semibold text-white-01">Frontend Developer</span>
                <span className="text-xs text-gray-00 font-jetbrain sm:whitespace-nowrap">Remote · Full-time</span>
              </Link>
              <Link href="careers.html" className="flex flex-wrap items-start justify-between gap-2 border border-white/14 bg-[#141414] rounded-none px-4.5 py-4 hover:bg-white-01/8 sm:items-center">
                <span className="text-[14.5px] font-semibold text-white-01">Video Editor</span>
                <span className="text-xs text-gray-00 font-jetbrain sm:whitespace-nowrap">Dhaka · Contract</span>
              </Link>
              <Link href="careers.html" className="flex flex-wrap items-start justify-between gap-2 border border-white/14 bg-[#141414] rounded-none px-4.5 py-4 hover:bg-white-01/8 sm:items-center">
                <span className="text-[14.5px] font-semibold text-white-01">BPO Associate</span>
                <span className="text-xs text-gray-00 font-jetbrain sm:whitespace-nowrap">Remote · Part-time</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="p-[46px_clamp(20px,5vw,64px)_92px]">
        <div className="rounded-none bg-[#141414] max-w-7xl mx-auto">
          <div className="relative grid grid-cols-1 items-center gap-8 overflow-hidden rounded-none bg-transparent px-[clamp(24px,5vw,64px)] py-10 md:gap-13 md:py-14 lg:grid-cols-[1.1fr_.9fr]">
            <div className="relative">
              <Badge label="Get in touch" />
              <h2 className="mb-4.5 font-playfair text-[clamp(1.875rem,4vw,2.375rem)] font-semibold text-white-01">Have a project in mind?</h2>
              <p className="text-[15.5px] text-gray-02 leading-[1.7] mb-8 max-w-110 font-plex">Tell us a bit about what you&apos;re building. We usually reply within one business day.</p>
              <Button title="Contact Us" link="/contact" variant="secondary" />
              <div className="flex gap-2.5 mt-7.5">
                <a href="" aria-label="LinkedIn" className="flex h-9 w-9 items-center justify-center hover:bg-white-01/12 rounded-md">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#f5f5f5">
                    <path d="M6.94 8.5H3.56V20H6.94V8.5ZM5.25 3C4.14 3 3.25 3.9 3.25 5C3.25 6.1 4.14 7 5.25 7C6.36 7 7.25 6.1 7.25 5C7.25 3.9 6.36 3 5.25 3ZM20.75 13.41C20.75 9.93 18.9 8.3 16.44 8.3C14.45 8.3 13.56 9.39 13.06 10.15V8.5H9.69V20H13.06V14.3C13.06 12.8 13.34 11.35 15.22 11.35C17.07 11.35 17.1 13.06 17.1 14.4V20H20.47L20.75 13.41Z" />
                  </svg>
                </a>
                <a href="" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center hover:bg-white-01/12 rounded-md">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#f5f5f5">
                    <path d="M13.5 21V12.75H16.25L16.66 9.54H13.5V7.49C13.5 6.56 13.76 5.93 15.08 5.93H16.75V3.06C16.46 3.02 15.46 2.94 14.3 2.94C11.88 2.94 10.22 4.42 10.22 7.14V9.54H7.47V12.75H10.22V21H13.5Z" />
                  </svg>
                </a>
                <a href="" aria-label="email" className="flex h-9 w-9 items-center justify-center hover:bg-white-01/12 rounded-md">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="5" width="18" height="14" rx="2" stroke="#f5f5f5" strokeWidth="2.5" />
                    <path d="M4 7L12 13L20 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
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
                    <div className="break-words text-[15px] font-medium text-white-01">{card.value}</div>
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
