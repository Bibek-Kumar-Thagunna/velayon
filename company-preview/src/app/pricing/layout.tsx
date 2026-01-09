import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pricing - Transparent SaaS Pricing | Velayon Dynamics",
    description: "Flexible pricing for all budgets by Velayon Dynamics. Free trials available. From $49/mo for Attendify to enterprise custom pricing for Face Recognition. No hidden fees. Founded by Bibek Kumar Thagunna.",
    keywords: "Velayon Dynamics pricing, SaaS pricing, software pricing, free trial, enterprise pricing, transparent pricing, Attendify pricing, HMS Core pricing",
    openGraph: {
        title: "Pricing - Transparent SaaS Pricing",
        description: "Flexible pricing for all budgets. Free trials available. From $49/mo to enterprise custom pricing.",
        type: "website",
        url: "https://velayon.com/pricing"
    },
    alternates: {
        canonical: "https://velayon.com/pricing"
    }
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
