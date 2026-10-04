import type { ReactNode } from "react";
import Reveal from "../reveal";

export interface ServiceFeature {
  label: string;
}

interface ServiceSectionProps {
  id: string;
  index: string;
  icon: ReactNode;
  title: string;
  description?: string;
  features: string[];
  tags?: string[];
  ctaLabel: string;
  ctaHref?: string;
  visual: ReactNode;
  /** Puts the visual on the left / content on the right at desktop widths. */
  reverse?: boolean;
  /** Optional diagonal grid texture behind the section, used on some rows. */
  withGridTexture?: boolean;
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width={18}
      height={18}
      fill="none"
      stroke="#9A9A94"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-0.5 shrink-0"
    >
      <circle cx={12} cy={12} r={9} />
      <polyline points="8 12 11 15 16 9" />
    </svg>
  );
}

export default function ServiceSection({
  id,
  index,
  icon,
  title,
  description,
  features,
  tags,
  ctaLabel,
  ctaHref = "/contact",
  visual,
  reverse = false,
  withGridTexture = false,
}: ServiceSectionProps) {
  const content = (
    <div>
      <Reveal y={16}>
        <div className="mb-5 flex items-center gap-3">
          <span className="font-jetbrain text-[13px] text-[#6E6E6A]">{index}</span>
          <div className="flex h-11 w-11 items-center justify-center border border-white/14 bg-[#141414] text-white-01">
            <svg viewBox="0 0 24 24" width={21} height={21} fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
              {icon}
            </svg>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.05}>
        <h2 className="mb-4 font-fraunces text-[26px] font-semibold tracking-[-0.01em] text-white-01 sm:text-[32px]">{title}</h2>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="mb-6 max-w-[520px] text-[15px] leading-[1.75] text-gray-02 sm:text-[15.5px] hidden">{description}</p>
      </Reveal>

      <Reveal delay={0.15}>
        <ul className="mb-6 flex flex-col gap-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5">
              <CheckIcon />
              <span className="text-[14.5px] text-gray-02">{feature}</span>
            </li>
          ))}
        </ul>
      </Reveal>

      {tags && tags.length > 0 && (
        <Reveal delay={0.2}>
          <div className="mb-7 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="border border-white/14 px-3 py-1.5 font-jetbrain text-xs text-gray-02">
                {tag}
              </span>
            ))}
          </div>
        </Reveal>
      )}

      <Reveal delay={0.25}>
        <a
          href={ctaHref}
          className="group inline-flex items-center gap-2 border-[1.5px] border-white bg-white px-6 py-3.5 font-jetbrain text-[13.5px] font-semibold uppercase tracking-[.04em] text-black-01 transition-all duration-300 hover:bg-transparent hover:text-white"
        >
          {ctaLabel}
          <svg viewBox="0 0 24 24" width={15} height={15} fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
            <line x1={5} y1={12} x2={19} y2={12} />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </Reveal>
    </div>
  );

  const visualBlock = (
    <Reveal delay={0.15} y={20}>
      {visual}
    </Reveal>
  );

  return (
    <section id={id} className="relative mx-auto max-w-[1240px] scroll-mt-24 px-[clamp(20px,5vw,64px)] py-14 sm:py-16">
      {withGridTexture && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(115deg, rgba(255,255,255,.035) 0px, rgba(255,255,255,.035) 1px, transparent 1px, transparent 64px)",
          }}
        />
      )}
      <div
        className={`relative grid grid-cols-1 items-center gap-10 lg:gap-14 ${
          reverse ? "lg:grid-cols-[0.95fr_1.05fr]" : "lg:grid-cols-[1.05fr_0.95fr]"
        }`}
      >
        {reverse ? (
          <>
            {visualBlock}
            {content}
          </>
        ) : (
          <>
            {content}
            {visualBlock}
          </>
        )}
      </div>
    </section>
  );
}