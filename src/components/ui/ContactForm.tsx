"use client";

import { FormEvent, useState } from "react";
import { useSearchParams } from "next/navigation";

const productPurchaseRequest = "AI Product Photography Playbook purchase request";
const projectOptions = ["Launch Page", "Business Website", "Booking Website", "Online Store", "Utility MVP", "Service & Booking App", "Commerce App", "Operations App", productPurchaseRequest, "Digital product enquiry", "Product support", "Something else"];
const appProjects = new Set(["Utility MVP", "Service & Booking App", "Commerce App", "Operations App"]);
const projectBudgets: Record<string, string> = {
  "Launch Page": "$500–$1,500",
  "Business Website": "$500–$1,500",
  "Booking Website": "$1,500–$2,500",
  "Online Store": "$2,500–$5,000",
  "Utility MVP": "$1,500–$2,500",
  "Service & Booking App": "$2,500–$5,000",
  "Commerce App": "$5,000–$10,000",
  "Operations App": "$5,000–$10,000",
  [productPurchaseRequest]: "$9.99 one-time purchase",
  "Digital product enquiry": "Under $500",
  "Product support": "Not applicable",
  "Something else": "Not decided yet",
};

export function ContactForm() {
  const searchParams = useSearchParams();
  const requestedProject = searchParams.get("project") || "";
  const initialProject = projectOptions.includes(requestedProject) ? requestedProject : "Business Website";
  const [formData, setFormData] = useState({
    name: "", email: "", company: "", project: initialProject,
    technology: "Not sure — recommend the best fit", category: "Not selected",
    budget: projectBudgets[initialProject] || "Not decided yet",
    timeline: "Flexible", details: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const isApp = appProjects.has(formData.project);
  const isProductPurchase = formData.project === productPurchaseRequest;

  function update(field: keyof typeof formData, value: string) {
    setFormData((current) => ({ ...current, [field]: value }));
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (!accessKey) { setStatus("error"); return; }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Velayon Dynamics enquiry — ${formData.project}`,
          from_name: "Velayon Dynamics Website",
          name: formData.name,
          email: formData.email,
          company: formData.company || "Not provided",
          project: formData.project,
          technology: isApp ? formData.technology : "Not applicable",
          app_category: isApp ? formData.category : "Not applicable",
          planned_investment: formData.budget,
          target_timeline: formData.timeline,
          message: formData.details,
          botcheck: "",
        }),
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error("Submission failed");
      setStatus("success");
      setFormData((current) => ({ ...current, name: "", email: "", company: "", details: "" }));
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="honeypot" />
      <div className="field-grid">
        <label><span>Name *</span><input value={formData.name} onChange={(e) => update("name", e.target.value)} autoComplete="name" required placeholder="Your name" /></label>
        <label><span>Email *</span><input value={formData.email} onChange={(e) => update("email", e.target.value)} type="email" autoComplete="email" required placeholder="you@company.com" /></label>
      </div>
      <div className="field-grid">
        <label><span>Company or brand</span><input value={formData.company} onChange={(e) => update("company", e.target.value)} autoComplete="organization" placeholder="Optional" /></label>
        <label><span>Package or project *</span><select value={formData.project} onChange={(e) => {
          const project = e.target.value;
          setFormData((current) => ({ ...current, project, budget: projectBudgets[project] || "Not decided yet" }));
        }}>{projectOptions.map((option) => <option key={option}>{option}</option>)}</select></label>
      </div>

      {isApp && <div className="app-fields">
        <p><b>App preferences</b><span>These choices help us recommend the right first release. Choose “not sure” whenever you want our recommendation.</span></p>
        <div className="field-grid">
          <label><span>Technology preference</span><select value={formData.technology} onChange={(e) => update("technology", e.target.value)}><option>Not sure — recommend the best fit</option><option>Flutter</option><option>React Native + Expo</option><option>Native Android · Kotlin</option></select></label>
          <label><span>App category</span><select value={formData.category} onChange={(e) => update("category", e.target.value)}><option>Not selected</option><option>Utility & productivity</option><option>Booking & services</option><option>Commerce</option><option>Business operations</option><option>Content & community</option></select></label>
        </div>
      </div>}

      <div className="field-grid">
        <label><span>{isProductPurchase ? "Product price" : "Planned investment"}</span><select value={formData.budget} onChange={(e) => update("budget", e.target.value)} disabled={isProductPurchase}><option>$9.99 one-time purchase</option><option>Not applicable</option><option>Under $500</option><option>$500–$1,500</option><option>$1,500–$2,500</option><option>$2,500–$5,000</option><option>$5,000–$10,000</option><option>$10,000+</option><option>Not decided yet</option></select></label>
        <label><span>Preferred timeline</span><select value={formData.timeline} onChange={(e) => update("timeline", e.target.value)}><option>As soon as practical</option><option>Within one month</option><option>1–3 months</option><option>3+ months</option><option>Flexible</option></select></label>
      </div>
      <label><span>{isProductPurchase ? "Purchase request note (optional)" : "What should the finished product help someone do? *"}</span><textarea value={formData.details} onChange={(e) => update("details", e.target.value)} required={!isProductPurchase} rows={7} placeholder={isProductPurchase ? "Add any question about the playbook or licence." : "Describe the customer, the main task, must-have features and any examples you like."} /></label>
      <button className="button button-primary form-submit" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : isProductPurchase ? "Request purchase access" : "Send message"}<span aria-hidden="true">↗</span></button>
      <p className={`form-status ${status}`} role="status">{status === "success" ? "Message sent successfully. We’ll reply within one business day." : status === "error" ? "The message could not be sent. Please retry or return to this page shortly." : "Your message is sent securely to Velayon Dynamics. No email application will open."}</p>
    </form>
  );
}
