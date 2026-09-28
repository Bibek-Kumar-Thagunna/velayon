import Link from "next/link";

export function Footer() {
  return (
    <>
    <section className="mountain-cta">
      <div className="mountain-cta-shade" />
      <div className="container mountain-cta-inner">
        <div><p className="eyebrow light">Ready when you are</p><h2>Give the next idea a clear way forward.</h2></div>
        <div><p>Choose a published package or tell us what needs to be different. We will make the scope, investment and next step easy to understand.</p><Link className="button button-primary" href="/contact">Start a conversation <span>↗</span></Link></div>
      </div>
    </section>
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link href="/" className="wordmark footer-wordmark"><span className="wordmark-symbol">V</span><span>VELAYON</span></Link>
          <p>Digital products and carefully scoped web and mobile development from Nepal to the world.</p>
          <a className="footer-email" href="mailto:contact@velayon.com">contact@velayon.com ↗</a>
        </div>
        <div className="footer-links"><p>Explore</p><Link href="/products">Digital products</Link><Link href="/services/websites">Website packages</Link><Link href="/services/apps">Mobile app packages</Link></div>
        <div className="footer-links"><p>Company</p><Link href="/about">About Velayon</Link><Link href="/#process">How we work</Link><Link href="/contact">Start a project</Link></div>
        <div className="footer-links"><p>Information</p><a href="mailto:contact@velayon.com?subject=Velayon%20support">Product support</a><Link href="/terms">Terms of service</Link><Link href="/privacy">Privacy policy</Link></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} Velayon</span><span>Designed and developed with care in Nepal.</span></div>
    </footer></>
  );
}
