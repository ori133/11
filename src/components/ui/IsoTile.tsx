import { cn } from "@/lib/cn";

export type GlyphTone = "pink" | "yellow" | "blue";

const tones: Record<GlyphTone, { main: string; shade: string }> = {
  pink: { main: "var(--color-accent-pink)", shade: "var(--color-accent-pink-light)" },
  yellow: { main: "var(--color-accent-yellow)", shade: "var(--color-accent-yellow-light)" },
  blue: { main: "var(--color-accent-blue)", shade: "var(--color-accent-blue-light)" },
};

/**
 * Isometric tile: a white rounded rhombus with a soft shadow and a flat
 * "extruded" glyph on top (light-tinted copy offset underneath).
 * Decorative only, so it is hidden from assistive tech.
 */
export default function IsoTile({
  tone,
  children,
  size = 240,
  float = true,
  delay = 0,
  className,
}: {
  tone: GlyphTone;
  /** Glyph shapes (64x64 viewBox). Position the tile via className. */
  children: React.ReactNode;
  size?: number;
  float?: boolean;
  /** Animation delay in seconds, to desynchronise floating tiles. */
  delay?: number;
  className?: string;
}) {
  const { main, shade } = tones[tone];
  return (
    <div
      aria-hidden
      className={cn(float && "animate-float", className)}
      style={{ width: size, height: size * 0.62, animationDelay: `${delay}s` }}
    >
      {/* rhombus */}
      <div
        className="absolute rounded-[28px] bg-white shadow-tile"
        style={{
          width: size,
          height: size,
          top: "50%",
          left: 0,
          marginTop: -size / 2,
          transform: "scaleY(0.62) rotate(45deg) scale(0.7)",
        }}
      />
      {/* glyph */}
      <div className="absolute inset-0 grid place-items-center">
        <svg viewBox="0 0 64 64" width={size * 0.42} height={size * 0.42}>
          <g transform="translate(0 5)" fill={shade}>
            {children}
          </g>
          <g fill={main}>{children}</g>
        </svg>
      </div>
    </div>
  );
}
