"use client";

import { motion } from "framer-motion";

const STEPS = [
  { label: "Tiket primljen", detail: "Klasifikovan po nameri · 0.2s", status: "Gotovo" },
  { label: "Klijent prepoznat", detail: "Nalog i plan povezani", status: "Gotovo" },
  { label: "Odgovor pripremljen", detail: "Proveren u bazi znanja", status: "U toku" },
  { label: "Prosleđen specijalisti", detail: "Čeka se dodatna provera", status: "U redu" },
] as const;

const STATUS_STYLES: Record<string, string> = {
  Gotovo: "text-muted",
  "U toku": "text-bronze",
  "U redu": "text-muted/60",
};

export function AutomationConsole() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-[560px]"
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.015] p-px shadow-[0_40px_120px_-40px_rgba(0,0,0,0.9)]"
      >
        <div className="rounded-2xl bg-ink-soft/95 p-5">
          <div className="flex items-center justify-between border-b border-white/8 pb-4">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-bronze/70" />
              <span className="text-[13px] font-medium text-paper">
                Podrška klijentima — Automatizacija
              </span>
            </div>
            <span className="flex items-center gap-1.5 rounded-full border border-white/10 px-2.5 py-1 text-[11px] uppercase tracking-wide text-muted">
              <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-emerald-400/80" />
              Uživo
            </span>
          </div>

          <div className="mt-4 flex flex-col gap-1">
            {STEPS.map((step, i) => (
              <div
                key={step.label}
                className="flex items-center justify-between gap-4 rounded-lg px-2 py-3 transition-colors hover:bg-white/[0.03]"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/10 text-[11px] text-muted">
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-[13.5px] text-paper">{step.label}</p>
                    <p className="text-[12px] text-muted">{step.detail}</p>
                  </div>
                </div>
                <span
                  className={`shrink-0 text-[11px] uppercase tracking-wide ${STATUS_STYLES[step.status]}`}
                >
                  {step.status}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-between rounded-xl border border-white/8 bg-white/[0.02] px-4 py-3">
            <div>
              <p className="text-[11px] uppercase tracking-wide text-muted">
                Ušteđeno ove nedelje
              </p>
              <p className="mt-0.5 font-serif text-[22px] text-paper">14.2 h</p>
            </div>
            <div className="flex items-end gap-1">
              {[6, 10, 8, 14, 11, 18, 15].map((h, i) => (
                <span
                  key={i}
                  className="w-1.5 rounded-full bg-bronze/60"
                  style={{ height: `${h}px` }}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <div className="pointer-events-none absolute -inset-x-10 -bottom-10 -z-10 h-32 bg-bronze/10 blur-[80px]" />
    </motion.div>
  );
}
