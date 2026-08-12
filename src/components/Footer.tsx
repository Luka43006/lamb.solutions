import Image from "next/image";

const COLUMNS = [
  {
    heading: "Firma",
    links: [
      { label: "Mogućnosti", href: "#capabilities" },
      { label: "Proces", href: "#process" },
      { label: "Radovi", href: "#work" },
      { label: "Pitanja", href: "#faq" },
      { label: "Kontakt", href: "#contact" },
    ],
  },
  {
    heading: "Kontaktirajte nas",
    links: [{ label: "info@lamb.solutions", href: "mailto:info@lamb.solutions" }],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/8">
      <div className="mx-auto max-w-[1400px] px-6 pt-20 md:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_0.6fr_0.6fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <Image
                src="/brand/logo.jpg"
                alt="Lamb Solutions"
                width={32}
                height={32}
                className="h-8 w-8 rounded-full"
              />
              <span className="text-[15px] font-medium text-paper">
                Lamb Solutions
              </span>
            </div>
            <p className="mt-5 max-w-xs text-[14px] leading-relaxed text-muted">
              Inteligentni sistemi automatizacije, AI agenti i softver po
              meri za firme koje su prerasle svoje tabele.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <p className="text-[12.5px] uppercase tracking-[0.1em] text-muted">
                {col.heading}
              </p>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-[14px] text-paper/75 transition-colors hover:text-bronze"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-white/8 py-8 text-[12.5px] text-muted md:flex-row md:items-center md:justify-between">
          <span>© 2026 Lamb Solutions. Sva prava zadržana.</span>
          <span>Politika privatnosti · Uslovi korišćenja</span>
        </div>
      </div>

      <div className="overflow-hidden border-t border-white/8 pt-4">
        <p className="translate-y-[18%] select-none whitespace-nowrap text-center font-serif text-[19vw] italic leading-none text-white/[0.035]">
          Lamb Solutions
        </p>
      </div>
    </footer>
  );
}
