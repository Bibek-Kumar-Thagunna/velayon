import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Discuss a Website or Mobile App Project",
  description: "Tell Velayon what you need to build. We will confirm the best package, scope, timeline and any optional enhancements before work begins.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
