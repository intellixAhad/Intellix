export default function WebDevVisual() {
  return (
    <div className="overflow-hidden border border-white/14 bg-[#141414]">
      <div className="flex items-center gap-2 border-b border-white/14 bg-[#141414] px-4 py-3.5 sm:px-[18px]">
        <span className="h-[11px] w-[11px] bg-[#F5F5F0]" />
        <span className="h-[11px] w-[11px] bg-[#B5B5B0]" />
        <span className="h-[11px] w-[11px] bg-[#6E6E68]" />
        <span className="ml-2 flex-grow truncate rounded-none bg-white/14 px-3 py-1 font-jetbrain text-[11.5px] text-[#6E6E6A]">
          yourproject.com
        </span>
      </div>
      <div className="p-5 sm:p-6">
        <div className="mb-5 h-3.5 w-2/5 bg-white/14" />
        <div className="mb-4.5 flex h-[74px] items-center justify-center border border-white/14 bg-[#1C1C1C]">
          <div className="h-2.5 w-[44%] bg-white/25" />
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div className="h-14 border border-white/14 bg-[#141414]" />
          <div className="h-14 border border-white/14 bg-[#141414]" />
          <div className="h-14 border border-white/14 bg-[#141414]" />
        </div>
      </div>
    </div>
  );
}