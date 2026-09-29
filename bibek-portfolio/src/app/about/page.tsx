"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GridBackground, Navigation, Footer, SpotlightCard, MagneticButton } from "@/components";

// Stats - moved from Contact page
const stats = [
    { value: "1+", label: "Year Building", detail: "Systems engineering" },
    { value: "5", label: "Systems Built", detail: "End-to-end solutions" },
    { value: "UTC+5:45", label: "Timezone", detail: "Nepal (flexible overlap)" },
    { value: "∞", label: "Platforms", detail: "Web, Mobile, Desktop, IoT" }
];

// What I Build - moved from Contact page
const capabilities = [
    {
        icon: "🏗️",
        title: "Complete Systems",
        description: "End-to-end business solutions with backends, frontends, databases, and deployment"
    },
    {
        icon: "📱",
        title: "Multi-Platform Apps",
        description: "Web, iOS, Android, Windows, macOS, Linux—one codebase or native"
    },
    {
        icon: "🤖",
        title: "AI-Powered Solutions",
        description: "Face recognition, automation, ML pipelines—smart systems that work"
    }
];

// Why Work With Me - moved from Contact page
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

export default function AboutPage() {
    return (
        <GridBackground>
            <Navigation />
            <main className="min-h-screen pt-24 pb-16">
                {/* Hero section */}
                <div className="px-[clamp(1.25rem,8vw,4rem)]">
                    <div className="max-w-6xl mx-auto mb-12">
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
                                About Bibek Kumar Thagunna
                            </h1>
                            <p className="text-xl text-[#A1A1AA] max-w-2xl">
                                Systems Engineer. Founder. Builder.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Personal Story */}
                <div className="px-[clamp(1.25rem,8vw,4rem)]">
                    <div className="max-w-6xl mx-auto mb-16">
                        <motion.div
                            className="p-8 border border-[#2A2A2A] rounded-lg bg-[#0A0A0A]/50"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <h2 className="text-2xl font-bold text-white mb-6">Who I Am & How I Got Here</h2>
                            <div className="space-y-4 text-[#A1A1AA] leading-relaxed">
                                <p>
                                    I'm Bibek Kumar Thagunna, and I need to be honest with you: <span className="text-white font-medium">I don't write code</span>. Not a single line.
                                </p>
                                <p>
                                    Instead, I <span className="text-white font-medium">orchestrate AI agents</span> to build complete, production-grade systems. While most developers are still manually coding every function, every API endpoint, every component—I'm treating AI as a development team. One agent handles the frontend, another the backend, another the database schema. I design the architecture, define the requirements, and let them build.
                                </p>
                                <p>
                                    The result? I've built <span className="text-[#22C55E] font-medium">5 fully functional systems</span> in the time it would take a traditional developer to finish one:
                                </p>
                                <ul className="list-none space-y-2 pl-4">
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#22C55E] mt-1">▸</span>
                                        <span><span className="text-white font-medium">Attendify</span> - QR + GPS attendance system with real-time analytics</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#22C55E] mt-1">▸</span>
                                        <span><span className="text-white font-medium">Hotel Management Platform</span> - Multi-platform (web, iOS, Android, desktop) with Nepal tax compliance</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#22C55E] mt-1">▸</span>
                                        <span><span className="text-white font-medium">Face Recognition Dashboard</span> - CCTV-integrated, 30fps real-time processing</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#22C55E] mt-1">▸</span>
                                        <span><span className="text-white font-medium">Expense Tracker</span> - SMS parsing with 95% accuracy, offline-first</span>
                                    </li>
                                </ul>
                                <p>
                                    Here's what I need you to understand: <span className="text-white font-medium">These are deployed, functional systems</span>. You can test them right now at <span className="text-[#22C55E]">attendify.velayon.com</span> and others. They work. They're production-ready.
                                </p>
                                <p>
                                    But I haven't sold them yet. <span className="text-[#A1A1AA]">No active users. No paying customers. Just deployed demos proving what's possible.</span>
                                </p>
                                <p>
                                    Why am I telling you this? Because <span className="text-white font-medium">I believe the next generation of software development doesn't look like manual coding</span>. It looks like what I'm doing: systems thinking + AI execution. And I want to work with companies who see that future too.
                                </p>
                                <p className="text-white font-medium">
                                    That's <span className="text-[#F59E0B]">Velayon</span>: Not manual coding. Systematic architecture with AI orchestration. And I'm looking for the right opportunity to prove it at scale.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="px-[clamp(1.25rem,8vw,4rem)]">
                    <div className="max-w-6xl mx-auto mb-16">
                        <motion.div
                            className="grid grid-cols-2 md:grid-cols-4 gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            {stats.map((stat) => (
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
                    </div>
                </div>

                {/* What I Build */}
                <div className="px-[clamp(1.25rem,8vw,4rem)]">
                    <div className="max-w-6xl mx-auto mb-16">
                        <motion.div
                            className="p-6 border border-[#2A2A2A] rounded-lg bg-[#0A0A0A]/50"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <h3 className="text-lg font-semibold text-white mb-4">What I Can Build For You</h3>
                            <div className="grid md:grid-cols-3 gap-6">
                                {capabilities.map((capability) => (
                                    <div key={capability.title} className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <span className="text-[#22C55E] text-lg">{capability.icon}</span>
                                            <span className="text-white font-medium">{capability.title}</span>
                                        </div>
                                        <p className="text-sm text-[#A1A1AA] pl-6">
                                            {capability.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Why Work With Me */}
                <div className="px-[clamp(1.25rem,8vw,4rem)]">
                    <div className="max-w-6xl mx-auto mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.35 }}
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
                                        animate={{ opacity: 1, y: 0 }}
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
                    </div>
                </div>

                {/* Professional Details */}
                <div className="px-[clamp(1.25rem,8vw,4rem)]">
                    <div className="max-w-6xl mx-auto mb-16">
                        <motion.div
                            className="space-y-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.45 }}
                        >
                            {/* Rate Card */}
                            <div className="p-6 border border-[#F59E0B]/30 rounded-lg bg-[#F59E0B]/5">
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
                            </div>

                            {/* Location & Availability */}
                            <div className="p-6 border border-[#22C55E]/30 rounded-lg bg-[#22C55E]/5">
                                <h3 className="text-white font-medium mb-3">📍 Location & Availability</h3>
                                <div className="grid md:grid-cols-2 gap-4 text-sm">
                                    <div>
                                        <p className="text-[#E5E5E5] mb-1">🌍 <span className="font-medium">Based in:</span> Kathmandu, Nepal</p>
                                        <p className="text-[#E5E5E5] mb-1">🕐 <span className="font-medium">Timezone:</span> UTC+5:45</p>
                                        <p className="text-[#E5E5E5]">⏰ <span className="font-medium">US Overlap:</span> 4-6 hours with EST/PST</p>
                                    </div>
                                    <div>
                                        <p className="text-[#E5E5E5] mb-1">💬 <span className="font-medium">Languages:</span> English (Fluent), Nepali (Native)</p>
                                        <p className="text-[#22C55E] font-medium mt-2">✅ Currently seeking remote opportunities</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* My Philosophy - Mini Velayon Section */}
                <div className="px-[clamp(1.25rem,8vw,4rem)]">
                    <div className="max-w-6xl mx-auto mb-16">
                        <motion.div
                            className="p-8 border border-[#2A2A2A] rounded-lg bg-[#0A0A0A]/50"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            <h3 className="text-xl font-bold text-white mb-4">My Philosophy</h3>
                            <p className="text-2xl text-white mb-4">
                                Not Manual Coding.
                                <br />
                                <span className="text-[#A1A1AA]">Systematic Architecture.</span>
                            </p>
                            <p className="text-[#A1A1AA] leading-relaxed mb-4">
                                I architect systems first, understanding the problem domain, mapping data flows, and designing failure modes. Then I leverage agentic AI to handle implementation while maintaining architectural oversight. This isn't "vibe coding"—it's systematic engineering at 10x velocity.
                            </p>
                            <Link
                                href="https://velayon.com"
                                target="_blank"
                                className="text-[#22C55E] hover:text-[#16A34A] transition-colors text-sm font-mono"
                            >
                                Learn more about Velayon →
                            </Link>
                        </motion.div>
                    </div>
                </div>

                {/* CTA */}
                <div className="px-[clamp(1.25rem,8vw,4rem)]">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            className="text-center p-8 border border-[#2A2A2A] rounded-lg bg-[#0A0A0A]/30"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.55 }}
                        >
                            <h3 className="text-2xl font-bold text-white mb-4">Want to work together?</h3>
                            <p className="text-[#A1A1AA] mb-6">
                                Let's build something exceptional. I'm available for contracts and full-time roles.
                            </p>
                            <MagneticButton
                                href="/contact"
                                className="btn-primary inline-block"
                            >
                                Get In Touch
                            </MagneticButton>
                        </motion.div>
                    </div>
                </div>
            </main>
            <Footer />
        </GridBackground>
    );
}
