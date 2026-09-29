"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    { href: "/work", label: "Work" },
    { href: "/notes", label: "Notes" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

export function Navigation() {
    const pathname = usePathname();
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
            setScrollProgress(progress);
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Scroll Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 h-[2px] bg-[#22C55E] z-[100]"
                style={{ width: `${scrollProgress}%` }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.1 }}
            />

            {/* Navigation */}
            <motion.nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? "bg-[#050505]/80 backdrop-blur-md border-b border-[#1A1A1A]"
                    : "bg-transparent"
                    }`}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
                <div className="max-w-6xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link
                            href="/"
                            className="group flex items-center gap-3"
                        >
                            <div className="w-8 h-8 rounded-md border border-[#333333] flex items-center justify-center bg-[#0A0A0A] group-hover:border-[#22C55E] transition-colors">
                                <span className="font-mono text-sm text-white">V</span>
                            </div>
                            <span className="font-mono text-sm text-[#A1A1AA] hidden sm:block">
                                velayon
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="relative text-sm transition-colors duration-200 group"
                                    >
                                        <span className={`${isActive ? 'text-white' : 'text-[#A1A1AA] group-hover:text-white'}`}>
                                            {link.label}
                                        </span>
                                        {isActive && (
                                            <motion.div
                                                className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[#F59E0B] to-[#F97316]"
                                                layoutId="navbar-indicator"
                                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                            />
                                        )}
                                    </Link>
                                );
                            })}

                            {/* Status Indicator */}
                            <div className="flex items-center gap-2 pl-6 border-l border-[#2A2A2A]">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22C55E]"></span>
                                </span>
                                <span className="text-xs font-mono text-[#6B7280]">AVAILABLE</span>
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 text-[#A1A1AA] hover:text-white transition-colors"
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {isMobileMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="fixed inset-0 z-40 md:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {/* Backdrop */}
                        <motion.div
                            className="absolute inset-0 bg-[#050505]/95 backdrop-blur-md"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                        />

                        {/* Menu Content */}
                        <motion.div
                            className="absolute inset-x-0 top-16 p-6"
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ delay: 0.1 }}
                        >
                            <div className="flex flex-col gap-4">
                                {navLinks.map((link, index) => {
                                    const isActive = pathname === link.href;
                                    return (
                                        <motion.div
                                            key={link.href}
                                            initial={{ x: -20, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: 0.1 + index * 0.05 }}
                                        >
                                            <Link
                                                href={link.href}
                                                className="relative block py-3 text-lg border-b border-[#1A1A1A] transition-colors"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                <span className={`${isActive ? 'text-white' : 'text-[#E5E5E5]'}`}>
                                                    {link.label}
                                                </span>
                                                {isActive && (
                                                    <motion.div
                                                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#F59E0B] to-[#F97316]"
                                                        layoutId="mobile-navbar-indicator"
                                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                                    />
                                                )}
                                            </Link>
                                        </motion.div>
                                    );
                                })}

                                {/* Status Indicator - Mobile */}
                                <motion.div
                                    className="flex items-center gap-2 pt-4"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22C55E]"></span>
                                    </span>
                                    <span className="text-xs font-mono text-[#6B7280]">AVAILABLE FOR WORK</span>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
