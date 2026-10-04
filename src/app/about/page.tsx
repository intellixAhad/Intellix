import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import StatsSection from "@/components/about/StatsSection";
import OurStorySection from "@/components/about/OurStorySection";
import ValuesSection from "@/components/about/ValuesSection";
import TeamSection from "@/components/about/TeamSection";

export const metadata: Metadata = {
  title: "About | Intellix",
  description: "Tell us about your project. We reply to every message personally, usually within one business day.",
};

const page = () => {
  return (
    <>
      <AboutHero />
      <OurStorySection />
      <ValuesSection />
      <StatsSection />
      <TeamSection />
    </>
  );
};

export default page;
