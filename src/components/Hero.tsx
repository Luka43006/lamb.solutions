"use client";

import { motion } from "framer-motion";
import { AutomationConsole } from "./AutomationConsole";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-16 md:pt-56 md:pb-36"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px] bg-[radial-gradient(60%_50%_at_50%_0%,rgba(var(--bronze-rgb),0.14),transparent_70%)]" />
      <div className="grain-layer pointer-events-none absolute inset-0 -z-20" />

      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-10 px-6 md:px-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-8">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[12px] uppercase tracking-[0.2em] text-bronze"
          >
            ( Agencija za AI automatizaciju )
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="mt-6 text-balance text-[clamp(2.5rem,11vw,4rem)] font-medium leading-[1.02] tracking-[-0.03em] text-paper"
          >
            Inteligencija, ugrađena
            <br />
            <span className="font-serif-italic font-normal text-paper/95">
              u svaki radni proces.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="mt-8 max-w-[480px] text-[16.5px] leading-relaxed text-muted"
          >
            Lamb Solutions dizajnira i gradi AI agente, automatizacije i
            softver po meri koji tiho uklanjaju rutinske poslove i oslobađaju
            vaš tim za ono što je zaista bitno.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32 }}
            className="mt-10 flex flex-wrap items-center gap-6"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3.5 text-[14px] font-medium text-ink transition-transform hover:scale-[1.03] hover:bg-bronze"
            >
              Zakažite poziv
            </a>
            <a
              href="#process"
              className="group inline-flex items-center gap-2 text-[14px] text-paper/80 transition-colors hover:text-paper"
            >
              Pogledajte kako funkcioniše
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </motion.div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <AutomationConsole />
        </div>
      </div>
    </section>
  );
}
