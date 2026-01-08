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
  description: "Full-stack engineer and system architect. Building the digital infrastructure of tomorrow with precision and elegance.",
  keywords: ["Bibek Kumar Thagunna", "Software Engineer Nepal", "Full Stack Developer", "Velayon Founder", "System Architect"],
  authors: [{ name: "Bibek Kumar Thagunna" }],
  openGraph: {
    title: "Bibek Kumar Thagunna | The Architect",
    description: "Building the digital infrastructure of tomorrow with precision and elegance.",
    type: "profile",
    locale: "en_US",
    siteName: "Bibek Kumar Thagunna",
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
        {/* Grain Texture Overlay */}
        <div className="grain-overlay" aria-hidden="true" />

        {children}
      </body>
    </html>
  );
}
