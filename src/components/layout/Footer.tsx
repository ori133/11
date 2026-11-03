import Container from "@/components/ui/Container";
import { siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-8 text-sm text-slate-600">
      <Container>
        © {new Date().getFullYear()} {siteConfig.name}. כל הזכויות שמורות.
      </Container>
    </footer>
  );
}
