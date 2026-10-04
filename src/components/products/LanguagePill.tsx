type LanguagePillProps = {
  label: string;
};

/** The small bordered language/capability tag used in the Global Markets section. */
export default function LanguagePill({ label }: LanguagePillProps) {
  return (
    <span className="font-jetbrain py-[7px] px-3.5 rounded-none border border-white/14 text-[11.5px] text-[#A6A6A2] font-semibold uppercase tracking-[.05em]">
      {label}
    </span>
  );
}
