"use client";

import { motion } from "framer-motion";

type IndustryCardProps = {
        title: string;
        icon: React.ReactNode;
};

const IndustryCard = ({ title, icon }: IndustryCardProps) => {
        return (
                <motion.div
                        initial="rest"
                        whileHover="hover"
                        variants={{
                                rest: {
                                        y: 0,
                                        borderColor: "rgba(255, 255, 255, 0.14)",
                                },
                                hover: {
                                        y: -6,
                                        borderColor: "rgba(255, 255, 255, 0.28)",
                                },
                        }}
                        transition={{
                                duration: 0.35,
                                ease: [0.22, 1, 0.36, 1],
                        }}
                        className="group relative overflow-hidden border bg-[#141414] rounded-none py-7 px-6 flex flex-col items-center gap-4"
                >
                        <motion.div
                                variants={{
                                        rest: {
                                                opacity: 0,
                                                scale: 0.8,
                                        },
                                        hover: {
                                                opacity: 1,
                                                scale: 1.15,
                                        },
                                }}
                                transition={{
                                        duration: 0.5,
                                        ease: "easeOut",
                                }}
                                className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-white/6 blur-3xl"
                        />
                        <motion.div
                                variants={{
                                        rest: {
                                                x: 0,
                                                y: 0,
                                        },
                                        hover: {
                                                x: 4,
                                                y: -2,
                                        },
                                }}
                                transition={{
                                        duration: 0.35,
                                        ease: [0.22, 1, 0.36, 1],
                                }}
                        >
                                {icon}
                        </motion.div>
                        <motion.h3
                                variants={{
                                        rest: {
                                                x: 0,
                                        },
                                        hover: {
                                                x: 4,
                                        },
                                }}
                                transition={{
                                        duration: 0.35,
                                        ease: [0.22, 1, 0.36, 1],
                                }}
                                className="relative mb-2.5 text-[13px] font-jetbrain text-gray-02"
                        >
                                {title}
                        </motion.h3>
                </motion.div>
        );
};

export default IndustryCard;
