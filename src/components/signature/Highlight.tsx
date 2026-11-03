import clsx from 'clsx'
import type { ReactNode } from 'react'

/** Signature element: a word set on a rounded yellow marker block. */
export function Highlight({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <mark
      className={clsx(
        'inline-block rounded-[var(--radius-xs)] bg-[var(--accent-yellow)]',
        // Marker stays light in dark mode, so text is always ink.
        'px-[0.18em] text-[var(--color-ink)]',
        className,
      )}
    >
      {children}
    </mark>
  )
}
