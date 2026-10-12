import Reveal from "../motions/reveal";
import Badge from "../common/Badge";
import SectionTitle from "../common/SectionTitle";
import SectionDescription from "../common/SectionDescription";

const visibility = [
  ["Public", "Visible nation-wide"],
  ["Internal", "Any authenticated user in the nation"],
  ["Private", "Owning department or invited members"],
  ["Confidential", "Requires elevated clearance"],
  ["Restricted", "Highest tier"],
];

const F_Section_5 = () => {
  return (
    <section className="p-[46px_clamp(20px,5vw,64px)]">
      <div className="grid gap-10 md:grid-cols-2 max-w-7xl mx-auto">
        <div className="flex flex-col items-start gap-2 md:gap-4">
          <Reveal y={12}>
            <Badge label="One visibility model" />
          </Reveal>
          <Reveal delay={0.1}>
            <SectionTitle title="The same five-level scale governs meetings, channels and files." />
          </Reveal>
          <Reveal delay={0.2}>
            <SectionDescription description="Visibility is set at creation and enforced on every subsequent read, whether you're scheduling a meeting, posting to a channel, or sharing a file." />
          </Reveal>
        </div>
        <table className="w-full self-start border-collapse text-left text-sm">
          <caption className="sr-only">Classification levels</caption>
          <thead>
            <tr className="border-b border-white/15 font-mono text-xs text-neutral-500">
              <th className="py-3 pr-4 font-normal">Level</th>
              <th className="py-3 font-normal">Typical use</th>
            </tr>
          </thead>
          <tbody>
            {visibility.map(([level, use]) => (
              <tr key={level} className="border-b border-white/10">
                <td className="py-4 pr-4 font-mono text-white">{level}</td>
                <td className="py-4 text-neutral-400">{use}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default F_Section_5;
