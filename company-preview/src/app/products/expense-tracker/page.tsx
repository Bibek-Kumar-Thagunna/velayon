"use client";

import { GridBackground } from "../../../components/GridBackground";
import { Navigation } from "../../../components/ui/Navigation";
import { PricingCard } from "../../../components/ui/PricingCard";
import { AppStoreBadges } from "../../../components/ui/AppStoreBadges";
import { getProductById } from "../../../lib/products";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ExpenseTrackerPage() {
    const product = getProductById('expense-tracker')!;

    return (
        <GridBackground suppressHydrationWarning>
            <div className="min-h-screen text-white text-sm selection:bg-amber-500/30" suppressHydrationWarning>
                <Navigation />

                {/* Breadcrumb */}
                <div className="pt-20 pb-4 px-6">
                    <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
                        <div className="flex items-center gap-2 text-sm text-zinc-400">
                            <Link href="/" className="hover:text-white transition-colors">Home</Link>
                            <span>/</span>
                            <Link href="/products" className="hover:text-white transition-colors">Products</Link>
                            <span>/</span>
                            <span className="text-amber-500">Expense Tracker</span>
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
                            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 border border-amber-500/30 rounded-full bg-amber-500/10">
                                <span className="text-xs font-mono text-amber-500 uppercase tracking-wider">
                                    Coming Soon • Beta Access Available
                                </span>
                            </div>

                            {/* Headline */}
                            <h1 className="text-hero mb-6">
                                Track Every Rupee,
                                <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
                                    Without Lifting a Finger
                                </span>
                            </h1>

                            {/* Subheadline */}
                            <p className="text-2xl text-zinc-400 mb-8 max-w-3xl">
                                AI-powered expense tracking that reads your bank SMS. Zero manual entry.
                                Perfect for freelancers, small businesses, and personal finance.
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
                                        <div className="text-2xl font-bold text-amber-500">{stat.value}</div>
                                        <div className="text-xs text-zinc-500 uppercase tracking-wider">{stat.label}</div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* CTAs */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/contact?product=expense-tracker"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-500 transition-all hover:scale-[1.02]"
                                >
                                    Join Beta Waitlist
                                </Link>
                                <Link
                                    href="#how-it-works"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-zinc-700 text-white font-medium rounded-lg hover:bg-zinc-900 transition-all"
                                >
                                    See How It Works →
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Problem/Solution */}
                <section className="py-20 px-6 bg-zinc-950/50 border-t border-zinc-900">
                    <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-12">
                            {/* Problem */}
                            <div>
                                <h2 className="text-3xl font-bold mb-6 text-zinc-300">
                                    Tired of Manual Entry?
                                </h2>
                                <div className="space-y-4 text-zinc-400">
                                    <p className="flex items-start gap-3">
                                        <span className="text-red-500 text-xl">✗</span>
                                        <span>Forgetting to log expenses = incomplete records</span>
                                    </p>
                                    <p className="flex items-start gap-3">
                                        <span className="text-red-500 text-xl">✗</span>
                                        <span>Typing every transaction manually is tedious</span>
                                    </p>
                                    <p className="flex items-start gap-3">
                                        <span className="text-red-500 text-xl">✗</span>
                                        <span>No idea where your money actually goes</span>
                                    </p>
                                    <p className="flex items-start gap-3">
                                        <span className="text-red-500 text-xl">✗</span>
                                        <span>Tax season becomes a nightmare</span>
                                    </p>
                                </div>
                            </div>

                            {/* Solution */}
                            <div>
                                <h2 className="text-3xl font-bold mb-6 text-amber-500">
                                    Let AI Do the Work
                                </h2>
                                <div className="space-y-4 text-zinc-300">
                                    <p className="flex items-start gap-3">
                                        <span className="text-amber-500 text-xl">✓</span>
                                        <span><strong>Auto SMS Parsing</strong> - Reads bank notifications automatically</span>
                                    </p>
                                    <p className="flex items-start gap-3">
                                        <span className="text-amber-500 text-xl">✓</span>
                                        <span><strong>Smart Categorization</strong> - AI knows it's food, transport, or bills</span>
                                    </p>
                                    <p className="flex items-start gap-3">
                                        <span className="text-amber-500 text-xl">✓</span>
                                        <span><strong>Visual Insights</strong> - See spending trends at a glance</span>
                                    </p>
                                    <p className="flex items-start gap-3">
                                        <span className="text-amber-500 text-xl">✓</span>
                                        <span><strong>Export for Tax</strong> - One-click CSV/PDF reports</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How It Works */}
                <section id="how-it-works" className="py-20 px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-bold mb-12 text-center">3 Steps. Zero Effort.</h2>
                        <div className="space-y-12">
                            {[
                                {
                                    step: "01",
                                    title: "Give Permission",
                                    desc: "Grant the app access to read SMS notifications from your bank (one-time setup).",
                                    note: "Your data never leaves your device. 100% private."
                                },
                                {
                                    step: "02",
                                    title: "AI Parses Your SMS",
                                    desc: "Every time you make a transaction, your bank sends an SMS. Our AI extracts amount, merchant, and type.",
                                    note: "Works with 50+ banks in Nepal, India, and growing."
                                },
                                {
                                    step: "03",
                                    title: "See Your Spending",
                                    desc: "Open the app to see categorized expenses, trends, and budgets. Export anytime for taxes.",
                                    note: "Set budget alerts to stay on track."
                                }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    className="flex gap-6 items-start"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                                        <span className="text-2xl font-bold text-amber-500">{item.step}</span>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                                        <p className="text-zinc-400 mb-2">{item.desc}</p>
                                        <p className="text-sm text-amber-500/80 italic">{item.note}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="py-20 px-6 bg-zinc-950/50 border-t border-zinc-900">
                    <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
                        <h2 className="text-4xl font-bold mb-12 text-center">Everything You Need</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {product.features.map((feature, i) => (
                                <motion.div
                                    key={i}
                                    className="border border-zinc-800 bg-zinc-900/20 p-6 rounded-xl hover:border-amber-500/50 transition-all"
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
                <section className="py-20 px-6">
                    <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold mb-4">Simple Pricing</h2>
                            <p className="text-xl text-zinc-400">Free forever. Premium for power users.</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {product.pricingTiers.map((tier, i) => (
                                <PricingCard key={i} tier={tier} accentColor={product.color} index={i} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* App Downloads */}
                <section className="py-20 px-6 bg-zinc-950/50 border-t border-zinc-900">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-6">Coming Soon</h2>
                        <p className="text-xl text-zinc-400 mb-12">
                            We're in beta. Sign up below to get early access when we launch on Android and iOS.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 opacity-50 cursor-not-allowed">
                            <AppStoreBadges badges={product.appLinks} />
                        </div>
                        <div className="mt-8">
                            <Link
                                href="/contact?product=expense-tracker"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-500 transition-all"
                            >
                                Join Beta Waitlist
                            </Link>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-20 px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-bold mb-12 text-center">Common Questions</h2>
                        <div className="space-y-6">
                            {[
                                {
                                    q: "Is my financial data safe?",
                                    a: "Yes. We only read SMS notifications locally on your device. Your data never leaves your phone unless you explicitly export it. No cloud sync of sensitive info."
                                },
                                {
                                    q: "Which banks are supported?",
                                    a: "50+ banks including all major Nepal banks (NIC Asia, Global IME, Himalayan, etc.) and Indian banks. We're adding more every week."
                                },
                                {
                                    q: "What if the AI categorizes wrong?",
                                    a: "You can manually correct any transaction. The AI learns from your corrections and gets smarter over time."
                                },
                                {
                                    q: "Can I track cash expenses?",
                                    a: "Yes! You can manually add cash transactions. Premium users get voice-to-expense feature (coming soon)."
                                },
                                {
                                    q: "Is there a free version?",
                                    a: "Yes! The free version includes all core features with 3 months of history. Premium unlocks unlimited history and advanced analytics."
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
                                    <h3 className="text-lg font-semibold mb-2 text-amber-500">{faq.q}</h3>
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
                            Stop Losing Track of Money
                        </h2>
                        <p className="text-xl text-zinc-400 mb-8">
                            Fully functional demo available for testing. Ready for early adopters.
                        </p>
                        <Link
                            href="/contact?product=expense-tracker"
                            className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-amber-600 text-white text-lg font-semibold rounded-lg hover:bg-amber-500 transition-all hover:scale-[1.02]"
                        >
                            Get Early Access
                        </Link>
                        <p className="text-sm text-zinc-500 mt-4">Beta launches Q2 2026</p>
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
