"use client";

import { motion } from "framer-motion";
import { GridBackground } from "../../components/GridBackground";
import { Navigation } from "../../components/ui/Navigation";

export default function ContactPage() {
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
                            <span className="font-mono text-xs text-emerald-500 mb-4 block">COMMUNICATION UPLINK</span>
                            <h1 className="text-4xl md:text-6xl font-bold mb-12">Initialize Sequence</h1>

                            <div className="grid md:grid-cols-2 gap-12">
                                <div>
                                    <p className="text-zinc-400 mb-8 leading-relaxed">
                                        We operate with strict protocols. For business inquiries, partnership proposals, or technical consultations, route your message through the secure channels below.
                                    </p>

                                    <div className="space-y-6">
                                        <div className="p-6 border border-zinc-800 rounded-lg bg-zinc-900/50">
                                            <div className="text-xs font-mono text-zinc-500 mb-2">PRIMARY CHANNEL</div>
                                            <a href="mailto:contact@velayon.com" className="text-xl text-white hover:text-emerald-500 transition-colors">contact@velayon.com</a>
                                        </div>

                                        <div className="p-6 border border-zinc-800 rounded-lg bg-zinc-900/50">
                                            <div className="text-xs font-mono text-zinc-500 mb-2">OPERATIONAL BASE</div>
                                            <div className="text-xl text-white">Kathmandu, Nepal</div>
                                            <div className="text-sm text-zinc-500 mt-1">Global Operations</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Placeholder for specific form or additional info */}
                                <div className="border border-zinc-800 rounded-lg p-8 bg-zinc-900/30 flex flex-col justify-center items-center text-center">
                                    <div className="mb-4 text-emerald-500">
                                        <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-bold mb-2">System Status: ONLINE</h3>
                                    <p className="text-sm text-zinc-500">
                                        Our engineering team reviews all incoming transmissions within 24 hours.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </div>
        </GridBackground>
    );
}
