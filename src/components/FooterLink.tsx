import Link from "next/link";

const FooterLink = ({ title = "title", link = "/" }: { title: string, link: string }) => {
  return (
    <Link href={link} className="text-[14px] text-gray-01 transition-colors hover:text-white-01 font-jetbrain capitalize">
      {title}
    </Link>
  );
};

export default FooterLink;
