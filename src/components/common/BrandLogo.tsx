import Link from "next/link";
import Image from "next/image";

const BrandLogo = () => {
  return (
    <Link href="/#top" className="flex items-center gap-2.5 shrink-0">
      <Image src="/transparent_logo.png" alt="Intellix Logo" width={727} height={841} className="w-10 h-auto"/>
      <div className="font-sans font-bold text-[20px] tracking-[-0.01em] leading-[100%] text-white-01 italic">
        Intellix
        <br /> <span className="text-gray-01">Solutions</span>
      </div>
    </Link>
  );
};

export default BrandLogo;
