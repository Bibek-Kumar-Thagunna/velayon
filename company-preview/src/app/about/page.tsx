"use client";

import { motion } from "framer-motion";
import { GridBackground } from "../../components/GridBackground";
import { Navigation } from "../../components/ui/Navigation";
import Link from "next/link";

export default function AboutPage() {
    return (
        <GridBackground>
            <div className="min-h-screen text-white">
                <Navigation />

                <section className="relative pt-32 pb-20 px-6">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="font-mono text-xs text-emerald-500 mb-4 block uppercase tracking-wider">VELAYON DYNAMICS</span>
                            <h1 className="text-5xl md:text-7xl font-bold mb-8">Building the Software Backbone of Tomorrow</h1>

                            <div className="prose prose-invert prose-lg text-zinc-300 max-w-none space-y-6">
                                <p className="text-2xl text-white leading-relaxed">
                                    Velayon Dynamics is a software company building enterprise-grade SaaS platforms that scale.
                                </p>
                                <p className="text-lg">
                                    We engineer production systems that solve real problems with precision-built software—from attendance tracking to hotel operations, security AI to personal finance.
                                </p>
                                <p className="text-lg">
                                    Founded in Nepal, deployed globally. We believe great software can come from anywhere, for anyone.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Mission */}
                <section className="py-20 px-6 bg-zinc-950/50 border-t border-zinc-900">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-bold mb-12 text-center">Our Mission</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: "🎯",
                                    title: "Enterprise Precision",
                                    desc: "We build production systems, not prototypes. Every line of code is written for scale, security, and reliability."
                                },
                                {
                                    icon: "🌍",
                                    title: "Global Impact",
                                    desc: "From Nepal to the world. We prove that world-class software can be built anywhere, for everyone."
                                },
                                {
                                    icon: "🚀",
                                    title: "Real Solutions",
                                    desc: "We solve actual problems for actual businesses—attendance fraud, hotel operations, security threats, expense chaos."
                                }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    className="border border-zinc-800 bg-zinc-900/20 p-8 rounded-xl text-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <div className="text-5xl mb-4">{item.icon}</div>
                                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                    <p className="text-zinc-400">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technology Stack */}
                <section className="py-20 px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-bold mb-12 text-center">Technology Stack</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="border border-zinc-800 bg-zinc-900/20 p-8 rounded-xl">
                                <h3 className="text-2xl font-bold mb-6 text-emerald-500">Frontend</h3>
                                <ul className="space-y-2 text-zinc-300">
                                    <li>• Next.js 16+ (React Server Components)</li>
                                    <li>• Flutter (iOS, Android, Desktop)</li>
                                    <li>• TypeScript</li>
                                    <li>• Tailwind CSS</li>
                                    <li>• Framer Motion</li>
                                </ul>
                            </div>
                            <div className="border border-zinc-800 bg-zinc-900/20 p-8 rounded-xl">
                                <h3 className="text-2xl font-bold mb-6 text-emerald-500">Backend</h3>
                                <ul className="space-y-2 text-zinc-300">
                                    <li>• Node.js + Express</li>
                                    <li>• Python (ML/AI workloads)</li>
                                    <li>• PostgreSQL + Prisma</li>
                                    <li>• Firebase (Auth, Realtime DB)</li>
                                    <li>• Redis (Caching)</li>
                                </ul>
                            </div>
                            <div className="border border-zinc-800 bg-zinc-900/20 p-8 rounded-xl">
                                <h3 className="text-2xl font-bold mb-6 text-emerald-500">AI/ML</h3>
                                <ul className="space-y-2 text-zinc-300">
                                    <li>• TensorFlow + PyTorch</li>
                                    <li>• OpenCV (Computer Vision)</li>
                                    <li>• NLP for SMS parsing</li>
                                    <li>• NVIDIA CUDA (GPU acceleration)</li>
                                </ul>
                            </div>
                            <div className="border border-zinc-800 bg-zinc-900/20 p-8 rounded-xl">
                                <h3 className="text-2xl font-bold mb-6 text-emerald-500">DevOps</h3>
                                <ul className="space-y-2 text-zinc-300">
                                    <li>• Vercel (Web hosting)</li>
                                    <li>• AWS / Google Cloud</li>
                                    <li>• Docker + Kubernetes</li>
                                    <li>• GitHub Actions (CI/CD)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Founder */}
                <section className="py-20 px-6 bg-zinc-950/50 border-t border-zinc-900">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-bold mb-12 text-center">Meet the Founder</h2>
                        <div className="border border-zinc-800 bg-zinc-900/20 p-12 rounded-xl text-center">
                            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-5xl font-bold">
                                B
                            </div>
                            <h3 className="text-3xl font-bold mb-2">Bibek Kumar Thagunna</h3>
                            <p className="text-emerald-500 mb-6">Founder & CEO</p>
                            <p className="text-lg text-zinc-300 mb-8">
                                Software engineer building production systems from Kathmandu, Nepal.
                                Specialized in full-stack development, AI/ML, and scalable architecture.
                            </p>
                            <Link
                                href="https://bibek.velayon.com"
                                target="_blank"
                                className="inline-flex items-center gap-2 text-emerald-500 hover:text-emerald-400 transition-colors"
                            >
                                View Engineering Portfolio →
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Why Nepal */}
                <section className="py-20 px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-bold mb-8 text-center">Why Nepal?</h2>
                        <div className="prose prose-invert prose-lg text-zinc-300 max-w-none">
                            <p className="text-xl leading-relaxed">
                                Great software doesn't need to come from Silicon Valley. Nepal has a thriving tech
                                ecosystem, talented engineers, and a unique perspective on solving global problems.
                            </p>
                            <p className="text-lg">
                                Our timezone (UTC+5:45) bridges Asia, Europe, and the Americas—perfect for global collaboration.
                                Our cost structure allows us to deliver enterprise-grade software at competitive prices.
                                And our commitment to quality means we compete on excellence, not location.
                            </p>
                        </div>
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
