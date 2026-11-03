import Image from "next/image";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import { photos } from "@/lib/content";
import { siteConfig } from "@/lib/site";

/** Promo for Big-Bag, Flame's in-house pouf brand. */
export default function BigBagCallout() {
  return (
    <Section>
      <div className="grid items-center gap-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft md:grid-cols-2">
        <div className="relative aspect-[4/3] bg-slate-100 md:h-full md:aspect-auto md:min-h-[320px]">
          <Image
            src={photos.poufsBeach.src}
            alt={photos.poufsBeach.alt}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="p-6 sm:p-10">
          <Badge dot>מותג הבית של Flame</Badge>
          <h2 className="mt-4 text-3xl font-bold">פופים Big-Bag</h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            ביג-בג הוא מותג פופים צעיר ואיכותי, המשלב עיצובים חדשניים עם בדים מפנקים ואופנתיים. את הפופים ניתן להשיג
            במבחר גדלים וצבעים.
          </p>
          <Button
            variant="accent"
            href={siteConfig.links.bigBag}
            target="_blank"
            rel="noopener noreferrer"
            withArrow
            className="mt-6"
          >
            לאתר Big-Bag
          </Button>
        </div>
      </div>
    </Section>
  );
}
