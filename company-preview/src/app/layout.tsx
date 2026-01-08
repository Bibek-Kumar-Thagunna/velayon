import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Velayon | Global Systems. Zero Latency.",
  description: "Autonomous software infrastructure powering businesses across borders. From Nepal to the Cloud. Specializing in high-performance SaaS and ERP solutions.",
  keywords: [
    "Velayon Dynamics",
    "Software Company Nepal",
    "Enterprise ERP Solutions",
    "SaaS Architecture",
    "Bibek Thagunna Company",
    "Industrial Precision Software",
    "IT Consultancy"
  ],
  openGraph: {
    title: "Velayon | Global Systems. Zero Latency.",
    description: "Autonomous software infrastructure powering businesses across borders. From Nepal to the Cloud.",
    type: "website",
    locale: "en_US",
    siteName: "Velayon",
    url: "https://velayon.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Velayon",
  "alternateName": "Velayon Dynamics",
  "url": "https://velayon.com",
  "logo": "https://velayon.com/logo.png",
  "founder": {
    "@type": "Person",
    "name": "Bibek Kumar Thagunna"
  },
  "description": "Velayon engineer autonomous software infrastructure that powers businesses across borders. Specializing in high-performance SaaS and ERP solutions.",
  "sameAs": [
    "https://bibek.velayon.com",
    "https://twitter.com/velayon"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer support",
    "email": "contact@velayon.com"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
