"use client";

import { useRef, type ReactNode, type RefObject } from "react";
import { useInView } from "framer-motion";

type VisualProps = {
  tint?: string;
  lineColor?: string;
  className?: string;
};

const DEFAULT_TINT = "#D8E6E9";
const DEFAULT_LINE = "rgba(198,216,220,0.4)";

const visualStyles = `
.ix-service-visual{position:relative;width:100%;height:100%;min-height:180px;overflow:hidden}
.ix-service-visual svg{display:block;width:100%;height:100%;overflow:visible}
.ix-service-visual .ln{stroke-dasharray:300;stroke-dashoffset:300}
.ix-service-visual .node{opacity:0;transform-box:fill-box;transform-origin:center}
.ix-service-visual .detail{opacity:0;transform-box:fill-box;transform-origin:center}
.ix-service-visual .flow{opacity:0}
.ix-service-visual[data-visible="true"] .ln{animation:ixvDraw .88s cubic-bezier(.3,.8,.3,1) forwards}
.ix-service-visual[data-visible="true"] .node{animation:ixvPop .46s cubic-bezier(.2,.85,.3,1) forwards}
.ix-service-visual[data-visible="true"] .detail{animation:ixvReveal .48s cubic-bezier(.2,.85,.3,1) forwards}
.ix-service-visual[data-visible="true"] .flow{animation:ixvPulse 2.2s ease-in-out infinite}
@keyframes ixvDraw{to{stroke-dashoffset:0}}
@keyframes ixvPop{from{opacity:0;transform:translateY(5px) scale(.92)}to{opacity:1;transform:translateY(0) scale(1)}}
@keyframes ixvReveal{from{opacity:0;transform:translateX(-5px)}to{opacity:1;transform:translateX(0)}}
@keyframes ixvPulse{0%,100%{opacity:.35}50%{opacity:1}}
@media(prefers-reduced-motion:reduce){
 .ix-service-visual .ln{stroke-dashoffset:0}
 .ix-service-visual .node,.ix-service-visual .detail{opacity:1}
 .ix-service-visual .flow{opacity:.7}
 .ix-service-visual[data-visible="true"] .ln,.ix-service-visual[data-visible="true"] .node,.ix-service-visual[data-visible="true"] .detail,.ix-service-visual[data-visible="true"] .flow{animation:none}
}
`;

function useVisualInView() {
  const ref = useRef<HTMLDivElement>(null);
  const active = useInView(ref, { amount: 0.25, once: true });
  return { ref, active };
}

function VisualFrame({
  children,
  refEl,
  active,
  className,
}: {
  children: ReactNode;
  refEl: RefObject<HTMLDivElement | null>;
  active: boolean;
  className?: string;
}) {
  return (
    <div
      ref={refEl}
      className={`ix-service-visual${className ? ` ${className}` : ""}`}
      data-visible={active ? "true" : "false"}
      aria-hidden="true"
    >
      <style>{visualStyles}</style>
      {children}
    </div>
  );
}

function useColors(props: VisualProps) {
  return {
    tint: props.tint ?? DEFAULT_TINT,
    lineColor: props.lineColor ?? DEFAULT_LINE,
  };
}

export function AiMlVisual(props: VisualProps) {
  const { ref, active } = useVisualInView();
  const { tint, lineColor } = useColors(props);
  return (
    <VisualFrame refEl={ref} active={active} className={props.className}>
      <svg viewBox="0 0 240 180" fill="none">
        <g stroke={lineColor} strokeWidth="1.35" strokeLinecap="round">
          <path className="ln" d="M38 42 91 30 M38 42 91 68 M38 42 91 106 M38 42 91 144 M38 90 91 30 M38 90 91 68 M38 90 91 106 M38 90 91 144 M38 138 91 30 M38 138 91 68 M38 138 91 106 M38 138 91 144" />
          <path className="ln" style={{ animationDelay: ".18s" }} d="M103 30 158 48 M103 68 158 48 M103 106 158 92 M103 144 158 136 M103 30 158 92 M103 68 158 136 M103 106 158 48 M103 144 158 92 M170 48 202 64 M170 92 202 92 M170 136 202 120" />
          <path className="ln" style={{ animationDelay: ".36s" }} d="M202 64 V120" strokeDasharray="3 5" />
        </g>
        <g fill={tint}>
          {[[32,42],[32,90],[32,138]].map(([cx,cy],i)=><circle key={`a${i}`} className="node" style={{animationDelay:`${.12+i*.09}s`}} cx={cx} cy={cy} r="6" fillOpacity=".48"/>)}
          {[[97,30],[97,68],[97,106],[97,144]].map(([cx,cy],i)=><circle key={`b${i}`} className="node" style={{animationDelay:`${.3+i*.08}s`}} cx={cx} cy={cy} r="5.5" fillOpacity=".65"/>)}
          {[[164,48],[164,92],[164,136]].map(([cx,cy],i)=><circle key={`c${i}`} className="node" style={{animationDelay:`${.58+i*.1}s`}} cx={cx} cy={cy} r="7" fillOpacity=".82"/>)}
          <circle className="node" style={{animationDelay: ".86s"}} cx="205" cy="92" r="12" fillOpacity=".95"/>
          <circle className="flow" cx="205" cy="92" r="17" fill="none" stroke={tint} strokeWidth="1.2" strokeOpacity=".7" />
        </g>
      </svg>
    </VisualFrame>
  );
}

export function SoftwareVisual(props: VisualProps) {
  const { ref, active } = useVisualInView();
  const { tint, lineColor } = useColors(props);
  return (
    <VisualFrame refEl={ref} active={active} className={props.className}>
      <svg viewBox="0 0 240 180" fill="none">
        <rect className="node" style={{animationDelay: ".05s"}} x="16" y="18" width="208" height="144" rx="10" fill={tint} fillOpacity=".035" stroke={lineColor} strokeWidth="1.2"/>
        <path className="ln" d="M16 44H224" stroke={lineColor} strokeWidth="1.2"/>
        <g className="detail" style={{animationDelay: ".12s"}} fill={tint} fillOpacity=".58">
          <circle cx="30" cy="31" r="3"/><circle cx="41" cy="31" r="3" fillOpacity=".36"/><circle cx="52" cy="31" r="3" fillOpacity=".24"/>
        </g>
        <g stroke={tint} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <path className="ln" style={{animationDelay: ".18s"}} d="M48 68 37 80 48 92"/>
          <path className="ln" style={{animationDelay: ".24s"}} d="M67 68 78 80 67 92"/>
          <path className="ln" style={{animationDelay: ".3s"}} d="M93 66 84 94"/>
        </g>
        <g fill={tint}>
          <rect className="detail" style={{animationDelay: ".32s"}} x="116" y="61" width="61" height="5" rx="2.5" fillOpacity=".66"/>
          <rect className="detail" style={{animationDelay: ".39s"}} x="116" y="73" width="81" height="4" rx="2" fillOpacity=".3"/>
          <rect className="detail" style={{animationDelay: ".46s"}} x="116" y="84" width="69" height="4" rx="2" fillOpacity=".3"/>
          <rect className="detail" style={{animationDelay: ".53s"}} x="116" y="95" width="46" height="4" rx="2" fillOpacity=".3"/>
        </g>
        <path className="ln" style={{animationDelay: ".42s"}} d="M35 119H205" stroke={lineColor} strokeWidth="1.2"/>
        <g fill={tint}>
          <rect className="node" style={{animationDelay: ".52s"}} x="35" y="130" width="48" height="17" rx="5" fillOpacity=".48"/>
          <rect className="node" style={{animationDelay: ".62s"}} x="96" y="130" width="48" height="17" rx="5" fillOpacity=".3"/>
          <rect className="node" style={{animationDelay: ".72s"}} x="157" y="130" width="48" height="17" rx="5" fillOpacity=".65"/>
        </g>
        <path className="ln" style={{animationDelay: ".68s"}} d="M83 138H96 M144 138H157" stroke={lineColor} strokeWidth="1.3"/>
      </svg>
    </VisualFrame>
  );
}

export function WebDevelopmentVisual(props: VisualProps) {
  const { ref, active } = useVisualInView();
  const { tint, lineColor } = useColors(props);
  return (
    <VisualFrame refEl={ref} active={active} className={props.className}>
      <svg viewBox="0 0 240 180" fill="none">
        <rect className="node" style={{animationDelay: ".04s"}} x="16" y="21" width="158" height="126" rx="8" fill={tint} fillOpacity=".035" stroke={lineColor} strokeWidth="1.2"/>
        <path className="ln" d="M16 42H174" stroke={lineColor} strokeWidth="1.2"/>
        <g fill={tint} fillOpacity=".55">
          <circle className="detail" style={{animationDelay: ".1s"}} cx="28" cy="31" r="2.6"/><circle className="detail" style={{animationDelay: ".16s"}} cx="37" cy="31" r="2.6"/><circle className="detail" style={{animationDelay: ".22s"}} cx="46" cy="31" r="2.6"/>
        </g>
        <rect className="node" style={{animationDelay: ".2s"}} x="28" y="51" width="134" height="37" rx="5" fill={tint} fillOpacity=".16"/>
        <path className="ln" style={{animationDelay: ".24s"}} d="M39 65H90 M39 73H76" stroke={tint} strokeWidth="2" strokeLinecap="round"/>
        <rect className="node" style={{animationDelay: ".36s"}} x="28" y="98" width="39" height="35" rx="4" fill={tint} fillOpacity=".22"/>
        <rect className="node" style={{animationDelay: ".44s"}} x="74" y="98" width="39" height="35" rx="4" fill={tint} fillOpacity=".12"/>
        <rect className="node" style={{animationDelay: ".52s"}} x="120" y="98" width="42" height="35" rx="4" fill={tint} fillOpacity=".28"/>
        <rect className="node" style={{animationDelay: ".34s"}} x="184" y="62" width="39" height="77" rx="7" fill={tint} fillOpacity=".045" stroke={lineColor} strokeWidth="1.2"/>
        <path className="ln" style={{animationDelay: ".43s"}} d="M191 73H216" stroke={lineColor} strokeWidth="1.1"/>
        <rect className="detail" style={{animationDelay: ".5s"}} x="191" y="80" width="25" height="21" rx="3" fill={tint} fillOpacity=".42"/>
        <rect className="detail" style={{animationDelay: ".58s"}} x="191" y="107" width="20" height="3" rx="1.5" fill={tint} fillOpacity=".55"/>
        <rect className="detail" style={{animationDelay: ".64s"}} x="191" y="114" width="25" height="3" rx="1.5" fill={tint} fillOpacity=".3"/>
        <circle className="node" style={{animationDelay: ".72s"}} cx="203.5" cy="129" r="2.2" fill={tint} fillOpacity=".75"/>
        <path className="ln" style={{animationDelay: ".62s"}} d="M174 83H180V100H184" stroke={lineColor} strokeWidth="1.2"/>
      </svg>
    </VisualFrame>
  );
}

export function VoiceAiVisual(props: VisualProps) {
  const { ref, active } = useVisualInView();
  const { tint, lineColor } = useColors(props);
  return (
    <VisualFrame refEl={ref} active={active} className={props.className}>
      <svg viewBox="0 0 240 180" fill="none">
        <g stroke={lineColor} strokeWidth="1.4" strokeLinecap="round">
          <path className="ln" d="M52 90H75"/>
          <path className="ln" style={{animationDelay: ".22s"}} d="M137 90C158 90 153 39 177 39M137 90H177M137 90C158 90 153 141 177 141"/>
        </g>
        <rect className="node" style={{animationDelay: ".05s"}} x="14" y="70" width="38" height="40" rx="10" fill={tint} fillOpacity=".16" stroke={lineColor} strokeWidth="1.1"/>
        <path className="detail" style={{animationDelay: ".12s"}} d="M27 82a7 7 0 0 1 12 5v6a5 5 0 0 1-10 0v-5" stroke={tint} strokeWidth="1.8" strokeLinecap="round"/>
        <rect className="node" style={{animationDelay: ".22s"}} x="75" y="55" width="62" height="70" rx="13" fill={tint} fillOpacity=".87"/>
        <g stroke="#0A0A0A" strokeOpacity=".65" strokeWidth="2" strokeLinecap="round">
          <path className="detail" style={{animationDelay: ".32s"}} d="M86 90V85M93 98V78M100 104V72M107 96V80M114 100V76M121 90V86"/>
        </g>
        <g fill={tint}>
          <rect className="node" style={{animationDelay: ".5s"}} x="177" y="28" width="49" height="22" rx="7" fillOpacity=".75"/>
          <rect className="node" style={{animationDelay: ".62s"}} x="177" y="79" width="49" height="22" rx="7" fillOpacity=".6"/>
          <rect className="node" style={{animationDelay: ".74s"}} x="177" y="130" width="49" height="22" rx="7" fillOpacity=".45"/>
        </g>
        <g stroke={lineColor} strokeWidth="1.1" strokeLinecap="round">
          <path className="ln" style={{animationDelay: ".58s"}} d="M187 38H216M187 45H205"/>
          <path className="ln" style={{animationDelay: ".7s"}} d="M187 89H216M187 96H207"/>
          <path className="ln" style={{animationDelay: ".82s"}} d="M187 140H216M187 147H202"/>
        </g>
        <circle className="flow" cx="64" cy="90" r="3.5" fill={tint}/>
      </svg>
    </VisualFrame>
  );
}

export function CloudDevOpsVisual(props: VisualProps) {
  const { ref, active } = useVisualInView();
  const { tint, lineColor } = useColors(props);
  return (
    <VisualFrame refEl={ref} active={active} className={props.className}>
      <svg viewBox="0 0 240 180" fill="none">
        <g stroke={tint} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" opacity=".82">
          <path className="ln" d="M82 47H73a15 15 0 1 1 3-29 22 22 0 0 1 42 4h5a13 13 0 1 1 0 26H82Z"/>
        </g>
        <path className="ln" style={{animationDelay: ".2s"}} d="M112 48V67H120V82M28 82H212M28 82V98M90 82V98M150 82V98M212 82V98" stroke={lineColor} strokeWidth="1.3" strokeLinecap="round"/>
        <g fill={tint}>
          <rect className="node" style={{animationDelay: ".25s"}} x="14" y="98" width="29" height="31" rx="6" fillOpacity=".3" stroke={lineColor} strokeWidth="1"/>
          <rect className="node" style={{animationDelay: ".36s"}} x="75" y="98" width="29" height="31" rx="6" fillOpacity=".45" stroke={lineColor} strokeWidth="1"/>
          <rect className="node" style={{animationDelay: ".47s"}} x="135" y="98" width="29" height="31" rx="6" fillOpacity=".58" stroke={lineColor} strokeWidth="1"/>
          <rect className="node" style={{animationDelay: ".58s"}} x="197" y="98" width="29" height="31" rx="6" fillOpacity=".75" stroke={lineColor} strokeWidth="1"/>
        </g>
        <g stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity=".65">
          <path className="detail" style={{animationDelay: ".36s"}} d="m22 112 4 4 7-8"/>
          <path className="detail" style={{animationDelay: ".47s"}} d="M83 108h13M83 114h13M83 120h8"/>
          <path className="detail" style={{animationDelay: ".58s"}} d="M142 113h15M149.5 106v14"/>
          <path className="detail" style={{animationDelay: ".69s"}} d="m205 113 4 4 9-10"/>
        </g>
        <g fill={tint}>
          <rect className="detail" style={{animationDelay: ".72s"}} x="18" y="143" width="21" height="3" rx="1.5" fillOpacity=".45"/>
          <rect className="detail" style={{animationDelay: ".77s"}} x="79" y="143" width="21" height="3" rx="1.5" fillOpacity=".45"/>
          <rect className="detail" style={{animationDelay: ".82s"}} x="139" y="143" width="21" height="3" rx="1.5" fillOpacity=".45"/>
          <rect className="detail" style={{animationDelay: ".87s"}} x="201" y="143" width="21" height="3" rx="1.5" fillOpacity=".45"/>
        </g>
        <circle className="flow" cx="120" cy="82" r="3.2" fill={tint}/>
      </svg>
    </VisualFrame>
  );
}

export function VideoMediaVisual(props: VisualProps) {
  const { ref, active } = useVisualInView();
  const { tint, lineColor } = useColors(props);
  return (
    <VisualFrame refEl={ref} active={active} className={props.className}>
      <svg viewBox="0 0 240 180" fill="none">
        <rect className="node" style={{animationDelay: ".05s"}} x="14" y="15" width="133" height="91" rx="8" fill={tint} fillOpacity=".035" stroke={lineColor} strokeWidth="1.2"/>
        <rect className="node" style={{animationDelay: ".18s"}} x="23" y="24" width="115" height="73" rx="5" fill={tint} fillOpacity=".1"/>
        <circle className="detail" style={{animationDelay: ".3s"}} cx="110" cy="43" r="8" fill={tint} fillOpacity=".6"/>
        <path className="detail" style={{animationDelay: ".38s"}} d="M24 87 54 59 72 75 91 55 138 91H24Z" fill={tint} fillOpacity=".34"/>
        <circle className="node" style={{animationDelay: ".46s"}} cx="80" cy="62" r="12" fill="#0A0A0A" fillOpacity=".7" stroke={tint} strokeOpacity=".75" strokeWidth="1.2"/>
        <path className="detail" style={{animationDelay: ".52s"}} d="m77 56 9 6-9 6V56Z" fill={tint}/>
        <rect className="node" style={{animationDelay: ".3s"}} x="158" y="15" width="68" height="91" rx="8" fill={tint} fillOpacity=".04" stroke={lineColor} strokeWidth="1.2"/>
        <rect className="detail" style={{animationDelay: ".42s"}} x="167" y="25" width="50" height="30" rx="4" fill={tint} fillOpacity=".35"/>
        <rect className="detail" style={{animationDelay: ".48s"}} x="167" y="63" width="42" height="4" rx="2" fill={tint} fillOpacity=".52"/>
        <rect className="detail" style={{animationDelay: ".54s"}} x="167" y="72" width="49" height="4" rx="2" fill={tint} fillOpacity=".27"/>
        <rect className="detail" style={{animationDelay: ".6s"}} x="167" y="81" width="32" height="4" rx="2" fill={tint} fillOpacity=".27"/>
        <rect className="node" style={{animationDelay: ".48s"}} x="14" y="119" width="212" height="47" rx="7" fill={tint} fillOpacity=".035" stroke={lineColor} strokeWidth="1.1"/>
        <path className="ln" style={{animationDelay: ".55s"}} d="M24 132H216" stroke={lineColor} strokeWidth="1.1"/>
        <g fill={tint}>
          <rect className="node" style={{animationDelay: ".58s"}} x="25" y="139" width="40" height="17" rx="3" fillOpacity=".55"/>
          <rect className="node" style={{animationDelay: ".66s"}} x="69" y="139" width="30" height="17" rx="3" fillOpacity=".32"/>
          <rect className="node" style={{animationDelay: ".74s"}} x="103" y="139" width="53" height="17" rx="3" fillOpacity=".67"/>
          <rect className="node" style={{animationDelay: ".82s"}} x="160" y="139" width="55" height="17" rx="3" fillOpacity=".4"/>
        </g>
        <path className="ln" style={{animationDelay: ".84s"}} d="M101 135V161" stroke={tint} strokeWidth="1.7"/>
      </svg>
    </VisualFrame>
  );
}

export function BpoSupportVisual(props: VisualProps) {
  const { ref, active } = useVisualInView();
  const { tint, lineColor } = useColors(props);
  return (
    <VisualFrame refEl={ref} active={active} className={props.className}>
      <svg viewBox="0 0 240 180" fill="none">
        <g stroke={lineColor} strokeWidth="1.3" strokeLinecap="round">
          <path className="ln" d="M64 90H88"/>
          <path className="ln" style={{animationDelay: ".2s"}} d="M145 90H164V38H178M164 90H178M164 90V142H178"/>
        </g>
        <rect className="node" style={{animationDelay: ".05s"}} x="12" y="59" width="52" height="62" rx="9" fill={tint} fillOpacity=".07" stroke={lineColor} strokeWidth="1.1"/>
        <circle className="node" style={{animationDelay: ".12s"}} cx="38" cy="78" r="9" fill={tint} fillOpacity=".62"/>
        <path className="detail" style={{animationDelay: ".2s"}} d="M24 105c2-10 26-10 28 0" stroke={tint} strokeOpacity=".65" strokeWidth="2" strokeLinecap="round"/>
        <path className="ln" style={{animationDelay: ".25s"}} d="M29 75v-3a9 9 0 0 1 18 0v3M29 75h3v8h-3zM44 75h3v8h-3z" stroke={tint} strokeWidth="1.4" strokeLinecap="round"/>
        <rect className="node" style={{animationDelay: ".3s"}} x="88" y="55" width="57" height="70" rx="10" fill={tint} fillOpacity=".82"/>
        <g stroke="#0A0A0A" strokeOpacity=".62" strokeWidth="1.8" strokeLinecap="round">
          <path className="detail" style={{animationDelay: ".4s"}} d="M101 72H132M101 82H126M101 92H132M101 102H119"/>
        </g>
        <g fill={tint}>
          <rect className="node" style={{animationDelay: ".48s"}} x="178" y="25" width="48" height="25" rx="7" fillOpacity=".75"/>
          <rect className="node" style={{animationDelay: ".58s"}} x="178" y="78" width="48" height="25" rx="7" fillOpacity=".58"/>
          <rect className="node" style={{animationDelay: ".68s"}} x="178" y="130" width="48" height="25" rx="7" fillOpacity=".42"/>
        </g>
        <g stroke={lineColor} strokeWidth="1.1" strokeLinecap="round">
          <path className="ln" style={{animationDelay: ".58s"}} d="M186 34H216M186 41H207"/>
          <path className="ln" style={{animationDelay: ".68s"}} d="M186 87H216M186 94H211"/>
          <path className="ln" style={{animationDelay: ".78s"}} d="M186 139H216M186 146H203"/>
        </g>
        <circle className="flow" cx="76" cy="90" r="3.2" fill={tint}/>
      </svg>
    </VisualFrame>
  );
}

export function WebinarVisual(props: VisualProps) {
  const { ref, active } = useVisualInView();
  const { tint, lineColor } = useColors(props);
  return (
    <VisualFrame refEl={ref} active={active} className={props.className}>
      <svg viewBox="0 0 240 180" fill="none">
        <rect className="node" style={{animationDelay: ".05s"}} x="14" y="15" width="150" height="105" rx="8" fill={tint} fillOpacity=".035" stroke={lineColor} strokeWidth="1.2"/>
        <path className="ln" d="M14 32H164" stroke={lineColor} strokeWidth="1.1"/>
        <g fill={tint} fillOpacity=".55">
          <circle className="detail" style={{animationDelay: ".12s"}} cx="25" cy="24" r="2.2"/><circle className="detail" style={{animationDelay: ".18s"}} cx="33" cy="24" r="2.2"/><circle className="detail" style={{animationDelay: ".24s"}} cx="41" cy="24" r="2.2"/>
        </g>
        <rect className="node" style={{animationDelay: ".22s"}} x="25" y="42" width="128" height="66" rx="5" fill={tint} fillOpacity=".09"/>
        <circle className="node" style={{animationDelay: ".32s"}} cx="88" cy="63" r="10" fill={tint} fillOpacity=".72"/>
        <path className="detail" style={{animationDelay: ".4s"}} d="M69 94c2-15 36-15 38 0" fill={tint} fillOpacity=".42"/>
        <path className="ln" style={{animationDelay: ".44s"}} d="M42 99H58M118 99H137" stroke={lineColor} strokeWidth="1.3" strokeLinecap="round"/>
        <rect className="node" style={{animationDelay: ".34s"}} x="175" y="25" width="51" height="82" rx="7" fill={tint} fillOpacity=".035" stroke={lineColor} strokeWidth="1.1"/>
        <g fill={tint}>
          <circle className="node" style={{animationDelay: ".43s"}} cx="188" cy="43" r="5.5" fillOpacity=".72"/>
          <rect className="detail" style={{animationDelay: ".47s"}} x="198" y="40" width="19" height="3" rx="1.5" fillOpacity=".58"/>
          <rect className="detail" style={{animationDelay: ".51s"}} x="198" y="46" width="14" height="3" rx="1.5" fillOpacity=".3"/>
          <circle className="node" style={{animationDelay: ".54s"}} cx="188" cy="65" r="5.5" fillOpacity=".52"/>
          <rect className="detail" style={{animationDelay: ".58s"}} x="198" y="62" width="19" height="3" rx="1.5" fillOpacity=".58"/>
          <rect className="detail" style={{animationDelay: ".62s"}} x="198" y="68" width="14" height="3" rx="1.5" fillOpacity=".3"/>
          <circle className="node" style={{animationDelay: ".65s"}} cx="188" cy="87" r="5.5" fillOpacity=".36"/>
          <rect className="detail" style={{animationDelay: ".69s"}} x="198" y="84" width="19" height="3" rx="1.5" fillOpacity=".58"/>
          <rect className="detail" style={{animationDelay: ".73s"}} x="198" y="90" width="14" height="3" rx="1.5" fillOpacity=".3"/>
        </g>
        <path className="ln" style={{animationDelay: ".62s"}} d="M89 120V137H120M200 107V137H120" stroke={lineColor} strokeWidth="1.2" strokeLinecap="round"/>
        <rect className="node" style={{animationDelay: ".72s"}} x="25" y="137" width="190" height="27" rx="7" fill={tint} fillOpacity=".06" stroke={lineColor} strokeWidth="1.1"/>
        <g fill={tint}>
          <rect className="detail" style={{animationDelay: ".8s"}} x="37" y="148" width="33" height="5" rx="2.5" fillOpacity=".58"/>
          <rect className="detail" style={{animationDelay: ".86s"}} x="78" y="148" width="48" height="5" rx="2.5" fillOpacity=".33"/>
          <rect className="detail" style={{animationDelay: ".92s"}} x="134" y="148" width="26" height="5" rx="2.5" fillOpacity=".65"/>
          <circle className="flow" cx="190" cy="150.5" r="3" fill={tint}/>
        </g>
      </svg>
    </VisualFrame>
  );
}

// Backward-compatible aliases for existing imports.
export const WebDevVisual = WebDevelopmentVisual;
export const VideoVisual = VideoMediaVisual;
export const BpoVisual = BpoSupportVisual;
