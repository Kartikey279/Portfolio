"use client";

import Image from "next/image";
import { motion, type Easing } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";

const cardVariants = {
    initial: { opacity: 0, y: 30 },
    animate: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" as Easing },
    }),
};

export default function ProjectsSection() {
    const { projects } = portfolioData;

    return (
        <section className="flex flex-col gap-4 pb-12" id="projects">
            <div className="flex items-center justify-between px-2">
                <h2 className="text-xl font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined text-[var(--color-primary)]">
                        architecture
                    </span>
                    Featured Projects
                </h2>
                <span className="h-[1px] flex-1 bg-[var(--color-border)] ml-4"></span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        custom={index}
                        variants={cardVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="bg-[var(--color-surface)] rounded-lg border border-[var(--color-border)] paper-shadow overflow-hidden flex flex-col h-full group hover:paper-shadow-hover transition-all duration-300"
                    >
                        {/* Project Image */}
                        <div className="h-48 w-full relative border-b border-[var(--color-border)] overflow-hidden">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-[var(--color-primary)]/10 mix-blend-overlay group-hover:bg-transparent transition-all"></div>
                        </div>

                        {/* Project Content */}
                        <div className="p-5 flex flex-col flex-1">
                            <div className="flex justify-between items-start mb-1">
                                <div>
                                    {project.subtitle && (
                                        <p className="text-xs font-mono text-[var(--color-primary)] mb-1">
                                            {project.subtitle}
                                        </p>
                                    )}
                                    <h3 className="font-bold text-lg">{project.title}</h3>
                                </div>
                            </div>

                            <p className="text-sm text-[var(--color-text-secondary)] mb-4 flex-1">
                                {project.description}
                            </p>

                            {/* Key Metric - Big & Bold */}
                            {project.keyMetric && (
                                <div className="mb-4 p-3 rounded-lg bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/20">
                                    <p className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                                        {project.keyMetric}
                                    </p>
                                    {project.keyMetricNote && (
                                        <p className="text-xs text-[var(--color-text-muted)]">
                                            {project.keyMetricNote}
                                        </p>
                                    )}
                                </div>
                            )}

                            <div className="flex flex-col gap-2 pt-3 border-t border-[var(--color-border)]">
                                {project.metadata.map((meta) => (
                                    <div
                                        key={meta.label}
                                        className="flex items-center justify-between text-xs"
                                    >
                                        <span className="text-[var(--color-text-muted)]">
                                            {meta.label}
                                        </span>
                                        <span className="font-mono text-[var(--color-text-secondary)]">
                                            {meta.value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
