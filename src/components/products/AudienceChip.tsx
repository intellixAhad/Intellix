import HoverLift from "@/components/motions/HoverLift";

type AudienceChipProps = {
  icon: React.ReactNode;
  label: string;
};

/** Icon + label tile used in the "Who it's for" audience grid. */
export default function AudienceChip({ icon, label }: AudienceChipProps) {
  return (
    <HoverLift lift={3} className="h-full">
      <div className="h-full border border-white/14 bg-[#141414] rounded-none py-6.5 px-4 text-center">
        <div className="text-[#F5F5F2] mx-auto mb-3 w-[26px] h-[26px]">
          <svg
            viewBox="0 0 24 24"
            width={26}
            height={26}
            fill="none"
            stroke="currentColor"
            strokeWidth={1.6}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {icon}
          </svg>
        </div>
        <span className="text-[13.5px] font-semibold text-[#A6A6A2]">{label}</span>
      </div>
    </HoverLift>
  );
}
