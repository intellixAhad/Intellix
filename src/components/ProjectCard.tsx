import Image from "next/image";
import { memo } from "react";

type ProjectCardProps = {
  category: string;
  title: string;
  description: string;
  liveUrl: string;
  initials?: string;
  image: string;
  detailsHref?: string;
  className?: string;
};

const ProjectCard = ({ category, title, description, liveUrl, initials, image, detailsHref = "/projects", className = "" }: ProjectCardProps) => {
  return (
    <article className={`group relative block overflow-hidden border border-white/[0.14] bg-[#141414] transition-colors duration-300 focus-within:border-white/30 ${className}`}>
      <div className="relative flex h-55 items-center justify-center overflow-hidden border-b border-white/[0.14] bg-black-01">
        <div
          className="flex h-full w-full items-center justify-center transition-all duration-500 ease-out
            group-hover:scale-105 group-hover:blur-[6px]
            group-focus-within:scale-105 group-focus-within:blur-[6px]
            motion-reduce:transition-none motion-reduce:group-hover:scale-100
            [@media(hover:none)]:blur-0"
        >
          {image ? <Image src={image} alt="" className="h-full w-full object-cover" loading="lazy" width={400} height={400} /> : <span className="flex h-11 w-11 items-center justify-center border border-white/[0.14] font-display text-[13px] font-semibold text-white-01">{initials}</span>}
        </div>

        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300
            group-hover:opacity-100 group-focus-within:opacity-100
            [@media(hover:none)]:opacity-100 [@media(hover:none)]:bg-black/30"
        >
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${title} live site (opens in a new tab)`}
            className="pointer-events-auto relative z-10 inline-flex translate-y-3 items-center gap-2 border border-white/60 bg-white px-4 py-2.5 font-mono text-[11.5px] font-bold tracking-[0.08em] text-black-01 transition-all duration-300 ease-out
              hover:bg-transparent hover:text-white-01
              focus-visible:bg-transparent focus-visible:text-white-01 focus-visible:outline-none
              group-hover:translate-y-0 group-focus-within:translate-y-0
              [@media(hover:none)]:translate-y-0
              motion-reduce:transition-none"
          >
            VISIT SITE
            <svg aria-hidden="true" width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <path d="M2 10 10 2M4 2h6v6" />
            </svg>
          </a>
        </div>
      </div>

      <div className="p-5.5">
        <span className="font-mono text-[11.5px] font-bold uppercase tracking-[0.08em] text-gray-00">{category}</span>

        <h3 className="mb-2.5 mt-2 font-jetbrain tracking-tighter text-[18px] font-semibold text-white-01">
          <a href={detailsHref} className="after:absolute after:inset-0 focus-visible:outline-none">
            {title}
          </a>
        </h3>

        <p className="m-0 text-[14px] leading-[1.6] text-gray-02 line-clamp-3">{description}</p>
      </div>
    </article>
  );
};

export default memo(ProjectCard);
