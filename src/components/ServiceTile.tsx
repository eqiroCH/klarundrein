import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { soft } from '../data/site'

/** Bildkachel: Foto vollflächig, Text auf Verlauf. Für Bento-Raster und «Weitere Leistungen». */
export default function ServiceTile({
  to,
  image,
  srcSet,
  sizes = '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw',
  imageAlt,
  title,
  text,
  badge,
  large = false,
  className = '',
}: {
  to: string
  image: string
  srcSet?: string
  sizes?: string
  imageAlt: string
  title: string
  text?: string
  badge?: string
  large?: boolean
  className?: string
}) {
  return (
    <Link
      to={to}
      className={`group relative isolate flex h-full min-h-[18rem] flex-col justify-end overflow-hidden rounded-3xl bg-navy-800 p-6 text-white sm:p-7 ${className}`}
    >
      <img
        src={image}
        srcSet={srcSet}
        sizes={sizes}
        alt={imageAlt}
        width={800}
        height={600}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 -z-20 size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <span aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950/95 via-navy-950/60 to-navy-950/10" />
      <span
        aria-hidden
        className="absolute top-5 right-5 grid size-11 place-items-center rounded-full bg-white/15 backdrop-blur-md transition-all duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-navy-900"
      >
        <ArrowUpRight className="size-5" />
      </span>
      {badge && (
        <span className="absolute top-5 left-5 rounded-full bg-brand-500 px-3.5 py-1.5 text-xs font-semibold tracking-wide">
          {badge}
        </span>
      )}
      <h3 className={`pr-10 font-semibold hyphens-manual ${large ? 'text-2xl sm:text-4xl' : 'text-xl sm:text-2xl'}`}>{soft(title)}</h3>
      {text && <p className={`mt-2 leading-relaxed text-white/80 ${large ? 'max-w-lg sm:text-lg' : ''}`}>{text}</p>}
    </Link>
  )
}
