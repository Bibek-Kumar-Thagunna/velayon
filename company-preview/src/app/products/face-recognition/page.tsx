"use client";

import { GridBackground } from "../../../components/GridBackground";
import { Navigation } from "../../../components/ui/Navigation";
import { getProductById } from "../../../lib/products";
import { motion } from "framer-motion";
import Link from "next/link";

export default function FaceRecognitionPage() {
    const product = getProductById('face-recognition')!;

    return (
        <GridBackground suppressHydrationWarning>
            <div className="min-h-screen text-white text-sm selection:bg-blue-500/30" suppressHydrationWarning>
                <Navigation />

                {/* Breadcrumb */}
                <div className="pt-20 pb-4 px-6">
                    <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
                        <div className="flex items-center gap-2 text-sm text-zinc-400">
                            <Link href="/" className="hover:text-white transition-colors">Home</Link>
                            <span>/</span>
                            <Link href="/products" className="hover:text-white transition-colors">Products</Link>
                            <span>/</span>
                            <span className="text-blue-500">Face Recognition</span>
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
                            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 border border-blue-500/30 rounded-full bg-blue-500/10">
                                <span className="text-xs font-mono text-blue-500 uppercase tracking-wider">
                                    Enterprise AI/ML • 95%+ Accuracy
                                </span>
                            </div>

                            {/* Headline */}
                            <h1 className="text-6xl md:text-7xl font-bold mb-6">
                                {product.tagline}
                            </h1>

                            {/* Subheadline */}
                            <p className="text-2xl text-zinc-400 mb-8 max-w-3xl">
                                Real-time identification from live CCTV feeds. Automated access control. Watchlist alerts.
                                Built for security agencies, corporate offices, and government facilities.
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
                                        <div className="text-2xl font-bold text-blue-500">{stat.value}</div>
                                        <div className="text-xs text-zinc-500 uppercase tracking-wider">{stat.label}</div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* CTAs */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/contact?product=face-recognition"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition-all hover:scale-[1.02]"
                                >
                                    Request Enterprise Demo
                                </Link>
                                <Link
                                    href="#technical"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-zinc-700 text-white font-medium rounded-lg hover:bg-zinc-900 transition-all"
                                >
                                    View Technical Specs →
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Use Cases */}
                <section className="py-20 px-6 bg-zinc-950/50 border-t border-zinc-900">
                    <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
                        <h2 className="text-4xl font-bold mb-12 text-center">Enterprise Use Cases</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: "🚨",
                                    title: "Security & Surveillance",
                                    items: [
                                        "Real-time threat detection",
                                        "Watchlist alerts for flagged individuals",
                                        "Perimeter breach identification",
                                        "Incident review & forensics"
                                    ]
                                },
                                {
                                    icon: "🚪",
                                    title: "Access Control",
                                    items: [
                                        "Touchless door entry",
                                        "Multi-zone access permissions",
                                        "Visitor management",
                                        "Audit trails for compliance"
                                    ]
                                },
                                {
                                    icon: "⏰",
                                    title: "Employee Time Tracking",
                                    items: [
                                        "Automated clock-in/out",
                                        "No buddy punching",
                                        "Shift management",
                                        "Payroll integration"
                                    ]
                                }
                            ].map((useCase, i) => (
                                <motion.div
                                    key={i}
                                    className="border border-zinc-800 bg-zinc-900/20 p-8 rounded-xl"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <div className="text-5xl mb-4">{useCase.icon}</div>
                                    <h3 className="text-2xl font-bold mb-4">{useCase.title}</h3>
                                    <ul className="space-y-2">
                                        {useCase.items.map((item, j) => (
                                            <li key={j} className="flex items-start gap-2 text-zinc-400">
                                                <span className="text-blue-500">→</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technical Specifications */}
                <section id="technical" className="py-20 px-6">
                    <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
                        <h2 className="text-4xl font-bold mb-12 text-center">Technical Specifications</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {[
                                {
                                    category: "Performance",
                                    specs: [
                                        { label: "Recognition Accuracy", value: "95%+" },
                                        { label: "Processing Speed", value: "<1 second" },
                                        { label: "Concurrent Cameras", value: "50+ streams" },
                                        { label: "Database Capacity", value: "10,000+ faces" }
                                    ]
                                },
                                {
                                    category: "Deployment",
                                    specs: [
                                        { label: "Infrastructure", value: "On-premise or cloud" },
                                        { label: "CCTV Integration", value: "RTSP, HTTP, ONVIF" },
                                        { label: "Hardware", value: "NVIDIA CUDA GPU required" },
                                        { label: "Operating System", value: "Linux, Windows Server" }
                                    ]
                                },
                                {
                                    category: "Security & Compliance",
                                    specs: [
                                        { label: "Encryption", value: "AES-256 at rest, TLS in transit" },
                                        { label: "Privacy", value: "GDPR compliant" },
                                        { label: "Audit Logs", value: "Full activity tracking" },
                                        { label: "Data Retention", value: "Customizable policies" }
                                    ]
                                },
                                {
                                    category: "Accuracy Under Conditions",
                                    specs: [
                                        { label: "Variable Lighting", value: "95% accurate" },
                                        { label: "Partial Occlusion", value: "85% accurate" },
                                        { label: "Profile Angles", value: "Up to 45° deviation" },
                                        { label: "Aging Tolerance", value: "5+ years" }
                                    ]
                                }
                            ].map((section, i) => (
                                <motion.div
                                    key={i}
                                    className="border border-zinc-800 bg-zinc-900/20 p-8 rounded-xl"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <h3 className="text-2xl font-bold mb-6 text-blue-500">{section.category}</h3>
                                    <dl className="space-y-4">
                                        {section.specs.map((spec, j) => (
                                            <div key={j} className="flex justify-between items-start">
                                                <dt className="text-zinc-400">{spec.label}</dt>
                                                <dd className="text-white font-semibold text-right">{spec.value}</dd>
                                            </div>
                                        ))}
                                    </dl>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Features */}
                <section className="py-20 px-6 bg-zinc-950/50 border-t border-zinc-900">
                    <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
                        <h2 className="text-4xl font-bold mb-12 text-center">Enterprise Features</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {product.features.map((feature, i) => (
                                <motion.div
                                    key={i}
                                    className="border border-zinc-800 bg-zinc-900/20 p-6 rounded-xl hover:border-blue-500/50 transition-all"
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

                {/* Pricing */}
                <section className="py-20 px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-6">Enterprise Pricing</h2>
                        <p className="text-xl text-zinc-400 mb-12">
                            Customized deployment tailored to your security infrastructure and scale.
                        </p>
                        <div className="border border-zinc-800 bg-zinc-900/20 p-12 rounded-xl">
                            <div className="mb-8">
                                <div className="text-5xl font-bold text-blue-500 mb-2">Custom Pricing</div>
                                <div className="text-zinc-400">Contact sales for a quote</div>
                            </div>
                            <ul className="space-y-3 text-left max-w-md mx-auto mb-8">
                                {product.pricingTiers[0].features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-zinc-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link
                                href="/contact?product=face-recognition"
                                className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition-all"
                            >
                                Request Quote
                            </Link>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-20 px-6 bg-zinc-950/50 border-t border-zinc-900">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
                        <div className="space-y-6">
                            {[
                                {
                                    q: "How accurate is the system in real-world conditions?",
                                    a: "95%+ accuracy in varied lighting, angles up to 45°, and with partial occlusion (masks, glasses). Continuously trained on diverse datasets."
                                },
                                {
                                    q: "Can it work with my existing CCTV cameras?",
                                    a: "Yes. We support industry-standard protocols (RTSP, HTTP, ONVIF). Compatible with most IP cameras and DVR/NVR systems."
                                },
                                {
                                    q: "What hardware is required?",
                                    a: "NVIDIA GPU (CUDA-enabled) for real-time processing. Exact specs depend on the number of concurrent camera streams. We provide hardware recommendations."
                                },
                                {
                                    q: "Is the data stored securely?",
                                    a: "Absolutely. AES-256 encryption at rest, TLS in transit. On-premise deployment keeps all data within your network. GDPR compliant."
                                },
                                {
                                    q: "Can I get a live demo?",
                                    a: "Yes. We offer personalized demos with your own test footage. Contact sales to schedule."
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
                                    <h3 className="text-lg font-semibold mb-2 text-blue-500">{faq.q}</h3>
                                    <p className="text-zinc-400">{faq.a}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-24 px-6 bg-gradient-to-b from-zinc-950 to-black border-t border-zinc-900">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-5xl font-bold mb-6">
                            Secure Your Facilities with AI
                        </h2>
                        <p className="text-xl text-zinc-400 mb-8">
                            Talk to our security specialists about deploying face recognition at your organization.
                        </p>
                        <Link
                            href="/contact?product=face-recognition"
                            className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-500 transition-all hover:scale-[1.02]"
                        >
                            Schedule Consultation
                        </Link>
                        <p className="text-sm text-zinc-500 mt-4">Enterprise support • SLA guarantees</p>
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
