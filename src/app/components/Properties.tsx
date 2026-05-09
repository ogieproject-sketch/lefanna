"use client";
import { useState } from "react";

type FilterType = "All" | "Villas" | "Hotels" | "Resorts";

const properties = [
  {
    type: "Villa",
    filter: "Villas",
    tag: "Villa",
    badge: "★ Featured",
    loc: "Seminyak, Bali",
    name: "Villa Selasih",
    meta: ["🛏 4 Bedrooms", "👤 8 Guests", "🏊 Private Pool"],
    price: "$680",
    rating: "4.9 (128 reviews)",
    img: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=90&auto=format&fit=crop",
    delay: "1",
  },
  {
    type: "Boutique Hotel",
    filter: "Hotels",
    tag: "Boutique Hotel",
    badge: null,
    loc: "Ubud, Bali",
    name: "Tirta Wangi",
    meta: ["🛏 12 Suites", "🌿 Rice Field View", "🧖 Spa"],
    price: "$320",
    rating: "4.8 (96 reviews)",
    img: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=90&auto=format&fit=crop",
    delay: "2",
  },
  {
    type: "Resort",
    filter: "Resorts",
    tag: "Resort",
    badge: "🆕 New",
    loc: "Nusa Dua, Bali",
    name: "Karang Putih",
    meta: ["🛏 36 Rooms", "🏖 Beach Club", "🏊 3 Pools"],
    price: "$540",
    rating: "4.9 (214 reviews)",
    img: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=90&auto=format&fit=crop",
    delay: "3",
  },
  {
    type: "Villa",
    filter: "Villas",
    tag: "Villa",
    badge: null,
    loc: "Uluwatu, Bali",
    name: "Uma Lestari",
    meta: ["🛏 5 Bedrooms", "🌊 Ocean View", "🏊 Clifftop Pool"],
    price: "$720",
    rating: "5.0 (87 reviews)",
    img: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800&q=90&auto=format&fit=crop",
    delay: "1",
  },
  {
    type: "Villa",
    filter: "Villas",
    tag: "Villa",
    badge: null,
    loc: "Canggu, Bali",
    name: "Dewi Sari",
    meta: ["🛏 3 Bedrooms", "🏄 Surf View", "🏊 Private Pool"],
    price: "$480",
    rating: "4.8 (74 reviews)",
    img: "https://images.unsplash.com/photo-1540202404-a2f29016b523?w=800&q=90&auto=format&fit=crop",
    delay: "2",
  },
  {
    type: "Boutique Hotel",
    filter: "Hotels",
    tag: "Boutique Hotel",
    badge: "🔥 Popular",
    loc: "Gianyar, Bali",
    name: "Puri Gianyar",
    meta: ["🛏 8 Rooms", "🌿 Jungle Garden", "🧘 Yoga"],
    price: "$290",
    rating: "4.9 (112 reviews)",
    img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=90&auto=format&fit=crop",
    delay: "3",
  },
];

const filters: FilterType[] = ["All", "Villas", "Hotels", "Resorts"];

export default function Properties() {
  const [active, setActive] = useState<FilterType>("All");

  const visible = active === "All" ? properties : properties.filter((p) => p.filter === active);

  return (
    <section className="properties-section" id="properties">
      <div className="container">
        <div className="prop-header">
          <div data-reveal="">
            <p className="eyebrow">Featured portfolio</p>
            <h2 className="prop-title">Properties we <em>tend to.</em></h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "flex-end" }}>
            <div className="prop-filters" data-reveal="">
              {filters.map((f) => (
                <button
                  key={f}
                  className={`prop-filter${active === f ? " active" : ""}`}
                  onClick={() => setActive(f)}
                >
                  {f}
                </button>
              ))}
            </div>
            <a href="#" className="prop-view-all" data-reveal="">View all 47 properties</a>
          </div>
        </div>

        <div className="prop-grid">
          {visible.map((prop) => (
            <div key={prop.name} className="prop-card" data-reveal="" data-delay={prop.delay}>
              <div className="prop-card-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={prop.img} alt={prop.name} />
                <span className="prop-card-tag">{prop.tag}</span>
                {prop.badge && <span className="prop-card-badge">{prop.badge}</span>}
              </div>
              <div className="prop-card-body">
                <div className="prop-card-loc">{prop.loc}</div>
                <h3 className="prop-card-name">{prop.name}</h3>
                <div className="prop-card-meta">
                  {prop.meta.map((m) => <span key={m}>{m}</span>)}
                </div>
                <div className="prop-card-footer">
                  <div className="prop-card-price">
                    {prop.price} <small>/ night</small>
                  </div>
                  <div className="prop-card-rating">
                    <span className="star">★</span> {prop.rating}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
