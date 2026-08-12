"use client";

import { Reveal, RevealGroup, revealItem } from "./Reveal";
import { motion } from "framer-motion";

const FLOW = ["Faktura primljena", "Uparena sa narudžbenicom", "Proverena", "Proknjižena"];

const SPECS = [
  { label: "Sati uštede / nedeljno", value: "31.6" },
  { label: "Manje grešaka", value: "-94%" },
  { label: "Povezanih sistema", value: "6" },
  { label: "Vreme do prve automatizacije", value: "3 nedelje" },
];

export function CaseStudy() {
  return (
    <section id="work" className="mx-auto max-w-[1400px] px-6 py-20 md:px-12 md:py-28">
      <Reveal>
        <p className="text-[12px] uppercase tracking-[0.2em] text-bronze">
          ( Studija slučaja )
        </p>
      </Reveal>

      <div className="mt-8 grid grid-cols-1 gap-14 lg:grid-cols-[1.3fr_0.7fr]">
        <Reveal delay={0.05}>
          <h2 className="text-balance font-serif text-[40px] italic leading-[1.08] tracking-[-0.01em] text-paper md:text-[56px]">
            Naplata potraživanja, iznova osmišljena za tim od 90 ljudi.
          </h2>
          <p className="mt-8 max-w-lg text-[15.5px] leading-relaxed text-muted">
            Logistička firma iz srednjeg segmenta gubila je po nekoliko dana
            mesečno na ručno uparivanje faktura i usklađivanje podataka
            razbacanih po četiri odvojena sistema. Zamenili smo tu štafetu
            tabela jednim slojem automatizacije — koji čita prispele fakture,
            proverava ih u odnosu na narudžbenice i direktno ih knjiži,
            izdvajajući samo ono što zaista traži čoveka.
          </p>

          <RevealGroup
            className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-3"
            stagger={0.12}
          >
            {FLOW.map((step, i) => (
              <motion.div
                key={step}
                variants={revealItem}
                className="flex items-center gap-2"
              >
                <span className="rounded-full border border-white/10 bg-ink/40 px-3.5 py-1.5 text-[12px] text-paper/80">
                  {step}
                </span>
                {i < FLOW.length - 1 && (
                  <span className="text-bronze/50">→</span>
                )}
              </motion.div>
            ))}
          </RevealGroup>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 text-[14px] text-paper/80 transition-colors hover:text-bronze"
          >
            Razgovarajmo o sličnom projektu
            <span>→</span>
          </a>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="flex flex-col divide-y divide-white/8 border-y border-white/8">
            {SPECS.map((spec) => (
              <div
                key={spec.label}
                className="flex items-baseline justify-between py-5"
              >
                <span className="text-[13.5px] uppercase tracking-[0.08em] text-muted">
                  {spec.label}
                </span>
                <span className="font-serif text-[24px] text-paper">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
