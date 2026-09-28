"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MagneticButton, TechConstellation } from "@/components";

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center px-[clamp(1.25rem,8vw,4rem)] pt-20 overflow-hidden">
            {/* Background Animation */}
            <TechConstellation />

            <div className="max-w-[min(90vw,1000px)] lg:max-w-[min(85vw,1200px)] 2xl:max-w-[min(80vw,1400px)] mx-auto relative z-10">
                {/* Name Label */}
                <motion.div
                    className="mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <span className="font-mono text-xs tracking-[0.1em] uppercase text-[#6B7280]">
                        FOR FOUNDERS HITTING THE OPS WALL                    </span>
                </motion.div>

                {/* Main Headline - Responsive line breaks */}
                <motion.h1
                    className="text-display text-white mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    {/* Mobile: Stack more aggressively */}
                    <span className="block sm:hidden">
                        Replace Your
                        <br />
                        <span className="gradient-text">Admin Hiring Plan</span>
                        <br />
                        with AI Systems
                    </span>
                    {/* Desktop: Original layout */}
                    <span className="hidden sm:block">
                        Replace Your <span className="gradient-text">Admin Hiring Plan</span>
                        <br />
                        with AI Systems
                    </span>
                </motion.h1>

                <p className="text-xl text-[#A1A1AA] mb-8 max-w-2xl">
                    I build custom AI internal tools that run your operations. No SaaS lock-in.
                    <br className="hidden sm:block" />
                    No monthly fees. You own the code. <span className="text-white font-medium">Delivered in 14 days.</span>
                </p>

                {/* Availability & Timezone */}
                <motion.div
                    className="flex flex-wrap items-center gap-2 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-lg">
                        <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
                        <span className="text-sm font-medium text-[#22C55E]">Q1 Sprint Slots Available</span>
                    </div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0A0A0A] border border-[#2A2A2A] rounded-lg">
                        <span className="text-sm text-[#A1A1AA]">Fixed $3k</span>
                        <span className="text-[#333333]">•</span>
                        <span className="text-sm text-[#6B7280]">Ship in 14 Days</span>
                    </div>
                </motion.div>



                {/* CTAs */}
                <motion.div
                    className="flex flex-wrap gap-3 mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <MagneticButton
                        href="/contact"
                        className="btn-primary inline-block"
                    >
                        Apply for System Sprint
                    </MagneticButton>
                    <MagneticButton
                        href="/resume.pdf"
                        target="_blank"
                        className="btn-secondary inline-block"
                    >
                        Resume
                    </MagneticButton>
                    <MagneticButton
                        href="https://linkedin.com/in/bibek-thagunna"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary inline-flex items-center gap-2"
                    >
                        <span className="text-base">in</span>
                        <span>LinkedIn</span>
                    </MagneticButton>
                    <MagneticButton
                        href="https://github.com/velayon"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary inline-flex items-center gap-2"
                    >
                        <span>💻</span>
                        <span>GitHub</span>
                    </MagneticButton>
                </motion.div>

                {/* Stats Box */}
                <motion.div
                    className="inline-block"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.55 }}
                >
                    <div className="border border-[#2A2A2A] rounded-lg bg-[#0A0A0A]/50 px-4 py-3 sm:px-6 sm:py-4">
                        <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm font-mono">
                            <div className="flex items-center gap-2">
                                <span className="text-[#22C55E]">▸</span>
                                <span className="text-[#E5E5E5]">2 Slots / Month</span>
                            </div>
                            <div className="hidden sm:block w-px h-4 bg-[#2A2A2A]" />
                            <div className="flex items-center gap-2">
                                <span className="text-[#22C55E]">▸</span>
                                <span className="text-[#E5E5E5]">Fixed Price</span>
                            </div>
                            <div className="hidden sm:block w-px h-4 bg-[#2A2A2A]" />
                            <div className="flex items-center gap-2">
                                <span className="text-[#E5E5E5]">Code Ownership</span>
                                <span className="text-[#6B7280]">•</span>
                                <span className="text-[#A1A1AA]">No Monthly Fees</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator - Clickable, scrolls to next section */}
            <motion.button
                className="absolute bottom-12 left-1/2 -translate-x-1/2 cursor-pointer hover:text-white transition-colors"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                onClick={() => {
                    const workSection = document.querySelector('section:nth-of-type(2)');
                    if (workSection) {
                        workSection.scrollIntoView({ behavior: 'smooth' });
                    } else {
                        window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
                    }
                }}
                aria-label="Scroll to next section"
            >
                <motion.div
                    className="flex flex-col items-center gap-2 text-[#6B7280] hover:text-white transition-colors"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                    <span className="text-xs font-mono">SCROLL</span>
                    <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                    </svg>
                </motion.div>
            </motion.button>
        </section>
    );
}
