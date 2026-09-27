"use client";

import Link from "next/link";
import { useState } from "react";

const page = () => {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<{ a: boolean; b: boolean; c: boolean }>({
    a: false,
    b: false,
    c: false,
  });
  const toggleFaq = (key: "a" | "b" | "c") => setOpenFaq((prev) => ({ ...prev, [key]: !prev[key] }));

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const infoCards = [
    {
      label: "EMAIL",
      value: "[EMAIL ADDRESS]",
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
      value: "[PHONE NUMBER]",
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

  const faqs: { key: "a" | "b" | "c"; q: string; a: React.ReactNode }[] = [
    {
      key: "a",
      q: "How soon will I hear back?",
      a: "Within one business day, usually sooner. If it's urgent, mention that in your message.",
    },
    {
      key: "b",
      q: "Do you sign NDAs before scoping a project?",
      a: "Yes — just let us know in your message and we'll send one over before the first detailed call.",
    },
    {
      key: "c",
      q: "I'm applying for a job — is this the right form?",
      a: (
        <>
          Yes — select &quot;Something else&quot; and mention the role you&apos;re interested in, or check our{" "}
          <Link href="/careers" className="text-white underline">
            Careers page
          </Link>{" "}
          first.
        </>
      ),
    },
  ];
  return (
    <>
      <section id="top" className="relative overflow-visible p-[64px_clamp(20px,5vw,64px)_92px] flex flex-col justify-between items-center">
        <div
          aria-hidden="true"
          className="absolute -top-17.5 -right-22.5 h-120 w-120 rounded-full bg-[radial-gradient(circle_at_35%_35%,rgba(255,255,255,0.14),rgba(255,255,255,0)_65%)] blur-[50px] pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-20 -left-22.5 h-120 w-120 rounded-full bg-[radial-gradient(circle_at_40%_40%,rgba(255,255,255,0.09),rgba(255,255,255,0)_65%)] blur-[50px] pointer-events-none"
        />
        <div className="absolute top-30 right-[clamp(20px,5vw,64px)] [writing-mode:vertical-rl] tracking-[0.35em] text-[11px] font-semibold text-gray-01 font-jetbrain">BUILD · DESIGN · AUTOMATE</div>
        <div className="absolute bottom-10 right-[clamp(20px,5vw,64px)] [writing-mode:vertical-rl] tracking-[0.35em] text-[11px] font-semibold text-gray-01 font-jetbrain">SOFTWARE THAT SHIPS</div>

        <div className="relative w-full max-w-360 mx-auto text-left">
          <p className="text-[13px] text-[#6E6E6A] mb-5">
            <Link href="/" className="text-[#6E6E6A] hover:text-[#A6A6A2] transition-colors">
              Home
            </Link>
            <span className="mx-2 text-[#6E6E6A]">/</span>
            <span className="text-[#A6A6A2]">Contact</span>
          </p>

          <div className="inline-flex items-center gap-2 mb-5.5">
            <span className="w-[7px] h-[7px] rounded-none bg-white" />
            <span className="font-jetbrain text-xs tracking-[.08em] font-semibold text-[#A6A6A2] uppercase">GET IN TOUCH</span>
          </div>

          <h1 className="font-fraunces font-bold text-[50px] leading-[1.1] tracking-[-0.02em] mb-5.5 text-[#F5F5F2]">
            Let's talk about <span className="italic font-medium text-white">your project.</span>
          </h1>

          <p className="text-[16.5px] leading-[1.7] text-[#A6A6A2] max-w-[620px] mb-10">
            Tell us a bit about what you need. We reply to every message personally, usually within one business day.
          </p>
        </div>
      </section>

      {/* CONTACT FORM + INFO */}
      <section className="section-pad relative overflow-hidden z-[1] px-[clamp(20px,5vw,64px)] pt-5 pb-[90px]">
        <div
          aria-hidden="true"
          className="absolute -top-[60px] -left-[80px] w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle_at_35%_35%,rgba(255,255,255,0.10),rgba(255,255,255,0)_65%)] blur-[50px] pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-[100px] -right-[70px] w-[340px] h-[340px] rounded-full bg-[radial-gradient(circle_at_45%_45%,rgba(255,255,255,0.08),rgba(255,255,255,0)_65%)] blur-[50px] pointer-events-none"
        />

        <div className="contact-grid relative grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-7 items-start max-w-360 mx-auto">
          {/* FORM CARD */}
          <div className="contact-card-pad rounded-none border border-white/14 bg-[#141414] p-10">
            {!submitted ? (
              <div>
                <h2 className="font-fraunces text-[22px] font-bold text-[#F5F5F2] mb-1.5">Send us a message</h2>
                <p className="text-sm text-[#6E6E6A] mb-7">Fields marked with * are required.</p>

                <form onSubmit={handleContactSubmit} className="flex flex-col gap-5">
                  <div className="form-row-2 grid grid-cols-1 sm:grid-cols-2 gap-4.5">
                    <div>
                      <label className="block mb-2 text-[11.5px] uppercase tracking-[0.05em] font-jetbrain font-semibold text-[#6E6E6A]">Full name *</label>
                      <input
                        type="text"
                        placeholder="Jane Rahman"
                        required
                        className="w-full bg-[#0A0A0A] border border-white/14 rounded-none px-4 py-3 text-sm text-[#F5F5F2] placeholder:text-[#6E6E6A] focus:outline-none focus:border-white/40 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-[11.5px] uppercase tracking-[0.05em] font-jetbrain font-semibold text-[#6E6E6A]">Email address *</label>
                      <input
                        type="email"
                        placeholder="jane@company.com"
                        required
                        className="w-full bg-[#0A0A0A] border border-white/14 rounded-none px-4 py-3 text-sm text-[#F5F5F2] placeholder:text-[#6E6E6A] focus:outline-none focus:border-white/40 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="form-row-2 grid grid-cols-1 sm:grid-cols-2 gap-4.5">
                    <div>
                      <label className="block mb-2 text-[11.5px] uppercase tracking-[0.05em] font-jetbrain font-semibold text-[#6E6E6A]">Company</label>
                      <input
                        type="text"
                        placeholder="Company name (optional)"
                        className="w-full bg-[#0A0A0A] border border-white/14 rounded-none px-4 py-3 text-sm text-[#F5F5F2] placeholder:text-[#6E6E6A] focus:outline-none focus:border-white/40 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-[11.5px] uppercase tracking-[0.05em] font-jetbrain font-semibold text-[#6E6E6A]">What do you need? *</label>
                      <select
                        required
                        className="appearance-none w-full bg-[#0A0A0A] border border-white/14 rounded-none px-4 py-3 text-sm text-[#F5F5F2] focus:outline-none focus:border-white/40 transition-colors"
                      >
                        <option value="">Select a service</option>
                        <option>Web Development</option>
                        <option>Graphic Design</option>
                        <option>Video Editing</option>
                        <option>BPO Services</option>
                        <option>Verbosa.ai / Product</option>
                        <option>Something else</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2 text-[11.5px] uppercase tracking-[0.05em] font-jetbrain font-semibold text-[#6E6E6A]">Project details *</label>
                    <textarea
                      rows={5}
                      placeholder="Tell us about your project, timeline, and budget range."
                      required
                      className="resize-y w-full bg-[#0A0A0A] border border-white/14 rounded-none px-4 py-3 text-sm text-[#F5F5F2] placeholder:text-[#6E6E6A] focus:outline-none focus:border-white/40 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary self-start inline-flex items-center gap-2 py-3.5 px-[30px] rounded-none border-[1.5px] border-white bg-white text-[#0A0A0A] font-jetbrain uppercase tracking-[0.04em] font-semibold text-sm mt-1.5"
                  >
                    Send Message
                    <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="#0A0A0A" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                      <line x1={22} y1={2} x2={11} y2={13} />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </button>

                  <p className="text-[12.5px] text-[#6E6E6A] mt-0.5 flex items-center gap-1.5">
                    <svg viewBox="0 0 24 24" width={13} height={13} fill="none" stroke="#6E6E6A" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <rect x={3} y={11} width={18} height={10} rx={0} />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                    Your details are used only to respond to this inquiry — never shared or sold.
                  </p>
                </form>
              </div>
            ) : (
              <div>
                <div className="text-center py-[50px] px-2.5">
                  <span className="inline-flex items-center justify-center w-16 h-16 rounded-none bg-[#141414] border border-white/14 mb-5.5">
                    <svg viewBox="0 0 24 24" width={30} height={30} fill="none" stroke="#F5F5F2" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <h2 className="font-fraunces text-[22px] font-bold text-[#F5F5F2] mb-2.5">Message sent.</h2>
                  <p className="text-[14.5px] leading-[1.7] text-[#A6A6A2] max-w-[360px] mx-auto mb-6.5">
                    Thanks for reaching out — someone from our team will get back to you within one business day.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="btn-outline py-2.75 px-5.5 rounded-none border-[1.5px] border-white/34 bg-transparent text-[#F5F5F2] font-jetbrain uppercase tracking-[0.04em] font-semibold text-[13px]"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* INFO COLUMN */}
          <div className="flex flex-col gap-4">
            {infoCards.map((card) => (
              <div key={card.label} className="info-card border border-white/14 bg-[#141414] rounded-none py-5.5 px-6 flex items-start gap-3.5">
                <span className="w-10 h-10 rounded-none bg-[#141414] border border-white/14 flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="#F5F5F2" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    {card.icon}
                  </svg>
                </span>
                <div>
                  <div className="font-jetbrain text-[11px] tracking-[0.06em] text-[#6E6E6A] font-semibold mb-1">{card.label}</div>
                  <div className="text-[15px] text-[#F5F5F2] font-medium">{card.value}</div>
                </div>
              </div>
            ))}

            <div className="rounded-none border border-white/14 bg-[#141414] py-5.5 px-6">
              <div className="font-jetbrain text-[11px] tracking-[0.06em] text-[#6E6E6A] font-semibold mb-3">FOLLOW US</div>
              <div className="flex gap-2.5">
                <Link className="social-chip w-[38px] h-[38px] rounded-none border border-white/14 flex items-center justify-center text-xs font-bold text-[#A6A6A2]" href="#" aria-label="LinkedIn">
                  Li
                </Link>
                <Link className="social-chip w-[38px] h-[38px] rounded-none border border-white/14 flex items-center justify-center text-xs font-bold text-[#A6A6A2]" href="#" aria-label="Instagram">
                  Ig
                </Link>
                <Link className="social-chip w-[38px] h-[38px] rounded-none border border-white/14 flex items-center justify-center text-xs font-bold text-[#A6A6A2]" href="#" aria-label="X">
                  X
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK FAQ */}
      <section className="section-pad relative z-[1] px-[clamp(20px,5vw,64px)] pt-5 pb-[110px]">
        <div className="max-w-360 mx-auto">
          <div className="text-left mb-2">
            <h2 className="font-fraunces text-[26px] font-bold text-[#F5F5F2] mb-2">Before you reach out</h2>
            <p className="text-sm text-[#6E6E6A] mb-5">A few quick answers. See the full FAQ on our homepage for more.</p>
          </div>

          {faqs.map((faq) => {
            const isOpen = openFaq[faq.key];
            return (
              <div key={faq.key} className="faq-item border-b border-white/14 last:border-b-0">
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.key)}
                  aria-expanded={isOpen}
                  className="faq-q w-full flex items-center justify-between gap-4 py-5 bg-transparent border-0 text-left cursor-pointer"
                >
                  <span className="font-fraunces text-[15.5px] font-semibold text-[#F5F5F2]">{faq.q}</span>
                  <svg
                    className="faq-chevron shrink-0 transition-transform duration-200"
                    style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                    viewBox="0 0 24 24"
                    width={18}
                    height={18}
                    fill="none"
                    stroke="#6E6E6A"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                {isOpen && (
                  <div>
                    <p className="text-sm leading-[1.7] text-[#A6A6A2] mb-5">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default page;
