"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function GridBackground({ children }: { children?: React.ReactNode }) {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 1000], [0, -200]);

    return (
        <div className="relative min-h-screen">
            {/* Grid Pattern with Parallax */}
            <motion.div
                className="fixed inset-0 pointer-events-none"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
          `,
                    backgroundSize: '20px 20px',
                    y,
                }}
                aria-hidden="true"
            />

            {/* Gradient Glow - Subtle green from top */}
            <div
                className="fixed inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(circle at 50% 0%, rgba(34, 197, 94, 0.04) 0%, transparent 50%)',
                }}
                aria-hidden="true"
            />

            {/* Corner Plus Signs */}
            <motion.div
                className="fixed top-8 left-8 text-[#2A2A2A] font-mono text-xs select-none pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                aria-hidden="true"
            >
                +
            </motion.div>
            <motion.div
                className="fixed top-8 right-8 text-[#2A2A2A] font-mono text-xs select-none pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                aria-hidden="true"
            >
                +
            </motion.div>
            <motion.div
                className="fixed bottom-8 left-8 text-[#2A2A2A] font-mono text-xs select-none pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                aria-hidden="true"
            >
                +
            </motion.div>
            <motion.div
                className="fixed bottom-8 right-8 text-[#2A2A2A] font-mono text-xs select-none pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                aria-hidden="true"
            >
                +
            </motion.div>

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
}
