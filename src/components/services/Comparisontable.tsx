import Badge from "../common/Badge";
import SectionTitle from "../common/SectionTitle";
import Reveal from "../motions/reveal";
import { ROWS, COLUMNS } from "@/data/ServiceData";

export default function ComparisonTable() {
  return (
    <section id="compare" className="p-[46px_clamp(20px,5vw,64px)]">
      <div className="max-w-7xl mx-auto flex flex-col gap-6 md:gap-10">
        <div className="flex flex-col items-start gap-2 md:gap-4">
          <Reveal y={12}>
            <Badge label="at a glance" />
          </Reveal>
          <Reveal delay={0.1}>
            <SectionTitle title="Compare the services." />
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="overflow-x-auto border border-white/14 backdrop-blur-md">
            <table className="w-full min-w-160 border-collapse text-left">
              <thead>
                <tr className="border-b border-white/14 bg-[#141414]">
                  <th className="px-5 py-4 font-jetbrain text-[11px] font-semibold uppercase tracking-wider text-gray-00 sm:px-6">&nbsp;</th>
                  {COLUMNS.map((col) => (
                    <th key={col} className="px-5 py-4 font-fraunces text-[15px] font-semibold text-white-01 sm:px-6">
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row, i) => (
                  <tr key={row.label} className={i !== ROWS.length - 1 ? "border-b border-white/14" : ""}>
                    <th scope="row" className="px-5 py-4 align-top font-jetbrain text-[12px] font-semibold uppercase tracking-[.03em] text-white-01 sm:px-6 bg-[#141414] border-r border-white/14">
                      {row.label}
                    </th>
                    {row.values.map((value, j) => (
                      <td key={j} className={`px-5 py-4 align-top text-sm text-gray-02 sm:px-6 ${j%2 != 0 ? "bg-white-00/2" : ""}`}>
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
