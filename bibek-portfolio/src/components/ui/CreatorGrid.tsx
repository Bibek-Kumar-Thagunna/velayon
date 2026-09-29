"use client";

import { motion } from "framer-motion";
import { SpotlightCard } from "./SpotlightCard";

const socialStats = [
    {
        platform: "YouTube",
        handle: "@velayon",
        label: "Tech Shorts & demos",
        url: "https://youtube.com/@velayon",
        color: "#FF0000",
        icon: "▶"
    },
    {
        platform: "X / Twitter",
        handle: "@velayon",
        label: "Thoughts & Engineering",
        url: "https://x.com/velayon",
        color: "#1DA1F2",
        icon: "𝕏"
    },
    {
        platform: "GitHub",
        handle: "velayon",
        label: "Open Source Code",
        url: "https://github.com/velayon",
        color: "#ffffff",
        icon: "💻"
    },
    {
        platform: "LinkedIn",
        handle: "bibek-thagunna",
        label: "Professional Network",
        url: "https://linkedin.com/in/bibek-thagunna",
        color: "#0077B5",
        icon: "in"
    },
    {
        platform: "Play Store",
        handle: "Velayon Apps",
        label: "Android Products",
        url: "#",
        color: "#3DDC84",
        icon: "📱"
    },
    {
        platform: "TikTok",
        handle: "@velayon",
        label: "Viral Tech Content",
        url: "https://tiktok.com/@velayon",
        color: "#00f2ea",
        icon: "🎵"
    }
];

export function CreatorGrid() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {socialStats.map((stat, idx) => (
                <a
                    key={stat.platform}
                    href={stat.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                >
                    <SpotlightCard className="h-full bg-[#0A0A0A] border border-[#1A1A1A] group-hover:border-[#333] transition-colors" spotlightColor={stat.color + "20"}>
                        <div className="p-4 flex flex-col h-full">
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-2xl">{stat.icon}</span>
                                <span className="text-[10px] font-mono opacity-50 uppercase tracking-wider">{stat.platform}</span>
                            </div>
                            <div className="mt-auto">
                                <div className="text-white font-medium group-hover:text-[var(--hover-color)] transition-colors" style={{ "--hover-color": stat.color } as any}>
                                    {stat.handle}
                                </div>
                                <div className="text-xs text-[#6B7280] mt-1">{stat.label}</div>
                            </div>
                        </div>
                    </SpotlightCard>
                </a>
            ))}
        </div>
    );
}
