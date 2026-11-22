import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, Phone, X } from 'lucide-react'
import Logo from './Logo'
import { Instagram } from './Icons'
import { company, phoneHref, services } from '../data/site'

/** Navigation wie auf der bisherigen Website: Home · Über uns · Leistungen · Kontakt */
const nav = [
  { to: '/', label: 'Home' },
  { to: '/#ueber-uns', label: 'Über uns' },
  { to: '/#leistungen', label: 'Leistungen' },
  { to: '/#kontakt', label: 'Kontakt' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname, hash } = useLocation()
  const contactTo = /impressum|datenschutz/.test(pathname) ? '/#kontakt' : `${pathname}#kontakt`

  useEffect(() => setOpen(false), [pathname, hash])
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  const isActive = (to: string) => (to === '/' ? pathname === '/' && !hash : `${pathname}${hash}` === to)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 text-white transition-all duration-300 ${
        scrolled || open ? 'bg-navy-950/95 shadow-[0_10px_30px_-15px_rgb(0_0_0/0.5)] backdrop-blur-lg' : 'bg-transparent'
      }`}
    >
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-navy-900">
        Zum Inhalt springen
      </a>
      <div className={`container-x flex items-center justify-between gap-4 transition-all duration-300 ${scrolled ? 'h-[4.5rem]' : 'h-[5.5rem] sm:h-24'}`}>
        <Link to="/" aria-label={`${company.brand} – Startseite`} className="shrink-0">
          <Logo className={`transition-all duration-300 ${scrolled ? 'size-12' : 'size-14 sm:size-[4.5rem]'}`} />
        </Link>

        <nav aria-label="Hauptnavigation" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {nav.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  className={`relative px-4 py-2 text-[0.95rem] transition-colors hover:text-brand-300 ${isActive(n.to) ? 'text-brand-300' : 'text-white/90'}`}
                >
                  {n.label}
                  {isActive(n.to) && <span className="absolute inset-x-4 -bottom-0.5 h-px bg-brand-300" aria-hidden />}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a href={phoneHref} className="hidden items-center gap-2 rounded-full border border-white/30 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-white hover:text-navy-900 lg:inline-flex">
            <Phone className="size-4" aria-hidden />
            {company.phone}
          </a>
          <a href={company.instagram} target="_blank" rel="noopener" aria-label="Klar und Rein auf Instagram" className="hidden size-11 place-items-center rounded-full transition-colors hover:text-brand-300 md:grid">
            <Instagram className="size-5" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Menü schliessen' : 'Menü öffnen'}
            className="grid size-11 place-items-center rounded-full border border-white/30 md:hidden"
          >
            {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile Navigation" className="h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-white/10 bg-navy-950 md:hidden">
          <div className="container-x py-6">
            <ul className="grid gap-1">
              {nav.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="block rounded-xl px-3 py-3 text-xl font-medium hover:bg-white/5">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="eyebrow mt-8 px-3 text-brand-300">Leistungen</p>
            <ul className="mt-2 grid gap-1">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link to={`/${s.slug}`} className="block rounded-xl px-3 py-2.5 text-white/85 hover:bg-white/5">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 grid gap-3">
              <Link to={contactTo} className="btn btn-light">Kostenlose Offerte anfragen</Link>
              <a href={phoneHref} className="btn btn-outline-light">
                <Phone className="size-4" aria-hidden /> {company.phone}
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}
