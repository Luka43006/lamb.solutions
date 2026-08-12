import { Reveal } from "./Reveal";

export function Testimonial() {
  return (
    <section className="border-t border-white/8">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
        <Reveal>
          <p className="text-[12px] uppercase tracking-[0.2em] text-bronze">
            ( Glas klijenta )
          </p>
          <span
            aria-hidden="true"
            className="mt-6 block font-serif text-[56px] italic leading-none text-bronze/40"
          >
            &ldquo;
          </span>
          <p className="-mt-4 text-balance font-serif text-[28px] italic leading-[1.4] text-paper md:text-[34px]">
            Lamb nije samo automatizovao proces — promenili su način na koji
            naš tim razmišlja o tome šta uopšte treba da radi čovek.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
