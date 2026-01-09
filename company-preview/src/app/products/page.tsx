"use client";

import { GridBackground } from "../../components/GridBackground";
import { Navigation } from "../../components/ui/Navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { products } from "../../lib/products";

export default function ProductsPage() {
    return (
        <GridBackground suppressHydrationWarning>
            <div className="min-h-screen text-white text-sm selection:bg-emerald-500/30" suppressHydrationWarning>
                <Navigation />

                {/* Hero */}
                <section className="relative pt-32 pb-20 px-6">
                    <div className="max-w-6xl 2xl:max-w-7xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-emerald-500 font-mono text-xs uppercase tracking-widest mb-4 block">
                                ENTERPRISE SOFTWARE SUITE
                            </span>
                            <h1 className="text-6xl md:text-7xl font-bold mb-6">
                                Production-Ready SaaS Platforms
                            </h1>
                            <p className="text-xl text-zinc-400 max-w-3xl mx-auto mb-12">
                                Four specialized products solving real problems for education, hospitality, security, and finance.
                                Built from Nepal, deployed globally.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Products Grid */}
                <section className="pb-20 px-6">
                    <div className="max-w-6xl 2xl:max-w-7xl mx-auto space-y-24">
                        {products.map((product, i) => (
                            <motion.div
                                key={product.id}
                                className="border border-zinc-800 bg-zinc-900/20 rounded-2xl overflow-hidden"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="grid md:grid-cols-2 gap-0">
                                    {/* Left: Info */}
                                    <div className="p-12">
                                        {/* Badge */}
                                        <div className="inline-flex items-center gap-2 mb-6">
                                            <span
                                                className="px-3 py-1 text-xs font-mono uppercase tracking-wider rounded-full"
                                                style={{
                                                    backgroundColor: `${product.color}20`,
                                                    color: product.color,
                                                    border: `1px solid ${product.color}30`
                                                }}
                                            >
                                                {product.badge}
                                            </span>
                                            {product.category === 'saas' && (
                                                <span className="text-xs text-emerald-500 font-mono">● LIVE</span>
                                            )}
                                        </div>

                                        {/* Name & Tagline */}
                                        <h2 className="text-4xl font-bold mb-4">{product.name}</h2>
                                        <p className="text-xl text-zinc-400 mb-6">{product.tagline}</p>
                                        <p className="text-zinc-500 mb-8 leading-relaxed">{product.description}</p>

                                        {/* Key Stats */}
                                        <div className="grid grid-cols-2 gap-4 mb-8">
                                            {product.stats.slice(0, 4).map((stat, j) => (
                                                <div key={j} className="bg-zinc-900/50 p-4 rounded-lg border border-zinc-800">
                                                    <div
                                                        className="text-2xl font-bold mb-1"
                                                        style={{ color: product.color }}
                                                    >
                                                        {stat.value}
                                                    </div>
                                                    <div className="text-xs text-zinc-500 uppercase tracking-wider">
                                                        {stat.label}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* CTAs */}
                                        <div className="flex flex-col sm:flex-row gap-3">
                                            <Link
                                                href={`/products/${product.id}`}
                                                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-white font-semibold rounded-lg transition-all hover:scale-[1.02]"
                                                style={{ backgroundColor: product.color }}
                                            >
                                                View Details
                                            </Link>
                                            <Link
                                                href={`/pricing#${product.id}`}
                                                className="inline-flex items-center justify-center gap-2 px-6 py-3 border text-white font-medium rounded-lg hover:bg-zinc-900 transition-all"
                                                style={{ borderColor: `${product.color}50` }}
                                            >
                                                See Pricing
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Right: Features */}
                                    <div className="bg-zinc-950/50 p-12 border-l border-zinc-800">
                                        <h3 className="text-lg font-bold mb-6 text-zinc-300">Key Features</h3>
                                        <div className="space-y-4">
                                            {product.features.slice(0, 6).map((feature, j) => (
                                                <div key={j} className="flex items-start gap-3">
                                                    <div className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-lg"
                                                        style={{
                                                            backgroundColor: `${product.color}20`,
                                                            color: product.color
                                                        }}
                                                    >
                                                        {feature.icon}
                                                    </div>
                                                    <div>
                                                        <div className="font-semibold text-white mb-1">{feature.title}</div>
                                                        <div className="text-sm text-zinc-400">{feature.description}</div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Tech Stack */}
                                        <div className="mt-8 pt-8 border-t border-zinc-800">
                                            <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-3">
                                                Tech Stack
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {product.techStack.map((tech, j) => (
                                                    <span
                                                        key={j}
                                                        className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-xs font-mono text-zinc-400"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 px-6 bg-zinc-950/50 border-t border-zinc-900">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-6">Not Sure Which Product Fits?</h2>
                        <p className="text-xl text-zinc-400 mb-8">
                            Talk to our team. We'll help you choose the right solution for your business.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-all hover:scale-[1.02]"
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
                            <Link href="/pricing" className="hover:text-white transition-colors">PRICING</Link>
                            <Link href="/demos" className="hover:text-white transition-colors">DEMOS</Link>
                            <Link href="/about" className="hover:text-white transition-colors">COMPANY</Link>
                        </div>
                    </div>
                </footer>
            </div>
        </GridBackground>
    );
}
