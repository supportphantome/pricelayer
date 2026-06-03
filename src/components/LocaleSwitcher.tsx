"use client";

import {useLocale} from 'next-intl';
import {useRouter, usePathname} from '@/i18n/navigation';
import {routing} from '@/i18n/routing';
import {Globe} from 'lucide-react';
import {useState, useRef, useEffect} from 'react';

const LOCALE_LABELS: Record<string, string> = {
  en: 'English',
  de: 'Deutsch',
  fr: 'Français',
  es: 'Español',
  ar: 'العربية',
};

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function switchLocale(nextLocale: string) {
    setOpen(false);
    router.replace(pathname, {locale: nextLocale});
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 rounded-lg border border-[var(--color-border)] px-3 py-2 text-sm font-medium text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)] hover:border-[var(--color-text-muted)]"
      >
        <Globe className="h-4 w-4" />
        {LOCALE_LABELS[locale] ?? locale}
      </button>

      {open && (
        <div className="absolute end-0 top-full z-50 mt-2 min-w-[160px] rounded-lg border border-[var(--color-border)] bg-[var(--color-white)] py-1 shadow-lg">
          {routing.locales.map((l) => (
            <button
              key={l}
              onClick={() => switchLocale(l)}
              className={`block w-full px-4 py-2 text-start text-sm transition-colors hover:bg-[var(--color-light)] ${
                l === locale
                  ? 'font-semibold text-[var(--color-blue)]'
                  : 'text-[var(--color-text-muted)]'
              }`}
            >
              {LOCALE_LABELS[l] ?? l}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
