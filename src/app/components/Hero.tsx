"use client";
import { useEffect, useState } from "react";

const slides = [
  { src: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf4?w=1920&q=90&auto=format&fit=crop", alt: "Bali villa aerial" },
  { src: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1920&q=90&auto=format&fit=crop", alt: "Villa pool" },
  { src: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1920&q=90&auto=format&fit=crop", alt: "Luxury hotel" },
  { src: "https://images.unsplash.com/photo-1540541338537-1220020e4c92?w=1920&q=90&auto=format&fit=crop", alt: "Bali resort" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

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
        <p className="hero-eyebrow">Bali&apos;s finest property management</p>
        <h1 className="hero-title">
          <span className="line">Villas that make</span>
          <span className="line">you feel</span>
          <span className="line">at home.</span>
        </h1>

        <div className="search-box">
          <div className="search-field">
            <span className="search-field-label">Find a property</span>
            <input type="text" className="search-field-input" placeholder="Villa name or keyword..." />
          </div>
          <div className="search-divider" />
          <div className="search-field">
            <span className="search-field-label">Destination</span>
            <select className="search-field-input">
              <option value="">All locations</option>
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
          <div className="search-field">
            <span className="search-field-label">Check-in — Check-out</span>
            <input type="text" className="search-field-input" placeholder="Select dates" readOnly />
          </div>
          <div className="search-divider" />
          <div className="search-field" style={{ flex: "0 0 auto" }}>
            <span className="search-field-label">Guests</span>
            <select className="search-field-input" style={{ minWidth: 80 }}>
              <option>2</option><option>3</option><option>4</option>
              <option>5</option><option>6</option><option>8+</option>
            </select>
          </div>
          <button className="search-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
            </svg>
            Search
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
