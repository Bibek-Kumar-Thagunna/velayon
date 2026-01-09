import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Velayon Dynamics - Enterprise SaaS from Nepal by Bibek Kumar Thagunna",
    description: "Building the software backbone of tomorrow from Kathmandu, Nepal. Founded by Bibek Kumar Thagunna, Velayon Dynamics builds production-grade SaaS platforms for global markets. Meet the founder and learn our story.",
    keywords: "about Velayon, Velayon Dynamics, Nepal software company, Bibek Kumar Thagunna, enterprise software Nepal, SaaS company Nepal, Kathmandu software",
    openGraph: {
        title: "About Velayon Dynamics - Enterprise SaaS from Nepal",
        description: "Building the software backbone of tomorrow from Kathmandu, Nepal. Founded by Bibek Kumar Thagunna.",
        type: "website",
        url: "https://velayon.com/about"
    },
    alternates: {
        canonical: "https://velayon.com/about"
    }
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
