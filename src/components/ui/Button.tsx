import { ArrowRight } from 'lucide-react'
import clsx from 'clsx'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'dark' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  /** Show the circled arrow used by the hero CTA. */
  withArrow?: boolean
  children: ReactNode
}

const variants: Record<Variant, string> = {
  primary:
    'bg-[var(--action-primary)] text-white hover:bg-[var(--action-primary-hover)] active:bg-[var(--action-primary-active)]',
  dark: 'bg-[var(--action-dark)] text-[var(--text-inverse)] hover:bg-[var(--action-dark-hover)]',
  ghost:
    'bg-transparent text-[var(--text-primary)] hover:bg-[var(--bg-surface)]',
}

const sizes: Record<Size, string> = {
  sm: 'h-9 px-3.5 text-[length:var(--text-label)] rounded-[var(--radius-md)]',
  md: 'h-11 px-5 text-[length:var(--text-body-s)] rounded-[var(--radius-sm)]',
  lg: 'h-12 px-6 text-[length:var(--text-body-m)] rounded-[var(--radius-sm)]',
}

export function Button({
  variant = 'primary',
  size = 'md',
  withArrow = false,
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={clsx(
        'group inline-flex items-center justify-center gap-2 font-medium',
        'cursor-pointer transition-colors duration-[var(--duration-base)]',
        'disabled:cursor-not-allowed disabled:opacity-50',
        variants[variant],
        sizes[size],
        className,
      )}
      {...rest}
    >
      {children}
      {withArrow && (
        <span className="grid size-5 place-items-center rounded-full border border-current">
          <ArrowRight
            size={12}
            aria-hidden
            className="transition-transform duration-[var(--duration-base)] group-hover:translate-x-0.5"
          />
        </span>
      )}
    </button>
  )
}

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Required: icon-only buttons need an accessible name. */
  'aria-label': string
  children: ReactNode
}

export function IconButton({ className, children, ...rest }: IconButtonProps) {
  return (
    <button
      className={clsx(
        'grid size-10 place-items-center rounded-full cursor-pointer',
        'bg-[var(--bg-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-sm)]',
        'transition-shadow duration-[var(--duration-base)] hover:shadow-[var(--shadow-md)]',
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  )
}
