import { cn } from "@/lib/cn";

/** Signature element: a word set on a rounded yellow marker block. */
export default function Highlight({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <mark className={cn("inline-block rounded-md bg-accent-yellow px-[0.18em] text-ink", className)}>{children}</mark>
  );
}
