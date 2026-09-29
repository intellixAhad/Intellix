import type { Metadata } from "next";
import ServiceHero from "@/components/services/ServiceHero";
import StatsBar from "@/components/services/Statsbar";
import ServiceSubNav from "@/components/services/Servicesubnav";
import ServiceTabs from "@/components/services/Servicetabs";
import ComparisonTable from "@/components/services/Comparisontable";
import EngagementModels from "@/components/services/Engagementmodels";
import ProcessTimeline from "@/components/services/Processtimeline";
import TestimonialStrip from "@/components/services/Testimonialstrip";
import ServiceCta from "@/components/services/Servicecta";

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
      <ProcessTimeline />
      <TestimonialStrip />
      <ServiceCta />
    </>
  );
};

export default page;
