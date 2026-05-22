import Link from "next/link";
import { Phone, MapPin } from "@phosphor-icons/react/dist/ssr";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-forest-950 text-cream-200">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {/* Brand */}
          <div>
            <p
              className="text-2xl font-semibold text-cream-50 mb-1"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Blade &amp; Spade
            </p>
            <p className="text-[10px] font-outfit font-light tracking-[0.18em] uppercase text-forest-300 mb-5">
              Landcare LLC
            </p>
            <p className="text-sm text-cream-300/70 leading-relaxed max-w-[38ch]">
              Caring for Eastside landscapes since 2001. Family-owned,
              locally rooted, and proud of every property we maintain.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-outfit font-semibold tracking-[0.15em] uppercase text-forest-300 mb-5">
              Navigate
            </h3>
            <ul className="flex flex-col gap-3" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-cream-200/70 hover:text-cream-50 transition-colors duration-200 cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-outfit font-semibold tracking-[0.15em] uppercase text-forest-300 mb-5">
              Contact
            </h3>
            <ul className="flex flex-col gap-4" role="list">
              <li>
                <a
                  href="tel:+12062265665"
                  className="flex items-center gap-3 text-sm text-cream-200/70 hover:text-cream-50 transition-colors duration-200 cursor-pointer group"
                >
                  <Phone
                    size={15}
                    className="text-forest-400 group-hover:text-forest-300 shrink-0"
                    aria-hidden="true"
                  />
                  (206) 226-5665
                </a>
              </li>
              <li>
                <address className="flex items-start gap-3 text-sm text-cream-200/70 not-italic">
                  <MapPin
                    size={15}
                    className="text-forest-400 shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>
                    23724 NE 65th Pl
                    <br />
                    Redmond, WA 98053
                  </span>
                </address>
              </li>
              <li className="pt-1">
                <p className="text-xs text-cream-200/50 leading-relaxed">
                  Mon–Fri 9am–5pm
                  <br />
                  Sat by appointment · Sun closed
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-forest-800 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-cream-200/40">
          <p>
            &copy; 2026 Blade &amp; Spade Landcare LLC. All rights reserved.
          </p>
          <p>Redmond, WA &mdash; Serving the Greater Eastside</p>
        </div>
      </div>
    </footer>
  );
}
