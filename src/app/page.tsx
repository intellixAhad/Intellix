import Badge from "@/components/Badge";
import GridBG from "@/components/GridBG";
import Link from "next/link";

const page = () => {
  return (
    <>
      <section
        id="top"
        className="relative overflow-hidden pt-16 h-screen p-[64px_clamp(20px,5vw,64px)_64px] flex flex-col justify-between items-center"
      >
        <GridBG />
        <div
          aria-hidden="true"
          className="absolute -top-17.5 -right-22.5 h-120 w-120 rounded-full bg-[radial-gradient(circle_at_35%_35%,rgba(255,255,255,0.14),rgba(255,255,255,0)_65%)] blur-[50px] pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-20 -left-22.5 h-120 w-120 rounded-full bg-[radial-gradient(circle_at_40%_40%,rgba(255,255,255,0.09),rgba(255,255,255,0)_65%)] blur-[50px] pointer-events-none"
        />
        <div className="absolute top-30 right-[clamp(20px,5vw,64px)] [writing-mode:vertical-rl] tracking-[0.35em] text-[11px] font-semibold text-gray-01 font-jetbrain">
          BUILD · DESIGN · AUTOMATE
        </div>
        <div className="absolute bottom-10 right-[clamp(20px,5vw,64px)] [writing-mode:vertical-rl] tracking-[0.35em] text-[11px] font-semibold text-gray-01 font-jetbrain">
          SOFTWARE THAT SHIPS
        </div>

        <div className="grid grid-cols-[1.25fr_0.75fr] gap-14 relative items-center h-full w-full max-w-[1440px] mx-auto">
          <div>
            <Badge label="Full-service software Agency" />
            <h1 className="font-playfair font-extrabold leading-[1.06] tracking-[-0.01em] mb-6 text-white-01 text-[58px]">
              Software, design
              <br /> & media - engineered
              <br />
              for real growth.
            </h1>
            <p className="text-[17px] leading-[1.65] text-gray-02 max-w-135 mb-9">
              Intellix is a full-service software agency helping startups and
              businesses with web development, graphic design, video production,
              and back-office support — plus our own suite of intelligent
              products, including{" "}
              <strong className="text-white-01">Verbosa.ai</strong>
            </p>
            <div className="flex flex-wrap gap-3.5 mb-7">
              <Link
                href={"/"}
                className="inline-flex items-center gap-2 py-3.5 px-6.5 bg-white-00 text-black-01 font-jetbrain font-bold text-sm tracking-[0.04em] uppercase border border-white-00"
              >
                Start a project
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="none"
                  stroke="#0A0A0A"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
              <Link
                href={"/"}
                className="inline-flex items-center gap-2 py-3.5 px-6.5 text-white-01 font-jetbrain font-bold text-sm tracking-[0.04em] uppercase border border-white-00"
              >
                Explore Verbosa.ai
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>
            <p className="text-[13px] text-gray-00 tracking-[0.02em] font-jetbrain">
              Remote-first team · Based in Dhaka, Bangladesh
            </p>
          </div>
          <div className="relative">
            <div className="relative rounded-none border border-white/14 bg-[#141414] overflow-hidden">
              <div className="flex items-center gap-2 px-4.5 py-3.5 border-b border-white/14">
                <span className="w-2.75 h-2.75 rounded-full bg-[#F5F5F0]" />
                <span className="w-2.75 h-2.75 rounded-full bg-[#B5B5B0]" />
                <span className="w-2.75 h-2.75 rounded-full bg-[#6E6E68]" />
                <span className="ml-2.5 text-[12.5px] text-[#6E6E6A] font-jetbrain">
                  intellix.tsx
                </span>
              </div>

              <div className="px-6 py-6.5 font-jetbrain text-[13.5px] leading-[1.9]">
                <div>
                  <span className="text-white">const</span>{" "}
                  <span className="text-[#D8D8D2]">Intellix</span>{" "}
                  <span className="text-[#A8A8A2]">=</span>{" "}
                  <span className="text-[#A8A8A2]">()</span>{" "}
                  <span className="text-[#A8A8A2]">=&gt;</span>{" "}
                  <span className="text-[#A8A8A2]">{"{"}</span>
                </div>
                <div className="pl-5">
                  <span className="text-white">return</span>{" "}
                  <span className="text-[#A8A8A2]">(</span>
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

            <div className="absolute -top-4 -left-4 flex items-center gap-2 px-3.5 py-2.5 rounded-none bg-[#0A0A0A] border border-white/14">
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="none"
                stroke="#F5F5F2"
                strokeWidth={2}
              >
                <polyline points="8 6 2 12 8 18" />
                <polyline points="16 6 22 12 16 18" />
              </svg>
              <span className="text-[12.5px] text-[#F5F5F2] font-semibold font-jetbrain">
                Web Development
              </span>
            </div>

            <div className="absolute -bottom-4 -right-4 flex items-center gap-2 px-3.5 py-2.5 rounded-none bg-[#0A0A0A] border border-white/14">
              <span className="w-2 h-2 rounded-none bg-white" />
              <span className="text-[12.5px] text-[#F5F5F2] font-semibold font-jetbrain">
                Verbosa.ai · AI Product
              </span>
            </div>
          </div>
        </div>

        <div className="py-8.5 max-w-360 mx-auto w-full">
          <p className="text-center text-xs tracking-[.15em] text-gray-02 font-semibold mb-5.5 font-jetbrain">
            Our Trusted Partners
          </p>
          <div className="marquee-wrap overflow-hidden w-full">
            <div className="marquee-track flex gap-12 w-max items-center">
              <span className="font-fraunces font-semibold text-lg text-text-gray-02 whitespace-nowrap">
                Verdoira.com
              </span>
              <span className="w-1.75 h-1.75 rounded-none bg-white-00/15" />
              <span className="font-fraunces font-semibold text-lg text-text-gray-02 whitespace-nowrap">
                BYD
              </span>
              <span className="w-1.75 h-1.75 rounded-none bg-white-00/15" />
              <span className="font-fraunces font-semibold text-lg text-text-gray-02 whitespace-nowrap">
                Shutter & Slate
              </span>
              <span className="w-1.75 h-1.75 rounded-none bg-white-00/15" />
              <span className="font-fraunces font-semibold text-lg text-text-gray-02 whitespace-nowrap">
                Sore
              </span>
              <span className="w-1.75 h-1.75 rounded-none bg-white-00/15" />
              <span className="font-fraunces font-semibold text-lg text-text-gray-02 whitespace-nowrap">
                Laser.me
              </span>
              <span className="w-1.75 h-1.75 rounded-none bg-white-00/15" />
              <span className="font-fraunces font-semibold text-lg text-text-gray-02 whitespace-nowrap">
                DPP Connects
              </span>
              <span className="w-1.75 h-1.75 rounded-none bg-white-00/15" />
              <span className="font-fraunces font-semibold text-lg text-text-gray-02 whitespace-nowrap">
                United One Communications
              </span>
              <span className="w-1.75 h-1.75 rounded-none bg-white-00/15" />
              <span className="font-fraunces font-semibold text-lg text-text-gray-02 whitespace-nowrap">
                Kardiologicum
              </span>
              <span className="w-1.75 h-1.75 rounded-none bg-white-00/15" />
              <span className="font-fraunces font-semibold text-lg text-text-gray-02 whitespace-nowrap">
                Nido Isola
              </span>
              <span className="w-1.75 h-1.75 rounded-none bg-white-00/15" />
              <span className="font-fraunces font-semibold text-lg text-text-gray-02 whitespace-nowrap">
                Affie & Allie
              </span>
              <span className="w-1.75 h-1.75 rounded-none bg-white-00/15" />
              <span className="font-fraunces font-semibold text-lg text-text-gray-02 whitespace-nowrap">
                Alex AI
              </span>
              <span className="w-1.75 h-1.75 rounded-none bg-white-00/15" />
              <span className="font-fraunces font-semibold text-lg text-text-gray-02 whitespace-nowrap">
                IBTechprep
              </span>
              <span className="w-1.75 h-1.75 rounded-none bg-white-00/15" />
              <span className="font-fraunces font-semibold text-lg text-text-gray-02 whitespace-nowrap">
                GradeSaver
              </span>
              <span className="w-1.75 h-1.75 rounded-none bg-white-00/15" />
              <span className="font-fraunces font-semibold text-lg text-text-gray-02 whitespace-nowrap">
                DivineGroup
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* STATS / ACHIEVEMENTS */}
<section className="relative overflow-hidden py-20 px-[clamp(20px,5vw,64px)]">
  <div
    aria-hidden="true"
    className="absolute -top-[60px] right-[8%] w-[340px] h-[340px] rounded-full pointer-events-none blur-[50px]"
    style={{
      background:
        "radial-gradient(circle at 35% 35%, rgba(255,255,255,.1), rgba(255,255,255,0) 65%)",
    }}
  />
  <div
    aria-hidden="true"
    className="absolute -bottom-[70px] left-[6%] w-[360px] h-[360px] rounded-full pointer-events-none blur-[50px]"
    style={{
      background:
        "radial-gradient(circle at 40% 40%, rgba(255,255,255,.08), rgba(255,255,255,0) 65%)",
    }}
  />

  <div className="relative max-w-[1100px] mx-auto grid grid-cols-4 gap-8 text-center">
    <div>
      <div className="font-fraunces text-[42px] font-bold text-white">[XX]+</div>
      <div className="text-[13.5px] text-[#A6A6A2] mt-2 tracking-[.02em]">Projects Delivered</div>
    </div>
    <div>
      <div className="font-fraunces text-[42px] font-bold text-white">[XX]+</div>
      <div className="text-[13.5px] text-[#A6A6A2] mt-2 tracking-[.02em]">Clients Served</div>
    </div>
    <div>
      <div className="font-fraunces text-[42px] font-bold text-white">4</div>
      <div className="text-[13.5px] text-[#A6A6A2] mt-2 tracking-[.02em]">Core Service Lines</div>
    </div>
    <div>
      <div className="font-fraunces text-[42px] font-bold text-white">1</div>
      <div className="text-[13.5px] text-[#A6A6A2] mt-2 tracking-[.02em]">In-House Product — Verbosa.ai</div>
    </div>
  </div>
</section>

      {/* SERVICES */}
      <section
        id="services"
        className="max-w-[1240px] mx-auto pt-5 px-[clamp(20px,5vw,64px)] pb-[100px]"
      >
        <div className="max-w-[640px] mb-[60px] text-left">
          <div className="inline-flex items-center gap-2.5 mb-[14px]">
            <span className="w-1.5 h-1.5 bg-white" />
            <p className="font-jetbrain text-xs tracking-[.1em] font-semibold text-[#A6A6A2] uppercase m-0">
              What We Do
            </p>
          </div>
          <h2 className="font-fraunces text-[38px] font-semibold tracking-[-0.01em] text-[#F5F5F2] m-0">
            Everything you need to launch, look great, and scale operations.
          </h2>
        </div>

        <div className="grid grid-cols-4 gap-5">
          <div className="relative border border-white/14 bg-[#141414] rounded-none py-7 px-6">
            <span className="absolute top-5 right-[22px] font-jetbrain text-xs text-[#6E6E6A]">
              01
            </span>
            <div className="w-[46px] h-[46px] rounded-none bg-transparent border border-white/14 flex items-center justify-center text-[#F5F5F2] mb-5">
              <svg
                viewBox="0 0 24 24"
                width="22"
                height="22"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.6}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="8 6 2 12 8 18" />
                <polyline points="16 6 22 12 16 18" />
              </svg>
            </div>
            <h3 className="font-fraunces text-lg font-semibold text-[#F5F5F2] mb-2.5">
              Web Development
            </h3>
            <p className="text-[14.5px] leading-[1.65] text-[#A6A6A2] m-0">
              Custom websites, web apps, and platforms built with modern
              frameworks — from marketing sites to full-stack products.
            </p>
          </div>

          <div className="relative border border-white/14 bg-[#141414] rounded-none py-7 px-6">
            <span className="absolute top-5 right-[22px] font-jetbrain text-xs text-[#6E6E6A]">
              02
            </span>
            <div className="w-[46px] h-[46px] rounded-none bg-transparent border border-white/14 flex items-center justify-center text-[#F5F5F2] mb-5">
              <svg
                viewBox="0 0 24 24"
                width="22"
                height="22"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.6}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 19l7-7 3 3-7 7-3-3z" />
                <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                <path d="M2 2l7.586 7.586" />
                <circle cx="11" cy="11" r="2" />
              </svg>
            </div>
            <h3 className="font-fraunces text-lg font-semibold text-[#F5F5F2] mb-2.5">
              Graphic Design
            </h3>
            <p className="text-[14.5px] leading-[1.65] text-[#A6A6A2] m-0">
              Brand identities, UI design, and visual assets that make your
              product and marketing instantly recognizable.
            </p>
          </div>

          <div className="relative border border-white/14 bg-[#141414] rounded-none py-7 px-6">
            <span className="absolute top-5 right-[22px] font-jetbrain text-xs text-[#6E6E6A]">
              03
            </span>
            <div className="w-[46px] h-[46px] rounded-none bg-transparent border border-white/14 flex items-center justify-center text-[#F5F5F2] mb-5">
              <svg
                viewBox="0 0 24 24"
                width="22"
                height="22"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.6}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="5" width="15" height="14" rx="2" />
                <polygon points="17 9 22 6 22 18 17 15" />
              </svg>
            </div>
            <h3 className="font-fraunces text-lg font-semibold text-[#F5F5F2] mb-2.5">
              Video Editing
            </h3>
            <p className="text-[14.5px] leading-[1.65] text-[#A6A6A2] m-0">
              Promotional videos, social content, and motion graphics edited to
              hold attention and drive engagement.
            </p>
          </div>

          <div className="relative border border-white/14 bg-[#141414] rounded-none py-7 px-6">
            <span className="absolute top-5 right-[22px] font-jetbrain text-xs text-[#6E6E6A]">
              04
            </span>
            <div className="w-[46px] h-[46px] rounded-none bg-transparent border border-white/14 flex items-center justify-center text-[#F5F5F2] mb-5">
              <svg
                viewBox="0 0 24 24"
                width="22"
                height="22"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.6}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
              </svg>
            </div>
            <h3 className="font-fraunces text-lg font-semibold text-[#F5F5F2] mb-2.5">
              BPO Services
            </h3>
            <p className="text-[14.5px] leading-[1.65] text-[#A6A6A2] m-0">
              Reliable back-office and support teams handling operations so you
              can focus on growing your core business.
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-11">
          <Link
            href="services.html"
            className="inline-flex items-center gap-[9px] py-[13px] px-[26px] rounded-none border-[1.5px] border-white/34 text-[#F5F5F2] font-jetbrain uppercase tracking-[.04em] font-semibold text-[13px]"
          >
            View All Services
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </section>

      <section
        id="careers"
        className="relative overflow-hidden pt-5 px-[clamp(20px,5vw,64px)] pb-[110px]"
      >
        <div className="relative max-w-[1240px] mx-auto rounded-none bg-white">
          <div className="rounded-none bg-transparent py-14 px-[clamp(28px,5vw,64px)] grid grid-cols-[1.1fr_.9fr] gap-11 items-center">
            <div>
              <div className="inline-flex items-center gap-2.5 mb-[22px]">
                <span className="w-[7px] h-[7px] rounded-none bg-[#0A0A0A]" />
                <span className="font-jetbrain text-xs tracking-[.08em] font-semibold text-[#0A0A0A] uppercase">
                  We&apos;re Hiring
                </span>
              </div>
              <h2 className="font-fraunces text-[34px] font-semibold tracking-[-0.01em] text-[#0A0A0A] mb-4">
                Build the future with us.
              </h2>
              <p className="text-[15.5px] leading-[1.7] text-[#0A0A0A]/70 mb-7 max-w-[440px]">
                We&apos;re always looking for talented developers, designers,
                and editors to join our growing, remote-first team.
              </p>
              <Link
                href="careers.html"
                className="inline-flex items-center gap-2 py-[13px] px-6 rounded-none bg-[#0A0A0A] border-[1.5px] border-white text-[#F5F5F2] font-jetbrain uppercase tracking-[.04em] font-semibold text-[13.5px]"
              >
                View Open Roles
                <svg
                  viewBox="0 0 24 24"
                  width="15"
                  height="15"
                  fill="none"
                  stroke="#F5F5F2"
                  strokeWidth={2.2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>

            <div className="flex flex-col gap-3">
              <Link
                href="careers.html"
                className="border border-white/14 bg-[#141414] rounded-none py-4 px-[18px] flex items-center justify-between gap-3"
              >
                <span className="text-[14.5px] font-semibold text-[#F5F5F2]">
                  Frontend Developer
                </span>
                <span className="text-xs text-[#6E6E6A] whitespace-nowrap font-jetbrain">
                  Remote · Full-time
                </span>
              </Link>
              <Link
                href="careers.html"
                className="border border-white/14 bg-[#141414] rounded-none py-4 px-[18px] flex items-center justify-between gap-3"
              >
                <span className="text-[14.5px] font-semibold text-[#F5F5F2]">
                  Video Editor
                </span>
                <span className="text-xs text-[#6E6E6A] whitespace-nowrap font-jetbrain">
                  Dhaka · Contract
                </span>
              </Link>
              <Link
                href="careers.html"
                className="border border-white/14 bg-[#141414] rounded-none py-4 px-[18px] flex items-center justify-between gap-3"
              >
                <span className="text-[14.5px] font-semibold text-[#F5F5F2]">
                  BPO Associate
                </span>
                <span className="text-xs text-[#6E6E6A] whitespace-nowrap font-jetbrain">
                  Remote · Part-time
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="max-w-[1240px] mx-auto pt-5 px-[clamp(20px,5vw,64px)] pb-[130px]"
      >
        <div className="rounded-none bg-white">
          <div className="relative overflow-hidden rounded-none bg-transparent py-14 px-[clamp(24px,5vw,64px)] grid grid-cols-[1.1fr_.9fr] gap-[52px] items-center">
            <div className="relative">
              <div className="inline-flex items-center gap-2.5 mb-[14px]">
                <span className="w-1.5 h-1.5 bg-[#0A0A0A]" />
                <p className="font-jetbrain text-xs tracking-[.1em] font-semibold text-[#0A0A0A] uppercase m-0">
                  Get In Touch
                </p>
              </div>
              <h2 className="font-fraunces text-[38px] font-semibold tracking-[-0.01em] text-[#0A0A0A] mb-[18px]">
                Have a project in mind?
              </h2>
              <p className="text-[15.5px] text-[#0A0A0A]/70 leading-[1.7] mb-8 max-w-[440px]">
                Tell us a bit about what you&apos;re building. We usually reply
                within one business day.
              </p>

              <div className="flex flex-wrap gap-[14px] mb-[30px]">
                <Link
                  href="contact.html"
                  className="inline-flex items-center gap-2 py-[14px] px-[26px] rounded-none bg-[#0A0A0A] border-[1.5px] border-white text-[#F5F5F2] font-jetbrain uppercase tracking-[.04em] font-semibold text-sm"
                >
                  Contact Us
                  <svg
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    fill="none"
                    stroke="#F5F5F2"
                    strokeWidth={2.2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>

              <div className="flex gap-2.5">
                <Link
                  href="#"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-none border border-[#0A0A0A]/35 flex items-center justify-center text-xs font-bold text-[#0A0A0A]"
                >
                  Li
                </Link>
                <Link
                  href="#"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-none border border-[#0A0A0A]/35 flex items-center justify-center text-xs font-bold text-[#0A0A0A]"
                >
                  Ig
                </Link>
                <Link
                  href="#"
                  aria-label="X"
                  className="w-9 h-9 rounded-none border border-[#0A0A0A]/35 flex items-center justify-center text-xs font-bold text-[#0A0A0A]"
                >
                  X
                </Link>
              </div>
            </div>

            <div className="relative flex flex-col gap-4">
              <div className="flex items-center gap-3 py-[14px] px-4 rounded-none border border-white/14 bg-[#0A0A0A]">
                <span className="w-9 h-9 rounded-none bg-transparent border border-white/14 flex items-center justify-center text-[#F5F5F2] shrink-0">
                  <svg
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16v16H4z" />
                    <path d="M4 4l8 9 8-9" />
                  </svg>
                </span>
                <span className="text-sm text-[#F5F5F2]">[EMAIL ADDRESS]</span>
              </div>
              <div className="flex items-center gap-3 py-[14px] px-4 rounded-none border border-white/14 bg-[#0A0A0A]">
                <span className="w-9 h-9 rounded-none bg-transparent border border-white/14 flex items-center justify-center text-[#F5F5F2] shrink-0">
                  <svg
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 3a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.2-1.3a2 2 0 0 1 2.1-.5c1 .3 2 .5 3 .7a2 2 0 0 1 1.7 2z" />
                  </svg>
                </span>
                <span className="text-sm text-[#F5F5F2]">[PHONE NUMBER]</span>
              </div>
              <div className="flex items-center gap-3 py-[14px] px-4 rounded-none border border-white/14 bg-[#0A0A0A]">
                <span className="w-9 h-9 rounded-none bg-transparent border border-white/14 flex items-center justify-center text-[#F5F5F2] shrink-0">
                  <svg
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <span className="text-sm text-[#F5F5F2]">
                  Dhaka, Bangladesh
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
