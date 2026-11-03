import type { Metadata } from "next";
import Section from "@/components/ui/Section";

export const metadata: Metadata = { title: "אודות" };

export default function AboutPage() {
  return (
    <Section>
      <h1 className="text-4xl font-bold">אודות</h1>
      <p className="mt-4 max-w-2xl text-slate-600">כאן יופיע הסיפור של החברה, החזון והצוות.</p>
    </Section>
  );
}
