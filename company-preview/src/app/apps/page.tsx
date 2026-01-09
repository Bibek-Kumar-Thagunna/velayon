"use client";

import Link from "next/link";
import { GridBackground } from "../../components/GridBackground";
import { motion } from "framer-motion";

interface App {
    name: string;
    tagline: string;
    description: string;
    platforms: {
        android?: string | null;
        ios?: string | null;
        windows?: string | null;
        linux?: string | null;
        macos?: string | null;
    };
    qrCode: string | null;
    downloads: string;
    rating: string | null;
}

const apps: App[] = [
    {
        name: "Attendify",
        tagline: "Smart Attendance Tracking",
        description: "QR code-based attendance for educational institutions",
        platforms: {
            android: "https://play.google.com/store/apps/details?id=com.velayon.attendify",
            ios: null,
        },
        qrCode: "/qr/attendify.png",
        downloads: "5,000+",
        rating: "4.5",
    },
    {
        name: "Expense Tracker",
        tagline: "Automated Transaction Tracking",
        description: "Parse notifications to track expenses automatically",
        platforms: {
            android: "Coming Soon",
            ios: null,
        },
        qrCode: null,
        downloads: "Beta",
        rating: null,
    },
    {
        name: "Hotel Management System",
        tagline: "Multi-platform POS",
        description: "Complete hotel operations platform",
        platforms: {
            windows: "#",
            linux: "#",
            macos: "#",
        },
        qrCode: null,
        downloads: "Enterprise",
        rating: null,
    },
];

export default function AppsPage() {
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
                                <Link href="/apps" className="text-sm text-white">Apps</Link>
                                <Link href="/videos" className="text-sm text-[#A1A1AA] hover:text-white transition-colors">Demos</Link>
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
                                &lt;DOWNLOAD APPS&gt;
                            </span>
                            <h1 className="text-hero mb-6">
                                Get Our Apps
                            </h1>
                            <p className="text-xl text-[#A1A1AA] max-w-2xl mx-auto">
                                Available on multiple platforms. Download directly or scan QR codes.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Apps Grid */}
                <section className="pb-24 px-6">
                    <div className="max-w-6xl mx-auto space-y-8">
                        {apps.map((app, i) => (
                            <motion.div
                                key={app.name}
                                className="border border-[#2A2A2A] rounded-lg p-8 bg-[#0A0A0A]/50 hover:border-[#333333] transition-all"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                            >
                                <div className="grid md:grid-cols-2 gap-8">
                                    {/* Left: App Info */}
                                    <div>
                                        <h2 className="text-3xl font-bold mb-2">{app.name}</h2>
                                        <p className="text-[#22C55E] text-lg mb-4">{app.tagline}</p>
                                        <p className="text-[#A1A1AA] mb-6">{app.description}</p>

                                        {/* Stats */}
                                        <div className="flex gap-6 mb-8">
                                            {app.downloads && (
                                                <div>
                                                    <div className="text-2xl font-bold text-white">{app.downloads}</div>
                                                    <div className="text-xs text-[#6B7280]">Downloads</div>
                                                </div>
                                            )}
                                            {app.rating && (
                                                <div>
                                                    <div className="text-2xl font-bold text-[#22C55E]">{app.rating}★</div>
                                                    <div className="text-xs text-[#6B7280]">Rating</div>
                                                </div>
                                            )}
                                        </div>

                                        {/* Download Buttons */}
                                        <div className="space-y-3">
                                            {/* Android */}
                                            {app.platforms.android && (
                                                <a
                                                    href={app.platforms.android}
                                                    className="flex items-center gap-3 px-6 py-3 bg-black border border-[#333333] rounded-lg hover:border-[#555555] transition-all group"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <div className="text-2xl">▶</div>
                                                    <div className="flex-1">
                                                        <div className="text-xs text-[#6B7280]">GET IT ON</div>
                                                        <div className="font-semibold">Google Play</div>
                                                    </div>
                                                    <div className="text-[#6B7280] group-hover:text-white transition-colors">→</div>
                                                </a>
                                            )}

                                            {/* iOS */}
                                            {app.platforms.ios && (
                                                <a
                                                    href={app.platforms.ios}
                                                    className="flex items-center gap-3 px-6 py-3 bg-black border border-[#333333] rounded-lg hover:border-[#555555] transition-all group"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <div className="text-2xl">🍎</div>
                                                    <div className="flex-1">
                                                        <div className="text-xs text-[#6B7280]">DOWNLOAD ON THE</div>
                                                        <div className="font-semibold">App Store</div>
                                                    </div>
                                                    <div className="text-[#6B7280] group-hover:text-white transition-colors">→</div>
                                                </a>
                                            )}

                                            {/* Desktop */}
                                            {(app.platforms.windows || app.platforms.macos || app.platforms.linux) && (
                                                <div className="border-t border-[#2A2A2A] pt-4 mt-4">
                                                    <div className="text-sm text-[#6B7280] mb-3">Desktop Versions:</div>
                                                    <div className="flex gap-3">
                                                        {app.platforms.windows && (
                                                            <a
                                                                href={app.platforms.windows}
                                                                className="px-4 py-2 border border-[#333333] rounded-lg hover:border-[#555555] transition-colors text-sm"
                                                            >
                                                                Windows
                                                            </a>
                                                        )}
                                                        {app.platforms.macos && (
                                                            <a
                                                                href={app.platforms.macos}
                                                                className="px-4 py-2 border border-[#333333] rounded-lg hover:border-[#555555] transition-colors text-sm"
                                                            >
                                                                macOS
                                                            </a>
                                                        )}
                                                        {app.platforms.linux && (
                                                            <a
                                                                href={app.platforms.linux}
                                                                className="px-4 py-2 border border-[#333333] rounded-lg hover:border-[#555555] transition-colors text-sm"
                                                            >
                                                                Linux
                                                            </a>
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Right: QR Code or Mockup */}
                                    <div className="flex items-center justify-center">
                                        {app.qrCode ? (
                                            <div className="text-center">
                                                <div className="w-48 h-48 border border-[#2A2A2A] rounded-lg bg-white flex items-center justify-center mb-4">
                                                    <div className="text-black font-mono text-xs">QR Code</div>
                                                </div>
                                                <div className="text-sm text-[#6B7280]">Scan to download</div>
                                            </div>
                                        ) : (
                                            <div className="w-full h-64 border border-[#2A2A2A] rounded-lg bg-[#111111] flex items-center justify-center">
                                                <div className="text-[#333333] font-mono text-sm">App Screenshot</div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="py-24 px-6 bg-[#0A0A0A]/30">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-4">Need a custom app?</h2>
                        <p className="text-xl text-[#A1A1AA] mb-8">
                            We build mobile and desktop applications for Android, iOS, Windows, macOS, and Linux.
                        </p>
                        <Link
                            href="https://bibek.velayon.com/#contact"
                            className="px-8 py-4 bg-[#22C55E] text-black font-semibold rounded-lg hover:bg-[#16A34A] transition-colors inline-block"
                        >
                            Get in Touch
                        </Link>
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
                                <Link href="/apps" className="text-white">Apps</Link>
                                <Link href="https://bibek.velayon.com" className="text-[#A1A1AA] hover:text-white transition-colors">Founder</Link>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </GridBackground>
    );
}
