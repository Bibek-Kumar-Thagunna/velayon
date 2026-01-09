import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us - Get in Touch | Velayon Dynamics",
    description: "Contact Velayon Dynamics for sales inquiries, technical support, or partnerships. Founded by Bibek Kumar Thagunna. 24-hour response time. Located in Kathmandu, Nepal serving clients globally.",
    keywords: "contact Velayon, Velayon Dynamics contact, sales contact, technical support, partnership inquiries, Bibek Kumar Thagunna contact",
    openGraph: {
        title: "Contact Us - Get in Touch",
        description: "Contact us for sales, support, or partnerships. 24-hour response time.",
        type: "website",
        url: "https://velayon.com/contact"
    },
    alternates: {
        canonical: "https://velayon.com/contact"
    }
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
