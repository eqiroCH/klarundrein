import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

/** Bildkarte wie auf der bisherigen Website: Foto oben, weisser Textteil unten. */
export default function ServiceCard({
  to,
  image,
  imageAlt,
  title,
  text,
  cta = 'Mehr erfahren',
  headingLevel: H = 'h3',
}: {
  to: string
  image: string
  imageAlt: string
  title: string
  text?: string
  cta?: string
  headingLevel?: 'h2' | 'h3'
}) {
  return (
    <Link
      to={to}
      className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white text-ink shadow-[0_20px_50px_-30px_rgb(0_0_0/0.6)] transition-transform duration-300 hover:-translate-y-1"
    >
      <span className="block aspect-[3/2] overflow-hidden bg-cloud-100">
        <img
          src={`/images/${image}.webp`}
          alt={imageAlt}
          width={800}
          height={600}
          loading="lazy"
          decoding="async"
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </span>
      <span className="flex flex-1 flex-col p-6 sm:p-7">
        <H className="text-xl font-semibold">{title}</H>
        {text && <span className="mt-3 flex-1 leading-relaxed text-ink-500">{text}</span>}
        <span className="mt-5 inline-flex items-center gap-1.5 text-[0.95rem] font-medium text-brand-700">
          {cta} <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
        </span>
      </span>
    </Link>
  )
}
