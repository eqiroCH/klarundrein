export const Instagram = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
  </svg>
)

/** Vierzackiger Stern wie im Logo von Klar und Rein */
export const Sparkle = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M12 1.5c.7 4.9 3.6 8.4 10.5 10.5-6.9 2.1-9.8 5.6-10.5 10.5-.7-4.9-3.6-8.4-10.5-10.5C8.4 9.9 11.3 6.4 12 1.5Z" />
  </svg>
)

/** Eyebrow-Zeile mit Logo-Stern */
export const Eyebrow = ({ children, className = 'text-brand-600' }: { children: React.ReactNode; className?: string }) => (
  <p className={`eyebrow ${className}`}>
    <Sparkle className="size-3.5" />
    {children}
  </p>
)
