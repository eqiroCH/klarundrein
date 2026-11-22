import { useEffect, useRef, useState } from 'react'

/**
 * Hintergrundvideo wie auf der bisherigen Website. Das Standbild (LCP) kommt aus dem vorgerenderten HTML,
 * das Video wird erst im Browser geladen – nicht bei «Bewegung reduzieren» oder Datensparmodus.
 */
export default function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData
    if (!reduce && !saveData) setEnabled(true)
  }, [])

  useEffect(() => {
    const v = ref.current
    if (!v) return
    v.muted = true
    v.play().catch(() => {})
  }, [enabled])

  if (!enabled) return null
  return (
    <video
      ref={ref}
      src="/images/hero.mp4"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden
      tabIndex={-1}
      onPlaying={(e) => e.currentTarget.classList.add('is-playing')}
      className="hero-video absolute inset-0 size-full object-cover"
    />
  )
}
