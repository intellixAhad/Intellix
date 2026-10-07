"use client";

import LanguagePill from "@/components/products/LanguagePill";
import MarketRow from "@/components/products/MarketRow";
import FadeIn from "@/components/motions/FadeIn";
import { StaggerGroup, StaggerItem } from "@/components/motions/StaggerReveal";
import Badge from "../common/Badge";

const languagePills = ["English", "Bengali", "Arabic", "+ 30 languages via voice"];

const markets = [
  {
    code: "US",
    title: "en_US",
    subtitle: "English-language market localization",
  },
  {
    code: "AE",
    title: "ar_AE",
    subtitle: "Arabic-language market localization",
  },
  {
    code: "BD",
    title: "Home base — Dhaka",
    subtitle: "Built and maintained by the Intellix team",
  },
];

export default function LanguagesSection() {
  return (
    <section className="section-pad relative z-1 px-[clamp(20px,5vw,64px)] pt-5 pb-[110px]">
      <div className="relative max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <FadeIn>
          <Badge label="Built for global markets" />
          <h2 className="font-fraunces text-[32px] font-bold tracking-[-0.01em] text-[#F5F5F2] mb-4.5">Engineered from Dhaka, speaking to the world.</h2>
          <p className="text-[15px] leading-[1.75] text-[#A6A6A2] mb-6">Verbosa.ai natively supports English, Bengali, and Arabic, with content localized for markets including the United States and the UAE — reflecting the same global-facing outlook Intellix brings to its client work.</p>
          <StaggerGroup className="flex flex-wrap gap-2.5" stagger={0.06}>
            {languagePills.map((label) => (
              <StaggerItem key={label}>
                <LanguagePill label={label} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="border border-white/14 bg-[#141414] rounded-none p-9 flex flex-col gap-4.5">
            {markets.map((market) => (
              <MarketRow key={market.code} code={market.code} title={market.title} subtitle={market.subtitle} />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
