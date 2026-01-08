"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { TiltCard } from "@/components";

import { featuredProjects } from "@/lib/data";

export function WorkSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="section px-[clamp(1.25rem,8vw,4rem)]" ref={ref}>
            <div className="max-w-6xl mx-auto">
                {/* Section Label */}
                <motion.span
                    className="section-label block mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    &lt;02.WORK&gt;
                </motion.span>

                {/* Headline */}
                <motion.h2
                    className="text-headline text-white mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    Selected Systems
                </motion.h2>

                {/* Project Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {featuredProjects.map((project, index) => (
                        <motion.div
                            key={project.slug}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                        >
                            <Link href={`/work/${project.slug}`} className="block group h-full">
                                <TiltCard className="h-full" tiltMaxAngle={5}>
                                    <div className="card card-glow hover-lift p-6 h-full">
                                        {/* Header with Date/Status */}
                                        <div className="flex items-center justify-between mb-4">
                                            <span className={`w-2 h-2 rounded-full ${project.status === "Live"
                                                ? "bg-[#22C55E] pulse-glow"
                                                : "bg-[#F59E0B]"
                                                }`} />
                                            <span className="text-[#6B7280] text-xs font-mono">2025-2026</span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#22C55E] transition-colors">
                                            {project.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-sm text-[#A1A1AA] mb-4">
                                            {project.description}
                                        </p>

                                        {/* Tech Stack */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tech.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="text-xs font-mono px-2 py-1 bg-[#111111] border border-[#2A2A2A] rounded text-[#6B7280]"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Divider */}
                                        <div className="h-px bg-[#1A1A1A] mb-4" />

                                        {/* Footer */}
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs font-mono text-[#6B7280]">
                                                {project.status}
                                            </span>
                                            {project.metric && (
                                                <span className="text-xs font-mono text-[#A1A1AA]">
                                                    {project.metric}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </TiltCard>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* View All Link */}
                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <Link
                        href="/work"
                        className="inline-flex items-center gap-2 text-[#A1A1AA] hover:text-white transition-colors group"
                    >
                        <span>View All Projects</span>
                        <span className="transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
