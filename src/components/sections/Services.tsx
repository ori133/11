import Link from "next/link";
import { Armchair, ArrowRight, ArrowUpRight, Flame, ShoppingBag, Tent, type LucideIcon } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Section from "@/components/ui/Section";
import { cn } from "@/lib/cn";

type Service = {
  title: string;
  text: string;
  href: string;
  external?: boolean;
  featured?: boolean;
  icon: LucideIcon;
};

const services: Service[] = [
  {
    title: "עיצוב אירועים",
    text: "חופות, קבלות פנים ומרכזי שולחן, עם ליווי אישי מהייעוץ הראשוני ועד יום האירוע.",
    href: "/contact",
    featured: true,
    icon: Flame,
  },
  {
    title: "אוהלים והצללות",
    text: "אוהלים ופתרונות הצללה שמתאימים לאירוע ולמקום.",
    href: "/contact",
    icon: Tent,
  },
  {
    title: "השכרת ציוד",
    text: "ציוד לאירועים להשכרה, בהתאמה לעיצוב ולצרכים שלכם.",
    href: "/contact",
    icon: Armchair,
  },
  {
    title: "מכירת ציוד",
    text: "ציוד למכירה באתר ייעודי נפרד.",
    href: "https://example.com",
    external: true,
    icon: ShoppingBag,
  },
];

export default function Services() {
  return (
    <Section id="services">
      <div className="max-w-2xl">
        <Badge className="mb-4">השירותים שלנו</Badge>
        <h2 className="text-3xl font-bold">מה אנחנו עושים</h2>
        <p className="mt-4 text-lg text-slate-600">
          כל מה שצריך כדי להפוך את האירוע שלכם לחוויה מעוצבת עד הפרט האחרון.
        </p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map(({ icon: Icon, ...s }) => (
          <div
            key={s.title}
            className={cn(
              "flex flex-col rounded-2xl border p-6 shadow-soft transition-shadow hover:shadow-tile",
              s.featured ? "border-brand-100 bg-brand-50 sm:col-span-2 lg:col-span-1" : "border-slate-200 bg-white",
            )}
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-accent-blue shadow-soft">
              <Icon size={22} aria-hidden />
            </span>
            <h3 className="mt-4 font-semibold text-ink">{s.title}</h3>
            <p className="mt-2 flex-1 text-slate-600">{s.text}</p>
            <Link
              href={s.href}
              {...(s.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent-blue hover:text-accent-blue-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
            >
              לפרטים
              {s.external ? (
                <ArrowUpRight size={14} aria-hidden />
              ) : (
                <ArrowRight size={14} aria-hidden className="rtl:rotate-180" />
              )}
            </Link>
          </div>
        ))}
      </div>
    </Section>
  );
}
