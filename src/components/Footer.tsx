import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white-00/14 bg-black-01">
      <div className="mx-auto w-full max-w-360 p-[64px_clamp(20px,5vw,64px)_64px]">
        <div className="mb-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1.1fr] lg:gap-8">
          <div>
            <div className="mb-4 flex items-center gap-2.5">
              <Link href="#top" className="flex items-center gap-2.5 shrink-0">
                <Image src="./assets/brand-logo.png" alt="" width={50} />
                <span className="font-playfair font-bold text-[20px] tracking-[-0.01em] text-white-01">
                  Intellix
                </span>
              </Link>
              <span className="font-display text-[18px] font-semibold text-white-01">Intellix</span>
            </div>

            <p className="mb-5.5 max-w-70 text-[14px] leading-[1.65] text-gray-00">
              A software agency building web products, visuals, and operations support — plus our own product line,
              including Verbosa.ai.
            </p>

            {/* Social Links */}
            <div className="flex gap-2.5">
              <a
                href="#"
                aria-label="LinkedIn"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  border
                  border-white/14
                  text-[12px]
                  font-bold
                  text-gray-02
                  transition-colors
                  hover:border-white/30
                  hover:text-white-01
                "
              >
                Li
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  border
                  border-white/[0.14]
                  text-[12px]
                  font-bold
                  text-[#A6A6A2]
                  transition-colors
                  hover:border-white/[0.3]
                  hover:text-[#F5F5F2]
                "
              >
                Ig
              </a>

              <a
                href="#"
                aria-label="X"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  border
                  border-white/[0.14]
                  text-[12px]
                  font-bold
                  text-[#A6A6A2]
                  transition-colors
                  hover:border-white/[0.3]
                  hover:text-[#F5F5F2]
                "
              >
                X
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-[18px] font-mono text-[12px] font-bold uppercase tracking-[0.08em] text-[#6E6E6A]">
              SERVICES
            </h4>

            <div className="flex flex-col gap-3">
              <Link
                href="/services#web-development"
                className="text-[14px] text-[#A6A6A2] transition-colors hover:text-[#F5F5F2]"
              >
                Web Development
              </Link>

              <Link
                href="/services#graphic-design"
                className="text-[14px] text-[#A6A6A2] transition-colors hover:text-[#F5F5F2]"
              >
                Graphic Design
              </Link>

              <Link
                href="/services#video-editing"
                className="text-[14px] text-[#A6A6A2] transition-colors hover:text-[#F5F5F2]"
              >
                Video Editing
              </Link>

              <Link
                href="/services#bpo-services"
                className="text-[14px] text-[#A6A6A2] transition-colors hover:text-[#F5F5F2]"
              >
                BPO Services
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-[18px] font-mono text-[12px] font-bold uppercase tracking-[0.08em] text-[#6E6E6A]">
              COMPANY
            </h4>

            <div className="flex flex-col gap-3">
              <Link href="/#why" className="text-[14px] text-[#A6A6A2] transition-colors hover:text-[#F5F5F2]">
                Why Intellix
              </Link>

              <Link href="/product" className="text-[14px] text-[#A6A6A2] transition-colors hover:text-[#F5F5F2]">
                Product
              </Link>

              <Link href="/#process" className="text-[14px] text-[#A6A6A2] transition-colors hover:text-[#F5F5F2]">
                Our Process
              </Link>

              <Link href="/about" className="text-[14px] text-[#A6A6A2] transition-colors hover:text-[#F5F5F2]">
                About Us
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-[18px] font-mono text-[12px] font-bold uppercase tracking-[0.08em] text-[#6E6E6A]">
              RESOURCES
            </h4>

            <div className="flex flex-col gap-3">
              <Link href="/projects" className="text-[14px] text-[#A6A6A2] transition-colors hover:text-[#F5F5F2]">
                Projects
              </Link>

              <Link href="/careers" className="text-[14px] text-[#A6A6A2] transition-colors hover:text-[#F5F5F2]">
                Careers
              </Link>

              <Link href="/#faq" className="text-[14px] text-[#A6A6A2] transition-colors hover:text-[#F5F5F2]">
                FAQ
              </Link>

              <Link href="/contact" className="text-[14px] text-[#A6A6A2] transition-colors hover:text-[#F5F5F2]">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-[18px] font-mono text-[12px] font-bold uppercase tracking-[0.08em] text-[#6E6E6A]">
              CONTACT
            </h4>

            <div className="flex flex-col gap-3">
              <span className="text-[14px] text-[#A6A6A2]">intellixsolutions@gmail.com</span>

              <span className="text-[14px] text-[#A6A6A2]">+</span>

              <span className="text-[14px] text-[#A6A6A2]">Dhaka, Bangladesh</span>
            </div>
          </div>
        </div>

        <div
          className="
            flex
            flex-col
            gap-4
            border-t
            border-white/14
            pt-6
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p className="m-0 text-[13px] text-gray-00">© 2026 Intellix. All rights reserved.</p>

          <div className="flex gap-5.5">
            <Link href="/privacy" className="text-[13px] text-gray-00 transition-colors hover:text-white-01">
              Privacy Policy
            </Link>

            <Link href="/terms" className="text-[13px] text-gray-00 transition-colors hover:text-white-01">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
