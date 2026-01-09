"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

export function ContactForm() {
    const searchParams = useSearchParams();
    const productParam = searchParams?.get('product') || "";
    const planParam = searchParams?.get('plan') || "";

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        product: productParam,
        message: planParam ? `I'm interested in the ${planParam} plan.` : ""
    });
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

    // Update form when URL params change
    useEffect(() => {
        if (productParam) {
            setFormData(prev => ({ ...prev, product: productParam }));
        }
        if (planParam && !formData.message) {
            setFormData(prev => ({ ...prev, message: `I'm interested in the ${planParam} plan.` }));
        }
    }, [productParam, planParam]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");

        try {
            // Web3Forms API submission
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_API_KEY_HERE",
                    name: formData.name,
                    email: formData.email,
                    company: formData.company || "Not provided",
                    product: formData.product || "Not specified",
                    message: formData.message,
                    subject: `New Contact: ${formData.name} - ${formData.product || 'General Inquiry'}`,
                    from_name: "Velayon Contact Form",
                    // Optional: Add bot check
                    botcheck: ""
                }),
            });

            const result = await response.json();

            if (result.success) {
                setStatus("success");
                setFormData({ name: "", email: "", company: "", product: "", message: "" });

                // Reset success message after 5 seconds
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                throw new Error("Form submission failed");
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setStatus("error");

            // Reset error message after 5 seconds
            setTimeout(() => setStatus("idle"), 5000);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Honeypot for bot protection */}
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

            {/* Name & Email */}
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">
                        Full Name *
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500 transition-colors"
                        placeholder="John Doe"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
                        Email Address *
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500 transition-colors"
                        placeholder="john@company.com"
                    />
                </div>
            </div>

            {/* Company & Product */}
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="company" className="block text-sm font-medium text-zinc-300 mb-2">
                        Company Name
                    </label>
                    <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500 transition-colors"
                        placeholder="Acme Inc."
                    />
                </div>
                <div>
                    <label htmlFor="product" className="block text-sm font-medium text-zinc-300 mb-2">
                        Product Interest
                    </label>
                    <select
                        id="product"
                        name="product"
                        value={formData.product}
                        onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                        className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-emerald-500 transition-colors"
                    >
                        <option value="">Select a product...</option>
                        <option value="attendify">Attendify (Education)</option>
                        <option value="hotel-management">HMS Core (Hospitality)</option>
                        <option value="face-recognition">Face Recognition (Security)</option>
                        <option value="expense-tracker">Expense Tracker (Finance)</option>
                        <option value="multiple">Multiple Products</option>
                        <option value="custom">Custom Solution</option>
                    </select>
                </div>
            </div>

            {/* Message */}
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">
                    Message *
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                    placeholder="Tell us about your requirements..."
                />
            </div>

            {/* Submit Button */}
            <div>
                <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full px-8 py-4 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                    {status === "sending" && (
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                    )}
                    {status === "sending" ? "Sending..." : "Send Message"}
                </button>
            </div>

            {/* Success Message */}
            {status === "success" && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-emerald-500 text-sm"
                >
                    ✓ Message sent successfully! We'll be in touch within 24 hours.
                </motion.div>
            )}

            {/* Error Message */}
            {status === "error" && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-500 text-sm"
                >
                    ✗ Something went wrong. Please try again or email us directly at contact@velayon.com
                </motion.div>
            )}
        </form>
    );
}
