import { Link } from 'react-router-dom'
import ServiceIcon from './ServiceIcon'
import { Sparkle } from './Icons'
import { soft, type Service } from '../data/site'

type Variant = 'dark' | 'light' | 'hero'

const styles: Record<Variant, { grid: string; tile: string; icon: string; title: string }> = {
  // Auf Navy (Leistungsbereich der Startseite)
  dark: {
    grid: 'grid grid-cols-2 gap-3 md:grid-cols-5 md:gap-4',
    tile: 'group flex h-full flex-col items-center gap-4 rounded-2xl bg-white/[0.06] px-3 py-6 text-center ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-navy-950',
    icon: 'grid size-14 place-items-center rounded-2xl bg-brand-500 text-white transition-colors group-hover:bg-brand-50 group-hover:text-brand-600',
    title: 'text-[0.95rem] leading-snug font-semibold',
  },
  // Auf Weiss (Leistungsseiten, «Weitere Leistungen»)
  light: {
    grid: 'grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5 md:gap-4',
    tile: 'group flex h-full flex-col items-center gap-4 rounded-2xl bg-white px-3 py-6 text-center ring-1 ring-cloud-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-28px_rgb(13_27_43/0.45)] hover:ring-brand-200',
    icon: 'grid size-14 place-items-center rounded-2xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-500 group-hover:text-white',
    title: 'text-[0.95rem] leading-snug font-semibold text-navy-950',
  },
  // Kompakt im Hero auf dem Handy
  hero: {
    grid: 'grid grid-cols-1 gap-2 min-[360px]:grid-cols-2',
    tile: 'glass flex h-full items-center gap-2.5 rounded-2xl p-2.5 transition-colors active:bg-white/20',
    icon: 'grid size-9 shrink-0 place-items-center rounded-xl bg-brand-500 text-white',
    title: 'text-[0.8rem] leading-tight font-semibold',
  },
}

/** Übersicht aller Leistungen: Symbol + Titel, alles anklickbar. */
export default function ServiceGrid({
  services,
  variant = 'light',
  withCustom = false,
  className = '',
}: {
  services: Service[]
  variant?: Variant
  withCustom?: boolean
  className?: string
}) {
  const s = styles[variant]
  const iconSize = variant === 'hero' ? 'size-[1.1rem]' : 'size-7'
  return (
    <ul className={`${s.grid} ${className}`}>
      {services.map((sv) => (
        <li key={sv.slug}>
          <Link to={`/${sv.slug}`} className={s.tile}>
            <span className={s.icon}>
              <ServiceIcon name={sv.icon} className={iconSize} />
            </span>
            <span className={`${s.title} min-w-0 hyphens-manual`}>{soft(sv.name)}</span>
          </Link>
        </li>
      ))}
      {withCustom && (
        <li>
          <Link to="/#kontakt" className={s.tile}>
            <span className={s.icon}>
              <Sparkle className={iconSize} />
            </span>
            <span className={s.title}>Individuelle Anfrage</span>
          </Link>
        </li>
      )}
    </ul>
  )
}
