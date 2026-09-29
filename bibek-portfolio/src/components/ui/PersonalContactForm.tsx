"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function PersonalContactForm() {
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        type: "contract",
        message: ""
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    access_key: "46b1b056-40da-4716-84d2-b7d7ab735073",
                    name: formData.name,
                    email: formData.email,
                    subject: `New Opportunity: ${formData.type} - ${formData.name}`,
                    message: formData.message,
                    from_name: "Bibek's Portfolio",
                    botcheck: ""
                }),
            });

            const result = await response.json();

            if (result.success) {
                setStatus("success");
                setFormData({ name: "", email: "", type: "contract", message: "" });
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                throw new Error("Submission failed");
            }
        } catch (error) {
            console.error(error);
            setStatus("error");
            setTimeout(() => setStatus("idle"), 5000);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-mono text-zinc-400 mb-2">NAME</label>
                    <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full px-4 py-3 bg-[#0A0A0A] border border-zinc-800 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:border-white/20 transition-colors"
                        placeholder="Jane Doe"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-mono text-zinc-400 mb-2">EMAIL</label>
                    <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full px-4 py-3 bg-[#0A0A0A] border border-zinc-800 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:border-white/20 transition-colors"
                        placeholder="jane@company.com"
                    />
                </div>
            </div>

            <div>
                <label htmlFor="type" className="block text-sm font-mono text-zinc-400 mb-2">OPPORTUNITY TYPE</label>
                <select
                    id="type"
                    value={formData.type}
                    onChange={(e) => setFormData(prev => ({ ...prev, type: e.target.value }))}
                    className="w-full px-4 py-3 bg-[#0A0A0A] border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-white/20 transition-colors appearance-none"
                >
                    <option value="contract">Freelance / Contract</option>
                    <option value="fulltime">Full-time Role</option>
                    <option value="consulting">Technical Consulting</option>
                    <option value="other">Just saying hi</option>
                </select>
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-mono text-zinc-400 mb-2">MESSAGE</label>
                <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    className="w-full px-4 py-3 bg-[#0A0A0A] border border-zinc-800 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:border-white/20 transition-colors resize-none"
                    placeholder="Tell me about the project..."
                />
            </div>

            <button
                type="submit"
                disabled={status === "sending"}
                className="w-full px-8 py-4 bg-white text-black font-medium rounded-lg hover:bg-zinc-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
                {status === "sending" ? (
                    <span>Sending...</span>
                ) : (
                    <>
                        <span>Send Message</span>
                        <span>→</span>
                    </>
                )}
            </button>

            {status === "success" && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-emerald-500 text-sm text-center"
                >
                    Message sent. I'll get back to you shortly.
                </motion.div>
            )}

            {status === "error" && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 text-sm text-center"
                >
                    Something went wrong. Please try again.
                </motion.div>
            )}
        </form>
    );
}
