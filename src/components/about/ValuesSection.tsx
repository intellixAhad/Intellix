import ValueCard from "@/components/about/ValueCard";
import { StaggerGroup, StaggerItem } from "@/components/motions/StaggerReveal";
import Badge from "../common/Badge";
import Reveal from "../motions/reveal";
import SectionTitle from "../common/SectionTitle";

const COMPASS_ICON = (
  <>
    <circle cx={12} cy={12} r={10} />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </>
);

const BOLT_ICON = <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />;

const SHIELD_ICON = <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />;

const HANDSHAKE_ICON = (
  <>
    <path d="M22 11l-5-5-2 2-3-3-7 7 3 3-2 2 5 5 2-2 3 3 7-7-3-3z" />
  </>
);

const values = [
  {
    icon: COMPASS_ICON,
    title: "Client-First Direction",
    description: "We build toward outcomes our clients can measure, not features that look good in a demo.",
  },
  {
    icon: BOLT_ICON,
    title: "Move With Speed",
    description: "Small, senior teams ship fast. We favor shipping a working version this week over a perfect one next quarter.",
  },
  {
    icon: SHIELD_ICON,
    title: "Reliability by Default",
    description: "Voice and outbound infrastructure has to work every time. We engineer for the failure cases first.",
  },
  {
    icon: HANDSHAKE_ICON,
    title: "Long-Term Partnership",
    description: "We work like an extension of our clients' teams, not a vendor that disappears after launch.",
  },
];

export default function ValuesSection() {
  return (
    <section className="p-[0px_clamp(20px,5vw,64px)_46px]">
      <div className="max-w-7xl mx-auto flex flex-col gap-6 md:gap-10">
        <div className="gap-2 md:gap-4 w-full mx-auto flex flex-col">
          <Reveal y={12}>
            <Badge label="What we value" />
          </Reveal>
          <Reveal delay={0.1}>
            <SectionTitle title="The principles behind how we work." />
          </Reveal>
        </div>

        <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {values.map((value) => (
            <StaggerItem key={value.title} className="h-full">
              <ValueCard icon={value.icon} title={value.title} description={value.description} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
