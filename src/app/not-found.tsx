import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";

export default function NotFound() {
  return (
    <Section>
      <h1 className="text-4xl font-bold">404 – העמוד לא נמצא</h1>
      <Button href="/" className="mt-6">
        חזרה לדף הבית
      </Button>
    </Section>
  );
}
