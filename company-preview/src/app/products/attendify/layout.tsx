import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Attendify - Geofenced Attendance Tracking | Velayon Dynamics",
    description: "Eliminate attendance fraud with geofenced QR-based tracking by Velayon Dynamics. Trusted by 15+ educational institutions with 300+ daily active users. 95% fraud reduction guaranteed. Founded by Bibek Kumar Thagunna.",
    keywords: "Attendify, attendance tracking, education software, geofencing, QR code attendance, school management, college attendance system, Velayon Dynamics, Bibek Kumar Thagunna",
    openGraph: {
        title: "Attendify - Geofenced Attendance Tracking",
        description: "Eliminate attendance fraud with geofenced QR-based tracking. Trusted by 15+ institutions.",
        type: "website",
        url: "https://velayon.com/products/attendify"
    },
    alternates: {
        canonical: "https://velayon.com/products/attendify"
    }
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <head>
                {/* JSON-LD SoftwareApplication Schema for Attendify */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "SoftwareApplication",
                            name: "Attendify",
                            applicationCategory: "BusinessApplication",
                            operatingSystem: "Android, iOS",
                            offers: {
                                "@type": "Offer",
                                price: "49.00",
                                priceCurrency: "USD",
                                priceSpecification: {
                                    "@type": "UnitPriceSpecification",
                                    price: "49.00",
                                    priceCurrency: "USD",
                                    billingDuration: "P1M"
                                }
                            },
                            aggregateRating: {
                                "@type": "AggregateRating",
                                ratingValue: "4.8",
                                ratingCount: "15"
                            },
                            description: "Geofenced attendance tracking system for educational institutions. Eliminate proxy attendance with QR codes and GPS verification.",
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
