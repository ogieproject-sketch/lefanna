"use client";
import { useLang } from "../context/LanguageContext";

const mosaicImgs = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=90&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=600&q=90&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=600&q=90&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1000&q=90&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=90&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600&q=90&auto=format&fit=crop",
];
const mosaicCls = ["tall", "", "", "wide", "", ""];

const eventCardData = [
  { name: "Villa Selasih", img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=700&q=90&auto=format&fit=crop", delay: "1" },
  { name: "Uma Lestari",   img: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=700&q=90&auto=format&fit=crop", delay: "2" },
  { name: "Karang Putih",  img: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=700&q=90&auto=format&fit=crop", delay: "3" },
];

export default function Celebrate() {
  const { t } = useLang();
  const c = t.celebrate;
  return (
    <section className="celebrate" id="events">
      <div className="container">
        <div className="celebrate-header" data-reveal="">
          <div>
            <p className="eyebrow" style={{ color: "var(--sandstone)" }}>{c.eyebrow}</p>
            <h2 className="celebrate-title">{c.title} <em>{c.titleEm}</em></h2>
          </div>
          <p className="celebrate-sub">{c.subtitle}</p>
        </div>

        <div className="celebrate-mosaic">
          {c.mosaic.map((label, i) => (
            <div key={i} className={`mosaic-item ${mosaicCls[i]}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={mosaicImgs[i]} alt={label} />
              <span className="mosaic-label">{label}</span>
            </div>
          ))}
        </div>

        <div className="event-cards">
          {eventCardData.map((card, i) => (
            <div key={card.name} className="event-card" data-reveal="" data-delay={card.delay}>
              <div className="event-card-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={card.img} alt={card.name} />
              </div>
              <div className="event-card-body">
                <div className="event-card-tag">{c.eventTags[i]}</div>
                <h3 className="event-card-name">{card.name}</h3>
                <p className="event-card-meta">{c.eventDescs[i]}</p>
                <div className="event-card-footer">
                  <span className="event-card-cap">{c.caps[i]}</span>
                  <a href="#" className="event-card-cta">{c.viewDetails}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
