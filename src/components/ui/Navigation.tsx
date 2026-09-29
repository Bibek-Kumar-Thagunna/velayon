"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/products", label: "Digital products" },
  { href: "/services/websites", label: "Websites" },
  { href: "/services/apps", label: "Mobile apps" },
  { href: "/contact", label: "Contact" },
  { href: "/about", label: "About" },
];

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  function active(href: string) {
    if (href.startsWith("/#")) return false;
    return pathname === href || (href !== "/" && pathname.startsWith(href));
  }

  return (
    <header className="site-header">
      <div className="container nav-inner">
        <Link href="/" className="wordmark" aria-label="Velayon Dynamics home">
          <span className="wordmark-symbol" aria-hidden="true">V</span>
          <span className="wordmark-name">VELAYON</span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navLinks.map((link) => <Link key={link.href} href={link.href} className={active(link.href) ? "active" : ""}>{link.label}</Link>)}
          <Link className="nav-cta" href="/contact">Start a project <span aria-hidden="true">↗</span></Link>
        </nav>
        <button className="menu-button" type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen((value) => !value)}><span /><span /></button>
      </div>
      <nav className={`mobile-nav ${open ? "open" : ""}`} aria-label="Mobile navigation">
        <div className="container mobile-nav-inner">
          {navLinks.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className={active(link.href) ? "active" : ""}>{link.label}<span>↗</span></Link>)}
          <Link className="button button-primary mobile-project-link" href="/contact" onClick={() => setOpen(false)}>Start a project <span>↗</span></Link>
        </div>
      </nav>
    </header>
  );
}
