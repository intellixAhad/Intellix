import ProcessSection from "@/components/home/ProcessSection"
import DesignCTA from "@/components/projects/CtaSection"
import FeaturedDesignWork from "@/components/projects/FeaturedDesignWork"
import ProjectHero from "@/components/projects/ProjectHero"
import ProjectService from "@/components/projects/ProjectService"

const page = () => {
  return (
    <>
      <ProjectHero />
      <ProjectService />
      <FeaturedDesignWork />
      <ProcessSection />
      <DesignCTA />
    </>
  )
}

export default page
