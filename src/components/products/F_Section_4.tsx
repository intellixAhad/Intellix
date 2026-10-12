import Badge from "../common/Badge";
import Reveal from "../motions/reveal";
import SectionTitle from "../common/SectionTitle";
import SectionDescription from "../common/SectionDescription";
import { ArrowRight } from "lucide-react";
import { StaggerGroup, StaggerItem } from "../motions/StaggerReveal";

const hierarchy = [
    { level: "Nation", body: "The sovereign root. Owns global policy and the classification scheme." },
    { level: "Ministry", body: "Defense, State, Intelligence, Treasury — each with scoped channels and members." },
    { level: "Department", body: "Working units where day-to-day channels, files and meetings live." },
    { level: "User", body: "An individual with a passkey identity, a role and a clearance level." },
  ]

export default function F_Section_4() {
  return (
    <section className="p-[46px_clamp(20px,5vw,64px)]">
      <div className="flex flex-col gap-6 md:gap-10 max-w-7xl mx-auto">
        <div className="flex flex-col items-start gap-2 md:gap-4">
          <Reveal y={12}>
            <Badge label="Access model" />
          </Reveal>
          <Reveal delay={0.1}>
            <SectionTitle title="Permissions follow the chain of command, four levels deep." />
          </Reveal>
          <Reveal delay={0.2}>
            <SectionDescription description="Every user, channel and meeting inherits its place in the hierarchy, and clearance is checked on every request, not just at login." />
          </Reveal>
        </div>
        <StaggerGroup className="grid gap-4 md:grid-cols-4">
          {hierarchy.map((h, i) => (
            <StaggerItem key={h.level} className="relative border border-white/10 bg-neutral-900/60 p-6">
              <p className="font-mono text-xs text-neutral-500">Level {i + 1}</p>
              <h3 className="mt-2 text-lg font-semibold text-white">{h.level}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-400">{h.body}</p>
              {i < 3 && <ArrowRight aria-hidden className="absolute -right-4 top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 text-neutral-500 md:block" />}
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
