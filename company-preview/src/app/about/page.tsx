"use client";

import { motion } from "framer-motion";
import { GridBackground } from "../../components/GridBackground";
import { Navigation } from "../../components/ui/Navigation";

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
                            <span className="font-mono text-xs text-emerald-500 mb-4 block">VELAYON DYNAMICS</span>
                            <h1 className="text-5xl md:text-7xl font-bold mb-8">Global Infrastructure Engineering</h1>

                            <div className="prose prose-invert prose-lg text-zinc-400 max-w-none">
                                <p className="text-xl text-white mb-6 leading-relaxed">
                                    Velayon is an advanced technology firm dedicated to building the backbone of the autonomous future. We move beyond the hype of AI to deliver industrial-grade precision and reliability.
                                </p>
                                <p className="mb-6">
                                    Our mission is to engineer systems that operate with zero latency and absolute integrity. From financial logistics to geospatial tracking, Velayon provides the operational interface for the next generation of enterprises.
                                </p>
                                <p>
                                    Headquartered in Nepal, we deploy global solutions that redefine the standards of software architecture. We don't just write code; we forge digital industry.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </div>
        </GridBackground>
    );
}
