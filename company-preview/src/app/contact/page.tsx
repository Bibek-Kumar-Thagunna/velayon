"use client";

// import { Suspense } from "react"; 
import { motion } from "framer-motion";
import { GridBackground } from "../../components/GridBackground";
import { Navigation } from "../../components/ui/Navigation";
import dynamic from "next/dynamic";

const ContactForm = dynamic(() => import("../../components/ui/ContactForm").then(mod => mod.ContactForm), {
    ssr: false,
    loading: () => (
        <div className="w-full h-96 bg-zinc-900/50 rounded-xl flex items-center justify-center">
            <span className="text-zinc-500">Loading form...</span>
        </div>
    )
});
import Link from "next/link";

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
                            <span className="font-mono text-xs text-emerald-500 mb-4 block uppercase tracking-wider">GET IN TOUCH</span>
                            <h1 className="text-hero mb-6">Let's Build Together</h1>
                            <p className="text-xl text-zinc-400 mb-12 max-w-2xl">
                                Whether you're interested in our products, need enterprise support, or want to discuss a custom solution—we're here to help.
                            </p>

                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Sales */}
                                <div className="border border-zinc-800 bg-zinc-900/20 p-8 rounded-xl">
                                    <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-6">
                                        <span className="text-2xl">💼</span>
                                    </div>
                                    <h2 className="text-2xl font-bold mb-3">Sales & Partnerships</h2>
                                    <p className="text-zinc-400 mb-6">
                                        Interested in our products? Want to become a reseller? Let's talk business.
                                    </p>
                                    <a
                                        href="mailto:sales@velayon.com"
                                        className="text-emerald-500 hover:text-emerald-400 transition-colors inline-flex items-center gap-2"
                                    >
                                        sales@velayon.com →
                                    </a>
                                </div>

                                {/* Support */}
                                <div className="border border-zinc-800 bg-zinc-900/20 p-8 rounded-xl">
                                    <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6">
                                        <span className="text-2xl">🛠️</span>
                                    </div>
                                    <h2 className="text-2xl font-bold mb-3">Technical Support</h2>
                                    <p className="text-zinc-400 mb-6">
                                        Existing customer? Need help with deployment or troubleshooting?
                                    </p>
                                    <a
                                        href="mailto:support@velayon.com"
                                        className="text-blue-500 hover:text-blue-400 transition-colors inline-flex items-center gap-2"
                                    >
                                        support@velayon.com →
                                    </a>
                                </div>

                                {/* General */}
                                <div className="border border-zinc-800 bg-zinc-900/20 p-8 rounded-xl">
                                    <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center mb-6">
                                        <span className="text-2xl">📧</span>
                                    </div>
                                    <h2 className="text-2xl font-bold mb-3">General Inquiries</h2>
                                    <p className="text-zinc-400 mb-6">
                                        Press, careers, or anything else? Reach out to our general inbox.
                                    </p>
                                    <a
                                        href="mailto:contact@velayon.com"
                                        className="text-amber-500 hover:text-amber-400 transition-colors inline-flex items-center gap-2"
                                    >
                                        contact@velayon.com →
                                    </a>
                                </div>

                                {/* Location */}
                                <div className="border border-zinc-800 bg-zinc-900/20 p-8 rounded-xl">
                                    <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6">
                                        <span className="text-2xl">🌍</span>
                                    </div>
                                    <h2 className="text-2xl font-bold mb-3">Headquarters</h2>
                                    <p className="text-zinc-300 mb-2">Kathmandu, Nepal</p>
                                    <p className="text-zinc-500 text-sm">
                                        UTC+5:45 • Serving clients globally
                                    </p>
                                </div>
                            </div>

                            {/* Response Time */}
                            <div className="mt-12 p-6 border border-emerald-500/30 bg-emerald-500/5 rounded-xl">
                                <div className="flex items-center gap-3">
                                    <span className="relative flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                                    </span>
                                    <p className="text-zinc-300">
                                        <span className="font-semibold text-white">24-hour response time</span> for all business inquiries
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Contact Form Section */}
                <section className="py-20 px-6 bg-zinc-950/50 border-t border-zinc-900">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold mb-4">Send Us a Message</h2>
                            <p className="text-zinc-400">
                                Fill out the form below and we'll get back to you within 24 hours.
                            </p>
                        </div>
                        <ContactForm />
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
                            <Link href="/about" className="hover:text-white transition-colors">ABOUT</Link>
                        </div>
                    </div>
                </footer>
            </div>
        </GridBackground>
    );
}
