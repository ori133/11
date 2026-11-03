import Link from "next/link";
import Section from "@/components/ui/Section";
import { cn } from "@/lib/cn";

type Service = {
  title: string;
  text: string;
  href: string;
  external?: boolean;
  featured?: boolean;
  icon: React.ReactNode;
};

const iconProps = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const services: Service[] = [
  {
    title: "עיצוב אירועים",
    text: "חופות, קבלות פנים ומרכזי שולחן, עם ליווי אישי מהייעוץ הראשוני ועד יום האירוע.",
    href: "/contact",
    featured: true,
    icon: (
      <svg {...iconProps}>
        <path d="M12 3c1 3 4 4.5 4 8a4 4 0 0 1-8 0c0-1.5.7-2.5 1.5-3.5C10 9 11 7 12 3Z" />
        <path d="M8 21h8" />
      </svg>
    ),
  },
  {
    title: "אוהלים והצללות",
    text: "אוהלים ופתרונות הצללה שמתאימים לאירוע ולמקום.",
    href: "/contact",
    icon: (
      <svg {...iconProps}>
        <path d="M3 20 12 4l9 16" />
        <path d="M12 4v16M7.5 20 12 12l4.5 8" />
      </svg>
    ),
  },
  {
    title: "השכרת ציוד",
    text: "ציוד לאירועים להשכרה, בהתאמה לעיצוב ולצרכים שלכם.",
    href: "/contact",
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="8" width="18" height="12" rx="2" />
        <path d="M8 8V6a4 4 0 0 1 8 0v2" />
      </svg>
    ),
  },
  {
    title: "מכירת ציוד",
    text: "ציוד למכירה באתר ייעודי נפרד.",
    href: "https://example.com",
    external: true,
    icon: (
      <svg {...iconProps}>
        <path d="M6 7h12l-1 12H7L6 7Z" />
        <path d="M9 7a3 3 0 0 1 6 0" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <Section id="services">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold">השירותים שלנו</h2>
        <p className="mt-4 text-lg text-slate-600">
          כל מה שצריך כדי להפוך את האירוע שלכם לחוויה מעוצבת עד הפרט האחרון.
        </p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => (
          <div
            key={s.title}
            className={cn(
              "flex flex-col rounded-xl border p-6",
              s.featured ? "border-brand-100 bg-brand-50 sm:col-span-2 lg:col-span-1" : "border-slate-200",
            )}
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-100 text-brand-600">
              {s.icon}
            </span>
            <h3 className="mt-4 font-semibold text-brand-700">{s.title}</h3>
            <p className="mt-2 flex-1 text-slate-600">{s.text}</p>
            <Link
              href={s.href}
              {...(s.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-600 hover:text-brand-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
            >
              לפרטים
              <span aria-hidden>{s.external ? "↗" : "←"}</span>
            </Link>
          </div>
        ))}
      </div>
    </Section>
  );
}
