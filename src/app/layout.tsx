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
  title: "Velayon | Systems Engineer",
  description: "Building production-grade systems with Agentic AI. Systems architecture, full-stack development, and AI-assisted engineering.",
  keywords: ["systems engineer", "agentic ai", "full-stack developer", "production systems", "ai development"],
  authors: [{ name: "Velayon" }],
  openGraph: {
    title: "Velayon | Systems Engineer",
    description: "Building production-grade systems with Agentic AI at 10x velocity.",
    type: "website",
    locale: "en_US",
    siteName: "Velayon",
  },
  twitter: {
    card: "summary_large_image",
    title: "Velayon | Systems Engineer",
    description: "Building production-grade systems with Agentic AI at 10x velocity.",
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
