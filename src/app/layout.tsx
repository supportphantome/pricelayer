import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getLocale } from "next-intl/server";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PriceLayer — B2B SaaS Pricing Consultancy",
  description:
    "PriceLayer helps B2B SaaS companies unlock revenue trapped in their pricing. We design pricing tiers, packaging, and monetization strategies that increase expansion revenue and reduce churn.",
  openGraph: {
    title: "PriceLayer — B2B SaaS Pricing Consultancy",
    description:
      "Unlock revenue trapped in your pricing. Strategy-led pricing optimization for B2B SaaS.",
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale} className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col font-primary text-[var(--color-text)] bg-[var(--color-white)]">
        {children}
      </body>
    </html>
  );
}
