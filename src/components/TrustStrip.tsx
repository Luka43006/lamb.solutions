const STATS = [
  "40+ automatizovanih procesa",
  "12 industrija",
  "94% manje grešaka u proseku",
  "3 nedelje prosečno do pokretanja",
  "31+ sat uštede nedeljno po klijentu",
];

export function TrustStrip() {
  const loop = [...STATS, ...STATS];

  return (
    <div
      className="relative overflow-hidden border-y border-white/8 py-6"
      aria-hidden="true"
    >
      <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap">
        {loop.map((stat, i) => (
          <span
            key={i}
            className="flex items-center gap-10 text-[13px] uppercase tracking-[0.15em] text-muted/85"
          >
            {stat}
            <span className="text-bronze/60">✦</span>
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-ink to-transparent" />
    </div>
  );
}
