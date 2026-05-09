"use client";
import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav id="nav" className={scrolled ? "scrolled" : ""}>
      <a href="#" className="nav-logo">
        lefanna<span>.</span>
      </a>
      <ul className="nav-center">
        <li><a href="#properties">Properties</a></li>
        <li><a href="#destinations">Destinations</a></li>
        <li><a href="#events">Events</a></li>
        <li><a href="#about">About</a></li>
      </ul>
      <div className="nav-right">
        <a href="#" className="nav-btn nav-btn-ghost">Management Enquiry</a>
        <a href="#contact" className="nav-btn nav-btn-primary">Enquire Now</a>
      </div>
    </nav>
  );
}
