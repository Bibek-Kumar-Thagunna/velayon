import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/ui/Navigation";
import { Footer } from "@/components/ui/Footer";
import { checkoutUrl } from "@/lib/catalog";

const paths = [
  { number: "01", title: "Digital products", copy: "Practical guides and working systems made for immediate use.", action: "Shop products", href: "/products", image: "/products/ai-product-photography-playbook/book-3d.png", alt: "3D edition of the AI Product Photography Playbook", mode: "contain" },
  { number: "02", title: "Website packages", copy: "Conversion-focused sites with a defined scope, timeline and price.", action: "Compare websites", href: "/services/websites", image: "/brand/website-packages-v2.webp", alt: "A responsive Velayon website displayed on a laptop", mode: "cover" },
  { number: "03", title: "Mobile app development", copy: "Focused Flutter, Expo and native Android releases.", action: "Compare app builds", href: "/services/apps", image: "/brand/mobile-app-packages-v2.webp", alt: "Mobile application interface displayed across three phones", mode: "cover" },
];

const packages = [
  { label: "Focused launch", title: "Launch page", price: "$599", copy: "A conversion-focused page with responsive design, contact form, analytics and core SEO.", href: "/services/websites" },
  { label: "Most requested", title: "Business website", price: "$1,499", copy: "Up to six tailored pages, editable content, lead forms and a complete technical foundation.", href: "/services/websites", featured: true },
  { label: "First mobile release", title: "Utility app MVP", price: "$2,400", copy: "Flutter or Expo, up to seven core screens, data storage and a tested Android build.", href: "/services/apps" },
];

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <section className="home-hero">
          <div className="container home-hero-grid">
            <div className="home-hero-copy">
              <p className="eyebrow light">Digital products · Websites · Mobile apps</p>
              <h1>Useful digital work,<br /><span>made to launch.</span></h1>
              <p className="hero-lead">Buy a practical creative system or commission a clearly scoped website or Android app—with visible deliverables, realistic timelines and direct support.</p>
              <div className="action-row"><Link className="button button-primary" href="/products">Explore digital products <span>↗</span></Link><Link className="button button-ghost" href="#services">View development services</Link></div>
              <div className="trust-row"><span>Published pricing</span><span>Worldwide delivery</span><span>Scope agreed before work</span></div>
            </div>
            <div className="home-hero-art">
              <Image src="/brand/velayon-hero-v2.webp" alt="Velayon creative products, websites and mobile application services" fill priority sizes="(max-width: 900px) 100vw, 52vw" />
              <span className="hero-art-label"><b>VELAYON</b><small>Product · Design · Development</small></span>
            </div>
          </div>
        </section>

        <section className="section paths-section" id="services">
          <div className="container">
            <header className="section-intro"><div><p className="eyebrow">Three ways to work together</p><h2>Choose what you need now.</h2></div><p>Start with a finished resource, a defined website package or a focused mobile release. Each path has a clear next step.</p></header>
            <div className="path-grid">
              {paths.map((item) => <article className="path-card" key={item.title}>
                <div className={`path-media ${item.mode}`}><Image src={item.image} alt={item.alt} fill sizes="(max-width: 760px) 100vw, 33vw" /></div>
                <div className="path-copy"><span className="card-number">{item.number}</span><h3>{item.title}</h3><p>{item.copy}</p><Link className="text-link" href={item.href}>{item.action} <span>↗</span></Link></div>
              </article>)}
            </div>
          </div>
        </section>

        <section className="section product-feature">
          <div className="container product-feature-grid">
            <div className="book-stage"><div className="book-aura" /><Image src="/products/ai-product-photography-playbook/book-3d.png" alt="3D hardcover presentation of The AI Product Photography Playbook" width={1103} height={1426} /></div>
            <div className="product-feature-copy"><p className="eyebrow light">Featured digital product · $9.99</p><h2>The product-photo system that shows its work.</h2><p className="feature-lead">The AI Product Photography Playbook pairs every prompt structure with the result it is designed to create—then gives you focused corrections when the first image is not quite right.</p>
              <div className="feature-facts"><span><b>120</b> editable workflows</span><span><b>48</b> premium visual examples</span><span><b>12</b> commercial categories</span></div>
              <div className="action-row"><a className="button button-primary" href={checkoutUrl}>Get the playbook for $9.99 <span>↗</span></a><Link className="text-link light-link" href="/products/ai-product-photography-playbook">See what is included</Link></div>
            </div>
          </div>
        </section>

        <section className="section package-preview">
          <div className="container">
            <header className="section-intro"><div><p className="eyebrow">Development packages</p><h2>A clear starting point for real projects.</h2></div><p>Every package names the outcome, included work and starting investment. Optional features are discussed and quoted before development begins.</p></header>
            <div className="price-grid">{packages.map((item) => <article className={`price-card ${item.featured ? "featured" : ""}`} key={item.title}><p className="price-label">{item.label}</p><h3>{item.title}</h3><strong className="price">{item.price}</strong><p>{item.copy}</p><Link className="button button-outline" href={item.href}>View the full scope <span>↗</span></Link></article>)}</div>
          </div>
        </section>

        <section className="section process-section" id="process">
          <div className="container">
            <header className="section-intro compact"><div><p className="eyebrow">How it works</p><h2>Four visible steps. No mystery.</h2></div></header>
            <div className="process-grid">{[
              ["01", "Choose", "Pick a product or the package closest to your goal."],
              ["02", "Confirm", "Review the deliverables and agree on the exact scope."],
              ["03", "Build", "Follow progress through clear milestones and decisions."],
              ["04", "Launch", "Receive the files or a tested, documented release."],
            ].map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
          </div>
        </section>

        <section className="closing-cta">
          <div className="container closing-cta-grid"><div><p className="eyebrow light">Ready when you are</p><h2>Bring the next idea into focus.</h2></div><div><p>Choose a published package or tell us what needs to be different. We will make the path forward clear.</p><Link className="button button-primary" href="/contact">Start a conversation <span>↗</span></Link></div></div>
        </section>
      </main>
      <Footer />
    </>
  );
}
