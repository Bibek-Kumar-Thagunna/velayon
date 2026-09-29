"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GridBackground, Navigation, Footer, TiltCard, SpotlightCard } from "@/components";
import { projects } from "@/lib/data";

export default function WorkPage() {
    return (
        <GridBackground>
            <Navigation />

            <main className="min-h-screen pt-32 pb-16 px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Back Navigation */}
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-[#6B7280] hover:text-white mb-12 transition-colors font-mono text-sm group"
                    >
                        <span className="group-hover:-translate-x-1 transition-transform">←</span>
                        <span>Home</span>
                    </Link>

                    {/* Header */}
                    <motion.div
                        className="mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="section-label block mb-4">
                            &lt;02.WORK&gt;
                        </span>
                        <h1 className="text-display text-white mb-6">
                            Deployed Demos
                        </h1>
                        <p className="text-xl text-[#A1A1AA] max-w-2xl">
                            Production-ready systems built using AI orchestration. <span className="text-white">Live and functional</span>, available for testing. No active users yet, but fully deployed and operational.
                        </p>
                    </motion.div>

                    {/* Projects Grid */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.slug}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Link href={`/work/${project.slug}`} className="block group h-full">
                                    <TiltCard className="h-full" tiltMaxAngle={5}>
                                        <SpotlightCard
                                            className="h-full border border-[#2A2A2A] rounded-lg bg-[#0A0A0A]/50 group-hover:border-[#333333] transition-colors"
                                            spotlightColor="rgba(34, 197, 94, 0.15)"
                                        >
                                            <div className="card-content p-8 h-full flex flex-col">
                                                <div className="flex items-center justify-between mb-6">
                                                    <span className={`px-2 py-1 rounded text-xs font-mono font-medium ${project.status === "Live"
                                                        ? "bg-[#22C55E]/10 text-[#22C55E]"
                                                        : "bg-[#F59E0B]/10 text-[#F59E0B]"
                                                        }`}>
                                                        {project.status}
                                                    </span>
                                                    <span className="text-[#6B7280] text-xs font-mono">2025-2026</span>
                                                </div>

                                                <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-[#22C55E] transition-colors">
                                                    {project.title}
                                                </h2>

                                                <p className="text-[#A1A1AA] mb-6 line-clamp-2 flex-grow">
                                                    {project.description}
                                                </p>

                                                <div className="flex flex-wrap gap-2 mb-6">
                                                    {project.tech.map((tech) => (
                                                        <span
                                                            key={tech}
                                                            className="text-xs font-mono px-2 py-1 bg-[#111111] border border-[#2A2A2A] rounded text-[#6B7280]"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>

                                                <div className="flex items-center gap-2 text-sm text-[#A1A1AA] font-mono group-hover:text-white transition-colors mt-auto">
                                                    <span>View Case Study</span>
                                                    <span className="transition-transform group-hover:translate-x-1">→</span>
                                                </div>
                                            </div>
                                        </SpotlightCard>
                                    </TiltCard>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </GridBackground>
    );
}
