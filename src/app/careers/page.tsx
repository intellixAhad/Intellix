import CareerHero from "@/components/careers/CareerHero";
import PerksSection from "@/components/careers/PerksSection";
import CtaSection from "@/components/careers/CtaSection";
import HiringStepsSection from "@/components/careers/HiringStepsSection";
import OpenPositions from "@/components/careers/OpenPositions";

const page = () => {

  return (
    <>
      <CareerHero />
      <PerksSection />
      <OpenPositions />
      <HiringStepsSection />
      <CtaSection />
    </>
  );
};

export default page;
