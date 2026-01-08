"use client";

import { useEffect } from "react";

export default function ResumePage() {
    // Auto-trigger print on load for convenience (optional, maybe distinct button is better)
    // keeping it manual for now so they can view it first.

    return (
        <div className="min-h-screen bg-white text-black p-8 md:p-16 font-sans">
            {/* Print Styles */}
            <style jsx global>{`
                @media print {
                    @page {
                        margin: 0;
                        size: auto;
                    }
                    body {
                        background: white;
                        color: black;
                        -webkit-print-color-adjust: exact;
                    }
                    .no-print {
                        display: none !important;
                    }
                    .page {
                        margin: 0;
                        padding: 1cm;
                        box-shadow: none;
                        max-width: none;
                        width: auto;
                    }
                    section {
                        break-inside: avoid;
                    }
                }
            `}</style>

            {/* INSTRUCTION BANNER (Visible on screen only) */}
            <div className="max-w-[21cm] mx-auto mb-8 bg-blue-50 border-l-4 border-blue-500 p-4 rounded text-blue-900 no-print">
                <h3 className="font-bold mb-1">📢 How to Turn This Into a PDF:</h3>
                <ol className="list-decimal ml-4 text-sm space-y-1">
                    <li>Click the <strong>"Save as PDF"</strong> button below (bottom-right).</li>
                    <li>In the print window, select <strong>"Save to PDF"</strong> as the destination.</li>
                    <li><strong>Important:</strong> Save the file as <code>resume.pdf</code> inside your project folder at:</li>
                    <li className="font-mono bg-blue-100 inline-block px-1 rounded mt-1">velayon/public/resume.pdf</li>
                </ol>
            </div>

            <div className="max-w-[21cm] mx-auto bg-white shadow-xl print:shadow-none p-[1cm] border print:border-none border-gray-200 text-sm leading-snug">
                {/* Header */}
                <header className="border-b-2 border-black pb-4 mb-4">
                    <h1 className="text-3xl font-bold uppercase tracking-wider mb-1">Bibek Kumar Thagunna</h1>
                    <h2 className="text-lg font-mono text-gray-700 mb-2">Systems Engineer & Agentic AI Architect</h2>

                    <div className="flex flex-wrap gap-4 text-xs font-medium text-gray-600">
                        <span className="flex items-center gap-1">📍 India / Nepal</span>
                        <span className="flex items-center gap-1">📞 +91 79831 83689</span>
                        <span className="flex items-center gap-1">✉️ bibek@velayon.com</span>
                        <span className="flex items-center gap-1">🌐 bibek.velayon.com</span>
                    </div>
                </header>

                {/* Summary */}
                <section className="mb-4">
                    <p className="text-gray-800 text-sm mb-0">
                        Agentic AI Systems Architect with a track record of shipping production-grade full-stack applications.
                        Specializes in building autonomous software systems by orchestrating the best-fit technologies for each problem domain.
                        Founder of Velayon, delivering scalable enterprise solutions across diverse industry verticals.
                    </p>
                </section>

                {/* Experience */}
                <section className="mb-4">
                    <h3 className="text-base font-bold uppercase border-b border-gray-300 mb-2 pb-1 tracking-wider">Experience</h3>

                    <div className="mb-2">
                        <div className="flex justify-between items-baseline mb-1">
                            <h4 className="font-bold text-base">Velayon</h4>
                            <span className="text-xs font-mono text-gray-600">Jan 2024 – Present</span>
                        </div>
                        <div className="italic text-gray-700 text-xs mb-1">Founder & Lead Systems Engineer</div>
                        <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-gray-800">
                            <li>
                                Architected <strong>Attendify</strong>, a production-ready SaaS for attendance tracking using Flutter and Firebase. Engineered location-fencing and QR validation protocols capable of handling 10k+ concurrent requests.
                            </li>
                            <li>
                                Developed a comprehensive <strong>Hotel Management System</strong> (ERP) with multi-tenant architecture. Implemented complex billing logic, RBAC, and regulatory compliance features ready for market deployment.
                            </li>
                            <li>
                                Engineered a high-performance <strong>Face Recognition Dashboard</strong> achieving 30fps live processing using Python and OpenCV. Optimized resource allocation for real-time edge deployment.
                            </li>
                            <li>
                                Implemented <strong>Agentic AI workflows</strong> to accelerate development velocity by 10x, enabling single-engineer delivery of complex, full-stack ecosystems.
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Projects */}
                <section className="mb-4">
                    <h3 className="text-base font-bold uppercase border-b border-gray-300 mb-2 pb-1 tracking-wider">Technical Projects</h3>

                    <div className="mb-2">
                        <div className="flex justify-between items-baseline">
                            <h4 className="font-bold text-sm">Automated Expense Tracker</h4>
                            <span className="text-xs text-gray-600">Flutter • Hive • Local ML</span>
                        </div>
                        <p className="text-xs text-gray-800 mt-0.5">
                            Built a financial tracking tool that parses transaction notifications locally on-device. Achieved 95% parsing accuracy in testing with zero server dependency.
                        </p>
                    </div>

                    <div className="mb-1">
                        <div className="flex justify-between items-baseline">
                            <h4 className="font-bold text-sm">Velayon Ecosystem (Monorepo)</h4>
                            <span className="text-xs text-gray-600">Next.js • Tailwind • Vercel</span>
                        </div>
                        <p className="text-xs text-gray-800 mt-0.5">
                            Designed a scalable multi-tenant frontend architecture hosting portfolio, company site, and SaaS product demos from a single codebase.
                        </p>
                    </div>
                </section>

                {/* Skills */}
                <section className="mb-4">
                    <h3 className="text-base font-bold uppercase border-b border-gray-300 mb-2 pb-1 tracking-wider">Technical Skills</h3>
                    <div className="grid grid-cols-[100px_1fr] gap-y-1 text-xs">
                        <div className="font-bold text-gray-700">Languages</div>
                        <div>TypeScript, Dart, Python, SQL</div>

                        <div className="font-bold text-gray-700">Frontend</div>
                        <div>Next.js, Flutter, React, Tailwind CSS, System Architecture</div>

                        <div className="font-bold text-gray-700">Backend & AI</div>
                        <div>Node.js, Postgres, Firebase, LLM Orchestration, LangChain</div>

                        <div className="font-bold text-gray-700">Tools</div>
                        <div>Git, Docker, Linux System Administration, Vercel</div>
                    </div>
                </section>

                {/* Education */}
                <section className="mb-0">
                    <h3 className="text-base font-bold uppercase border-b border-gray-300 mb-2 pb-1 tracking-wider">Education</h3>
                    <div>
                        <div className="flex justify-between items-baseline">
                            <h4 className="font-bold text-sm">Thapar Institute of Engineering and Technology</h4>
                            <span className="text-xs text-gray-600">Patiala, India</span>
                        </div>
                        <div className="flex justify-between text-xs">
                            <div className="text-gray-800">B.E. Computer Science Engineering</div>
                            <div className="font-mono text-gray-600">2027</div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Floating Action Button for Print */}
            <div className="fixed bottom-8 right-8 no-print">
                <button
                    onClick={() => window.print()}
                    className="bg-black text-white px-6 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-transform flex items-center gap-2"
                >
                    🖨️ Save as PDF
                </button>
            </div>

            <div className="fixed top-8 left-8 no-print">
                <a
                    href="/"
                    className="bg-gray-200 text-black px-4 py-2 rounded-lg text-sm hover:bg-gray-300 transition-colors"
                >
                    ← Back to Portfolio
                </a>
            </div>
        </div>
    );
}
