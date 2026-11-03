import { Quote } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import { testimonials } from "@/lib/content";

/** `limit` shows only the first N testimonials and adds a "see all" link. */
export default function Testimonials({ limit, title = "לקוחות מספרים על Flame" }: { limit?: number; title?: string }) {
  const items = limit ? testimonials.slice(0, limit) : testimonials;
  return (
    <Section className="bg-slate-50">
      <div className="max-w-2xl">
        <Badge className="mb-4">לקוחות מספרים</Badge>
        <h2 className="text-3xl font-bold">{title}</h2>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {items.map((t) => (
          <figure key={t.name} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
            <Quote size={24} aria-hidden className="text-accent-pink" />
            <blockquote className="mt-4 flex-1 leading-relaxed text-slate-700">{t.text}</blockquote>
            <figcaption className="mt-6 border-t border-slate-100 pt-4">
              <span className="block font-semibold text-ink">{t.name}</span>
              <span className="text-sm text-slate-600">{t.org}</span>
            </figcaption>
          </figure>
        ))}
      </div>
      {limit && limit < testimonials.length && (
        <div className="mt-8">
          <Button href="/testimonials" variant="ghost" withArrow>
            לכל ההמלצות
          </Button>
        </div>
      )}
    </Section>
  );
}
