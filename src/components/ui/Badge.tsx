import { cn } from "@/lib/cn";

/** Small pill used for eyebrows and status labels. */
export default function Badge({
  children,
  dot = false,
  className,
}: {
  children: React.ReactNode;
  /** Show a pulsing accent dot before the label. */
  dot?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-900 shadow-soft",
        className,
      )}
    >
      {dot && (
        <span aria-hidden className="relative flex size-2">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent-pink opacity-60" />
          <span className="relative inline-flex size-2 rounded-full bg-accent-pink" />
        </span>
      )}
      {children}
    </span>
  );
}
