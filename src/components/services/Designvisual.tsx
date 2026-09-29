export default function DesignVisual() {
  return (
    <div className="border border-white/14 bg-[#141414] p-5 sm:p-[26px]">
      <div className="mb-5 flex flex-wrap gap-2.5">
        <span className="h-9 w-9 bg-white" />
        <span className="h-9 w-9 bg-[#9A9A94]" />
        <span className="h-9 w-9 bg-[#9A9A94]" />
        <span className="h-9 w-9 bg-[#9A9A94]" />
        <span className="h-9 w-9 bg-white" />
      </div>

      <div className="mb-4.5 flex items-end gap-3 border-y border-white/14 py-4 sm:gap-4">
        <span className="font-fraunces text-[42px] font-bold leading-none text-white-01 sm:text-[52px]">Aa</span>
        <div>
          <div className="text-[13px] font-semibold text-gray-02">Fraunces — Display</div>
          <div className="mt-0.5 text-xs text-[#6E6E6A]">IBM Plex Sans — Body</div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="h-11 w-11 shrink-0 bg-white" />
        <div className="flex-grow">
          <div className="mb-2 h-2 w-[70%] bg-white/14" />
          <div className="h-2 w-[45%] bg-white/8" />
        </div>
      </div>
    </div>
  );
}