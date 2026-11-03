export const siteConfig = {
  name: "שם החברה",
  description: "אתר תדמית מודרני – תיאור קצר של החברה והשירותים שלה.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "he_IL",
  nav: [
    { href: "/", label: "בית" },
    { href: "/about", label: "אודות" },
    { href: "/contact", label: "צור קשר" },
  ],
} as const;
