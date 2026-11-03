"use client";

import Link from "next/link";
import { useState } from "react";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="text-lg font-bold text-brand-700">
          {siteConfig.name}
        </Link>
        <nav className="hidden gap-6 sm:flex" aria-label="ראשי">
          {siteConfig.nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-slate-700 hover:text-brand-600">
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          className="rounded-md p-2 sm:hidden"
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
        <nav className="border-t border-slate-200 sm:hidden" aria-label="תפריט מובייל">
          <Container className="flex flex-col py-2">
            {siteConfig.nav.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="py-2 text-slate-700">
                {item.label}
              </Link>
            ))}
          </Container>
        </nav>
      )}
    </header>
  );
}
