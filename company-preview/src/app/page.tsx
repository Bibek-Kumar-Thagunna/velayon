"use client";

import Link from "next/link";
import { GridBackground } from "../components/GridBackground";
import { motion } from "framer-motion";
import { WorldGlobe } from "@/components/ui/WorldGlobe";
import { SocialDemoGrid } from "@/components/sections/SocialDemoGrid";
import { Navigation } from "@/components/ui/Navigation";

export default function CompanySite() {
  return (
    <GridBackground suppressHydrationWarning>
      <div className="min-h-screen text-white text-sm selection:bg-emerald-500/30" suppressHydrationWarning>

        {/* Navigation */}
        <Navigation />

        {/* ============================================
            HERO SECTION - Responsive Architecture
            Mobile (<1024px): Single column, globe as background
            Desktop (≥1024px): Two-column grid
            ============================================ */}
        <section className="relative w-full min-h-[100dvh] overflow-hidden">

          {/* MOBILE/TABLET GLOBE BACKGROUND (visible < lg) */}
          <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none lg:hidden overflow-hidden">
            {/* Fixed square container - uses viewport height to ensure full sphere */}
            <div className="w-[90vh] aspect-square opacity-30">
              <WorldGlobe />
            </div>
          </div>

          {/* MAIN CONTENT CONTAINER */}
          <div className="relative z-10 w-full min-h-[100dvh] flex items-center">
            <div className="w-full max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1800px] mx-auto px-[clamp(1rem,4vw,3rem)] py-[clamp(6rem,15vh,10rem)]">

              {/* RESPONSIVE GRID: 1 col mobile, 2 col desktop */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(2rem,5vw,4rem)] items-center">

                {/* TEXT COLUMN */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">

                  {/* Status Badge */}
                  <motion.div
                    className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur px-3 py-1.5"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    <span className="text-xs font-mono text-zinc-300">SYSTEMS OPERATIONAL</span>
                  </motion.div>

                  {/* Main Headline - Fluid Typography */}
                  <motion.h1
                    className="text-hero text-white mb-[clamp(1rem,2vw,1.5rem)]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    Enterprise Software.
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">
                      Built to Scale.
                    </span>
                  </motion.h1>

                  {/* Description */}
                  <motion.p
                    className="text-subhead text-zinc-400 mb-[clamp(1.5rem,3vw,2.5rem)] max-w-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    Production-ready SaaS platforms solving real business problems across industries.
                    Built from Nepal, deployed globally.
                  </motion.p>

                  {/* CTA Buttons */}
                  <motion.div
                    className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <Link
                      href="/contact?product=multiple&plan=trial"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-zinc-200 transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                      Start Free Trial
                    </Link>
                    <Link
                      href="/products"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-zinc-700 text-white font-medium rounded-full hover:bg-zinc-900 hover:border-zinc-600 transition-all"
                    >
                      View Products
                    </Link>
                  </motion.div>
                </div>

                {/* DESKTOP GLOBE COLUMN (visible ≥ lg) */}
                <div className="hidden lg:flex items-center justify-center order-1 lg:order-2">
                  {/* Globe container - fixed sizes at each breakpoint for predictable rendering */}
                  <div className="w-[500px] lg:w-[550px] xl:w-[600px] 2xl:w-[700px] aspect-square">
                    <WorldGlobe />
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-[clamp(1.5rem,4vh,3rem)] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6, y: [0, 6, 0] }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1, repeat: Infinity, repeatDelay: 0.5 }}
            onClick={() => document.getElementById('demos')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase">SCROLL</span>
            <svg className="w-4 h-4 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </section>

        {/* Production Systems - Shows all 4 products */}
        <div id="demos" className="w-full bg-black border-t border-zinc-900">
          <SocialDemoGrid />
        </div>

        {/* Footer */}
        <footer className="border-t border-[#1a1a1a] py-12 px-[clamp(1rem,4vw,3rem)] bg-[#050505]">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-sm text-zinc-500">
              © 2026 VELAYON DYNAMICS. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm font-mono text-zinc-400">
              <Link href="/about" className="hover:text-white transition-colors">ABOUT</Link>
              <Link href="/pricing" className="hover:text-white transition-colors">PRICING</Link>
              <Link href="/contact" className="hover:text-white transition-colors">CONTACT</Link>
            </div>
          </div>
        </footer>
      </div>
    </GridBackground>
  );
}
