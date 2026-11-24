import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, BadgeCheck, Check, Clock3, MapPin, Phone, ReceiptText, ShieldCheck, SprayCan } from 'lucide-react'
import Reveal from '../components/Reveal'
import { FaqSection } from '../components/Faq'
import Contact from '../components/Contact'
import HeroVideo from '../components/HeroVideo'
import Marquee from '../components/Marquee'
import Process from '../components/Process'
import AreaBand from '../components/AreaBand'
import ServiceTile from '../components/ServiceTile'
import ServiceGrid from '../components/ServiceGrid'
import Logo from '../components/Logo'
import { Eyebrow, Sparkle } from '../components/Icons'
import { company, generalFaqs, heroCards, phoneHref, promises, services } from '../data/site'
import { useSeo } from '../seo'

const bySlug = (slug: string) => services.find((s) => s.slug === slug)!
const promiseIcons = [ShieldCheck, Clock3, SprayCan, ReceiptText]

export default function Home() {
  useSeo('/')
  const umzug = bySlug('umzugsreinigung-adliswil')
  const rest = ['wohnungsreinigung-adliswil', 'bueroreinigung-adliswil', 'treppenhausreinigung-adliswil', 'baureinigung-adliswil'].map(bySlug)

  return (
    <>
      {/* Hero: Video der bisherigen Website, Slogan, Glas-Leiste */}
      <section className="relative isolate overflow-hidden bg-navy-950 text-white">
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
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950/95 via-navy-950/70 to-navy-950/30" />
        <div aria-hidden className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-navy-950 to-transparent" />

        <div className="container-x flex min-h-[100svh] flex-col pt-32 pb-8 sm:pt-40 sm:pb-10">
          <div className="flex max-w-3xl flex-1 flex-col justify-center py-8">
            <h1 className="animate-fade-up">
              <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white/90">
                <MapPin className="size-4 text-brand-300" aria-hidden /> Reinigungsfirma in Adliswil
              </span>
              <span className="mt-6 block text-[2.9rem] leading-[1.02] font-semibold tracking-tight sm:text-7xl lg:text-[5.4rem]">
                Sauberkeit schafft <span className="text-gradient">Vertrauen.</span>
              </span>
            </h1>
            <p className="mt-7 max-w-2xl animate-fade-up text-[1.05rem] leading-relaxed text-white/80 [animation-delay:120ms] sm:text-lg">
              Die {company.name} ist Ihr zuverlässiger Partner für gründliche und sorgfältige Reinigungsarbeiten in Adliswil
              und im gesamten Kanton Zürich. Ob Büro, Treppenhaus oder Wohnung – wir sorgen für Sauberkeit, auf die Sie sich
              verlassen können.
            </p>
            <div className="mt-9 flex animate-fade-up flex-col gap-3 [animation-delay:220ms] sm:flex-row">
              <Link to="/#kontakt" className="btn btn-brand">
                Kostenlose Offerte <ArrowRight className="size-4" aria-hidden />
              </Link>
              <a href={phoneHref} className="btn btn-glass">
                <Phone className="size-4" aria-hidden /> {company.phone}
              </a>
            </div>
            <ul className="mt-9 flex animate-fade-up flex-wrap gap-x-6 gap-y-2 text-[0.95rem] text-white/80 [animation-delay:320ms]">
              {['Abnahmegarantie auf Wunsch', 'Offerte kostenlos', 'Lokal in Adliswil'].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <BadgeCheck className="size-5 text-brand-300" aria-hidden /> {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 animate-fade-up [animation-delay:420ms] sm:hidden">
            <p className="eyebrow mb-3 text-brand-300">
              <Sparkle className="size-3.5" /> Unsere Leistungen
            </p>
            <ServiceGrid services={services} variant="hero" />
          </div>
          <ul className="glass mt-10 hidden animate-fade-up overflow-hidden rounded-3xl [animation-delay:420ms] sm:grid sm:grid-cols-3">
            {heroCards.map((c, i) => (
              <li key={c.title} className="border-white/10 not-first:border-t sm:not-first:border-t-0 sm:not-first:border-l">
                <Link to={c.to} className="group relative flex h-full flex-col p-6 transition-colors hover:bg-white/[0.07]">
                  <span className="text-sm font-medium text-brand-300">0{i + 1}</span>
                  <h2 className="mt-2 pr-8 text-[1.05rem] leading-snug font-semibold">{c.title}</h2>
                  <p className="mt-1.5 text-[0.95rem] leading-relaxed text-white/70">{c.text}</p>
                  <ArrowUpRight className="absolute top-6 right-6 size-5 text-white/50 transition-all group-hover:rotate-45 group-hover:text-white" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Marquee />

      {/* Über uns */}
      <section id="ueber-uns" className="overflow-hidden py-20 sm:py-28">
        <div className="container-x grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-12">
          <Reveal className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
            <Sparkle className="absolute -top-6 right-6 size-10 text-brand-300" />
            <Sparkle className="absolute -top-1 right-0 size-5 text-brand-500" />
            <img
              src="/images/ueber-uns-portrait.webp"
              srcSet="/images/ueber-uns-portrait-sm.webp 600w, /images/ueber-uns-portrait.webp 1000w"
              sizes="(min-width: 1024px) 420px, 90vw"
              alt="Reinigungskraft wischt den Boden eines Eingangsbereichs"
              width={1000}
              height={1200}
              loading="lazy"
              decoding="async"
              className="aspect-[5/6] w-full rounded-[2rem] object-cover"
            />
            <div className="absolute -bottom-6 left-4 flex items-center gap-3 rounded-2xl bg-white p-3 pr-5 shadow-[0_24px_60px_-24px_rgb(13_27_43/0.5)] sm:-left-6">
              <Logo className="size-14" />
              <div>
                <p className="font-semibold text-navy-950">Gegründet {company.founded}</p>
                <p className="text-sm text-ink-500">in Adliswil, Kanton Zürich</p>
              </div>
            </div>
            <div className="absolute top-8 right-3 flex items-center gap-2.5 rounded-2xl bg-brand-500 px-4 py-3 text-white shadow-[0_20px_40px_-18px_rgb(0_137_204/0.9)] sm:-right-6">
              <ShieldCheck className="size-6" aria-hidden />
              <span className="text-sm leading-tight font-semibold">
                Abnahmegarantie
                <br />
                <span className="font-normal text-white/85">auf Wunsch</span>
              </span>
            </div>
          </Reveal>

          <Reveal delay={80} className="lg:col-span-7 lg:pl-10">
            <Eyebrow>Über uns</Eyebrow>
            <h2 className="h-section mt-4 text-navy-950">
              Ihr zuverlässiger <span className="text-brand-500">Reinigungspartner</span> in Adliswil
            </h2>
            <p className="lead mt-6 text-ink-700">
              Die {company.name} wurde im Jahr {company.founded} gegründet und steht für zuverlässige, gründliche und
              sorgfältige Reinigungsarbeiten. Wir betreuen Privat- und Geschäftskunden in Adliswil und im gesamten Kanton
              Zürich.
            </p>
            <p className="mt-4 leading-relaxed text-ink-500">
              Sauberkeit, Pünktlichkeit und klare Absprachen sind für uns selbstverständlich. Wir arbeiten strukturiert, mit
              hohem Qualitätsanspruch und passen unsere Leistungen individuell an die Bedürfnisse unserer Kundinnen und Kunden
              an. Unser Ziel ist es, durch zuverlässige Qualität und transparente Zusammenarbeit eine langfristige
              Kundenzufriedenheit zu gewährleisten.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {['Sauberkeit', 'Pünktlichkeit', 'Klare Absprachen', 'Hoher Qualitätsanspruch'].map((v) => (
                <li key={v} className="flex items-center gap-3 font-medium">
                  <span className="grid size-7 place-items-center rounded-full bg-brand-500 text-white">
                    <Check className="size-4" strokeWidth={2.5} aria-hidden />
                  </span>
                  {v}
                </li>
              ))}
            </ul>
            <dl className="mt-10 grid grid-cols-3 divide-x divide-cloud-200 rounded-3xl bg-cloud-50 py-6 ring-1 ring-cloud-200">
              {[
                { value: String(company.founded), label: 'Gegründet in Adliswil' },
                { value: String(services.length), label: 'Reinigungsleistungen' },
                { value: 'Mo–Fr', label: '07:30–18:00 erreichbar' },
              ].map((s) => (
                <div key={s.label} className="flex flex-col-reverse px-4 text-center sm:px-6">
                  <dt className="mt-1 text-xs leading-snug text-ink-500 sm:text-sm">{s.label}</dt>
                  <dd className="text-3xl font-semibold text-brand-500 sm:text-4xl">{s.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Leistungen – Bento-Raster auf Navy */}
      <section id="leistungen" className="relative isolate overflow-hidden bg-navy-950 py-20 text-white sm:py-28">
        <div aria-hidden className="dots absolute inset-0 -z-10" />
        <div aria-hidden className="absolute -top-60 left-1/2 -z-10 size-[44rem] -translate-x-1/2 rounded-full bg-brand-500/20 blur-[140px]" />
        <div className="container-x">
          <Reveal className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <Eyebrow className="text-brand-300">Leistungen</Eyebrow>
              <h2 className="h-section mt-4">Unsere Leistungen</h2>
            </div>
            <p className="lead max-w-md text-white/70">
              Professionelle Reinigungsdienste, die auf Ihre Bedürfnisse zugeschnitten sind und jedes Mal für eine makellose
              und einladende Umgebung sorgen.
            </p>
          </Reveal>

          <Reveal className="mt-12">
            <ServiceGrid services={services} variant="dark" />
          </Reveal>

          <p className="eyebrow mt-16 text-brand-300">
            <Sparkle className="size-3.5" /> Unsere Schwerpunkte
          </p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:auto-rows-[19rem] lg:grid-cols-3 lg:gap-5">
            <Reveal as="li" className="sm:col-span-2 lg:row-span-2">
              <ServiceTile
                to={`/${umzug.slug}`}
                image={`/images/${umzug.image}-wide.webp`}
                srcSet={`/images/${umzug.image}-wide-sm.webp 900w, /images/${umzug.image}-wide.webp 1920w`}
                sizes="(min-width: 1024px) 66vw, 100vw"
                imageAlt={umzug.imageAlt}
                title={umzug.cardTitle}
                text={umzug.short}
                badge="Abnahmegarantie auf Wunsch"
                large
                className="min-h-[24rem]"
              />
            </Reveal>
            {rest.map((s, i) => (
              <Reveal as="li" key={s.slug} delay={(i + 1) * 60}>
                <ServiceTile to={`/${s.slug}`} image={`/images/${s.image}.webp`} imageAlt={s.imageAlt} title={s.cardTitle} text={s.short} />
              </Reveal>
            ))}
            <Reveal as="li" delay={300} className="sm:col-span-2 lg:col-span-1">
              <Link
                to="/#kontakt"
                className="group relative isolate flex h-full min-h-[18rem] flex-col overflow-hidden rounded-3xl bg-brand-500 p-6 transition-colors hover:bg-brand-600 sm:p-7"
              >
                <Sparkle className="absolute -right-6 -bottom-6 -z-10 size-48 text-white/10 transition-transform duration-700 group-hover:rotate-45" />
                <Sparkle className="size-9" />
                <h3 className="mt-auto text-xl font-semibold sm:text-2xl">Individuelle Anfragen</h3>
                <p className="mt-2 leading-relaxed text-white/85">
                  Für spezielle Reinigungswünsche oder individuelle Anforderungen stehen wir Ihnen gerne zur Verfügung.
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 font-medium">
                  Anfrage senden <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                </span>
              </Link>
            </Reveal>
          </ul>
        </div>
      </section>

      {/* Versprechen – Hintergrundbild des bisherigen Bewertungsbereichs */}
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
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950/95 via-navy-950/85 to-navy-950/70" />
        <div className="container-x grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <Eyebrow className="text-brand-300">Unser Versprechen</Eyebrow>
            <h2 className="h-section mt-4">Darauf können Sie sich verlassen</h2>
            <p className="lead mt-5 text-white/75">
              Sauberkeit, Pünktlichkeit und klare Absprachen sind für uns selbstverständlich – vom ersten Anruf bis zur
              Abnahme.
            </p>
            <Link to="/umzugsreinigung-adliswil" className="btn btn-light mt-8 !whitespace-normal text-center">
              Zur Umzugsreinigung <ArrowRight className="size-4" aria-hidden />
            </Link>
          </Reveal>
          <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {promises.map((p, i) => {
              const Icon = promiseIcons[i]
              return (
                <Reveal as="li" key={p.title} delay={i * 70} className="glass rounded-3xl p-6 sm:p-7">
                  <span className="grid size-12 place-items-center rounded-2xl bg-white/10 text-brand-300">
                    <Icon className="size-6" aria-hidden />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 leading-relaxed text-white/75">{p.text}</p>
                </Reveal>
              )
            })}
          </ul>
        </div>
      </section>

      <Process id="ablauf" />
      <AreaBand />
      <FaqSection title="Gut zu wissen" faqs={generalFaqs} />
      <Contact />
    </>
  )
}
