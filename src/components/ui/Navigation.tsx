"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/products", label: "Digital Products" },
  { href: "/services/websites", label: "Websites" },
  { href: "/services/apps", label: "Mobile Apps" },
  { href: "/#process", label: "How It Works" },
  { href: "/#about", label: "About" },
];

export function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const overDarkHero = pathname === "/" || pathname === "/services/apps" || pathname === "/products/ai-product-photography-playbook";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const linkClass = (href: string) => `nav-link ${pathname === href || (href !== "/" && pathname.startsWith(href)) ? "active" : ""}`;

  return (
    <header className={`site-header ${overDarkHero ? "on-dark" : ""} ${scrolled ? "scrolled" : ""} ${open ? "menu-open" : ""}`}>
      <div className="container nav-inner">
        <Link href="/" className="wordmark" aria-label="Velayon home"><span className="wordmark-mark" aria-hidden="true">V</span><span>VELAYON</span></Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navLinks.map((link) => <Link key={link.href} className={linkClass(link.href)} href={link.href}>{link.label}</Link>)}
          <Link className="nav-cta" href="/contact">Start a Project <span aria-hidden="true">→</span></Link>
        </nav>
        <button className="menu-button" type="button" aria-expanded={open} aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen((value) => !value)}><span aria-hidden="true">{open ? "×" : "☰"}</span></button>
      </div>
      {open && <nav className="mobile-nav" aria-label="Mobile navigation">{navLinks.map((link) => <Link key={link.href} className={linkClass(link.href)} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}<Link className="nav-cta" href="/contact" onClick={() => setOpen(false)}>Start a Project →</Link></nav>}
    </header>
  );
}
