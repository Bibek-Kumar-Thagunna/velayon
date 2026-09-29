import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Engineering Notes - Bibek Kumar Thagunna",
    description: "Technical articles on Agentic AI, system architecture, and cross-platform development. Read about how Bibek Kumar Thagunna builds production software with AI agents.",
    keywords: "technical blog, engineering notes, Agentic AI, system architecture, Flutter vs React, AI coding, software engineering blog, Bibek Kumar Thagunna writer",
    openGraph: {
        title: "Engineering Notes - Bibek Kumar Thagunna",
        description: "Thoughts on Agentic AI, system architecture, and the future of software development.",
        type: "website",
        url: "https://bibek.velayon.com/notes"
    },
    alternates: {
        canonical: "https://bibek.velayon.com/notes"
    }
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
