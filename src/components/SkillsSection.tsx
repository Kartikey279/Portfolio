"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";

const containerVariants = {
    initial: {},
    animate: {
        transition: { staggerChildren: 0.1 },
    },
};

const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function SkillsSection() {
    const { skills } = portfolioData;

    return (
        <section className="flex flex-col gap-4" id="skills">
            <div className="flex items-center justify-between px-2">
                <h2 className="text-xl font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined text-[var(--color-primary)]">
                        terminal
                    </span>
                    Technical Proficiency
                </h2>
                <span className="h-[1px] flex-1 bg-[var(--color-border)] ml-4"></span>
            </div>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"
                variants={containerVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
            >
                {/* Frontend Skills */}
                <motion.div
                    variants={cardVariants}
                    className="bg-[var(--color-surface)] p-5 rounded-lg border border-[var(--color-border)] paper-shadow h-full"
                >
                    <div className="flex items-center gap-2 mb-4">
                        <span className="material-symbols-outlined text-gray-400 text-[20px]">
                            {skills.frontend.icon}
                        </span>
                        <h3 className="font-bold text-sm uppercase tracking-wider">
                            {skills.frontend.title}
                        </h3>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        {skills.frontend.items.map((skill) => (
                            <div
                                key={skill.name}
                                className="flex items-center justify-between p-2 rounded bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-600"
                            >
                                <span className="text-sm font-mono text-slate-700 dark:text-slate-200">
                                    {skill.name}
                                </span>
                                <span
                                    className={`size-2 rounded-full ${skill.proficiency === "expert"
                                        ? "bg-green-500"
                                        : skill.proficiency === "intermediate"
                                            ? "bg-yellow-500"
                                            : "bg-gray-400"
                                        }`}
                                ></span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Backend Skills */}
                <motion.div
                    variants={cardVariants}
                    className="bg-[var(--color-surface)] p-5 rounded-lg border border-[var(--color-border)] paper-shadow h-full"
                >
                    <div className="flex items-center gap-2 mb-4">
                        <span className="material-symbols-outlined text-gray-400 text-[20px]">
                            {skills.backend.icon}
                        </span>
                        <h3 className="font-bold text-sm uppercase tracking-wider">
                            {skills.backend.title}
                        </h3>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        {skills.backend.items.map((skill) => (
                            <div
                                key={skill.name}
                                className="flex items-center justify-between p-2 rounded bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-600"
                            >
                                <span className="text-sm font-mono text-slate-700 dark:text-slate-200">
                                    {skill.name}
                                </span>
                                <span
                                    className={`size-2 rounded-full ${skill.proficiency === "expert"
                                        ? "bg-green-500"
                                        : skill.proficiency === "intermediate"
                                            ? "bg-yellow-500"
                                            : "bg-gray-400"
                                        }`}
                                ></span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* DevOps Skills */}
                <motion.div
                    variants={cardVariants}
                    className="md:col-span-2 xl:col-span-1 bg-[var(--color-surface)] p-5 rounded-lg border border-[var(--color-border)] paper-shadow h-full"
                >
                    <div className="flex items-center gap-2 mb-4">
                        <span className="material-symbols-outlined text-gray-400 text-[20px]">
                            {skills.devops.icon}
                        </span>
                        <h3 className="font-bold text-sm uppercase tracking-wider">
                            {skills.devops.title}
                        </h3>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        {skills.devops.items.map((skill) => (
                            <div
                                key={skill}
                                className="flex items-center justify-between p-2 rounded bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-600"
                            >
                                <span className="text-sm font-mono text-slate-700 dark:text-slate-200">
                                    {skill}
                                </span>
                                <span className="size-2 rounded-full bg-green-500"></span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
