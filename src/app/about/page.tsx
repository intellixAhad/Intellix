import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import OurStorySection from "@/components/about/OurStorySection";
import ValuesSection from "@/components/about/ValuesSection";
import TeamSection from "@/components/about/TeamSection";
import StatisticsBox from "@/components/common/StatisticsBox";

export const metadata: Metadata = {
  title: "About | Intellix",
  description: "Tell us about your project. We reply to every message personally, usually within one business day.",
};

const page = () => {
  return (
    <>
      <AboutHero />
      <StatisticsBox N1={28} P1="+" T1="Projects Delivered" N2={12} P2="+" T2="Clients Served" N3={10} P3="+" T3="Team Members" N4={4} T4="Core Service Line" />
      <OurStorySection />
      <ValuesSection />
      <TeamSection />
    </>
  );
};

export default page;
