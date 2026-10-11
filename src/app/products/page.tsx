import StatisticsBox from "@/components/common/StatisticsBox"
import AudienceSection from "@/components/products/AudienceSection"
import CoreCapabilities from "@/components/products/CoreCapabilities"
import LanguagesSection from "@/components/products/LanguagesSection"
import OrchestrationSection from "@/components/products/OrchestrationSection"
import ProductHero from "@/components/products/ProductHero"

const page = () => {
  return (
    <>
      <ProductHero />
      <StatisticsBox N1={500} P1="ms" T1="AI Response Time" N2={30} P2="+" T2="Languages Supported" N3={48} P3="+" T3="Lead data sources" N4={3} P4="-in-1" T4="Voice + chat + Email"/>
      <CoreCapabilities />
      <OrchestrationSection />
      <LanguagesSection />
      <AudienceSection />
    </>
  )
}

export default page
