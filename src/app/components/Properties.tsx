"use client";
import { useState } from "react";
import { useLang } from "../context/LanguageContext";

const propData = [
  { filterIdx: 1, loc: "Seminyak, Bali", name: "Villa Selasih",  meta: ["🛏 4 Bedrooms","👤 8 Guests","🏊 Private Pool"], price: "$680", rating: "4.9 (128 reviews)", img: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=90&auto=format&fit=crop", badgeKey: "featured" as const, delay: "1" },
  { filterIdx: 2, loc: "Ubud, Bali",     name: "Tirta Wangi",    meta: ["🛏 12 Suites","🌿 Rice Field View","🧖 Spa"],         price: "$320", rating: "4.8 (96 reviews)",  img: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=90&auto=format&fit=crop", badgeKey: null,               delay: "2" },
  { filterIdx: 3, loc: "Nusa Dua, Bali", name: "Karang Putih",   meta: ["🛏 36 Rooms","🏖 Beach Club","🏊 3 Pools"],          price: "$540", rating: "4.9 (214 reviews)", img: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=90&auto=format&fit=crop", badgeKey: "newBadge" as const, delay: "3" },
  { filterIdx: 1, loc: "Uluwatu, Bali",  name: "Uma Lestari",    meta: ["🛏 5 Bedrooms","🌊 Ocean View","🏊 Clifftop Pool"],  price: "$720", rating: "5.0 (87 reviews)",  img: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800&q=90&auto=format&fit=crop", badgeKey: null,               delay: "1" },
  { filterIdx: 1, loc: "Canggu, Bali",   name: "Dewi Sari",      meta: ["🛏 3 Bedrooms","🏄 Surf View","🏊 Private Pool"],    price: "$480", rating: "4.8 (74 reviews)",  img: "https://images.unsplash.com/photo-1540202404-a2f29016b523?w=800&q=90&auto=format&fit=crop", badgeKey: null,               delay: "2" },
  { filterIdx: 2, loc: "Gianyar, Bali",  name: "Puri Gianyar",   meta: ["🛏 8 Rooms","🌿 Jungle Garden","🧘 Yoga"],           price: "$290", rating: "4.9 (112 reviews)", img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=90&auto=format&fit=crop", badgeKey: "popular" as const,  delay: "3" },
];

export default function Properties() {
  const { t } = useLang();
  const p = t.properties;
  const [activeIdx, setActiveIdx] = useState(0);

  const visible = activeIdx === 0 ? propData : propData.filter((x) => x.filterIdx === activeIdx);

  return (
    <section className="properties-section" id="properties">
      <div className="container">
        <div className="prop-header">
          <div data-reveal="">
            <p className="eyebrow">{p.eyebrow}</p>
            <h2 className="prop-title">{p.title} <em>{p.titleEm}</em></h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "flex-end" }}>
            <div className="prop-filters" data-reveal="">
              {p.filters.map((f, i) => (
                <button
                  key={i}
                  className={`prop-filter${activeIdx === i ? " active" : ""}`}
                  onClick={() => setActiveIdx(i)}
                >
                  {f}
                </button>
              ))}
            </div>
            <a href="#" className="prop-view-all" data-reveal="">{p.viewAll}</a>
          </div>
        </div>

        <div className="prop-grid">
          {visible.map((prop) => (
            <div key={prop.name} className="prop-card" data-reveal="" data-delay={prop.delay}>
              <div className="prop-card-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={prop.img} alt={prop.name} />
                <span className="prop-card-tag">{p.filters[prop.filterIdx]}</span>
                {prop.badgeKey && <span className="prop-card-badge">{p[prop.badgeKey]}</span>}
              </div>
              <div className="prop-card-body">
                <div className="prop-card-loc">{prop.loc}</div>
                <h3 className="prop-card-name">{prop.name}</h3>
                <div className="prop-card-meta">
                  {prop.meta.map((m) => <span key={m}>{m}</span>)}
                </div>
                <div className="prop-card-footer">
                  <div className="prop-card-price">{prop.price} <small>{p.night}</small></div>
                  <div className="prop-card-rating"><span className="star">★</span> {prop.rating}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
