"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "#capabilities", label: "Mogućnosti" },
  { href: "#process", label: "Proces" },
  { href: "#work", label: "Radovi" },
  { href: "#faq", label: "Pitanja" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen
          ? "border-b border-white/10 bg-ink/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-12">
        <a href="#top" className="flex items-center gap-2.5" onClick={() => setMenuOpen(false)}>
          <Image
            src="/brand/logo.jpg"
            alt="Lamb Solutions"
            width={32}
            height={32}
            priority
            className="h-8 w-8 rounded-full"
          />
          <span className="text-[15px] font-medium tracking-tight text-paper">
            Lamb Solutions
          </span>
        </a>

        <div className="hidden items-center gap-10 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] uppercase tracking-[0.12em] text-muted transition-colors hover:text-paper"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-paper px-4 py-2 text-[12.5px] font-medium text-ink transition-all hover:border-bronze hover:bg-bronze sm:px-5 sm:py-2.5 sm:text-[13px]"
          >
            Zakažite poziv
          </a>

          <button
            type="button"
            aria-label={menuOpen ? "Zatvorite meni" : "Otvorite meni"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-paper md:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 top-0 h-px w-4 bg-paper transition-transform duration-300 ${menuOpen ? "translate-y-[6px] rotate-45" : ""}`}
              />
              <span
                className={`absolute left-0 bottom-0 h-px w-4 bg-paper transition-transform duration-300 ${menuOpen ? "-translate-y-[6px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-white/10 md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-6">
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-3 text-[15px] text-paper/85 transition-colors hover:text-bronze"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
