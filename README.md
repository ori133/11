# אתר תדמית – Next.js + Tailwind CSS

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
npm run lint
```

## מבנה
- `src/lib/site.ts` – שם האתר, תיאור, URL וניווט (מקור אמת יחיד; הגדירו `NEXT_PUBLIC_SITE_URL` בפרודקשן).
- `src/app/globals.css` – טוקני עיצוב (`@theme`): צבעי מותג ופונטים.
- `src/components/{ui,layout,sections}` – רכיבי בסיס, Header/Footer וסקשנים.

## הוספת עמוד
צרו `src/app/<name>/page.tsx` עם `metadata`, והוסיפו אותו ל-`nav` ב-`src/lib/site.ts` (נכנס גם ל-sitemap).

האתר ב-RTL כברירת מחדל; השתמשו ב-`ms-*`/`ps-*`/`text-start` במקום left/right.
