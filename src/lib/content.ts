/**
 * Site copy and image manifests, taken from the previous Flame website
 * (https://yaaraduvdevan.wixsite.com/flame). Keep content here so sections
 * stay presentational.
 */

export type Photo = { src: string; alt: string };

const img = (name: string, alt: string): Photo => ({ src: `/images/${name}.jpg`, alt });

export const photos = {
  tentBeach: img("tent-beach", "אוהל לבן נמתח על חוף הים עם ישיבה אלטרנטיבית"),
  tentLounge: img("tent-lounge", "אוהל נמתח מתחת לעצים עם פופים צבעוניים"),
  tentGarden: img("tent-garden", "אוהל לבן נמתח במדשאה עם פינות ישיבה"),
  tentColorful: img("tent-colorful", "אוהלי לייקרה צבעוניים בפארק"),
  tentEthnic: img("tent-ethnic", "אוהל אתני מעוצב בתאורת ערב"),
  poufsColorful: img("poufs-colorful", "פופים וכריות צבעוניים בפינת ישיבה"),
  poufsBeach: img("poufs-beach", "פופים של Big-Bag על חוף הים"),
  barSeating: img("bar-seating", "שולחן בר לבן עם כיסאות גבוהים בלילה"),
  seatingPool: img("seating-pool", "ריהוט לבן ופופים ליד בריכה"),
  seatingPergola: img("seating-pergola", "ישיבה על מחצלות וכריות מתחת לפרגולה"),
  seatingBeach: img("seating-beach", "פינת ישיבה על החוף בשקיעה"),
  designHall: img("design-hall", "אולם אירועים מעוצב עם שולחנות ערוכים"),
  designPool: img("design-pool", "עיצוב עם עששיות צפות בבריכה"),
  designCandy: img("design-candy", "עמדת שוק ממתקים מעוצבת"),
  designHerbs: img("design-herbs", "עיצוב גינת תבלינים"),
  designTable: img("design-table", "מרכז שולחן מעוצב עם נרות"),
  designAisle: img("design-aisle", "עיצוב שביל חופה על הדשא"),
  designAisleNight: img("design-aisle-night", "שביל חופה מואר בערב"),
  designStone: img("design-stone", "עיצוב ישיבה בין מדרגות אבן"),
  designBouquet: img("design-bouquet", "זר פרחים לעיצוב אירוע"),
};

export const eventDesignGallery: { photo: Photo; caption: string }[] = [
  { photo: photos.designAisle, caption: "עיצוב שביל חופה" },
  { photo: photos.designPool, caption: "עיצוב אווירה בבריכה" },
  { photo: photos.designTable, caption: "עיצוב מרכז שולחן" },
  { photo: photos.designHall, caption: "עיצוב אולם" },
  { photo: photos.designCandy, caption: "עמדת שוק מעוצבת" },
  { photo: photos.designHerbs, caption: "עיצוב גינת תבלינים" },
  { photo: photos.designBouquet, caption: "עיצוב זר" },
  { photo: photos.designStone, caption: "עיצוב בין מדרגות אבן" },
  { photo: photos.designAisleNight, caption: "שביל חופה בערב" },
];

export const homeGallery: { photo: Photo; caption: string }[] = [
  { photo: photos.tentBeach, caption: "אוהל על חוף הים" },
  { photo: photos.designAisle, caption: "שביל חופה" },
  { photo: photos.poufsColorful, caption: "ישיבה אלטרנטיבית" },
  { photo: photos.designPool, caption: "אווירה ליד הבריכה" },
  { photo: photos.tentLounge, caption: "אוהל מתחת לעצים" },
  { photo: photos.designTable, caption: "מרכז שולחן" },
];

export const tentTypes = [
  { title: "רשתות צל", text: "פתרון הצללה קל ויעיל לשטחים פתוחים." },
  { title: "אוהלים אתניים", text: "אוהלים בסגנון אתני, לאווירה חמה ומיוחדת." },
  { title: "אוהלים נגד גשם", text: "עמידים בתנאי מזג האוויר הישראלי." },
  { title: "אוהלי לייקרה", text: "בד אלסטי נמתח שמעוצב לצורות ולמרחבים שונים." },
];

export const equipmentCategories = [
  { title: "ישיבה אלטרנטיבית", text: "פוטונים, כורסאות פלסטיק נוחות, שרפרפי במבוק תאילנדיים, פופים ועוד.", photo: photos.poufsColorful },
  { title: "ישיבת ברים", text: "שולחנות בר וכיסאות גבוהים לאירוע עומד ונינוח.", photo: photos.barSeating },
  { title: "ישיבה סטנדרטית", text: "שולחנות וכיסאות לכל גודל אירוע.", photo: photos.seatingPool },
  { title: "ציוד נלווה", text: "גנרטורים, תאורה, פטריות חימום, מאווררים תעשייתיים ועוד.", photo: photos.seatingPergola },
];

export const equipmentExtras = [
  { title: "חשמל", text: "רשת חשמל יציבה על ידי גנרטור להשכרה." },
  { title: "תאורה", text: "פתרונות תאורה בכל מקום ובכל זמן." },
  { title: "חימום", text: "פטריות חימום להשכרה, פתרון יעיל לחימום שטחים נרחבים בימי קור." },
  { title: "קירור ואוורור", text: "מאווררים תעשייתיים לימי הקיץ החמים, וקירור למאכלים ולמשקאות." },
  { title: "מחצלות ענק", text: "מחצלות שנוצרו במיוחד עבור אירועים גדולים." },
  { title: "עמדות קבלת פנים ואוכל", text: "מגוון עמדות מפנקות שהופכות אירוע רגיל לאירוע השנה." },
];

export const testimonials = [
  {
    name: "עמית ודני",
    org: "קייטרינג טעם הטבע",
    text: "כחלק ממכלול האירוע אנו דואגים לפן הלוגיסטי ולפן העיצובי. חברת פליים מספקת לנו את השירותים הללו, תוך הקפדה על ציוד שמגיע ברמה גבוהה, ותמיד עם רעיונות חדשים איך להפוך את האירוע למיוחד ומותאם לדרישות הלקוח. בכל מקום בו אנו מקימים אירוע, אם זה בשפך של נחל זוהר, בתוך מערת לוזית או ביער בן-שמן, חברת פליים איתנו שם.",
  },
  {
    name: "אורית וצוות אוריתה",
    org: "אוריתה, רעיונות צבעוניים",
    text: "לירן היקר. כייף גדול לעבוד איתך, באירועים מורכבים כקלים. אתה תמיד בסביבה, ביסודיות ומקצוענות חסרת פשרות. תמיד בשילוב צבעים משגע, והעמדה מדויקת ונכונה עם אחריות לעשייה ותמיד בחיוך ובכייף גדול. בעבודה המשותפת איתך לא רק האורחים נהנים באירוע, והחוויה כבר משלב ההפקה!",
  },
  {
    name: "דרור",
    org: "על חבלים",
    text: "כבר מעל 7 שנים שאנו משתפים פעולה, והאירועים שערכנו יחדיו תמיד היו מוצלחים ואף פעם לא היו לי כל טענות אליך, גם כשלקוח רצה לשנות משהו, תמיד היית גמיש ומתחשב. בחיוך מבין התאמת את פינות הישיבה, המחצלות ואפילו צבעי הפופים לשביעות רצון הלקוחות. יישר כוח.",
  },
  {
    name: "מאיר",
    org: "שף נודד",
    text: "קיבלנו לאורך התקופה שאנחנו עובדים עם פליים שירות ידידותי, אמין ומקצועי. בכל שעות היממה ועבור כל צורך קיבלנו מענה מהיר ויצירתי, דבר שתרם יותר מפעם להצלחה של אירועים שהפקנו בטבע.",
  },
  {
    name: "ניר שחם וענבר חוטר-ישי",
    org: "יקב שורק ביס' לעשיית יין",
    text: "מזה 4 שנים יקב שורק עובד עם חברת פליים באירועים השונים המתקיימים ביקב. ראויה לציון המקצועיות, האמינות, תשומת הלב לפרטים הקטנים, העמידה בלוחות הזמנים ובתקציבים ולא פחות חשוב היחס האישי והנדיב. המסירות והמחויבות של לירן באופן אישי וצוותו להצלחת האירוע, תמיד משאירים אותנו עם התחושה שקיבלנו מעל למצופה.",
  },
];

export const clientNames = ["יקב שורק", "טעם הטבע", "שף נודד", "אוריתה", "על חבלים"];
