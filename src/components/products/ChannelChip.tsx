type ChannelChipProps = {
  icon: React.ReactNode;
  label: string;
};

/** Tiny icon+label tile used in the 4-up channel diagram inside Orchestration. */
export default function ChannelChip({ icon, label }: ChannelChipProps) {
  return (
    <div className="rounded-none border border-white/14 bg-[#141414] py-3 px-1.5 text-center">
      <svg
        viewBox="0 0 24 24"
        width={16}
        height={16}
        fill="none"
        stroke="#F5F5F2"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mx-auto mb-1.5 block"
      >
        {icon}
      </svg>
      <div className="text-[9.5px] text-[#6E6E6A] font-semibold">{label}</div>
    </div>
  );
}
