import Section from "@/components/ui/Section";

const features = [
  { title: "יתרון ראשון", text: "תיאור קצר של היתרון והערך ללקוח." },
  { title: "יתרון שני", text: "תיאור קצר של היתרון והערך ללקוח." },
  { title: "יתרון שלישי", text: "תיאור קצר של היתרון והערך ללקוח." },
];

export default function Features() {
  return (
    <Section>
      <h2 className="text-3xl font-bold">למה אנחנו</h2>
      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {features.map((f) => (
          <div key={f.title} className="rounded-xl border border-slate-200 p-6">
            <h3 className="font-semibold text-brand-700">{f.title}</h3>
            <p className="mt-2 text-slate-600">{f.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
