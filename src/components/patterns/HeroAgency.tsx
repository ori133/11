import type { ReactNode } from 'react'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'
import { Highlight } from '../signature/Highlight'
import {
  CodeGlyph,
  IsoTile,
  NodesGlyph,
  PenGlyph,
  StarGlyph,
} from '../signature/IsoTile'
import { SocialProof } from './SocialProof'

export interface HeroAgencyProps {
  eyebrow?: string
  /** Text before the highlighted word, e.g. "We design websites that". */
  titleStart?: ReactNode
  highlight?: string
  titleEnd?: ReactNode
  subtitle?: string
  primaryCta?: string
  secondaryCta?: string
  clients?: string[]
  rating?: { score: number; label: string }
}

export function HeroAgency({
  eyebrow = 'Now booking Q1 projects',
  titleStart = 'We design websites that',
  highlight = 'grow',
  titleEnd = 'your business.',
  subtitle = 'A small senior team crafting brands, sites and products for ambitious companies, from first sketch to launch.',
  primaryCta = 'Start a project',
  secondaryCta = 'See our work',
  clients = ['Northwind', 'Acme Co', 'Lumen', 'Paperplane', 'Orbit'],
  rating = { score: 4.9, label: 'from 120 clients' },
}: HeroAgencyProps) {
  return (
    <section className="relative px-6 pb-[300px] pt-16 text-center sm:pb-[320px] sm:pt-20">
      {/* soft brand glow behind the headline */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[360px] w-[720px] max-w-full -translate-x-1/2 bg-[radial-gradient(closest-side,rgb(255_201_60/0.22),transparent)]"
      />

      <div className="relative z-10 flex flex-col items-center">
        <Badge dot>{eyebrow}</Badge>

        <h1 className="mt-6 max-w-[780px] text-[clamp(2.25rem,7vw,var(--text-display))] font-bold leading-[1.05] tracking-[-0.02em]">
          {titleStart} <Highlight>{highlight}</Highlight> {titleEnd}
        </h1>

        <p className="mt-6 max-w-[45ch] text-[length:var(--text-body-s)] leading-relaxed text-[var(--text-muted)] sm:text-[length:var(--text-body-m)]">
          {subtitle}
        </p>

        <div className="mt-8 flex w-full max-w-[420px] flex-col gap-3 sm:w-auto sm:max-w-none sm:flex-row">
          <Button size="lg" withArrow>
            {primaryCta}
          </Button>
          <Button size="lg" variant="ghost">
            {secondaryCta}
          </Button>
        </div>

        <div className="mt-12">
          <SocialProof
            clients={clients}
            score={rating.score}
            label={rating.label}
          />
        </div>
      </div>

      {/* Decorative service tiles, fading out toward the edges */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[300px] overflow-hidden [mask-image:radial-gradient(ellipse_70%_90%_at_50%_70%,#000_40%,transparent_100%)]"
      >
        <IsoTile tone="pink" size={220} delay={0} className="absolute left-[-6%] top-[34%] sm:left-[4%] sm:top-[26%]">
          {PenGlyph}
        </IsoTile>
        <IsoTile tone="blue" size={220} delay={1} className="absolute left-[18%] top-[56%] hidden sm:block">
          {CodeGlyph}
        </IsoTile>
        <IsoTile tone="yellow" size={220} delay={2} className="absolute right-[18%] top-[52%] hidden sm:block">
          {StarGlyph}
        </IsoTile>
        <IsoTile tone="pink" size={220} delay={3} className="absolute right-[-6%] top-[30%] sm:right-[4%] sm:top-[22%]">
          {NodesGlyph}
        </IsoTile>
      </div>
    </section>
  )
}
