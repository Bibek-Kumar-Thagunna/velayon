import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/ui/Navigation";
import { Footer } from "@/components/ui/Footer";
import { websitePackages } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Website Design & Development Packages",
  description: "Clearly scoped website packages for landing pages, service businesses, booking-led companies and online stores. Packages from USD 349.",
  alternates: { canonical: "/services/websites" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Website Design and Development",
  provider: { "@type": "Organization", name: "Velayon", url: "https://velayon.com" },
  areaServed: "Worldwide",
  serviceType: ["Landing page development", "Business website development", "Booking website development", "Ecommerce website development"],
};

export default function WebsitesPage() {
  return (
    <>
      <Navigation />
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
        <section className="page-hero">
          <div className="container page-hero-grid">
            <div><p className="eyebrow blue">Website design & development</p><h1 className="serif">A credible website,<br />properly scoped.</h1><div className="page-hero-facts"><span>Packages from $349</span><span>7 days to 6 weeks</span><span>Remote delivery worldwide</span></div></div>
            <p className="page-hero-copy">Choose a package by business need—not by a confusing pile of technical features. Every option includes responsive design, a performance review and a clean handover.</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-heading split-heading"><div><p className="eyebrow blue">Packages by website type</p><h2 className="section-title serif">Pick the closest outcome.</h2></div><p>Package prices apply when your requirements match the listed scope. Additional pages, custom systems or specialist integrations are estimated in writing before development begins.</p></div>
            <div className="package-grid">
              {websitePackages.map((item) => (
                <article className={`package-card ${item.featured ? "featured" : ""}`} key={item.name}>
                  {item.featured && <span className="package-ribbon">Most versatile</span>}
                  <h2>{item.name}</h2><p className="fit">{item.fit}</p>
                  <ul>{item.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
                  <div className="package-price-row"><strong>{item.price}</strong><span>Typical delivery<br />{item.timeline}</span></div>
                  <Link className="button-primary" href={`/contact?project=${encodeURIComponent(item.name)}`}>Ask about this package →</Link>
                </article>
              ))}
            </div>
            <div className="scope-note"><strong>Need a different scope?</strong><p>Start with the closest package. We can add languages, pages, memberships, advanced search, custom integrations or ongoing content support through a separate written estimate.</p></div>
          </div>
        </section>

        <section className="section technology-section">
          <div className="container">
            <div className="section-heading split-heading"><div><p className="eyebrow light">Included in every build</p><h2 className="section-title serif">Professional foundations, not optional extras.</h2></div><p style={{color: "#aab4d0"}}>The visual design, responsive behavior and launch essentials are part of the work—not add-ons used to inflate the estimate later.</p></div>
            <div className="inside-grid">
              {[
                ["01", "Custom visual direction", "A coherent design system shaped around your brand, audience and offer."],
                ["02", "Responsive implementation", "Careful layouts for phone, tablet and desktop—not only a desktop design squeezed smaller."],
                ["03", "SEO foundation", "Semantic structure, metadata, sitemap, robots directives and sensible internal links."],
                ["04", "Performance review", "Image, layout and front-end checks to avoid common speed and usability problems."],
                ["05", "Analytics setup", "Connection to your selected analytics tool so you can measure visits and conversions."],
                ["06", "Handover", "Deployment support, ownership transfer and concise guidance for managing the site."],
              ].map(([n, title, copy]) => <article className="inside-card" style={{background: "#111c3e", borderColor: "#35405f"}} key={n}><span>{n}</span><h3>{title}</h3><p style={{color: "#aab4d0"}}>{copy}</p></article>)}
            </div>
          </div>
        </section>

        <section className="final-cta"><div className="container final-cta-inner"><p className="eyebrow light">Your next website</p><h2 className="serif">Start with the outcome.<br />We’ll make the scope clear.</h2><Link className="button-primary" href="/contact">Discuss your website →</Link></div></section>
      </main>
      <Footer />
    </>
  );
}
