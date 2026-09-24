import BrandLogo from "./BrandLogo";
import FooterLinkHeader from "./FooterLinkHeader";
import FooterLink from "./FooterLink";

export default function Footer() {
  return (
    <footer className="p-[0px_clamp(20px,5vw,64px)_64px]">
      <div className="border-t border-white-00/14 mx-auto w-full max-w-360 pt-16">
        <div className="mb-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_0.8fr_0.8fr_0.8fr_0.8fr] lg:gap-8">
          <div>
            <div className="mb-4 flex items-center gap-2.5">
              <BrandLogo />
            </div>

            <p className="mb-5.5 max-w-md text-[15px] leading-[1.65] text-gray-01 font-jetbrain">
              A software agency building web products, visuals, and operations support — plus our own product line,
              including Verbosa.ai.
            </p>

            <div className="flex gap-2.5">
              <a
                href=""
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center hover:bg-white-01/12 rounded-md"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#f5f5f5">
                  <path d="M6.94 8.5H3.56V20H6.94V8.5ZM5.25 3C4.14 3 3.25 3.9 3.25 5C3.25 6.1 4.14 7 5.25 7C6.36 7 7.25 6.1 7.25 5C7.25 3.9 6.36 3 5.25 3ZM20.75 13.41C20.75 9.93 18.9 8.3 16.44 8.3C14.45 8.3 13.56 9.39 13.06 10.15V8.5H9.69V20H13.06V14.3C13.06 12.8 13.34 11.35 15.22 11.35C17.07 11.35 17.1 13.06 17.1 14.4V20H20.47L20.75 13.41Z" />
                </svg>
              </a>

              <a
                href=""
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center hover:bg-white-01/12 rounded-md"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#f5f5f5">
                  <path d="M13.5 21V12.75H16.25L16.66 9.54H13.5V7.49C13.5 6.56 13.76 5.93 15.08 5.93H16.75V3.06C16.46 3.02 15.46 2.94 14.3 2.94C11.88 2.94 10.22 4.42 10.22 7.14V9.54H7.47V12.75H10.22V21H13.5Z" />
                </svg>
              </a>

              <a
                href=""
                aria-label="email"
                className="flex h-9 w-9 items-center justify-center hover:bg-white-01/12 rounded-md"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="5" width="18" height="14" rx="2" stroke="#f5f5f5" strokeWidth="2.5" />
                  <path
                    d="M4 7L12 13L20 7"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <FooterLinkHeader title="services" />
            <div className="flex flex-col gap-3">
              <FooterLink title="Wev development" link="/services#web-development" />
              <FooterLink title="Graphic Design" link="/services#graphic-design" />
              <FooterLink title="Video Editing" link="/services#video-editing" />
              <FooterLink title="BPO Services" link="/services#bpo-services" />
            </div>
          </div>

          <div>
            <FooterLinkHeader title="company" />
            <div className="flex flex-col gap-3">
              <FooterLink title="Why Intellix" link="/#why" />
              <FooterLink title="Product" link="/product" />
              <FooterLink title="Our Process" link="/#process" />
              <FooterLink title="About Us" link="/about" />
            </div>
          </div>

          <div>
            <FooterLinkHeader title="resources" />
            <div className="flex flex-col gap-3">
              <FooterLink title="Projects" link="/projects" />
              <FooterLink title="Careers" link="/careers" />
              <FooterLink title="FAQ" link="/#faq" />
              <FooterLink title="Contact" link="/contact" />
            </div>
          </div>

          <div>
            <FooterLinkHeader title="contact" />
            <div className="flex flex-col gap-2">
              <span className="text-[13px] text-gray-01 font-jetbrain">intellixsolutions@gmail.com</span>
              <span className="text-[13px] text-gray-01 font-jetbrain">+0081792649734</span>
              <span className="text-[13px] text-gray-01 font-jetbrain">Dhaka, Bangladesh</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/14 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="m-0 text-[13px] text-gray-00">© 2026 Intellix. All rights reserved.</p>
          <div className="flex gap-5.5">
            <FooterLink title="Privacy Policy" link="/privacy" />
            <FooterLink title="Terms of Service" link="/terms" />
          </div>
        </div>
      </div>
    </footer>
  );
}
