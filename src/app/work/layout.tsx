import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Work & Projects - Systems Built by Bibek Kumar Thagunna",
    description: "Explore production-grade systems engineered by Bibek Kumar Thagunna. Attendify, HMS Core, Face Recognition Dashboard, and more. Built with Agentic AI, Flutter, and Next.js.",
    keywords: "Bibek Kumar Thagunna projects, Velayon Dynamics work, portfolio, system architecture, software engineering projects, Flutter apps, full-stack development",
    openGraph: {
        title: "Work & Projects - Systems Built by Bibek Kumar Thagunna",
        description: "Production-grade systems including Attendify, HMS Core, and Face Recognition.",
        type: "website",
        url: "https://bibek.velayon.com/work"
    },
    alternates: {
        canonical: "https://bibek.velayon.com/work"
    }
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
