import type { Metadata } from "next";
import Badge from "@/components/Badge";
import Link from "next/link";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactFaq, { type FaqItem } from "@/components/contact/ContactFaq";
import Reveal from "@/components/contact/reveal";

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
        <div className="mx-auto grid max-w-360 grid-cols-1 items-start gap-7 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="min-w-0">
            <ContactForm />
          </Reveal>
          <ContactInfo />
        </div>
      </section>

      <section className="px-[clamp(20px,5vw,64px)] pb-16 md:pb-24">
        <div className="mx-auto max-w-360">
          <Reveal>
            <h2 className="mb-2 font-fraunces text-2xl font-bold text-white-01 sm:text-[26px]">Before you reach out</h2>
            <p className="mb-5 text-sm text-gray-00">A few quick answers. See the full FAQ on our homepage for more.</p>
          </Reveal>
          <Reveal delay={0.1}>
            <ContactFaq items={FAQS} />
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default page;
