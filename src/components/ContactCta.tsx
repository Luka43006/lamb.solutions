"use client";

import { useState, type FormEvent } from "react";
import { Reveal } from "./Reveal";

type FieldErrors = Record<string, string>;

export function ContactCta() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;

    setSubmitting(true);
    setFormError(null);
    setFieldErrors({});

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      company: data.get("company"),
      message: data.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();

      if (!response.ok) {
        setFieldErrors(result.errors ?? {});
        setFormError(
          result.errors?.form ?? "Proverite označena polja i pokušajte ponovo.",
        );
        return;
      }

      setSubmitted(true);
    } catch {
      setFormError("Došlo je do greške pri slanju poruke. Pokušajte ponovo.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden border-t border-white/8">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[420px] bg-[radial-gradient(60%_60%_at_50%_100%,rgba(var(--bronze-rgb),0.16),transparent_70%)]" />

      <div className="mx-auto max-w-[1400px] px-6 py-28 md:px-12 md:py-36">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.8fr_1fr]">
          <Reveal>
            <p className="text-[12px] uppercase tracking-[0.2em] text-bronze">
              ( Pokrenimo projekat )
            </p>
            <h2 className="mt-5 text-balance text-[38px] font-medium leading-[1.1] tracking-[-0.02em] text-paper md:text-[46px]">
              Recite nam šta{" "}
              <span className="font-serif-italic font-normal">
                vašem timu jede vreme.
              </span>
            </h2>
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-muted">
              Poziv od 30 minuta, bez prezentacije. Iskreno ćemo vam reći da
              li je automatizacija pravi potez pre nego što pređemo na bilo
              šta drugo.
            </p>
            <div className="mt-10 space-y-3 text-[13.5px] text-muted">
              <p>info@lamb.solutions</p>
              <p>Odgovor u roku od 1 radnog dana</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
              {submitted ? (
                <div className="flex h-full flex-col items-center justify-center py-16 text-center">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-bronze/40 bg-ink-soft font-serif text-[16px] italic text-bronze">
                    ✓
                  </span>
                  <p className="mt-6 font-serif text-[24px] italic text-paper">
                    Poruka je primljena.
                  </p>
                  <p className="mt-3 text-[14px] text-muted">
                    Javićemo vam se u roku od jednog radnog dana.
                  </p>
                  <span className="mt-6 flex items-center gap-1.5 rounded-full border border-white/10 px-2.5 py-1 text-[11px] uppercase tracking-wide text-muted">
                    <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-emerald-400/80" />
                    Zabeleženo u redu
                  </span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <label className="group relative block">
                      <span className="text-[12.5px] uppercase tracking-[0.08em] text-muted transition-colors group-focus-within:text-bronze">
                        Ime i prezime
                      </span>
                      <input
                        required
                        type="text"
                        name="name"
                        placeholder="Marko Marković"
                        aria-invalid={Boolean(fieldErrors.name)}
                        aria-describedby={fieldErrors.name ? "name-error" : undefined}
                        className="peer mt-2 w-full rounded-sm border-b border-white/15 bg-transparent pb-2.5 text-[15px] text-paper placeholder:text-muted/50 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bronze/70"
                      />
                      <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-center scale-x-0 bg-bronze transition-transform duration-300 ease-out peer-focus:scale-x-100" />
                      {fieldErrors.name && (
                        <p id="name-error" className="mt-2 text-[12.5px] text-rust">
                          {fieldErrors.name}
                        </p>
                      )}
                    </label>
                    <label className="group relative block">
                      <span className="text-[12.5px] uppercase tracking-[0.08em] text-muted transition-colors group-focus-within:text-bronze">
                        Poslovni email
                      </span>
                      <input
                        required
                        type="email"
                        name="email"
                        placeholder="marko@firma.rs"
                        aria-invalid={Boolean(fieldErrors.email)}
                        aria-describedby={fieldErrors.email ? "email-error" : undefined}
                        className="peer mt-2 w-full rounded-sm border-b border-white/15 bg-transparent pb-2.5 text-[15px] text-paper placeholder:text-muted/50 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bronze/70"
                      />
                      <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-center scale-x-0 bg-bronze transition-transform duration-300 ease-out peer-focus:scale-x-100" />
                      {fieldErrors.email && (
                        <p id="email-error" className="mt-2 text-[12.5px] text-rust">
                          {fieldErrors.email}
                        </p>
                      )}
                    </label>
                  </div>

                  <label className="group relative block">
                    <span className="text-[12.5px] uppercase tracking-[0.08em] text-muted transition-colors group-focus-within:text-bronze">
                      Firma <span className="normal-case tracking-normal text-muted/60">(opciono)</span>
                    </span>
                    <input
                      type="text"
                      name="company"
                      placeholder="Naziv firme"
                      aria-invalid={Boolean(fieldErrors.company)}
                      aria-describedby={fieldErrors.company ? "company-error" : undefined}
                      className="peer mt-2 w-full rounded-sm border-b border-white/15 bg-transparent pb-2.5 text-[15px] text-paper placeholder:text-muted/50 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bronze/70"
                    />
                    <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-center scale-x-0 bg-bronze transition-transform duration-300 ease-out peer-focus:scale-x-100" />
                    {fieldErrors.company && (
                      <p id="company-error" className="mt-2 text-[12.5px] text-rust">
                        {fieldErrors.company}
                      </p>
                    )}
                  </label>

                  <label className="group relative block">
                    <span className="text-[12.5px] uppercase tracking-[0.08em] text-muted transition-colors group-focus-within:text-bronze">
                      Šta biste želeli da automatizujete?
                    </span>
                    <textarea
                      required
                      name="message"
                      rows={3}
                      placeholder="Opišite proces, alat ili usko grlo koje vas koči."
                      aria-invalid={Boolean(fieldErrors.message)}
                      aria-describedby={fieldErrors.message ? "message-error" : undefined}
                      className="peer mt-2 w-full resize-none rounded-sm border-b border-white/15 bg-transparent pb-2.5 text-[15px] text-paper placeholder:text-muted/50 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bronze/70"
                    />
                    <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-center scale-x-0 bg-bronze transition-transform duration-300 ease-out peer-focus:scale-x-100" />
                    {fieldErrors.message && (
                      <p id="message-error" className="mt-2 text-[12.5px] text-rust">
                        {fieldErrors.message}
                      </p>
                    )}
                  </label>

                  <div aria-live="polite">
                    {formError && (
                      <p className="text-[13.5px] text-rust">{formError}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-paper px-6 py-3.5 text-[14px] font-medium text-ink transition-transform hover:scale-[1.01] hover:bg-bronze focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bronze disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100 disabled:hover:bg-paper sm:w-auto"
                  >
                    {submitting ? "Šalje se…" : "Pošaljite upit"}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
