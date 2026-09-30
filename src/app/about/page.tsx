import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";

export const metadata: Metadata = {
  title: "About | Intellix",
  description: "Tell us about your project. We reply to every message personally, usually within one business day.",
};

const page = () => {
  return (
    <>
      <AboutHero />
    </>
  );
};

export default page;
