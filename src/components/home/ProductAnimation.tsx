"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const cardReveal: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const drawIcon: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  show: { pathLength: 1, opacity: 1 },
};

const waveDelays = [0, 0.1, 0.2, 0.3, 0.15, 0.25, 0.05, 0.3, 0.2, 0.1];

export default function ProductAnimation() {
  const shouldReduceMotion = useReducedMotion();
  const drawInitial = shouldReduceMotion ? "show" : "hidden";

  const methods: { label: string; icon: React.ReactNode }[] = [
    {
      label: "WhatsApp",
      icon: (
        <motion.path
          d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
          variants={drawIcon}
          initial={drawInitial}
          animate="show"
          transition={{ duration: 0.9, ease: EASE, delay: 0.5 }}
        />
      ),
    },
    {
      label: "Email",
      icon: (
        <>
          <motion.rect x={2} y={4} width={20} height={16} rx={2} variants={drawIcon} initial={drawInitial} animate="show" transition={{ duration: 0.9, ease: EASE, delay: 0.6 }} />
          <motion.path d="M22 6l-10 7L2 6" variants={drawIcon} initial={drawInitial} animate="show" transition={{ duration: 0.7, ease: EASE, delay: 0.95 }} />
        </>
      ),
    },
    {
      label: "30+ Languages",
      icon: (
        <>
          <motion.circle cx={12} cy={12} r={9} variants={drawIcon} initial={drawInitial} animate="show" transition={{ duration: 0.9, ease: EASE, delay: 0.7 }} />
          <motion.line x1={3} y1={12} x2={21} y2={12} variants={drawIcon} initial={drawInitial} animate="show" transition={{ duration: 0.5, ease: EASE, delay: 1.05 }} />
          <motion.path d="M12 3a14 14 0 0 1 0 18a14 14 0 0 1 0-18z" variants={drawIcon} initial={drawInitial} animate="show" transition={{ duration: 0.9, ease: EASE, delay: 1.1 }} />
        </>
      ),
    },
  ];

  return (
    <div>
      <motion.div initial={shouldReduceMotion ? false : "hidden"} animate="show" variants={cardReveal} className="rounded-none border border-white/14 bg-[#212121] overflow-hidden">
        {/* Window chrome */}
        <div className="flex items-center gap-2 px-4.5 py-3.5 border-b border-white/14">
          <span className="w-2.75 h-2.75 rounded-none bg-[#F5F5F0]" />
          <span className="w-2.75 h-2.75 rounded-none bg-[#B5B5B0]" />
          <span className="w-2.75 h-2.75 rounded-none bg-[#6E6E68]" />
          <span className="ml-2 grow px-3 py-1.25 rounded-none border border-white/14 text-[11.5px] text-[#6E6E6A] font-jetbrain">verbosa.ai — live call</span>
        </div>

        <div className="p-6.5">
          {/* Status row */}
          <div className="flex items-center justify-between mb-5.5">
            <div className="flex items-center gap-2.5">
              <div className="relative w-9 h-9 shrink-0">
                {/* Ringing pulse behind the phone icon */}
                <motion.span
                  aria-hidden="true"
                  className="absolute inset-0 rounded-none border border-white/30"
                  animate={shouldReduceMotion ? undefined : { scale: [1, 1.6, 1.6], opacity: [0.6, 0, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
                />
                <span className="relative z-10 flex h-9 w-9 items-center justify-center rounded-none border border-white/14 bg-[#141414] text-[#F5F5F2]">
                  <motion.svg viewBox="0 0 24 24" width={17} height={17} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                    <motion.path
                      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.63 2.63a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.45-1.2a2 2 0 0 1 2.11-.45c.85.3 1.73.51 2.63.63A2 2 0 0 1 22 16.92z"
                      variants={drawIcon}
                      initial={drawInitial}
                      animate="show"
                      transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
                    />
                  </motion.svg>
                </span>
              </div>

              <div>
                <div className="text-[13px] font-semibold text-[#A6A6A2]">Outbound call</div>
                <div className="text-[11px] text-[#9A9A94] flex items-center gap-1.25">
                  <motion.span
                    aria-hidden="true"
                    className="w-1.5 h-1.5 rounded-none bg-[#9A9A94] inline-block"
                    animate={shouldReduceMotion ? undefined : { opacity: [1, 0.5, 1], scale: [1, 0.85, 1] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                  />
                  Connected · 00:14
                </div>
              </div>
            </div>

            <span className="text-[11px] px-2.5 py-1 rounded-none bg-[#141414] border border-white/14 text-white font-jetbrain">{"<500ms"}</span>
          </div>

          {/* Waveform */}
          <div className="flex items-end gap-1 h-11 px-1 mb-5.5">
            {waveDelays.map((delay, i) => (
              <motion.span
                key={i}
                className="flex-1 h-full rounded-none bg-white"
                animate={shouldReduceMotion ? undefined : { scaleY: [0.4, 1, 0.4] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay,
                }}
              />
            ))}
          </div>

          {/* Contact methods */}
          <div className="grid grid-cols-3 gap-2.5">
            {methods.map((m) => (
              <motion.div
                key={m.label}
                className="rounded-none border border-white/14 bg-[#141414] p-3 text-center cursor-default"
                whileHover={shouldReduceMotion ? undefined : { y: -3 }}
                transition={{ duration: 0.25, ease: EASE }}
              >
                <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="#F5F5F2" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-1.5 block">
                  {m.icon}
                </svg>
                <div className="text-[10.5px] text-[#6E6E6A] font-semibold">{m.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
