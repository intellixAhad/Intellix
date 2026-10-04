import HoverLift from "@/components/motions/HoverLift";

type TeamMemberCardProps = {
  photo: string;
  name: string;
  role: string;
};

/** Photo + name/role tile used in the Team grid. */
export default function TeamMemberCard({ photo, name, role }: TeamMemberCardProps) {
  return (
    <HoverLift lift={3} className="h-full">
      <div className="h-full border border-white/14 bg-[#141414] rounded-none py-6.5 px-5 text-center">
        <div className="w-20 h-20 rounded-none overflow-hidden mx-auto mb-4 border border-white/14">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photo}
            alt="Portrait of a team member"
            className="w-full h-full object-cover block"
            loading="lazy"
          />
        </div>
        <h3 className="font-fraunces text-[15px] font-semibold text-[#F5F5F2] mb-1">
          {name}
        </h3>
        <p className="font-jetbrain text-xs text-[#6E6E6A] m-0">{role}</p>
      </div>
    </HoverLift>
  );
}
