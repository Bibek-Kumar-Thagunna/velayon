import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Products - Enterprise SaaS Suite | Velayon Dynamics",
    description: "Enterprise SaaS platforms by Velayon Dynamics: Attendify (education), HMS Core (hospitality), Face Recognition (security), Expense Tracker (finance). Production-ready solutions built from Nepal by Bibek Kumar Thagunna.",
    keywords: "Velayon products, enterprise SaaS, Attendify, HMS Core, hotel management system, face recognition software, expense tracker, Velayon Dynamics products",
    openGraph: {
        title: "Products - Enterprise SaaS Suite | Velayon Dynamics",
        description: "Four specialized SaaS platforms solving real problems for education, hospitality, security, and finance.",
        type: "website",
        url: "https://velayon.com/products"
    },
    alternates: {
        canonical: "https://velayon.com/products"
    }
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
