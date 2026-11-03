"use client";

import Link from "next/link";
import { useState } from "react";
import { Flame, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-1.5 text-lg font-bold text-ink">
          <Flame size={20} aria-hidden className="text-accent-pink" fill="currentColor" />
          {siteConfig.name}
        </Link>
        <nav className="hidden gap-6 lg:flex" aria-label="ראשי">
          {siteConfig.nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-slate-700 hover:text-brand-600">
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          href={`tel:${siteConfig.contact.mobilePhone.tel}`}
          className="hidden items-center gap-2 rounded-lg bg-ink px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 xl:inline-flex"
        >
          <Phone size={14} aria-hidden />
          <span dir="ltr">{siteConfig.contact.mobilePhone.label}</span>
        </a>
        <button
          className="rounded-md p-2 lg:hidden"
          aria-label="תפריט"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-0.5 w-5 bg-slate-900" />
          <span className="mt-1 block h-0.5 w-5 bg-slate-900" />
          <span className="mt-1 block h-0.5 w-5 bg-slate-900" />
        </button>
      </Container>
      {open && (
        <nav className="border-t border-slate-200 lg:hidden" aria-label="תפריט מובייל">
          <Container className="flex flex-col py-2">
            {siteConfig.nav.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="py-2 text-slate-700">
                {item.label}
              </Link>
            ))}
            <a href={`tel:${siteConfig.contact.mobilePhone.tel}`} className="py-2 font-medium text-accent-blue">
              התקשרו: <span dir="ltr">{siteConfig.contact.mobilePhone.label}</span>
            </a>
          </Container>
        </nav>
      )}
    </header>
  );
}
