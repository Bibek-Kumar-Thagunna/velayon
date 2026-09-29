import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Bibek Kumar Thagunna | Systems Engineer & Founder of Velayon Dynamics",
  description: "Bibek Kumar Thagunna - Systems engineer building production-grade software with Agentic AI. Founder of Velayon Dynamics. Specialized in high-performance backends, cross-platform applications (Flutter/React), and AI-native workflows. Based in Kathmandu, Nepal.",
  keywords: [
    "Bibek Kumar Thagunna",
    "Bibek Thagunna",
    "The Architect",
    "Systems Engineer Nepal",
    "Velayon founder",
    "Velayon Dynamics founder",
    "Flutter developer Nepal",
    "Agentic AI developer",
    "full-stack engineer Kathmandu",
    "software engineer Nepal",
    "Kathmandu developer"
  ].join(", "),
  authors: [{ name: "Bibek Kumar Thagunna", url: "https://bibek.velayon.com" }],
  creator: "Bibek Kumar Thagunna",
  openGraph: {
    title: "Bibek Kumar Thagunna | Systems Engineer & Founder of Velayon Dynamics",
    description: "Systems engineer building production-grade software. Founder of Velayon Dynamics. Specialized in Agentic AI, Flutter, and high-performance backends.",
    url: "https://bibek.velayon.com",
    siteName: "Bibek Kumar Thagunna",
    locale: "en_US",
    type: "profile",
    images: [
      {
        url: "https://bibek.velayon.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bibek Kumar Thagunna - Systems Engineer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Bibek Kumar Thagunna | Systems Engineer & Founder of Velayon Dynamics",
    description: "Systems engineer building production-grade software. Founder of Velayon Dynamics.",
    images: ["https://bibek.velayon.com/og-image.jpg"]
  },
  alternates: {
    canonical: "https://bibek.velayon.com"
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
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <head>
        {/* JSON-LD Person Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Bibek Kumar Thagunna",
              alternateName: ["Bibek Thagunna", "The Architect"],
              url: "https://bibek.velayon.com",
              image: "https://bibek.velayon.com/profile.jpg",
              jobTitle: "Founder & Systems Engineer",
              description: "Systems engineer building production-grade software with Agentic AI. Founder of Velayon Dynamics. Specialized in high-performance backends, cross-platform applications (Flutter/React), and AI-native workflows.",
              worksFor: {
                "@type": "Organization",
                name: "Velayon Dynamics",
                url: "https://velayon.com"
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kathmandu",
                addressRegion: "Bagmati",
                addressCountry: "NP"
              },
              sameAs: [
                "https://velayon.com",
                "https://github.com/Bibek-Kumar-Thagunna",
                "https://linkedin.com/in/bibek-kumar-thagunna"
              ],
              knowsAbout: [
                "Software Engineering",
                "Agentic AI",
                "Flutter Development",
                "React Development",
                "Full-stack Development",
                "System Architecture",
                "Machine Learning",
                "Enterprise Software"
              ]
            })
          }}
        />
      </head>
      <body className="bg-[#050505] text-white antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
