import Link from "next/link";
import Image from "next/image";

const BrandLogo = () => {
  return (
    <Link href="/" className="flex items-center gap-2.5 shrink-0">
      <Image src="/transparent_logo.png" alt="" width={40} height={50} className="h-auto" />
      <span className="font-sans font-semibold text-[20px] tracking-[-0.01em] leading-[100%] text-white-01 italic">
        Intellix
        <br /> Solutions
      </span>
    </Link>
  );
};

export default BrandLogo;
