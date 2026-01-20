"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";

export default function HeroSection() {
    const { philosophy, stats } = portfolioData;

    return (
        <section
            className="bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] paper-shadow p-6 md:p-10"
            id="philosophy"
        >
            <div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-8 xl:gap-12 items-center">
                <motion.div
                    className="flex flex-col"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <div className="flex items-center gap-2 mb-4">
                        <span className="h-[1px] w-8 bg-[var(--color-primary)]"></span>
                        <span className="text-xs font-mono uppercase tracking-widest text-[var(--color-primary)] font-bold">
                            Philosophy
                        </span>
                    </div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                        <span className="gradient-text">{philosophy.headline.split(" ").slice(0, 2).join(" ")}</span>{" "}
                        {philosophy.headline.split(" ").slice(2).join(" ")}
                    </h1>
                    <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed font-light">
                        {philosophy.description}
                    </p>
                </motion.div>

                <motion.div
                    className="flex flex-row xl:flex-col gap-6 xl:gap-8 pt-6 xl:pt-0 border-t xl:border-t-0 border-[var(--color-border)] xl:border-l xl:border-[var(--color-border)] xl:pl-8"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                        >
                            <span className="block text-3xl font-bold gradient-text">{stat.value}</span>
                            <span className="text-xs text-[var(--color-text-muted)] uppercase font-medium">
                                {stat.label}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
