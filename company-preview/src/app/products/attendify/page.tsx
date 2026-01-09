"use client";

import { GridBackground } from "../../../components/GridBackground";
import { Navigation } from "../../../components/ui/Navigation";
import { PricingCard } from "../../../components/ui/PricingCard";
import { AppStoreBadges } from "../../../components/ui/AppStoreBadges";
import { getProductById } from "../../../lib/products";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AttendifyPage() {
    const product = getProductById('attendify')!;

    return (
        <GridBackground suppressHydrationWarning>
            <div className="min-h-screen text-white text-sm selection:bg-emerald-500/30" suppressHydrationWarning>
                <Navigation />

                {/* Breadcrumb */}
                <div className="pt-20 pb-4 px-6">
                    <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
                        <div className="flex items-center gap-2 text-sm text-zinc-400">
                            <Link href="/" className="hover:text-white transition-colors">Home</Link>
                            <span>/</span>
                            <Link href="/products" className="hover:text-white transition-colors">Products</Link>
                            <span>/</span>
                            <span className="text-emerald-500">Attendify</span>
                        </div>
                    </div>
                </div>

                {/* Hero */}
                <section className="relative pb-20 px-6">
                    <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 border border-emerald-500/30 rounded-full bg-emerald-500/10">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                <span className="text-xs font-mono text-emerald-500 uppercase tracking-wider">
                                    Production Ready • Deployed and Functional
                                </span>
                            </div>

                            {/* Headline */}
                            <h1 className="text-hero mb-6">
                                {product.tagline}
                            </h1>

                            {/* Subheadline */}
                            <p className="text-2xl text-zinc-400 mb-8 max-w-3xl">
                                Eliminate manual attendance tracking. Prevent proxy attendance with geofencing.
                                Get real-time insights. Available for pilot deployment.
                            </p>

                            {/* Stats Row */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                                {product.stats.map((stat, i) => (
                                    <motion.div
                                        key={i}
                                        className="border border-zinc-800 bg-zinc-900/20 p-4 rounded-lg"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        <div className="text-lg md:text-xl font-bold text-emerald-500">{stat.value}</div>
                                        <div className="text-xs text-zinc-500 uppercase tracking-wider">{stat.label}</div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* CTAs */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/contact?product=attendify&plan=trial"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-500 transition-all hover:scale-[1.02]"
                                >
                                    Start 30-Day Free Trial
                                </Link>
                                <Link
                                    href="https://attendify.velayon.com"
                                    target="_blank"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-zinc-700 text-white font-medium rounded-lg hover:bg-zinc-900 transition-all"
                                >
                                    Launch Live Demo →
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Problem/Solution */}
                <section className="py-20 px-6 bg-zinc-950/50 border-t border-zinc-900">
                    <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-12">
                            {/* Problem */}
                            <div>
                                <h2 className="text-3xl font-bold mb-6 text-zinc-300">
                                    The Attendance Problem
                                </h2>
                                <div className="space-y-4 text-zinc-400">
                                    <p className="flex items-start gap-3">
                                        <span className="text-red-500 text-xl">✗</span>
                                        <span>Paper registers are time-consuming and error-prone</span>
                                    </p>
                                    <p className="flex items-start gap-3">
                                        <span className="text-red-500 text-xl">✗</span>
                                        <span>Students mark attendance for absent friends (proxy)</span>
                                    </p>
                                    <p className="flex items-start gap-3">
                                        <span className="text-red-500 text-xl">✗</span>
                                        <span>No real-time visibility for administrators</span>
                                    </p>
                                    <p className="flex items-start gap-3">
                                        <span className="text-red-500 text-xl">✗</span>
                                        <span>Parents don't know if their child attended class</span>
                                    </p>
                                </div>
                            </div>

                            {/* Solution */}
                            <div>
                                <h2 className="text-3xl font-bold mb-6 text-emerald-500">
                                    The Attendify Solution
                                </h2>
                                <div className="space-y-4 text-zinc-300">
                                    <p className="flex items-start gap-3">
                                        <span className="text-emerald-500 text-xl">✓</span>
                                        <span><strong>Instant QR Scan</strong> - Students scan in seconds</span>
                                    </p>
                                    <p className="flex items-start gap-3">
                                        <span className="text-emerald-500 text-xl">✓</span>
                                        <span><strong>Geofence Lock</strong> - Must be on campus to mark attendance</span>
                                    </p>
                                    <p className="flex items-start gap-3">
                                        <span className="text-emerald-500 text-xl">✓</span>
                                        <span><strong>Live Dashboard</strong> - Admin sees attendance in real-time</span>
                                    </p>
                                    <p className="flex items-start gap-3">
                                        <span className="text-emerald-500 text-xl">✓</span>
                                        <span><strong>Parent Alerts</strong> - SMS/email notifications for absences</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="py-20 px-6">
                    <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
                        <h2 className="text-4xl font-bold mb-12 text-center">
                            Enterprise Features Built for Scale
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {product.features.map((feature, i) => (
                                <motion.div
                                    key={i}
                                    className="border border-zinc-800 bg-zinc-900/20 p-6 rounded-xl hover:border-emerald-500/50 transition-all"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <div className="text-4xl mb-4">{feature.icon}</div>
                                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                                    <p className="text-zinc-400">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How It Works */}
                <section className="py-20 px-6 bg-zinc-950/50 border-t border-zinc-900">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-bold mb-12 text-center">How It Works</h2>
                        <div className="space-y-8">
                            {[
                                {
                                    step: "01",
                                    title: "Teacher Creates Session",
                                    desc: "Teacher opens the app and generates a unique QR code for the class session. Sets geofence radius around classroom."
                                },
                                {
                                    step: "02",
                                    title: "Students Scan QR Code",
                                    desc: "Students scan the QR code with their mobile app. System validates they're within the geofenced area."
                                },
                                {
                                    step: "03",
                                    title: "Real-time Verification",
                                    desc: "Attendance is marked instantly. Admin dashboard updates in real-time. Absent students are flagged."
                                },
                                {
                                    step: "04",
                                    title: "Automated Notifications",
                                    desc: "Parents receive SMS/email if their child is absent. Weekly reports generated automatically."
                                }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    className="flex gap-6 items-start"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                                        <span className="text-lg md:text-xl font-bold text-emerald-500">{item.step}</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                        <p className="text-zinc-400">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Pricing */}
                <section className="py-20 px-6">
                    <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold mb-4">Choose Your Plan</h2>
                            <p className="text-xl text-zinc-400">30-day free trial. No credit card required.</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {product.pricingTiers.map((tier, i) => (
                                <PricingCard key={i} tier={tier} accentColor={product.color} index={i} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* App Downloads */}
                <section className="py-20 px-6 bg-zinc-950/50 border-t border-zinc-900">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-6">Download the App</h2>
                        <p className="text-xl text-zinc-400 mb-12">
                            Available on Google Play. iOS version coming soon.
                        </p>
                        <div className="flex justify-center">
                            <AppStoreBadges badges={product.appLinks} />
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-20 px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
                        <div className="space-y-6">
                            {[
                                {
                                    q: "What happens if a student doesn't have a smartphone?",
                                    a: "Teachers can manually mark attendance for students without devices using the web dashboard."
                                },
                                {
                                    q: "Can students bypass the geofence?",
                                    a: "No. The system uses GPS + network location verification. Spoofing is detected and flagged."
                                },
                                {
                                    q: "How does the parent notification work?",
                                    a: "Parents register their phone number/email during student enrollment. Automated alerts are sent when students are absent or late."
                                },
                                {
                                    q: "Is our data secure?",
                                    a: "Yes. All data is encrypted end-to-end. We're GDPR compliant and host on secure cloud infrastructure."
                                },
                                {
                                    q: "Can we export attendance records?",
                                    a: "Yes. Export to CSV, Excel, or PDF for any date range. Perfect for audits and record-keeping."
                                }
                            ].map((faq, i) => (
                                <motion.div
                                    key={i}
                                    className="border border-zinc-800 rounded-lg p-6 bg-zinc-900/20"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    <h3 className="text-lg font-semibold mb-2 text-emerald-500">{faq.q}</h3>
                                    <p className="text-zinc-400">{faq.a}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-24 px-6 bg-gradient-to-b from-zinc-950 to-black border-t border-zinc-900">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-display mb-6">
                            Ready to Eliminate Attendance Fraud?
                        </h2>
                        <p className="text-xl text-zinc-400 mb-8">
                            Join 15+ institutions already using Attendify. Start your free trial today.
                        </p>
                        <Link
                            href="/contact?product=attendify&plan=trial"
                            className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-emerald-600 text-white text-lg font-semibold rounded-lg hover:bg-emerald-500 transition-all hover:scale-[1.02]"
                        >
                            Start 30-Day Free Trial
                        </Link>
                        <p className="text-sm text-zinc-500 mt-4">No credit card required • Cancel anytime</p>
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
