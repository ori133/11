"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

const field =
  "mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  // TODO: חיבור ל-API / שירות שליחת מייל. כרגע הטופס לא שולח את הפרטים לשום מקום.
  if (sent) return <p className="mt-6 text-brand-700">תודה! נחזור אליכם בהקדם.</p>;

  return (
    <form
      className="mt-6 space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <label className="block text-sm">
        שם
        <input name="name" required autoComplete="name" className={field} />
      </label>
      <label className="block text-sm">
        טלפון
        <input name="phone" type="tel" required autoComplete="tel" dir="ltr" className={`${field} text-start`} />
      </label>
      <label className="block text-sm">
        אימייל
        <input name="email" type="email" autoComplete="email" dir="ltr" className={`${field} text-start`} />
      </label>
      <label className="block text-sm">
        ספרו לנו על האירוע
        <textarea name="message" rows={4} required className={field} />
      </label>
      <Button type="submit" variant="accent">
        שליחה
      </Button>
    </form>
  );
}
