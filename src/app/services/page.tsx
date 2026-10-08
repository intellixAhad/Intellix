import type { Metadata } from "next";
import ServiceHero from "@/components/services/ServiceHero";
import StatsBar from "@/components/services/Statsbar";
import ServiceSubNav from "@/components/services/Servicesubnav";
import ServiceTabs from "@/components/services/Servicetabs";
import ComparisonTable from "@/components/services/Comparisontable";
import EngagementModels from "@/components/services/Engagementmodels";
import ServiceCta from "@/components/services/Servicecta";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ProcessSection from "@/components/home/ProcessSection";

export const metadata: Metadata = {
  title: "Services | Intellix",
  description: "Web development, graphic design, video editing, and BPO services — under one roof.",
};

const page = () => {
  return (
    <>
      <ServiceHero />
      <StatsBar />
      <ServiceSubNav />
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
