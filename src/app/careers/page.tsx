import CareerHero from "@/components/careers/CareerHero";
import CareerReasonSection from "@/components/careers/CareerReasonSection";
import CareersCTA from "@/components/careers/CareersCTA";
import HiringProcessSection from "@/components/careers/HiringProcessSection";
import OpenPositions from "@/components/careers/OpenPositions";

const page = () => {

  return (
    <>
      <CareerHero />
      <CareerReasonSection />
      <OpenPositions />
      <HiringProcessSection />
      <CareersCTA />
    </>
  );
};

export default page;
