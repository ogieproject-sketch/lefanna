"use client";
import { useLang } from "../context/LanguageContext";

const images = [
  { src: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=90&auto=format&fit=crop", label: "Villa Selasih, Seminyak" },
  { src: "https://images.unsplash.com/photo-1596386461350-326ccb383e9f?w=600&q=90&auto=format&fit=crop", label: "Puri Gianyar, Gianyar" },
  { src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1000&q=90&auto=format&fit=crop", label: "Uma Lestari, Uluwatu" },
];

export default function Perks() {
  const { t } = useLang();
  const p = t.perks;
  return (
    <section className="perks" id="contact">
      <div className="container">
        <div className="perks-grid">
          <div data-reveal="left">
            <p className="eyebrow">{p.eyebrow}</p>
            <h2 className="perks-title">{p.title} <em>{p.titleEm}</em></h2>
            <p className="perks-body">{p.body}</p>
            <ul className="perks-list">
              {p.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <a href="#" className="perks-cta">{p.cta}</a>
          </div>
          <div className="perks-right" data-reveal="right">
            {images.map((img) => (
              <div key={img.label} className="perk-img-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img.src} alt={img.label} />
                <div className="perk-overlay">
                  <div className="perk-name">{img.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
