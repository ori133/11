import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";

/** Top banner for inner pages: eyebrow, h1 and intro text. */
export default function PageHeader({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="bg-gradient-to-b from-brand-50 to-white py-14 sm:py-20">
      <Container>
        <Badge className="mb-4">{eyebrow}</Badge>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">{title}</h1>
        {children && <div className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">{children}</div>}
      </Container>
    </section>
  );
}
