import { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Velayon Dynamics | Enterprise SaaS Platforms from Nepal",
  description: "Production-ready SaaS platforms solving real business problems across industries. Attendify, HMS Core, Face Recognition, Expense Tracker. Founded by Bibek Kumar Thagunna. Built from Nepal, deployed globally.",
  keywords: [
    "Velayon Dynamics",
    "Velayon",
    "VELAYON",
    "Enterprise SaaS Nepal",
    "Bibek Kumar Thagunna company",
    "SaaS platforms Nepal",
    "Attendify",
    "HMS Core",
    "Face Recognition software",
    "Expense Tracker",
    "software company Nepal",
    "Kathmandu software",
    "enterprise software Nepal"
  ].join(", "),
  authors: [{ name: "Bibek Kumar Thagunna", url: "https://bibek.velayon.com" }],
  creator: "Velayon Dynamics",
  publisher: "Velayon Dynamics",
  openGraph: {
    title: "Velayon Dynamics | Enterprise SaaS Platforms from Nepal",
    description: "Production-ready SaaS platforms solving real business problems. Founded by Bibek Kumar Thagunna.",
    url: "https://velayon.com",
    siteName: "Velayon Dynamics",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://velayon.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Velayon Dynamics - Enterprise SaaS Platforms"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Velayon Dynamics | Enterprise SaaS Platforms from Nepal",
    description: "Production-ready SaaS platforms solving real business problems. Founded by Bibek Kumar Thagunna.",
    images: ["https://velayon.com/og-image.jpg"]
  },
  alternates: {
    canonical: "https://velayon.com"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE" // User needs to add this from Google Search Console
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        {/* JSON-LD Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Velayon Dynamics",
              alternateName: ["Velayon", "VELAYON"],
              url: "https://velayon.com",
              logo: "https://velayon.com/logo.png",
              description: "Enterprise SaaS platforms solving real business problems across industries. Built from Nepal, deployed globally.",
              founder: {
                "@type": "Person",
                name: "Bibek Kumar Thagunna",
                url: "https://bibek.velayon.com",
                jobTitle: "Founder & Systems Engineer"
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kathmandu",
                addressRegion: "Bagmati",
                addressCountry: "NP"
              },
              sameAs: [
                "https://bibek.velayon.com",
                "https://github.com/Bibek-Kumar-Thagunna",
                "https://linkedin.com/in/bibek-kumar-thagunna"
              ],
              contactPoint: {
                "@type": "ContactPoint",
                email: "contact@velayon.com",
                contactType: "Sales",
                areaServed: "Worldwide"
              }
            })
          }}
        />
      </head>
      <body className="bg-[#050505] text-white antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
