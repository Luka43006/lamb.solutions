"use client";

import { Reveal, RevealGroup, revealItem } from "./Reveal";
import { motion } from "framer-motion";

function IconRetype() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="3.5" y="4" width="7" height="7" rx="1.4" stroke="currentColor" strokeWidth="1.4" />
      <rect x="13.5" y="13" width="7" height="7" rx="1.4" stroke="currentColor" strokeWidth="1.4" />
      <path d="M10.5 7.5 H15 a2 2 0 0 1 2 2 V13" stroke="currentColor" strokeWidth="1.4" fill="none" />
      <path d="M15 7.5 L17 5.5 M15 7.5 L17 9.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function IconClock() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M12 7.5 V12 L15.2 14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconStack() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M12 4 L21 8.5 L12 13 L3 8.5 Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M3 14 L12 18.5 L21 14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconWarning() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M12 3.5 L21 19.5 H3 Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M12 10 V14.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="12" cy="17" r="0.9" fill="currentColor" />
    </svg>
  );
}

const PAIN_POINTS = [
  {
    icon: IconRetype,
    title: "Ručno prekucavanje istih podataka",
    detail: "Isti brojevi, po treći put uneti u drugi sistem — ovog puta ručno.",
  },
  {
    icon: IconClock,
    title: "Zakasneli odgovori klijentima",
    detail: "Dok neko stigne da odgovori, klijent je već pitao negde drugde.",
  },
  {
    icon: IconStack,
    title: "Izveštaji koji jedu ceo dan",
    detail: "Kopiranje iz tabele u tabelu, svake nedelje iznova.",
  },
  {
    icon: IconWarning,
    title: "Greške koje se primete prekasno",
    detail: "Kad se otkriju, već su koštale vremena ili poverenja klijenta.",
  },
];

export function Problem() {
  return (
    <section className="border-t border-white/8 bg-ink-soft/40">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-32">
        <Reveal>
          <p className="text-[12px] uppercase tracking-[0.2em] text-bronze">
            ( Problem )
          </p>
          <h2 className="mt-5 max-w-2xl text-balance text-[34px] font-medium leading-[1.1] tracking-[-0.02em] text-paper md:text-[44px]">
            To zvuči poznato.{" "}
            <span className="font-serif-italic font-normal">
              Vreme je da se promeni.
            </span>
          </h2>
        </Reveal>

        <RevealGroup
          className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2"
          stagger={0.1}
        >
          {PAIN_POINTS.map((point) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.title}
                variants={revealItem}
                className="rounded-2xl border border-white/8 bg-white/[0.02] p-7"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-bronze">
                  <Icon />
                </div>
                <h3 className="mt-6 text-[17px] font-medium text-paper">
                  {point.title}
                </h3>
                <p className="mt-2 max-w-sm text-[14px] leading-relaxed text-muted">
                  {point.detail}
                </p>
              </motion.div>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
