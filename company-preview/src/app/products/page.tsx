"use client";

import { motion } from "framer-motion";
import { GridBackground } from "../../components/GridBackground";
import { Navigation } from "../../components/ui/Navigation";

export default function ProductsPage() {
    return (
        <GridBackground>
            <div className="min-h-screen text-white">
                <Navigation />

                <section className="relative pt-32 pb-20 px-6">
                    <div className="max-w-6xl mx-auto">
                        <motion.h1
                            className="text-4xl font-bold mb-12"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            Active Systems
                        </motion.h1>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Products Content - Duplicate from Home but detailed */}
                            <div className="p-8 border border-zinc-800 rounded-xl bg-zinc-900/50">
                                <div className="text-emerald-500 font-mono text-xs mb-4">FLAGSHIP SYSTEM</div>
                                <h2 className="text-2xl font-bold mb-4">Attendify</h2>
                                <p className="text-zinc-400 mb-6">Autonomous attendance tracking system using geospatial fencing and QR verification.</p>
                                <div className="flex gap-4">
                                    <a href="https://attendify.velayon.com" target="_blank" rel="noopener noreferrer">
                                        <button className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-500 transition-colors">Launch Console</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </GridBackground>
    );
}
