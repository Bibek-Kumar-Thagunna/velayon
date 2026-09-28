import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main footer-main-wide">
        <div className="footer-brand">
          <Link href="/" className="wordmark"><span className="wordmark-mark" aria-hidden="true">V</span><span>VELAYON</span></Link>
          <p>Digital products, professionally scoped websites and mobile apps—made for people building something real.</p>
          <a className="footer-email" href="mailto:contact@velayon.com">contact@velayon.com ↗</a>
        </div>
        <div className="footer-column"><p className="eyebrow">Products</p><Link href="/products">All products</Link><Link href="/products/ai-product-photography-playbook">AI Photography Playbook</Link></div>
        <div className="footer-column"><p className="eyebrow">Services</p><Link href="/services/websites">Website packages</Link><Link href="/services/apps">Mobile app packages</Link><Link href="/contact">Optional enhancements</Link></div>
        <div className="footer-column"><p className="eyebrow">Company</p><Link href="/#about">About Velayon</Link><Link href="/#process">How it works</Link><Link href="/contact">Contact</Link></div>
        <div className="footer-column"><p className="eyebrow">Support</p><a href="mailto:contact@velayon.com?subject=Velayon%20support">Product support</a><Link href="/terms">Terms of service</Link><Link href="/privacy">Privacy policy</Link></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} Velayon. All rights reserved.</span><span>Build a smarter tomorrow.</span></div>
    </footer>
  );
}
