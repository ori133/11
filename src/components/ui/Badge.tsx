import clsx from 'clsx'
import type { ReactNode } from 'react'

/** Small pill used for eyebrows and status labels. */
export function Badge({
  children,
  dot = false,
  className,
}: {
  children: ReactNode
  /** Show a pulsing accent dot before the label. */
  dot?: boolean
  className?: string
}) {
  return (
    <span
      className={clsx(
        'inline-flex items-center gap-2 rounded-full border border-[var(--border-subtle)]',
        'bg-[var(--bg-elevated)] px-3 py-1 shadow-[var(--shadow-sm)]',
        'text-[length:var(--text-caption)] font-medium text-[var(--text-primary)]',
        className,
      )}
    >
      {dot && (
        <span aria-hidden className="relative flex size-2">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-[var(--accent-pink)] opacity-60" />
          <span className="relative inline-flex size-2 rounded-full bg-[var(--accent-pink)]" />
        </span>
      )}
      {children}
    </span>
  )
}
