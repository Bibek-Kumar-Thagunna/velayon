"use client";

import Link from "next/link";
import { GridBackground } from "../../components/GridBackground";
import { motion } from "framer-motion";

const blogPosts = [
    {
        title: "Building Production Systems with Agentic AI",
        excerpt: "How we ship systems 10x faster using AI agents while maintaining enterprise-grade quality.",
        date: "2026-01-05",
        author: "Bibek Kumar Thagunna",
        category: "AI Development",
        readTime: "5 min",
        slug: "agentic-ai-development",
    },
    {
        title: "From Idea to 300+ Daily Users: The Attendify Story",
        excerpt: "Case study: How we built and launched a location-aware attendance system in 2 weeks.",
        date: "2026-01-03",
        author: "Velayon Team",
        category: "Case Study",
        readTime: "8 min",
        slug: "attendify-case-study",
    },
    {
        title: "Multi-Platform Development: Flutter for Hotel POS",
        excerpt: "Lessons learned building a production POS system that runs on Windows, Linux, Android, and iOS.",
        date: "2025-12-28",
        author: "Bibek Kumar Thagunna",
        category: "Technical",
        readTime: "10 min",
        slug: "flutter-multiplatform",
    },
    {
        title: "Real-time Face Recognition at 30fps: Technical Deep-Dive",
        excerpt: "Architecture and optimizations for production-grade computer vision with Python and OpenCV.",
        date: "2025-12-20",
        author: "Bibek Kumar Thagunna",
        category: "Machine Learning",
        readTime: "12 min",
        slug: "face-recognition-architecture",
    },
    {
        title: "Nepal Market SaaS: Tax Compliance & Local Payments",
        excerpt: "Building software for the Nepal market - handling VAT, service charges, and payment integration.",
        date: "2025-12-15",
        author: "Velayon Team",
        category: "Business",
        readTime: "6 min",
        slug: "nepal-saas-compliance",
    },
];

export default function NotesPage() {
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
                                <Link href="/videos" className="text-sm text-[#A1A1AA] hover:text-white transition-colors">Demos</Link>
                                <Link href="/notes" className="text-sm text-white">Blog</Link>
                                <Link href="/#about" className="text-sm text-[#A1A1AA] hover:text-white transition-colors">About</Link>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Hero */}
                <section className="pt-32 pb-16 px-6">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="font-mono text-xs tracking-[0.1em] uppercase text-[#F59E0B] block mb-4">
                                &lt;BLOG & NOTES&gt;
                            </span>
                            <h1 className="text-6xl md:text-7xl font-bold mb-6">
                                Technical Insights
                            </h1>
                            <p className="text-xl text-[#A1A1AA] max-w-2xl">
                                Lessons learned building production systems. AI development, architecture patterns, and market insights.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Blog Posts Grid */}
                <section className="pb-24 px-6">
                    <div className="max-w-6xl mx-auto space-y-6">
                        {blogPosts.map((post, i) => (
                            <motion.article
                                key={post.slug}
                                className="border border-[#2A2A2A] rounded-lg p-8 bg-[#0A0A0A]/50 hover:border-[#333333] transition-all hover-lift cursor-pointer group"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.05 }}
                            >
                                <div className="grid md:grid-cols-4 gap-6">
                                    {/* Left: Meta */}
                                    <div className="md:col-span-1">
                                        <div className="text-sm text-[#6B7280] mb-2">{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</div>
                                        <div className="text-xs font-mono text-[#F59E0B] mb-2">{post.category}</div>
                                        <div className="text-xs text-[#6B7280]">{post.readTime} read</div>
                                    </div>

                                    {/* Right: Content */}
                                    <div className="md:col-span-3">
                                        <h2 className="text-2xl font-bold mb-3 group-hover:text-[#22C55E] transition-colors">
                                            {post.title}
                                        </h2>
                                        <p className="text-[#A1A1AA] mb-4">{post.excerpt}</p>
                                        <div className="flex items-center justify-between">
                                            <div className="text-sm text-[#6B7280]">
                                                By {post.author}
                                            </div>
                                            <div className="text-[#22C55E] text-sm font-medium group-hover:translate-x-1 transition-transform">
                                                Read more →
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </section>

                {/* Newsletter CTA */}
                <section className="py-24 px-6 bg-[#0A0A0A]/30">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
                        <p className="text-xl text-[#A1A1AA] mb-8">
                            Get notified when we publish new technical articles and case studies.
                        </p>
                        <div className="flex justify-center gap-3 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="your@email.com"
                                className="flex-1 px-4 py-3 bg-[#111111] border border-[#2A2A2A] rounded-lg text-white placeholder-[#6B7280] focus:outline-none focus:border-[#22C55E]"
                            />
                            <button className="px-6 py-3 bg-[#22C55E] text-black font-medium rounded-lg hover:bg-[#16A34A] transition-colors whitespace-nowrap">
                                Subscribe
                            </button>
                        </div>
                        <p className="text-xs text-[#6B7280] mt-4">No spam. Unsubscribe anytime.</p>
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
                                <Link href="/notes" className="text-white">Blog</Link>
                                <Link href="https://bibek.velayon.com" className="text-[#A1A1AA] hover:text-white transition-colors">Founder</Link>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </GridBackground>
    );
}
