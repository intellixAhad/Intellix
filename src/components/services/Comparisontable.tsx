import Reveal from "../reveal";

interface Row {
  label: string;
  values: [string, string, string, string];
}

const COLUMNS = ["Web Dev", "Design", "Video", "BPO"];

// Placeholder comparison data — adjust to reflect your real timelines/engagement terms.
const ROWS: Row[] = [
  { label: "Typical timeline", values: ["2–8 weeks", "1–4 weeks", "3–10 days", "Ongoing"] },
  { label: "Engagement style", values: ["Fixed-price or dedicated team", "Fixed-price project", "Per-project or retainer", "Dedicated team"] },
  { label: "Best for", values: ["New builds & platform work", "Brand & interface work", "Marketing & social content", "Recurring ops work"] },
  { label: "What you get", values: ["Source code & docs", "Design system & assets", "Edited exports, all formats", "Trained staff & reporting"] },
];

export default function ComparisonTable() {
  return (
    <section id="compare" className="mx-auto max-w-[1240px] scroll-mt-32 px-[clamp(20px,5vw,64px)] py-14 sm:py-16">
      <Reveal>
        <div className="mb-8 max-w-160 sm:mb-10">
          <div className="mb-3.5 flex items-center gap-2.5">
            <span className="h-1.5 w-1.5 shrink-0 bg-white" />
            <p className="m-0 font-jetbrain text-xs font-semibold uppercase tracking-[.08em] text-gray-02">AT A GLANCE</p>
          </div>
          <h2 className="m-0 font-fraunces text-[28px] font-semibold tracking-[-0.01em] text-white-01 sm:text-[34px]">Compare the services.</h2>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="overflow-x-auto border border-white/14">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-b border-white/14 bg-[#141414]">
                <th className="px-5 py-4 font-jetbrain text-[11px] font-semibold uppercase tracking-[.05em] text-gray-00 sm:px-6">&nbsp;</th>
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
                  <th scope="row" className="px-5 py-4 align-top font-jetbrain text-[12px] font-semibold uppercase tracking-[.03em] text-gray-00 sm:px-6">
                    {row.label}
                  </th>
                  {row.values.map((value, j) => (
                    <td key={j} className="px-5 py-4 align-top text-sm leading-[1.5] text-gray-02 sm:px-6">
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
    </section>
  );
}
