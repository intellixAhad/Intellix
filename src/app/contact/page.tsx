import type { Metadata } from "next";
import Link from "next/link";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactFaq, { type FaqItem } from "@/components/contact/ContactFaq";
import Reveal from "@/components/reveal";
import Orb from "@/components/Orb";

export const metadata: Metadata = {
  title: "Contact | Intellix",
  description: "Tell us about your project. We reply to every message personally, usually within one business day.",
};

const FAQS: FaqItem[] = [
  {
    q: "How soon will I hear back?",
    a: "Within one business day, usually sooner. If it's urgent, mention that in your message.",
  },
  {
    q: "Do you sign NDAs before scoping a project?",
    a: "Yes — just let us know in your message and we'll send one over before the first detailed call.",
  },
  {
    q: "I'm applying for a job — is this the right form?",
    a: (
      <>
        Yes — select &quot;Something else&quot; and mention the role you&apos;re interested in, or check our{" "}
        <Link href="/careers" className="text-white underline">
          Careers page
        </Link>{" "}
        first.
      </>
    ),
  },
];

const page = () => {
  return (
    <>
      <ContactHero />

      <section className="px-[clamp(20px,5vw,64px)] py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-7 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="min-w-0">
            <ContactForm />
          </Reveal>
          <ContactInfo />
        </div>
      </section>

      <section className="px-[clamp(20px,5vw,64px)] pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl flex gap-10 flex-col justify-between md:flex-row">
          <Reveal className="w-full flex flex-col items-center md:items-start">
            <h2 className="mb-3 max-w-2xl font-playfair text-[clamp(2rem,5vw,3rem)] font-bold leading-[1.05] text-white-01 italic">Before you reach out</h2>
            <p className="mb-5 text-base md:text-[20px] leading-[1.7] text-gray-02 max-w-115 font-light tracking-wide text-start">A few quick answers. See the full FAQ on our homepage for more.</p>
            <Orb width={320} height={320} />
          </Reveal>
          <Reveal delay={0.1} className="w-full">
            <ContactFaq items={FAQS} />
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default page;
