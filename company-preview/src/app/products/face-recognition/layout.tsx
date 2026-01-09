import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Face Recognition - Enterprise Security AI | Velayon Dynamics",
    description: "Real-time CCTV facial recognition with 95%+ accuracy by Velayon Dynamics. Enterprise security, access control, and time tracking. GDPR compliant, on-premise deployment. Founded by Bibek Kumar Thagunna.",
    keywords: "face recognition, facial recognition, CCTV AI, security software, access control, biometric authentication, Velayon Dynamics, Bibek Kumar Thagunna, enterprise security",
    openGraph: {
        title: "Face Recognition - Enterprise Security AI",
        description: "Real-time CCTV facial recognition with 95%+ accuracy for enterprise deployments.",
        type: "website",
        url: "https://velayon.com/products/face-recognition"
    },
    alternates: {
        canonical: "https://velayon.com/products/face-recognition"
    }
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <head>
                {/* JSON-LD SoftwareApplication Schema for Face Recognition */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "SoftwareApplication",
                            name: "Face Recognition System",
                            applicationCategory: "SecurityApplication",
                            operatingSystem: "Linux, Windows",
                            offers: {
                                "@type": "Offer",
                                price: "0",
                                priceCurrency: "USD",
                                description: "Contact for enterprise pricing"
                            },
                            description: "Real-time CCTV facial recognition with 95%+ accuracy. Enterprise security, access control, and time tracking with GDPR compliance.",
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
