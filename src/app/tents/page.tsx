import type { Metadata } from "next";
import { Tent } from "lucide-react";
import PageHeader from "@/components/sections/PageHeader";
import Gallery from "@/components/sections/Gallery";
import CTA from "@/components/sections/CTA";
import Section from "@/components/ui/Section";
import { photos, tentTypes } from "@/lib/content";

export const metadata: Metadata = {
  title: "השכרת אוהלים לאירועים",
  description:
    "השכרה והקמה של אוהלים ורשתות צל לאירועים, ממטרים בודדים ועד אוהלים לאירועים המוניים בגודל מאות מטרים.",
};

const gallery = [
  { photo: photos.tentBeach, caption: "אוהל על חוף הים" },
  { photo: photos.tentGarden, caption: "אוהל במדשאה" },
  { photo: photos.tentLounge, caption: "אוהל מתחת לעצים" },
  { photo: photos.tentColorful, caption: "אוהלי לייקרה צבעוניים" },
  { photo: photos.tentEthnic, caption: "אוהל אתני" },
  { photo: photos.seatingBeach, caption: "ישיבה על החוף" },
];

export default function TentsPage() {
  return (
    <>
      <PageHeader eyebrow="אוהלים והצללות" title="חולמים על אירוע באמצע שום מקום?">
        <p>
          בין אם האירוע מתקיים אצלכם בחצר, על חוף הים או בלב מדבר שומם, בדיוק בשביל זה אנחנו כאן. אנו מתמחים בהשכרת אוהלים
          לאירועים, הקמת אוהלים ורשתות צל להפקת אירוע מרהיב, בהתאם לצרכי הלקוח: ממטרים בודדים לאוהל אישי או צוותי ועד
          אוהלים לאירועים המוניים בגודל מאות מטרים.
        </p>
        <p className="mt-3">
          האוהלים ורשתות הצל עשויים מחומרים איכותיים ומייצרים צל ואווירה ברמה הגבוהה ביותר, ללא פשרות בנושא המקצועיות,
          איכות החומרים ועמידותם בתנאים ובמזג האוויר הישראלי.
        </p>
      </PageHeader>

      <Section>
        <h2 className="text-3xl font-bold">סוגי האוהלים</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tentTypes.map((t) => (
            <div key={t.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-accent-blue">
                <Tent size={22} aria-hidden />
              </span>
              <h3 className="mt-4 font-semibold text-ink">{t.title}</h3>
              <p className="mt-2 text-slate-600">{t.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-2xl text-slate-600">
          האוהלים מאופיינים בבד אלסטי נמתח, ולכן ניתן לעצב אותם בצורות שונות ולמרחבים שונים, בהתאם ללקוח. ניתן להשכיר אותם
          יחד עם ציוד לישיבה אלטרנטיבית: פוטונים, כורסאות, שרפרפי במבוק ופופים.
        </p>
      </Section>

      <Gallery items={gallery} eyebrow="גלריה" title="אוהלים מהשטח" />
      <CTA title="מחפשים אוהלים להשכרה?" text="צרו קשר עוד היום לקבלת הצעת מחיר משתלמת לאירוע קטן או גדול." />
    </>
  );
}
