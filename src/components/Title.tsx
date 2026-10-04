const Title = ({ title, long = 760 }: { title: string, long: number }) => {
  return <h1 className="font-plex font-semibold sm:font-extrabold leading-[1.02] tracking-[-0.01em] mb-6 text-white-01 text-[clamp(2.5rem,6vw,5rem)] text-center " style={{ maxWidth: `${long}px` }}>{title}</h1>;
};

export default Title;
