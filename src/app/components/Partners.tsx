"use client";
import { useLang } from "../context/LanguageContext";

const partners = ["Airbnb", "Booking.com", "Marriott Bonvoy", "Singapore Airlines", "Travel + Leisure", "Condé Nast"];

export default function Partners() {
  const { t } = useLang();
  return (
    <div className="partners">
      <div className="container">
        <p className="partners-label">{t.partners.label}</p>
        <div className="partners-logos">
          {partners.map((p) => (
            <span key={p} className="partner">{p}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
