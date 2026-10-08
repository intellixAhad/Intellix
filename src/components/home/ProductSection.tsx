import GlassBox from "../common/GlassBox";
import Reveal from "../motions/reveal";
import Badge from "../common/Badge";
import SectionTitle from "../common/SectionTitle";
import SectionDescription from "../common/SectionDescription";
import Button from "../common/Button";
import ProductAnimation from "./ProductAnimation";

const ProductSection = () => {
  return (
    <section id="products" className="p-[46px_clamp(20px,5vw,64px)_46px]">
      <GlassBox className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 md:gap-10">
        <div className="flex flex-col items-start gap-2 md:gap-4">
          <Reveal y={12}>
            <Badge label="our product" />
          </Reveal>
          <Reveal delay={0.1}>
            <SectionTitle title="Meet Verbosa.ai" />
          </Reveal>
          <Reveal delay={0.2}>
            <SectionDescription description="Verbosa.ai is our in-house AI sales automation platform — voice calls, chat, email, and lead generation working together as one AI sales team. It's built and maintained by the same team behind Intellix." />
          </Reveal>
          <Reveal delay={0.3} className="flex gap-5 flex-wrap">
            <span className="text-[12px] text-gray-01">AI-Powered</span>
            <span className="text-[12px] text-gray-01">Built by Intellix</span>
            <span className="text-[12px] text-gray-01">Made in Bangladesh</span>
          </Reveal>
          <Reveal delay={0.4} className="flex flex-wrap gap-3.5">
            <Button title="Visit Verbosa.ai" link="https://verbosa.ai/" variant="primary" />
            <Button title="Full Product Page" link="/products" variant="secondary" />
          </Reveal>
        </div>
        <ProductAnimation />
      </GlassBox>
    </section>
  );
};

export default ProductSection;
