"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-white)]/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-1 text-xl font-bold tracking-tight">
          <span className="text-[var(--color-blue)]">Price</span>
          <span className="text-[var(--color-navy)]">Layer</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/signup"
            className="rounded-lg bg-[var(--color-blue)] px-5 py-2.5 text-sm font-semibold text-[var(--color-white)] transition-colors hover:bg-[var(--color-blue-hover)]"
          >
            Get Started
          </Link>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-[var(--color-border)] bg-[var(--color-white)] px-6 pb-6 pt-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/signup"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-lg bg-[var(--color-blue)] px-5 py-2.5 text-center text-sm font-semibold text-[var(--color-white)] transition-colors hover:bg-[var(--color-blue-hover)]"
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
