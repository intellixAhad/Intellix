"use client";

import ChannelChip from "@/components/products/ChannelChip";
import FadeIn from "@/components/motions/FadeIn";
import FloatingBlob from "@/components/motions/FloatingBlob";
import { StaggerGroup, StaggerItem } from "@/components/motions/StaggerReveal";
import Badge from "../Badge";

const VOICE_ICON = (
  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.63 2.63a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.45-1.2a2 2 0 0 1 2.11-.45c.85.3 1.73.51 2.63.63A2 2 0 0 1 22 16.92z" />
);

const CHAT_ICON = (
  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
);

const EMAIL_ICON = (
  <>
    <rect x={2} y={4} width={20} height={16} rx={2} />
    <path d="M22 6l-10 7L2 6" />
  </>
);

const LEADS_ICON = (
  <>
    <circle cx={11} cy={11} r={8} />
    <line x1={21} y1={21} x2={16.65} y2={16.65} />
  </>
);

const channels = [
  { label: "Voice", icon: VOICE_ICON },
  { label: "Chat", icon: CHAT_ICON },
  { label: "Email", icon: EMAIL_ICON },
  { label: "Leads", icon: LEADS_ICON },
];

export default function OrchestrationSection() {
  return (
    <section className="section-pad relative overflow-hidden z-1 px-[clamp(20px,5vw,64px)] pt-5 pb-[110px]">
      <FloatingBlob
        duration={13}
        range={16}
        className="absolute -top-[50px] -right-[100px] w-[380px] h-[380px] rounded-full bg-[radial-gradient(circle_at_45%_35%,rgba(255,255,255,0.1),rgba(255,255,255,0)_65%)] blur-[50px] pointer-events-none"
      />
      <FloatingBlob
        duration={15}
        range={18}
        className="absolute -bottom-[60px] -left-[80px] w-[340px] h-[340px] rounded-full bg-[radial-gradient(circle_at_40%_60%,rgba(255,255,255,0.08),rgba(255,255,255,0)_65%)] blur-[50px] pointer-events-none"
      />

      <div className="relative max-w-[1240px] mx-auto bg-white p-px rounded-none">
        <div className="bg-[#141414] rounded-none py-14 px-[clamp(28px,5vw,64px)] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <Badge label="Orchestration" />
            <h2 className="font-fraunces text-[32px] font-bold tracking-[-0.01em] text-[#F5F5F2] mb-4.5">
              One brain behind every channel.
            </h2>
            <p className="text-[15.5px] leading-[1.7] text-[#A6A6A2]">
              Voice, chat, email, and lead generation don&apos;t run in silos
              — a central orchestration layer coordinates every channel, so a
              prospect who&apos;s called today gets the right follow-up email
              tomorrow, automatically.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="relative min-h-[220px] flex items-center justify-center">
              <div className="relative w-full max-w-[320px]">
                <div className="w-16 h-16 rounded-none bg-white flex items-center justify-center mx-auto">
                  <svg
                    viewBox="0 0 24 24"
                    width={28}
                    height={28}
                    fill="none"
                    stroke="#0A0A0A"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx={12} cy={12} r={3} />
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                  </svg>
                </div>

                <StaggerGroup className="grid grid-cols-4 gap-2.5 mt-7">
                  {channels.map((channel) => (
                    <StaggerItem key={channel.label}>
                      <ChannelChip icon={channel.icon} label={channel.label} />
                    </StaggerItem>
                  ))}
                </StaggerGroup>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
