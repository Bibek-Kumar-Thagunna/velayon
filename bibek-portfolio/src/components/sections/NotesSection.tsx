"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

import { featuredNotes } from "@/lib/data";

export function NotesSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="section px-[clamp(1.25rem,8vw,4rem)]" ref={ref}>
            <div className="max-w-6xl mx-auto">
                {/* Section Label */}
                <motion.span
                    className="section-label block mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    &lt;05.WRITING&gt;
                </motion.span>

                {/* Headline */}
                <motion.div
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <h2 className="text-headline text-white mb-2">
                        Technical Notes
                    </h2>
                    <p className="text-subhead text-[#A1A1AA]">
                        Building with Agentic AI
                    </p>
                </motion.div>

                {/* Notes List */}
                <div className="space-y-4">
                    {featuredNotes.map((note, index) => (
                        <motion.div
                            key={note.slug}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                        >
                            <Link href={`/notes/${note.slug}`} className="block group">
                                <div className="card hover-lift p-6 hover:border-[#333333]">
                                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#22C55E] transition-colors">
                                        {note.title}
                                    </h3>
                                    <p className="text-[#A1A1AA] mb-4">
                                        {note.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-[#6B7280]">
                                            {note.readTime} • {note.date}
                                        </span>
                                        <span className="text-sm text-[#A1A1AA] group-hover:text-white transition-colors flex items-center gap-1">
                                            Read
                                            <span className="transition-transform group-hover:translate-x-1">→</span>
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* View All Link */}
                <motion.div
                    className="text-center mt-8"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <Link
                        href="/notes"
                        className="inline-flex items-center gap-2 text-[#A1A1AA] hover:text-white transition-colors group"
                    >
                        <span>All Notes</span>
                        <span className="transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
