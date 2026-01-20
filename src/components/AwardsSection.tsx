"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";

const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15, duration: 0.4 },
    }),
};

export default function AwardsSection() {
    const { awards } = portfolioData;

    return (
        <section className="flex flex-col gap-4" id="awards">
            <div className="flex items-center justify-between px-2">
                <h2 className="text-xl font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined text-[var(--color-primary)]">
                        emoji_events
                    </span>
                    Awards & Recognition
                </h2>
                <span className="h-[1px] flex-1 bg-[var(--color-border)] ml-4"></span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {awards.map((award, index) => (
                    <motion.div
                        key={award.title}
                        custom={index}
                        variants={cardVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="group relative bg-[var(--color-surface)] rounded-lg border border-[var(--color-border)] paper-shadow hover:paper-shadow-hover hover:-translate-y-[2px] transition-all duration-300 p-6"
                    >
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0">
                                <span className="inline-flex items-center justify-center size-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-white shadow-lg">
                                    <span className="material-symbols-outlined text-[24px]">
                                        {award.icon}
                                    </span>
                                </span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div>
                                    <h3 className="font-bold text-lg">{award.title}</h3>
                                    <p className="text-sm font-mono text-[var(--color-primary)]">
                                        {award.period}
                                    </p>
                                </div>

                                {award.context && (
                                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                                        {award.context}
                                    </p>
                                )}

                                {award.citation && (
                                    <div className="flex items-start gap-2 mt-1">
                                        <span className="material-symbols-outlined text-amber-500 text-[16px] mt-0.5">
                                            format_quote
                                        </span>
                                        <p className="text-sm italic text-[var(--color-text-muted)]">
                                            {award.citation}
                                        </p>
                                    </div>
                                )}

                                {award.from && (
                                    <div className="flex items-center gap-2 mt-2 text-xs text-[var(--color-text-muted)]">
                                        <span className="material-symbols-outlined text-[14px]">
                                            corporate_fare
                                        </span>
                                        <span>From: {award.from}</span>
                                        {award.date && (
                                            <>
                                                <span className="text-gray-300">•</span>
                                                <span>{award.date}</span>
                                            </>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
