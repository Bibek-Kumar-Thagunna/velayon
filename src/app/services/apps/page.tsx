import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/ui/Navigation";
import { Footer } from "@/components/ui/Footer";
import { appCategories, appPackages, appTechnologies } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Flutter, Expo & Android App Development Packages",
  description: "Technology-led mobile app development using Flutter, React Native with Expo or native Android with Kotlin. App packages from USD 1,200.",
  alternates: { canonical: "/services/apps" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Mobile App Design and Development",
  provider: { "@type": "Organization", name: "Velayon", url: "https://velayon.com" },
  areaServed: "Worldwide",
  serviceType: ["Flutter development", "React Native and Expo development", "Native Android Kotlin development"],
};

export default function AppsPage() {
  return (
    <>
      <Navigation />
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
        <section className="page-hero dark">
          <div className="container page-hero-grid">
            <div><p className="eyebrow light">Mobile app design & development</p><h1 className="serif">Built around the product,<br />not the framework.</h1><div className="page-hero-facts"><span>Packages from $1,200</span><span>Flutter · Expo · Kotlin</span><span>Android release included</span></div></div>
            <p className="page-hero-copy">First we choose the right technology for the app you need. Then we scope the screens, data and integrations around a category that matches the real customer journey.</p>
          </div>
        </section>

        <section className="section">
          <div className="container technology-grid" style={{color: "var(--ink)"}}>
            <div className="technology-intro"><p className="eyebrow blue">01 · Choose the technology</p><h2 className="section-title serif">Three sensible paths.</h2><p style={{color: "#5d677e"}}>The recommendation depends on platform reach, hardware needs, release speed, existing systems and long-term maintenance.</p></div>
            <div className="technology-list" style={{borderColor: "var(--line)"}}>
              {appTechnologies.map((tech, index) => <article className="technology-row" style={{borderColor: "var(--line)"}} key={tech.name}><span className="tech-number" style={{borderColor: "#aab0c1", color: "#626b82"}}>0{index + 1}</span><div><p className="tech-label">{tech.label}</p><h3>{tech.name}</h3><p style={{color: "#5d677e"}}>{tech.summary}</p><small style={{color: "#7b8499"}}>Best for: {tech.bestFor}</small></div></article>)}
            </div>
          </div>
        </section>

        <section className="section technology-section">
          <div className="container">
            <div className="section-heading split-heading"><div><p className="eyebrow light">02 · Choose the app category</p><h2 className="section-title serif">Start with what users need to do.</h2></div><p style={{color: "#aab4d0"}}>Categories keep the first conversation practical. They make it easier to identify the core screens, data model and integrations your release actually needs.</p></div>
            <div className="category-grid">{appCategories.map((item) => <article className="category-card" key={item.name}><span>{item.icon}</span><h3>{item.name}</h3><p>{item.examples}</p></article>)}</div>
          </div>
        </section>

        <section className="section services-section">
          <div className="container">
            <div className="section-heading split-heading"><div><p className="eyebrow blue">03 · Select the closest package</p><h2 className="section-title serif">A defined first release.</h2></div><p>Each price covers the listed scope. Native iOS development, custom backend infrastructure, paid services, specialist hardware integration and store fees are estimated separately when needed.</p></div>
            <div className="package-grid">
              {appPackages.map((item) => <article className={`package-card ${item.featured ? "featured" : ""}`} key={item.name}>{item.featured && <span className="package-ribbon">Popular first release</span>}<h2>{item.name}</h2><p className="fit">{item.fit}</p><ul>{item.features.map((feature) => <li key={feature}>{feature}</li>)}</ul><div className="package-price-row"><strong>{item.price}</strong><span>Typical delivery<br />{item.timeline}</span></div><Link className="button-primary" href={`/contact?project=${encodeURIComponent(item.name)}`}>Ask about this package →</Link></article>)}
            </div>
            <div className="scope-note"><strong>Important scope note</strong><p>These packages assume a defined first release and either local data, an existing service or a conventional managed backend. We quote custom backend systems, complex realtime features and regulated-data requirements separately.</p></div>
          </div>
        </section>

        <section className="final-cta"><div className="container final-cta-inner"><p className="eyebrow light">Have an app concept?</p><h2 className="serif">Turn the idea into a<br />clear first release.</h2><Link className="button-primary" href="/contact">Discuss your mobile app →</Link></div></section>
      </main>
      <Footer />
    </>
  );
}
