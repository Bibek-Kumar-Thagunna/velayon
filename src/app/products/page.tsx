import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/ui/Navigation";
import { Footer } from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Digital Products",
  description: "Shop practical digital products from Velayon, including the AI Product Photography Playbook with 48 visual examples and 120 ready-to-use workflows.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      <Navigation />
      <main>
        <section className="page-hero">
          <div className="container page-hero-grid">
            <div><p className="eyebrow blue">Velayon digital products</p><h1 className="serif">Less theory.<br />More useful work.</h1></div>
            <p className="page-hero-copy">Focused guides and practical systems designed to help creators and small businesses produce stronger work with less trial and error.</p>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <article className="product-list-card">
              <div className="product-list-image"><Image src="/products/ai-product-photography-playbook/cover.png" alt="The AI Product Photography Playbook cover" width={1200} height={1500} /></div>
              <div className="product-list-content">
                <p className="eyebrow light">Image creation · Ecommerce · Marketing</p>
                <h2>The AI Product Photography Playbook</h2>
                <p>Turn everyday products into premium campaign images without guessing what to prompt. See the intended result, copy a stronger brief and repair the common defects that make AI imagery feel artificial.</p>
                <div className="product-stat-row">
                  <div className="product-stat"><strong>84</strong><span>visual pages</span></div>
                  <div className="product-stat"><strong>48</strong><span>finished examples</span></div>
                  <div className="product-stat"><strong>120</strong><span>editable workflows</span></div>
                </div>
                <div className="inline-actions"><Link className="button-primary" href="/products/ai-product-photography-playbook">Explore the playbook →</Link><span className="price-note" style={{color: "#aab4d0"}}><strong style={{color: "white"}}>$9.99</strong> · Single-business licence</span></div>
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
