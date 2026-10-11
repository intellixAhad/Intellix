import Reveal from "../motions/reveal";
import Badge from "../common/Badge";
import SectionTitle from "../common/SectionTitle";
import { StaggerGroup, StaggerItem } from "../motions/StaggerReveal";

const TechnologySection = () => {
  return (
    <section className="relative overflow-hidden border-y border-white/[0.14] bg-black-01 p-[92px_clamp(20px,5vw,64px)]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(115deg,rgba(255,255,255,0.035)_0px,rgba(255,255,255,0.035)_1px,transparent_1px,transparent_64px)]" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-7.5 left-[clamp(0px,4vw,48px)] font-mono text-[200px] font-bold leading-none text-white/4">
        &lt;/&gt;
      </div>

      <div className="mx-auto max-w-7xl flex flex-col gap-6 md:gap-10">
        <div className="flex flex-col items-start gap-2 md:gap-4">
          <Reveal y={12}>
            <Badge label="tools & technologies" />
          </Reveal>
          <Reveal delay={0.1}>
            <SectionTitle title="The technology powering what’s next." />
          </Reveal>
        </div>

        <StaggerGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          <StaggerItem className="relative border border-white/[0.14] bg-[#141414] px-5.5 py-7">
            <span className="absolute right-5 top-4.5 font-mono text-[12px] text-gray-00">01</span>

            <div className="mb-5 flex h-11.5 w-11.5 items-center justify-center border border-white/[0.14] text-white-01">
              <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brain-circuit" data-d-component="icon">
                <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
                <path d="M9 13a4.5 4.5 0 0 0 3-4"></path>
                <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path>
                <path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path>
                <path d="M6 18a4 4 0 0 1-1.967-.516"></path>
                <path d="M12 13h4"></path>
                <path d="M12 18h6a2 2 0 0 1 2 2v1"></path>
                <path d="M12 8h8"></path>
                <path d="M16 8V5a2 2 0 0 1 2-2"></path>
                <circle cx="16" cy="13" r=".5"></circle>
                <circle cx="18" cy="3" r=".5"></circle>
                <circle cx="20" cy="21" r=".5"></circle>
                <circle cx="20" cy="8" r=".5"></circle>
              </svg>
            </div>

            <h3 className="mb-3.5 mt-0 font-display text-[16.5px] font-semibold text-white-01">AI &amp; Machine Learning</h3>

            <div className="flex flex-wrap gap-2">
              {["Python", "TensorFlow", "PyTorch", "OpenAI API", "LangChain", "n8n"].map((item) => (
                <span key={item} className="border border-white/[0.14] px-3 py-1.5 font-mono text-[12px] text-gray-02">
                  {item}
                </span>
              ))}
            </div>
          </StaggerItem>

          <StaggerItem className="relative border border-white/[0.14] bg-[#141414] px-5.5 py-7">
            <span className="absolute right-5 top-4.5 font-mono text-[12px] text-gray-00">02</span>

            <div className="mb-5 flex h-11.5 w-11.5 items-center justify-center border border-white/[0.14] text-white-01">
              <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" data-d-component="icon" style={{ color: "rgb(245, 245, 242)", fontSize: "20px" }}>
                <path
                  fillRule="evenodd"
                  d="M14.447 7.106a1 1 0 0 1 .447 1.341l-4 8a1 1 0 1 1-1.788-.894l4-8a1 1 0 0 1 1.341-.447ZM6.6 7.2a1 1 0 0 1 .2 1.4L4.25 12l2.55 3.4a1 1 0 0 1-1.6 1.2l-3-4a1 1 0 0 1 0-1.2l3-4a1 1 0 0 1 1.4-.2Zm10.8 0a1 1 0 0 1 1.4.2l3 4a1 1 0 0 1 0 1.2l-3 4a1 1 0 0 1-1.6-1.2l2.55-3.4-2.55-3.4a1 1 0 0 1 .2-1.4Z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>

            <h3 className="mb-3.5 mt-0 font-display text-[16.5px] font-semibold text-white-01">Custom Software Development</h3>

            <div className="flex flex-wrap gap-2">
              {["Typescript", "React.Js", "Next.Js", "Node.Js", "Python", "PostgreSQL", "Supabase", "Firebase"].map((item) => (
                <span key={item} className="border border-white/[0.14] px-3 py-1.5 font-mono text-[12px] text-gray-02">
                  {item}
                </span>
              ))}
            </div>
          </StaggerItem>

          <StaggerItem className="relative border border-white/[0.14] bg-[#141414] px-5.5 py-7">
            <span className="absolute right-5 top-4.5 font-mono text-[12px] text-gray-00">03</span>

            <div className="mb-5 flex h-11.5 w-11.5 items-center justify-center border border-white/[0.14] text-white-01">
              <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-monitor-smartphone" data-d-component="icon" style={{ color: "rgb(245, 245, 242)", fontSize: "20px" }}>
                <path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"></path>
                <path d="M10 19v-3.96 3.15"></path>
                <path d="M7 19h5"></path>
                <rect width="6" height="10" x="16" y="12" rx="2"></rect>
              </svg>
            </div>

            <h3 className="mb-3.5 mt-0 font-display text-[16.5px] font-semibold text-white-01">Web Development</h3>

            <div className="flex flex-wrap gap-2">
              {["Typescript", "React.Js", "Next.Js", "Javascript", "tailwindCSS", "Bootstrap", "Wordpress", "Framer", "Webflow", "Figma"].map((item) => (
                <span key={item} className="border border-white/[0.14] px-3 py-1.5 font-mono text-[12px] text-gray-02">
                  {item}
                </span>
              ))}
            </div>
          </StaggerItem>

          <StaggerItem className="relative border border-white/[0.14] bg-[#141414] px-5.5 py-7">
            <span className="absolute right-5 top-4.5 font-mono text-[12px] text-gray-00">04</span>

            <div className="mb-5 flex h-11.5 w-11.5 items-center justify-center border border-white/[0.14] text-white-01">
              <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-monitor-smartphone" data-d-component="icon" style={{ color: "rgb(245, 245, 242)", fontSize: "20px" }}>
                <path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"></path>
                <path d="M10 19v-3.96 3.15"></path>
                <path d="M7 19h5"></path>
                <rect width="6" height="10" x="16" y="12" rx="2"></rect>
              </svg>
            </div>

            <h3 className="mb-3.5 mt-0 font-display text-[16.5px] font-semibold text-white-01">AI Call Center Solutions</h3>

            <div className="flex flex-wrap gap-2">
              {["Verbosa.ai", "Voice AI", "Speech-to-Text", "Text-to-Speech", "LLM APIs", "CRM Integrations"].map((item) => (
                <span key={item} className="border border-white/[0.14] px-3 py-1.5 font-mono text-[12px] text-gray-02">
                  {item}
                </span>
              ))}
            </div>
          </StaggerItem>

          <StaggerItem className="relative border border-white/[0.14] bg-[#141414] px-5.5 py-7">
            <span className="absolute right-5 top-4.5 font-mono text-[12px] text-gray-00">05</span>

            <div className="mb-5 flex h-11.5 w-11.5 items-center justify-center border border-white/[0.14] text-white-01">
              <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cloud" data-d-component="icon" style={{ color: "rgb(245, 245, 242)", fontSize: "20px" }}>
                <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
              </svg>
            </div>

            <h3 className="mb-3.5 mt-0 font-display text-[16.5px] font-semibold text-white-01">Cloud & Webinar Solutions</h3>

            <div className="flex flex-wrap gap-2">
              {["AWS", "Cloudflare", "Vercel", "Docker", "Zoom", "WebRTC", "FreeNation"].map((item) => (
                <span key={item} className="border border-white/[0.14] px-3 py-1.5 font-mono text-[12px] text-gray-02">
                  {item}
                </span>
              ))}
            </div>
          </StaggerItem>

          <StaggerItem className="relative border border-white/[0.14] bg-[#141414] px-5.5 py-7">
            <span className="absolute right-5 top-4.5 font-mono text-[12px] text-gray-00">06</span>

            <div className="mb-5 flex h-11.5 w-11.5 items-center justify-center border border-white/[0.14] text-white-01">
              <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" data-d-component="icon" style={{ color: "rgb(245, 245, 242)", fontSize: "20px" }}>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.5717 6.88319C18.418 5.78937 17.4066 5.02728 16.3128 5.181L15.687 5.26895L14.9751 7.38866L18.5717 6.88319ZM12.7608 7.69986L13.4727 5.58015L10.2406 6.03441L9.52863 8.15411L12.7608 7.69986ZM7.31432 8.46531L8.02624 6.34561L6.41014 6.57273C5.31632 6.72646 4.55422 7.7378 4.70795 8.83162L7.31432 8.46531ZM16.0345 3.20047C18.2221 2.89301 20.2448 4.41721 20.5522 6.60485L20.6914 7.59512C20.7683 8.14203 20.3872 8.64769 19.8403 8.72456L5.42864 10.75H20.0001C20.5524 10.75 21.0001 11.1977 21.0001 11.75V15.2413C21.0001 16.0463 21.0001 16.7106 20.9559 17.2518C20.91 17.8139 20.8114 18.3306 20.5641 18.8159C20.1806 19.5686 19.5687 20.1805 18.8161 20.564C18.3307 20.8113 17.814 20.9099 17.2519 20.9558C16.7108 21 16.0464 21 15.2414 21H8.75879C7.95383 21 7.28948 21 6.74829 20.9558C6.18619 20.9099 5.66949 20.8113 5.18415 20.564C4.4315 20.1805 3.81958 19.5686 3.43609 18.8159C3.1888 18.3306 3.09023 17.8139 3.04431 17.2518C3.00009 16.7106 3.0001 16.0463 3.00011 15.2413L3.00011 11.0503L2.72741 9.10996C2.41996 6.92232 3.94415 4.89965 6.13179 4.5922L16.0345 3.20047ZM5.00011 12.75V15.2C5.00011 16.0566 5.00089 16.6389 5.03767 17.0889C5.07349 17.5274 5.13841 17.7516 5.2181 17.908C5.40985 18.2843 5.71581 18.5903 6.09213 18.782C6.24853 18.8617 6.47274 18.9266 6.91115 18.9624C7.36124 18.9992 7.94353 19 8.80011 19H15.2001C16.0567 19 16.639 18.9992 17.0891 18.9624C17.5275 18.9266 17.7517 18.8617 17.9081 18.782C18.2844 18.5903 18.5904 18.2843 18.7821 17.908C18.8618 17.7516 18.9267 17.5274 18.9626 17.0889C18.9993 16.6389 19.0001 16.0566 19.0001 15.2V12.75H5.00011Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>

            <h3 className="mb-3.5 mt-0 font-display text-[16.5px] font-semibold text-white-01">Video & Media Production</h3>

            <div className="flex flex-wrap gap-2">
              {["Premier Pro", "After Effects", "DaVinchi Resolve", "CapCut", "PhotoShop", "Figma"].map((item) => (
                <span key={item} className="border border-white/[0.14] px-3 py-1.5 font-mono text-[12px] text-gray-02">
                  {item}
                </span>
              ))}
            </div>
          </StaggerItem>

          <StaggerItem className="relative border border-white/[0.14] bg-[#141414] px-5.5 py-7">
            <span className="absolute right-5 top-4.5 font-mono text-[12px] text-gray-00">07</span>

            <div className="mb-5 flex h-11.5 w-11.5 items-center justify-center border border-white/[0.14] text-white-01">
              <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-headset" data-d-component="icon" style={{ color: "rgb(245, 245, 242)", fontSize: "20px" }}>
                <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"></path>
                <path d="M21 16v2a4 4 0 0 1-4 4h-5"></path>
              </svg>
            </div>

            <h3 className="mb-3.5 mt-0 font-display text-[16.5px] font-semibold text-white-01">BPO & Business Support</h3>

            <div className="flex flex-wrap gap-2">
              {["CRM Platforms", "Google Workspace", "Microsoft 365", "HubSpot", "Make", "n8n"].map((item) => (
                <span key={item} className="border border-white/[0.14] px-3 py-1.5 font-mono text-[12px] text-gray-02">
                  {item}
                </span>
              ))}
            </div>
          </StaggerItem>
        </StaggerGroup>
      </div>
    </section>
  );
};

export default TechnologySection;
