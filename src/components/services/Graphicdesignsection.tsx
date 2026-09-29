import ServiceSection from "./Servicesection";
import DesignVisual from "./Designvisual";

export default function GraphicDesignSection() {
  return (
    <ServiceSection
      id="graphic-design"
      index="02"
      reverse
      icon={
        <>
          <path d="M12 19l7-7 3 3-7 7-3-3z" />
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
          <path d="M2 2l7.586 7.586" />
          <circle cx={11} cy={11} r={2} />
        </>
      }
      title="Graphic Design"
      description="Brand and interface design that stays consistent across every touchpoint — from your logo to your app's smallest button state. We hand off organized, reusable files, not just flat exports."
      features={[
        "Brand identity & logo design",
        "UI/UX design for web & mobile",
        "Marketing collateral & pitch decks",
        "Social media graphics & templates",
        "Design systems & component libraries",
      ]}
      tags={["Figma", "Illustrator", "Photoshop"]}
      ctaLabel="Start a Design Project"
      visual={<DesignVisual />}
    />
  );
}