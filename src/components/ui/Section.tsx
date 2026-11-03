import { cn } from "@/lib/cn";
import Container from "./Container";

export default function Section({ className, children, ...props }: React.ComponentProps<"section">) {
  return (
    <section className={cn("py-16 sm:py-24", className)} {...props}>
      <Container>{children}</Container>
    </section>
  );
}
