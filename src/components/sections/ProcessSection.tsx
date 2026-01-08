"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const processSteps = [
    {
        number: "01",
        title: "Discovery",
        description: "Requirements \u2192 Architecture Map",
        details: "I map requirements to system boundaries, identify failure modes, and establish success metrics before writing any code.",
    },
    {
        number: "02",
        title: "Design",
        description: "System Diagram \u2192 Database Schema",
        details: "I architect data flows, API contracts, and integration points. Every decision documented and validated.",
    },
    {
        number: "03",
        title: "Implementation",
        description: "Agentic Tooling \u2192 10x Velocity",
        details: "I orchestrate AI agents for implementation while maintaining architectural oversight and edge case coverage.",
    },
    {
        number: "04",
        title: "Deployment",
        description: "CI/CD \u2192 Monitoring Setup",
        details: "Every system ships production-ready: automated deployment, health checks, logging, and alerting configured.",
    },
];

export function ProcessSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="section px-[clamp(1.25rem,8vw,4rem)] bg-[#0A0A0A]/30" ref={ref}>
            <div className="max-w-6xl mx-auto">
                {/* Section Label */}
                <motion.span
                    className="section-label block mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    &lt;04.WORKFLOW&gt;
                </motion.span>

                {/* Headline */}
                <motion.h2
                    className="text-headline text-white mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    Production Systems,
                    <br />
                    <span className="text-[#A1A1AA]">Not Prototypes</span>
                </motion.h2>

                {/* Process Steps */}
                <div className="space-y-8">
                    {processSteps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            className="relative"
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                        >
                            <div className="flex items-start gap-6">
                                {/* Step Number */}
                                <motion.div
                                    className="flex-shrink-0 w-12 h-12 border border-[#333333] rounded-lg flex items-center justify-center bg-[#0A0A0A]"
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                                >
                                    <span className="font-mono text-sm text-[#A1A1AA]">{step.number}</span>
                                </motion.div>

                                {/* Content */}
                                <div className="flex-1 pt-1">
                                    <h3 className="font-mono text-sm font-medium text-white mb-1 tracking-wide">
                                        {step.title}
                                    </h3>
                                    <p className="text-[#22C55E] text-lg mb-2">{step.description}</p>
                                    <p className="text-[#A1A1AA]">{step.details}</p>

                                    {/* Divider */}
                                    <motion.div
                                        className="h-px bg-[#1A1A1A] mt-8"
                                        initial={{ scaleX: 0, originX: 0 }}
                                        animate={isInView ? { scaleX: 1 } : {}}
                                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
