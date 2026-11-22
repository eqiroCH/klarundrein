import { MapPin } from 'lucide-react'
import Reveal from './Reveal'
import { Eyebrow } from './Icons'
import { areas, company, soft } from '../data/site'

/** Einzugsgebiet mit Ring-Grafik rund um Adliswil. */
export default function AreaBand({ service }: { service?: string }) {
  return (
    <section className="pb-20 sm:pb-28">
      <div className="container-x">
        <Reveal className="relative isolate overflow-hidden rounded-[2rem] bg-cloud-50 p-7 ring-1 ring-cloud-200 sm:p-12">
          <div aria-hidden className="rings absolute -top-40 -right-40 -z-10 size-[34rem] opacity-80 sm:-right-24" />
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <span className="grid size-14 place-items-center rounded-2xl bg-brand-500 text-white shadow-[0_14px_30px_-12px_rgb(0_137_204/0.8)]">
                <MapPin className="size-7" aria-hidden />
              </span>
              <Eyebrow className="mt-6 text-brand-600">Einzugsgebiet</Eyebrow>
              <h2 className="mt-3 text-3xl leading-tight font-semibold tracking-tight text-balance text-navy-950 sm:text-4xl">
                {service ? `${soft(service)} in Adliswil und Umgebung` : 'Von Adliswil aus schnell bei Ihnen'}
              </h2>
              <p className="lead mt-4 text-ink-700">
                Unser Sitz ist an der {company.street} in {company.city}. Wir reinigen in den Nachbargemeinden, in der Stadt
                Zürich und im ganzen Kanton.
              </p>
            </div>
            <ul className="flex flex-wrap gap-2.5 lg:col-span-7 lg:justify-end">
              {areas.map((a, i) => (
                <li
                  key={a}
                  className={`rounded-full px-4 py-2 text-[0.95rem] font-medium ${
                    i === 0 ? 'bg-navy-950 text-white' : 'bg-white text-ink ring-1 ring-cloud-200'
                  }`}
                >
                  {a}
                </li>
              ))}
              <li className="rounded-full bg-brand-500 px-4 py-2 text-[0.95rem] font-medium text-white">ganzer Kanton Zürich</li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
