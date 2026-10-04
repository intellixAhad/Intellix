"use client";

import TeamMemberCard from "@/components/about/TeamMemberCard";
import FadeIn from "@/components/motions/FadeIn";
import { StaggerGroup, StaggerItem } from "@/components/motions/StaggerReveal";
import Badge from "../Badge";

const team = [
  { photo: "/images/team/member-1.jpg", name: "Arif Rahman", role: "Founder & CEO" },
  { photo: "/images/team/member-2.jpg", name: "Nusrat Jahan", role: "Head of Engineering" },
  { photo: "/images/team/member-3.jpg", name: "Tanvir Ahmed", role: "Lead Voice AI Engineer" },
  { photo: "/images/team/member-4.jpg", name: "Sadia Islam", role: "Product Design" },
  { photo: "/images/team/member-5.jpg", name: "Imran Chowdhury", role: "Client Success" },
  { photo: "/images/team/member-6.jpg", name: "Farhana Haque", role: "Operations" },
  { photo: "/images/team/member-7.jpg", name: "Rakib Hasan", role: "Backend Engineer" },
  { photo: "/images/team/member-8.jpg", name: "Mehnaz Karim", role: "Growth & Partnerships" },
];

export default function TeamSection() {
  return (
    <section className="section-pad relative z-1 px-[clamp(20px,5vw,64px)] pb-[110px]">
      <div className="relative max-w-360 mx-auto">
        <FadeIn className="max-w-[640px] mb-12">
          <Badge label="Team"/>
          <h2 className="font-fraunces text-[34px] font-bold tracking-[-0.01em] text-[#F5F5F2] m-0">
            The people behind the product.
          </h2>
        </FadeIn>

        <StaggerGroup className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {team.map((member) => (
            <StaggerItem key={member.name} className="h-full">
              <TeamMemberCard
                photo={member.photo}
                name={member.name}
                role={member.role}
              />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
