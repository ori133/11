import { Button } from '../ui/Button'
import { Highlight } from '../signature/Highlight'
import {
  BarsGlyph,
  BoltGlyph,
  CardGlyph,
  DomeGlyph,
  IsoTile,
  NodesGlyph,
} from '../signature/IsoTile'

export function Hero() {
  return (
    <section className="relative px-6 pb-[340px] pt-20 text-center sm:pt-24">
      <h1 className="mx-auto max-w-[780px] text-[clamp(2.5rem,7vw,var(--text-display))] font-bold leading-[1.05] tracking-[-0.02em]">
        Your future. Your
        <br />
        data. <Highlight>Your AI.</Highlight>
      </h1>
      <p className="mx-auto mt-6 max-w-[45ch] text-[length:var(--text-body-s)] leading-relaxed text-[var(--text-muted)]">
        Take full control with the new data intelligence platform where you can
        manage all your data with ease
      </p>
      <div className="mt-8 flex justify-center">
        <Button size="lg" withArrow>
          Explore Demo
        </Button>
      </div>

      {/* Decorative isometric tiles, fading out toward the edges */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[360px] [mask-image:radial-gradient(ellipse_70%_90%_at_50%_60%,#000_45%,transparent_100%)]"
      >
        <IsoTile tone="pink" className="absolute left-[2%] top-[10%]" delay={0}>
          {NodesGlyph}
        </IsoTile>
        <IsoTile tone="yellow" className="absolute left-[22%] top-[36%]" delay={1}>
          {BarsGlyph}
        </IsoTile>
        <IsoTile tone="blue" className="absolute right-[22%] top-[30%]" delay={2}>
          {BoltGlyph}
        </IsoTile>
        <IsoTile tone="yellow" className="absolute right-[2%] top-[6%]" delay={3}>
          {DomeGlyph}
        </IsoTile>
        <IsoTile tone="pink" className="absolute left-1/2 top-[52%] -translate-x-1/2" delay={1.5}>
          {CardGlyph}
        </IsoTile>
      </div>
    </section>
  )
}
