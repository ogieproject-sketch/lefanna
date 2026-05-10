"use client";
import { useLang } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLang();
  const f = t.footer;
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div>
            <div className="footer-logo-wrap">
              <div className="footer-logo">lefanna<span>.</span></div>
            </div>
            <p className="footer-tagline">{f.tagline}</p>
            <div className="footer-socials">
              <a href="#" className="footer-social" aria-label="Instagram">
                <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="#" className="footer-social" aria-label="Facebook">
                <svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a href="#" className="footer-social" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" className="footer-social" aria-label="YouTube">
                <svg viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="footer-col-title">{f.propertiesCol}</h4>
            <ul className="footer-links">
              <li><a href="#">Browse all villas</a></li>
              <li><a href="#">Hotels &amp; resorts</a></li>
              <li><a href="#">Event venues</a></li>
              <li><a href="#">Monthly rentals</a></li>
              <li><a href="#">New listings</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-col-title">{f.ownersCol}</h4>
            <ul className="footer-links">
              <li><a href="#">List your property</a></li>
              <li><a href="#">Owner portal</a></li>
              <li><a href="#">Revenue calculator</a></li>
              <li><a href="#">Our process</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-col-title">{f.companyCol}</h4>
            <ul className="footer-links">
              <li><a href="#">About Lefanna</a></li>
              <li><a href="#">Our team</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-col-title">{f.reservations}</h4>
            <div className="footer-contact">
              <div className="footer-contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <a href="mailto:intouch@lefanna.com" target="_blank" rel="noopener noreferrer">intouch@lefanna.com</a>
              </div>
              <div className="footer-contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.15a16 16 0 006.29 6.29l1.42-1.42a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 15.16v.77z"/></svg>
                <a href="https://wa.me/6282162318890" target="_blank" rel="noopener noreferrer">+62 821 6231 8890</a>
              </div>
              <div className="footer-contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                Jl. Petitenget No. 9, Seminyak, Bali 80361
              </div>
              <div className="footer-contact-item" style={{ marginTop: ".75rem", color: "rgba(244,236,224,.3)" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                {f.hours}
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-copy">© 2026 Lefanna Property Management · All Rights Reserved</span>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms &amp; Conditions</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
