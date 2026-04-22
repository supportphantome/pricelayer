import {getTranslations} from 'next-intl/server';
import {Link} from '@/i18n/navigation';

interface CTABannerProps {
  headline: string;
  buttonText: string;
  buttonHref: string;
}

export default async function CTABanner({headline, buttonText, buttonHref}: CTABannerProps) {
  const t = await getTranslations('CTABanner');

  return (
    <section className="bg-[var(--color-navy)]">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-[var(--color-white)] md:text-4xl">
          {headline}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-[var(--color-gray-light)]">
          {t('description')}
        </p>
        <Link
          href={buttonHref}
          className="mt-8 inline-block rounded-lg bg-[var(--color-blue)] px-8 py-3.5 text-base font-semibold text-[var(--color-white)] transition-colors hover:bg-[var(--color-blue-hover)]"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
