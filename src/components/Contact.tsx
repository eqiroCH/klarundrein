import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { Check, Loader2, Mail, MessageCircle, Phone } from 'lucide-react'
import Reveal from './Reveal'
import { company, phoneHref, services, whatsappHref } from '../data/site'

type Status = 'idle' | 'sending' | 'success' | 'error'

const field =
  'w-full rounded-2xl border border-ink-100 bg-mist-50 px-4 py-3.5 text-ink-950 placeholder:text-ink-500 transition-colors focus:border-aqua-400 focus:bg-white focus:outline-none'
const label = 'mb-2 block text-sm font-semibold text-ink-800'

export default function Contact({ preset }: { preset?: string }) {
  const [status, setStatus] = useState<Status>('idle')
  const options = [...services.map((s) => s.name), 'Anderes']

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

  return (
    <section id="kontakt" className="bg-bubbles py-20 sm:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow text-aqua-600">Kostenlose Offerte</p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">
            Sagen Sie uns, was sauber werden soll.
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-700">
            Kurz ausfüllen, anrufen oder per WhatsApp schreiben – Sie erhalten eine klare und unverbindliche Offerte.
          </p>
          <div className="mt-10 grid gap-3">
            <a href={phoneHref} className="card flex items-center gap-4 p-4 transition-colors hover:border-aqua-300">
              <span className="grid size-11 place-items-center rounded-2xl bg-aqua-100 text-aqua-700">
                <Phone className="size-5" aria-hidden />
              </span>
              <span>
                <span className="block text-sm text-ink-500">Telefon</span>
                <span className="block font-bold">{company.phone}</span>
              </span>
            </a>
            {whatsappHref && (
              <a href={whatsappHref} target="_blank" rel="noopener" className="card flex items-center gap-4 p-4 transition-colors hover:border-aqua-300">
                <span className="grid size-11 place-items-center rounded-2xl bg-aqua-100 text-aqua-700">
                  <MessageCircle className="size-5" aria-hidden />
                </span>
                <span>
                  <span className="block text-sm text-ink-500">WhatsApp</span>
                  <span className="block font-bold">Nachricht schreiben</span>
                </span>
              </a>
            )}
            <a href={`mailto:${company.email}`} className="card flex items-center gap-4 p-4 transition-colors hover:border-aqua-300">
              <span className="grid size-11 place-items-center rounded-2xl bg-aqua-100 text-aqua-700">
                <Mail className="size-5" aria-hidden />
              </span>
              <span>
                <span className="block text-sm text-ink-500">E-Mail</span>
                <span className="block font-bold">{company.email}</span>
              </span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={80} className="lg:col-span-7">
          <div className="card p-6 shadow-[0_30px_80px_-40px_rgb(11_34_54/0.35)] sm:p-10">
            {status === 'success' ? (
              <div className="flex min-h-[26rem] flex-col items-start justify-center" role="status">
                <span className="grid size-14 place-items-center rounded-full bg-aqua-100 text-aqua-700">
                  <Check className="size-6" aria-hidden />
                </span>
                <h3 className="mt-6 text-3xl font-extrabold">Vielen Dank!</h3>
                <p className="mt-3 max-w-md text-lg text-ink-700">
                  Ihre Anfrage ist bei uns angekommen. Wir melden uns so rasch wie möglich bei Ihnen.
                </p>
                <button type="button" onClick={() => setStatus('idle')} className="btn btn-ghost mt-8">
                  Weitere Anfrage senden
                </button>
              </div>
            ) : (
              <form name="anfrage" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
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
                  <label htmlFor="name" className={label}>Name *</label>
                  <input id="name" name="name" required autoComplete="name" className={field} placeholder="Vor- und Nachname" />
                </div>
                <div>
                  <label htmlFor="telefon" className={label}>Telefon *</label>
                  <input id="telefon" name="telefon" type="tel" required autoComplete="tel" className={field} placeholder="079 123 45 67" />
                </div>
                <div>
                  <label htmlFor="email" className={label}>E-Mail</label>
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
                  <textarea id="nachricht" name="nachricht" rows={4} className={`${field} resize-y`} placeholder="z. B. 3.5-Zimmer-Wohnung, 80 m², Abgabe an die Verwaltung am …" />
                </div>
                <label className="flex items-start gap-3 text-sm text-ink-700 sm:col-span-2">
                  <input type="checkbox" name="datenschutz" required className="mt-0.5 size-5 shrink-0 accent-aqua-500" />
                  <span>
                    Ich bin einverstanden, dass meine Angaben zur Bearbeitung der Anfrage verwendet werden (
                    <Link to="/datenschutz" className="underline underline-offset-4">Datenschutz</Link>).
                  </span>
                </label>
                <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center">
                  <button type="submit" disabled={status === 'sending'} className="btn btn-primary">
                    {status === 'sending' && <Loader2 className="size-4 animate-spin" aria-hidden />}
                    Offerte anfragen
                  </button>
                  {status === 'error' && (
                    <p className="text-sm text-red-700" role="alert">
                      Senden hat nicht geklappt. Bitte rufen Sie uns an: {company.phone}
                    </p>
                  )}
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
