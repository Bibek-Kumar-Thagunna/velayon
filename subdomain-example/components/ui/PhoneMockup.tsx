"use client";

import { motion } from "framer-motion";

interface PhoneMockupProps {
    className?: string;
    imageSrc?: string;
}

export function PhoneMockup({ className = "", imageSrc }: PhoneMockupProps) {
    return (
        <div className={`relative flex items-center justify-center ${className}`}>
            {/* 3D Container - Responsive Sizing */}
            <motion.div
                initial={{ rotateY: -20, rotateX: 10, opacity: 0, y: 50 }}
                animate={{ rotateY: -12, rotateX: 5, opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative w-full max-w-[240px] sm:max-w-[280px] lg:max-w-[300px] xl:max-w-[320px] aspect-[9/19] bg-[#050505] rounded-[2rem] sm:rounded-[2.5rem] border-[6px] sm:border-[8px] border-[#1A1A1A] shadow-2xl"
                style={{
                    transformStyle: "preserve-3d",
                    boxShadow:
                        "20px 20px 60px rgba(0,0,0,0.5), -5px -5px 20px rgba(255,255,255,0.02)",
                }}
            >
                {/* Screen Content */}
                <div className="absolute inset-0 bg-[#0A0A0A] rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden flex flex-col items-center justify-center p-3 sm:p-4">
                    {/* Dynamic Island / Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 sm:w-32 h-5 sm:h-6 bg-[#000] rounded-b-xl z-20 flex items-center justify-center gap-2">
                        <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-[#1A1A1A]" />
                        <div className="w-8 sm:w-10 h-1 sm:h-1.5 rounded-full bg-[#1A1A1A]" />
                    </div>

                    {imageSrc ? (
                        <img
                            src={imageSrc}
                            alt="App Screen"
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center relative">
                            {/* Grid Background in Phone */}
                            <div
                                className="absolute inset-0 opacity-20"
                                style={{
                                    backgroundImage:
                                        "linear-gradient(#22C55E 1px, transparent 1px), linear-gradient(90deg, #22C55E 1px, transparent 1px)",
                                    backgroundSize: "30px 30px",
                                }}
                            />

                            {/* Floating QR Code Effect */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="w-24 sm:w-32 h-24 sm:h-32 border-2 border-[#22C55E] rounded-xl flex items-center justify-center bg-[#22C55E]/10 relative z-10 backdrop-blur-sm"
                            >
                                <div className="w-16 sm:w-24 h-16 sm:h-24 bg-white/90 rounded-sm" />
                                {/* Scan Line */}
                                <motion.div
                                    className="absolute left-0 right-0 h-0.5 bg-[#22C55E] shadow-[0_0_10px_#22C55E]"
                                    animate={{ top: ["10%", "90%", "10%"] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="mt-6 sm:mt-8 text-center"
                            >
                                <div className="h-2 w-20 sm:w-24 bg-[#2A2A2A] rounded-full mx-auto mb-2" />
                                <div className="h-2 w-12 sm:w-16 bg-[#2A2A2A] rounded-full mx-auto" />
                            </motion.div>

                            {/* Success Toast Animation */}
                            <motion.div
                                className="absolute bottom-8 sm:bottom-12 bg-[#22C55E] text-black px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold"
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 1.5, duration: 0.5 }}
                            >
                                Attendance Marked
                            </motion.div>
                        </div>
                    )}
                </div>

                {/* Reflection/Glare */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent rounded-[2rem] sm:rounded-[2.5rem] pointer-events-none" />
            </motion.div>

            {/* Ambient Shadow floor */}
            <div className="absolute -bottom-6 sm:-bottom-10 left-1/2 -translate-x-1/2 w-32 sm:w-40 h-6 sm:h-8 bg-black/50 blur-xl rounded-full" />
        </div>
    );
}
