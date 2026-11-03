import clsx from 'clsx'
import type { ReactNode } from 'react'

export type GlyphTone = 'pink' | 'yellow' | 'blue'

const tones: Record<GlyphTone, { main: string; shade: string }> = {
  pink: { main: 'var(--color-pink-500)', shade: 'var(--color-pink-300)' },
  yellow: { main: 'var(--color-yellow-500)', shade: 'var(--color-yellow-300)' },
  blue: { main: 'var(--color-blue-500)', shade: 'var(--color-blue-300)' },
}

/**
 * Isometric tile: a white rounded rhombus with a soft shadow and a flat
 * "extruded" glyph on top (light-tinted copy offset underneath).
 */
export function IsoTile({
  tone,
  children,
  size = 240,
  float = true,
  delay = 0,
  className,
}: {
  tone: GlyphTone
  /** Glyph shapes. Position via className (e.g. `absolute` or `relative`). */
  children: ReactNode
  size?: number
  float?: boolean
  /** Animation delay in seconds, to desynchronise floating tiles. */
  delay?: number
  className?: string
}) {
  const { main, shade } = tones[tone]
  return (
    <div
      aria-hidden
      className={clsx(float && 'animate-float', className)}
      style={{ width: size, height: size * 0.62, animationDelay: `${delay}s` }}
    >
      {/* rhombus */}
      <div
        className="absolute inset-0 bg-white"
        style={{
          clipPath: 'none',
          borderRadius: 28,
          transform: 'scaleY(0.62) rotate(45deg) scale(0.7)',
          transformOrigin: 'center',
          boxShadow: '0 24px 48px rgb(11 11 12 / 0.07)',
          aspectRatio: '1',
          width: size,
          height: size,
          top: '50%',
          left: 0,
          marginTop: -size / 2,
        }}
      />
      {/* glyph */}
      <div className="absolute inset-0 grid place-items-center">
        <svg
          viewBox="0 0 64 64"
          width={size * 0.42}
          height={size * 0.42}
          style={{ color: main }}
        >
          <g transform="translate(0 5)" fill={shade}>
            {children}
          </g>
          <g fill={main}>{children}</g>
        </svg>
      </div>
    </div>
  )
}

/* ---- Glyph shapes (64×64 viewBox) ---- */
export const NodesGlyph = (
  <g>
    <circle cx="14" cy="22" r="7" />
    <circle cx="46" cy="14" r="6" />
    <circle cx="52" cy="40" r="6" />
    <circle cx="24" cy="48" r="7" />
  </g>
)

export const BarsGlyph = (
  <g>
    <rect x="6" y="14" width="46" height="9" rx="4.5" transform="skewX(-20)" />
    <rect x="14" y="28" width="40" height="9" rx="4.5" transform="skewX(-20)" />
    <rect x="22" y="42" width="30" height="9" rx="4.5" transform="skewX(-20)" />
  </g>
)

export const BoltGlyph = (
  <path d="M8 12h14l12 18 12-18h10v38H46V32L34 50 22 32v18H8z" />
)

export const DomeGlyph = (
  <g>
    <ellipse cx="32" cy="42" rx="26" ry="12" />
    <path d="M10 36c0-14 10-22 22-22s22 8 22 22c0 5-10 8-22 8S10 41 10 36z" />
  </g>
)

/* Agency services */
export const PenGlyph = (
  <path d="M10 46 38 8l16 12-28 38-18 4zM40 4l6-2 16 12-2 6z" />
)

export const CodeGlyph = (
  <g>
    <path d="M22 14 6 32l16 18 7-7-9-11 9-11zM42 14l-7 7 9 11-9 11 7 7 16-18z" />
  </g>
)

export const StarGlyph = (
  <path d="m32 4 8.5 17.5 19.5 2.8-14 13.6 3.3 19.4L32 48.2 14.7 57.3 18 37.9 4 24.3l19.5-2.8z" />
)

export const CardGlyph = (
  <g>
    <rect x="6" y="14" width="52" height="36" rx="12" />
  </g>
)
