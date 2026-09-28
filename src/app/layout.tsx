import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://velayon.com"),
  title: { default: "Velayon — Digital Products, Websites & Mobile Apps", template: "%s | Velayon" },
  description: "Buy practical digital products or commission a clearly scoped website or mobile app from Velayon. Transparent deliverables, thoughtful design and dependable development.",
  keywords: ["digital products", "AI prompt playbook", "website development", "Flutter app development", "React Native app development", "Expo app development", "Android app development", "Velayon"],
  authors: [{ name: "Velayon", url: "https://velayon.com" }],
  creator: "Velayon",
  alternates: { canonical: "/" },
  openGraph: { title: "Velayon — Digital Products, Websites & Mobile Apps", description: "Useful digital products and professionally scoped website and mobile app packages.", url: "https://velayon.com", siteName: "Velayon", locale: "en_US", type: "website" },
  twitter: { card: "summary", title: "Velayon — Digital Products, Websites & Mobile Apps", description: "Useful digital products and professionally scoped website and mobile app packages." },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Velayon",
  url: "https://velayon.com",
  description: "A digital studio creating practical digital products, websites and mobile applications.",
  areaServed: "Worldwide",
  knowsAbout: ["Digital products", "Web design and development", "Flutter application development", "React Native and Expo development", "Native Android development"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} /></head>
      <body><div className="site-shell">{children}</div></body>
    </html>
  );
}
