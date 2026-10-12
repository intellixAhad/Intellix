"use client";

import Reveal from "../motions/reveal";
import Badge from "../common/Badge";
import SectionTitle from "../common/SectionTitle";
import { StaggerGroup, StaggerItem } from "../motions/StaggerReveal";
import { rawServicesData } from "@/data/HomePageData";
import { motion } from "framer-motion";

const TechnologySection = () => {
  return (
    <section className="relative overflow-hidden border-y border-white/[0.14] bg-black-01 p-[92px_clamp(20px,5vw,64px)]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(115deg,rgba(255,255,255,0.035)_0px,rgba(255,255,255,0.035)_1px,transparent_1px,transparent_64px)]" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-7.5 left-[clamp(0px,4vw,48px)] font-mono text-[200px] font-bold leading-none text-white/4">
        &lt;/&gt;
      </div>

      <div className="mx-auto max-w-7xl flex flex-col gap-6 md:gap-10">
        <div className="flex flex-col items-start gap-2 md:gap-4">
          <Reveal y={12}>
            <Badge label="tools & technologies" />
          </Reveal>
          <Reveal delay={0.1}>
            <SectionTitle title="The technology powering what’s next." />
          </Reveal>
        </div>

        <StaggerGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {rawServicesData.map(({ title, icon, tech }, index) => (
            <StaggerItem key={index}>
              <motion.div
                initial="rest"
                whileHover="hover"
                variants={{ rest: { y: 0, borderColor: "rgba(255, 255, 255, 0.14)" }, hover: { y: -6, borderColor: "rgba(255, 255, 255, 0.28)" } }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden border bg-[#141414] rounded-none p-5.5 h-full"
              >
                <motion.div variants={{ rest: { opacity: 0, scale: 0.8 }, hover: { opacity: 1, scale: 1.15 } }} transition={{ duration: 0.5, ease: "easeOut" }} className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-white-01/6 blur-3xl" />

                <motion.span variants={{ rest: { opacity: 0.02, x: 0 }, hover: { opacity: 0.1, x: -2 } }} transition={{ duration: 0.3, ease: "easeOut" }} className="absolute -top-3 right-3 font-plex text-white-01 font-black text-9xl italic">
                  {index}
                </motion.span>

                {icon && (
                  <motion.div variants={{ rest: { x: 0, y: 0 }, hover: { x: 4, y: -2 } }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} className="relative mb-5 flex h-11.5 w-11.5 items-center justify-center rounded-none border border-white/14 bg-transparent text-white-01">
                    {icon}
                  </motion.div>
                )}

                <motion.h3 variants={{ rest: { x: 0 }, hover: { x: 4 } }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} className="relative mb-2.5 text-2xl font-semibold text-white-01">
                  {title}
                </motion.h3>

                <div className="flex flex-wrap gap-2 mt-4">
                  {tech.map((item) => (
                    <span key={item} className="border px-2 border-white/5 rounded-full text-[11px] tracking-wider text-gray-02">
                      {item}
                    </span>
                  ))}
                </div>

                <motion.div variants={{ rest: { scaleX: 0, opacity: 0 }, hover: { scaleX: 1, opacity: 1 } }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} style={{ transformOrigin: "left" }} className="absolute bottom-0 left-0 h-px w-full bg-white/30" />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
};

export default TechnologySection;
