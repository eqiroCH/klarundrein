/** Wortmarke «Klar und Rein» mit Tropfen-Signet. TODO: durch das Original-Logo ersetzen, sobald es vorliegt. */
export function Mark({ className = 'size-9' }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <rect width="40" height="40" rx="12" fill="#13a898" />
      <path d="M20 8.5c4.6 6 7.6 10.3 7.6 14.4a7.6 7.6 0 0 1-15.2 0c0-4.1 3-8.4 7.6-14.4Z" fill="#fff" />
      <path d="M16.6 23.6a3.6 3.6 0 0 0 3.4 3.3" stroke="#13a898" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M31 7.5l.9 2.1 2.1.9-2.1.9-.9 2.1-.9-2.1-2.1-.9 2.1-.9z" fill="#d0f3ee" />
    </svg>
  )
}

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <Mark />
      <span className={`text-[1.08rem] leading-none font-extrabold tracking-tight ${light ? 'text-white' : 'text-ink-950'}`}>
        Klar <span className={light ? 'text-aqua-300' : 'text-aqua-500'}>und</span> Rein
      </span>
    </span>
  )
}
