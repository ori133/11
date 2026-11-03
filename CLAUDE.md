# CLAUDE.md

אתר תדמית ב-Next.js (App Router) + Tailwind CSS v4, בעברית וב-RTL.

## Design system: Brightside
כל UI חדש נבנה לפי **Brightside**, המתועד ב-[`DESIGN_SYSTEM.md`](./DESIGN_SYSTEM.md). לקרוא אותו לפני שינוי עיצובי.
- להשתמש ב-tokens מ-`src/app/globals.css` (`accent-*`, `ink`, `brand-*`, `shadow-soft`, `shadow-tile`), לא בערכי hex ישירים.
- להשתמש ברכיבים הקיימים ב-`src/components/ui` (`Button`, `Badge`, `Highlight`, `IsoTile`, `Section`, `Container`) לפני שיוצרים חדשים.
- סקשנים חדשים ב-`src/components/sections`, לפי הדפוסים של `HeroAgency` ו-`Services`.
- רכיב או token חדש מתועדים גם ב-`DESIGN_SYSTEM.md`.

## מוסכמות קוד
- export default לרכיבים, מרכאות כפולות ונקודה-פסיק, `cn()` מ-`src/lib/cn.ts` לחיבור classes.
- שם האתר, הניווט וה-URL ב-`src/lib/site.ts`.
- logical properties ל-RTL (`ms-*`, `ps-*`, `start-*`), ו-`rtl:rotate-180` לחצים.

## פקודות
```bash
npm run dev
npm run build
npm run lint
```
