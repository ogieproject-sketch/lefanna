"use client";
import { useState } from "react";

export default function Newsletter() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) setSubmitted(true);
  };

  return (
    <section className="newsletter">
      <div className="container">
        <div className="newsletter-inner">
          <div data-reveal="left">
            <p className="eyebrow" style={{ color: "var(--sandstone)" }}>Stay in the loop</p>
            <h2 className="newsletter-title">
              Get exclusive deals &amp;<br /><em>the latest news.</em>
            </h2>
            <p className="newsletter-body">
              Monthly offers, new property launches, seasonal specials and Bali travel tips — delivered straight to your inbox. No spam, ever.
            </p>
          </div>
          <div data-reveal="right">
            {submitted ? (
              <div style={{ color: "var(--sandstone)", fontFamily: "var(--serif)", fontSize: "1.5rem", fontStyle: "italic" }}>
                Thank you! We&apos;ll be in touch soon.
              </div>
            ) : (
              <form className="newsletter-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="newsletter-input"
                  placeholder="Your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  type="email"
                  className="newsletter-input"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="newsletter-btn">Subscribe now →</button>
                <p className="newsletter-note">
                  By subscribing you agree to our privacy policy. Unsubscribe anytime.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
