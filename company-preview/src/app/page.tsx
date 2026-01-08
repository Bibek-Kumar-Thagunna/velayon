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
      <div className="min-h-screen text-white text-sm selection:bg-emerald-500/30">

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
                    Global Systems.
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">
                      Zero Latency.
                    </span>
                  </motion.h1>

                  {/* Description */}
                  <motion.p
                    className="text-subhead text-zinc-400 mb-[clamp(1.5rem,3vw,2.5rem)] max-w-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    We engineer autonomous software infrastructure that powers businesses across borders.
                    From Nepal to the Cloud.
                  </motion.p>

                  {/* CTA Buttons */}
                  <motion.div
                    className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <Link
                      href="#products"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-zinc-200 transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                      View Active Systems
                    </Link>
                    <Link
                      href="/about"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-zinc-700 text-white font-medium rounded-full hover:bg-zinc-900 hover:border-zinc-600 transition-all"
                    >
                      About Velayon
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

        {/* Social Demo Grid */}
        <div id="demos" className="w-full bg-black border-t border-zinc-900">
          <SocialDemoGrid />
        </div>

        {/* Products Grid */}
        <section id="products" className="py-[clamp(4rem,10vh,8rem)] px-[clamp(1rem,4vw,3rem)] bg-zinc-950">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-[clamp(2rem,5vw,4rem)]">
              <div>
                <span className="text-emerald-500 font-mono text-xs uppercase tracking-widest mb-2 block">Enterprise Suite</span>
                <h2 className="text-headline">Deployed Infrastructure</h2>
              </div>
              <span className="text-zinc-500 font-mono text-sm">V.2026.1</span>
            </div>

            <div className="grid md:grid-cols-2 gap-[clamp(1rem,3vw,2rem)]">
              {[
                {
                  name: "Attendify",
                  badge: "SAAS",
                  desc: "Geolocation-fenced attendance tracking system handling 10k+ concurrent requests.",
                  tech: "Flutter • Firebase • Maps API",
                  link: "https://attendify.velayon.com"
                },
                {
                  name: "HMS Core",
                  badge: "ERP",
                  desc: "Full-stack hotel operations platform with multi-tenant billing and RBAC.",
                  tech: "Next.js • Node • Prisma",
                  link: null
                }
              ].map((product) => (
                <div key={product.name} className="group border border-zinc-800 bg-zinc-900/20 p-[clamp(1.25rem,3vw,2rem)] rounded-2xl hover:border-zinc-700 hover:bg-zinc-900/40 transition-all">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-lg bg-zinc-800/50 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-black transition-colors duration-300">
                      <span className="text-xl">⌘</span>
                    </div>
                    <span className="text-xs font-mono text-zinc-500 border border-zinc-800 px-2 py-1 rounded bg-black">{product.badge}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{product.name}</h3>
                  <p className="text-zinc-400 mb-6 leading-relaxed">{product.desc}</p>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-6 border-t border-zinc-800/50">
                    <span className="text-xs font-mono text-zinc-500">{product.tech}</span>
                    {product.link ? (
                      <Link href={product.link} className="text-sm font-medium text-emerald-500 hover:text-emerald-400 flex items-center gap-1">Launch App <span>→</span></Link>
                    ) : (
                      <span className="text-xs text-zinc-600">Enterprise Access Only</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-[#1a1a1a] py-12 px-[clamp(1rem,4vw,3rem)] bg-[#050505]">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-sm text-zinc-500">
              © 2026 VELAYON DYNAMICS. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm font-mono text-zinc-400">
              <Link href="#" className="hover:text-white transition-colors">LEGAL</Link>
              <Link href="#" className="hover:text-white transition-colors">PRIVACY</Link>
              <Link href="#" className="hover:text-white transition-colors">STATUS</Link>
            </div>
          </div>
        </footer>
      </div>
    </GridBackground>
  );
}
