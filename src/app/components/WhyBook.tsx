"use client";
import { useLang } from "../context/LanguageContext";

const imgs = [
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=90&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=90&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=90&auto=format&fit=crop",
];
const nums = ["01", "02", "03"];

export default function WhyBook() {
  const { t } = useLang();
  const w = t.whyBook;
  return (
    <section className="why-book" id="about">
      <div className="container">
        <div className="why-header" data-reveal="">
          <p className="eyebrow" style={{ justifyContent: "center" }}>{w.eyebrow}</p>
          <h2 className="why-title">{w.title} <em>{w.titleEm}</em></h2>
        </div>
        <div className="why-grid">
          {w.cards.map((card, i) => (
            <div key={i} className="why-card" data-reveal="" data-delay={String(i + 1)}>
              <div className="why-card-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={imgs[i]} alt={card.title} />
              </div>
              <div className="why-card-overlay" />
              <div className="why-card-body">
                <div className="why-card-num">{nums[i]}</div>
                <h3 className="why-card-title">{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
