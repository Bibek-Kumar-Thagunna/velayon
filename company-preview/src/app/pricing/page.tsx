"use client";

import { GridBackground } from "../../components/GridBackground";
import { Navigation } from "../../components/ui/Navigation";
import { PricingCard } from "../../components/ui/PricingCard";
import { products } from "../../lib/products";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PricingPage() {
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
                                Transparent Pricing
                            </span>
                            <h1 className="text-5xl md:text-7xl font-bold mb-6">
                                Built for Every Scale
                            </h1>
                            <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-8">
                                From startups to enterprises. All plans include 30-day free trial. No credit card required.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Product Tabs */}
                <section className="pb-24 px-6">
                    <div className="max-w-6xl 2xl:max-w-7xl mx-auto space-y-24">
                        {products.map((product, productIndex) => (
                            <div key={product.id} id={product.id}>
                                {/* Product Header */}
                                <div className="mb-12">
                                    <div className="flex items-center gap-4 mb-3">
                                        <h2 className="text-4xl font-bold">{product.name}</h2>
                                        {product.badge && (
                                            <span className="text-xs font-mono border border-emerald-500/30 text-emerald-500 px-3 py-1 rounded-full">
                                                {product.badge}
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-lg text-zinc-400 max-w-2xl">{product.tagline}</p>
                                    <div className="mt-4">
                                        <Link
                                            href={`/products/${product.id}`}
                                            className="text-sm text-emerald-500 hover:text-emerald-400 inline-flex items-center gap-1"
                                        >
                                            View full details <span>→</span>
                                        </Link>
                                    </div>
                                </div>

                                {/* Pricing Tiers */}
                                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {product.pricingTiers.map((tier, tierIndex) => (
                                        <PricingCard
                                            key={tierIndex}
                                            tier={tier}
                                            accentColor={product.color}
                                            index={tierIndex}
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-24 px-6 bg-zinc-950/50 border-t border-zinc-900">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
                        <div className="space-y-6">
                            {[
                                {
                                    q: "Can I switch plans anytime?",
                                    a: "Yes, you can upgrade or downgrade your plan at any time. Changes are prorated."
                                },
                                {
                                    q: "What payment methods do you accept?",
                                    a: "We accept all major credit cards, bank transfers, and can issue invoices for enterprise clients."
                                },
                                {
                                    q: "Is there really a free trial?",
                                    a: "Absolutely. All plans come with a 30-day free trial. No credit card required to start."
                                },
                                {
                                    q: "What happens after the trial ends?",
                                    a: "You'll be notified 7 days before your trial ends. You can choose to continue with a paid plan or your data will be securely archived."
                                }
                            ].map((faq, i) => (
                                <motion.div
                                    key={i}
                                    className="border border-zinc-800 rounded-lg p-6 bg-zinc-900/20"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <h3 className="text-lg font-semibold mb-2">{faq.q}</h3>
                                    <p className="text-zinc-400">{faq.a}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-24 px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-6">Need a custom plan?</h2>
                        <p className="text-xl text-zinc-400 mb-8">
                            We offer tailored solutions for large enterprises and unique use cases.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-zinc-200 transition-all hover:scale-[1.02] active:scale-[0.98]"
                        >
                            Contact Sales
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
                            <Link href="/about" className="hover:text-white transition-colors">COMPANY</Link>
                            <Link href="/contact" className="hover:text-white transition-colors">CONTACT</Link>
                        </div>
                    </div>
                </footer>
            </div>
        </GridBackground>
    );
}
