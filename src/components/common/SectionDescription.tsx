type SectionDescriptionProps = {
    description: string;
    className?: string;
}

const SectionDescription = ({description, className}: SectionDescriptionProps) => {
  return (
    <h2 className={`text-base md:text-[20px] leading-[1.7] text-gray-02 max-w-190 font-light tracking-wide ${className}`}>
      {description}
    </h2>
  )
}

export default SectionDescription
