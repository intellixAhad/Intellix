import React from "react";
import GlassBox from "../common/GlassBox";
import Reveal from "../motions/reveal";
import Badge from "../common/Badge";
import SectionTitle from "../common/SectionTitle";
import { Network, ScrollText, ShieldCheck, type LucideIcon } from "lucide-react";

const F_Section_6 = () => {
  return (
    <section className="p-[46px_clamp(20px,5vw,64px)]">
      <GlassBox>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-start gap-2 md:gap-4">
            <Reveal y={12}>
              <Badge label="Trust and accountability" />
            </Reveal>
            <Reveal delay={0.1}>
              <SectionTitle title="Nothing to steal at login, nothing to hide afterward." />
            </Reveal>
          </div>

          <Reveal delay={0.2} className="space-y-5">
            {[
              [ShieldCheck, "Classification is checked on every read, not just when content is created."],
              [Network, "Keys are managed through a swappable KMS layer, with HashiCorp Vault in production."],
              [ScrollText, "Anyone can re-verify the full audit chain on demand. One altered entry fails it."],
            ].map(([I, text]) => {
              const Ic = I as LucideIcon;
              return (
                <li key={text as string} className="flex gap-4">
                  <Ic className="mt-0.5 h-5 w-5 shrink-0 text-white" />
                  <span className="leading-relaxed text-neutral-300">{text as string}</span>
                </li>
              );
            })}
          </Reveal>
        </div>
      </GlassBox>
    </section>
  );
};

export default F_Section_6;
