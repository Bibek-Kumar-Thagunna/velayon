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
  title: "Attendify by Velayon | Smart Attendance Tracking",
  description: "QR code-based attendance tracking for educational institutions. A Velayon Product. Eliminate proxy attendance with geolocation fencing.",
  keywords: ["Attendance Management System", "QR Attendance", "Velayon Products", "Smart School System", "Attendify"],
  openGraph: {
    title: "Attendify by Velayon",
    description: "Smart, secure, and instant attendance tracking for modern institutions.",
    type: "website",
    url: "https://attendify.velayon.com",
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Attendify",
  "operatingSystem": "Web, Android, iOS",
  "applicationCategory": "EducationalApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Velayon"
  },
  "description": "A geolocation and QR-based attendance tracking system designed for schools and universities to prevent proxy attendance."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
