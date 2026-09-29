import ServiceSection from "./Servicesection";
import VideoVisual from "./Videovisual";

export default function VideoEditingSection() {
  return (
    <ServiceSection
      id="video-editing"
      index="03"
      icon={
        <>
          <rect x={2} y={5} width={15} height={14} rx={2} />
          <polygon points="17 9 22 6 22 18 17 15" />
        </>
      }
      title="Video Editing"
      description="Raw footage into content that holds attention — cut for pacing, captioned for sound-off viewing, and formatted for wherever it's going to run, from a landing page hero to a 15-second reel."
      features={[
        "Promotional & product videos",
        "Short-form social content & reels",
        "Motion graphics & animated titles",
        "Corporate & explainer videos",
        "Captioning, color grading & sound mix",
      ]}
      tags={["Premiere Pro", "After Effects", "DaVinci Resolve"]}
      ctaLabel="Start a Video Project"
      visual={<VideoVisual />}
    />
  );
}