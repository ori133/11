import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Highlight from "@/components/ui/Highlight";
import IsoTile, { type GlyphTone } from "@/components/ui/IsoTile";
import { CodeGlyph, NodesGlyph, PenGlyph, StarGlyph } from "@/components/ui/glyphs";
import SocialProof from "./SocialProof";

type TileSpec = { tone: GlyphTone; glyph: React.ReactNode };

export type HeroAgencyProps = {
  eyebrow?: string;
  /** Text before the highlighted word. */
  titleStart?: string;
  highlight?: string;
  titleEnd?: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  clients?: string[];
  /** Shown before the client names when there is no star rating. */
  clientsHeading?: string;
  /** Star rating; leave undefined when there is no real rating. */
  rating?: { score: number; label: string };
  /** Exactly four decorative tiles, ordered: outer-start, inner-start, inner-end, outer-end. */
  tiles?: [TileSpec, TileSpec, TileSpec, TileSpec];
};

const defaultTiles: [TileSpec, TileSpec, TileSpec, TileSpec] = [
  { tone: "pink", glyph: PenGlyph },
  { tone: "blue", glyph: CodeGlyph },
  { tone: "yellow", glyph: StarGlyph },
  { tone: "pink", glyph: NodesGlyph },
];

// Tile positions; symmetric, so physical left/right is fine in RTL.
const tilePositions = [
  "left-[-6%] top-[34%] sm:left-[4%] sm:top-[26%]",
  "left-[18%] top-[56%] hidden sm:block",
  "right-[18%] top-[52%] hidden sm:block",
  "right-[-6%] top-[30%] sm:right-[4%] sm:top-[22%]",
];

// Placeholder copy; pass real content via props.
export default function HeroAgency({
  eyebrow = "פנויים לפרויקטים חדשים ברבעון הקרוב",
  titleStart = "אנחנו בונים אתרים שגורמים לעסק שלכם",
  highlight = "לצמוח",
  titleEnd = "",
  subtitle = "צוות בכיר וקטן שמעצב ובונה מותגים, אתרים ומוצרים לחברות שאפתניות, מהסקיצה הראשונה ועד ההשקה.",
  primaryCta = { label: "בואו נדבר", href: "/contact" },
  secondaryCta = { label: "עוד עלינו", href: "/about" },
  clients = ["Northwind", "Acme Co", "Lumen", "Paperplane", "Orbit"],
  clientsHeading,
  rating,
  tiles = defaultTiles,
}: HeroAgencyProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white pb-[300px] pt-16 text-center sm:pb-[320px] sm:pt-24">
      {/* soft brand glow behind the headline */}
      <div
        aria-hidden
        className="pointer-events-none absolute start-1/2 top-0 h-[360px] w-[720px] max-w-full -translate-x-1/2 bg-[radial-gradient(closest-side,rgb(255_201_60/0.22),transparent)] rtl:translate-x-1/2"
      />

      <Container className="relative z-10 flex flex-col items-center">
        <Badge dot>{eyebrow}</Badge>

        <h1 className="mt-6 max-w-3xl text-[clamp(2.25rem,7vw,4rem)] font-bold leading-[1.1] tracking-tight">
          {titleStart} <Highlight>{highlight}</Highlight>
          {titleEnd && ` ${titleEnd}`}
        </h1>

        <p className="mt-6 max-w-[45ch] text-sm leading-relaxed text-slate-600 sm:text-base">{subtitle}</p>

        <div className="mt-8 flex w-full max-w-[420px] flex-col gap-3 sm:w-auto sm:max-w-none sm:flex-row">
          <Button variant="accent" href={primaryCta.href} withArrow className="px-6 py-3 text-base">
            {primaryCta.label}
          </Button>
          <Button variant="ghost" href={secondaryCta.href} className="px-6 py-3 text-base">
            {secondaryCta.label}
          </Button>
        </div>

        <div className="mt-12">
          <SocialProof
            clients={clients}
            heading={clientsHeading}
            score={rating?.score}
            label={rating?.label}
          />
        </div>
      </Container>

      {/* Decorative tiles, fading out toward the edges. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[300px] overflow-hidden [mask-image:radial-gradient(ellipse_70%_90%_at_50%_70%,#000_40%,transparent_100%)]"
      >
        {tiles.map((t, i) => (
          <IsoTile key={i} tone={t.tone} size={220} delay={i} className={`absolute ${tilePositions[i]}`}>
            {t.glyph}
          </IsoTile>
        ))}
      </div>
    </section>
  );
}
