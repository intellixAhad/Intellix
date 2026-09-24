const Badge = ({ label = "Badg Title" }: { label: string }) => {
  return (
    <div className="inline-flex items-center gap-2.5 mb-6.5">
      <span className="w-1.75 h-1.75 rounded-none bg-white-00" />
      <span className="font-jetbrain text-xs tracking-[.08em] font-semibold text-gray-02 uppercase">{label}</span>
    </div>
  );
};

export default Badge;
