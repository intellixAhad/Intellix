"use client";
import CareerHero from "@/components/careers/CareerHero";
import CareerReasonSection from "@/components/careers/CareerReasonSection";
import Link from "next/link";
import { useState } from "react";

type RoleTag = "eng" | "creative" | "ops";

const filterOptions: { key: "all" | RoleTag; label: string }[] = [
  { key: "all", label: "All" },
  { key: "eng", label: "Engineering" },
  { key: "creative", label: "Creative" },
  { key: "ops", label: "Operations" },
];

const roles: {
  tag: RoleTag;
  title: string;
  tags: string[];
  icon: React.ReactNode;
}[] = [
  {
    tag: "eng",
    title: "Frontend Developer",
    tags: ["Engineering", "Remote · Full-time", "2+ yrs"],
    icon: (
      <>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </>
    ),
  },
  {
    tag: "creative",
    title: "Graphic Designer",
    tags: ["Creative", "Dhaka · Full-time", "1+ yrs"],
    icon: (
      <>
        <circle cx={12} cy={12} r={10} />
        <circle cx={12} cy={12} r={4} />
      </>
    ),
  },
  {
    tag: "creative",
    title: "Video Editor",
    tags: ["Creative", "Remote · Full-time", "1+ yrs"],
    icon: (
      <>
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x={1} y={5} width={15} height={14} rx={2} />
      </>
    ),
  },
  {
    tag: "ops",
    title: "BPO Associate",
    tags: ["Operations", "Dhaka · Full-time", "Entry-level"],
    icon: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
  },
];

const hiringSteps = [
  { label: "STEP 01", title: "Apply", desc: "Send your CV and a couple of work samples through our Contact page." },
  { label: "STEP 02", title: "Intro call", desc: "A short call to talk through your background and what you're looking for." },
  { label: "STEP 03", title: "Skills round", desc: "A practical exercise close to real work — never unpaid client-facing tasks." },
  { label: "STEP 04", title: "Offer", desc: "We move fast once there's a match, with a clear offer and start date." },
];

const page = () => {
  const [filter, setFilter] = useState<"all" | RoleTag>("all");
  const filteredRoles = filter === "all" ? roles : roles.filter((r) => r.tag === filter);

  return (
    <>
      <CareerHero />
      <CareerReasonSection />

      <section className="relative z-1 px-[clamp(20px,5vw,64px)] pt-5 pb-15">
        <div className="max-w-360 mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-5 mb-8">
            <h2 className="font-fraunces text-[26px] font-bold tracking-[-0.01em] text-[#F5F5F2]">Open positions</h2>
            <div className="flex flex-wrap gap-5.5">
              {filterOptions.map((opt) => {
                const isActive = filter === opt.key;
                return (
                  <button
                    key={opt.key}
                    type="button"
                    onClick={() => setFilter(opt.key)}
                    aria-pressed={isActive}
                    className="py-[9px] px-[2px] bg-transparent font-jetbrain uppercase tracking-[0.05em] font-semibold text-[12.5px] whitespace-nowrap rounded-none border-0 border-b-2 transition-colors"
                    style={{
                      borderBottomColor: isActive ? "#FFFFFF" : "transparent",
                      color: isActive ? "#F5F5F2" : "#A6A6A2",
                    }}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-3.5">
            {filteredRoles.map((role) => (
              <Link key={role.title} href="/contact" className="flex items-center justify-between gap-5 flex-wrap border border-white/14 bg-[#141414] rounded-none py-7 px-8">
                <div className="flex items-center gap-4">
                  <span className="w-11 h-11 rounded-none bg-[#141414] border border-white/14 flex items-center justify-center shrink-0 text-[#F5F5F2]">
                    <svg viewBox="0 0 24 24" width={20} height={20} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      {role.icon}
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-fraunces text-[17px] font-semibold text-[#F5F5F2] mb-1.5">{role.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {role.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 rounded-none border border-white/14 font-jetbrain uppercase tracking-[0.05em] text-[10.5px] text-[#A6A6A2]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 py-2.5 px-4.5 rounded-none border-[1.5px] border-white/34 text-[#F5F5F2] font-jetbrain uppercase tracking-[0.04em] font-semibold text-xs whitespace-nowrap">
                  Apply
                  <svg viewBox="0 0 24 24" width={14} height={14} fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                    <line x1={5} y1={12} x2={19} y2={12} />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>

          {filteredRoles.length === 0 && (
            <div className="text-center py-15 px-5 border border-dashed border-white/14 rounded-none mt-2">
              <p className="text-[14.5px] text-[#6E6E6A]">No open roles match this filter right now — check back soon or reach out anyway.</p>
            </div>
          )}

          <p className="text-center text-[13px] text-[#6E6E6A] mt-9">Open roles shown are illustrative examples for demonstration purposes. To apply or ask about a role, get in touch through our Contact page.</p>
        </div>
      </section>

      <section className="relative z-1 overflow-hidden px-[clamp(20px,5vw,64px)] pt-5 pb-[100px]">
        <div aria-hidden="true" className="absolute inset-0 z-[-1] pointer-events-none bg-[repeating-linear-gradient(115deg,rgba(255,255,255,0.035)_0px,rgba(255,255,255,0.035)_1px,transparent_1px,transparent_64px)]" />
        <div className="max-w-360 mx-auto">
          <div className="text-left max-w-[600px] mb-10">
            <h2 className="font-fraunces text-[28px] font-bold tracking-[-0.01em] text-[#F5F5F2] mb-3">How hiring works here</h2>
            <p className="text-[14.5px] leading-[1.7] text-[#A6A6A2]">Four steps, usually inside two to three weeks. No surprise rounds.</p>
          </div>
          <div className="grid grid-cols-4 gap-5">
            {hiringSteps.map((step) => (
              <div key={step.label} className="rounded-none border border-white/14 bg-[#141414] p-7">
                <div className="font-jetbrain text-xs tracking-[0.06em] text-[#6E6E6A] mb-2.5">{step.label}</div>
                <h3 className="font-fraunces text-[15.5px] font-semibold text-[#F5F5F2] mb-2">{step.title}</h3>
                <p className="text-[13px] leading-[1.6] text-[#A6A6A2]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-1 overflow-hidden px-[clamp(20px,5vw,64px)] pt-5 pb-[130px]">
        <div aria-hidden="true" className="absolute z-[-1] -top-[50px] -left-[60px] w-[340px] h-[340px] rounded-full bg-[radial-gradient(circle_at_35%_35%,rgba(255,255,255,0.1),rgba(255,255,255,0)_65%)] blur-[50px] pointer-events-none" />
        <div aria-hidden="true" className="absolute z-[-1] -bottom-[60px] -right-[70px] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle_at_40%_40%,rgba(255,255,255,0.08),rgba(255,255,255,0)_65%)] blur-[50px] pointer-events-none" />
        <div className="max-w-360 mx-auto">
          <div className="bg-white rounded-none py-16 px-[clamp(24px,6vw,64px)] text-center relative overflow-hidden">
            <h2 className="relative font-fraunces text-4xl font-bold tracking-[-0.01em] text-[#0A0A0A] mb-4">Don&apos;t see the right role?</h2>
            <p className="relative text-[15.5px] text-[#0A0A0A]/70 max-w-[480px] mx-auto mb-[30px]">We&apos;re growing quickly. Reach out anyway — tell us what you&apos;re good at and we&apos;ll keep you in mind.</p>
            <div className="relative flex flex-wrap justify-center gap-3.5">
              <Link href="/contact" className="inline-flex items-center gap-2 py-3.5 px-7 rounded-none border-[1.5px] border-[#0A0A0A] bg-[#0A0A0A] text-[#F5F5F2] font-jetbrain uppercase tracking-[0.04em] font-semibold text-[13.5px]">
                Get in Touch
                <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                  <line x1={5} y1={12} x2={19} y2={12} />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <Link href="/about" className="inline-flex items-center gap-2 py-3.5 px-6.5 rounded-none border-[1.5px] border-[#0A0A0A] text-[#0A0A0A] font-jetbrain uppercase tracking-[0.04em] font-semibold text-[13.5px]">
                Meet the Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
