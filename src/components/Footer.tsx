import Link from "next/link";
import { FOOTER_LINKS } from "@/lib/constants";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-navy)]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="text-xl font-bold tracking-tight">
              <span className="text-[var(--color-blue)]">Price</span>
              <span className="text-[var(--color-white)]">Layer</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-[var(--color-gray-light)]">
              Strategy-led pricing optimization for B2B SaaS companies ready to unlock trapped revenue.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-[var(--color-gray-light)] transition-colors hover:text-[var(--color-white)]"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-[var(--color-gray-light)] transition-colors hover:text-[var(--color-white)]"
              >
                <XIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-white)]">
              Company
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-gray-light)] transition-colors hover:text-[var(--color-white)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-white)]">
              Services
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-gray-light)] transition-colors hover:text-[var(--color-white)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-white)]">
              Legal
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-gray-light)] transition-colors hover:text-[var(--color-white)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-[var(--color-gray-light)]">
          &copy; {new Date().getFullYear()} PriceLayer. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
