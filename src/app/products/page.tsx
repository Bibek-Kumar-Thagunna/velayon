import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/ui/Navigation";
import { Footer } from "@/components/ui/Footer";

export const metadata: Metadata = { title: "Digital Products", description: "Shop practical digital products from Velayon, including the AI Product Photography Playbook with 48 visual examples and 120 ready-to-use workflows.", alternates: { canonical: "/products" } };

export default function ProductsPage() {
  return <><Navigation /><main>
    <section className="product-index-hero"><div className="container product-index-grid"><div><p className="eyebrow light">Velayon digital products</p><h1>Practical systems for better creative work.</h1><p>Focused playbooks and editable tools for people doing the work themselves—built around visible results rather than filler.</p><div className="hero-note dark-note"><span>Real previews</span><span>Immediate delivery</span><span>Clear commercial use</span></div></div><div className="product-index-collage"><div className="collage-window"><Image src="/products/ai-product-photography-playbook/results-overview.png" alt="A selection of premium product photography examples" fill priority sizes="(max-width: 900px) 100vw, 46vw" /></div><div className="collage-card"><b>48</b><span>finished visual examples</span></div><div className="collage-card second"><b>120</b><span>editable workflows</span></div></div></div></section>
    <section className="section catalogue-section"><div className="container">
      <article className="catalogue-card"><div className="catalogue-book"><span className="book-platform" /><Image src="/products/ai-product-photography-playbook/book-3d.png" alt="3D book mockup of The AI Product Photography Playbook" width={1103} height={1426} priority /></div><div className="catalogue-copy"><p className="eyebrow light">Photography · Ecommerce · Marketing</p><h2>The AI Product Photography Playbook</h2><p>Create better product-page heroes, social ads and campaign images with a system you can inspect before you buy. Each workflow pairs a visual result with the prompt logic and repair steps behind it.</p><div className="feature-facts"><span><b>84</b> visual pages</span><span><b>48</b> finished examples</span><span><b>120</b> workflows</span></div><div className="catalogue-bottom"><strong>$9.99</strong><Link className="button button-primary" href="/products/ai-product-photography-playbook">View the complete product <span>↗</span></Link></div></div></article>
      <div className="catalogue-promise"><p className="eyebrow">What every Velayon product must do</p><div><span>Show a real preview before purchase</span><span>Explain exactly what is included</span><span>Deliver a reusable working system</span></div></div>
    </div></section>
  </main><Footer /></>;
}
