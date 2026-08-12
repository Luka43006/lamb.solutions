import { Reveal } from "./Reveal";

const LEAD = {
  numeral: "I",
  title: "Otkrivanje",
  description:
    "Analiziramo kako posao zaista teče kroz vašu firmu i pronalazimo mesta gde automatizacija donosi najveću korist.",
  detail:
    "Svaki angažman počinje ovde, ne demonstracijom. Mapiramo vaš stvarni proces pre nego što predložimo sistem — automatizacija sa najvećim efektom je obično ona koju niko nije prepoznao.",
};

const STEPS = [
  {
    numeral: "II",
    title: "Dizajn",
    description:
      "Osmišljavamo sistem — tok podataka, granične slučajeve, moguće greške — pre nego što napišemo prvu liniju koda.",
  },
  {
    numeral: "III",
    title: "Izrada",
    description:
      "Isporučujemo agente i automatizacije sa nadzorom ugrađenim od prvog dana, ne naknadno dodatim.",
  },
  {
    numeral: "IV",
    title: "Rad",
    description:
      "Pratimo kako sistem funkcioniše, prilagođavamo ga stvarnoj upotrebi i proširujemo ga kako vaše poslovanje raste.",
  },
];

export function Process() {
  return (
    <section id="process" className="border-t border-white/8 bg-ink-soft/40">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-32">
        <Reveal className="flex flex-col gap-5 md:flex-row md:items-baseline">
          <span className="text-[12px] uppercase tracking-[0.2em] text-bronze">
            Proces
          </span>
          <span className="hidden h-px flex-1 bg-white/10 md:block" />
          <h2 className="text-balance text-[32px] font-medium leading-[1.1] tracking-[-0.02em] text-paper md:text-right md:text-[42px]">
            Saradnja,{" "}
            <span className="font-serif-italic font-normal">
              u četiri čina.
            </span>
          </h2>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="flex h-full flex-col rounded-2xl border border-bronze/20 bg-gradient-to-br from-bronze/[0.08] via-white/[0.02] to-transparent p-8 md:p-10">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-bronze/40 bg-ink-soft font-serif text-[16px] italic text-bronze">
                {LEAD.numeral}
              </span>
              <h3 className="mt-8 text-[22px] font-medium text-paper">
                {LEAD.title}
              </h3>
              <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted">
                {LEAD.description}
              </p>
              <p className="mt-auto max-w-md pt-10 text-[14px] leading-relaxed text-paper/70">
                {LEAD.detail}
              </p>
            </div>
          </Reveal>

          <div className="relative lg:col-span-7">
            <span className="pointer-events-none absolute left-[21px] top-2 bottom-2 hidden w-px bg-white/10 lg:block" />
            <div className="flex flex-col gap-10">
              {STEPS.map((step, i) => (
                <Reveal key={step.numeral} delay={i * 0.08}>
                  <div className="relative flex gap-6">
                    <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-bronze/40 bg-ink-soft font-serif text-[16px] italic text-bronze">
                      {step.numeral}
                    </span>
                    <div className="pt-1.5">
                      <h3 className="text-[20px] font-medium text-paper">
                        {step.title}
                      </h3>
                      <p className="mt-3 max-w-md text-[14.5px] leading-relaxed text-muted">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
