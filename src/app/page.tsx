import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/ui/Navigation";
import { Footer } from "@/components/ui/Footer";
import { appTechnologies, faq, websitePackages } from "@/lib/catalog";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <section className="hero">
          <div className="container hero-inner">
            <div className="hero-copy">
              <p className="eyebrow">Digital products · websites · mobile apps</p>
              <h1 className="serif">Practical ideas,<br />made <em>exceptionally.</em></h1>
              <p className="hero-summary">Buy ready-to-use creative systems or choose a clearly scoped website or mobile-app package—with transparent deliverables, timelines and pricing.</p>
              <div className="hero-actions">
                <Link className="button-primary" href="/products">Explore digital products <span aria-hidden="true">→</span></Link>
                <Link className="button-secondary" href="/contact">Discuss a project</Link>
              </div>
              <div className="hero-note" aria-label="Service principles"><span>Published package pricing</span><span>Worldwide delivery</span><span>Optional enhancements quoted upfront</span></div>
            </div>
            <aside className="hero-ledger" aria-label="What Velayon offers">
              <div className="ledger-head"><span>Ways to work with us</span><span className="ledger-index">01—03</span></div>
              <Link className="ledger-row" href="/products"><span className="ledger-number">01</span><span><h2>Digital products</h2><p>Guides, systems and practical resources.</p></span><span className="ledger-arrow" aria-hidden="true">↗</span></Link>
              <Link className="ledger-row" href="/services/websites"><span className="ledger-number">02</span><span><h2>Website packages</h2><p>Landing pages, business sites and stores.</p></span><span className="ledger-arrow" aria-hidden="true">↗</span></Link>
              <Link className="ledger-row" href="/services/apps"><span className="ledger-number">03</span><span><h2>Mobile app packages</h2><p>Flutter, Expo and native Android builds.</p></span><span className="ledger-arrow" aria-hidden="true">↗</span></Link>
            </aside>
          </div>
        </section>

        <section className="offer-strip" aria-label="Velayon service promise">
          <div className="container offer-strip-inner">
            <div className="offer-intro"><strong>Clarity before commitment.</strong><p>Every package explains what is included, what happens next and what your investment covers.</p></div>
            <div className="offer-point"><strong>Useful by design</strong><p>Products and software shaped around a real task—not a list of fashionable features.</p></div>
            <div className="offer-point"><strong>Built to grow</strong><p>Start with a defined scope, then add capabilities through a written, agreed estimate.</p></div>
          </div>
        </section>

        <section className="section product-feature">
          <div className="container product-feature-grid">
            <div className="book-stage">
              <div className="book-shadow" />
              <Image src="/products/ai-product-photography-playbook/cover.png" alt="The AI Product Photography Playbook by Velayon" width={1200} height={1500} className="book-cover" priority />
              <span className="book-badge">New · $9.99</span>
            </div>
            <div className="feature-copy">
              <p className="eyebrow blue">Featured digital product</p>
              <h2 className="section-title serif">Stop guessing what to prompt.</h2>
              <p className="section-lead">The AI Product Photography Playbook turns everyday products into better-planned campaign images with visible examples, stronger prompts and practical correction workflows.</p>
              <ul className="check-list">
                <li><strong>84-page visual playbook</strong><span>Clear guidance without design-school language.</span></li>
                <li><strong>48 finished examples</strong><span>Across 12 commercial product categories.</span></li>
                <li><strong>120 editable workflows</strong><span>Plus a live prompt-builder workbook.</span></li>
              </ul>
              <div className="inline-actions">
                <Link className="button-primary" href="/products/ai-product-photography-playbook">See what is inside <span aria-hidden="true">→</span></Link>
                <span className="price-note"><strong>$9.99</strong> · One-time purchase</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section services-section">
          <div className="container">
            <div className="section-heading split-heading">
              <div><p className="eyebrow blue">Website packages</p><h2 className="section-title serif">Choose the right foundation.</h2></div>
              <p>Professional design and development with a defined scope. You know the deliverables, schedule and price before the build begins.</p>
            </div>
            <div className="compact-package-grid">
              {websitePackages.map((item, index) => (
                <article className={`compact-package ${item.featured ? "featured" : ""}`} key={item.name}>
                  <span className="package-index">0{index + 1}</span>
                  <h3>{item.name}</h3>
                  <p>{item.fit}</p>
                  <div className="compact-price"><strong>{item.price}</strong><span>{item.timeline}</span></div>
                </article>
              ))}
            </div>
            <Link className="text-link" href="/services/websites">Compare every website package <span aria-hidden="true">→</span></Link>
          </div>
        </section>

        <section className="section technology-section">
          <div className="container technology-grid">
            <div className="technology-intro">
              <p className="eyebrow light">Mobile app development</p>
              <h2 className="section-title serif">The technology follows the product.</h2>
              <p>We select the mobile stack around your users, release plan and required platform capabilities—not around a fashionable label.</p>
              <Link className="button-secondary" href="/services/apps">Explore app packages →</Link>
            </div>
            <div className="technology-list">
              {appTechnologies.map((tech, index) => (
                <article key={tech.name} className="technology-row">
                  <span className="tech-number">0{index + 1}</span>
                  <div><p className="tech-label">{tech.label}</p><h3>{tech.name}</h3><p>{tech.summary}</p><small>Best for: {tech.bestFor}</small></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section process-section" id="process">
          <div className="container">
            <div className="section-heading"><p className="eyebrow blue">A calm, visible process</p><h2 className="section-title serif">From brief to handover.</h2></div>
            <div className="process-grid">
              {[
                ["01", "Select", "Choose the closest package and tell us what the finished product needs to accomplish."],
                ["02", "Confirm", "We verify scope, technology, timeline and any optional enhancements in writing."],
                ["03", "Build", "You review defined milestones while design and development move forward together."],
                ["04", "Launch", "We test, hand over the finished work and explain how to manage what you own."],
              ].map(([number, title, copy]) => <article key={number} className="process-step"><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}
            </div>
          </div>
        </section>

        <section className="section faq-section">
          <div className="container faq-layout">
            <div><p className="eyebrow blue">Before we begin</p><h2 className="section-title serif">Straight answers.</h2><p className="section-lead small">If your requirement is unusual, send the brief. We will tell you whether a package fits before asking you to commit.</p></div>
            <div className="faq-list">
              {faq.map((item) => <details key={item.question}><summary>{item.question}<span>+</span></summary><p>{item.answer}</p></details>)}
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="container final-cta-inner">
            <p className="eyebrow light">Have a project in mind?</p>
            <h2 className="serif">Let’s make the scope clear<br />and the result worth using.</h2>
            <Link className="button-primary" href="/contact">Discuss your project <span aria-hidden="true">→</span></Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
