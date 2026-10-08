import Badge from "@/components/common/Badge";
import TestimonialCard, { TestimonialCardProps } from "./TestimonialCard";
import Reveal from "../motions/reveal";
import SectionTitle from "../common/SectionTitle";
import { StaggerGroup, StaggerItem } from "../motions/StaggerReveal";

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
    <section id="reviews" className="p-[46px_clamp(20px,5vw,64px)]">
      <div className="max-w-7xl mx-auto flex flex-col gap-6 md:gap-10">
        <div className="flex flex-col items-start gap-2 md:gap-4">
          <Reveal y={12}>
            <Badge label="client voices" />
          </Reveal>
          <Reveal delay={0.1}>
            <SectionTitle title="What partners say about working with us." />
          </Reveal>
        </div>

        <StaggerGroup className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((t) => (
            <StaggerItem key={t.name} className="h-full">
              <TestimonialCard {...t} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
