"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const solutions = [
  { href: "/secure-t", label: "Secure‑T" },
  { href: "/drweb", label: "Dr.Web" },
  { href: "/web", label: "Веб‑разработка" },
  { href: "/solovey", label: "Соловей" },
  { href: "/electronics", label: "Электроника" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openSolutions, setOpenSolutions] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors ${
        scrolled ? "bg-slate-950/80 backdrop-blur border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded bg-cyan-400/20 ring-1 ring-cyan-300/30 grid place-items-center text-cyan-300 font-bold">
            Г
          </div>
          <span className="text-sm font-semibold tracking-wider text-slate-100">ГУНДЫРЕВ</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
          <div
            className="relative"
            onMouseEnter={() => setOpenSolutions(true)}
            onMouseLeave={() => setOpenSolutions(false)}
          >
            <button
              className="inline-flex items-center gap-1 hover:text-white transition-colors"
              onClick={() => setOpenSolutions((v) => !v)}
            >
              Решения
              <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
            {openSolutions && (
              <div
                className="absolute left-0 top-full pt-2 w-[340px]"
              >
                <div className="rounded-lg ring-1 ring-white/10 bg-slate-950/95 backdrop-blur p-2 shadow-xl">
                {solutions.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block rounded-md px-3 py-2 text-slate-200 hover:bg-white/5"
                    onClick={() => setOpenSolutions(false)}
                  >
                    {s.label}
                  </Link>
                ))}
                </div>
              </div>
            )}
          </div>
          <Link href="/about" className="hover:text-white transition-colors">О компании</Link>
          <Link href="/contacts" className="hover:text-white transition-colors">Контакты</Link>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link href="/#contact-form" className="inline-flex items-center rounded-md bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-medium px-4 py-2 transition-colors">Запросить консультацию</Link>
        </div>

        <button
          aria-label="Меню"
          className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md ring-1 ring-white/15 hover:bg-white/5"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-white">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-950/95 backdrop-blur">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-3">
            <div className="text-slate-400 text-xs">Решения</div>
            {solutions.map((s) => (
              <Link key={s.href} href={s.href} onClick={() => setOpen(false)} className="text-slate-200">
                {s.label}
              </Link>
            ))}
            <hr className="border-white/10 my-2" />
            <Link href="/about" onClick={() => setOpen(false)} className="text-slate-200">О компании</Link>
            <Link href="/contacts" onClick={() => setOpen(false)} className="text-slate-200">Контакты</Link>
            <Link href="/#contact-form" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center rounded-md bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-medium px-4 py-2 transition-colors">Запросить консультацию</Link>
          </div>
        </div>
      )}
    </header>
  );
}
