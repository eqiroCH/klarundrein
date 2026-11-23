import { Link } from 'react-router-dom'
import { ArrowRight, BadgeCheck, Check, ChevronRight, Phone, ShieldCheck } from 'lucide-react'
import Reveal from '../components/Reveal'
import { FaqSection } from '../components/Faq'
import Contact from '../components/Contact'
import JsonLd from '../components/JsonLd'
import Process from '../components/Process'
import AreaBand from '../components/AreaBand'
import ServiceGrid from '../components/ServiceGrid'
import { Eyebrow, Sparkle } from '../components/Icons'
import { areas, company, phoneHref, services, soft, type Service } from '../data/site'
import { useSeo } from '../seo'

export default function ServicePage({ service: s }: { service: Service }) {
  const path = `/${s.slug}`
  useSeo(path)
  const url = `${company.url}${path}`
  const others = services.filter((o) => o.slug !== s.slug)
  const isMove = s.slug.startsWith('umzug')

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Service',
              name: s.name,
              serviceType: s.name,
              description: s.metaDescription,
              url,
              image: `${company.url}/images/${s.image}-wide.webp`,
              provider: { '@id': `${company.url}/#business` },
              areaServed: areas.map((a) => ({ '@type': 'City', name: a })),
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Startseite', item: `${company.url}/` },
                { '@type': 'ListItem', position: 2, name: s.name, item: url },
              ],
            },
          ],
        }}
      />

      {/* Seitenkopf mit Foto der Leistung */}
      <section className="relative isolate overflow-hidden bg-navy-950 text-white">
        <img
          src={`/images/${s.image}-wide.webp`}
          srcSet={`/images/${s.image}-wide-sm.webp 900w, /images/${s.image}-wide.webp 1920w`}
          sizes="100vw"
          alt=""
          width={1920}
          height={900}
          fetchPriority="high"
          className="absolute inset-0 -z-20 size-full object-cover"
        />
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950/95 via-navy-950/80 to-navy-950/40" />
        <div aria-hidden className="absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-gradient-to-t from-navy-950/80 to-transparent" />
        <div className="container-x pt-32 pb-16 sm:pt-44 sm:pb-24">
          <nav aria-label="Brotkrümel" className="animate-fade-up text-sm text-white/70">
            <ol className="flex items-center gap-1.5">
              <li>
                <Link to="/" className="hover:text-white">Startseite</Link>
              </li>
              <ChevronRight className="size-4" aria-hidden />
              <li aria-current="page" className="font-medium text-white">{s.name}</li>
            </ol>
          </nav>
          <div className="mt-8 grid grid-cols-1 grid-cols-1 items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="glass inline-flex animate-fade-up items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white/90">
                <Sparkle className="size-3.5 text-brand-300" /> {s.teaser}
              </p>
              <h1 className="mt-6 animate-fade-up text-[2.15rem] leading-[1.08] font-semibold tracking-tight text-balance [animation-delay:80ms] min-[400px]:text-[2.4rem] sm:text-6xl">
                {soft(s.h1)}
              </h1>
              <p className="mt-6 max-w-2xl animate-fade-up text-lg leading-relaxed text-white/80 [animation-delay:160ms] sm:text-xl">{s.lead}</p>
              <div className="mt-9 flex animate-fade-up flex-col gap-3 [animation-delay:240ms] sm:flex-row">
                <Link to={`${path}#kontakt`} className="btn btn-brand">
                  Kostenlose Offerte <ArrowRight className="size-4" aria-hidden />
                </Link>
                <a href={phoneHref} className="btn btn-glass">
                  <Phone className="size-4" aria-hidden /> {company.phone}
                </a>
              </div>
            </div>
            <div className="glass animate-fade-up rounded-3xl p-6 [animation-delay:320ms] lg:col-span-4">
              <p className="text-sm font-semibold tracking-[0.14em] text-brand-300 uppercase">Ideal für</p>
              <ul className="mt-4 grid gap-3">
                {s.idealFor.map((t) => (
                  <li key={t} className="flex items-center gap-3 font-medium">
                    <BadgeCheck className="size-5 shrink-0 text-brand-300" aria-hidden /> {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="self-start lg:sticky lg:top-32 lg:col-span-5">
            <Eyebrow>{s.cardTitle}</Eyebrow>
            <h2 className="mt-4 text-3xl leading-tight font-semibold tracking-tight text-balance text-navy-950 sm:text-4xl">{s.short}</h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-700">
              {s.intro.map((p) => (
                <p key={p.slice(0, 20)}>{p}</p>
              ))}
            </div>
            {isMove && (
              <div className="mt-8 flex gap-4 rounded-3xl bg-navy-950 p-6 text-white">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-brand-500">
                  <ShieldCheck className="size-6" aria-hidden />
                </span>
                <p>
                  <strong className="block text-lg font-semibold">Abnahmegarantie inklusive</strong>
                  <span className="text-white/75">Bemängelt die Verwaltung etwas an der Reinigung, reinigen wir kostenlos nach.</span>
                </p>
              </div>
            )}
          </Reveal>
          <Reveal delay={80} className="lg:col-span-7">
            <div className="overflow-hidden rounded-[2rem] ring-1 ring-cloud-200">
              <img
                src={`/images/${s.image}.webp`}
                alt={s.imageAlt}
                width={800}
                height={600}
                loading="lazy"
                decoding="async"
                className="aspect-[16/9] w-full object-cover"
              />
              <div className="bg-cloud-50 p-7 sm:p-10">
                <h2 className="text-2xl font-semibold text-navy-950">{soft(s.includesTitle)}</h2>
                <ul className="mt-6 grid gap-4">
                  {s.includes.map((i) => (
                    <li key={i} className="flex gap-3 leading-relaxed text-ink-700">
                      <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-brand-500 text-white">
                        <Check className="size-3.5" strokeWidth={3} aria-hidden />
                      </span>
                      {i}
                    </li>
                  ))}
                </ul>
                <p className="mt-7 border-t border-cloud-200 pt-5 text-sm text-ink-500">Den genauen Umfang halten wir in Ihrer Offerte fest.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Process title={`So läuft Ihre ${s.name} ab`} />
      <AreaBand service={s.name} />
      <FaqSection title={`Fragen zur ${s.name}`} faqs={s.faqs} />
      <Contact preset={s.name} />

      <section className="pb-20 sm:pb-28">
        <div className="container-x">
          <div className="flex items-end justify-between gap-6">
            <h2 className="text-2xl font-semibold text-navy-950 sm:text-3xl">Weitere Leistungen</h2>
            <Link to="/#leistungen" className="hidden items-center gap-1.5 font-medium text-brand-700 hover:underline sm:inline-flex">
              Alle Leistungen <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
          <ServiceGrid services={others} variant="light" withCustom className="mt-8" />
        </div>
      </section>
    </>
  )
}
