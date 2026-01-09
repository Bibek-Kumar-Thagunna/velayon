"use client";

import { motion } from "framer-motion";

type Platform = 'playstore' | 'appstore' | 'windows' | 'macos' | 'linux' | 'web';

interface AppStoreBadgeProps {
    platform: Platform;
    url: string;
    available?: boolean;
    comingSoon?: boolean;
}

const badgeConfig: Record<Platform, {
    label: string;
    sublabel: string;
    icon: string;
    bg: string;
}> = {
    playstore: {
        label: "Google Play",
        sublabel: "GET IT ON",
        icon: "▶",
        bg: "linear-gradient(135deg, #34A853, #1E8E3E)"
    },
    appstore: {
        label: "App Store",
        sublabel: "DOWNLOAD ON THE",
        icon: "🍎",
        bg: "linear-gradient(135deg, #000000, #1A1A1A)"
    },
    windows: {
        label: "Windows",
        sublabel: "DOWNLOAD FOR",
        icon: "⊞",
        bg: "linear-gradient(135deg, #0078D4, #005A9E)"
    },
    macos: {
        label: "macOS",
        sublabel: "DOWNLOAD FOR",
        icon: "",
        bg: "linear-gradient(135deg, #000000, #1A1A1A)"
    },
    linux: {
        label: "Linux",
        sublabel: "DOWNLOAD FOR",
        icon: "🐧",
        bg: "linear-gradient(135deg, #FCC624, #E89F00)"
    },
    web: {
        label: "Web App",
        sublabel: "LAUNCH",
        icon: "🌐",
        bg: "linear-gradient(135deg, #22C55E, #16A34A)"
    }
};

export function AppStoreBadge({
    platform,
    url,
    available = true,
    comingSoon = false
}: AppStoreBadgeProps) {
    const config = badgeConfig[platform];

    const content = (
        <div className="flex items-center gap-3 px-5 py-3 rounded-lg border border-zinc-800 bg-black hover:border-zinc-700 transition-all group min-w-[200px]">
            {/* Icon */}
            <div className="text-2xl">{config.icon}</div>

            {/* Text */}
            <div className="flex-1">
                <div className="text-[10px] text-zinc-500 uppercase tracking-wider">
                    {config.sublabel}
                </div>
                <div className="text-sm font-semibold text-white">
                    {config.label}
                </div>
            </div>

            {/* Arrow or Badge */}
            {comingSoon ? (
                <span className="text-xs text-amber-500 font-mono">SOON</span>
            ) : (
                <svg className="w-4 h-4 text-zinc-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            )}
        </div>
    );

    if (!available || comingSoon) {
        return (
            <motion.div
                className="opacity-50 cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
            >
                {content}
            </motion.div>
        );
    }

    return (
        <motion.a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
        >
            {content}
        </motion.a>
    );
}

interface AppStoreBadgesProps {
    badges: Array<{
        platform: Platform;
        url: string;
        available?: boolean;
        comingSoon?: boolean;
    }>;
}

export function AppStoreBadges({ badges }: AppStoreBadgesProps) {
    return (
        <div className="flex flex-wrap gap-3">
            {badges.map((badge) => (
                <AppStoreBadge key={badge.platform} {...badge} />
            ))}
        </div>
    );
}
