import Badge from "@/components/Badge"; // adjust to your Badge's actual path
import TestimonialCard, { TestimonialCardProps } from "./TestimonialCard";
import Reveal from "./reveal";

const testimonials: TestimonialCardProps[] = [
  {
    quote: "Intellix was great to work with. I 100% recommend him as a Framer expert. Every challenge that came up he found a quick solution and took initiative. I will hire him again for another complex website build.",
    name: "Rodrigo Antonio",
    date: "May 18, 2026",
    initials: "?",
  },
  {
    quote: "Intellix knocked it out of the park again with implementing more web design changes in framer. It's amazing to see such fast growth in someone. Def give him a try...",
    name: "Marcus Wendt",
    date: "Jun 5, 2026",
    initials: "?",
  },
  {
    quote: "Intellix masterfully built my website from scratch on Framer using my old wix website as reference. Very happy with his work and would highly recommend!",
    name: "Daarya Serji",
    date: "Jul 30, 2026",
    initials: "?",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="p-[46px_clamp(20px,5vw,64px)]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-start gap-2 md:gap-4">
          <Reveal y={12}>
            <Badge label="client voices" />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="m-0 max-w-2xl font-playfair text-[clamp(2rem,5vw,3rem)] font-bold leading-[1.05] text-white-01 italic">What partners say about working with us.</h2>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 mt-14">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
