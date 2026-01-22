"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, type Easing, AnimatePresence } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import { portfolioData } from "@/data/portfolioData";
import { useState, useEffect } from "react";

const navItemVariants = {
    initial: { x: -20, opacity: 0 },
    animate: (i: number) => ({
        x: 0,
        opacity: 1,
        transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" as Easing },
    }),
};

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
            <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-[var(--color-surface)]/95 backdrop-blur-md border-b border-[var(--color-border)] px-4 py-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="relative size-10 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
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
                        className="p-2 rounded-lg hover:bg-[var(--color-surface-hover)] transition-colors"
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
                        className="lg:hidden fixed top-[60px] left-0 right-0 z-40 bg-[var(--color-surface)] border-b border-[var(--color-border)] shadow-lg p-4"
                    >
                        <nav className="flex flex-col gap-1 mb-4">
                            {navigation.map((item) => {
                                const isActive = activeSection === item.id;
                                return (
                                    <Link
                                        key={item.id}
                                        href={`#${item.id}`}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${isActive
                                            ? "bg-[var(--color-primary)]/10 text-[var(--color-primary)]"
                                            : "text-slate-600 dark:text-slate-300 hover:bg-[var(--color-surface-hover)]"
                                            }`}
                                    >
                                        <span className="material-symbols-outlined text-[18px]">{item.icon}</span>
                                        <span className="text-sm font-medium">{item.label}</span>
                                    </Link>
                                );
                            })}
                        </nav>
                        <div className="flex items-center justify-between pt-3 border-t border-[var(--color-border)]">
                            <div className="flex items-center gap-2">
                                <a href={profile.social.github} target="_blank" rel="noopener noreferrer" className="p-2 text-gray-500 hover:text-[var(--color-text-primary)]">
                                    <GitHubIcon />
                                </a>
                                <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 text-gray-500 hover:text-[#0077b5]">
                                    <LinkedInIcon />
                                </a>
                                <a href={profile.social.email} className="p-2 text-gray-500 hover:text-red-500">
                                    <EmailIcon />
                                </a>
                            </div>
                            <button onClick={toggleTheme} className="p-2 text-gray-500 hover:text-[var(--color-primary)]">
                                <span className="material-symbols-outlined text-[20px]">
                                    {theme === "light" ? "dark_mode" : "light_mode"}
                                </span>
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Desktop Sidebar */}
            <aside className="relative h-full hidden lg:block">
                <div className="lg:sticky lg:top-8 w-full h-auto lg:max-h-[calc(100vh-4rem)] flex flex-col bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] paper-shadow p-6 lg:p-8 overflow-y-auto">
                    {/* Profile Section */}
                    <motion.div
                        className="flex flex-col gap-4 mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="relative size-20 rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700">
                            <Image
                                src={profile.image}
                                alt={`Portrait of ${profile.name}`}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        <div className="flex flex-col">
                            {/* Name with Availability Chip */}
                            <div className="flex items-center gap-2 flex-wrap">
                                <h1 className="text-2xl font-bold tracking-tight">{profile.name}</h1>
                                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-[10px] font-semibold uppercase tracking-wide">
                                    <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                    Available
                                </span>
                            </div>
                            <p className="text-[var(--color-primary)] font-mono text-sm font-medium mt-1">
                                {profile.title}
                            </p>
                            {/* Bio with highlighted keywords */}
                            <p className="text-[var(--color-text-secondary)] text-sm mt-3 leading-relaxed">
                                I build production-grade data backbones that banks rely on for regulatory reporting.
                                Specializing in <span className="text-[var(--color-text-primary)] font-medium">Python</span>,
                                <span className="text-[var(--color-text-primary)] font-medium"> SQL</span>, and
                                <span className="text-[var(--color-text-primary)] font-medium"> Cloud Infrastructure (AWS/GCP)</span> to
                                turn messy data into governed, actionable assets.
                            </p>
                        </div>
                    </motion.div>

                    {/* Download CV Button */}
                    <motion.div
                        className="mb-6"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.4 }}
                    >
                        <button className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg h-11 px-4 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] transition-all duration-200 text-white text-sm font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5">
                            <span className="material-symbols-outlined text-[18px]">download</span>
                            <span>Download CV</span>
                        </button>
                    </motion.div>

                    {/* Navigation with Active State Animation */}
                    <nav className="flex flex-col gap-0.5 flex-1 relative">
                        {navigation.map((item, index) => {
                            const isActive = activeSection === item.id;
                            return (
                                <motion.div
                                    key={item.id}
                                    custom={index}
                                    variants={navItemVariants}
                                    initial="initial"
                                    animate="animate"
                                    className="relative"
                                >
                                    {/* Active background pill with animation */}
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeNavBg"
                                            className="absolute inset-0 bg-[var(--color-primary)]/10 rounded-lg border-l-[3px] border-l-[var(--color-primary)]"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                    <Link
                                        href={`#${item.id}`}
                                        className={`group relative flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200 ${isActive
                                            ? "text-[var(--color-primary)]"
                                            : "hover:bg-[var(--color-surface-hover)]"
                                            }`}
                                    >
                                        <span
                                            className={`material-symbols-outlined text-[20px] transition-colors ${isActive
                                                ? "text-[var(--color-primary)]"
                                                : "text-slate-500 dark:text-slate-500 group-hover:text-[var(--color-primary)]"
                                                }`}
                                        >
                                            {item.icon}
                                        </span>
                                        <span
                                            className={`text-sm font-medium transition-colors ${isActive
                                                ? "text-[var(--color-primary)]"
                                                : "text-slate-600 dark:text-slate-300 group-hover:text-[var(--color-text-primary)]"
                                                }`}
                                        >
                                            {item.label}
                                        </span>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </nav>

                    {/* Footer: Social Links + Theme Toggle */}
                    <motion.div
                        className="mt-6 pt-4 border-t border-[var(--color-border)] flex items-center justify-between"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                    >
                        {/* Social Links with Brand Icons */}
                        <div className="flex items-center gap-1">
                            <a
                                href={profile.social.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-500 dark:text-slate-500 hover:text-[var(--color-text-primary)] transition-colors p-2 rounded-md hover:bg-[var(--color-surface-hover)]"
                                title="GitHub"
                            >
                                <GitHubIcon />
                            </a>
                            <a
                                href={profile.social.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-500 dark:text-slate-500 hover:text-[#0077b5] transition-colors p-2 rounded-md hover:bg-[var(--color-surface-hover)]"
                                title="LinkedIn"
                            >
                                <LinkedInIcon />
                            </a>
                            <a
                                href={profile.social.email}
                                className="text-slate-500 dark:text-slate-500 hover:text-red-500 transition-colors p-2 rounded-md hover:bg-[var(--color-surface-hover)]"
                                title="Email"
                            >
                                <EmailIcon />
                            </a>
                        </div>

                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="flex items-center gap-2 text-slate-500 dark:text-slate-500 hover:text-[var(--color-primary)] transition-colors p-2 rounded-lg hover:bg-[var(--color-surface-hover)]"
                            aria-label="Toggle theme"
                        >
                            <span className="material-symbols-outlined text-[20px]">
                                {theme === "light" ? "dark_mode" : "light_mode"}
                            </span>
                        </button>
                    </motion.div>
                </div>
            </aside>

            {/* Mobile Content Spacer */}
            <div className="lg:hidden h-[60px]"></div>
        </>
    );
}
