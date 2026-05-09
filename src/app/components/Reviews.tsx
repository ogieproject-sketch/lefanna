const reviews = [
  { villa: "Villa Selasih", img: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=500&q=90&auto=format&fit=crop", text: '"Absolutely stunning. The villa is beyond beautiful — spacious, impeccably clean, and the staff anticipate your needs before you even ask. We\'ll be back every year."', name: "James Hartley", country: "🇦🇺 Australia" },
  { villa: "Tirta Wangi", img: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=500&q=90&auto=format&fit=crop", text: '"We\'ve stayed in many boutique hotels in Ubud — none compare. The rice field view at sunrise from the infinity pool is something we\'ll never forget."', name: "Sarah Chen", country: "🇸🇬 Singapore" },
  { villa: "Puri Gianyar", img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&q=90&auto=format&fit=crop", text: '"The breakfast alone was worth the trip — freshly made, generous, and served on the garden terrace. The whole experience felt like being a guest at a friend\'s beautiful home."', name: "Myriam Nekissa", country: "🇫🇷 France" },
  { villa: "Karang Putih", img: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=500&q=90&auto=format&fit=crop", text: '"We hosted our family reunion here — 22 people, 5 nights. The team handled every detail seamlessly. The kids didn\'t want to leave the pool and neither did the adults."', name: "Lindsey Morgan", country: "🇺🇸 USA" },
  { villa: "Uma Lestari", img: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=500&q=90&auto=format&fit=crop", text: '"We chose Uma Lestari for our honeymoon and it exceeded every expectation. The cliff views, the silence, the personal service — pure magic. Our favourite place on earth."', name: "Emma & Tom Davies", country: "🇬🇧 UK" },
  { villa: "Dewi Sari", img: "https://images.unsplash.com/photo-1540541338537-1220020e4c92?w=500&q=90&auto=format&fit=crop", text: '"Right in the heart of Canggu, steps from Echo Beach. Three bedrooms, a beautiful pool, and a team that was responsive 24/7. The complimentary airport transfer was a lovely touch."', name: "Ruud van Harskamp", country: "🇳🇱 Netherlands" },
];

export default function Reviews() {
  const doubled = [...reviews, ...reviews];
  return (
    <section className="reviews">
      <div className="container">
        <div className="reviews-header" data-reveal="">
          <p className="eyebrow">Guest stories</p>
          <h2 className="reviews-title">What our guests <em>say.</em></h2>
        </div>
      </div>
      <div className="reviews-track-wrap" style={{ marginTop: "3rem" }}>
        <div className="reviews-track">
          {doubled.map((r, i) => (
            <div key={i} className="review-card">
              <div className="review-card-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={r.img} alt={r.villa} />
              </div>
              <div className="review-card-body">
                <div className="review-stars">
                  {[...Array(5)].map((_, s) => <span key={s}>★</span>)}
                </div>
                <div className="review-villa">{r.villa}</div>
                <p className="review-text">{r.text}</p>
                <div className="review-author">
                  <div className="review-name">{r.name}</div>
                  <span className="review-country">{r.country}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
