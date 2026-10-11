import { type FaqItem } from "@/components/contact/ContactFaq";

export const servicesData = [
  {
    title: "AI & Machine Learning",
    description: "Turn complex challenges into intelligent solutions with AI agents, workflow automation, predictive models, and machine learning systems built around your business needs.",
    icon: (
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
    ),
  },
  {
    title: "Custom Software Development",
    description: "Bring your ideas to life with scalable software, tailored business applications, and powerful digital products designed to solve real problems and grow with you.",
    icon: (
      <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" data-d-component="icon" style={{ color: "rgb(245, 245, 242)", fontSize: "20px" }}>
        <path
          fillRule="evenodd"
          d="M14.447 7.106a1 1 0 0 1 .447 1.341l-4 8a1 1 0 1 1-1.788-.894l4-8a1 1 0 0 1 1.341-.447ZM6.6 7.2a1 1 0 0 1 .2 1.4L4.25 12l2.55 3.4a1 1 0 0 1-1.6 1.2l-3-4a1 1 0 0 1 0-1.2l3-4a1 1 0 0 1 1.4-.2Zm10.8 0a1 1 0 0 1 1.4.2l3 4a1 1 0 0 1 0 1.2l-3 4a1 1 0 0 1-1.6-1.2l2.55-3.4-2.55-3.4a1 1 0 0 1 .2-1.4Z"
          clipRule="evenodd"
        ></path>
      </svg>
    ),
  },
  {
    title: "Web Development",
    description: "Create fast, responsive websites and web applications that deliver seamless user experiences, strengthen your brand, and turn visitors into customers.",
    icon: (
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-monitor-smartphone"
        data-d-component="icon"
        style={{ color: "rgb(245, 245, 242)", fontSize: "20px" }}
      >
        <path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"></path>
        <path d="M10 19v-3.96 3.15"></path>
        <path d="M7 19h5"></path>
        <rect width="6" height="10" x="16" y="12" rx="2"></rect>
      </svg>
    ),
  },
  {
    title: "AI Call Center Solutions",
    description: "Deliver smarter customer conversations with AI voice agents that handle inbound and outbound calls, answer questions, qualify leads, and support customers around the clock.",
    icon: (
      <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" data-d-component="icon" style={{ color: "rgb(245, 245, 242)", fontSize: "20px" }}>
        <path
          d="M2 5.57143C2 3.59898 3.59898 2 5.57143 2H8.625C9.0287 2 9.39281 2.24274 9.54808 2.61538L11.4231 7.11538C11.5744 7.47863 11.4987 7.89686 11.2295 8.18394L9.82741 9.67954C10.9044 11.7563 12.2732 13.2047 14.3016 14.2842L15.7929 12.7929C16.0794 12.5064 16.5106 12.4211 16.8846 12.5769L21.3846 14.4519C21.7573 14.6072 22 14.9713 22 15.375V18.4286C22 20.401 20.401 22 18.4286 22C9.35532 22 2 14.6447 2 5.57143ZM5.57143 4C4.70355 4 4 4.70355 4 5.57143C4 13.5401 10.4599 20 18.4286 20C19.2964 20 20 19.2964 20 18.4286V16.0417L16.7336 14.6807L15.2071 16.2071C14.9098 16.5044 14.4582 16.584 14.0771 16.4062C11.0315 14.9849 9.12076 12.9271 7.71882 9.92289C7.54598 9.55251 7.61592 9.11423 7.89546 8.81606L9.32824 7.28777L7.95833 4H5.57143ZM13.0248 3.00173C13.147 2.46314 13.6827 2.12559 14.2213 2.24781C17.9615 3.09651 20.9035 6.03846 21.7522 9.77871C21.8744 10.3173 21.5369 10.853 20.9983 10.9752C20.4597 11.0974 19.924 10.7599 19.8018 10.2213C19.1235 7.23203 16.768 4.87652 13.7787 4.19822C13.2401 4.07601 12.9026 3.54032 13.0248 3.00173ZM13.0836 7.01567C13.3048 6.50958 13.8943 6.27857 14.4004 6.49969C15.7847 7.10451 16.8955 8.21534 17.5003 9.59963C17.7214 10.1057 17.4904 10.6952 16.9843 10.9164C16.4782 11.1375 15.8887 10.9065 15.6676 10.4004C15.2645 9.47777 14.5222 8.73549 13.5996 8.3324C13.0935 8.11128 12.8625 7.52176 13.0836 7.01567Z"
          fill="currentColor"
        ></path>
      </svg>
    ),
  },
  {
    title: "Cloud & Webinar Solutions",
    description: "Power your digital operations with reliable cloud infrastructure, deployment solutions, and seamless webinar experiences for collaboration, training, and audience engagement.",
    icon: (
      <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cloud" data-d-component="icon" style={{ color: "rgb(245, 245, 242)", fontSize: "20px" }}>
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
      </svg>
    ),
  },

  {
    title: "Video & Media Production",
    description: "Make your message stand out with engaging promotional videos, social media content, product explainers, and polished edits that capture attention.",
    icon: (
      <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" data-d-component="icon" style={{ color: "rgb(245, 245, 242)", fontSize: "20px" }}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.5717 6.88319C18.418 5.78937 17.4066 5.02728 16.3128 5.181L15.687 5.26895L14.9751 7.38866L18.5717 6.88319ZM12.7608 7.69986L13.4727 5.58015L10.2406 6.03441L9.52863 8.15411L12.7608 7.69986ZM7.31432 8.46531L8.02624 6.34561L6.41014 6.57273C5.31632 6.72646 4.55422 7.7378 4.70795 8.83162L7.31432 8.46531ZM16.0345 3.20047C18.2221 2.89301 20.2448 4.41721 20.5522 6.60485L20.6914 7.59512C20.7683 8.14203 20.3872 8.64769 19.8403 8.72456L5.42864 10.75H20.0001C20.5524 10.75 21.0001 11.1977 21.0001 11.75V15.2413C21.0001 16.0463 21.0001 16.7106 20.9559 17.2518C20.91 17.8139 20.8114 18.3306 20.5641 18.8159C20.1806 19.5686 19.5687 20.1805 18.8161 20.564C18.3307 20.8113 17.814 20.9099 17.2519 20.9558C16.7108 21 16.0464 21 15.2414 21H8.75879C7.95383 21 7.28948 21 6.74829 20.9558C6.18619 20.9099 5.66949 20.8113 5.18415 20.564C4.4315 20.1805 3.81958 19.5686 3.43609 18.8159C3.1888 18.3306 3.09023 17.8139 3.04431 17.2518C3.00009 16.7106 3.0001 16.0463 3.00011 15.2413L3.00011 11.0503L2.72741 9.10996C2.41996 6.92232 3.94415 4.89965 6.13179 4.5922L16.0345 3.20047ZM5.00011 12.75V15.2C5.00011 16.0566 5.00089 16.6389 5.03767 17.0889C5.07349 17.5274 5.13841 17.7516 5.2181 17.908C5.40985 18.2843 5.71581 18.5903 6.09213 18.782C6.24853 18.8617 6.47274 18.9266 6.91115 18.9624C7.36124 18.9992 7.94353 19 8.80011 19H15.2001C16.0567 19 16.639 18.9992 17.0891 18.9624C17.5275 18.9266 17.7517 18.8617 17.9081 18.782C18.2844 18.5903 18.5904 18.2843 18.7821 17.908C18.8618 17.7516 18.9267 17.5274 18.9626 17.0889C18.9993 16.6389 19.0001 16.0566 19.0001 15.2V12.75H5.00011Z"
          fill="currentColor"
        ></path>
      </svg>
    ),
  },

  {
    title: "BPO & Business Support",
    description: "Streamline daily operations with dependable back-office support, data processing, customer service, and dedicated teams that give you more room to focus on growth.",
    icon: (
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-headset"
        data-d-component="icon"
        style={{ color: "rgb(245, 245, 242)", fontSize: "20px" }}
      >
        <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"></path>
        <path d="M21 16v2a4 4 0 0 1-4 4h-5"></path>
      </svg>
    ),
  },
];

export const IndustryData = [
  {
    title: "Startups",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2c2 2 3 5 3 8 0 2-.5 4-1 5l-2 3-2-3c-.5-1-1-3-1-5 0-3 1-6 3-8z"></path>
        <circle cx="12" cy="9" r="1.4"></circle>
        <path d="M8 16l-3 3 1 3 3-1"></path>
        <path d="M16 16l3 3-1 3-3-1"></path>
      </svg>
    ),
  },
  {
    title: "E-commerce",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 8h12l-1 12H7L6 8z"></path>
        <path d="M9 8V6a3 3 0 0 1 6 0v2"></path>
      </svg>
    ),
  },
  {
    title: "Real Estate",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 22h18"></path>
        <path d="M6 22V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v18"></path>
        <line x1="9" y1="9" x2="9.01" y2="9"></line>
        <line x1="14" y1="9" x2="14.01" y2="9"></line>
        <line x1="9" y1="13" x2="9.01" y2="13"></line>
        <line x1="14" y1="13" x2="14.01" y2="13"></line>
        <line x1="9" y1="17" x2="9.01" y2="17"></line>
        <line x1="14" y1="17" x2="14.01" y2="17"></line>
      </svg>
    ),
  },
  {
    title: "Media & Entertainment",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 8l1-3 4 1-1 3z"></path>
        <path d="M8 6l1-3 4 1-1 3z"></path>
        <rect x="3" y="8" width="18" height="12" rx="1"></rect>
      </svg>
    ),
  },
  {
    title: "Healthcare",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9"></circle>
        <line x1="12" y1="8" x2="12" y2="16"></line>
        <line x1="8" y1="12" x2="16" y2="12"></line>
      </svg>
    ),
  },
  {
    title: "Finance",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="12" width="4" height="9"></rect>
        <rect x="10" y="6" width="4" height="15"></rect>
        <rect x="17" y="9" width="4" height="12"></rect>
      </svg>
    ),
  },
];

export const FAQS: FaqItem[] = [
  {
    q: "What services does Intellix provide?",
    a: "We offer web development, graphic design, video editing, and BPO (back-office) services, along with our own in-house products like Verbosa.ai.",
  },
  {
    q: "Do you work with startups as well as established businesses?",
    a: "Yes. We work with early-stage startups, growing businesses, and established companies — tailoring our process and team size to fit your budget and timeline.",
  },
  {
    q: "What does your project process look like?",
    a: "We follow four stages: Discover, Design, Build, and Launch &amp; Support — with regular check-ins so you always know where your project stands.",
  },
  {
    q: "Do you work with clients outside Bangladesh?",
    a: "Yes. We're a remote-first team based in Dhaka, and we regularly work with clients around the world over video calls, chat, and shared project boards.",
  },
  {
    q: "How do I get a quote for my project?",
    a: "Fill out the contact form below with a bit of detail about your project, and our team will get back to you with next steps and a proposal.",
  },
];

export const IntellixDeteails = [
  {
    label: "EMAIL",
    value: "hello@intellixsolutions.co",
    icon: (
      <>
        <path d="M22 6c0 1.1-.9 2-2 2H4a2 2 0 0 1-2-2" />
        <path d="M2 6l10 7L22 6" />
        <rect x={2} y={4} width={20} height={16} rx={0} />
      </>
    ),
  },
  {
    label: "PHONE",
    value: "01973336001",
    icon: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    ),
  },
  {
    label: "LOCATION",
    value: "Dhaka, Bangladesh",
    icon: (
      <>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx={12} cy={10} r={3} />
      </>
    ),
  },
  {
    label: "RESPONSE TIME",
    value: "Within 1 business day",
    icon: (
      <>
        <circle cx={12} cy={12} r={10} />
        <polyline points="12 6 12 12 16 14" />
      </>
    ),
  },
];
