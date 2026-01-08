"use client";

import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import { ClientOnly } from "./ClientOnly";

export function GridBackground({ children, suppressHydrationWarning }: { children?: React.ReactNode; suppressHydrationWarning?: boolean }) {
    const { scrollY } = useScroll();
    const bgY = useTransform(scrollY, [0, 1000], [0, 500]);
    const backgroundPosition = useMotionTemplate`0px ${bgY}px`;

    return (
        <div className="relative min-h-screen bg-[#050505]" suppressHydrationWarning={suppressHydrationWarning}>
            {/* Parallax Grid Background - Client Only */}
            <ClientOnly>
                <motion.div
                    className="fixed inset-0 pointer-events-none"
                    style={{
                        backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
              `,
                        backgroundSize: '20px 20px',
                        backgroundPosition,
                    }}
                    aria-hidden="true"
                    suppressHydrationWarning
                />
            </ClientOnly>

            {/* Gradient Glow */}
            <div
                className="fixed inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(circle at 50% 0%, rgba(34, 197, 94, 0.03) 0%, transparent 60%)',
                }}
                aria-hidden="true"
                suppressHydrationWarning
            />

            {/* Corner Plus Signs - Client Only */}
            <ClientOnly>
                <motion.div
                    className="fixed top-8 left-8 text-[#2A2A2A] font-mono text-xs select-none pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    aria-hidden="true"
                    suppressHydrationWarning
                >
                    +
                </motion.div>
                <motion.div
                    className="fixed top-8 right-8 text-[#2A2A2A] font-mono text-xs select-none pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    aria-hidden="true"
                    suppressHydrationWarning
                >
                    +
                </motion.div>
                <motion.div
                    className="fixed bottom-8 left-8 text-[#2A2A2A] font-mono text-xs select-none pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    aria-hidden="true"
                    suppressHydrationWarning
                >
                    +
                </motion.div>
                <motion.div
                    className="fixed bottom-8 right-8 text-[#2A2A2A] font-mono text-xs select-none pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    aria-hidden="true"
                    suppressHydrationWarning
                >
                    +
                </motion.div>
            </ClientOnly>

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
}
