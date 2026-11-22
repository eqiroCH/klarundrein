import { Link } from 'react-router-dom'
import { ArrowRight, Check, MapPin, Phone } from 'lucide-react'
import Reveal from '../components/Reveal'
import FaqList from '../components/Faq'
import Contact from '../components/Contact'
import HeroVideo from '../components/HeroVideo'
import ServiceCard from '../components/ServiceCard'
import { areas, company, generalFaqs, heroCards, homeOrder, phoneHref, promises, services, stats } from '../data/site'
import { useSeo } from '../seo'

const ordered = homeOrder.map((slug) => services.find((s) => s.slug === slug)!)

export default function Home() {
  useSeo('/')

  return (
    <>
      {/* Hero: Video-Hintergrund, Slogan, Glas-Kacheln – wie auf der bisherigen Website */}
      <section className="relative isolate overflow-hidden bg-[#1d1e20] text-white">
        <img
          src="/images/hero.webp"
          srcSet="/images/hero-sm.webp 800w, /images/hero.webp 1600w"
          sizes="100vw"
          alt=""
          width={1600}
          height={843}
          fetchPriority="high"
          className="absolute inset-0 -z-20 size-full object-cover"
        />
        <div className="absolute inset-0 -z-20">
          <HeroVideo />
        </div>
        <div aria-hidden className="absolute inset-0 -z-10 bg-[#1d1e20]/60" />
        <div aria-hidden className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-[#1d1e20]/80 to-transparent" />

        <div className="container-x flex min-h-[100svh] flex-col pt-32 pb-10 sm:pt-36">
          <div className="mx-auto flex max-w-4xl flex-1 flex-col items-center justify-center text-center">
            <h1>
              <span className="eyebrow block text-brand-300">Reinigungsfirma in Adliswil</span>
              <span className="mt-5 block text-[2.7rem] leading-[1.08] font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
                Sauberkeit schafft Vertrauen.
              </span>
            </h1>
            <p className="mt-6 max-w-3xl text-[1.05rem] leading-relaxed text-white/85 sm:text-lg">
              Die {company.name} ist Ihr zuverlässiger Partner für gründliche und sorgfältige Reinigungsarbeiten in Adliswil
              und im gesamten Kanton Zürich. Ob Büro, Treppenhaus oder Wohnung – wir sorgen für Sauberkeit, auf die Sie sich
              verlassen können.
            </p>
            <div className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Link to="/#kontakt" className="btn btn-light">
                Kontaktieren Sie uns
              </Link>
              <a href={phoneHref} className="btn btn-outline-light">
                <Phone className="size-4" aria-hidden /> {company.phone}
              </a>
            </div>
          </div>

          <ul className="mt-14 grid gap-3 sm:grid-cols-3 sm:gap-4">
            {heroCards.map((c) => (
              <li key={c.title}>
                <Link to={c.to} className="glass flex h-full flex-col items-center justify-center rounded-2xl px-5 py-6 text-center transition-colors hover:bg-white/20">
                  <h2 className="text-[1.05rem] leading-snug font-semibold">{c.title}</h2>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-white/80">{c.text}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Über uns */}
      <section id="ueber-uns" className="py-20 sm:py-28">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <p className="eyebrow text-brand-700">Über uns</p>
              <h2 className="h-section mt-4 text-brand-400">Ihr zuverlässiger Reinigungspartner in Adliswil</h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="text-lg leading-relaxed text-ink-700">
                Die {company.name} wurde im Jahr {company.founded} gegründet und steht für zuverlässige, gründliche und
                sorgfältige Reinigungsarbeiten. Wir betreuen Privat- und Geschäftskunden in Adliswil und im gesamten Kanton
                Zürich.
              </p>
              <dl className="mt-10 grid grid-cols-2 gap-6">
                {stats.map((s) => (
                  <div key={s.label}>
                    <dt className="sr-only">{s.label}</dt>
                    <dd className="text-5xl font-semibold text-brand-400 sm:text-6xl">{s.value}</dd>
                    <dd className="mt-2 text-ink-500">{s.label}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal className="mt-14 overflow-hidden rounded-2xl sm:mt-20">
            <img
              src="/images/ueber-uns.webp"
              srcSet="/images/ueber-uns-sm.webp 800w, /images/ueber-uns.webp 1600w"
              sizes="(min-width: 1152px) 1088px, 100vw"
              alt="Reinigungskraft wischt den Boden eines hellen Eingangsbereichs"
              width={1600}
              height={720}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full object-cover sm:aspect-[16/7]"
            />
          </Reveal>

          <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal className="space-y-5 text-lg leading-relaxed text-ink-700">
              <p>
                Sauberkeit, Pünktlichkeit und klare Absprachen sind für uns selbstverständlich. Wir arbeiten strukturiert, mit
                hohem Qualitätsanspruch und passen unsere Leistungen individuell an die Bedürfnisse unserer Kundinnen und Kunden
                an.
              </p>
              <p>
                Unser Ziel ist es, durch zuverlässige Qualität und transparente Zusammenarbeit eine langfristige
                Kundenzufriedenheit zu gewährleisten.
              </p>
              <ul className="grid gap-3 pt-2 text-base font-medium text-ink sm:grid-cols-2">
                {['Sauberkeit', 'Pünktlichkeit', 'Klare Absprachen', 'Hoher Qualitätsanspruch'].map((v) => (
                  <li key={v} className="flex items-center gap-3">
                    <span className="grid size-7 place-items-center rounded-full bg-brand-50 text-brand-700">
                      <Check className="size-4" strokeWidth={2.5} aria-hidden />
                    </span>
                    {v}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={80} className="rounded-2xl bg-cloud-50 p-7 sm:p-9">
              <h3 className="flex items-center gap-2 text-xl font-semibold">
                <MapPin className="size-5 text-brand-500" aria-hidden /> Unser Einzugsgebiet
              </h3>
              <p className="mt-3 text-ink-700">
                Von unserem Sitz an der {company.street} in {company.city} sind wir rasch bei Ihnen:
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {areas.map((a) => (
                  <li key={a} className="rounded-full border border-cloud-200 bg-white px-3.5 py-1.5 text-sm font-medium">
                    {a}
                  </li>
                ))}
                <li className="rounded-full bg-brand-600 px-3.5 py-1.5 text-sm font-medium text-white">ganzer Kanton Zürich</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Leistungen – dunkler Bereich mit Bildkarten wie auf der bisherigen Website */}
      <section id="leistungen" className="bg-navy-950 py-20 text-white sm:py-28">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="h-section">Unsere Leistungen</h2>
            <p className="mt-5 text-lg leading-relaxed text-white/80">
              Professionelle Reinigungsdienste, die auf Ihre Bedürfnisse zugeschnitten sind und jedes Mal für eine makellose
              und einladende Umgebung sorgen.
            </p>
          </Reveal>
          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {ordered.map((s, i) => (
              <Reveal as="li" key={s.slug} delay={i * 60}>
                <ServiceCard to={`/${s.slug}`} image={s.image} imageAlt={s.imageAlt} title={s.cardTitle} text={s.short} />
              </Reveal>
            ))}
            <Reveal as="li" delay={ordered.length * 60}>
              <ServiceCard
                to="/#kontakt"
                image="individuell"
                imageAlt="Hände in Handschuhen reinigen einen Arbeitsplatz"
                title="Individuelle Anfragen"
                text="Für spezielle Reinigungswünsche oder individuelle Anforderungen stehen wir Ihnen gerne zur Verfügung."
                cta="Anfrage senden"
              />
            </Reveal>
          </ul>
        </div>
      </section>

      {/* Versprechen – im Stil des bisherigen Bewertungsbereichs */}
      <section className="relative isolate overflow-hidden py-20 text-white sm:py-28">
        <img
          src="/images/schaum.webp"
          srcSet="/images/schaum-sm.webp 900w, /images/schaum.webp 1920w"
          sizes="100vw"
          alt=""
          width={1920}
          height={900}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 -z-20 size-full object-cover"
        />
        <div aria-hidden className="absolute inset-0 -z-10 bg-navy-950/75" />
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="h-section">Darauf können Sie sich verlassen</h2>
          </Reveal>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {promises.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 60} className="glass rounded-2xl p-6 text-center">
                <span className="mx-auto grid size-11 place-items-center rounded-full bg-white text-brand-700">
                  <Check className="size-5" strokeWidth={2.5} aria-hidden />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-white/80">{p.text}</p>
              </Reveal>
            ))}
          </ul>
          <Reveal className="mt-12 text-center">
            <Link to="/umzugsreinigung-adliswil" className="btn btn-light !whitespace-normal text-center">
              Umzugsreinigung mit Abnahmegarantie <ArrowRight className="size-4" aria-hidden />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 sm:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow text-brand-700">Häufige Fragen</p>
            <h2 className="h-section mt-4 text-brand-400">Gut zu wissen</h2>
            <p className="mt-5 text-lg text-ink-700">Ihre Frage ist nicht dabei? Rufen Sie uns an – wir helfen gerne.</p>
            <a href={phoneHref} className="btn btn-outline mt-7">
              <Phone className="size-4 text-brand-600" aria-hidden /> {company.phone}
            </a>
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
