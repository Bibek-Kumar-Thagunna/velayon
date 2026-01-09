"use client";

import { GridBackground } from "../../../components/GridBackground";
import { Navigation } from "../../../components/ui/Navigation";
import { PricingCard } from "../../../components/ui/PricingCard";
import { AppStoreBadges } from "../../../components/ui/AppStoreBadges";
import { getProductById } from "../../../lib/products";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HotelManagementPage() {
    const product = getProductById('hotel-management')!;

    return (
        <GridBackground suppressHydrationWarning>
            <div className="min-h-screen text-white text-sm selection:bg-purple-500/30" suppressHydrationWarning>
                <Navigation />

                {/* Breadcrumb */}
                <div className="pt-20 pb-4 px-6">
                    <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
                        <div className="flex items-center gap-2 text-sm text-zinc-400">
                            <Link href="/" className="hover:text-white transition-colors">Home</Link>
                            <span>/</span>
                            <Link href="/products" className="hover:text-white transition-colors">Products</Link>
                            <span>/</span>
                            <span className="text-purple-500">HMS Core</span>
                        </div>
                    </div>
                </div>

                {/* Hero */}
                <section className="relative pb-20 px-6">
                    <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 border border-purple-500/30 rounded-full bg-purple-500/10">
                                <span className="text-xs font-mono text-purple-500 uppercase tracking-wider">
                                    Full-Stack ERP • Multi-Property Support
                                </span>
                            </div>

                            {/* Headline */}
                            <h1 className="text-hero mb-6">
                                {product.tagline}
                            </h1>

                            {/* Subheadline */}
                            <p className="text-2xl text-zinc-400 mb-8 max-w-3xl">
                                From reservations to checkout, from housekeeping to F&B billing—run your entire hotel operation from one unified platform. Built for Nepal, scaling globally.
                            </p>

                            {/* Stats Row */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                                {product.stats.map((stat, i) => (
                                    <motion.div
                                        key={i}
                                        className="border border-zinc-800 bg-zinc-900/20 p-4 rounded-lg"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        <div className="text-2xl font-bold text-purple-500">{stat.value}</div>
                                        <div className="text-xs text-zinc-500 uppercase tracking-wider">{stat.label}</div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* CTAs */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/pricing#hotel-management"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-500 transition-all hover:scale-[1.02]"
                                >
                                    Start 30-Day Free Trial
                                </Link>
                                <Link
                                    href="/contact?product=hms"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-zinc-700 text-white font-medium rounded-lg hover:bg-zinc-900 transition-all"
                                >
                                    Request Enterprise Demo →
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Features by Department */}
                <section className="py-20 px-6 bg-zinc-950/50 border-t border-zinc-900">
                    <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
                        <h2 className="text-4xl font-bold mb-4 text-center">Complete Hotel Operations</h2>
                        <p className="text-xl text-zinc-400 mb-12 text-center">Every department, one platform</p>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Front Desk */}
                            <motion.div
                                className="border border-zinc-800 bg-zinc-900/20 p-8 rounded-xl"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center text-2xl">
                                        🏨
                                    </div>
                                    <h3 className="text-2xl font-bold">Front Desk</h3>
                                </div>
                                <ul className="space-y-3 text-zinc-300">
                                    <li className="flex items-start gap-2">
                                        <span className="text-purple-500">→</span>
                                        <span>Online & walk-in reservations</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-purple-500">→</span>
                                        <span>Real-time room availability</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-purple-500">→</span>
                                        <span>Guest profiles & history</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-purple-500">→</span>
                                        <span>Check-in/check-out workflows</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-purple-500">→</span>
                                        <span>Room assignment & transfers</span>
                                    </li>
                                </ul>
                            </motion.div>

                            {/* Housekeeping */}
                            <motion.div
                                className="border border-zinc-800 bg-zinc-900/20 p-8 rounded-xl"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center text-2xl">
                                        🧹
                                    </div>
                                    <h3 className="text-2xl font-bold">Housekeeping</h3>
                                </div>
                                <ul className="space-y-3 text-zinc-300">
                                    <li className="flex items-start gap-2">
                                        <span className="text-purple-500">→</span>
                                        <span>Room status tracking (Clean/Dirty/Inspected)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-purple-500">→</span>
                                        <span>Cleaning schedules & assignments</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-purple-500">→</span>
                                        <span>Maintenance requests</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-purple-500">→</span>
                                        <span>Linen & amenity inventory</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-purple-500">→</span>
                                        <span>Lost & found management</span>
                                    </li>
                                </ul>
                            </motion.div>

                            {/* F&B */}
                            <motion.div
                                className="border border-zinc-800 bg-zinc-900/20 p-8 rounded-xl"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center text-2xl">
                                        🍽️
                                    </div>
                                    <h3 className="text-2xl font-bold">F&B Point of Sale</h3>
                                </div>
                                <ul className="space-y-3 text-zinc-300">
                                    <li className="flex items-start gap-2">
                                        <span className="text-purple-500">→</span>
                                        <span>Restaurant billing (integrated with room charges)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-purple-500">→</span>
                                        <span>Menu management & pricing</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-purple-500">→</span>
                                        <span>Kitchen order tickets (KOT)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-purple-500">→</span>
                                        <span>Table management</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-purple-500">→</span>
                                        <span>Food cost analytics</span>
                                    </li>
                                </ul>
                            </motion.div>

                            {/* Billing */}
                            <motion.div
                                className="border border-zinc-800 bg-zinc-900/20 p-8 rounded-xl"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center text-2xl">
                                        💳
                                    </div>
                                    <h3 className="text-2xl font-bold">Billing & Finance</h3>
                                </div>
                                <ul className="space-y-3 text-zinc-300">
                                    <li className="flex items-start gap-2">
                                        <span className="text-purple-500">→</span>
                                        <span>Automated invoice generation</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-purple-500">→</span>
                                        <span>Nepal VAT & service charge compliant</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-purple-500">→</span>
                                        <span>Multiple payment methods (cash, card, online)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-purple-500">→</span>
                                        <span>Revenue reports & analytics</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-purple-500">→</span>
                                        <span>Expense tracking</span>
                                    </li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Technical Features */}
                <section className="py-20 px-6">
                    <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
                        <h2 className="text-4xl font-bold mb-12 text-center">
                            Enterprise-Grade Architecture
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {product.features.map((feature, i) => (
                                <motion.div
                                    key={i}
                                    className="border border-zinc-800 bg-zinc-900/20 p-6 rounded-xl hover:border-purple-500/50 transition-all"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <div className="text-4xl mb-4">{feature.icon}</div>
                                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                                    <p className="text-zinc-400">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Pricing */}
                <section className="py-20 px-6 bg-zinc-950/50 border-t border-zinc-900">
                    <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold mb-4">Pricing That Scales</h2>
                            <p className="text-xl text-zinc-400">From boutique guesthouses to 5-star resorts</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                            {product.pricingTiers.map((tier, i) => (
                                <PricingCard key={i} tier={tier} accentColor={product.color} index={i} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Download Desktop Apps */}
                <section className="py-20 px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-6">Available on All Platforms</h2>
                        <p className="text-xl text-zinc-400 mb-12">
                            Desktop apps for Windows, macOS, and Linux. Cloud-based, works offline.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <AppStoreBadges badges={product.appLinks} />
                        </div>
                        <p className="text-sm text-zinc-500 mt-6">
                            Contact sales for deployment packages
                        </p>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-20 px-6 bg-zinc-950/50 border-t border-zinc-900">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-bold mb-12 text-center">Common Questions</h2>
                        <div className="space-y-6">
                            {[
                                {
                                    q: "Can HMS Core handle multiple properties?",
                                    a: "Yes. The Professional and Enterprise plans support multi-property management with consolidated reporting."
                                },
                                {
                                    q: "Does it work with my existing POS hardware?",
                                    a: "Yes. HMS Core integrates with standard receipt printers, barcode scanners, and card terminals."
                                },
                                {
                                    q: "Is it compliant with Nepal's tax regulations?",
                                    a: "Absolutely. Built-in VAT and service charge calculations per Nepal's hospitality tax laws. IRD-compliant invoices."
                                },
                                {
                                    q: "Can I customize the system?",
                                    a: "Enterprise plans include custom development for specific workflows, integrations, and branding."
                                },
                                {
                                    q: "What if my internet goes down?",
                                    a: "The desktop app works offline. Data syncs automatically when connection is restored."
                                }
                            ].map((faq, i) => (
                                <motion.div
                                    key={i}
                                    className="border border-zinc-800 rounded-lg p-6 bg-zinc-900/20"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    <h3 className="text-lg font-semibold mb-2 text-purple-500">{faq.q}</h3>
                                    <p className="text-zinc-400">{faq.a}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-24 px-6 bg-gradient-to-b from-zinc-950 to-black border-t border-zinc-900">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-display mb-6">
                            Transform Your Hotel Operations
                        </h2>
                        <p className="text-xl text-zinc-400 mb-8">
                            Join 25+ properties already using HMS Core. Schedule a personalized demo.
                        </p>
                        <Link
                            href="/contact?product=hms"
                            className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-purple-600 text-white text-lg font-semibold rounded-lg hover:bg-purple-500 transition-all hover:scale-[1.02]"
                        >
                            Request Enterprise Demo
                        </Link>
                        <p className="text-sm text-zinc-500 mt-4">30-day free trial available</p>
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
                            <Link href="/contact" className="hover:text-white transition-colors">CONTACT</Link>
                        </div>
                    </div>
                </footer>
            </div>
        </GridBackground>
    );
}
