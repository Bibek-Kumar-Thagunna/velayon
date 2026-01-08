"use client";

import Link from "next/link";
import { GridBackground, Navigation, Footer, ContactSection } from "@/components";

export default function ContactPage() {
    return (
        <GridBackground>
            <Navigation />
            <main className="min-h-screen pt-24 pb-16 px-[clamp(1.25rem,8vw,4rem)]">
                <div className="max-w-6xl mx-auto mb-4">
                    {/* Back Navigation */}
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-[#6B7280] hover:text-white transition-colors font-mono text-sm group"
                    >
                        <span className="group-hover:-translate-x-1 transition-transform">←</span>
                        <span>Home</span>
                    </Link>
                </div>
                {/* Remove section top padding */}
                <div className="section-no-top-padding">
                    <ContactSection />
                </div>
            </main>
            <Footer />
        </GridBackground>
    );
}
