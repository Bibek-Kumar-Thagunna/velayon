import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Expense Tracker - AI-Powered SMS Parsing | Velayon Dynamics",
    description: "Zero manual entry expense tracking by Velayon Dynamics. AI parses bank SMS automatically. Supports 50+ banks. Free + premium freemium model. Beta launching Q2 2026. Founded by Bibek Kumar Thagunna.",
    keywords: "expense tracker, SMS parsing, AI finance, automatic expense tracking, budget app, personal finance, Velayon Dynamics, Bibek Kumar Thagunna",
    openGraph: {
        title: "Expense Tracker - AI-Powered SMS Parsing",
        description: "Zero manual entry expense tracking with AI-powered SMS parsing.",
        type: "website",
        url: "https://velayon.com/products/expense-tracker"
    },
    alternates: {
        canonical: "https://velayon.com/products/expense-tracker"
    }
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <head>
                {/* JSON-LD SoftwareApplication Schema for Expense Tracker */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "MobileApplication",
                            name: "Expense Tracker",
                            applicationCategory: "FinanceApplication",
                            operatingSystem: "Android, iOS",
                            offers: {
                                "@type": "Offer",
                                price: "0",
                                priceCurrency: "USD",
                                description: "Free with premium features available"
                            },
                            description: "AI-powered expense tracking with automatic SMS parsing. Zero manual entry. Supports 50+ banks.",
                            creator: {
                                "@type": "Organization",
                                name: "Velayon Dynamics",
                                url: "https://velayon.com"
                            }
                        })
                    }}
                />
            </head>
            {children}
        </>
    );
}
