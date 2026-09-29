export default function VideoVisual() {
  return (
    <div className="overflow-hidden border border-white/14 bg-[#141414]">
      <div className="relative flex h-[160px] items-center justify-center bg-[#1C1C1C] sm:h-[180px]">
        <span className="flex h-14 w-14 items-center justify-center bg-white/14">
          <svg viewBox="0 0 24 24" width={22} height={22} fill="#F5F5F2" stroke="none">
            <polygon points="6 4 20 12 6 20" />
          </svg>
        </span>
        <span className="absolute right-4 top-3.5 bg-black/40 px-2.5 py-1 font-jetbrain text-[11px] text-white-01">
          00:24 / 01:12
        </span>
      </div>
      <div className="flex gap-2 border-t border-white/14 p-4 sm:p-[18px]">
        <div className="h-11 flex-1 bg-white/25" />
        <div className="relative h-11 flex-1 bg-[#9A9A94]/25">
          <span className="absolute -top-1.5 -bottom-1.5 left-1/2 w-0.5 animate-pulse bg-[#F5F5F2]" />
        </div>
        <div className="h-11 flex-1 bg-[#9A9A94]/20" />
        <div className="h-11 flex-1 bg-white/20" />
      </div>
    </div>
  );
}