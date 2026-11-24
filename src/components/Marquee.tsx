import { Sparkle } from './Icons'

const items = [
  'Umzugsreinigung',
  'Abnahmegarantie auf Wunsch',
  'Wohnungsreinigung',
  'Büroreinigung',
  'Fensterreinigung',
  'Unterhaltsreinigung',
  'Treppenhausreinigung',
  'Hauswartung',
  'Baureinigung',
  'Hochdruckreinigung',
  'Fassadenreinigung',
  'Adliswil & Kanton Zürich',
]

/** Endlos laufendes Band mit den Leistungen – Stern aus dem Logo als Trenner. */
export default function Marquee() {
  const row = (hidden?: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((t) => (
        <li key={t} className="flex items-center gap-8 pr-8 text-lg font-medium whitespace-nowrap sm:text-xl">
          {t}
          <Sparkle className="size-4 text-brand-200" />
        </li>
      ))}
    </ul>
  )
  return (
    <div className="overflow-hidden bg-brand-600 py-5 text-white">
      <div className="flex w-max animate-marquee">
        {row()}
        {row(true)}
      </div>
    </div>
  )
}
