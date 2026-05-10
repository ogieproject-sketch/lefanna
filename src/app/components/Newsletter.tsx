"use client";
import { useState } from "react";
import { useLang } from "../context/LanguageContext";

export default function Newsletter() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { t } = useLang();
  const n = t.newsletter;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) setSubmitted(true);
  };

  return (
    <section className="newsletter">
      <div className="container">
        <div className="newsletter-inner">
          <div data-reveal="left">
            <p className="eyebrow" style={{ color: "var(--sandstone)" }}>{n.eyebrow}</p>
            <h2 className="newsletter-title">
              {n.title}<br /><em>{n.titleEm}</em>
            </h2>
            <p className="newsletter-body">{n.body}</p>
          </div>
          <div data-reveal="right">
            {submitted ? (
              <div style={{ color: "var(--sandstone)", fontFamily: "var(--serif)", fontSize: "1.5rem", fontStyle: "italic" }}>
                {n.thanks}
              </div>
            ) : (
              <form className="newsletter-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="newsletter-input"
                  placeholder={n.namePlaceholder}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  type="email"
                  className="newsletter-input"
                  placeholder={n.emailPlaceholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="newsletter-btn">{n.btn}</button>
                <p className="newsletter-note">{n.note}</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
