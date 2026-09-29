import { Navigation } from "@/components/ui/Navigation";
import { Footer } from "@/components/ui/Footer";
import { ContactForm } from "@/components/ui/ContactForm";
import { Suspense } from "react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main>
        <section className="page-hero contact-hero">
          <div className="container page-hero-grid contact-hero-grid">
            <div className="contact-hero-copy"><p className="eyebrow blue">Contact Velayon Dynamics</p><h1>Start with the outcome. We’ll shape the right scope.</h1><p>A useful brief does not need to be technical. Tell us who it is for, what it should help them do and what a successful first release looks like.</p><div className="contact-hero-trust"><span>One-business-day reply</span><span>Worldwide projects</span><span>No sales call required</span></div></div>
            <div className="contact-hero-panel" aria-label="What happens after you contact Velayon Dynamics"><p className="eyebrow light">What happens next</p><div className="brief-route"><article><span>01</span><div><b>We read the brief</b><p>Your goals, must-have features and preferred timeline.</p></div></article><article><span>02</span><div><b>We match the scope</b><p>The closest published package plus any clearly priced additions.</p></div></article><article><span>03</span><div><b>You receive a clear next step</b><p>A practical recommendation with timing and investment.</p></div></article></div><Link href="#project-form">Go to the secure enquiry form <span>↓</span></Link></div>
          </div>
        </section>
        <section className="section" id="project-form">
          <div className="container contact-layout">
            <aside className="contact-aside">
              <div><p className="eyebrow blue">Before you send</p><h2 className="section-title serif" style={{fontSize: "2.7rem"}}>A few helpful details.</h2><p className="section-lead small">Share examples you like, essential features, your target launch window and anything the project must connect to.</p></div>
              <div className="contact-detail"><span>Contact</span><Link href="/contact">contact@velayon.com</Link></div>
              <div className="contact-detail"><span>Location</span><strong>Kathmandu, Nepal · Remote worldwide</strong></div>
              <div className="contact-detail"><span>Typical reply</span><strong>Within one business day</strong></div>
            </aside>
            <Suspense fallback={<div className="contact-form form-loading">Loading secure form…</div>}><ContactForm /></Suspense>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
