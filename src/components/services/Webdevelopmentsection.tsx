import ServiceSection from "./Servicesection";
import WebDevVisual from "./Webdevvisual";

export default function WebDevelopmentSection() {
  return (
    <ServiceSection
      id="web-development"
      index="01"
      withGridTexture
      icon={
        <>
          <polyline points="8 6 2 12 8 18" />
          <polyline points="16 6 22 12 16 18" />
        </>
      }
      title="Web Development"
      description="From a lightweight landing page to a full product with its own dashboard, we build with modern, maintainable code — not page-builder shortcuts. Every build is responsive, fast, and structured so a future developer (ours or yours) can pick it up easily."
      features={[
        "Custom websites & landing pages",
        "Web applications & internal dashboards",
        "E-commerce stores & checkout flows",
        "API & third-party integrations",
        "CMS setup — WordPress, Webflow, Framer",
        "Ongoing maintenance & support",
      ]}
      tags={["React", "Next.js", "Node.js", "Laravel", "Django"]}
      ctaLabel="Start a Web Project"
      visual={<WebDevVisual />}
    />
  );
}