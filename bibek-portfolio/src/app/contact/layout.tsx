import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Bibek - Hire for Systems Engineering",
    description: "Get in touch with Bibek Kumar Thagunna. Available for full-time roles, contracts, and consulting. Discuss your next complex software project.",
    keywords: "hire Bibek Kumar Thagunna, contact software engineer, hire systems architect, contract developer Nepal, Velayon Dynamics contact",
    openGraph: {
        title: "Contact Bibek - Hire for Systems Engineering",
        description: "Available for interesting projects and roles. Let's discuss your system architecture.",
        type: "website",
        url: "https://bibek.velayon.com/contact"
    },
    alternates: {
        canonical: "https://bibek.velayon.com/contact"
    }
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
