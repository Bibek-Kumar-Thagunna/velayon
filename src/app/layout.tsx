import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bibek Kumar Thagunna | The Architect",
  description: "Full-stack engineer and system architect. Building the digital infrastructure of tomorrow with precision and elegance. Founder of Velayon.",
  keywords: [
    "Bibek Kumar Thagunna",
    "System Architect Nepal",
    "Hire Full Stack Developer",
    "Velayon Founder",
    "Software Consultancy",
    "React Native Expert",
    "Next.js Architect",
    "Kathmandu Tech Leader"
  ],
  authors: [{ name: "Bibek Kumar Thagunna" }],
  openGraph: {
    title: "Bibek Kumar Thagunna | The Architect",
    description: "Building the digital infrastructure of tomorrow with precision and elegance.",
    type: "profile",
    locale: "en_US",
    siteName: "Bibek Kumar Thagunna",
    url: "https://bibek.velayon.com",
    images: ["/og-image.jpg"], // Assuming default or will be added
  },
  twitter: {
    card: "summary_large_image",
    title: "Bibek Kumar Thagunna | The Architect",
    description: "Building the digital infrastructure of tomorrow with precision and elegance.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Bibek Kumar Thagunna",
  "jobTitle": "System Architect",
  "url": "https://bibek.velayon.com",
  "sameAs": [
    "https://velayon.com",
    "https://github.com/Bibek-Kumar-Thagunna",
    "https://www.linkedin.com/in/bibek-thagunna"
  ],
  "worksFor": {
    "@type": "Organization",
    "name": "Velayon"
  },
  "description": "Full-stack engineer and system architect based in Nepal, specializing in high-performance web infrastructure and AI integration."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-[#050505] text-[#E5E5E5]`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Grain Texture Overlay */}
        <div className="grain-overlay" aria-hidden="true" />

        {children}
      </body>
    </html>
  );
}
