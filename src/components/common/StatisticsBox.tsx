import React from "react";
import { StaggerGroup, StaggerItem } from "../motions/StaggerReveal";
import RollingNumber from "./RollingNumber";

type RollingNumberData = {
    N1: number;
    T1: string;
    P1?: string;
    N2: number;
    T2: string;
    P2?: string;
    N3: number;
    T3: string;
    P3?: string;
    N4: number;
    T4: string;
    P4?: string;
}

const StatisticsBox = ({N1, T1, P1, N2, T2, P2, N3, T3, P3, N4, T4, P4}: RollingNumberData) => {
  return (
    <section className="border-t border-b border-white/14 py-17.5 px-[clamp(20px,5vw,64px)] z-1 bg-white/3 backdrop-blur">
      <StaggerGroup className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8">
          <StaggerItem>
            <RollingNumber number={N1} suffix={P1} />
            <div className="text-[14px] text-gray-02 mt-2 tracking-[0.02em] text-center font-jetbrain">{T1}</div>
          </StaggerItem>
          <StaggerItem>
            <RollingNumber number={N2} suffix={P2} />
            <div className="text-[14px] text-gray-02 mt-2 tracking-[0.02em] text-center font-jetbrain">{T2}</div>
          </StaggerItem>
          <StaggerItem>
            <RollingNumber number={N3} suffix={P3} />
            <div className="text-[14px] text-gray-02 mt-2 tracking-[0.02em] text-center font-jetbrain">{T3}</div>
          </StaggerItem>
          <StaggerItem>
            <RollingNumber number={N4} suffix={P4} />
            <div className="text-[14px] text-gray-02 mt-2 tracking-[0.02em] text-center font-jetbrain">{T4}</div>
          </StaggerItem>
      </StaggerGroup>
    </section>
  );
};

export default StatisticsBox;
