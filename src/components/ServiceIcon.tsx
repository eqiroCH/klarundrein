import { BriefcaseBusiness, Building2, Droplets, Grid2x2, HardHat, House, SprayCan, Truck, Wrench, type LucideProps } from 'lucide-react'
import type { ServiceIconName } from '../data/site'

/** Treppe im Lucide-Stil (Lucide hat kein Treppen-Symbol) */
const Stairs = ({ className }: LucideProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
    <path d="M3 20h4.5v-4.5H12V11h4.5V6.5H21" />
    <path d="M3 20h18" />
  </svg>
)

const icons: Record<ServiceIconName, (p: LucideProps) => React.ReactNode> = {
  umzug: Truck,
  wohnung: House,
  buero: BriefcaseBusiness,
  fenster: Grid2x2,
  unterhalt: SprayCan,
  treppenhaus: Stairs,
  hauswartung: Wrench,
  bau: HardHat,
  hochdruck: Droplets,
  fassade: Building2,
}

export default function ServiceIcon({ name, className = 'size-6' }: { name: ServiceIconName; className?: string }) {
  const Icon = icons[name]
  return <Icon className={className} aria-hidden />
}
