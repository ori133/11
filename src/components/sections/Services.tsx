import Image from "next/image";
import Link from "next/link";
import { Armchair, ArrowRight, ArrowUpRight, Flame, ShoppingBag, Tent, type LucideIcon } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Section from "@/components/ui/Section";
import { photos, type Photo } from "@/lib/content";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/cn";

type Service = {
  title: string;
  text: string;
  href: string;
  external?: boolean;
  featured?: boolean;
  icon: LucideIcon;
  photo: Photo;
};

const services: Service[] = [
  {
    title: "עיצוב אירועים",
    text: "כל קשת העיצוב לאירועים: חופות, מרכזי שולחן, אווירה, פרחים, נרות, עששיות וציוד אלטרנטיבי, עם ליווי אישי מהייעוץ ועד יום האירוע.",
    href: "/event-design",
    featured: true,
    icon: Flame,
    photo: photos.designAisle,
  },
  {
    title: "אוהלים והצללות",
    text: "השכרה והקמה של אוהלי בד אלסטי נמתח ורשתות צל, בכל צורה ובכל מרחב.",
    href: "/tents",
    icon: Tent,
    photo: photos.tentGarden,
  },
  {
    title: "השכרת ציוד",
    text: "ישיבה אלטרנטיבית ורגילה, ישיבת ברים, פופים, גנרטורים, חימום ותאורה.",
    href: "/equipment",
    icon: Armchair,
    photo: photos.poufsColorful,
  },
  {
    title: "מכירת ציוד",
    text: "ציוד למכירה באתר ייעודי נפרד.",
    href: siteConfig.links.shop,
    external: true,
    icon: ShoppingBag,
    photo: photos.seatingBeach,
  },
];

export default function Services() {
  return (
    <Section id="services">
      <div className="max-w-2xl">
        <Badge className="mb-4">השירותים שלנו</Badge>
        <h2 className="text-3xl font-bold">מה אנחנו עושים</h2>
        <p className="mt-4 text-lg text-slate-600">
          אצלנו תמצאו מגוון רחב של פתרונות בנושא השכרת ציוד לאירועים. כל הציוד מקצועי ובאיכות ללא פשרות.
        </p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map(({ icon: Icon, photo, ...s }) => (
          <div
            key={s.title}
            className={cn(
              "flex flex-col overflow-hidden rounded-2xl border shadow-soft transition-shadow hover:shadow-tile",
              s.featured ? "border-brand-100 bg-brand-50" : "border-slate-200 bg-white",
            )}
          >
            <div className="relative aspect-[4/3] bg-slate-100">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
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
          </div>
        ))}
      </div>
    </Section>
  );
}
