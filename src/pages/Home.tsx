import { Link } from 'react-router-dom'
import { ArrowRight, BadgeCheck, CalendarCheck, Check, MapPin, Phone, ShieldCheck, Sparkles } from 'lucide-react'
import Reveal from '../components/Reveal'
import ServiceIcon from '../components/ServiceIcon'
import FaqList from '../components/Faq'
import Contact from '../components/Contact'
import { areas, company, generalFaqs, phoneHref, services, steps } from '../data/site'
import { useSeo } from '../seo'

function HeroVisual() {
  const items = ['Küche & Backofen', 'Bad entkalkt', 'Fenster & Storen', 'Böden & Sockelleisten']
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none" aria-hidden>
      <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-br from-aqua-100 via-white to-sky-soft" />
      <div className="card animate-float p-6 shadow-[0_40px_90px_-40px_rgb(11_34_54/0.45)] sm:p-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-ink-500">Wohnungsabgabe</p>
            <p className="text-xl font-extrabold">3.5 Zimmer · Adliswil</p>
          </div>
          <span className="rounded-full bg-aqua-100 px-3 py-1 text-sm font-bold text-aqua-700">Abgenommen</span>
        </div>
        <ul className="mt-6 space-y-3">
          {items.map((i) => (
            <li key={i} className="flex items-center gap-3 rounded-2xl bg-mist-50 px-4 py-3 font-medium">
              <span className="grid size-6 place-items-center rounded-full bg-aqua-500 text-white">
                <Check className="size-3.5" strokeWidth={3} />
              </span>
              {i}
            </li>
          ))}
        </ul>
      </div>
      <div className="card absolute -bottom-6 -left-4 flex items-center gap-3 px-4 py-3 shadow-xl sm:-left-10">
        <ShieldCheck className="size-8 text-aqua-500" />
        <div>
          <p className="text-sm font-extrabold">Abnahmegarantie</p>
          <p className="text-xs text-ink-500">Nachreinigung kostenlos</p>
        </div>
      </div>
      <Sparkles className="absolute -top-5 -right-2 size-10 text-aqua-300" />
    </div>
  )
}

export default function Home() {
  useSeo('/')

  return (
    <>
      {/* Hero */}
      <section className="bg-bubbles relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
        <div className="container-x grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-aqua-200 bg-white/70 px-3.5 py-1.5 text-sm font-semibold text-aqua-700">
              <MapPin className="size-4" aria-hidden /> Reinigungsfirma in Adliswil
            </p>
            <h1 className="mt-6 text-[2.6rem] leading-[1.05] font-extrabold tracking-tight text-balance sm:text-6xl">
              Reinigung in Adliswil, <span className="text-aqua-500">die bei der Abnahme besteht.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-700 sm:text-xl">
              Umzugsreinigung mit Abnahmegarantie, Wohnungs-, Büro-, Treppenhaus- und Baureinigung – gründlich, pünktlich
              und mit klaren Absprachen. Für Adliswil, die Nachbargemeinden und den ganzen Kanton Zürich.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link to="/#kontakt" className="btn btn-primary">
                Kostenlose Offerte <ArrowRight className="size-4" aria-hidden />
              </Link>
              <a href={phoneHref} className="btn btn-ghost">
                <Phone className="size-4 text-aqua-600" aria-hidden /> {company.phone}
              </a>
            </div>
            <ul className="mt-10 grid gap-3 text-[0.95rem] font-medium text-ink-700 sm:grid-cols-3">
              {['Abnahmegarantie', 'Offerte gratis', 'Lokal in Adliswil'].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <BadgeCheck className="size-5 text-aqua-500" aria-hidden /> {t}
                </li>
              ))}
            </ul>
          </div>
          <HeroVisual />
        </div>
      </section>

      {/* Leistungen */}
      <section id="leistungen" className="py-20 sm:py-28">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-aqua-600">Leistungen</p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">
              Eine Reinigungsfirma für alles, was sauber werden soll.
            </h2>
          </Reveal>
          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal as="li" key={s.slug} delay={i * 60}>
                <Link
                  to={`/${s.slug}`}
                  className="card group flex h-full flex-col p-7 transition-all duration-300 hover:-translate-y-1 hover:border-aqua-200 hover:shadow-[0_24px_60px_-30px_rgb(11_34_54/0.35)]"
                >
                  <span className="grid size-12 place-items-center rounded-2xl bg-aqua-50 text-aqua-600 transition-colors group-hover:bg-aqua-500 group-hover:text-white">
                    <ServiceIcon name={s.icon} className="size-6" />
                  </span>
                  <h3 className="mt-6 text-xl font-extrabold">{s.name}</h3>
                  <p className="mt-2 flex-1 leading-relaxed text-ink-700">{s.short}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 font-semibold text-aqua-600">
                    Mehr erfahren <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                  </span>
                </Link>
              </Reveal>
            ))}
            <Reveal as="li" delay={services.length * 60}>
              <div className="flex h-full flex-col justify-between rounded-3xl bg-ink-950 p-7 text-white">
                <div>
                  <h3 className="text-xl font-extrabold">Etwas anderes?</h3>
                  <p className="mt-2 leading-relaxed text-ink-300">
                    Spezielle Reinigungswünsche oder individuelle Anforderungen – fragen Sie uns einfach.
                  </p>
                </div>
                <Link to="/#kontakt" className="btn btn-primary mt-6 self-start">
                  Anfrage senden
                </Link>
              </div>
            </Reveal>
          </ul>
        </div>
      </section>

      {/* Abnahmegarantie */}
      <section className="relative overflow-hidden bg-ink-950 py-20 text-white sm:py-28">
        <div aria-hidden className="absolute -top-40 -right-40 size-[36rem] rounded-full bg-aqua-500/20 blur-[120px]" />
        <div className="container-x relative grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow text-aqua-300">Abnahmegarantie</p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">
              Wohnung abgeben ohne Nachreinigung.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-300">
              Bei der Umzugsreinigung gilt unsere Abnahmegarantie: Beanstandet die Verwaltung bei der Übergabe etwas an der
              Reinigung, reinigen wir kostenlos nach – bis die Wohnung abgenommen ist.
            </p>
            <Link to="/umzugsreinigung-adliswil" className="btn btn-primary mt-9">
              Zur Umzugsreinigung <ArrowRight className="size-4" aria-hidden />
            </Link>
          </Reveal>
          <Reveal delay={100}>
            <ul className="grid gap-4 sm:grid-cols-2">
              {[
                ['Nach Schweizer Abgabe-Checkliste', 'Wir reinigen dort, wo Verwaltungen genau hinschauen.'],
                ['Auf Wunsch bei der Abnahme dabei', 'Wir klären allfällige Punkte direkt vor Ort.'],
                ['Alles inklusive', 'Reinigungsmittel, Geräte und Material bringen wir mit.'],
                ['Klare Offerte', 'Sie wissen vorher, was die Reinigung kostet.'],
              ].map(([t, d]) => (
                <li key={t} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                  <Check className="size-6 text-aqua-300" aria-hidden />
                  <p className="mt-4 font-bold">{t}</p>
                  <p className="mt-1.5 text-ink-300">{d}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Ablauf */}
      <section id="ablauf" className="py-20 sm:py-28">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-aqua-600">So einfach geht's</p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">In vier Schritten zur sauberen Wohnung.</h2>
          </Reveal>
          <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 70} className="card p-7">
                <span className="text-5xl font-extrabold text-aqua-200">0{i + 1}</span>
                <h3 className="mt-4 text-xl font-extrabold">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-700">{s.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Über uns + Einzugsgebiet */}
      <section id="einzugsgebiet" className="bg-mist-50 py-20 sm:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow text-aqua-600">Über uns</p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">Ihre Reinigungsfirma aus Adliswil.</h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-700">
              <p>
                Die {company.name} wurde {company.founded} in Adliswil gegründet. Wir betreuen Privat- und Geschäftskunden in
                Adliswil und im ganzen Kanton Zürich.
              </p>
              <p>
                Sauberkeit, Pünktlichkeit und klare Absprachen sind für uns selbstverständlich. Wir arbeiten strukturiert, mit
                hohem Qualitätsanspruch und passen unsere Leistungen Ihren Bedürfnissen an.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-3 text-ink-700">
              <CalendarCheck className="size-5 text-aqua-500" aria-hidden />
              Eingetragen im Handelsregister des Kantons Zürich · {company.uid}
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="card p-7 sm:p-9">
              <h3 className="flex items-center gap-2 text-xl font-extrabold">
                <MapPin className="size-5 text-aqua-500" aria-hidden /> Einzugsgebiet
              </h3>
              <p className="mt-3 text-ink-700">
                Von unserem Sitz an der {company.street} in {company.city} sind wir rasch bei Ihnen:
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {areas.map((a) => (
                  <li key={a} className="rounded-full border border-ink-100 bg-mist-50 px-3.5 py-1.5 text-sm font-semibold">
                    {a}
                  </li>
                ))}
                <li className="rounded-full bg-aqua-500 px-3.5 py-1.5 text-sm font-semibold text-white">ganzer Kanton Zürich</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 sm:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow text-aqua-600">Häufige Fragen</p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-balance">Gut zu wissen.</h2>
            <p className="mt-4 text-lg text-ink-700">Ihre Frage ist nicht dabei? Rufen Sie uns an – wir helfen gerne.</p>
          </Reveal>
          <Reveal delay={80} className="lg:col-span-8">
            <FaqList faqs={generalFaqs} />
          </Reveal>
        </div>
      </section>

      <Contact />
    </>
  )
}
