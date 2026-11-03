import { Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import { siteConfig } from "@/lib/site";

export default function CTA({
  title = "לאירוע המושלם...",
  text = "צרו קשר עוד היום לקבלת הצעת מחיר משתלמת עבור השכרת הציוד המתאים ביותר, ליצירת האירוע המושלם והמהנה ביותר לכם ולקרובים שלכם.",
}: {
  title?: string;
  text?: string;
}) {
  const { officePhone, mobilePhone } = siteConfig.contact;
  return (
    <Section className="bg-brand-600 text-white">
      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="mt-3 max-w-2xl text-brand-100">{text}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Button href="/contact" variant="secondary" className="bg-white" withArrow>
          קבלו הצעת מחיר
        </Button>
        <a
          href={`tel:${mobilePhone.tel}`}
          className="inline-flex items-center gap-2 rounded-lg border border-white/40 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <Phone size={16} aria-hidden />
          <span dir="ltr">{mobilePhone.label}</span>
        </a>
        <a
          href={`tel:${officePhone.tel}`}
          className="inline-flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-brand-100 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          משרד: <span dir="ltr">{officePhone.label}</span>
        </a>
      </div>
    </Section>
  );
}
