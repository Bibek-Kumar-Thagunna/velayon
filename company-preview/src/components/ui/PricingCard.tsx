"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export interface PricingTier {
    name: string;
    price: string;
    period?: string;
    description: string;
    features: string[];
    cta: string;
    ctaLink: string;
    highlighted?: boolean;
}

interface PricingCardProps {
    tier: PricingTier;
    accentColor?: string;
    index?: number;
}

export function PricingCard({ tier, accentColor = "#22C55E", index = 0 }: PricingCardProps) {
    return (
        <motion.div
            className={`relative border rounded-xl p-8 bg-zinc-900/20 hover:bg-zinc-900/40 transition-all ${tier.highlighted
                    ? "border-emerald-500 ring-2 ring-emerald-500/20"
                    : "border-zinc-800 hover:border-zinc-700"
                }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            {/* Highlighted Badge */}
            {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span
                        className="px-4 py-1 rounded-full text-xs font-mono uppercase tracking-wider"
                        style={{
                            background: `linear-gradient(135deg, ${accentColor}, ${accentColor}dd)`,
                            color: "#000",
                        }}
                    >
                        Most Popular
                    </span>
                </div>
            )}

            {/* Tier Name */}
            <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>

            {/* Description */}
            <p className="text-sm text-zinc-400 mb-6">{tier.description}</p>

            {/* Price */}
            <div className="mb-8">
                <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold text-white">{tier.price}</span>
                    {tier.period && (
                        <span className="text-lg text-zinc-500">{tier.period}</span>
                    )}
                </div>
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-8">
                {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                        <svg
                            className="w-5 h-5 flex-shrink-0 mt-0.5"
                            style={{ color: accentColor }}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                        <span className="text-zinc-300">{feature}</span>
                    </li>
                ))}
            </ul>

            {/* CTA Button */}
            <Link href={tier.ctaLink} className="block">
                <motion.button
                    className={`w-full py-3 px-6 rounded-lg font-medium transition-all ${tier.highlighted
                            ? "bg-white text-black hover:bg-zinc-200"
                            : "border border-zinc-700 text-white hover:bg-zinc-800 hover:border-zinc-600"
                        }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    {tier.cta}
                </motion.button>
            </Link>
        </motion.div>
    );
}
