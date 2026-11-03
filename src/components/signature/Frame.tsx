import clsx from 'clsx'
import type { ReactNode } from 'react'

/**
 * Three nested layers: canvas (page) → white frame → soft inner surface.
 * The page background (canvas) comes from <body>; Frame renders the other two.
 */
export function Frame({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className="p-3 sm:p-6">
      <div className="mx-auto max-w-[1200px] rounded-[var(--radius-2xl)] bg-[var(--bg-frame)] p-3 sm:p-4 shadow-[var(--shadow-lg)]">
        <div
          className={clsx(
            'relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border-subtle)] bg-[var(--bg-surface)]',
            className,
          )}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
