"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="border-t border-[#1A1A1A] py-12 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Left */}
                    <div className="text-center md:text-left">
                        <Link href="/" className="font-mono text-white">
                            Velayon
                        </Link>
                        <p className="text-sm text-[#6B7280] mt-1">
                            Systems Engineer
                        </p>
                    </div>

                    {/* Center */}
                    <p className="text-xs text-[#6B7280]">
                        Built with precision.
                    </p>

                    {/* Right */}
                    <div className="flex items-center gap-6">
                        <span className="text-xs text-[#6B7280]">© 2025</span>
                        <motion.button
                            onClick={scrollToTop}
                            className="flex items-center gap-2 text-xs text-[#6B7280] hover:text-white transition-colors"
                            whileHover={{ y: -2 }}
                            whileTap={{ y: 0 }}
                        >
                            <span>Back to Top</span>
                            <svg
                                className="w-3 h-3"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                                />
                            </svg>
                        </motion.button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
