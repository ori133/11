import HeroAgency from "@/components/sections/HeroAgency";
import Services from "@/components/sections/Services";
import Gallery from "@/components/sections/Gallery";
import Features from "@/components/sections/Features";
import Testimonials from "@/components/sections/Testimonials";
import BigBagCallout from "@/components/sections/BigBagCallout";
import CTA from "@/components/sections/CTA";
import { BulbGlyph, FlowerGlyph, PoufGlyph, TentGlyph } from "@/components/ui/glyphs";
import { clientNames, homeGallery } from "@/lib/content";

export default function Home() {
  return (
    <>
      <HeroAgency
        eyebrow="השכרת ציוד לאירועים, בכל רחבי הארץ"
        titleStart="מפיקים לכם את"
        highlight="האירוע המושלם"
        subtitle="אוהלים והצללות, ישיבה אלטרנטיבית, עיצוב אירועים וכל הציוד הנלווה להקמת אירוע מוצלח שיזכר לאורך שנים. ציוד מקצועי ברמת איכות ללא פשרות."
        primaryCta={{ label: "קבלו הצעת מחיר", href: "/contact" }}
        secondaryCta={{ label: "השירותים שלנו", href: "/#services" }}
        clients={clientNames}
        clientsHeading="עובדים איתנו"
        tiles={[
          { tone: "pink", glyph: FlowerGlyph },
          { tone: "blue", glyph: TentGlyph },
          { tone: "yellow", glyph: PoufGlyph },
          { tone: "pink", glyph: BulbGlyph },
        ]}
      />
      <Services />
      <Gallery
        items={homeGallery}
        eyebrow="גלריה"
        title="מהאירועים שלנו"
        text="חופות בחצר, אוהלים על חוף הים וישיבה שמזמינה להישאר. כמה רגעים מהאירועים שהקמנו."
      />
      <Features />
      <Testimonials limit={3} />
      <BigBagCallout />
      <CTA />
    </>
  );
}
