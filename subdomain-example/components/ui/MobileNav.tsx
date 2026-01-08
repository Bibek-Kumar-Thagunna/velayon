"use client";

import { useState } from "react";

export function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Hamburger Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 text-[#A1A1AA] hover:text-white transition-colors"
                aria-label="Toggle menu"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {isOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
            </button>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="fixed inset-0 z-40 md:hidden">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Menu Panel */}
                    <div className="absolute top-[73px] left-0 right-0 bg-[#0A0A0A] border-b border-[#2A2A2A] py-6 px-6">
                        <div className="flex flex-col gap-4">
                            <a
                                href="#features"
                                className="text-lg text-[#A1A1AA] hover:text-white transition-colors py-2"
                                onClick={() => setIsOpen(false)}
                            >
                                Features
                            </a>
                            <a
                                href="#pricing"
                                className="text-lg text-[#A1A1AA] hover:text-white transition-colors py-2"
                                onClick={() => setIsOpen(false)}
                            >
                                Pricing
                            </a>
                            <button
                                className="mt-2 w-full px-6 py-3 bg-[#22C55E] text-black font-semibold rounded-lg hover:bg-[#16A34A] transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Start Free Trial
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
