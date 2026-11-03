import { Flame } from "lucide-react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/lib/site";

export default function Footer() {
  const { officePhone, mobilePhone, address, owner } = siteConfig.contact;
  const phoneLink = "hover:text-accent-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600";
  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-12 text-sm text-slate-600">
      <Container>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="flex items-center gap-1.5 text-lg font-bold text-ink">
              <Flame size={20} aria-hidden className="text-accent-pink" fill="currentColor" />
              {siteConfig.name}
            </p>
            <p className="mt-1 font-medium text-slate-700">{siteConfig.tagline}</p>
            <p className="mt-3 max-w-xs leading-relaxed">השכרת ציוד לאירועים: {siteConfig.contact.serviceArea}.</p>
          </div>
          <nav aria-label="תחתית האתר">
            <p className="font-semibold text-ink">ניווט</p>
            <ul className="mt-3 space-y-2">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-accent-blue">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href={siteConfig.links.bigBag} target="_blank" rel="noopener noreferrer" className="hover:text-accent-blue">
                  Big-Bag, פופים
                </a>
              </li>
            </ul>
          </nav>
          <div>
            <p className="font-semibold text-ink">צור קשר</p>
            <ul className="mt-3 space-y-2">
              <li>
                {owner}, {address}
              </li>
              <li>
                משרד ומחסן:{" "}
                <a href={`tel:${officePhone.tel}`} dir="ltr" className={phoneLink}>
                  {officePhone.label}
                </a>
              </li>
              <li>
                פלאפון:{" "}
                <a href={`tel:${mobilePhone.tel}`} dir="ltr" className={phoneLink}>
                  {mobilePhone.label}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-10 border-t border-slate-200 pt-6">
          © {new Date().getFullYear()} {siteConfig.name}. כל הזכויות שמורות.
        </p>
      </Container>
    </footer>
  );
}
