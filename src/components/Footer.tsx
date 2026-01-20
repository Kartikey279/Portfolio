"use client";

import { motion } from "framer-motion";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <motion.footer
            className="mt-auto py-8 text-center text-sm text-[var(--color-text-muted)] border-t border-[var(--color-border)]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
        >
            <p>© {currentYear} Kartikey Pandey. Built with precision.</p>
        </motion.footer>
    );
}
