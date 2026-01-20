"use client";

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

export default function ExperienceSection() {
    const { experience } = portfolioData;

    return (
        <section className="flex flex-col gap-4" id="experience">
            <div className="flex items-center justify-between px-2">
                <h2 className="text-xl font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined text-[var(--color-primary)]">
                        history_edu
                    </span>
                    Professional Experience
                </h2>
                <span className="h-[1px] flex-1 bg-[var(--color-border)] ml-4"></span>
            </div>

            <div className="grid grid-cols-1 gap-4">
                {experience.map((exp, index) => (
                    <motion.div
                        key={exp.period}
                        custom={index}
                        variants={cardVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="group relative bg-[var(--color-surface)] rounded-lg border border-[var(--color-border)] paper-shadow hover:paper-shadow-hover hover:-translate-y-[2px] transition-all duration-300 p-6 border-l-[3px] border-l-[var(--color-primary)]"
                    >
                        <div className="flex flex-col md:flex-row gap-6">
                            {/* Left Column - Timeline */}
                            <div className="md:w-1/4 xl:w-1/5 flex flex-col border-b md:border-b-0 md:border-r border-[var(--color-border)] pb-4 md:pb-0 md:pr-6">
                                <span className="text-xs font-mono text-[var(--color-text-muted)] mb-1">
                                    {exp.period}
                                </span>
                                <h3 className="font-bold text-lg">{exp.role}</h3>
                                <p className="text-sm font-medium text-[var(--color-primary)] mt-1">
                                    {exp.company}
                                </p>
                                <div className="mt-auto hidden md:block pt-4">
                                    <span className="inline-flex items-center justify-center size-8 rounded-full bg-blue-50 dark:bg-blue-900/20 text-[var(--color-primary)]">
                                        <span className="material-symbols-outlined text-[16px]">
                                            {exp.icon}
                                        </span>
                                    </span>
                                </div>
                            </div>

                            {/* Right Column - Details */}
                            <div className="md:w-3/4 xl:w-4/5 flex flex-col gap-3">
                                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                                    {exp.description}
                                </p>

                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                                    {exp.achievements.map((achievement, i) => (
                                        <li
                                            key={i}
                                            className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]"
                                        >
                                            <span className="material-symbols-outlined text-[var(--color-primary)] text-[16px] mt-0.5">
                                                check_circle
                                            </span>
                                            <span>{achievement}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2 mt-3">
                                    {exp.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2.5 py-1 rounded-md text-xs font-mono bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
