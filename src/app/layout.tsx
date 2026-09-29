import type { Metadata } from "next";
import "./globals.css";
import { MotionEffects } from "@/components/ui/MotionEffects";

export const metadata: Metadata = {
  metadataBase: new URL("https://velayon.com"),
  applicationName: "Velayon Dynamics",
  title: { default: "Velayon Dynamics — Digital Products & Software Studio in Nepal", template: "%s | Velayon Dynamics" },
  description: "Velayon Dynamics is a Nepal-based digital studio founded by Bibek Kumar Thagunna, creating original digital products, conversion-focused websites and Flutter, Expo and Android applications for clients worldwide.",
  keywords: ["Velayon Dynamics", "Velayon", "Bibek Kumar Thagunna", "digital products Nepal", "website development Nepal", "web design agency Nepal", "Flutter app development Nepal", "React Native Expo development", "Android app development", "AI product photography prompts", "international software studio"],
  authors: [{ name: "Bibek Kumar Thagunna", url: "https://velayon.com/about/bibek-kumar-thagunna" }],
  creator: "Bibek Kumar Thagunna",
  publisher: "Velayon Dynamics",
  category: "Technology",
  alternates: { canonical: "/", languages: { "en": "https://velayon.com", "x-default": "https://velayon.com" } },
  manifest: "/manifest.webmanifest",
  openGraph: { title: "Velayon Dynamics — Digital Products & Software Studio", description: "Original digital products and professionally scoped website and mobile app development from Nepal to the world.", url: "https://velayon.com", siteName: "Velayon Dynamics", locale: "en_US", type: "website", images: [{ url: "/brand/velayon-hero-3d-v2.png", width: 1536, height: 1024, alt: "Velayon Dynamics digital products and software services" }] },
  twitter: { card: "summary_large_image", title: "Velayon Dynamics — Digital Products & Software Studio", description: "Original digital products and professionally scoped website and mobile app development from Nepal to the world.", images: ["/brand/velayon-hero-3d-v2.png"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://velayon.com/#organization",
  name: "Velayon Dynamics",
  alternateName: "Velayon",
  url: "https://velayon.com",
  email: "contact@velayon.com",
  foundingLocation: { "@type": "Place", name: "Kathmandu, Nepal" },
  founder: { "@id": "https://velayon.com/about/bibek-kumar-thagunna#person" },
  description: "A Nepal-based digital products and software studio founded by Bibek Kumar Thagunna.",
  areaServed: [{ "@type": "Country", name: "Nepal" }, { "@type": "Place", name: "Worldwide" }],
  knowsAbout: ["Digital products", "AI product photography workflows", "Web design and development", "Technical SEO", "Flutter application development", "React Native and Expo development", "Native Android development"],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://velayon.com/#website",
  url: "https://velayon.com",
  name: "Velayon Dynamics",
  alternateName: "Velayon",
  publisher: { "@id": "https://velayon.com/#organization" },
  inLanguage: "en",
};

const founderSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://velayon.com/about/bibek-kumar-thagunna#person",
  name: "Bibek Kumar Thagunna",
  url: "https://velayon.com/about/bibek-kumar-thagunna",
  image: "https://velayon.com/brand/bibek-kumar-thagunna-portrait-v1.png",
  jobTitle: "Founder, Designer and Software Developer",
  worksFor: { "@id": "https://velayon.com/#organization" },
  knowsAbout: ["Digital product design", "Web development", "Flutter", "React Native", "Expo", "Android development", "Agentic AI"],
  nationality: { "@type": "Country", name: "Nepal" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#0a1a34" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([organizationSchema, websiteSchema, founderSchema]) }} />
      </head>
      <body><MotionEffects /><div className="site-shell">{children}</div></body>
    </html>
  );
}
