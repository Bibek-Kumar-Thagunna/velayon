"use client";

import { GridBackground } from "../../components/GridBackground";
import { Navigation } from "../../components/ui/Navigation";
import { SocialDemoGrid } from "../../components/sections/SocialDemoGrid";
import { motion } from "framer-motion";
import Link from "next/link";

export default function DemosPage() {
    return (
        <GridBackground suppressHydrationWarning>
            <div className="min-h-screen text-white text-sm selection:bg-emerald-500/30" suppressHydrationWarning>
                <Navigation />

                {/* Hero */}
                <section className="relative pt-32 pb-16 px-6">
                    <div className="max-w-6xl 2xl:max-w-7xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-emerald-500 font-mono text-xs uppercase tracking-widest mb-4 block">
                                Product Demonstrations
                            </span>
                            <h1 className="text-hero mb-6">
                                See It in Action
                            </h1>
                            <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-8">
                                Watch real demos, tutorials, and product updates across our social channels.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Social Media Demo Grid */}
                <section className="w-full bg-black border-t border-b border-zinc-900">
                    <SocialDemoGrid />
                </section>

                {/* Platform Links */}
                <section className="py-24 px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-12 text-center">Follow Our Channels</h2>
                        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                            {[
                                {
                                    platform: "YouTube Shorts",
                                    icon: "📺",
                                    url: "https://youtube.com/@velayon",
                                    color: "#FF0000"
                                },
                                {
                                    platform: "Instagram Reels",
                                    icon: "📸",
                                    url: "https://instagram.com/velayon",
                                    color: "#E4405F"
                                },
                                {
                                    platform: "TikTok",
                                    icon: "🎵",
                                    url: "https://tiktok.com/@velayon",
                                    color: "#00F2EA"
                                },
                                {
                                    platform: "Facebook",
                                    icon: "📱",
                                    url: "https://facebook.com/velayon",
                                    color: "#1877F2"
                                }
                            ].map((social, i) => (
                                <motion.a
                                    key={i}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group border border-zinc-800 bg-zinc-900/20 p-6 rounded-xl hover:border-zinc-700 hover:bg-zinc-900/40 transition-all text-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <div className="text-4xl mb-3">{social.icon}</div>
                                    <div className="font-semibold mb-2">{social.platform}</div>
                                    <div className="text-xs text-emerald-500">Follow →</div>
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Product Demos CTA */}
                <section className="py-24 px-6 bg-zinc-950/50 border-t border-zinc-900">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-6">Want a Private Demo?</h2>
                        <p className="text-xl text-zinc-400 mb-8">
                            Schedule a personalized walkthrough of our products with our team.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-zinc-200 transition-all hover:scale-[1.02] active:scale-[0.98]"
                        >
                            Request Demo
                        </Link>
                    </div>
                </section>

                {/* Footer */}
                <footer className="border-t border-[#1a1a1a] py-12 px-6 bg-[#050505]">
                    <div className="max-w-6xl 2xl:max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="text-sm text-zinc-500">
                            © 2026 VELAYON DYNAMICS. All rights reserved.
                        </div>
                        <div className="flex gap-6 text-sm font-mono text-zinc-400">
                            <Link href="/products" className="hover:text-white transition-colors">PRODUCTS</Link>
                            <Link href="/pricing" className="hover:text-white transition-colors">PRICING</Link>
                            <Link href="/about" className="hover:text-white transition-colors">COMPANY</Link>
                        </div>
                    </div>
                </footer>
            </div>
        </GridBackground>
    );
}
