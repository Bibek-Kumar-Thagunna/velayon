import { Navigation } from "@/components/ui/Navigation";
import { Footer } from "@/components/ui/Footer";
import { ContactForm } from "@/components/ui/ContactForm";

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main>
        <section className="page-hero">
          <div className="container page-hero-grid">
            <div><p className="eyebrow blue">Project enquiry</p><h1 className="serif">Tell us what the finished product needs to do.</h1></div>
            <p className="page-hero-copy">A useful brief does not need to be technical. Describe the audience, the task and the outcome. We will identify the closest package and explain any additional scope clearly.</p>
          </div>
        </section>
        <section className="section">
          <div className="container contact-layout">
            <aside className="contact-aside">
              <div><p className="eyebrow blue">Before you send</p><h2 className="section-title serif" style={{fontSize: "2.7rem"}}>A few helpful details.</h2><p className="section-lead small">Share examples you like, essential features, your target launch window and anything the project must connect to.</p></div>
              <div className="contact-detail"><span>Email</span><a href="mailto:contact@velayon.com">contact@velayon.com</a></div>
              <div className="contact-detail"><span>Location</span><strong>Kathmandu, Nepal · Remote worldwide</strong></div>
              <div className="contact-detail"><span>Typical reply</span><strong>Within two business days</strong></div>
            </aside>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
