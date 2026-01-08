"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { MagneticButton, AvailabilityStatus } from "@/components";

/**
 * Simplified Contact CTA for the home page.
 * Full details are on the /contact page.
 */
export function ContactCTA() {
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
                    &lt;06.CONNECT&gt;
                </motion.span>

                {/* Simple CTA */}
                <motion.div
                    className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <div className="max-w-xl">
                        <h2 className="text-headline text-white mb-4">
                            Let's Build Something
                        </h2>
                        <p className="text-[#A1A1AA] mb-4">
                            Looking for a systems engineer who can deliver complete solutions?
                            I'm available for remote contracts and full-time opportunities.
                        </p>
                        <AvailabilityStatus
                            status="available"
                            message="Open for remote work"
                        />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <MagneticButton
                            href="mailto:bibek@velayon.com?subject=Work Opportunity"
                            className="btn-primary inline-flex items-center justify-center gap-2"
                        >
                            <span>📧</span>
                            <span>Email Me</span>
                        </MagneticButton>
                        <Link
                            href="/contact"
                            className="btn-secondary inline-flex items-center justify-center gap-2 group"
                        >
                            <span>View Full Details</span>
                            <span className="transition-transform group-hover:translate-x-1">→</span>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
