import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/ui/Navigation";
import { Footer } from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Bibek Kumar Thagunna — Founder of Velayon Dynamics",
  description: "Bibek Kumar Thagunna is a Nepal-based designer, software developer and founder of Velayon Dynamics, working across digital products, web platforms, Flutter, Expo, Android and agentic AI.",
  alternates: { canonical: "/about/bibek-kumar-thagunna" },
  openGraph: { type: "profile", title: "Bibek Kumar Thagunna — Founder of Velayon Dynamics", description: "Nepal-based designer, software developer and founder building practical digital products and software systems.", images: ["https://velayon.com/brand/bibek-kumar-thagunna-portrait-v1.webp"] },
};

const profileSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": "https://velayon.com/about/bibek-kumar-thagunna#profile",
  url: "https://velayon.com/about/bibek-kumar-thagunna",
  mainEntity: {
    "@type": "Person",
    "@id": "https://velayon.com/about/bibek-kumar-thagunna#person",
    name: "Bibek Kumar Thagunna",
    image: "https://velayon.com/brand/bibek-kumar-thagunna-portrait-v1.webp",
    jobTitle: "Founder, Designer and Software Developer",
    description: "Nepal-based founder of Velayon Dynamics working across digital products, web platforms, Flutter, Expo, Android and agentic AI.",
    worksFor: { "@id": "https://velayon.com/#organization" },
    knowsAbout: ["Digital product design", "Website development", "Flutter", "React Native", "Expo", "Native Android", "Agentic AI"],
  },
};

export default function FounderProfilePage() {
  return <><Navigation /><main><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema) }} />
    <section className="founder-profile-hero"><div className="container founder-profile-grid"><div className="founder-profile-portrait"><Image src="/brand/bibek-kumar-thagunna-portrait-v1.webp" alt="Portrait of Bibek Kumar Thagunna" width={1101} height={1429} priority fetchPriority="high" sizes="(max-width: 980px) 82vw, 420px" /></div><div><p className="eyebrow light">Founder of Velayon Dynamics</p><h1>Bibek Kumar Thagunna</h1><p className="founder-profile-lead">A Nepal-based designer and software developer building digital products and focused software systems that are easier to understand, buy and operate.</p><div className="hero-note dark-note"><span>Digital products</span><span>Web platforms</span><span>Mobile applications</span><span>Agentic AI</span></div><Link className="button button-primary" href="/contact">Start a conversation <span>↗</span></Link></div></div></section>
    <section className="section founder-story"><div className="container founder-story-grid"><div><p className="eyebrow">The vision</p><h2>Make capable technology feel clear and useful.</h2></div><div><p>Bibek founded Velayon Dynamics around a simple idea: customers should be able to understand what a digital product or software project will do, what it includes and what happens next before they commit.</p><p>His work combines product thinking, interface design and hands-on engineering. The studio creates original playbooks and downloadable systems alongside conversion-focused websites, Flutter and Expo applications, and native Android products.</p><p>From Nepal, Bibek works with customers internationally while keeping each first release focused, documented and ready to grow.</p></div></div></section>
    <section className="section soft-section"><div className="container"><header className="section-intro"><div><p className="eyebrow">Areas of work</p><h2>Design judgment backed by engineering.</h2></div><p>Every engagement connects the customer experience to the system that makes it dependable.</p></header><div className="foundation-grid">{[["Product","Digital products","Original ebooks, playbooks, templates and reusable working systems."],["Web","Websites","Responsive, conversion-focused websites with technical SEO foundations."],["Mobile","Applications","Flutter, React Native with Expo and native Android development."],["AI","Agentic systems","Practical AI workflows and product experiences designed around real tasks."],["Systems","Architecture","Clear data, integration and deployment decisions for maintainable releases."],["Handover","Ownership","Documented delivery that leaves customers in control of what was built."]].map(([label,title,copy]) => <article className="foundation-card" key={title}><span>{label}</span><h3>{title}</h3><p>{copy}</p><i aria-hidden="true">↗</i></article>)}</div></div></section>
  </main><Footer /></>;
}
