import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/ui/Navigation";
import { Footer } from "@/components/ui/Footer";

export const metadata: Metadata = { title: "Digital Products", description: "Shop practical digital products from Velayon, including the AI Product Photography Playbook with 48 visual examples and 120 ready-to-use workflows.", alternates: { canonical: "/products" } };

export default function ProductsPage() {
  return <><Navigation /><main>
    <section className="editorial-hero"><div className="container editorial-hero-grid"><div><p className="eyebrow">Velayon digital products</p><h1>Working systems,<br />not filler.</h1></div><div><p>Focused playbooks and templates for people doing the work themselves. Every product is visual, editable and built around a useful outcome.</p><div className="hero-note"><span>01 product available</span><span>Instant digital delivery</span><span>USD pricing</span></div></div></div></section>
    <section className="section catalogue-section"><div className="container">
      <article className="catalogue-card"><div className="catalogue-book"><Image src="/products/ai-product-photography-playbook/book-3d.png" alt="3D book mockup of The AI Product Photography Playbook" width={1103} height={1426} priority /></div><div className="catalogue-copy"><p className="eyebrow light">Photography · Ecommerce · Marketing</p><h2>The AI Product Photography Playbook</h2><p>Create better product-page heroes, social ads and campaign images with a system you can inspect before you buy. Each workflow pairs a visual result with the prompt logic and repair steps behind it.</p><div className="feature-facts"><span><b>84</b> visual pages</span><span><b>48</b> finished examples</span><span><b>120</b> workflows</span></div><div className="catalogue-bottom"><strong>$9.99</strong><Link className="button button-primary" href="/products/ai-product-photography-playbook">View the complete product <span>↗</span></Link></div></div></article>
      <div className="catalogue-promise"><p className="eyebrow">What every Velayon product must do</p><div><span>Show a real preview before purchase</span><span>Explain exactly what is included</span><span>Deliver a reusable working system</span></div></div>
    </div></section>
  </main><Footer /></>;
}
