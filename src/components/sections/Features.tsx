import { Armchair, MapPin, Palette, Sparkles, type LucideIcon } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Section from "@/components/ui/Section";

type Feature = { title: string; text: string; icon: LucideIcon };

const defaultFeatures: Feature[] = [
  {
    title: "ציוד מקצועי ללא פשרות",
    text: "כל הציוד המושכר הוא ציוד מקצועי ובאיכות גבוהה, עמיד בתנאי מזג האוויר הישראלי.",
    icon: Armchair,
  },
  {
    title: "מעצב בית ולוגיסטיקה במקום אחד",
    text: "המעצב לירן אלמוסנינו, בעל תואר אקדמי בעיצוב פנים, מלווה אתכם מפגישת הייעוץ ועד יום האירוע.",
    icon: Palette,
  },
  {
    title: "בכל מקום, בכל גודל",
    text: "בחצר, על חוף הים או בלב המדבר, ממטרים בודדים ועד אוהלים לאירועים המוניים בגודל מאות מטרים.",
    icon: MapPin,
  },
  {
    title: "שירות אישי וגמיש",
    text: "מענה חם ואמין לכל פונה, והתאמה של הציוד, הצבעים והישיבה לרצון הלקוח.",
    icon: Sparkles,
  },
];

export default function Features({
  title = "למה Flame",
  items = defaultFeatures,
}: {
  title?: string;
  items?: Feature[];
}) {
  return (
    <Section>
      <div className="max-w-2xl">
        <Badge className="mb-4">היתרונות שלנו</Badge>
        <h2 className="text-3xl font-bold">{title}</h2>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, ...f }) => (
          <div key={f.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-accent-blue">
              <Icon size={22} aria-hidden />
            </span>
            <h3 className="mt-4 font-semibold text-ink">{f.title}</h3>
            <p className="mt-2 text-slate-600">{f.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
