import { Metadata } from "next";

export const metadata: Metadata = {
    title: "HMS Core - Hotel Management ERP | Velayon Dynamics",
    description: "Complete hotel operations platform managing 25+ properties by Velayon Dynamics. Front desk, housekeeping, F&B, and billing in one system. Nepal tax compliant. Founded by Bibek Kumar Thagunna.",
    keywords: "HMS Core, hotel management system, hotel ERP, PMS, property management, Nepal hotel software, hospitality software, Velayon Dynamics, Bibek Kumar Thagunna",
    openGraph: {
        title: "HMS Core - Hotel Management ERP",
        description: "Complete hotel operations platform managing 25+ properties across Nepal.",
        type: "website",
        url: "https://velayon.com/products/hotel-management"
    },
    alternates: {
        canonical: "https://velayon.com/products/hotel-management"
    }
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <head>
                {/* JSON-LD SoftwareApplication Schema for HMS Core */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "SoftwareApplication",
                            name: "HMS Core",
                            applicationCategory: "BusinessApplication",
                            operatingSystem: "Windows, macOS, Linux, Web",
                            offers: {
                                "@type": "Offer",
                                price: "99.00",
                                priceCurrency: "USD",
                                priceSpecification: {
                                    "@type": "UnitPriceSpecification",
                                    price: "99.00",
                                    priceCurrency: "USD",
                                    billingDuration: "P1M"
                                }
                            },
                            description: "Complete hotel operations platform with multi-tenant billing, inventory management, and role-based access control. Nepal tax compliant.",
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
