import type { Metadata } from "next";
import { MapPin, Phone, Smartphone } from "lucide-react";
import PageHeader from "@/components/sections/PageHeader";
import Section from "@/components/ui/Section";
import { siteConfig } from "@/lib/site";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "צור קשר - השכרת ציוד לאירועים במרכז ובשרון",
  description: "Flame מספקת מגוון שירותי השכרת ציוד לאירועים במרכז, בשרון ובכל רחבי הארץ. צרו קשר לקבלת הצעת מחיר.",
};

const link =
  "font-medium text-accent-blue hover:text-accent-blue-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600";

export default function ContactPage() {
  const { owner, address, officePhone, mobilePhone, fax, serviceArea } = siteConfig.contact;
  return (
    <>
      <PageHeader eyebrow="צור קשר" title="צרו קשר לקבלת הצעת מחיר משתלמת">
        <p>לאירוע שלא ישכח. השאירו פרטים ונחזור אליכם, או התקשרו ישירות.</p>
      </PageHeader>
      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
              <h2 className="text-xl font-bold text-ink">
                {siteConfig.name} - {owner}
              </h2>
              <p className="mt-2 text-slate-600">
                מספקת מגוון שירותים של השכרת ציוד לאירועים: {serviceArea}.
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin size={20} aria-hidden className="mt-0.5 shrink-0 text-accent-pink" />
                  <span>{address}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={20} aria-hidden className="mt-0.5 shrink-0 text-accent-pink" />
                  <span>
                    משרד ומחסן:{" "}
                    <a href={`tel:${officePhone.tel}`} className={link} dir="ltr">
                      {officePhone.label}
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Smartphone size={20} aria-hidden className="mt-0.5 shrink-0 text-accent-pink" />
                  <span>
                    פלאפון:{" "}
                    <a href={`tel:${mobilePhone.tel}`} className={link} dir="ltr">
                      {mobilePhone.label}
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <span aria-hidden className="w-5 shrink-0" />
                  <span>
                    פקס: <span dir="ltr">{fax}</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
            <h2 className="text-xl font-bold text-ink">השאירו פרטים</h2>
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}
