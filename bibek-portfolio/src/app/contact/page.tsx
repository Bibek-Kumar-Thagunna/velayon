"use client";

import { motion } from "framer-motion";
import { GridBackground, Navigation, Footer } from "@/components";
import { PersonalContactForm } from "@/components/ui/PersonalContactForm";

export default function Contact() {
    return (
        <GridBackground>
            <Navigation />

            <main className="pt-32 pb-20 px-[clamp(1.25rem,8vw,4rem)]">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-16"
                    >
                        <span className="section-label block mb-4">&lt;06.CONTACT&gt;</span>
                        <h1 className="text-headline text-white mb-6">
                            Let's Work Together
                        </h1>
                        <p className="text-xl text-[#A1A1AA] max-w-2xl">
                            I'm currently available for remote contracts and consulting opportunities.
                            If you have a complex system to build, I'd love to hear about it.
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-[1fr_300px] gap-12 lg:gap-20">
                        {/* Form Column */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <PersonalContactForm />
                        </motion.div>

                        {/* Sidebar Column */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="space-y-12"
                        >
                            <div>
                                <h3 className="font-mono text-sm text-white/50 mb-4">EMAIL</h3>
                                <a href="mailto:contact@velayon.com" className="text-white hover:text-white/80 transition-colors block">
                                    contact@velayon.com
                                </a>
                            </div>

                            <div>
                                <h3 className="font-mono text-sm text-white/50 mb-4">SOCIALS</h3>
                                <div className="flex flex-col gap-2">
                                    <a href="https://github.com/Bibek-Kumar-Thagunna" target="_blank" rel="noopener noreferrer" className="text-[#A1A1AA] hover:text-white transition-colors">
                                        GitHub ↗
                                    </a>
                                    <a href="https://linkedin.com/in/bibek-kumar-thagunna" target="_blank" rel="noopener noreferrer" className="text-[#A1A1AA] hover:text-white transition-colors">
                                        LinkedIn ↗
                                    </a>
                                    <a href="https://x.com/bibek_thagunna" target="_blank" rel="noopener noreferrer" className="text-[#A1A1AA] hover:text-white transition-colors">
                                        X (Twitter) ↗
                                    </a>
                                </div>
                            </div>

                            <div>
                                <h3 className="font-mono text-sm text-white/50 mb-4">LOCATION</h3>
                                <p className="text-[#A1A1AA]">
                                    Kathmandu, Nepal<br />
                                    (UTC+5:45)
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </main>

            <Footer />
        </GridBackground>
    );
}
