import Link from "next/link";

type ButtonProps = {
  title: string;
  link: string;
  variant?: "primary" | "secondary";
};

const Button = ({ title, link, variant = "primary" }: ButtonProps) => {
  return (
    <Link
      href={link}
      className={`group hidden md:inline-flex items-center gap-2 px-5 py-2.75 border-[1.5px] font-jetbrain uppercase tracking-[.04em] font-semibold text-[12.5px] whitespace-nowrap shrink-0 overflow-hidden transition-all duration-300 ease-out active:scale-[0.96] active:duration-150 ${
        variant === "primary"
          ? "bg-white border-white text-black-01 hover:bg-[#141414] hover:text-gray-03"
          : "bg-[#141414] border-white text-gray-03 hover:bg-white-01 hover:text-black-01"
      }`}
    >
      <span className="transition-transform duration-300 ease-out group-hover:-translate-x-0.5">
        {title}
      </span>
      <svg
        viewBox="0 0 24 24"
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="shrink-0 transition-transform duration-300 ease-out group-hover:-rotate-45"
      >
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
    </Link>
  );
};

export default Button;