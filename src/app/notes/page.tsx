"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GridBackground, Navigation, Footer, SpotlightCard } from "@/components";
import { notes } from "@/lib/data";

export default function NotesPage() {
    return (
        <GridBackground>
            <Navigation />

            <main className="min-h-screen pt-32 pb-16 px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Back Navigation */}
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-[#6B7280] hover:text-white mb-12 transition-colors font-mono text-sm group"
                    >
                        <span className="group-hover:-translate-x-1 transition-transform">←</span>
                        <span>Home</span>
                    </Link>
                    {/* Header */}
                    <motion.div
                        className="mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="section-label block mb-4">
                            &lt;05.WRITING&gt;
                        </span>
                        <h1 className="text-display text-white mb-6">
                            Technical Notes
                        </h1>
                        <p className="text-xl text-[#A1A1AA] max-w-2xl">
                            Building production-grade systems. Thoughts on architecture, AI, and engineering.
                        </p>
                    </motion.div>

                    {/* Notes List */}
                    <div className="space-y-6">
                        {notes.map((note, index) => (
                            <motion.article
                                key={note.slug}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Link href={`/notes/${note.slug}`} className="block group">
                                    <SpotlightCard
                                        className="hover-lift p-8 border border-[#2A2A2A] bg-[#0A0A0A]/50 rounded-lg group-hover:border-[#333333] transition-colors"
                                        spotlightColor="rgba(34, 197, 94, 0.1)"
                                    >
                                        <div className="flex flex-col md:flex-row gap-6 md:items-start md:justify-between relative z-10">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 text-xs mb-3">
                                                    <span className="text-[#F59E0B] font-mono">{note.category || "Engineering"}</span>
                                                    <span className="text-[#333333]">•</span>
                                                    <span className="text-[#6B7280]">{note.date}</span>
                                                </div>
                                                <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-[#22C55E] transition-colors">
                                                    {note.title}
                                                </h2>
                                                <p className="text-[#A1A1AA] mb-4">
                                                    {note.excerpt}
                                                </p>
                                                <div className="flex items-center gap-2 text-sm text-[#A1A1AA] font-mono group-hover:text-white transition-colors">
                                                    <span>Read Note</span>
                                                    <span className="transition-transform group-hover:translate-x-1">→</span>
                                                </div>
                                            </div>
                                        </div>
                                    </SpotlightCard>
                                </Link>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </GridBackground>
    );
}
