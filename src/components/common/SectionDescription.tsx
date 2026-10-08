type SectionDescriptionProps = {
    description: string;
    className?: string;
    long?: number;
}

const SectionDescription = ({description, className, long = 760}: SectionDescriptionProps) => {
  return (
    <h2 className={`text-base md:text-[20px] leading-[1.7] text-gray-02 font-light tracking-wide ${className}`} style={{ maxWidth: `${long}px` }}>
      {description}
    </h2>
  )
}

export default SectionDescription
