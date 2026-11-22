import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'

const Instagram = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
  </svg>
)
import Logo from './Logo'
import { company, phoneHref, services } from '../data/site'

export default function Footer() {
  return (
    <footer className="bg-ink-950 pt-16 pb-28 text-ink-300 md:pb-12">
      <div className="container-x grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <Logo light />
          <p className="mt-5 max-w-xs leading-relaxed">
            Ihre Reinigungsfirma aus Adliswil – für Privat- und Geschäftskunden im ganzen Kanton Zürich.
          </p>
          <a href={company.instagram} target="_blank" rel="noopener" className="mt-6 inline-flex items-center gap-2 text-white hover:text-aqua-300">
            <Instagram className="size-5" /> Instagram
          </a>
        </div>

        <div className="md:col-span-3">
          <p className="eyebrow text-white">Leistungen</p>
          <ul className="mt-4 space-y-2.5">
            {services.map((s) => (
              <li key={s.slug}>
                <Link to={`/${s.slug}`} className="hover:text-white">
                  {s.name} Adliswil
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-5">
          <p className="eyebrow text-white">Kontakt</p>
          <address className="mt-4 space-y-3 not-italic">
            <p className="flex gap-3">
              <MapPin className="mt-0.5 size-5 shrink-0 text-aqua-300" aria-hidden />
              <span>
                {company.name}
                <br />
                {company.street}, {company.zip} {company.city}
              </span>
            </p>
            <p>
              <a href={phoneHref} className="flex gap-3 hover:text-white">
                <Phone className="size-5 shrink-0 text-aqua-300" aria-hidden /> {company.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${company.email}`} className="flex gap-3 hover:text-white">
                <Mail className="size-5 shrink-0 text-aqua-300" aria-hidden /> {company.email}
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="container-x mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {company.name} · {company.uid}</p>
        <p className="flex gap-5">
          <Link to="/impressum" className="hover:text-white">Impressum</Link>
          <Link to="/datenschutz" className="hover:text-white">Datenschutz</Link>
          <a href="https://eqiro.ch" target="_blank" rel="noopener" className="hover:text-white">Website by Eqiro</a>
        </p>
      </div>
    </footer>
  )
}
