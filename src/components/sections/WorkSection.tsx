"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { TiltCard } from "@/components";

const demos = [
    {
        title: "Velayon Admin",
        slug: "admin",
        url: "https://admin.velayon.com",
        label: "The Central Nervous System",
        description: "Unified operations dashboard. Customer data, pipeline metrics, system health. One login, zero context switching.",
        tech: ["Next.js", "Postgres", "Redis"],
        metric: "Status: ONLINE",
        latency: "<100ms",
        status: "LIVE SYSTEM",
        version: "v1.0.0"
    },
    {
        title: "Velayon Ops",
        slug: "ops",
        url: "https://ops.velayon.com",
        label: "Autonomous Fulfillment Engine",
        description: "End-to-end service delivery automation. From intake to completion, zero manual handoffs. Handles 40+ tasks/day.",
        tech: ["Temporal", "FastAPI", "Python"],
        metric: "Status: ONLINE",
        latency: "99.7% uptime",
        status: "LIVE SYSTEM",
        version: "v1.0.0"
    },
    {
        title: "Velayon Copilot",
        slug: "copilot",
        url: "https://copilot.velayon.com",
        label: "Context-Aware Intelligence",
        description: "RAG system trained on 200+ internal docs. Embedded knowledge base. Answers team questions without Slack threads.",
        tech: ["LangChain", "Pinecone", "OpenAI"],
        metric: "Status: ONLINE",
        latency: "1.8s avg",
        status: "LIVE SYSTEM",
        version: "v1.0.0"
    },
    {
        title: "Velayon MVP",
        slug: "mvp",
        url: "https://mvp.velayon.com",
        label: "Rapid Validation Framework",
        description: "Full SaaS scaffold. Auth, billing, admin panel, deployment pipeline. Built in 48 hours to test market hypotheses fast.",
        tech: ["Supabase", "Stripe", "Vercel"],
        metric: "Status: ONLINE",
        latency: "Production-ready",
        status: "LIVE SYSTEM",
        version: "v1.0.0"
    }
];

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
                    &lt;02.LIVE_PROOF&gt;
                </motion.span>

                {/* Headline */}
                <motion.div
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <h2 className="text-headline text-white mb-4">
                        Reference Architectures
                    </h2>
                    <p className="text-[#A1A1AA] max-w-2xl text-lg">
                        Don't trust my portfolio. <span className="text-white">Audit my code.</span>
                        <br />
                        These aren't mockups. These are live production systems I built for my own operations.
                    </p>
                </motion.div>

                {/* Project Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {demos.map((demo, index) => (
                        <motion.div
                            key={demo.slug}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                        >
                            <a href={demo.url} target="_blank" rel="noopener noreferrer" className="block group h-full">
                                <TiltCard className="h-full" tiltMaxAngle={5}>
                                    <div className="card card-glow hover-lift p-6 h-full border border-[#2A2A2A] bg-[#0A0A0A]/50">
                                        {/* Header with Date/Status */}
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center gap-2">
                                                <span className="w-2 h-2 rounded-full bg-[#22C55E] pulse-glow" />
                                                <span className="text-[#22C55E] text-xs font-mono font-bold tracking-wider">{demo.status}</span>
                                            </div>
                                            <span className="text-[#6B7280] text-xs font-mono">{demo.version}</span>
                                        </div>

                                        {/* Label */}
                                        <p className="text-sm text-[#F59E0B] mb-3 font-medium">
                                            {demo.label}
                                        </p>

                                        {/* Title */}
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="text-xl font-bold text-white group-hover:text-[#22C55E] transition-colors font-mono">
                                                {demo.title}
                                            </h3>
                                            <span className="text-[#6B7280] group-hover:text-white transition-colors">↗</span>
                                        </div>

                                        {/* Description */}
                                        <p className="text-sm text-[#A1A1AA] mb-6 leading-relaxed">
                                            {demo.description}
                                        </p>

                                        {/* Tech Stack */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {demo.tech.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="text-[10px] font-mono px-2 py-1 bg-[#111111] border border-[#2A2A2A] rounded text-[#888888]"
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
                                                LATENCY: {demo.latency}
                                            </span>
                                            <span className="text-xs font-mono text-[#22C55E]">
                                                {demo.metric}
                                            </span>
                                        </div>
                                    </div>
                                </TiltCard>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

