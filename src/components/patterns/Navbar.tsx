import { Search } from 'lucide-react'
import { Button, IconButton } from '../ui/Button'

const defaultLinks = [
  'Why Sparkline',
  'Product',
  'Solutions',
  'Resources',
  'About',
]

export function Logo({ name = 'Sparkline' }: { name?: string }) {
  return (
    <a
      href="/"
      className="flex items-center gap-1.5 text-[length:var(--text-h4)] font-semibold tracking-tight"
    >
      <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden>
        <path
          d="M2 13 6 7l3 3 5-7"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {name}
    </a>
  )
}

/** Floating white pill navigation. */
export function Navbar({
  brand = 'Sparkline',
  links = defaultLinks,
  cta = 'Try Sparkline',
}: {
  brand?: string
  links?: string[]
  cta?: string
}) {
  return (
    <header className="relative z-10 flex justify-center px-4 pt-6">
      <nav
        aria-label="Main"
        className="flex w-full max-w-[640px] items-center justify-between gap-4 rounded-[var(--radius-lg)] bg-[var(--bg-elevated)] py-2 pl-5 pr-2 shadow-[var(--shadow-sm)] border border-[var(--border-subtle)] lg:max-w-[820px]"
      >
        <Logo name={brand} />
        <ul className="hidden items-center gap-5 text-[length:var(--text-caption)] font-medium lg:flex">
          {links.map((l) => (
            <li key={l}>
              <a
                href="#"
                className="text-[var(--text-primary)] transition-opacity hover:opacity-60"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <IconButton aria-label="Search" className="hidden sm:grid">
            <Search size={16} aria-hidden />
          </IconButton>
          <IconButton aria-label="Language: English" className="hidden sm:grid">
            <span aria-hidden className="text-base leading-none">
              🇬🇧
            </span>
          </IconButton>
          <Button variant="dark" size="sm">
            {cta}
          </Button>
        </div>
      </nav>
    </header>
  )
}
