"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";

const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.4 },
    }),
};

export default function EducationSection() {
    const { education } = portfolioData;

    return (
        <section className="flex flex-col gap-4" id="education">
            <div className="flex items-center justify-between px-2">
                <h2 className="text-xl font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined text-[var(--color-primary)]">
                        school
                    </span>
                    Education
                </h2>
                <span className="h-[1px] flex-1 bg-[var(--color-border)] ml-4"></span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {education.map((edu, index) => (
                    <motion.div
                        key={edu.institution}
                        custom={index}
                        variants={cardVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="bg-[var(--color-surface)] rounded-lg border border-[var(--color-border)] paper-shadow p-5 flex flex-col h-full"
                    >
                        <div className="flex items-start gap-3 mb-3">
                            <span className="inline-flex items-center justify-center size-10 rounded-full bg-blue-50 dark:bg-blue-900/20 text-[var(--color-primary)]">
                                <span className="material-symbols-outlined text-[20px]">
                                    school
                                </span>
                            </span>
                            <div className="flex-1">
                                <h3 className="font-bold text-sm">{edu.degree}</h3>
                                <p className="text-xs text-[var(--color-primary)] font-medium">
                                    {edu.field}
                                </p>
                            </div>
                        </div>

                        <p className="text-sm font-medium text-[var(--color-text-secondary)] mb-1">
                            {edu.institution}
                        </p>
                        <p className="text-xs font-mono text-[var(--color-text-muted)] mb-3">
                            {edu.period}
                        </p>

                        {edu.focus.length > 0 && (
                            <div className="flex flex-wrap gap-1 mt-auto">
                                {edu.focus.slice(0, 4).map((item) => (
                                    <span
                                        key={item}
                                        className="px-2 py-0.5 rounded text-xs bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
