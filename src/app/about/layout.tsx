import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Bibek Kumar Thagunna - Founder & Systems Engineer",
    description: "Bibek Kumar Thagunna is the Founder of Velayon Dynamics and a Systems Engineer based in Nepal. He specializes in Agentic AI orchestration to build enterprise-grade software at speed.",
    keywords: "about Bibek Kumar Thagunna, Velayon founder, systems engineer biography, Nepal tech entrepreneur, artificial intelligence engineer",
    openGraph: {
        title: "About Bibek Kumar Thagunna - Founder & Systems Engineer",
        description: "Founder of Velayon Dynamics and Systems Engineer using Agentic AI to build the future.",
        type: "profile",
        url: "https://bibek.velayon.com/about"
    },
    alternates: {
        canonical: "https://bibek.velayon.com/about"
    }
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
