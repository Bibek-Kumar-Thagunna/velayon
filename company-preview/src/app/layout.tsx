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
  keywords: ["Software Engineering", "Nepal Tech", "Enterprise ERP", "SaaS Development", "Cloud Infrastructure", "Velayon"],
  openGraph: {
    title: "Velayon | Global Systems. Zero Latency.",
    description: "Autonomous software infrastructure powering businesses across borders. From Nepal to the Cloud.",
    type: "website",
    locale: "en_US",
    siteName: "Velayon",
  },
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
        {children}
      </body>
    </html>
  );
}
