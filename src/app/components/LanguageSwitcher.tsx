"use client";
import { useState, useRef, useEffect } from "react";
import { useLang } from "../context/LanguageContext";
import type { Lang } from "../i18n/translations";

const LANGS: { code: Lang; label: string; short: string }[] = [
  { code: "en", label: "English",   short: "EN" },
  { code: "id", label: "Indonesia", short: "ID" },
  { code: "zh", label: "中文",      short: "中文" },
];

function GlobeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  );
}

export default function LanguageSwitcher() {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const current = LANGS.find((l) => l.code === lang)!;

  return (
    <div className="lang-switcher" ref={ref}>
      <button className="lang-btn" onClick={() => setOpen((o) => !o)} aria-label="Select language">
        <GlobeIcon />
        <span className="lang-code">{current.short}</span>
        <svg className={`lang-chevron${open ? " open" : ""}`} width="9" height="9" viewBox="0 0 9 9" fill="none">
          <path d="M1.5 3L4.5 6L7.5 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </button>

      {open && (
        <div className="lang-dropdown">
          {LANGS.map((l) => (
            <button
              key={l.code}
              className={`lang-option${l.code === lang ? " active" : ""}`}
              onClick={() => { setLang(l.code); setOpen(false); }}
            >
              <span className="lang-option-short">{l.short}</span>
              <span className="lang-option-label">{l.label}</span>
              {l.code === lang && (
                <svg className="lang-check" width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
