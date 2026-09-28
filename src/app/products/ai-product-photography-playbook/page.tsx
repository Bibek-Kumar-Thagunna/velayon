import type { Metadata } from "next";
import Image from "next/image";
import { Navigation } from "@/components/ui/Navigation";
import { Footer } from "@/components/ui/Footer";
import { checkoutUrl } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "AI Product Photography Playbook — 48 Examples + 120 Workflows",
  description: "An 84-page visual playbook with 48 AI product-photo examples, 120 editable workflows, correction prompts and a live prompt builder. USD 9.99.",
  alternates: { canonical: "/products/ai-product-photography-playbook" },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "The AI Product Photography Playbook",
  description: "An 84-page visual playbook with 48 finished product-image examples, 120 commercial workflows, correction prompts and an editable prompt builder.",
  image: "https://velayon.com/products/ai-product-photography-playbook/cover.png",
  brand: { "@type": "Brand", name: "Velayon" },
  offers: { "@type": "Offer", priceCurrency: "USD", price: "9.99", availability: "https://schema.org/InStock", url: "https://velayon.com/products/ai-product-photography-playbook" },
};

export default function ProductPage() {
  return (
    <>
      <Navigation />
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
        <section className="product-detail-hero">
          <div className="container product-detail-grid">
            <div className="detail-cover"><Image src="/products/ai-product-photography-playbook/cover.png" alt="The AI Product Photography Playbook by Velayon" width={1200} height={1500} priority /></div>
            <div className="detail-copy">
              <p className="eyebrow light">A visual production system for better product images</p>
              <h1 className="serif">Your product deserves more than another generic AI image.</h1>
              <p>Use a repeatable system to create product-page heroes, lifestyle scenes, social ads, seasonal campaigns, food imagery, beauty visuals, fashion still lifes and digital-product mockups.</p>
              <div className="price-lockup"><strong>$9.99</strong><span>One-time purchase · Single-business licence</span></div>
              <div className="detail-actions"><a className="button-primary" href={checkoutUrl}>Get the complete playbook →</a><a className="button-secondary" href="#preview">Preview inside</a></div>
              <p className="tiny-note">Purchase currently begins by email. You will receive secure payment and delivery instructions from contact@velayon.com.</p>
            </div>
          </div>
        </section>

        <section className="section" id="preview">
          <div className="container">
            <div className="section-heading split-heading"><div><p className="eyebrow blue">See before you buy</p><h2 className="section-title serif">The result and the method, side by side.</h2></div><p>This is not a random prompt dump. Each displayed result is paired with the stronger prompt structure used to create it and a focused correction prompt for common defects.</p></div>
            <div className="preview-grid">
              <figure className="preview-card large"><Image src="/products/ai-product-photography-playbook/results-overview.png" alt="Overview of AI product photography results across multiple categories" width={1800} height={1200} /><figcaption>48 visible results across 12 commercial categories.</figcaption></figure>
              <figure className="preview-card"><Image src="/products/ai-product-photography-playbook/prompt-result-preview.png" alt="Prompt and product image result preview from the playbook" width={1200} height={900} /><figcaption>Stronger prompt beside the image it is designed to create.</figcaption></figure>
              <figure className="preview-card"><Image src="/products/ai-product-photography-playbook/prompt-builder-preview.png" alt="Editable product photography prompt builder preview" width={1200} height={900} /><figcaption>Editable workbook that assembles a working brief from your choices.</figcaption></figure>
            </div>
          </div>
        </section>

        <section className="section services-section">
          <div className="container">
            <div className="section-heading"><p className="eyebrow blue">What you receive</p><h2 className="section-title serif">A complete working kit.</h2></div>
            <div className="inside-grid">
              {[
                ["01", "84-page visual PDF", "Plain-language guidance for composition, lighting, materials, corrections and commercial review."],
                ["02", "48 visible examples", "Finished product images across packshots, lifestyle, social, food, beauty, fashion, home and more."],
                ["03", "120 workflows", "Searchable, editable commercial workflows for different categories, channels and campaign needs."],
                ["04", "Live prompt builder", "Choose the product, scene, composition, light and constraints to assemble a stronger brief."],
                ["05", "Correction prompts", "Repair one specific defect without needlessly redesigning the entire approved image."],
                ["06", "Quick-start + scorecard", "Three-page production card, campaign recipes and a practical commercial quality-control check."],
              ].map(([number, title, copy]) => <article className="inside-card" key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container licence-box">
            <div><p className="eyebrow blue">Clear commercial use</p><h2 className="serif">Single Business Licence</h2></div>
            <ul><li>Use the included workflows to create images for one business.</li><li>Edit and adapt the prompts for your own products and campaigns.</li><li>Use created images commercially subject to your image tool’s terms and the rights you hold.</li><li>The source files may not be resold, shared, sublicensed or uploaded as a competing product.</li></ul>
          </div>
        </section>

        <section className="final-cta">
          <div className="container final-cta-inner"><p className="eyebrow light">Ready to create with a system?</p><h2 className="serif">48 examples. 120 workflows.<br />One practical playbook.</h2><a className="button-primary" href={checkoutUrl}>Get it for $9.99 →</a></div>
        </section>
      </main>
      <Footer />
    </>
  );
}
