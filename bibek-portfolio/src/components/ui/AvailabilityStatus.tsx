"use client";

import { motion } from "framer-motion";

interface AvailabilityStatusProps {
    status: "available" | "limited" | "unavailable";
    message?: string;
}

const statusConfig = {
    available: {
        color: "#22C55E",
        label: "Available",
        description: "Open to new opportunities",
    },
    limited: {
        color: "#F59E0B",
        label: "Limited",
        description: "Selective availability",
    },
    unavailable: {
        color: "#6B7280",
        label: "Unavailable",
        description: "Not taking new work",
    },
};

export function AvailabilityStatus({
    status = "available",
    message
}: AvailabilityStatusProps) {
    const config = statusConfig[status];

    return (
        <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#0A0A0A] border border-[#2A2A2A] rounded-md">
            <div className="flex items-center gap-2">
                <motion.span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: config.color }}
                    animate={status === "available" ? {
                        boxShadow: [
                            `0 0 0 0 ${config.color}40`,
                            `0 0 0 4px ${config.color}00`,
                        ],
                    } : {}}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <span
                    className="font-mono text-xs font-medium"
                    style={{ color: config.color }}
                >
                    {config.label}
                </span>
            </div>
            <span className="text-[#6B7280] text-xs">
                {message || config.description}
            </span>
        </div>
    );
}
