import ServiceSection from "./Servicesection";
import BpoVisual from "./Bpovisual";

export default function BpoServicesSection() {
  return (
    <ServiceSection
      id="bpo-services"
      index="04"
      reverse
      icon={
        <>
          <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
          <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
        </>
      }
      title="BPO Services"
      description="Trained back-office staff who plug into your existing tools and workflows, so repetitive operational work gets handled reliably while your core team focuses on what only they can do."
      features={[
        "Customer support — chat, email & tickets",
        "Data entry & data cleaning",
        "Virtual assistance & scheduling",
        "Order processing & back-office operations",
        "Tier-1 technical support",
      ]}
      ctaLabel="Set Up a Support Team"
      visual={<BpoVisual />}
    />
  );
}