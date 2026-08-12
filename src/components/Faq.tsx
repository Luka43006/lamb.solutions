"use client";

import { Reveal, RevealGroup, revealItem } from "./Reveal";
import { motion } from "framer-motion";

const FAQS = [
  {
    q: "Koliko traje realizacija automatizacije?",
    a: "Zavisi od složenosti procesa koji automatizujemo. Nakon prvog razgovora dobijate realnu procenu vremena — bez uopštenih obećanja unapred.",
  },
  {
    q: "Mogu li da zadržim alate koje već koristim?",
    a: "Da. Sistem gradimo oko alata koje već koristite — bilo da je to Excel, email, vaš CRM ili nešto specifično za vašu industriju.",
  },
  {
    q: "Da li mi je potrebna nova IT infrastruktura?",
    a: "Uglavnom ne. Rešenja gradimo na onome što već imate, bez nepotrebnog dodavanja novih sistema.",
  },
  {
    q: "Koliko košta automatizacija?",
    a: "Zavisi od obima i složenosti projekta. Cenu dogovaramo pojedinačno, nakon što razumemo šta tačno treba da se automatizuje.",
  },
  {
    q: "Da li dobijam podršku nakon što sistem proradi?",
    a: "Da. Pratimo kako sistem radi u praksi i prilagođavamo ga stvarnoj upotrebi — to je deo procesa, ne posebna usluga.",
  },
  {
    q: "Šta ako mi zatreba nešto što nismo unapred dogovorili?",
    a: "Javite nam se i predložićemo rešenje i cenu prilagođenu tom slučaju — bez skrivenih troškova.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="border-t border-white/8">
      <div className="mx-auto max-w-[900px] px-6 py-24 md:px-12 md:py-32">
        <Reveal className="text-center">
          <p className="text-[12px] uppercase tracking-[0.2em] text-bronze">
            ( Česta pitanja )
          </p>
          <h2 className="mx-auto mt-5 max-w-lg text-balance text-[32px] font-medium leading-[1.1] tracking-[-0.02em] text-paper md:text-[40px]">
            Pre nego što zakažete poziv,{" "}
            <span className="font-serif-italic font-normal">
              evo šta ljudi obično pitaju.
            </span>
          </h2>
        </Reveal>

        <RevealGroup className="mt-14 divide-y divide-white/8 border-y border-white/8" stagger={0.06}>
          {FAQS.map((item) => (
            <motion.div key={item.q} variants={revealItem}>
              <details className="group py-2">
                <summary className="flex list-none cursor-pointer items-center justify-between gap-6 py-4 text-[15.5px] font-medium text-paper transition-colors marker:content-none hover:text-bronze [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/15 text-[13px] text-muted transition-transform duration-300 group-open:rotate-45 group-open:text-bronze">
                    +
                  </span>
                </summary>
                <p className="max-w-xl pb-5 text-[14.5px] leading-relaxed text-muted">
                  {item.a}
                </p>
              </details>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
