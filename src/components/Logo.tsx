/** Original-Logo der Klar und Rein GmbH auf weisser Kachel (wie auf der bisherigen Website). */
export default function Logo({ className = 'size-14' }: { className?: string }) {
  return (
    <span className={`block overflow-hidden rounded-xl bg-white p-0.5 shadow-sm ${className}`}>
      <img src="/logo-256.webp" alt="Klar und Rein GmbH" width={256} height={256} className="size-full object-contain" />
    </span>
  )
}
