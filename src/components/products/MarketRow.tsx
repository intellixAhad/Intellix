type MarketRowProps = {
  code: string;
  title: string;
  subtitle: string;
};

/** Country-code badge + title/subtitle row used in the Global Markets panel. */
export default function MarketRow({ code, title, subtitle }: MarketRowProps) {
  return (
    <div className="flex items-center gap-3.5">
      <span className="w-[38px] h-[38px] rounded-none bg-[#141414] border border-white/14 flex items-center justify-center text-[13px] font-bold text-[#F5F5F2] shrink-0">
        {code}
      </span>
      <div>
        <div className="text-sm font-semibold text-[#F5F5F2]">{title}</div>
        <div className="text-xs text-[#6E6E6A]">{subtitle}</div>
      </div>
    </div>
  );
}
