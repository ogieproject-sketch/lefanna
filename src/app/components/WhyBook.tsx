const cards = [
  {
    num: "01",
    title: "Best Price Guaranteed",
    desc: "Book directly with Lefanna and get the best available rates — no hidden fees, no markups. Our direct channel always beats third-party platforms.",
    img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=90&auto=format&fit=crop",
    delay: "1",
  },
  {
    num: "02",
    title: "Complimentary Transfer",
    desc: "Begin your Bali escape in complete comfort. Every booking includes a private airport pickup — your driver will be waiting with a cold towel and a warm welcome.",
    img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=90&auto=format&fit=crop",
    delay: "2",
  },
  {
    num: "03",
    title: "Complimentary Breakfast",
    desc: "Start each morning right. A fresh, customised breakfast — Indonesian, American, or sweet indulgence — is included with every night's stay at all Lefanna properties.",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=90&auto=format&fit=crop",
    delay: "3",
  },
];

export default function WhyBook() {
  return (
    <section className="why-book" id="about">
      <div className="container">
        <div className="why-header" data-reveal="">
          <p className="eyebrow" style={{ justifyContent: "center" }}>Why choose Lefanna</p>
          <h2 className="why-title">Everything your stay <em>deserves.</em></h2>
        </div>
        <div className="why-grid">
          {cards.map((card) => (
            <div key={card.num} className="why-card" data-reveal="" data-delay={card.delay}>
              <div className="why-card-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={card.img} alt={card.title} />
              </div>
              <div className="why-card-overlay" />
              <div className="why-card-body">
                <div className="why-card-num">{card.num}</div>
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
