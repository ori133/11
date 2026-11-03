import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/sections/PageHeader";
import BigBagCallout from "@/components/sections/BigBagCallout";
import CTA from "@/components/sections/CTA";
import Section from "@/components/ui/Section";
import { equipmentCategories, equipmentExtras } from "@/lib/content";

export const metadata: Metadata = {
  title: "השכרת ציוד למסיבות ולאירועים",
  description: "השכרת ריהוט וציוד לאירועים: ישיבה אלטרנטיבית, ישיבת ברים, גנרטורים, תאורה, חימום, קירור ועוד.",
};

export default function EquipmentPage() {
  return (
    <>
      <PageHeader eyebrow="השכרת ציוד" title="חולמים על האירוע המושלם? אצלנו תגשימו את החלום">
        <p>ב-Flame אנחנו דואגים פשוט להכל, ובקלות: מפתרונות ישיבה מפוארים ונוחים ועד ציוד נלווה לאירוע מוצלח.</p>
      </PageHeader>

      <Section>
        <h2 className="text-3xl font-bold">פתרונות ישיבה</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {equipmentCategories.map((c) => (
            <div
              key={c.title}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft transition-shadow hover:shadow-tile"
            >
              <div className="relative aspect-[4/3] bg-slate-100">
                <Image
                  src={c.photo.src}
                  alt={c.photo.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-ink">{c.title}</h3>
                <p className="mt-2 text-slate-600">{c.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-slate-50">
        <h2 className="text-3xl font-bold">וכל מה שמסביב</h2>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          חשמל, תאורה, חימום וקירור, כדי שהאירוע יהיה נעים בכל שעה ובכל עונה.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {equipmentExtras.map((e) => (
            <div key={e.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
              <h3 className="font-semibold text-ink">{e.title}</h3>
              <p className="mt-2 text-slate-600">{e.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <BigBagCallout />
      <CTA title="לקבלת הצעת מחיר להשכרת ציוד" text="צרו איתנו קשר ותקבלו פרטים מלאים, בליווי מענה חם ואמין." />
    </>
  );
}
