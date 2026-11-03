/* Glyph shapes for <IsoTile>, drawn in a 64x64 viewBox. */

export const PenGlyph = <path d="M10 46 38 8l16 12-28 38-18 4zM40 4l6-2 16 12-2 6z" />;

export const CodeGlyph = <path d="M22 14 6 32l16 18 7-7-9-11 9-11zM42 14l-7 7 9 11-9 11 7 7 16-18z" />;

export const StarGlyph = <path d="m32 4 8.5 17.5 19.5 2.8-14 13.6 3.3 19.4L32 48.2 14.7 57.3 18 37.9 4 24.3l19.5-2.8z" />;

export const NodesGlyph = (
  <g>
    <circle cx="14" cy="22" r="7" />
    <circle cx="46" cy="14" r="6" />
    <circle cx="52" cy="40" r="6" />
    <circle cx="24" cy="48" r="7" />
  </g>
);

/* Event glyphs */
export const TentGlyph = <path d="M4 52 32 10l28 42H44L32 30 20 52z" />;

export const PoufGlyph = <path d="M32 8c14 0 24 14 24 30 0 10-10 16-24 16S8 48 8 38C8 22 18 8 32 8z" />;

export const FlowerGlyph = (
  <g>
    <circle cx="32" cy="14" r="10" />
    <circle cx="49" cy="26" r="10" />
    <circle cx="43" cy="46" r="10" />
    <circle cx="21" cy="46" r="10" />
    <circle cx="15" cy="26" r="10" />
    <circle cx="32" cy="32" r="7" />
  </g>
);

export const BulbGlyph = (
  <path d="M32 4C20 4 12 13 12 24c0 8 4 13 8 18v8h24v-8c4-5 8-10 8-18C52 13 44 4 32 4zM22 54h20v6H22z" />
);
