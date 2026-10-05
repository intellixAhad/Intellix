import TeamMemberCard from "@/components/about/TeamMemberCard";
import { StaggerGroup, StaggerItem } from "@/components/motions/StaggerReveal";
import Badge from "../Badge";
import Reveal from "../reveal";

const team = [
  { photo: "/default_image_02.jpg", name: "Arif Rahman", role: "Founder & CEO" },
  { photo: "/default_image_02.jpg", name: "Nusrat Jahan", role: "Head of Engineering" },
  { photo: "/default_image_02.jpg", name: "Tanvir Ahmed", role: "Lead Voice AI Engineer" },
  { photo: "/default_image_02.jpg", name: "Sadia Islam", role: "Product Design" },
  { photo: "/default_image_02.jpg", name: "Imran Chowdhury", role: "Client Success" },
  { photo: "/default_image_02.jpg", name: "Farhana Haque", role: "Operations" },
  { photo: "/default_image_02.jpg", name: "Rakib Hasan", role: "Backend Engineer" },
  { photo: "/default_image_02.jpg", name: "Mehnaz Karim", role: "Growth & Partnerships" },
];

export default function TeamSection() {
  return (
    <section className="p-[92px_clamp(20px,5vw,64px)_92px]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-15 gap-2 md:gap-4 w-full mx-auto flex flex-col">
          <Reveal y={12}>
            <Badge label="Our team" />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="m-0 max-w-2xl font-playfair text-[clamp(2rem,5vw,3rem)] font-bold leading-[1.05] text-white-01 italic">The people behind Intellix.</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-base md:text-[20px] leading-[1.7] text-gray-02 max-w-175 font-light tracking-wide text-start">A small, focused team of developers, designers, and editors working remotely from Dhaka.</p>
          </Reveal>
        </div>

        <StaggerGroup className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {team.map((member) => (
            <StaggerItem key={member.name} className="h-full">
              <TeamMemberCard photo={member.photo} name={member.name} role={member.role} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
