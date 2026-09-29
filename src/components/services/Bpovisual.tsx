interface Ticket {
  status: "Closed" | "In progress" | "Escalated";
  dotColor: string;
  width: string;
}

const TICKETS: Ticket[] = [
  { status: "Closed", dotColor: "#9A9A94", width: "60%" },
  { status: "In progress", dotColor: "#FFFFFF", width: "44%" },
  { status: "Closed", dotColor: "#9A9A94", width: "70%" },
  { status: "Escalated", dotColor: "#D8D8D2", width: "32%" },
];

export default function BpoVisual() {
  return (
    <div className="border border-white/14 bg-[#141414] p-5 sm:p-[22px]">
      <div className="mb-4.5 flex items-center justify-between gap-3">
        <span className="text-[12.5px] font-semibold text-gray-02">Support Queue</span>
        <span className="font-fraunces text-lg font-bold text-white sm:text-[22px]">12 resolved today</span>
      </div>
      <div className="flex flex-col gap-2.5">
        {TICKETS.map((t, i) => (
          <div key={i} className="flex items-center gap-2.5 border border-white/14 bg-black-01 px-3 py-2.5">
            <span className="h-2 w-2 shrink-0" style={{ backgroundColor: t.dotColor }} />
            <div className="h-2 bg-white/14" style={{ width: t.width }} />
            <span className="ml-auto shrink-0 text-[11px] text-[#6E6E6A]">{t.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}