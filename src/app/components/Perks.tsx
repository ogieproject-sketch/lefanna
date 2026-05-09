const images = [
  { src: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=90&auto=format&fit=crop", label: "Villa Selasih, Seminyak" },
  { src: "https://images.unsplash.com/photo-1596386461350-326ccb383e9f?w=600&q=90&auto=format&fit=crop", label: "Puri Gianyar, Gianyar" },
  { src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1000&q=90&auto=format&fit=crop", label: "Uma Lestari, Uluwatu" },
];

const perks = [
  "Full operational management — no more landlord stress",
  "Revenue optimisation across Airbnb, Booking.com & direct channels",
  "Transparent monthly reports delivered on the 5th",
  "Dedicated property manager — one person, always reachable",
  "Complimentary photography & listing setup on all platforms",
  "Legal & compliance support for Bali STR regulations",
];

export default function Perks() {
  return (
    <section className="perks" id="contact">
      <div className="container">
        <div className="perks-grid">
          <div data-reveal="left">
            <p className="eyebrow">For property owners</p>
            <h2 className="perks-title">Your property, <em>fully tended.</em></h2>
            <p className="perks-body">
              Whether you own one villa or a growing portfolio — Lefanna brings the same meticulous care to every property we manage.
            </p>
            <ul className="perks-list">
              {perks.map((perk, i) => (
                <li key={i}>{perk}</li>
              ))}
            </ul>
            <a href="#" className="perks-cta">Start a conversation →</a>
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
