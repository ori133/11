import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "accent" | "ghost";

const styles: Record<Variant, string> = {
  primary: "bg-brand-600 text-white hover:bg-brand-700",
  secondary: "border border-slate-300 text-slate-900 hover:bg-slate-50",
  accent: "bg-accent-blue text-white hover:bg-accent-blue-hover",
  ghost: "text-slate-900 hover:bg-slate-100",
};

const base =
  "group inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600";

type Props = { variant?: Variant; className?: string; withArrow?: boolean } & (
  | ({ href: string } & Omit<React.ComponentProps<typeof Link>, "className">)
  | ({ href?: undefined } & React.ComponentProps<"button">)
);

export default function Button({ variant = "primary", className, withArrow = false, children, ...props }: Props) {
  const classes = cn(base, styles[variant], className);
  const content = (
    <>
      {children}
      {withArrow && (
        <span className="grid size-5 place-items-center rounded-full border border-current">
          {/* flips in RTL so the arrow always points "forward" */}
          <ArrowRight
            size={12}
            aria-hidden
            className="transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5"
          />
        </span>
      )}
    </>
  );
  if (props.href !== undefined) {
    return (
      <Link className={classes} {...(props as React.ComponentProps<typeof Link>)}>
        {content}
      </Link>
    );
  }
  return (
    <button className={classes} {...(props as React.ComponentProps<"button">)}>
      {content}
    </button>
  );
}
