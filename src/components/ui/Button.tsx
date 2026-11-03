import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary";

const styles: Record<Variant, string> = {
  primary: "bg-brand-600 text-white hover:bg-brand-700",
  secondary: "border border-slate-300 text-slate-900 hover:bg-slate-50",
};

const base =
  "inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600";

type Props = { variant?: Variant; className?: string } & (
  | ({ href: string } & Omit<React.ComponentProps<typeof Link>, "className">)
  | ({ href?: undefined } & React.ComponentProps<"button">)
);

export default function Button({ variant = "primary", className, ...props }: Props) {
  const classes = cn(base, styles[variant], className);
  if (props.href !== undefined) {
    return <Link className={classes} {...(props as React.ComponentProps<typeof Link>)} />;
  }
  return <button className={classes} {...(props as React.ComponentProps<"button">)} />;
}
