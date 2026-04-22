import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import {NextIntlClientProvider} from 'next-intl';
import {getLocale, getMessages, setRequestLocale} from 'next-intl/server';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'PriceLayer — B2B SaaS Pricing Consultancy',
  description:
    'PriceLayer helps B2B SaaS companies unlock revenue trapped in their pricing. We design pricing tiers, packaging, and monetization strategies that increase expansion revenue and reduce churn.',
  openGraph: {
    title: 'PriceLayer — B2B SaaS Pricing Consultancy',
    description:
      'Unlock revenue trapped in your pricing. Strategy-led pricing optimization for B2B SaaS.',
    type: 'website',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  setRequestLocale(locale);
  const messages = await getMessages();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={dir} className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col font-primary text-[var(--color-text)] bg-[var(--color-white)]">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
