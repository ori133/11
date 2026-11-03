import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import Gallery from "@/components/sections/Gallery";
import CTA from "@/components/sections/CTA";
import { eventDesignGallery } from "@/lib/content";

export const metadata: Metadata = {
  title: "עיצוב אירועים",
  description: "עיצוב אירועים בצורה מושלמת: חופות, מרכזי שולחן, אווירה, פרחים, נרות ועששיות, עם ליווי אישי של מעצב הבית.",
};

export default function EventDesignPage() {
  return (
    <>
      <PageHeader eyebrow="עיצוב אירועים" title="עיצוב אירועים בצורה מושלמת">
        <p>
          אנו מאמינים שכל אירוע מוצלח מתחיל בדגש על הפרטים הקטנים. מעצב הבית שלנו, לירן אלמוסנינו, בעל תואר אקדמי בעיצוב
          פנים, ישמח ללוות אתכם החל מפגישת הייעוץ, דרך שלב בחירת הקונספט, אווירה, ריחות וצבעים ועד יום האירוע.
        </p>
        <p className="mt-3">
          אנו עוסקים בכל קשת העיצוב לאירועים: עיצוב חופות, מרכזי שולחן, אווירה, פרחים, נרות, עששיות, ציוד אלטרנטיבי ועוד.
        </p>
      </PageHeader>
      <Gallery items={eventDesignGallery} />
      <CTA title="רוצים לעצב את האירוע שלכם?" text="נשמח לפגישת ייעוץ ולהצעת מחיר מותאמת לאירוע." />
    </>
  );
}
