import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/ui/Navigation";
import { Footer } from "@/components/ui/Footer";
import { checkoutUrl } from "@/lib/catalog";

type IconName = "cart" | "screen" | "phone" | "brief" | "confirm" | "build" | "launch";

function Icon({ name }: { name: IconName }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {name === "cart" && <><path {...common} d="M3 4h2l2.2 10.2a2 2 0 0 0 2 1.6h7.4a2 2 0 0 0 1.9-1.4L21 7H6"/><circle {...common} cx="10" cy="20" r="1"/><circle {...common} cx="18" cy="20" r="1"/></>}
      {name === "screen" && <><rect {...common} x="3" y="4" width="18" height="13" rx="1.5"/><path {...common} d="M8 21h8M12 17v4"/></>}
      {name === "phone" && <><rect {...common} x="7" y="2.5" width="10" height="19" rx="2"/><path {...common} d="M10 5h4M11 18.5h2"/></>}
      {name === "brief" && <><path {...common} d="M6 6V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2"/><rect {...common} x="3" y="6" width="18" height="15" rx="2"/><path {...common} d="M8 11h8M8 15h5"/></>}
      {name === "confirm" && <><rect {...common} x="5" y="3" width="14" height="18" rx="2"/><path {...common} d="M9 3.5h6M8 9h8M8 13h5M8 17h3"/></>}
      {name === "build" && <><circle {...common} cx="12" cy="12" r="3"/><path {...common} d="M12 2v3M12 19v3M4.9 4.9 7 7M17 17l2.1 2.1M2 12h3M19 12h3M4.9 19.1 7 17M17 7l2.1-2.1"/></>}
      {name === "launch" && <><path {...common} d="M14 4c3-2 6-1 6-1s1 3-1 6l-7 7-4-4 6-8Z"/><path {...common} d="M9 15H5l-2 2v-5l4-4M13 16v4l-2 2h-5l2-3"/><circle {...common} cx="16" cy="7" r="1"/></>}
    </svg>
  );
}

const launchCards = [
  {
    icon: "cart" as IconName,
    title: "Digital Products",
    copy: "Practical playbooks, templates and systems you can use immediately.",
    href: "/products",
    action: "Browse products",
    image: "/products/ai-product-photography-playbook/cover.png",
    imageAlt: "Velayon AI Product Photography Playbook",
    imageClass: "concept-card-book",
  },
  {
    icon: "screen" as IconName,
    title: "Website Packages",
    copy: "Choose a site category, see every included deliverable and know the investment before work begins.",
    href: "/services/websites",
    action: "View website packages",
    image: "/brand/website-packages-v2.webp",
    imageAlt: "Velayon website design package shown on a laptop",
    imageClass: "",
  },
  {
    icon: "phone" as IconName,
    title: "Mobile App Development",
    copy: "Focused Flutter, Expo and Android builds with defined screens, functionality and delivery.",
    href: "/services/apps",
    action: "View app packages",
    image: "/brand/mobile-app-packages-v2.webp",
    imageAlt: "Velayon mobile app development package shown on phones",
    imageClass: "",
  },
];

const featuredPackages = [
  { kind: "Website", name: "Launch Page", price: "$599", copy: "One conversion-focused page, responsive build, contact form, analytics and SEO foundation.", href: "/services/websites" },
  { kind: "Website", name: "Business Website", price: "$1,499", copy: "Up to six custom pages, editable content, lead forms, technical SEO and two revision rounds.", href: "/services/websites", featured: true },
  { kind: "Mobile app", name: "Utility App MVP", price: "$2,400", copy: "Flutter or Expo, up to seven core screens, local or cloud data and a tested Android release build.", href: "/services/apps" },
];

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <section className="concept-hero">
          <Image src="/brand/velayon-hero-v2.webp" alt="Velayon digital products, website and mobile app services" fill priority sizes="100vw" className="concept-hero-image" />
          <div className="concept-hero-shade" />
          <div className="container concept-hero-inner">
            <div className="concept-hero-copy">
              <p className="concept-kicker">Digital products + clearly scoped development</p>
              <h1 className="serif">Buy smarter tools.<br />Build your next idea.</h1>
              <p>Premium digital products, professionally scoped websites and mobile apps with clear deliverables, schedules and support.</p>
              <div className="concept-actions">
                <Link className="concept-button primary" href="/products">Shop digital products <span>→</span></Link>
                <Link className="concept-button secondary" href="#packages">Compare service packages</Link>
              </div>
              <div className="concept-trust"><span>✓ Transparent pricing</span><span>✓ Defined deliverables</span><span>✓ Direct support</span></div>
            </div>
          </div>
        </section>

        <section className="concept-launch section-tight" id="about">
          <div className="container">
            <div className="concept-heading centered"><p className="concept-kicker blue">Three ways to move forward</p><h2 className="serif">What can Velayon help you launch?</h2><p>Start with a ready-to-use product or choose the professionally scoped service that best matches your goal.</p></div>
            <div className="concept-launch-grid">
              {launchCards.map((card) => (
                <article className="concept-launch-card" key={card.title}>
                  <div className="concept-card-copy">
                    <span className="concept-icon"><Icon name={card.icon} /></span>
                    <div><h3 className="serif">{card.title}</h3><p>{card.copy}</p></div>
                  </div>
                  <Link className="concept-button primary small" href={card.href}>{card.action} <span>→</span></Link>
                  <div className={`concept-card-media ${card.imageClass}`}><Image src={card.image} alt={card.imageAlt} fill sizes="(max-width: 760px) 100vw, 33vw" /></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="concept-product section-tight">
          <div className="container concept-product-grid">
            <div className="concept-product-visual"><span className="concept-product-glow" /><Image src="/products/ai-product-photography-playbook/cover.png" alt="The AI Product Photography Playbook" width={1200} height={1500} /></div>
            <div className="concept-product-copy">
              <p className="concept-kicker blue">Featured digital product</p>
              <h2 className="serif">The AI Product<br />Photography Playbook</h2>
              <div className="concept-product-details">
                <div><strong className="concept-product-price">$9.99</strong><ul><li>120 ready-to-use workflows</li><li>48 premium visual examples</li><li>Live prompt-builder workbook</li></ul></div>
                <p>Turn ordinary products into premium ads, listings and campaign images—with prompts that are designed around a visible result.</p>
              </div>
              <div className="concept-actions"><a className="concept-button primary" href={checkoutUrl}>Get instant access <span>→</span></a><Link className="concept-text-link" href="/products/ai-product-photography-playbook">See everything included</Link></div>
            </div>
          </div>
        </section>

        <section className="concept-packages section-tight" id="packages">
          <div className="container">
            <div className="concept-heading centered"><p className="concept-kicker blue">Professional packages</p><h2 className="serif">Clear scope. Published price. No guessing.</h2><p>Each package has a defined outcome. Optional features are discussed and quoted before work begins.</p></div>
            <div className="concept-package-grid">
              {featuredPackages.map((item) => (
                <article className={`concept-package-card ${item.featured ? "featured" : ""}`} key={item.name}>
                  {item.featured && <span className="concept-popular">Most popular</span>}
                  <p className="concept-package-kind">{item.kind}</p><h3 className="serif">{item.name}</h3><strong>{item.price}</strong><p>{item.copy}</p>
                  <Link className={`concept-button ${item.featured ? "primary" : "outline"} small`} href={item.href}>See included features <span>→</span></Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="concept-process section-tight" id="process">
          <div className="container">
            <div className="concept-heading centered"><p className="concept-kicker blue">A visible process</p><h2 className="serif">How it works</h2></div>
            <div className="concept-process-grid">
              {[
                ["brief", "01", "Choose", "Pick the product or package that best fits the outcome you need."],
                ["confirm", "02", "Confirm", "Review the deliverables, share your requirements and confirm the scope."],
                ["build", "03", "Build", "We move through clear milestones and keep decisions visible."],
                ["launch", "04", "Launch", "Receive your files or a tested, documented website or app release."],
              ].map(([icon, number, title, copy]) => <article key={number}><span className="concept-icon"><Icon name={icon as IconName} /></span><div><strong>{number}</strong><h3 className="serif">{title}</h3></div><p>{copy}</p></article>)}
            </div>
          </div>
        </section>

        <section className="concept-final">
          <Image src="/brand/velayon-hero-v2.webp" alt="" fill sizes="100vw" className="concept-final-image" />
          <div className="concept-final-shade" />
          <div className="container concept-final-inner"><div><p className="concept-kicker">Know what you want to launch?</p><h2 className="serif">Turn the idea into a clear first release.</h2><p>Choose a package or talk with Velayon about the additions your project needs.</p></div><div className="concept-actions"><Link className="concept-button primary" href="#packages">View packages <span>→</span></Link><Link className="concept-button secondary" href="/contact">Talk to Velayon <span>→</span></Link></div></div>
        </section>
      </main>
      <Footer />
    </>
  );
}
