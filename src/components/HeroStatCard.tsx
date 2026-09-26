import Link from "next/link";

type CardStat = {
  value: string;
  tag: string;
  variant: "statCard" | "jumpPill";
};

const HeroStatCard = ({ value, tag, variant }: CardStat) => {
  return variant === "statCard" ? (
    <div className="border border-white/14 bg-[#141414] px-2.5 py-4">
      <div className="font-playfair text-2xl font-semibold text-white-01">
        {value}
      </div>
      <div className="text-[11px] text-gray-00 mt-1">{tag}</div>
    </div>
  ) : (
    <Link
      href="#web-development"
      className="flex items-center gap-2 justify-center py-3 px-3.5 border border-white/14 background:#141414; font-jetbrain text-[12px] tracking-[.03em] font-semibold text-gray-02"
    >
      <svg
        viewBox="0 0 24 24"
        width="15"
        height="15"
        fill="none"
        stroke="#F5F5F2"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polyline points="8 6 2 12 8 18"></polyline>
        <polyline points="16 6 22 12 16 18"></polyline>
      </svg>
      Web Dev
    </Link>
  );
};

export default HeroStatCard;
