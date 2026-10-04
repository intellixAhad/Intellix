import HoverLift from "@/components/motions/HoverLift";

type CapabilityCardProps = {
  /** Two-digit index label, e.g. "01". */
  index: string;
  /** Inner SVG children (path/circle/line/etc.) — the outer <svg> is fixed. */
  icon: React.ReactNode;
  title: string;
  description: string;
};

/**
 * The repeating "capability" tile — used by CoreCapabilities, but generic
 * enough to reuse anywhere else a numbered icon+title+description card is
 * needed (e.g. a features or services grid elsewhere on the site).
 */
export default function CapabilityCard({
  index,
  icon,
  title,
  description,
}: CapabilityCardProps) {
  return (
    <HoverLift lift={3} className="h-full">
      <div className="h-full border border-white/14 bg-[#141414] rounded-none py-8 px-7 relative">
        <div className="font-jetbrain text-[11px] text-[#6E6E6A] tracking-[.05em] mb-4">
          {index}
        </div>
        <div className="w-[46px] h-[46px] rounded-none bg-[#141414] border border-white/14 flex items-center justify-center text-[#F5F5F2] mb-5">
          <svg
            viewBox="0 0 24 24"
            width={22}
            height={22}
            fill="none"
            stroke="currentColor"
            strokeWidth={1.6}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {icon}
          </svg>
        </div>
        <h3 className="font-fraunces text-[17px] font-semibold text-[#F5F5F2] mb-2.5">
          {title}
        </h3>
        <p className="text-sm leading-[1.6] text-[#A6A6A2]">{description}</p>
      </div>
    </HoverLift>
  );
}
