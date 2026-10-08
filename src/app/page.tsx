import Hero from "@/components/home/Hero";
import StatisticsBox from "@/components/common/StatisticsBox";
import ServiceSection from "@/components/home/ServiceSection";
import IndustryFieldsSections from "@/components/home/IndustryFieldsSections";
import ProductSection from "@/components/home/ProductSection";
import ProjectSection from "@/components/home/ProjectSection";
import WhyIntellixSection from "@/components/home/WhyIntellixSection";
import TechnologySection from "@/components/home/TechnologySection";
import ProcessSection from "@/components/home/ProcessSection";
import TeamSection from "@/components/home/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/home/FaqSection";
import CareerSection from "@/components/home/CareerSection";
import ContactSection from "@/components/home/ContactSection";

const page = () => {
  return (
    <>
      <Hero />

      <StatisticsBox N1={28} P1="+" T1="Projects Delivered" N2={12} P2="+" T2="Clients Served" N3={10} P3="+" T3="Team Members" N4={4} T4="Core Service Line" />

      <ServiceSection />

      <IndustryFieldsSections />

      <ProductSection />

      <ProjectSection />

      <WhyIntellixSection />

      <TechnologySection />

      <ProcessSection />

      <TeamSection />

      <TestimonialsSection />

      <FaqSection />

      <CareerSection />

      <ContactSection />
    </>
  );
};

export default page;
