"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import { portfolioData } from "@/data/portfolioData";
import { useState, useEffect } from "react";

// Brand SVG Icons
const GitHubIcon = () => (
    <svg viewBox="0 0 24 24" className="size-5" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
);

const LinkedInIcon = () => (
    <svg viewBox="0 0 24 24" className="size-5" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
);

const EmailIcon = () => (
    <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 6L12 13L2 6" />
    </svg>
);

export default function Sidebar() {
    const { theme, toggleTheme } = useTheme();
    const { profile, navigation } = portfolioData;
    const [activeSection, setActiveSection] = useState("philosophy");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    // Track active section based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            const sections = navigation.map((item) => item.id);
            const scrollPosition = window.scrollY + 200;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [navigation]);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [activeSection]);

    return (
        <>
            {/* Mobile Header */}
            <div className="lg:hidden fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/10 dark:border-white/5 px-4 py-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="relative size-10 rounded-full overflow-hidden ring-2 ring-white/20 dark:ring-white/10">
                            <Image
                                src={profile.image}
                                alt={profile.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <h1 className="font-bold text-sm">{profile.name}</h1>
                            <span className="inline-flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400">
                                <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                Available
                            </span>
                        </div>
                    </div>
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="p-2 rounded-full glass-panel-hover transition-colors"
                        aria-label="Toggle menu"
                    >
                        <span className="material-symbols-outlined text-[24px]">
                            {mobileMenuOpen ? "close" : "menu"}
                        </span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="lg:hidden fixed top-[60px] left-0 right-0 z-40 glass-panel border-b border-white/10 dark:border-white/5 shadow-2xl p-4"
                    >
                        <nav className="flex flex-col gap-1 mb-4">
                            {navigation.map((item) => {
                                const isActive = activeSection === item.id;
                                return (
                                    <Link
                                        key={item.id}
                                        href={`#${item.id}`}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${isActive
                                            ? "bg-[var(--color-primary)]/20 text-[var(--color-primary)] shadow-lg shadow-[var(--color-primary)]/20"
                                            : "text-slate-600 dark:text-slate-300 hover:bg-white/10"
                                            }`}
                                    >
                                        <span className={`material-symbols-outlined text-[22px] ${isActive ? "glow-icon" : ""}`}>
                                            {item.icon}
                                        </span>
                                        <span className="text-sm font-medium">{item.label}</span>
                                    </Link>
                                );
                            })}
                        </nav>
                        <div className="flex items-center justify-between pt-3 border-t border-white/10">
                            <div className="flex items-center gap-2">
                                <a href={profile.social.github} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-500 hover:text-[var(--color-text-primary)] transition-colors">
                                    <GitHubIcon />
                                </a>
                                <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-500 hover:text-[#0077b5] transition-colors">
                                    <LinkedInIcon />
                                </a>
                                <a href={profile.social.email} className="p-2 text-slate-500 hover:text-red-500 transition-colors">
                                    <EmailIcon />
                                </a>
                            </div>
                            <button onClick={toggleTheme} className="p-2 text-slate-500 hover:text-[var(--color-primary)] transition-colors">
                                <span className="material-symbols-outlined text-[20px]">
                                    {theme === "light" ? "dark_mode" : "light_mode"}
                                </span>
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Desktop Floating Glass Sidebar */}
            <aside className="relative h-full hidden lg:block">
                <motion.div
                    className="fixed left-6 top-1/2 -translate-y-1/2 z-40"
                    onMouseEnter={() => setIsExpanded(true)}
                    onMouseLeave={() => setIsExpanded(false)}
                >
                    <motion.div
                        className="glass-panel rounded-2xl border border-white/20 dark:border-white/10 shadow-2xl shadow-black/10 dark:shadow-black/30 overflow-hidden"
                        animate={{
                            width: isExpanded ? 300 : 80,
                        }}
                        transition={{ type: "spring", stiffness: 400, damping: 28 }}
                    >
                        <div className="p-5 flex flex-col gap-5">
                            {/* Profile Section */}
                            <motion.div
                                className={`flex items-center ${isExpanded ? "justify-start gap-3" : "justify-center"}`}
                                initial={false}
                            >
                                <div className="relative size-12 rounded-full overflow-hidden ring-2 ring-[var(--color-primary)]/40 flex-shrink-0 shadow-lg shadow-[var(--color-primary)]/20">
                                    <Image
                                        src={profile.image}
                                        alt={`Portrait of ${profile.name}`}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                                <AnimatePresence>
                                    {isExpanded && (
                                        <motion.div
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -10 }}
                                            transition={{ duration: 0.2 }}
                                            className="flex flex-col min-w-0"
                                        >
                                            <h1 className="font-bold text-sm truncate">{profile.name}</h1>
                                            <span className="inline-flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400">
                                                <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                                Available
                                            </span>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>

                            {/* Separator */}
                            <div className="h-px bg-slate-600/50 dark:bg-slate-500/30" />

                            {/* Navigation - Icon Only with Expand */}
                            <nav className="flex flex-col gap-1.5">
                                {navigation.map((item) => {
                                    const isActive = activeSection === item.id;
                                    return (
                                        <Link
                                            key={item.id}
                                            href={`#${item.id}`}
                                            className={`group relative flex items-center ${isExpanded ? "justify-start gap-4" : "justify-center"} p-3.5 rounded-xl transition-all duration-300 ${isActive
                                                ? "bg-[var(--color-primary)]/20 text-[var(--color-primary)]"
                                                : "text-slate-400 dark:text-slate-300 hover:bg-white/10 hover:text-[var(--color-text-primary)]"
                                                }`}
                                        >
                                            {/* Glow effect for active icon */}
                                            {isActive && (
                                                <motion.div
                                                    layoutId="activeGlow"
                                                    className="absolute inset-0 rounded-xl bg-[var(--color-primary)]/10 shadow-lg shadow-[var(--color-primary)]/30"
                                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                                />
                                            )}
                                            <span
                                                className={`material-symbols-outlined text-[26px] relative z-10 transition-all duration-300 ${isActive
                                                    ? "glow-icon"
                                                    : "group-hover:scale-110 group-hover:text-[var(--color-primary)]"
                                                    }`}
                                            >
                                                {item.icon}
                                            </span>
                                            <AnimatePresence>
                                                {isExpanded && (
                                                    <motion.span
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        exit={{ opacity: 0, x: -10 }}
                                                        transition={{ duration: 0.15 }}
                                                        className={`text-sm font-medium relative z-10 whitespace-nowrap ${isActive ? "text-[var(--color-primary)]" : ""
                                                            }`}
                                                    >
                                                        {item.label}
                                                    </motion.span>
                                                )}
                                            </AnimatePresence>
                                        </Link>
                                    );
                                })}
                            </nav>

                            {/* Separator */}
                            <div className="h-px bg-slate-600/50 dark:bg-slate-500/30" />

                            {/* Footer Actions */}
                            <div className="flex flex-col gap-3">
                                {/* Download CV */}
                                <a
                                    href="/Kartikey_Pandey_Resume.pdf"
                                    download="Kartikey_Pandey_Resume.pdf"
                                    className={`group flex items-center ${isExpanded ? "justify-start gap-4" : "justify-center"} p-3.5 rounded-xl bg-[var(--color-primary)]/10 hover:bg-[var(--color-primary)]/25 text-[var(--color-primary)] transition-all duration-300 hover:shadow-lg hover:shadow-[var(--color-primary)]/20`}
                                >
                                    <span className="material-symbols-outlined text-[26px] group-hover:scale-110 group-hover:-translate-y-0.5 transition-all duration-300">
                                        download
                                    </span>
                                    <AnimatePresence>
                                        {isExpanded && (
                                            <motion.span
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -10 }}
                                                transition={{ duration: 0.15 }}
                                                className="text-sm font-semibold whitespace-nowrap"
                                            >
                                                Download CV
                                            </motion.span>
                                        )}
                                    </AnimatePresence>
                                </a>

                                {/* Social Links Row */}
                                <div className={`flex ${isExpanded ? "flex-row items-center justify-between px-3" : "flex-col items-center gap-2"} py-2`}>
                                    <div className="flex items-center gap-1">
                                        <a
                                            href={profile.social.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2.5 text-slate-400 dark:text-slate-300 hover:text-[var(--color-text-primary)] hover:bg-white/10 rounded-xl transition-all duration-300 hover:scale-110"
                                            title="GitHub"
                                        >
                                            <GitHubIcon />
                                        </a>
                                        <AnimatePresence>
                                            {isExpanded && (
                                                <>
                                                    <motion.a
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        exit={{ opacity: 0, scale: 0.8 }}
                                                        href={profile.social.linkedin}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="p-2.5 text-slate-400 dark:text-slate-300 hover:text-[#0077b5] hover:bg-white/10 rounded-xl transition-all duration-300 hover:scale-110"
                                                        title="LinkedIn"
                                                    >
                                                        <LinkedInIcon />
                                                    </motion.a>
                                                    <motion.a
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        exit={{ opacity: 0, scale: 0.8 }}
                                                        href={profile.social.email}
                                                        className="p-2.5 text-slate-400 dark:text-slate-300 hover:text-red-500 hover:bg-white/10 rounded-xl transition-all duration-300 hover:scale-110"
                                                        title="Email"
                                                    >
                                                        <EmailIcon />
                                                    </motion.a>
                                                </>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                    <button
                                        onClick={toggleTheme}
                                        className="p-2.5 text-slate-400 dark:text-slate-300 hover:text-[var(--color-primary)] hover:bg-white/10 rounded-xl transition-all duration-300 hover:scale-110 hover:rotate-12"
                                        aria-label="Toggle theme"
                                    >
                                        <span className="material-symbols-outlined text-[22px]">
                                            {theme === "light" ? "dark_mode" : "light_mode"}
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </aside>

            {/* Mobile Content Spacer */}
            <div className="lg:hidden h-[60px]"></div>
        </>
    );
}
