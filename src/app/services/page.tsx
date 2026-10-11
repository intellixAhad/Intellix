import type { Metadata } from "next";
import ServiceHero from "@/components/services/ServiceHero";
import StatsBar from "@/components/services/Statsbar";
import ServiceTabs from "@/components/services/Servicetabs";
import ComparisonTable from "@/components/services/Comparisontable";
import EngagementModels from "@/components/services/Engagementmodels";
import ServiceCta from "@/components/services/Servicecta";
import ProcessSection from "@/components/home/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export const metadata: Metadata = {
  title: "Services | Intellix",
  description: "Web development, graphic design, video editing, and BPO services — under one roof.",
};

const page = () => {
  return (
    <>
      <ServiceHero />
      <StatsBar />
      <ServiceTabs />
      <ComparisonTable />
      <EngagementModels />
      <ProcessSection />
      <TestimonialsSection />
      <ServiceCta />
    </>
  );
};

export default page;
