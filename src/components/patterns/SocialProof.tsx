import { Star } from 'lucide-react'

export function Rating({
  score = 4.9,
  label = 'from 120 clients',
}: {
  score?: number
  label?: string
}) {
  return (
    <div className="flex items-center gap-2">
      <div
        role="img"
        aria-label={`Rated ${score} out of 5`}
        className="flex gap-0.5 text-[var(--accent-yellow)]"
      >
        {Array.from({ length: 5 }, (_, i) => (
          <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
        ))}
      </div>
      <span className="text-[length:var(--text-label)] text-[var(--text-muted)]">
        <strong className="font-semibold text-[var(--text-primary)]">
          {score}
        </strong>{' '}
        {label}
      </span>
    </div>
  )
}

/** Text-only placeholder wordmarks; swap for real client SVG logos. */
export function LogoCloud({ names }: { names: string[] }) {
  return (
    <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-[length:var(--text-body-m)] font-semibold tracking-tight text-[var(--text-muted)] opacity-80">
      {names.map((n) => (
        <li key={n}>{n}</li>
      ))}
    </ul>
  )
}

export function SocialProof({
  clients,
  score,
  label,
}: {
  clients: string[]
  score?: number
  label?: string
}) {
  return (
    <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-8">
      <Rating score={score} label={label} />
      <span aria-hidden className="hidden h-5 w-px bg-[var(--border-subtle)] sm:block" />
      <LogoCloud names={clients} />
    </div>
  )
}
