type WorkTagProps = {
  label: string;
};

/** Small uppercase pill used in the Life at Intellix "how we work" row. */
export default function WorkTag({ label }: WorkTagProps) {
  return (
    <span className="inline-block py-[9px] px-4 rounded-none border border-white/14 font-jetbrain text-[12.5px] uppercase tracking-[.04em] text-[#F5F5F2] font-semibold">
      {label}
    </span>
  );
}
