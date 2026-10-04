import AudienceSection from "@/components/products/AudienceSection"
import CoreCapabilities from "@/components/products/CoreCapabilities"
import LanguagesSection from "@/components/products/LanguagesSection"
import OrchestrationSection from "@/components/products/OrchestrationSection"
import ProductHero from "@/components/products/ProductHero"
import Stats from "@/components/products/StatsSection"

const page = () => {
  return (
    <>
      <ProductHero />
      <Stats />
      <CoreCapabilities />
      <OrchestrationSection />
      <LanguagesSection />
      <AudienceSection />
    </>
  )
}

export default page
