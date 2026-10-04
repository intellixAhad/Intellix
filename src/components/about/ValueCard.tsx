import HoverLift from "@/components/motions/HoverLift";

type ValueCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export default function ValueCard({ icon, title, description }: ValueCardProps) {
  return (
    <HoverLift lift={3} className="h-full">
      <div className="h-full flex gap-4.5 border border-white/14 bg-[#141414] rounded-none p-7">
        <div className="w-12 h-12 rounded-none bg-[#141414] border border-white/14 flex items-center justify-center text-white-01 shrink-0">
          <svg
            viewBox="0 0 24 24"
            width={24}
            height={24}
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
          <h3 className="font-jetbrain text-[18px] font-semibold text-white-01 mb-2">
            {title}
          </h3>
          <p className="text-sm leading-[1.6] text-gray-02">{description}</p>
        </div>
      </div>
    </HoverLift>
  );
}
