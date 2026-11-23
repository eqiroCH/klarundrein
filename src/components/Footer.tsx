import { Link, useLocation } from 'react-router-dom'
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'
import Logo from './Logo'
import { Instagram, Sparkle } from './Icons'
import { company, phoneHref, services } from '../data/site'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/#ueber-uns', label: 'Über uns' },
  { to: '/#leistungen', label: 'Leistungen' },
  { to: '/#ablauf', label: 'Ablauf' },
  { to: '/#faq', label: 'FAQ' },
  { to: '/#kontakt', label: 'Kontakt' },
]

export default function Footer() {
  const { pathname } = useLocation()
  const offerTo = /impressum|datenschutz/.test(pathname) ? '/#kontakt' : `${pathname}#kontakt`
  const heading = 'text-sm font-semibold tracking-[0.14em] text-white/60 uppercase'

  return (
    <footer className="relative isolate overflow-hidden bg-brand-600 pt-14 pb-28 text-white sm:pt-20 md:pb-10">
      <Sparkle className="absolute -top-24 -right-24 -z-10 size-[26rem] text-white/[0.06]" />
      <div className="container-x">
        {/* Abschluss-CTA */}
        <div className="flex flex-col gap-6 rounded-[2rem] bg-white/10 p-7 ring-1 ring-white/15 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-2xl leading-tight font-semibold text-balance sm:text-3xl">Sauberkeit, auf die Sie sich verlassen können.</p>
            <p className="mt-2 text-white/80">Kostenlose Offerte – telefonisch, per WhatsApp oder online.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link to={offerTo} className="btn btn-light">
              Offerte anfragen <ArrowRight className="size-4" aria-hidden />
            </Link>
            <a href={phoneHref} className="btn btn-glass">
              <Phone className="size-4" aria-hidden /> {company.phone}
            </a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo className="size-20" />
            <p className="mt-5 text-lg font-semibold">
              KLAR und REIN <span className="font-normal text-white/80">GmbH</span>
            </p>
            <p className="mt-1 text-white/80">Sauberkeit schafft Vertrauen.</p>
            <a href={company.instagram} target="_blank" rel="noopener" className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium transition-colors hover:bg-white hover:text-brand-700">
              <Instagram className="size-4" /> @klar.und.rein.gmbh
            </a>
          </div>

          <div className="lg:col-span-2">
            <p className={heading}>Navigation</p>
            <ul className="mt-4 space-y-2.5">
              {nav.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="text-white/90 hover:text-white hover:underline">{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className={heading}>Leistungen</p>
            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link to={`/${s.slug}`} className="text-white/90 hover:text-white hover:underline">
                    {s.name} Adliswil
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className={heading}>Kontaktadresse</p>
            <address className="mt-4 space-y-3 text-white/90 not-italic">
              <p className="flex gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-brand-200" aria-hidden />
                <span>
                  {company.name}
                  <br />
                  {company.street}
                  <br />
                  {company.zip} {company.city}
                </span>
              </p>
              <p>
                <a href={phoneHref} className="flex gap-3 hover:text-white">
                  <Phone className="size-5 shrink-0 text-brand-200" aria-hidden /> {company.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${company.email}`} className="flex gap-3 hover:text-white">
                  <Mail className="size-5 shrink-0 text-brand-200" aria-hidden /> {company.email}
                </a>
              </p>
            </address>
          </div>
        </div>

        <p aria-hidden className="mt-16 text-[17vw] leading-[0.8] font-semibold tracking-tighter whitespace-nowrap text-white/10 select-none lg:text-[12.5rem]">
          Klar und Rein
        </p>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/20 pt-6 text-sm text-white/80 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {company.name} · {company.uid}
          </p>
          <p className="flex flex-wrap gap-x-5 gap-y-2">
            <Link to="/impressum" className="hover:text-white hover:underline">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-white hover:underline">Datenschutzerklärung</Link>
            <a href="https://eqiro.ch" target="_blank" rel="noopener" className="hover:text-white hover:underline">Website by Eqiro</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
