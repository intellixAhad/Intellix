type SectionTitleProps = {
  title: string;
  className?: string;
};

const SectionTitle = ({ title, className }: SectionTitleProps) => {
  return <h2 className={`m-0 max-w-2xl font-playfair text-[clamp(2rem,5vw,3rem)] font-bold leading-[1.05] text-white-01 italic ${className}`}>{title}</h2>;
};

export default SectionTitle;
