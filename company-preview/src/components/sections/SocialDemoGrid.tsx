"use client";

import { motion } from "framer-motion";

const demos = [
    {
        title: "Attendify 2.0 Launch",
        platform: "YouTube Shorts",
        views: "1.2k views",
        color: "#FF0000",
        video: "https://www.youtube.com/embed/placeholder1" // Placeholder
    },
    {
        title: "AI Agent Workflow",
        platform: "TikTok",
        views: "850 views",
        color: "#00f2ea",
        video: "https://www.tiktok.com/embed/placeholder2"
    },
    {
        title: "Face Recog Demo",
        platform: "Instagram",
        views: "2.1k views",
        color: "#E1306C",
        video: "https://instagram.com/p/placeholder3"
    }
];

export function SocialDemoGrid() {
    return (
        <section className="py-24 bg-zinc-950 border-t border-white/5 w-full overflow-hidden">
            {/* Full width container, no max-w constraint */}
            <div className="w-full px-4 md:px-0">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 px-6 max-w-7xl mx-auto">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-2">Systems in Action</h2>
                        <p className="text-zinc-400">Real deployments. Real metrics. Documented live.</p>
                    </div>
                    <a href="#" className="text-sm text-emerald-500 hover:text-emerald-400 mt-4 md:mt-0">View all Media →</a>
                </div>

                {/* Grid spanning full width */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-1 w-full">
                    {demos.map((demo, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative h-[600px] w-full bg-zinc-900 overflow-hidden border-r border-zinc-800 last:border-r-0 hover:border-zinc-700 transition-colors"
                        >
                            {/* Placeholder for Video - Full Height */}
                            <div className="absolute inset-0 flex items-center justify-center bg-zinc-900 group-hover:bg-zinc-800 transition-colors cursor-pointer">
                                <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center backdrop-blur-sm border border-white/10 group-hover:scale-110 transition-transform">
                                    <span className="text-2xl text-white">▶</span>
                                </div>
                            </div>

                            {/* Overlay Info */}
                            <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black via-black/50 to-transparent">
                                <div className="text-xs font-mono mb-2 uppercase tracking-wider" style={{ color: demo.color }}>
                                    {demo.platform} • {demo.views}
                                </div>
                                <h3 className="text-2xl font-bold text-white leading-tight mb-2">
                                    {demo.title}
                                </h3>
                                <p className="text-sm text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
                                    Click to watch system demonstration data visualization.
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
