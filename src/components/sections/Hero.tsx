import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";

export default function Hero() {
  return (
    <Section className="bg-gradient-to-b from-brand-50 to-white">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">כותרת ראשית שמסבירה את הערך שלכם</h1>
        <p className="mt-6 text-lg text-slate-600">
          משפט תומך קצר שמתאר מה אתם עושים ולמי זה מיועד.
        </p>
        <div className="mt-8 flex gap-3">
          <Button href="/contact">בואו נדבר</Button>
          <Button href="/about" variant="secondary">
            עוד עלינו
          </Button>
        </div>
      </div>
    </Section>
  );
}
