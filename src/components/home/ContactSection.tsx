import React from "react";
import GlassBox from "../common/GlassBox";
import Reveal from "../motions/reveal";
import Badge from "../common/Badge";
import SectionTitle from "../common/SectionTitle";
import SectionDescription from "../common/SectionDescription";
import Button from "../common/Button";
import { StaggerGroup, StaggerItem } from "../motions/StaggerReveal";
import { IntellixDeteails } from "@/data/HomePageData";

const ContactSection = () => {
  return (
    <section id="contact" className="p-[46px_clamp(20px,5vw,64px)_92px]">
      <GlassBox className="grid grid-cols-1 lg:grid-cols-[1.1fr_.9fr] items-center gap-8 md:gap-13">
        <div className="gap-2 md:gap-4 flex flex-col items-start">
          <Reveal y={12}>
            <Badge label="Get in touch" />
          </Reveal>
          <Reveal delay={0.1}>
            <SectionTitle title="Have a project in mind?" />
          </Reveal>
          <Reveal delay={0.2}>
            <SectionDescription description="Tell us a bit about what you're building. We usually reply within one business day." />
          </Reveal>
          <Reveal delay={0.3}>
            <Button title="Contact Us" link="/contact" variant="primary" />
          </Reveal>
        </div>

        <StaggerGroup className="relative flex flex-col gap-4">
          {IntellixDeteails.map((card) => (
            <StaggerItem key={card.label} className="flex items-center gap-3 py-3.5 px-4 rounded-none border border-white/14 bg-black-01 hover:bg-white-01/9 cursor-pointer">
              <span className="w-10 h-10 rounded-none bg-[#141414] border border-white/14 flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="#F5F5F2" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  {card.icon}
                </svg>
              </span>
              <div className="min-w-0">
                <div className="font-jetbrain text-[11px] tracking-[0.06em] text-gray-00 font-semibold mb-1">{card.label}</div>
                <div className="wrap-break-words text-[15px] font-medium text-white-01">{card.value}</div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </GlassBox>
    </section>
  );
};

export default ContactSection;
