import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Resume / CV - Bibek Kumar Thagunna",
    description: "Professional resume of Bibek Kumar Thagunna. Systems Engineer, Founder of Velayon Dynamics. Experience in Agentic AI, Flutter, Node.js, and Enterprise Systems.",
    keywords: "Bibek Kumar Thagunna resume, CV, curriculum vitae, software engineer resume, systems architect CV, hire developer",
    openGraph: {
        title: "Resume / CV - Bibek Kumar Thagunna",
        description: "Professional experience and skills of Bibek Kumar Thagunna, Systems Engineer.",
        type: "profile",
        url: "https://bibek.velayon.com/resume"
    },
    alternates: {
        canonical: "https://bibek.velayon.com/resume"
    }
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
