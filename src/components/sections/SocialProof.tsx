import { Star } from "lucide-react";

function Rating({ score, label }: { score: number; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <div role="img" aria-label={`דירוג ${score} מתוך 5`} className="flex gap-0.5 text-accent-yellow">
        {Array.from({ length: 5 }, (_, i) => (
          <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
        ))}
      </div>
      <span className="text-[13px] text-slate-600">
        <strong className="font-semibold text-slate-900">{score}</strong> {label}
      </span>
    </div>
  );
}

/** Text-only placeholder wordmarks; swap for real client SVG logos. */
function LogoCloud({ names }: { names: string[] }) {
  return (
    <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-base font-semibold tracking-tight text-slate-500">
      {names.map((n) => (
        <li key={n}>{n}</li>
      ))}
    </ul>
  );
}

export default function SocialProof({
  clients,
  score,
  label,
  heading,
}: {
  clients: string[];
  /** Star rating; omit it when there is no real rating to show. */
  score?: number;
  label?: string;
  /** Text shown instead of the rating, e.g. "עובדים איתנו". */
  heading?: string;
}) {
  return (
    <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-8">
      {score !== undefined && label ? (
        <Rating score={score} label={label} />
      ) : (
        heading && <span className="text-[13px] font-medium text-slate-600">{heading}</span>
      )}
      <span aria-hidden className="hidden h-5 w-px bg-slate-200 sm:block" />
      <LogoCloud names={clients} />
    </div>
  );
}
