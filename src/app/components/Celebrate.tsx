const mosaicItems = [
  { label: "Weddings", img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=90&auto=format&fit=crop", cls: "tall" },
  { label: "Pool parties", img: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=600&q=90&auto=format&fit=crop", cls: "" },
  { label: "Private dining", img: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=600&q=90&auto=format&fit=crop", cls: "" },
  { label: "Corporate retreats", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1000&q=90&auto=format&fit=crop", cls: "wide" },
  { label: "Family reunions", img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=90&auto=format&fit=crop", cls: "" },
  { label: "Honeymoons", img: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600&q=90&auto=format&fit=crop", cls: "" },
];

const eventCards = [
  {
    tag: "Seminyak · Wedding venue",
    name: "Villa Selasih",
    desc: "Lush garden terrace with a 25m pool and open-air pavilion. The perfect canvas for a tropical Bali wedding.",
    cap: "Up to 80 pax",
    img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=700&q=90&auto=format&fit=crop",
    delay: "1",
  },
  {
    tag: "Uluwatu · Clifftop venue",
    name: "Uma Lestari",
    desc: "Perched 80 metres above the Indian Ocean, Uma Lestari delivers a ceremony backdrop unlike anywhere else on earth.",
    cap: "Up to 50 pax",
    img: "https://images.unsplash.com/photo-1520166012956-add9ba4835b0?w=700&q=90&auto=format&fit=crop",
    delay: "2",
  },
  {
    tag: "Nusa Dua · Resort event",
    name: "Karang Putih",
    desc: "Expansive beachfront with multiple event spaces, a dedicated wedding planner, and full F&B capabilities for large groups.",
    cap: "Up to 250 pax",
    img: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=700&q=90&auto=format&fit=crop",
    delay: "3",
  },
];

export default function Celebrate() {
  return (
    <section className="celebrate" id="events">
      <div className="container">
        <div className="celebrate-header" data-reveal="">
          <div>
            <p className="eyebrow" style={{ color: "var(--sandstone)" }}>Events &amp; celebrations</p>
            <h2 className="celebrate-title">Celebrate <em>with us</em></h2>
          </div>
          <p className="celebrate-sub">
            From intimate weddings to family reunions and corporate retreats — our properties set the scene for moments that last a lifetime.
          </p>
        </div>

        <div className="celebrate-mosaic">
          {mosaicItems.map((item) => (
            <div key={item.label} className={`mosaic-item ${item.cls}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.img} alt={item.label} />
              <span className="mosaic-label">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="event-cards">
          {eventCards.map((card) => (
            <div key={card.name} className="event-card" data-reveal="" data-delay={card.delay}>
              <div className="event-card-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={card.img} alt={card.name} />
              </div>
              <div className="event-card-body">
                <div className="event-card-tag">{card.tag}</div>
                <h3 className="event-card-name">{card.name}</h3>
                <p className="event-card-meta">{card.desc}</p>
                <div className="event-card-footer">
                  <span className="event-card-cap">{card.cap}</span>
                  <a href="#" className="event-card-cta">View Details →</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
