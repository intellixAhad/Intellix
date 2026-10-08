import type { ReactNode } from "react";
import Reveal from "@/components/motions/reveal";

interface InfoItem {
  label: string;
  value: string;
  href?: string;
  icon: ReactNode;
}

const INFO: InfoItem[] = [
  {
    label: "EMAIL",
    value: "hello@intellixsolutions.co",
    href: "mailto:hello@intellixsolutions.co",
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
    href: "tel:01973336001",
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

// TODO: replace "#" with your real profile URLs
const SOCIALS = [
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <path d="M6.94 8.5H3.56V20H6.94V8.5ZM5.25 3C4.14 3 3.25 3.9 3.25 5C3.25 6.1 4.14 7 5.25 7C6.36 7 7.25 6.1 7.25 5C7.25 3.9 6.36 3 5.25 3ZM20.75 13.41C20.75 9.93 18.9 8.3 16.44 8.3C14.45 8.3 13.56 9.39 13.06 10.15V8.5H9.69V20H13.06V14.3C13.06 12.8 13.34 11.35 15.22 11.35C17.07 11.35 17.1 13.06 17.1 14.4V20H20.47L20.75 13.41Z" />
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: <path d="M13.5 21V12.75H16.25L16.66 9.54H13.5V7.49C13.5 6.56 13.76 5.93 15.08 5.93H16.75V3.06C16.46 3.02 15.46 2.94 14.3 2.94C11.88 2.94 10.22 4.42 10.22 7.14V9.54H7.47V12.75H10.22V21H13.5Z" />,
  },
  {
    label: "Email",
    href: "mailto:hello@intellixsolutions.co",
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <path d="M4 7L12 13L20 7" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
];

const cardCls = "flex h-full items-center gap-3 border border-white/14 bg-black-01 px-4 py-3.5 transition-colors duration-300 hover:border-white/30 hover:bg-white-01/9";

function InfoCard({ item }: { item: InfoItem }) {
  const body = (
    <>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/14 bg-[#141414]">
        <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="#F5F5F2" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          {item.icon}
        </svg>
      </span>
      <div className="min-w-0">
        <div className="mb-1 font-jetbrain text-[11px] font-semibold tracking-[0.06em] text-gray-00">{item.label}</div>
        <div className="wrap-break-word text-[15px] font-medium text-white-01">{item.value}</div>
      </div>
    </>
  );

  return item.href ? (
    <a href={item.href} className={cardCls}>
      {body}
    </a>
  ) : (
    <div className={cardCls}>{body}</div>
  );
}

export default function ContactInfo() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
      {INFO.map((item, i) => (
        <Reveal key={item.label} delay={i * 0.08} className="h-full">
          <InfoCard item={item} />
        </Reveal>
      ))}

      <Reveal delay={INFO.length * 0.08} className="sm:col-span-2 lg:col-span-1">
        <div className="border border-white/14 bg-[#141414] px-6 py-5.5">
          <div className="mb-3 font-jetbrain text-[11px] font-semibold tracking-[0.06em] text-gray-00">FOLLOW US</div>
          <div className="mt-3 flex gap-2.5">
            {SOCIALS.map((s) => {
              const external = s.href.startsWith("http");
              return (
                <a key={s.label} href={s.href} aria-label={s.label} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="flex h-9 w-9 items-center justify-center rounded-md text-[#f5f5f5] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white-01/12">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    {s.icon}
                  </svg>
                </a>
              );
            })}
          </div>
        </div>
      </Reveal>
    </div>
  );
}
