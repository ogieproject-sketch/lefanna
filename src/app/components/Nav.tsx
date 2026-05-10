"use client";
import { useEffect, useState } from "react";
import { useLang } from "../context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLang();

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
        <li><a href="#">{t.nav.home}</a></li>
        <li><a href="#properties">{t.nav.properties}</a></li>
        <li><a href="#destinations">{t.nav.destinations}</a></li>
        <li><a href="#events">{t.nav.events}</a></li>
        <li><a href="#about">{t.nav.about}</a></li>
        <li><a href="#contact">{t.nav.contact}</a></li>
      </ul>
      <div className="nav-right">
        <LanguageSwitcher />
        <a href="#contact" className="nav-btn nav-btn-ghost">{t.nav.mgmt}</a>
        <a href="https://wa.me/6282162318890" target="_blank" rel="noopener noreferrer" className="nav-btn nav-btn-primary">{t.nav.enquire}</a>
      </div>
    </nav>
  );
}
