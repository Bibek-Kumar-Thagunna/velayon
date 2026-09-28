"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const project = String(data.get("project") || "Project enquiry");
    const budget = String(data.get("budget") || "Not specified");
    const details = String(data.get("details") || "");
    const subject = encodeURIComponent(`${project} enquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nProject: ${project}\nBudget: ${budget}\n\nProject details:\n${details}`);
    setSent(true);
    window.location.href = `mailto:contact@velayon.com?subject=${subject}&body=${body}`;
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="field-grid">
        <label><span>Name</span><input name="name" autoComplete="name" required placeholder="Your name" /></label>
        <label><span>Email</span><input name="email" type="email" autoComplete="email" required placeholder="you@company.com" /></label>
      </div>
      <div className="field-grid">
        <label>
          <span>What do you need?</span>
          <select name="project" defaultValue="Business website">
            <option>Business website</option>
            <option>Landing page</option>
            <option>Booking website</option>
            <option>Online store</option>
            <option>Utility mobile app</option>
            <option>Service or booking app</option>
            <option>Commerce app</option>
            <option>Business operations app</option>
            <option>Something else</option>
          </select>
        </label>
        <label>
          <span>Planned investment</span>
          <select name="budget" defaultValue="$500–$1,000">
            <option>Under $500</option>
            <option>$500–$1,000</option>
            <option>$1,000–$2,500</option>
            <option>$2,500–$5,000</option>
            <option>$5,000+</option>
          </select>
        </label>
      </div>
      <label><span>Tell us about the outcome you need</span><textarea name="details" required rows={7} placeholder="What should the website or app help your customers—or your team—do?" /></label>
      <button className="button-primary" type="submit">Prepare email enquiry <span aria-hidden="true">→</span></button>
      <p className="form-note">{sent ? "Your email app should now be open with the enquiry prepared." : "This opens your email app with the details filled in. No information is stored on this website."}</p>
    </form>
  );
}
