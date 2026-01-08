"use client";

import Link from "next/link";
import { GridBackground } from "../../components/GridBackground";
import { motion } from "framer-motion";

const videos = [
    {
        category: "Product Demos",
        videos: [
            {
                title: "Attendify Complete Walkthrough",
                description: "Full demo of the attendance tracking system - QR code generation, student check-in, and teacher dashboard.",
                duration: "4:32",
                loomId: "example1",
                thumbnail: null,
            },
            {
                title: "Hotel Management System Overview",
                description: "Multi-platform hotel operations - billing, room management, and tax handling for Nepal market.",
                duration: "6:15",
                loomId: "example2",
                thumbnail: null,
            },
            {
                title: "Expense Tracker Auto-Capture Demo",
                description: "See how the app automatically parses SMS and categorizes transactions with zero manual entry.",
                duration: "3:20",
                loomId: "example3",
                thumbnail: null,
            },
        ],
    },
    {
        category: "Feature Highlights",
        videos: [
            {
                title: "Real-time Face Recognition at 30fps",
                description: "Live demonstration of multi-person identification with confidence scoring.",
                duration: "2:45",
                loomId: "example4",
                thumbnail: null,
            },
            {
                title: "Location-Based Attendance Verification",
                description: "How Attendify prevents proxy attendance with geofencing.",
                duration: "1:50",
                loomId: "example5",
                thumbnail: null,
            },
        ],
    },
    {
        category: "Tutorials",
        videos: [
            {
                title: "Setting up Attendify for Your Institution",
                description: "Step-by-step guide: from installation to first QR code scan.",
                duration: "8:30",
                loomId: "example6",
                thumbnail: null,
            },
            {
                title: "Customizing Hotel System for Your Property",
                description: "Configure rooms, billing rules, and tax compliance.",
                duration: "10:15",
                loomId: "example7",
                thumbnail: null,
            },
        ],
    },
];

export default function VideosPage() {
    return (
        <GridBackground suppressHydrationWarning>
            <div className="min-h-screen text-white">
                {/* Navigation */}
                <nav className="fixed top-0 w-full z-50 bg-[#050505]/80 backdrop-blur-md border-b border-[#2A2A2A]">
                    <div className="max-w-7xl mx-auto px-6 py-4">
                        <div className="flex items-center justify-between">
                            <Link href="/" className="text-xl font-bold tracking-tight hover:text-[#22C55E] transition-colors">
                                VELAYON
                            </Link>
                            <div className="flex items-center gap-8">
                                <Link href="/products" className="text-sm text-[#A1A1AA] hover:text-white transition-colors">Products</Link>
                                <Link href="/apps" className="text-sm text-[#A1A1AA] hover:text-white transition-colors">Apps</Link>
                                <Link href="/videos" className="text-sm text-white">Demos</Link>
                                <Link href="/notes" className="text-sm text-[#A1A1AA] hover:text-white transition-colors">Blog</Link>
                                <Link href="/#about" className="text-sm text-[#A1A1AA] hover:text-white transition-colors">About</Link>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Hero */}
                <section className="pt-32 pb-16 px-6">
                    <div className="max-w-6xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="font-mono text-xs tracking-[0.1em] uppercase text-[#F59E0B] block mb-4">
                                &lt;VIDEO DEMOS&gt;
                            </span>
                            <h1 className="text-6xl md:text-7xl font-bold mb-6">
                                See It In Action
                            </h1>
                            <p className="text-xl text-[#A1A1AA] max-w-2xl mx-auto">
                                Product walkthroughs, feature highlights, and tutorials. All systems shown in production.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Videos by Category */}
                {videos.map((section, sectionIndex) => (
                    <section key={section.category} className="pb-16 px-6">
                        <div className="max-w-6xl mx-auto">
                            <motion.h2
                                className="text-3xl font-bold mb-8 flex items-center gap-3"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <span className="text-[#22C55E]">▸</span>
                                {section.category}
                            </motion.h2>

                            <div className="grid md:grid-cols-2 gap-6">
                                {section.videos.map((video, i) => (
                                    <motion.div
                                        key={video.title}
                                        className="border border-[#2A2A2A] rounded-lg overflow-hidden bg-[#0A0A0A]/50 hover:border-[#333333] transition-all hover-lift cursor-pointer group"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: i * 0.1 }}
                                    >
                                        {/* Video Thumbnail/Embed */}
                                        <div className="relative aspect-video bg-[#111111] flex items-center justify-center">
                                            {/* Placeholder for Loom embed */}
                                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                                <div className="w-16 h-16 rounded-full bg-[#22C55E]/20 flex items-center justify-center mb-4 group-hover:bg-[#22C55E]/30 transition-colors">
                                                    <div className="w-0 h-0 border-l-[12px] border-l-[#22C55E] border-y-[8px] border-y-transparent ml-1"></div>
                                                </div>
                                                <div className="text-sm text-[#6B7280] font-mono">{video.duration}</div>
                                            </div>
                                            {/* When you have actual Loom IDs, replace with:
                      <iframe
                        src={`https://www.loom.com/embed/${video.loomId}`}
                        frameBorder="0"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full"
                      ></iframe>
                      */}
                                        </div>

                                        {/* Video Info */}
                                        <div className="p-6">
                                            <h3 className="text-xl font-semibold mb-2 group-hover:text-[#22C55E] transition-colors">
                                                {video.title}
                                            </h3>
                                            <p className="text-sm text-[#A1A1AA]">{video.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>
                ))}

                {/* YouTube & Social CTA */}
                <section className="py-24 px-6 bg-[#0A0A0A]/30">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-4">Want more content?</h2>
                        <p className="text-xl text-[#A1A1AA] mb-8">
                            Follow us on YouTube, Instagram, and TikTok for tutorials, tips, and feature highlights.
                        </p>
                        <div className="flex justify-center gap-4">
                            <a
                                href="https://youtube.com/@velayontech"
                                className="px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                YouTube
                            </a>
                            <a
                                href="https://instagram.com/velayon"
                                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Instagram
                            </a>
                            <a
                                href="https://tiktok.com/@velayon"
                                className="px-6 py-3 bg-black border border-[#333333] text-white font-medium rounded-lg hover:border-[#555555] transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                TikTok
                            </a>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="border-t border-[#2A2A2A] py-12 px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                            <div>
                                <div className="text-xl font-bold mb-2">VELAYON</div>
                                <p className="text-sm text-[#6B7280]">
                                    © 2026 Velayon. Founded by Bibek Kumar Thagunna.
                                </p>
                            </div>
                            <div className="flex gap-8 text-sm">
                                <Link href="/products" className="text-[#A1A1AA] hover:text-white transition-colors">Products</Link>
                                <Link href="/videos" className="text-white">Demos</Link>
                                <Link href="https://bibek.velayon.com" className="text-[#A1A1AA] hover:text-white transition-colors">Founder</Link>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </GridBackground>
    );
}
