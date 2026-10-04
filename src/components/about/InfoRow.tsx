type InfoRowProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
};


export default function InfoRow({ icon, label, value }: InfoRowProps) {
  return (
    <div className="flex items-center gap-3.5">
      <div className="w-10.5 h-10.5 rounded-none bg-[#141414] border border-white/14 flex items-center justify-center text-white-01 shrink-0">
        <svg
          viewBox="0 0 24 24"
          width={20}
          height={20}
          fill="none"
          stroke="currentColor"
          strokeWidth={1.6}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {icon}
        </svg>
      </div>
      <div>
        <div className="font-jetbrain text-[11px] tracking-[.06em] uppercase text-gray-00 font-semibold">
          {label}
        </div>
        <div className="text-[15px] font-semibold text-white-01">{value}</div>
      </div>
    </div>
  );
}
