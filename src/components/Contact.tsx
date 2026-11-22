import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Check, Loader2, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import Reveal from './Reveal'
import { Eyebrow } from './Icons'
import { company, phoneHref, services, whatsappHref } from '../data/site'

type Status = 'idle' | 'sending' | 'success' | 'error'

const field =
  'w-full rounded-xl border border-cloud-200 bg-cloud-50 px-4 py-3.5 text-ink placeholder:text-ink-300 transition-colors focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-100 focus:outline-none'
const label = 'mb-2 block text-sm font-medium text-navy-950'

export default function Contact({ preset }: { preset?: string }) {
  const [status, setStatus] = useState<Status>('idle')
  const options = [...services.map((s) => s.name), 'Anderes / individuelle Anfrage']

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const body = new URLSearchParams(new FormData(form) as unknown as Record<string, string>).toString()
    setStatus('sending')
    try {
      if (import.meta.env.DEV) await new Promise((r) => setTimeout(r, 700))
      else {
        const res = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body,
        })
        if (!res.ok) throw new Error(String(res.status))
      }
      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  const channels = [
    { href: phoneHref, icon: Phone, label: 'Telefon', value: company.phone },
    ...(whatsappHref ? [{ href: whatsappHref, icon: MessageCircle, label: 'WhatsApp', value: 'Nachricht schreiben', external: true }] : []),
    { href: `mailto:${company.email}`, icon: Mail, label: 'E-Mail', value: company.email },
  ]

  return (
    <section id="kontakt" className="py-20 sm:py-28">
      <div className="container-x">
        <Reveal className="grid overflow-hidden rounded-[2rem] bg-white shadow-[0_40px_100px_-50px_rgb(13_27_43/0.45)] ring-1 ring-cloud-200 lg:grid-cols-12">
          {/* Linke Spalte: Bild der bisherigen Website, Kontaktwege */}
          <div className="relative isolate flex flex-col overflow-hidden bg-navy-950 p-7 text-white sm:p-10 lg:col-span-5">
            <img
              src="/images/kontakt.webp"
              alt=""
              width={900}
              height={1260}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 -z-20 size-full object-cover"
            />
            <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-950/90 via-navy-950/85 to-navy-950/95" />
            <Eyebrow className="text-brand-300">Kontakt</Eyebrow>
            <h2 className="mt-4 text-3xl leading-tight font-semibold tracking-tight text-balance sm:text-4xl">
              Kontaktieren Sie uns für Reinigungsdienste
            </h2>
            <p className="mt-4 leading-relaxed text-white/75">
              Gerne beraten wir Sie persönlich und erstellen Ihnen ein unverbindliches Angebot. Wir freuen uns auf Ihre Anfrage.
            </p>
            <ul className="mt-8 grid gap-3">
              {channels.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    {...(c.external ? { target: '_blank', rel: 'noopener' } : {})}
                    className="glass group flex items-center gap-4 rounded-2xl p-3.5 transition-colors hover:bg-white/15"
                  >
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-500 text-white">
                      <c.icon className="size-5" aria-hidden />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-xs text-white/60">{c.label}</span>
                      <span className="block truncate font-medium">{c.value}</span>
                    </span>
                    <ArrowRight className="size-4 text-white/50 transition-transform group-hover:translate-x-1" aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-auto flex items-start gap-3 pt-10 text-sm text-white/70">
              <MapPin className="size-5 shrink-0 text-brand-300" aria-hidden />
              <span>
                {company.name}
                <br />
                {company.street}, {company.zip} {company.city}
              </span>
            </p>
          </div>

          {/* Rechte Spalte: Formular */}
          <div className="p-6 sm:p-10 lg:col-span-7">
            {status === 'success' ? (
              <div className="flex h-full min-h-[28rem] flex-col items-start justify-center" role="status">
                <span className="grid size-14 place-items-center rounded-full bg-brand-500 text-white">
                  <Check className="size-6" aria-hidden />
                </span>
                <h3 className="mt-6 text-3xl font-semibold text-navy-950">Vielen Dank!</h3>
                <p className="mt-3 max-w-md text-lg text-ink-700">
                  Ihre Anfrage ist bei uns angekommen. Wir melden uns so rasch wie möglich bei Ihnen.
                </p>
                <button type="button" onClick={() => setStatus('idle')} className="btn btn-outline mt-8">
                  Weitere Anfrage senden
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-semibold text-navy-950">Kostenlose Offerte anfragen</h3>
                <p className="mt-1.5 text-ink-500">Unverbindlich – wir melden uns so rasch wie möglich.</p>
                <form name="anfrage" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={onSubmit} className="mt-8 grid gap-5 sm:grid-cols-2">
                  <input type="hidden" name="form-name" value="anfrage" />
                  <p hidden>
                    <label>
                      Nicht ausfüllen: <input name="bot-field" tabIndex={-1} autoComplete="off" />
                    </label>
                  </p>

                  <div className="sm:col-span-2">
                    <label htmlFor="leistung" className={label}>Welche Reinigung?</label>
                    <select id="leistung" name="leistung" defaultValue={preset ?? options[0]} className={field}>
                      {options.map((o) => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="name" className={label}>Ihr Name *</label>
                    <input id="name" name="name" required autoComplete="name" className={field} placeholder="Vor- und Nachname" />
                  </div>
                  <div>
                    <label htmlFor="telefon" className={label}>Ihre Telefonnummer *</label>
                    <input id="telefon" name="telefon" type="tel" required autoComplete="tel" className={field} placeholder="079 123 45 67" />
                  </div>
                  <div>
                    <label htmlFor="email" className={label}>Ihre E-Mail-Adresse</label>
                    <input id="email" name="email" type="email" autoComplete="email" className={field} placeholder="name@beispiel.ch" />
                  </div>
                  <div>
                    <label htmlFor="ort" className={label}>Ort / PLZ</label>
                    <input id="ort" name="ort" autoComplete="address-level2" className={field} placeholder="z. B. 8134 Adliswil" />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="termin" className={label}>Wunschtermin</label>
                    <input id="termin" name="termin" className={field} placeholder="z. B. 30. November oder «so bald wie möglich»" />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="nachricht" className={label}>Ihre Nachricht</label>
                    <textarea id="nachricht" name="nachricht" rows={4} className={`${field} resize-y`} placeholder="Beschreiben Sie Ihren Reinigungsbedarf, z. B. 3.5-Zimmer-Wohnung, Abgabe am …" />
                  </div>
                  <label className="flex items-start gap-3 text-sm text-ink-700 sm:col-span-2">
                    <input type="checkbox" name="datenschutz" required className="mt-0.5 size-5 shrink-0 accent-brand-500" />
                    <span>
                      Ich bin einverstanden, dass meine Angaben zur Bearbeitung der Anfrage verwendet werden (
                      <Link to="/datenschutz" className="underline underline-offset-4">Datenschutz</Link>).
                    </span>
                  </label>
                  <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center">
                    <button type="submit" disabled={status === 'sending'} className="btn btn-brand">
                      {status === 'sending' ? <Loader2 className="size-4 animate-spin" aria-hidden /> : null}
                      Senden Sie Ihre Anfrage
                      {status !== 'sending' && <ArrowRight className="size-4" aria-hidden />}
                    </button>
                    {status === 'error' && (
                      <p className="text-sm text-red-700" role="alert">
                        Senden hat nicht geklappt. Bitte rufen Sie uns an: {company.phone}
                      </p>
                    )}
                  </div>
                </form>
              </>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
