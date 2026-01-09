import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Product Demos | Velayon Dynamics by Bibek Kumar Thagunna",
    description: "See Velayon Dynamics products in action. Production systems deployed and serving real clients globally. Request a private demo. Founded by Bibek Kumar Thagunna from Nepal.",
    keywords: "product demos, software demonstrations, live demos, SaaS demos, Velayon Dynamics demos, Bibek Kumar Thagunna",
    openGraph: {
        title: "Product Demos | Velayon Dynamics",
        description: "See our production systems in action serving real clients.",
        type: "website",
        url: "https://velayon.com/demos"
    },
    alternates: {
        canonical: "https://velayon.com/demos"
    }
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
