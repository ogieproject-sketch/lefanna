const items = ["Seminyak","Ubud","Canggu","Nusa Dua","Uluwatu","Jimbaran","Sanur","Kerobokan"];

export default function Ticker() {
  const doubled = [...items, ...items];
  return (
    <div className="ticker">
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <span key={i} className="ticker-item">
            {item} <span className="ticker-dot">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
