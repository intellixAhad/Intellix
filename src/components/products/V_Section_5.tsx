"use client";

import LanguagePill from "@/components/products/LanguagePill";
import MarketRow from "@/components/products/MarketRow";
import { StaggerGroup, StaggerItem } from "@/components/motions/StaggerReveal";
import Badge from "../common/Badge";
import Reveal from "../motions/reveal";
import SectionTitle from "../common/SectionTitle";
import SectionDescription from "../common/SectionDescription";

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

export default function V_Section_5() {
  return (
    <section className="p-[46px_clamp(20px,5vw,64px)]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        <div className="flex flex-col items-start gap-2 md:gap-4">
          <Reveal y={12}>
            <Badge label="Built for global markets" />
          </Reveal>
          <Reveal delay={0.1}>
            <SectionTitle title="Engineered from Dhaka, speaking to the world." />
          </Reveal>
          <Reveal delay={0.2}>
            <SectionDescription description="Verbosa.ai natively supports English, Bengali, and Arabic, with content localized for markets including the United States and the UAE — reflecting the same global-facing outlook Intellix brings to its client work." />
          </Reveal>

          <StaggerGroup className="flex flex-wrap gap-2.5" stagger={0.06}>
            {languagePills.map((label) => (
              <StaggerItem key={label}>
                <LanguagePill label={label} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>

        <Reveal delay={0.3}>
          <div className="border border-white/14 bg-[#141414] rounded-none p-9 flex flex-col gap-4.5">
            {markets.map((market) => (
              <MarketRow key={market.code} code={market.code} title={market.title} subtitle={market.subtitle} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
