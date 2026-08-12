"use client";

import { Reveal, RevealGroup, revealItem } from "./Reveal";
import { motion } from "framer-motion";

function IconWorkflow() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="5" cy="6" r="2.4" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="19" cy="6" r="2.4" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="12" cy="18" r="2.4" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M7 7.5 L12 15.5 M17 7.5 L12 15.5"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  );
}

function IconAgent() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 3 L13.6 9.2 L20 12 L13.6 14.8 L12 21 L10.4 14.8 L4 12 L10.4 9.2 Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconSoftware() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect
        x="3.5"
        y="5"
        width="17"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path d="M3.5 9.5H20.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M9 14.5 L11 16.5 L9 18.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconIntegration() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="4" width="6" height="6" rx="1.4" stroke="currentColor" strokeWidth="1.4" />
      <rect x="15" y="14" width="6" height="6" rx="1.4" stroke="currentColor" strokeWidth="1.4" />
      <path d="M9 7 H14 a3 3 0 0 1 3 3 V17" stroke="currentColor" strokeWidth="1.4" fill="none" />
    </svg>
  );
}

function IconData() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M4 18 V13 M10 18 V8 M16 18 V11 M22 18 V5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

const FLOW_STEPS = ["Okidač", "Provera", "Transformacija", "Sinhronizacija"];

export function Capabilities() {
  return (
    <section id="capabilities" className="mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-32">
      <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <p className="order-1 text-[12px] uppercase tracking-[0.2em] text-bronze md:order-2">
          ( Mogućnosti )
        </p>
        <h2 className="order-2 max-w-xl text-balance text-[38px] font-medium leading-[1.1] tracking-[-0.02em] text-paper md:order-1 md:text-[46px]">
          Šta gradimo,{" "}
          <span className="font-serif-italic font-normal">jedan sistem.</span>
        </h2>
      </Reveal>

      <div className="mt-16 grid grid-cols-1 gap-5 lg:grid-cols-12">
        <Reveal delay={0.05} className="lg:col-span-7">
          <div className="flex h-full flex-col rounded-2xl border border-bronze/20 bg-gradient-to-br from-bronze/[0.08] via-white/[0.02] to-transparent p-8 md:p-10">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-bronze">
              <IconWorkflow />
            </div>
            <h3 className="mt-8 text-[22px] font-medium text-paper">
              Automatizacija procesa
            </h3>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted">
              Mapiramo ručne korake koji se kriju u vašem poslovanju —
              odobrenja, usklađivanje podataka, izveštavanje — i pretvaramo
              ih u automatizacije koje rade bez nadzora, uz potpunu evidenciju.
            </p>

            <RevealGroup
              className="mt-auto flex flex-wrap items-center gap-x-2 gap-y-3 pt-10"
              stagger={0.12}
            >
              {FLOW_STEPS.map((step, i) => (
                <motion.div
                  key={step}
                  variants={revealItem}
                  className="flex items-center gap-2"
                >
                  <span className="rounded-full border border-white/10 bg-ink/40 px-3.5 py-1.5 text-[12px] text-paper/80">
                    {step}
                  </span>
                  {i < FLOW_STEPS.length - 1 && (
                    <span className="text-bronze/50">→</span>
                  )}
                </motion.div>
              ))}
            </RevealGroup>
          </div>
        </Reveal>

        <div className="flex flex-col gap-5 lg:col-span-5">
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-bronze">
                <IconAgent />
              </div>
              <h3 className="mt-8 text-[22px] font-medium text-paper">
                AI Agenti
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">
                Agenti napravljeni za konkretan zadatak koji čitaju, odlučuju
                i deluju unutar alata koje već koristite — od korisničke
                podrške do istraživanja, od početka do kraja.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-5">
            <Reveal delay={0.15}>
              <div className="h-full rounded-2xl bg-white/[0.02] p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-bronze">
                  <IconSoftware />
                </div>
                <h3 className="mt-6 text-[16px] font-medium text-paper">
                  Softver po meri
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-muted">
                  Interni alati građeni oko vašeg procesa, a ne obrnuto.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="h-full rounded-2xl bg-white/[0.02] p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-bronze">
                  <IconIntegration />
                </div>
                <h3 className="mt-6 text-[16px] font-medium text-paper">
                  Povezivanje sistema
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-muted">
                  Svaka platforma koju koristite, međusobno povezana u
                  realnom vremenu.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.1} className="lg:col-span-12">
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border-t border-white/10 pt-8 md:flex-row md:items-center">
            <div className="flex items-center gap-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 text-bronze">
                <IconData />
              </div>
              <div>
                <h3 className="text-[20px] font-medium text-paper">
                  Podaci i izveštavanje
                </h3>
                <p className="mt-1 max-w-lg text-[14.5px] leading-relaxed text-muted">
                  Rasuti podaci, objedinjeni u izveštaje i preglede kojima
                  vaš tim zaista veruje.
                </p>
              </div>
            </div>
            <a
              href="#contact"
              className="shrink-0 text-[13.5px] uppercase tracking-[0.1em] text-paper/80 transition-colors hover:text-bronze"
            >
              Razgovarajmo o vašim alatima →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
