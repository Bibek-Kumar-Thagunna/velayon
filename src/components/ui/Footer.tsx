import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <Link href="/" className="wordmark"><span className="wordmark-mark" aria-hidden="true">V</span><span>VELAYON</span></Link>
          <p>Practical digital products and thoughtfully engineered software for people building something real.</p>
          <a className="footer-email" href="mailto:contact@velayon.com">contact@velayon.com ↗</a>
        </div>
        <div className="footer-column">
          <p className="eyebrow">Explore</p>
          <Link href="/products">Digital products</Link>
          <Link href="/services/websites">Website packages</Link>
          <Link href="/services/apps">Mobile app packages</Link>
        </div>
        <div className="footer-column">
          <p className="eyebrow">Company</p>
          <Link href="/#process">How it works</Link>
          <Link href="/contact">Discuss a project</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Velayon. All rights reserved.</span>
        <span>Kathmandu, Nepal · Working worldwide</span>
      </div>
    </footer>
  );
}
