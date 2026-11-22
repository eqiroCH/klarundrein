import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import Logo from './Logo'
import { Instagram } from './Icons'
import { company, phoneHref, services } from '../data/site'

export default function Footer() {
  return (
    <footer className="bg-brand-600 pt-16 pb-28 text-white md:pb-10">
      <div className="container-x grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="text-2xl font-semibold">
            KLAR und REIN <span className="text-white/80">GmbH</span>
          </p>
          <Logo className="mt-5 size-24" />
          <p className="mt-5 text-white/90">Sauberkeit schafft Vertrauen.</p>
          <a href={company.instagram} target="_blank" rel="noopener" className="mt-4 inline-flex items-center gap-2 font-medium hover:text-brand-100">
            <Instagram className="size-6" /> @klar.und.rein.gmbh
          </a>
        </div>

        <div className="md:col-span-3">
          <p className="text-lg font-semibold">Leistungen</p>
          <ul className="mt-4 space-y-2.5 text-white/90">
            {services.map((s) => (
              <li key={s.slug}>
                <Link to={`/${s.slug}`} className="hover:text-white hover:underline">
                  {s.name} Adliswil
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-5 md:text-right">
          <p className="text-xl font-semibold">Kontaktadresse</p>
          <address className="mt-4 space-y-3 text-white/90 not-italic">
            <p className="flex gap-3 md:justify-end">
              <MapPin className="mt-0.5 size-5 shrink-0 md:order-2" aria-hidden />
              <span>
                {company.name}
                <br />
                {company.street}, {company.zip} {company.city}
              </span>
            </p>
            <p>
              <a href={phoneHref} className="flex gap-3 hover:text-white md:justify-end">
                <Phone className="size-5 shrink-0 md:order-2" aria-hidden /> Telefon: {company.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${company.email}`} className="flex gap-3 hover:text-white md:justify-end">
                <Mail className="size-5 shrink-0 md:order-2" aria-hidden /> E-Mail: {company.email}
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="container-x mt-14 flex flex-col gap-3 border-t border-white/20 pt-6 text-sm text-white/85 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} <strong className="font-semibold text-white">KLAR und REIN</strong> GmbH · {company.uid}
        </p>
        <p className="flex flex-wrap gap-x-5 gap-y-2">
          <Link to="/impressum" className="underline-offset-4 hover:underline">Impressum</Link>
          <Link to="/datenschutz" className="underline-offset-4 hover:underline">Datenschutzerklärung</Link>
          <a href="https://eqiro.ch" target="_blank" rel="noopener" className="underline-offset-4 hover:underline">Website by Eqiro</a>
        </p>
      </div>
    </footer>
  )
}
