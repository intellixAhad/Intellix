import StatisticsBox from "@/components/common/StatisticsBox";
import V_Section_1 from "@/components/products/V_Section_1";
import V_Section_3 from "@/components/products/V_Section_3";
import V_Section_4 from "@/components/products/V_Section_4";
import V_Section_5 from "@/components/products/V_Section_5";
import V_Section_6 from "@/components/products/V_Section_6";
import ProductHero from "@/components/products/ProductHero";
import F_Section_1 from "@/components/products/F_Section_1";
import F_Section_3 from "@/components/products/F_Section_3";
import F_Section_4 from "@/components/products/F_Section_4";
import F_Section_5 from "@/components/products/F_Section_5";
import F_Section_6 from "@/components/products/F_Section_6";

const page = () => {
  return (
    <>
      <ProductHero />
      <V_Section_1 />
      <StatisticsBox N1={500} P1="ms" T1="AI Response Time" N2={30} P2="+" T2="Languages Supported" N3={48} P3="+" T3="Lead data sources" N4={3} P4="" T4="Voice + chat + Email" />
      <V_Section_3 />
      <V_Section_4 />
      <V_Section_5 />
      <V_Section_6 />
      <F_Section_1 />
      <StatisticsBox N1={256} P1="-AES" T1="End-to-end encryption" N2={5} P2="" T2="Classification levels" N3={4} P3="" T3="Levels of chain of command" N4={60} P4="s" T4="Sweep that deletes expired messages" />
      <F_Section_3 />
      <F_Section_4 />
      <F_Section_5 />
      <F_Section_6 />
    </>
  );
};

export default page;
