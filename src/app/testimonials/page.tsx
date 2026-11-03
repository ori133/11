import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "לקוחות מספרים",
  description: "לקוחות Flame מספרים על שירות מקצועי, ציוד איכותי ויחס אישי באירועים בכל רחבי הארץ.",
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHeader eyebrow="לקוחות מספרים" title="לקוחות מספרים על Flame">
        <p>
          Flame עובדת עם שפע של חברות בארץ ונותנת שירותי השכרה של כל סוגי הציוד לאירועים: כיסאות, שולחנות, פופים, וציוד
          נלווה כמו גנרטורים ופטריות חימום. בנוסף, פתרונות הצללה לשעות היום ופתרונות חימום ותאורה לשעות הלילה, במקצועיות
          ובאיכות.
        </p>
      </PageHeader>
      <Testimonials title="מה אומרים עלינו" />
      <CTA />
    </>
  );
}
