"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GridBackground, Navigation, Footer, ApproachSection } from "@/components";

export default function AboutPage() {
    return (
        <GridBackground>
            <Navigation />
            {/* Remove px padding from main - let sections handle their own padding */}
            <main className="min-h-screen pt-24 pb-16">
                {/* Hero section with same padding as ApproachSection */}
                <div className="px-[clamp(1.25rem,8vw,4rem)]">
                    <div className="max-w-6xl mx-auto mb-8">
                        {/* Back Navigation */}
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-[#6B7280] hover:text-white mb-8 transition-colors font-mono text-sm group"
                        >
                            <span className="group-hover:-translate-x-1 transition-transform">←</span>
                            <span>Home</span>
                        </Link>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="section-label block mb-4">
                                &lt;01.ABOUT&gt;
                            </span>
                            <h1 className="text-display text-white mb-6">
                                About Velayon
                            </h1>
                            <p className="text-xl text-[#A1A1AA] max-w-2xl">
                                Bridging the gap between traditional systems engineering and the new age of Agentic AI.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* ApproachSection - already has its own px padding */}
                <div className="section-no-top-padding">
                    <ApproachSection />
                </div>

                {/* Additional context - same padding as other sections */}
                <div className="px-[clamp(1.25rem,8vw,4rem)]">
                    <div className="max-w-6xl mx-auto mt-16">
                        <div className="p-8 border border-[#2A2A2A] rounded-lg bg-[#0A0A0A]/50">
                            <h3 className="text-xl font-bold text-white mb-4">Background</h3>
                            <p className="text-[#A1A1AA] leading-relaxed mb-4">
                                Velayon is the engineering alias of Bibek Kumar Thagunna. With a focus on high-performance backends,
                                cross-platform applications (Flutter/React), and AI-native workflows, I help founders and companies
                                ship production-grade software faster.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </GridBackground>
    );
}
