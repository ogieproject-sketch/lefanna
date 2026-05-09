const partners = ["Airbnb", "Booking.com", "Marriott Bonvoy", "Singapore Airlines", "Travel + Leisure", "Condé Nast"];

export default function Partners() {
  return (
    <div className="partners">
      <div className="container">
        <p className="partners-label">Trusted partners &amp; media features</p>
        <div className="partners-logos">
          {partners.map((p) => (
            <span key={p} className="partner">{p}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
