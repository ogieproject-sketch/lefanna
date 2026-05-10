"use client";
import { useEffect, useState } from "react";
import { useLang } from "../context/LanguageContext";

const slides = [
  { src: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1920&q=90&auto=format&fit=crop", alt: "Bali villa aerial" },
  { src: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1920&q=90&auto=format&fit=crop", alt: "Villa pool" },
  { src: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1920&q=90&auto=format&fit=crop", alt: "Luxury hotel" },
  { src: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1920&q=90&auto=format&fit=crop", alt: "Bali resort" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const { t } = useLang();
  const h = t.hero;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero">
      <div className="hero-slides">
        {slides.map((slide, i) => (
          <div key={i} className={`hero-slide${i === current ? " active" : ""}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={slide.src} alt={slide.alt} />
          </div>
        ))}
      </div>
      <div className="hero-overlay" />

      <div className="hero-stats">
        <div className="hero-stat-line" />
        <div className="hero-stat">
          <div className="hero-stat-num">47</div>
          <div className="hero-stat-label">Properties managed</div>
        </div>
        <div className="hero-stat-line" />
        <div className="hero-stat">
          <div className="hero-stat-num">98%</div>
          <div className="hero-stat-label">Guest satisfaction</div>
        </div>
        <div className="hero-stat-line" />
        <div className="hero-stat">
          <div className="hero-stat-num">4.9★</div>
          <div className="hero-stat-label">Average rating</div>
        </div>
      </div>

      <div className="hero-content container">
        <p className="hero-eyebrow">{h.eyebrow}</p>
        <h1 className="hero-title">
          {h.title.map((line, i) => (
            <span key={i} className="line">{line}</span>
          ))}
        </h1>

        <div className="search-box">
          <div className="search-field">
            <span className="search-field-label">{h.findProperty}</span>
            <input type="text" className="search-field-input" placeholder={h.findPlaceholder} />
          </div>
          <div className="search-divider" />
          <div className="search-field">
            <span className="search-field-label">{h.destination}</span>
            <select className="search-field-input">
              <option value="">{h.allLocations}</option>
              <option>Seminyak</option>
              <option>Canggu</option>
              <option>Ubud</option>
              <option>Uluwatu</option>
              <option>Nusa Dua</option>
              <option>Jimbaran</option>
              <option>Sanur</option>
            </select>
          </div>
          <div className="search-divider" />
          <div className="search-field search-field-dates">
            <div className="search-date-group">
              <div className="search-date-col">
                <span className="search-field-label">{h.checkinLabel}</span>
                <input type="date" className="search-field-input search-date-input" placeholder={h.checkinPlaceholder} />
              </div>
              <div className="search-date-sep">→</div>
              <div className="search-date-col">
                <span className="search-field-label">{h.checkoutLabel}</span>
                <input type="date" className="search-field-input search-date-input" placeholder={h.checkoutPlaceholder} />
              </div>
            </div>
          </div>
          <div className="search-divider" />
          <div className="search-field" style={{ flex: "0 0 auto" }}>
            <span className="search-field-label">{h.guests}</span>
            <select className="search-field-input" style={{ minWidth: 80 }}>
              <option>2</option><option>3</option><option>4</option>
              <option>5</option><option>6</option><option>8+</option>
            </select>
          </div>
          <button className="search-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
            </svg>
            {h.search}
          </button>
        </div>
      </div>

      <div className="hero-dots">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`hero-dot${i === current ? " active" : ""}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </section>
  );
}
