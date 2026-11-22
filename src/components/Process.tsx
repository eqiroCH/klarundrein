import { CalendarCheck, ClipboardList, MessageSquareText, SprayCan } from 'lucide-react'
import Reveal from './Reveal'
import { Eyebrow } from './Icons'
import { soft, steps } from '../data/site'

const icons = [MessageSquareText, ClipboardList, SprayCan, CalendarCheck]

/** Ablauf in vier Schritten mit Verbindungslinie. */
export default function Process({ title = 'In vier Schritten zur sauberen Wohnung', id }: { title?: string; id?: string }) {
  return (
    <section id={id} className="py-20 sm:py-28">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>So einfach geht's</Eyebrow>
          <h2 className="h-section mt-4 text-navy-950">{soft(title)}</h2>
        </Reveal>
        <ol className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <span aria-hidden className="absolute top-8 right-[12.5%] left-[12.5%] hidden border-t-2 border-dashed border-brand-200 lg:block" />
          {steps.map((s, i) => {
            const Icon = icons[i]
            return (
              <Reveal as="li" key={s.title} delay={i * 90} className="relative text-center">
                <span className="relative mx-auto grid size-16 place-items-center rounded-2xl bg-white text-brand-600 shadow-[0_14px_40px_-16px_rgb(0_91_153/0.55)] ring-1 ring-cloud-200">
                  <Icon className="size-7" aria-hidden />
                  <span className="absolute -top-2.5 -right-2.5 grid size-7 place-items-center rounded-full bg-navy-950 text-xs font-semibold text-white">
                    {i + 1}
                  </span>
                </span>
                <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
                <p className="mx-auto mt-2 max-w-[16rem] leading-relaxed text-ink-500">{s.text}</p>
              </Reveal>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
