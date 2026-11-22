import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, Phone, X } from 'lucide-react'
import Logo from './Logo'
import { company, phoneHref, services } from '../data/site'

const nav = [
  { to: '/#leistungen', label: 'Leistungen' },
  { to: '/umzugsreinigung-adliswil', label: 'Umzugsreinigung' },
  { to: '/#ablauf', label: 'Ablauf' },
  { to: '/#einzugsgebiet', label: 'Einzugsgebiet' },
  { to: '/#faq', label: 'FAQ' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname, hash } = useLocation()
  const offerTo = /impressum|datenschutz/.test(pathname) ? '/#kontakt' : `${pathname}#kontakt`

  useEffect(() => setOpen(false), [pathname, hash])
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'border-b border-ink-100 bg-white/90 backdrop-blur-lg' : 'bg-transparent'
      }`}
    >
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:rounded-full focus:bg-white focus:px-4 focus:py-2">
        Zum Inhalt springen
      </a>
      <div className="container-x flex h-[4.5rem] items-center justify-between gap-4">
        <Link to="/" aria-label={`${company.brand} – Startseite`} className="shrink-0">
          <Logo />
        </Link>

        <nav aria-label="Hauptnavigation" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="rounded-full px-3.5 py-2 text-[0.93rem] font-medium text-ink-700 transition-colors hover:bg-mist-100 hover:text-ink-950">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a href={phoneHref} className="btn btn-ghost hidden !px-4 !py-2.5 sm:inline-flex">
            <Phone className="size-4 text-aqua-600" aria-hidden />
            {company.phone}
          </a>
          <Link to={offerTo} className="btn btn-primary hidden !px-5 !py-2.5 md:inline-flex">
            Offerte anfragen
          </Link>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Menü schliessen' : 'Menü öffnen'}
            className="grid size-11 place-items-center rounded-full border border-ink-100 bg-white lg:hidden"
          >
            {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile Navigation" className="h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-ink-100 bg-white lg:hidden">
          <div className="container-x py-6">
            <p className="eyebrow text-ink-500">Leistungen</p>
            <ul className="mt-3 grid gap-1">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link to={`/${s.slug}`} className="block rounded-2xl px-3 py-3 text-lg font-semibold hover:bg-mist-100">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="eyebrow mt-8 text-ink-500">Mehr</p>
            <ul className="mt-3 grid gap-1">
              {nav.filter((n) => n.to.startsWith('/#') && n.to !== '/#leistungen').map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="block rounded-2xl px-3 py-3 text-lg font-semibold hover:bg-mist-100">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 grid gap-3">
              <Link to={offerTo} className="btn btn-primary">Kostenlose Offerte anfragen</Link>
              <a href={phoneHref} className="btn btn-ghost">
                <Phone className="size-4 text-aqua-600" aria-hidden /> {company.phone}
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}
