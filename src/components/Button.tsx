import Link from "next/link";

const Button = ({ title = "Button", link = "" }: { title: string; link: string }) => {
  return (
    <Link
      href={link}
      className="hidden md:inline-flex items-center gap-2 px-5 py-2.25 bg-white border-[1.5px] border-white text-black-01 font-jetbrain uppercase tracking-[.04em] font-semibold text-[12.5px] whitespace-nowrap shrink-0 transition-all duration-300 hover:bg-transparent hover:text-gray-03 active:scale-[0.97]"
    >
      {title}
      <svg
        viewBox="0 0 24 24"
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-colors duration-300"
      >
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
    </Link>
  );
};

export default Button;
