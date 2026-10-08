export interface TestimonialCardProps {
  quote: string;
  name: string;
  date: string;
  initials?: string;
}

export default function TestimonialCard({ quote, name, date, initials = "?" }: TestimonialCardProps) {
  return (
    <div className="relative overflow-hidden border border-white/[0.14] bg-[#141414] px-6 py-6.5 h-full">
      <svg className="pointer-events-none absolute -right-9 -bottom-18 opacity-[0.02]" viewBox="0 0 26 26" width="200" height="200" fill="none" stroke="#F5F5F2" strokeWidth="1.4" aria-hidden="true">
        <path d="M7 15h3l2-4V7H5v6h3z" />
        <path d="M15 15h3l2-4V7h-7v6h3z" />
      </svg>

      <p className="relative mb-5.5 text-[14.5px] leading-[1.7] text-gray-02">{quote}</p>

      <div className="relative flex items-center gap-3">
        <span className="flex h-9.5 w-9.5 items-center justify-center border border-white/[0.14] text-[12px] font-bold text-gray-02">{initials}</span>

        <div>
          <div className="text-[14px] font-semibold text-white-01 font-jetbrain">{name}</div>
          <div className="text-[12.5px] text-gray-00">{date}</div>
        </div>
      </div>
    </div>
  );
}
