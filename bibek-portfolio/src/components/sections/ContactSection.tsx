"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MagneticButton, AvailabilityStatus, SpotlightCard } from "@/components";

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
                    Let's Build Together
                </motion.h2>

                {/* Value proposition */}
                <motion.p
                    className="text-xl text-[#A1A1AA] max-w-2xl mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.15 }}
                >
                    Ready for your next project or role. <span className="text-white">I respond within 24 hours</span> and can start immediately.
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

                {/* Quick Credibility */}
                <motion.div
                    className="mb-12 p-4 border border-[#2A2A2A] rounded-lg bg-[#0A0A0A]/30"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.25 }}
                >
                    <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
                        <div className="flex items-center gap-2">
                            <span className="text-[#22C55E]">✓</span>
                            <span className="text-[#E5E5E5]">5 Production Systems Built</span>
                        </div>
                        <div className="hidden sm:block w-px h-4 bg-[#2A2A2A]" />
                        <div className="flex items-center gap-2">
                            <span className="text-[#22C55E]">✓</span>
                            <span className="text-[#E5E5E5]">Nepal → Global Remote (UTC+5:45)</span>
                        </div>
                        <div className="hidden sm:block w-px h-4 bg-[#2A2A2A]" />
                        <div className="flex items-center gap-2">
                            <span className="text-[#22C55E]">✓</span>
                            <span className="text-[#E5E5E5]">Available Now</span>
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

                {/* What Happens Next */}
                <motion.div
                    className="mt-12 p-6 border border-[#2A2A2A] rounded-lg bg-[#0A0A0A]/30"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.65 }}
                >
                    <h3 className="text-white font-medium mb-4">What Happens Next</h3>
                    <div className="grid md:grid-cols-2 gap-4 text-sm text-[#A1A1AA]">
                        <div className="flex items-start gap-3">
                            <span className="text-[#22C55E] mt-0.5">✓</span>
                            <div>
                                <span className="text-white font-medium">I respond within 24 hours</span>
                                <p className="text-xs mt-1">Usually much faster during business hours</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-[#22C55E] mt-0.5">✓</span>
                            <div>
                                <span className="text-white font-medium">We schedule a discovery call</span>
                                <p className="text-xs mt-1">15-30 minutes to discuss your project</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-[#22C55E] mt-0.5">✓</span>
                            <div>
                                <span className="text-white font-medium">I send a proposal within 48 hours</span>
                                <p className="text-xs mt-1">Timeline, scope, and pricing details</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-[#22C55E] mt-0.5">✓</span>
                            <div>
                                <span className="text-white font-medium">We can start within 1 week</span>
                                <p className="text-xs mt-1">Or on your preferred timeline</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Footer Note */}
                <motion.div
                    className="mt-8 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.7 }}
                >
                    <p className="text-[#6B7280] text-sm">
                        Based in Nepal 🇳🇵 • Remote-first • English Fluent
                        <br />
                        <span className="text-[#A1A1AA]">Timezone: UTC+5:45 (4-6hr overlap with US)</span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
