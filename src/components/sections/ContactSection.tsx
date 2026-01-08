"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MagneticButton, AvailabilityStatus, SpotlightCard } from "@/components";

// Honest stats - emphasizing systems engineering capability
const stats = [
    { value: "1+", label: "Year Building", detail: "Systems engineering" },
    { value: "5", label: "Systems Built", detail: "End-to-end solutions" },
    { value: "UTC+5:45", label: "Timezone", detail: "Nepal (flexible overlap)" },
    { value: "∞", label: "Platforms", detail: "Web, Mobile, Desktop, IoT" }
];

// Key strengths - Systems Engineer positioning
const strengths = [
    {
        title: "Complete Systems Builder",
        description: "Not just apps—full systems. CCTV face recognition for attendance, hotel management, location-based anti-proxy systems. End-to-end architecture to deployment.",
        icon: "🏗️"
    },
    {
        title: "Platform Agnostic",
        description: "Web apps, mobile apps, desktop (EXE, .deb, macOS), embedded systems—whatever the problem needs. I build solutions, not just products.",
        icon: "🔧"
    },
    {
        title: "AI-Native Engineering",
        description: "Leverage agentic AI for 10x productivity. I can build anything faster: ML systems, automation pipelines, intelligent backends—no limitations.",
        icon: "🤖"
    },
    {
        title: "US Timezone Flexibility",
        description: "Flexible schedule with 4-6 hours overlap with EST/PST. Available for standups, syncs, and async communication.",
        icon: "🌍"
    }
];

// Social/Professional links - prioritized for recruiters
const professionalLinks = [
    {
        platform: "LinkedIn",
        handle: "bibek-thagunna",
        label: "Professional Profile",
        url: "https://linkedin.com/in/bibek-thagunna",
        color: "#0077B5",
        icon: "in",
        priority: true
    },
    {
        platform: "GitHub",
        handle: "velayon",
        label: "Open Source & Projects",
        url: "https://github.com/velayon",
        color: "#ffffff",
        icon: "💻",
        priority: true
    },
    {
        platform: "X / Twitter",
        handle: "@velayon",
        label: "Tech Thoughts",
        url: "https://x.com/velayon",
        color: "#1DA1F2",
        icon: "𝕏",
        priority: false
    },
    {
        platform: "YouTube",
        handle: "@velayon",
        label: "Tech Demos",
        url: "https://youtube.com/@velayon",
        color: "#FF0000",
        icon: "▶",
        priority: false
    }
];

export function ContactSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("bibek@velayon.com");
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

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
                    &lt;06.CONNECT&gt;
                </motion.span>

                {/* Compelling Headline */}
                <motion.h2
                    className="text-display text-white mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    I Build Systems
                </motion.h2>

                {/* Value proposition - Systems Engineer */}
                <motion.p
                    className="text-xl text-[#A1A1AA] max-w-2xl mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.15 }}
                >
                    Not just apps—<span className="text-white">complete end-to-end solutions</span>.
                    Face recognition for CCTV, smart attendance systems, hotel management—web, mobile, desktop, or IoT.
                    <span className="text-[#22C55E]"> Any platform. Any problem.</span>
                </motion.p>

                {/* Availability Status */}
                <motion.div
                    className="mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <AvailabilityStatus
                        status="available"
                        message="Actively seeking remote contracts & full-time roles"
                    />
                </motion.div>

                {/* Quick Stats Grid */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.25 }}
                >
                    {stats.map((stat, idx) => (
                        <SpotlightCard
                            key={stat.label}
                            className="bg-[#0A0A0A] border border-[#1A1A1A] hover:border-[#333] transition-colors"
                            spotlightColor="rgba(34, 197, 94, 0.1)"
                        >
                            <div className="p-4 text-center">
                                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                                    {stat.value}
                                </div>
                                <div className="text-sm font-medium text-[#E5E5E5]">
                                    {stat.label}
                                </div>
                                <div className="text-xs text-[#6B7280] mt-1">
                                    {stat.detail}
                                </div>
                            </div>
                        </SpotlightCard>
                    ))}
                </motion.div>

                {/* What I Build */}
                <motion.div
                    className="mb-12 p-6 border border-[#2A2A2A] rounded-lg bg-[#0A0A0A]/50"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <h3 className="text-lg font-semibold text-white mb-4">What I Can Build For You</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <span className="text-[#22C55E] text-lg">🏗️</span>
                                <span className="text-white font-medium">Complete Systems</span>
                            </div>
                            <p className="text-sm text-[#A1A1AA] pl-6">
                                End-to-end business solutions with backends, frontends, databases, and deployment
                            </p>
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <span className="text-[#22C55E] text-lg">📱</span>
                                <span className="text-white font-medium">Multi-Platform Apps</span>
                            </div>
                            <p className="text-sm text-[#A1A1AA] pl-6">
                                Web, iOS, Android, Windows, macOS, Linux—one codebase or native
                            </p>
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <span className="text-[#22C55E] text-lg">🤖</span>
                                <span className="text-white font-medium">AI-Powered Solutions</span>
                            </div>
                            <p className="text-sm text-[#A1A1AA] pl-6">
                                Face recognition, automation, ML pipelines—smart systems that work
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Why Choose Me - Strengths for Remote Work */}
                <motion.div
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.35 }}
                >
                    <h3 className="text-sm font-mono text-[#6B7280] mb-6 uppercase tracking-wider">
                        // Why Work With Me
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        {strengths.map((strength, idx) => (
                            <motion.div
                                key={strength.title}
                                className="p-5 border border-[#1A1A1A] rounded-lg hover:border-[#333] transition-colors bg-[#0A0A0A]/30"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.4, delay: 0.4 + idx * 0.1 }}
                            >
                                <div className="flex items-start gap-4">
                                    <span className="text-2xl">{strength.icon}</span>
                                    <div>
                                        <h4 className="text-white font-medium mb-1">{strength.title}</h4>
                                        <p className="text-sm text-[#A1A1AA]">{strength.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Rate Card - Transparent Pricing */}
                <motion.div
                    className="mb-12 p-6 border border-[#F59E0B]/30 rounded-lg bg-[#F59E0B]/5"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.45 }}
                >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                            <h3 className="text-white font-medium mb-2 flex items-center gap-2">
                                <span>💰</span>
                                <span>Competitive Rates</span>
                            </h3>
                            <div className="space-y-1 text-sm">
                                <p className="text-[#E5E5E5]">
                                    <span className="text-[#F59E0B] font-semibold">Contract:</span> $15-25/hour depending on project scope
                                </p>
                                <p className="text-[#E5E5E5]">
                                    <span className="text-[#F59E0B] font-semibold">Full-time:</span> $32,000/year for the right opportunity
                                </p>
                                <p className="text-[#A1A1AA] text-xs mt-2">
                                    Open to negotiation • Quality work at competitive rates
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* CTA Buttons - Primary Actions */}
                <motion.div
                    className="flex flex-wrap gap-4 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <MagneticButton
                        href="mailto:bibek@velayon.com?subject=Work Opportunity&body=Hi Bibek,%0D%0A%0D%0AI saw your portfolio and would like to discuss a potential project/role..."
                        className="btn-primary inline-flex items-center gap-2"
                    >
                        <span>📧</span>
                        <span>Email Me Directly</span>
                    </MagneticButton>
                    <MagneticButton
                        href="https://linkedin.com/in/bibek-thagunna"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary inline-flex items-center gap-2"
                    >
                        <span>in</span>
                        <span>Connect on LinkedIn</span>
                    </MagneticButton>
                    <MagneticButton
                        onClick={handleCopy}
                        className="btn-secondary inline-block cursor-pointer min-w-[180px] text-center"
                    >
                        {isCopied ? "✅ Copied!" : "📋 Copy Email"}
                    </MagneticButton>
                </motion.div>

                {/* Resume Download Section */}
                <motion.div
                    className="p-6 border border-[#22C55E]/30 rounded-lg bg-[#22C55E]/5 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.55 }}
                >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                            <h3 className="text-white font-medium mb-1">📄 Resume / CV</h3>
                            <p className="text-sm text-[#A1A1AA]">
                                Download my resume with skills, projects, and education details.
                            </p>
                        </div>
                        <MagneticButton
                            href="/resume.pdf"
                            target="_blank"
                            className="btn-primary inline-flex items-center gap-2 whitespace-nowrap"
                        >
                            <span>↓</span>
                            <span>Download Resume</span>
                        </MagneticButton>
                    </div>
                </motion.div>

                {/* Professional Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <h3 className="text-sm font-mono text-[#6B7280] mb-4 uppercase tracking-wider">
                        // Find Me Online
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {professionalLinks.map((link) => (
                            <a
                                key={link.platform}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block group"
                            >
                                <SpotlightCard
                                    className={`h-full bg-[#0A0A0A] border ${link.priority ? 'border-[#333]' : 'border-[#1A1A1A]'} group-hover:border-[#555] transition-colors`}
                                    spotlightColor={link.color + "20"}
                                >
                                    <div className="p-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-xl">{link.icon}</span>
                                            <span className="text-[10px] font-mono opacity-50 uppercase tracking-wider">
                                                {link.platform}
                                            </span>
                                        </div>
                                        <div
                                            className="text-white font-medium group-hover:text-[var(--hover-color)] transition-colors"
                                            style={{ "--hover-color": link.color } as React.CSSProperties}
                                        >
                                            {link.handle}
                                        </div>
                                        <div className="text-xs text-[#6B7280] mt-1">{link.label}</div>
                                    </div>
                                </SpotlightCard>
                            </a>
                        ))}
                    </div>
                </motion.div>

                {/* Final Personal Touch */}
                <motion.div
                    className="mt-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.65 }}
                >
                    <p className="text-[#6B7280] text-sm">
                        Based in Nepal 🇳🇵 • Ready for global remote work •
                        <span className="text-[#A1A1AA]"> English fluent</span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
