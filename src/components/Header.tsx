import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, ChevronDown, Mail, Menu, MessageCircle, Phone, ShieldCheck, X } from 'lucide-react'
import Logo from './Logo'
import { Instagram, Sparkle } from './Icons'
import { company, phoneHref, services, soft, whatsappHref } from '../data/site'

const links = [
  { to: '/#ueber-uns', label: 'Über uns' },
  { to: '/#ablauf', label: 'Ablauf' },
  { to: '/#faq', label: 'FAQ' },
  { to: '/#kontakt', label: 'Kontakt' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [mega, setMega] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname, hash } = useLocation()
  const closeTimer = useRef<number | undefined>(undefined)
  const megaRef = useRef<HTMLDivElement>(null)
  const offerTo = /impressum|datenschutz/.test(pathname) ? '/#kontakt' : `${pathname}#kontakt`

  useEffect(() => {
    setOpen(false)
    setMega(false)
  }, [pathname, hash])
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMega(false)
        setOpen(false)
      }
    }
    const onClick = (e: MouseEvent) => {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) setMega(false)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('click', onClick)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('click', onClick)
    }
  }, [])

  const openedAt = useRef(0)
  const openMega = () => {
    window.clearTimeout(closeTimer.current)
    if (!mega) openedAt.current = Date.now()
    setMega(true)
  }
  // Klick direkt nach dem Hover-Öffnen soll das Menü nicht gleich wieder schliessen
  const toggleMega = () => {
    window.clearTimeout(closeTimer.current)
    if (mega && Date.now() - openedAt.current < 500) return
    if (!mega) openedAt.current = Date.now()
    setMega(!mega)
  }
  const closeMegaSoon = () => {
    closeTimer.current = window.setTimeout(() => setMega(false), 160)
  }

  const solid = scrolled || mega
  const featured = services[0]

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
        <div
          ref={megaRef}
          onMouseLeave={closeMegaSoon}
          className={`relative mx-auto max-w-6xl rounded-[1.75rem] border transition-all duration-300 ${
            solid
              ? 'border-cloud-200/80 bg-white/95 text-navy-950 shadow-[0_18px_50px_-20px_rgb(13_27_43/0.35)] backdrop-blur-xl'
              : 'border-white/15 bg-white/10 text-white backdrop-blur-md'
          }`}
        >
          <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-navy-900">
            Zum Inhalt springen
          </a>
          <div className="flex h-16 items-center justify-between gap-3 pr-2 pl-2 sm:h-[4.5rem] sm:pl-2.5">
            <Link to="/" aria-label={`${company.brand} – Startseite`} className="flex shrink-0 items-center gap-3">
              <Logo className="size-12 sm:size-[3.4rem]" />
              <span className="hidden leading-tight xl:block">
                <span className="block text-[0.95rem] font-semibold">Klar und Rein</span>
                <span className={`block text-xs ${solid ? 'text-ink-500' : 'text-white/70'}`}>Reinigung in Adliswil</span>
              </span>
            </Link>

            <nav aria-label="Hauptnavigation" className="hidden lg:block">
              <ul className="flex items-center gap-1">
                <li onMouseEnter={openMega}>
                  <button
                    type="button"
                    aria-expanded={mega}
                    aria-controls="mega-menu"
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleMega()
                    }}
                    className={`inline-flex items-center gap-1 rounded-full px-4 py-2.5 text-[0.95rem] font-medium transition-colors ${
                      solid ? 'hover:bg-cloud-100' : 'hover:bg-white/10'
                    }`}
                  >
                    Leistungen
                    <ChevronDown className={`size-4 transition-transform duration-300 ${mega ? 'rotate-180' : ''}`} aria-hidden />
                  </button>
                </li>
                {links.map((l) => (
                  <li key={l.to} onMouseEnter={closeMegaSoon}>
                    <Link
                      to={l.to}
                      className={`rounded-full px-4 py-2.5 text-[0.95rem] font-medium transition-colors ${solid ? 'hover:bg-cloud-100' : 'hover:bg-white/10'}`}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-2">
              <a
                href={phoneHref}
                aria-label={`Anrufen: ${company.phone}`}
                className={`grid size-11 place-items-center rounded-full transition-colors xl:flex xl:w-auto xl:gap-2 xl:px-4 ${
                  solid ? 'hover:bg-cloud-100' : 'hover:bg-white/10'
                }`}
              >
                <Phone className="size-[1.1rem]" aria-hidden />
                <span className="hidden text-[0.95rem] font-medium xl:inline">{company.phone}</span>
              </a>
              <Link to={offerTo} className="btn btn-brand hidden !px-5 !py-3 sm:inline-flex">
                Offerte anfragen
              </Link>
              <button
                type="button"
                onClick={() => setOpen(true)}
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label="Menü öffnen"
                className={`grid size-11 place-items-center rounded-full lg:hidden ${solid ? 'bg-navy-950 text-white' : 'bg-white text-navy-950'}`}
              >
                <Menu className="size-5" aria-hidden />
              </button>
            </div>
          </div>

          {/* Mega-Menü Leistungen */}
          <div
            id="mega-menu"
            onMouseEnter={openMega}
            className={`absolute inset-x-0 top-full hidden pt-3 transition-all duration-300 lg:block ${
              mega ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0'
            }`}
          >
            <div className="grid grid-cols-12 gap-3 rounded-[1.75rem] border border-cloud-200 bg-white p-3 text-ink shadow-[0_30px_80px_-30px_rgb(13_27_43/0.45)]">
              <ul className="col-span-8 grid grid-cols-2 gap-1">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link to={`/${s.slug}`} className="group flex items-center gap-4 rounded-2xl p-3 transition-colors hover:bg-cloud-50">
                      <img src={`/images/${s.image}.webp`} alt="" width={800} height={600} loading="lazy" className="size-16 shrink-0 rounded-xl object-cover" />
                      <span className="min-w-0">
                        <span className="flex items-center gap-1.5 font-semibold text-navy-950">
                          {s.name}
                          <ArrowRight className="size-4 -translate-x-1 text-brand-500 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" aria-hidden />
                        </span>
                        <span className="block text-sm text-ink-500">{s.teaser}</span>
                      </span>
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/#kontakt" className="group flex h-full items-center gap-4 rounded-2xl p-3 transition-colors hover:bg-cloud-50">
                    <span className="grid size-16 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                      <Sparkle className="size-7" />
                    </span>
                    <span>
                      <span className="block font-semibold text-navy-950">Individuelle Anfragen</span>
                      <span className="block text-sm text-ink-500">Spezielle Reinigungswünsche</span>
                    </span>
                  </Link>
                </li>
              </ul>
              <Link
                to={`/${featured.slug}`}
                className="group relative isolate col-span-4 flex min-h-[15rem] flex-col justify-end overflow-hidden rounded-2xl p-6 text-white"
              >
                <img src={`/images/${featured.image}.webp`} alt="" width={800} height={600} loading="lazy" className="absolute inset-0 -z-20 size-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <span aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950/95 via-navy-950/50 to-transparent" />
                <span className="mb-auto inline-flex w-fit items-center gap-1.5 rounded-full bg-brand-500 px-3 py-1 text-xs font-semibold">
                  <ShieldCheck className="size-3.5" aria-hidden /> Abnahmegarantie
                </span>
                <span className="text-xl font-semibold">Umzugsreinigung ohne Stress</span>
                <span className="mt-1 text-sm text-white/80">Bemängelt die Verwaltung etwas, reinigen wir kostenlos nach.</span>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium">
                  Mehr erfahren <ArrowUpRight className="size-4" aria-hidden />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile-Menü: Vollbild */}
      {open && (
        <div id="mobile-menu" role="dialog" aria-modal="true" aria-label="Menü" className="fixed inset-0 z-[60] flex animate-menu-in flex-col overflow-y-auto bg-navy-950 text-white lg:hidden">
          <div aria-hidden className="dots pointer-events-none absolute inset-0" />
          <div className="relative flex items-center justify-between px-5 pt-5">
            <Link to="/" aria-label="Startseite" onClick={() => setOpen(false)}>
              <Logo className="size-12" />
            </Link>
            <button type="button" onClick={() => setOpen(false)} aria-label="Menü schliessen" className="grid size-11 place-items-center rounded-full bg-white text-navy-950">
              <X className="size-5" aria-hidden />
            </button>
          </div>

          <nav aria-label="Mobile Navigation" className="relative flex-1 px-5 pt-8 pb-10">
            <ul className="grid gap-1">
              {[{ to: '/', label: 'Home' }, ...links].map((l, i) => (
                <li key={l.to} className="animate-fade-up" style={{ animationDelay: `${60 + i * 50}ms` }}>
                  <Link to={l.to} onClick={() => setOpen(false)} className="flex items-center justify-between border-b border-white/10 py-4 text-[1.7rem] font-semibold">
                    {l.label}
                    <ArrowRight className="size-5 text-brand-300" aria-hidden />
                  </Link>
                </li>
              ))}
            </ul>

            <p className="eyebrow mt-10 text-brand-300">
              <Sparkle className="size-3.5" /> Leistungen
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-3">
              {services.map((s, i) => (
                <li key={s.slug} className="animate-fade-up" style={{ animationDelay: `${300 + i * 50}ms` }}>
                  <Link to={`/${s.slug}`} onClick={() => setOpen(false)} className="relative isolate flex aspect-[4/3] items-end overflow-hidden rounded-2xl p-3">
                    <img src={`/images/${s.image}.webp`} alt="" width={800} height={600} loading="lazy" className="absolute inset-0 -z-20 size-full object-cover" />
                    <span aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950/90 to-navy-950/10" />
                    <span className="text-[0.95rem] leading-tight font-semibold hyphens-manual">{soft(s.name)}</span>
                  </Link>
                </li>
              ))}
              <li className="animate-fade-up" style={{ animationDelay: '550ms' }}>
                <Link to="/#kontakt" onClick={() => setOpen(false)} className="flex aspect-[4/3] flex-col justify-between rounded-2xl bg-brand-500 p-3">
                  <Sparkle className="size-6" />
                  <span className="text-[0.95rem] leading-tight font-semibold">Individuelle Anfragen</span>
                </Link>
              </li>
            </ul>

            <div className="mt-10 grid gap-3">
              <Link to={offerTo} onClick={() => setOpen(false)} className="btn btn-brand">
                Kostenlose Offerte anfragen
              </Link>
              <div className="grid grid-cols-2 gap-3">
                <a href={phoneHref} className="btn btn-glass !px-3">
                  <Phone className="size-4" aria-hidden /> Anrufen
                </a>
                {whatsappHref ? (
                  <a href={whatsappHref} target="_blank" rel="noopener" className="btn btn-glass !px-3">
                    <MessageCircle className="size-4" aria-hidden /> WhatsApp
                  </a>
                ) : (
                  <a href={`mailto:${company.email}`} className="btn btn-glass !px-3">
                    <Mail className="size-4" aria-hidden /> E-Mail
                  </a>
                )}
              </div>
            </div>
            <div className="mt-8 flex items-center justify-between text-sm text-white/70">
              <span>
                {company.street}, {company.zip} {company.city}
              </span>
              <a href={company.instagram} target="_blank" rel="noopener" aria-label="Instagram" className="grid size-10 place-items-center rounded-full bg-white/10">
                <Instagram className="size-5" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}
