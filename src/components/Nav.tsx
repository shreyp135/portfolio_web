"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [docked, setDocked] = useState(false);

  useEffect(() => {
    const onScroll = () => setDocked(window.scrollY > 72);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Mobile: always a simple top bar */}
      <header className="fixed inset-x-0 top-0 z-50 md:hidden">
        <div className="border-b border-line bg-cream/90 backdrop-blur-md">
          <nav className="flex items-center justify-between px-6 py-4">
            <a href="#top" className="font-serif text-lg font-semibold tracking-tight text-ink">
              Shreyansh
            </a>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 flex-col items-center justify-center gap-[5px]"
            >
              <span className={`h-[1.5px] w-6 bg-ink transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
              <span className={`h-[1.5px] w-6 bg-ink transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
            </button>
          </nav>
        </div>
        {open && (
          <div className="border-b border-line bg-cream">
            <ul className="flex flex-col px-6 py-2 font-sans text-base font-semibold text-ink">
              {LINKS.map((l) => (
                <li key={l.href} className="border-b border-line-soft py-3 last:border-none">
                  <a href={l.href} onClick={() => setOpen(false)}>
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="py-3">
                <a href="#contact" className="arrow-btn" onClick={() => setOpen(false)}>
                  Contact me <span aria-hidden>→</span>
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* Desktop: horizontal bar at load, docks into a slim vertical rail on
          scroll. The docked rail is intentionally narrow (--rail-dock-w) so
          it never bleeds over the page's main content column. */}
      <header
        className={`fixed z-50 hidden transition-all duration-500 ease-[var(--ease-out-quart)] md:block ${
          docked
            ? "inset-y-0 left-0 w-[var(--rail-dock-w)] border-r border-line bg-rail"
            : "inset-x-0 top-0 border-b border-line/50 bg-gradient-to-b from-cream/95 via-cream/80 to-cream/45 backdrop-blur-xl"
        }`}
      >
        {docked ? (
          <nav className="flex h-full flex-col items-center justify-between py-8">
            <a
              href="#top"
              className="[writing-mode:vertical-rl] rotate-180 font-serif text-sm font-semibold tracking-tight text-cream hover:opacity-80"
            >
              Shreyansh Paliwal
            </a>

            <ul className="flex flex-col items-center gap-8 font-sans text-xs font-bold uppercase tracking-[0.16em] text-cream/80">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="[writing-mode:vertical-rl] rotate-180 hover:opacity-60"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              aria-label="Contact me"
              title="Contact me"
              className="flex h-10 w-10 items-center justify-center border border-cream/40 text-cream transition-colors hover:bg-cream hover:text-ink"
            >
              <span aria-hidden className="text-base">→</span>
            </a>
          </nav>
        ) : (
          <nav className="flex items-center justify-between px-10 py-5">
            <a href="#top" className="font-serif text-xl font-semibold tracking-tight text-ink">
              Shreyansh Paliwal
            </a>

            <ul className="flex items-center gap-9 font-sans text-[15px] font-semibold text-ink">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:opacity-60">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            <a href="#contact" className="arrow-btn">
              Contact me
              <span aria-hidden className="arrow-glyph">→</span>
            </a>
          </nav>
        )}
      </header>
    </>
  );
}
