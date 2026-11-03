import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";

export default function CTA() {
  return (
    <Section className="bg-brand-600 text-white">
      <h2 className="text-3xl font-bold">מוכנים להתחיל?</h2>
      <p className="mt-3 text-brand-100">השאירו פרטים ונחזור אליכם בהקדם.</p>
      <Button href="/contact" variant="secondary" className="mt-6 bg-white">
        צור קשר
      </Button>
    </Section>
  );
}
