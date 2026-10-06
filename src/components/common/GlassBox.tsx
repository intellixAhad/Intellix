import type { ReactNode } from "react";

type childrenProps = {
  children: ReactNode;
  className?: string;
}

const GlassBox = ({ children, className }: childrenProps) => {
  return (
    <div className={`max-w-7xl mx-auto relative overflow-hidden border border-white-01/14 bg-white-01/5 p-[80px_clamp(32px,5vw,56px)] ${className}`}>
      <div aria-hidden="true" className="pointer-events-none absolute -top-15 -right-15 h-80 w-[320px] rounded-full bg-[radial-gradient(circle_at_35%_35%,rgba(255,255,255,0.12),rgba(255,255,255,0)_65%)] blur-[50px]" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-17.5 -left-12.5 h-85 w-85 rounded-full bg-[radial-gradient(circle_at_40%_40%,rgba(255,255,255,0.08),rgba(255,255,255,0)_65%)] blur-[50px]" />
      {children}
    </div>
  );
};

export default GlassBox;
