# Brightside Design System

שפת העיצוב של האתר. בסשן חדש מספיק לכתוב "השתמש ב-Brightside" כדי לעבוד לפי המסמך הזה.

בהשראת שוט ב-Dribbble ("Landing Page for a Data-Driven Analytics Platform", המותג Sparkline). ערכי הצבע נדגמו מצילום מסך, ולכן הם קירוב.

## עקרונות
- **בהיר ואוורירי:** הרבה לבן, ריווח אנכי נדיב, פריסה ממורכזת בסקשנים מרכזיים.
- **ניגודיות חזקה ומעט צבע:** טקסט `ink`/`slate-900` על לבן, ושלושה אקסנטים בלבד: כחול, ורוד, צהוב. האקסנטים מדגישים, הם לא רקע.
- **שתי חתימות ויזואליות:**
  - `Highlight`: מילה אחת בכותרת על מרקר צהוב.
  - `IsoTile`: אריחים איזומטריים לבנים עם סמל "תלת-ממדי" בצבע אקסנט.
- **צללים רכים ורחבים** במקום גבולות כבדים.
- **עברית ו-RTL כברירת מחדל** (`<html lang="he" dir="rtl">`).

## Tokens
מוגדרים ב-`src/app/globals.css` בתוך `@theme`, ולכן זמינים כ-utilities של Tailwind (`bg-accent-blue`, `shadow-soft` וכו').

| Token | ערך | שימוש |
|---|---|---|
| `ink` | `#0b0b0c` | טקסט כהה מודגש (טקסט על `Highlight`, כותרות כרטיסים) |
| `accent-blue` / `-hover` / `-light` | `#1f6ff2` / `#1559d1` / `#8bb7ff` | CTA ראשי, קישורים, אייקונים |
| `accent-pink` / `-light` | `#ff3d86` / `#ff9cc0` | נקודת סטטוס ב-`Badge`, סמלים |
| `accent-yellow` / `-light` | `#ffc93c` / `#ffe08a` | `Highlight`, כוכבי דירוג, סמלים |
| `brand-50/100/500/600/700` | אינדיגו (`#4f46e5` ב-600) | צבע המותג הקיים של האתר: לוגו, `Button primary`, focus ring, רקעי gradient |
| `shadow-soft` | צל עדין ונמוך | תגיות, כרטיסים במצב רגיל |
| `shadow-tile` | צל רחב ורך | אריחים, hover על כרטיסים |
| `animate-float` | ציפה איטית (6s) | אריחים בלבד |
| `font-sans` | Heebo, Inter | כל הטקסט |

נייטרליים: `slate-*` של Tailwind (`slate-600` לטקסט משני, `slate-200` לגבולות).

**כללים:**
- לא להוסיף hex ישירות בקומפוננטות. צבע חדש נכנס כ-token ב-`globals.css`.
- לא לדרוס את סקאלות `blue`/`pink`/`yellow` של Tailwind. לכן הצבעים בשמות `accent-*`.
- `prefers-reduced-motion` כבר מנטרל אנימציות גלובלית.

## רכיבים

### `Button`: `src/components/ui/Button.tsx`
| Prop | ערכים |
|---|---|
| `variant` | `primary` (brand, ברירת מחדל), `secondary` (גבול), `accent` (כחול), `ghost` (שקוף) |
| `href` | אם קיים, נרנדר כ-`Link` של Next.js. אחרת `<button>` |
| `withArrow` | חץ בעיגול שמתהפך ב-RTL ונע ב-hover |

```tsx
<Button variant="accent" href="/contact" withArrow className="px-6 py-3 text-base">בואו נדבר</Button>
<Button variant="ghost" href="/about">עוד עלינו</Button>
```
`accent` ל-CTA הראשי בסקשנים בסגנון Brightside. `primary` לשאר האתר.

### `Badge`: `src/components/ui/Badge.tsx`
Pill קטן ל-eyebrow מעל כותרת. `dot` מוסיף נקודה ורודה מהבהבת (לסטטוס כמו "פנויים לפרויקטים").
```tsx
<Badge dot>פנויים לפרויקטים חדשים</Badge>
```

### `Highlight`: `src/components/ui/Highlight.tsx`
מרקר צהוב. **מילה אחת לכל היותר בכותרת**, ורק בכותרות ראשיות.
```tsx
<h1>אנחנו בונים אתרים שגורמים לעסק שלכם <Highlight>לצמוח</Highlight></h1>
```

### `IsoTile` + glyphs: `src/components/ui/IsoTile.tsx`, `src/components/ui/glyphs.tsx`
| Prop | ערכים |
|---|---|
| `tone` | `pink`, `yellow`, `blue` |
| `children` | סמל מ-`glyphs.tsx`: `PenGlyph`, `CodeGlyph`, `StarGlyph`, `NodesGlyph`, ולאירועים: `TentGlyph`, `PoufGlyph`, `FlowerGlyph`, `BulbGlyph` |
| `size` | פיקסלים (ברירת מחדל 240) |
| `float` / `delay` | ציפה ועיכוב בשניות, כדי שאריחים לא יזוזו יחד |
| `className` | מיקום (`absolute ...`) |

דקורטיבי בלבד (`aria-hidden`). מציבים בתוך שכבה עם `pointer-events-none` ו-`mask-image` רדיאלי כדי שהאריחים יימסו לקצוות. סמל חדש מצויר ב-viewBox של 64×64 ונוסף ל-`glyphs.tsx`.

### `Container`, `Section`: `src/components/ui/`
`Container` הוא רוחב מקסימלי (`max-w-6xl`) וריפוד צדדי. `Section` הוא `Container` עם ריווח אנכי `py-16 sm:py-24`. כל סקשן חדש מתחיל מ-`Section`.

## סקשנים (patterns)

### `HeroAgency`: `src/components/sections/HeroAgency.tsx`
Hero ממורכז, לפי הסדר: `Badge` → `h1` עם `Highlight` → subtitle → שני CTA (`accent` + `ghost`) → `SocialProof` → אריחים בתחתית. כל התוכן ב-props: `eyebrow`, `titleStart`, `highlight`, `titleEnd`, `subtitle`, `primaryCta`, `secondaryCta`, `clients`, `clientsHeading`, `rating` (אופציונלי: מציגים רק דירוג אמיתי), `tiles` (ארבעה אריחים: `{ tone, glyph }`).

### `SocialProof`: `src/components/sections/SocialProof.tsx`
רשימת לקוחות, ולפניה דירוג כוכבים (`score` + `label`) או טקסט (`heading`). אין להציג דירוג שלא קיים באמת.

### `Services`: `src/components/sections/Services.tsx`
גריד כרטיסים: `Badge` מעל כותרת, כרטיסים לבנים עם `rounded-2xl`, `shadow-soft` ו-`hover:shadow-tile`, אייקון Lucide בעיגול לבן בצבע `accent-blue`, וקישור "לפרטים" בצבע `accent-blue`. כרטיס `featured` מקבל רקע `brand-50`. זה הדפוס לכל גריד כרטיסים חדש.

### סקשנים נוספים: `src/components/sections/`
- `PageHeader`: פתיח לעמוד פנימי (`Badge`, `h1` ופסקת הסבר) על gradient של `brand-50`.
- `Gallery`: גריד תמונות 4:3 עם כיתוב על התמונה. Props: `items` (`{ photo, caption }`), `eyebrow`, `title`, `text`.
- `Testimonials`: כרטיסי המלצה. `limit` מציג את הראשונות עם קישור "לכל ההמלצות".
- `Features`: כרטיסי יתרונות עם אייקון Lucide. Props: `title`, `items`.
- `BigBagCallout`: באנר מותג עם תמונה בצד. מבנה לשימוש חוזר לכל קריאה למותג/מוצר.
- `CTA`: פס קריאה לפעולה על `brand-600`, עם כפתור הצעת מחיר ומספרי טלפון.

## תוכן ותמונות
- שם האתר, ניווט, פרטי קשר וקישורים חיצוניים: `src/lib/site.ts`.
- טקסטים לסקשנים, המלצות ורשימות תמונות (עם alt): `src/lib/content.ts`. סקשנים נשארים תצוגתיים בלבד.
- תמונות: `public/images`, מוצגות עם `next/image`.

## RTL ונגישות
- להעדיף logical properties: `ms-*`, `ps-*`, `start-*`, `text-start`. חצים כיווניים מקבלים `rtl:rotate-180`.
- `h1` אחד בעמוד. אלמנטים דקורטיביים מקבלים `aria-hidden`.
- כל אלמנט אינטראקטיבי צריך focus ring נראה (`focus-visible:outline-brand-600`).
- ניגודיות טקסט AA לפחות: טקסט משני ב-`slate-600`, לא בהיר יותר.

## עוד לא קיים
dark mode, Storybook, תפריט/Navbar בסגנון pill צף (האתר משתמש ב-`Header` הקיים), סקשנים נוספים (מחירון, המלצות, FAQ).
