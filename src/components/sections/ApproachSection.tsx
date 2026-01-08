"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function ApproachSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="approach" className="section px-[clamp(1.25rem,8vw,4rem)]" ref={ref}>
            <div className="max-w-6xl mx-auto">
                {/* Section Label */}
                <motion.span
                    className="section-label block mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    &lt;03.APPROACH&gt;
                </motion.span>

                {/* Headline */}
                <motion.h2
                    className="text-headline text-white mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    Not Manual Coding.
                    <br />
                    <span className="text-[#A1A1AA]">Systematic Architecture.</span>
                </motion.h2>

                {/* Flow Diagram */}
                <motion.div
                    className="my-12 p-8 border border-[#2A2A2A] rounded-lg bg-[#0A0A0A]/50"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <svg
                        viewBox="0 0 600 180"
                        className="w-full max-w-2xl mx-auto"
                        fill="none"
                    >
                        {/* Nodes */}
                        <motion.g
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            {/* Problem Node */}
                            <rect x="40" y="40" width="100" height="50" rx="8" stroke="#333" strokeWidth="1" fill="#0A0A0A" />
                            <text x="90" y="70" textAnchor="middle" fill="#E5E5E5" fontSize="14" fontFamily="monospace">Problem</text>
                        </motion.g>

                        <motion.g
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            {/* Design Node */}
                            <rect x="250" y="40" width="100" height="50" rx="8" stroke="#333" strokeWidth="1" fill="#0A0A0A" />
                            <text x="300" y="70" textAnchor="middle" fill="#E5E5E5" fontSize="14" fontFamily="monospace">Design</text>
                        </motion.g>

                        <motion.g
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            {/* Deploy Node */}
                            <rect x="460" y="40" width="100" height="50" rx="8" stroke="#22C55E" strokeWidth="1" fill="#0A0A0A" />
                            <text x="510" y="70" textAnchor="middle" fill="#22C55E" fontSize="14" fontFamily="monospace">Deploy</text>
                        </motion.g>

                        {/* Connecting Lines */}
                        <motion.path
                            d="M140 65 L250 65"
                            stroke="#333"
                            strokeWidth="1"
                            initial={{ pathLength: 0 }}
                            animate={isInView ? { pathLength: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        />
                        <motion.path
                            d="M350 65 L460 65"
                            stroke="#333"
                            strokeWidth="1"
                            initial={{ pathLength: 0 }}
                            animate={isInView ? { pathLength: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.7 }}
                        />

                        {/* Arrows */}
                        <motion.polygon
                            points="245,65 235,60 235,70"
                            fill="#333"
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ duration: 0.3, delay: 0.7 }}
                        />
                        <motion.polygon
                            points="455,65 445,60 445,70"
                            fill="#333"
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ duration: 0.3, delay: 0.8 }}
                        />

                        {/* Agentic AI Engine - Center Box */}
                        <motion.g
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.8 }}
                        >
                            <rect x="225" y="110" width="150" height="45" rx="8" stroke="#F59E0B" strokeWidth="1" fill="#0A0A0A" />
                            <text x="300" y="138" textAnchor="middle" fill="#F59E0B" fontSize="12" fontFamily="monospace">Agentic AI Engine</text>

                            {/* Connection to Design */}
                            <line x1="300" y1="90" x2="300" y2="110" stroke="#F59E0B" strokeWidth="1" strokeDasharray="4 2" />
                        </motion.g>

                        {/* Feedback Loop Arrow */}
                        <motion.path
                            d="M510 90 L510 160 L90 160 L90 90"
                            stroke="#333"
                            strokeWidth="1"
                            strokeDasharray="4 2"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={isInView ? { pathLength: 1 } : {}}
                            transition={{ duration: 1, delay: 0.9 }}
                        />
                        <motion.text
                            x="300"
                            y="175"
                            textAnchor="middle"
                            fill="#6B7280"
                            fontSize="11"
                            fontFamily="monospace"
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ duration: 0.5, delay: 1.2 }}
                        >
                            Iterate
                        </motion.text>
                    </svg>
                </motion.div>

                {/* Comparison Table */}
                <motion.div
                    className="grid md:grid-cols-2 gap-8 mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <div className="border-t border-[#2A2A2A] pt-6">
                        <h3 className="font-mono text-sm text-[#6B7280] mb-4">Traditional Development</h3>
                        <ul className="space-y-3 text-[#A1A1AA]">
                            <li className="flex items-start gap-3">
                                <span className="text-[#6B7280]">─</span>
                                Weeks of implementation
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#6B7280]">─</span>
                                Manual debugging
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#6B7280]">─</span>
                                Single-track execution
                            </li>
                        </ul>
                    </div>

                    <div className="border-t border-[#22C55E] pt-6">
                        <h3 className="font-mono text-sm text-[#22C55E] mb-4">Agentic Development</h3>
                        <ul className="space-y-3 text-[#E5E5E5]">
                            <li className="flex items-start gap-3">
                                <span className="text-[#22C55E]">▸</span>
                                Hours of architecture
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#22C55E]">▸</span>
                                Self-correcting systems
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#22C55E]">▸</span>
                                Parallel exploration
                            </li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
