export const siteConfig = {
  name: "Flame",
  tagline: "פתרונות מקצועיים לאירועים",
  description:
    "חברת Flame מציגה מגוון פתרונות בתחום השכרת ציוד לאירועים וכל סוגי הציוד הנלווה להקמת אירוע מוצלח שיזכר לאורך שנים.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "he_IL",
  nav: [
    { href: "/", label: "בית" },
    { href: "/event-design", label: "עיצוב אירועים" },
    { href: "/tents", label: "אוהלים והצללות" },
    { href: "/equipment", label: "השכרת ציוד" },
    { href: "/testimonials", label: "לקוחות מספרים" },
    { href: "/contact", label: "צור קשר" },
  ],
  contact: {
    owner: "לירן אלמוסנינו",
    address: "מושב טל שחר",
    officePhone: { label: "077-9611861", tel: "+972779611861" },
    mobilePhone: { label: "052-5203025", tel: "+972525203025" },
    fax: "077-3313763",
    serviceArea: "מרכז, שרון ובכל רחבי הארץ",
  },
  links: {
    // אתר מכירת הציוד (לפי תפריט האתר הקודם) ואתר המותג Big-Bag
    shop: "http://www.flame.co.il",
    bigBag: "http://www.big-bag.co.il",
  },
} as const;
