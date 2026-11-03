"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

const field = "mt-1 w-full rounded-lg border border-slate-300 px-3 py-2";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  // TODO: חיבור ל-API / שירות שליחת מייל
  if (sent) return <p className="mt-6 text-brand-700">תודה! נחזור אליכם בהקדם.</p>;

  return (
    <form
      className="mt-6 max-w-lg space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <label className="block text-sm">
        שם
        <input name="name" required className={field} />
      </label>
      <label className="block text-sm">
        אימייל
        <input name="email" type="email" required className={field} />
      </label>
      <label className="block text-sm">
        הודעה
        <textarea name="message" rows={4} required className={field} />
      </label>
      <Button type="submit">שליחה</Button>
    </form>
  );
}
