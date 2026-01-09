"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const showcases = [
    {
        title: "Attendify",
        category: "Education SaaS",
        description: "Geofenced attendance tracking trusted by 15+ institutions. 300+ daily active users.",
        metric: "95% fraud reduction",
        color: "#22C55E",
        gradient: "from-emerald-500/20 to-emerald-950/20",
        link: "/products/attendify",
        tech: "Flutter • Firebase"
    },
    {
        title: "HMS Core",
        category: "Hospitality ERP",
        description: "Complete hotel operations platform managing 25+ properties across Nepal.",
        metric: "40% efficiency gain",
        color: "#8B5CF6",
        gradient: "from-purple-500/20 to-purple-950/20",
        link: "/products/hotel-management",
        tech: "Next.js • PostgreSQL"
    },
    {
        title: "Face Recognition",
        category: "Enterprise Security",
        description: "Real-time CCTV facial recognition with 95%+ accuracy for enterprise deployments.",
        metric: "<1s processing",
        color: "#3B82F6",
        gradient: "from-blue-500/20 to-blue-950/20",
        link: "/products/face-recognition",
        tech: "Python • TensorFlow"
    },
    {
        title: "Expense Tracker",
        category: "Mobile Finance",
        description: "AI-powered SMS parsing for automated expense tracking. 200+ beta users.",
        metric: "Zero manual entry",
        color: "#F59E0B",
        gradient: "from-amber-500/20 to-amber-950/20",
        link: "/products/expense-tracker",
        tech: "Flutter • ML"
    }
];

export function SocialDemoGrid() {
    return (
        <section className="py-20 bg-black border-t border-zinc-900 w-full">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
                    <div>
                        <h2 className="text-4xl font-bold text-white mb-3">Production Systems</h2>
                        <p className="text-zinc-400">Real software. Real clients. Real results.</p>
                    </div>
                    <Link
                        href="/products"
                        className="text-sm text-emerald-500 hover:text-emerald-400 mt-4 md:mt-0 inline-flex items-center gap-1"
                    >
                        View All Products →
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {showcases.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Link href={item.link}>
                                <div className={`group relative h-[400px] bg-gradient-to-br ${item.gradient} border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-700 transition-all hover:scale-[1.02]`}>
                                    {/* Background pattern */}
                                    <div className="absolute inset-0 opacity-5">
                                        <div className="absolute inset-0" style={{
                                            backgroundImage: `radial-gradient(circle at 1px 1px, ${item.color} 1px, transparent 0)`,
                                            backgroundSize: '40px 40px'
                                        }}></div>
                                    </div>

                                    {/* Content */}
                                    <div className="relative h-full flex flex-col justify-between p-6">
                                        {/* Header */}
                                        <div>
                                            <div
                                                className="inline-block px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider mb-4"
                                                style={{
                                                    backgroundColor: `${item.color}20`,
                                                    color: item.color,
                                                    border: `1px solid ${item.color}30`
                                                }}
                                            >
                                                {item.category}
                                            </div>
                                            <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                                            <p className="text-sm text-zinc-300 leading-relaxed mb-4">{item.description}</p>
                                        </div>

                                        {/* Footer */}
                                        <div>
                                            {/* Metric */}
                                            <div className="mb-4 pb-4 border-b border-zinc-800">
                                                <div
                                                    className="text-2xl font-bold mb-1"
                                                    style={{ color: item.color }}
                                                >
                                                    {item.metric}
                                                </div>
                                                <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                                                    {item.tech}
                                                </div>
                                            </div>

                                            {/* CTA */}
                                            <div
                                                className="flex items-center justify-between text-sm font-medium group-hover:translate-x-1 transition-transform"
                                                style={{ color: item.color }}
                                            >
                                                <span>Learn More</span>
                                                <span>→</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
