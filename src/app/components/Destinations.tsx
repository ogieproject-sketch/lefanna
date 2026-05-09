const destinations = [
  { name: "Seminyak", count: "12 properties", img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=500&q=90&auto=format&fit=crop", delay: "1" },
  { name: "Ubud", count: "9 properties", img: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=500&q=90&auto=format&fit=crop", delay: "2" },
  { name: "Canggu", count: "11 properties", img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&q=90&auto=format&fit=crop", delay: "3" },
  { name: "Uluwatu", count: "8 properties", img: "https://images.unsplash.com/photo-1565967511849-76a60a516170?w=500&q=90&auto=format&fit=crop", delay: "4" },
  { name: "Jimbaran", count: "7 properties", img: "https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?w=500&q=90&auto=format&fit=crop", delay: "5" },
];

export default function Destinations() {
  return (
    <section className="destinations" id="destinations">
      <div className="container">
        <div className="dest-header" data-reveal="">
          <p className="eyebrow">Explore by location</p>
          <h2 className="dest-title">Our <em>destinations</em> across Bali</h2>
        </div>
        <div className="dest-grid">
          {destinations.map((dest) => (
            <div key={dest.name} className="dest-card" data-reveal="" data-delay={dest.delay}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={dest.img} alt={dest.name} />
              <div className="dest-overlay" />
              <div className="dest-content">
                <h3 className="dest-name">{dest.name}</h3>
                <p className="dest-count">{dest.count}</p>
                <span className="dest-btn">Discover →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
