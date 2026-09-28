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
                    &lt;05.START_SPRINT&gt;
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
                            Apply for a Sprint Slot
                        </h2>
                        <p className="text-[#A1A1AA] mb-4 text-lg">
                            I'm a solo engineer. I intentionally limit capacity to 2 sprints per month so I can over-deliver on quality.
                            <br />
                            <span className="text-white font-medium">Investment: $3,000 (fixed scope) • Timeline: 14 days</span>
                        </p>
                        <AvailabilityStatus
                            status="available"
                            message="Next sprint: February 2026"
                        />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <MagneticButton
                            href="mailto:bibek@velayon.com?subject=Application for System Sprint"
                            className="btn-primary inline-flex items-center justify-center gap-2"
                        >
                            <span>🚀</span>
                            <span>Apply Now</span>
                        </MagneticButton>
                        <Link
                            href="/contact"
                            className="btn-secondary inline-flex items-center justify-center gap-2 group"
                        >
                            <span>Read FAQ</span>
                            <span className="transition-transform group-hover:translate-x-1">→</span>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
