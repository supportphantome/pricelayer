import {
  Layers,
  Package,
  Search,
  ArrowRight,
  BarChart3,
  TrendingUp,
  DollarSign,
  Users,
} from 'lucide-react';
import {getTranslations} from 'next-intl/server';
import {Link} from '@/i18n/navigation';
import CTABanner from '@/components/CTABanner';

const STATS = [
  {icon: Users, value: '200+', labelKey: 'statsCompanies'},
  {icon: TrendingUp, value: '23%', labelKey: 'statsUplift'},
  {icon: DollarSign, value: '$2.1B', labelKey: 'statsArr'},
  {icon: BarChart3, value: '50+', labelKey: 'statsMigrations'},
] as const;

const SERVICES = [
  {icon: Layers, titleKey: 'service1Title', descriptionKey: 'service1Description'},
  {icon: Package, titleKey: 'service2Title', descriptionKey: 'service2Description'},
  {icon: Search, titleKey: 'service3Title', descriptionKey: 'service3Description'},
] as const;

const STEPS = [
  {step: '01', titleKey: 'step1Title', descriptionKey: 'step1Description'},
  {step: '02', titleKey: 'step2Title', descriptionKey: 'step2Description'},
  {step: '03', titleKey: 'step3Title', descriptionKey: 'step3Description'},
] as const;

const TESTIMONIALS = [
  {quoteKey: 'testimonial1Quote', name: 'Sarah Chen', roleKey: 'testimonial1Role'},
  {quoteKey: 'testimonial2Quote', name: 'Marcus Rivera', roleKey: 'testimonial2Role'},
  {quoteKey: 'testimonial3Quote', name: 'Amira Okafor', roleKey: 'testimonial3Role'},
] as const;

export default async function Home() {
  const t = await getTranslations('HomePage');

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--color-navy)]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(37,99,235,0.15),_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(13,148,136,0.1),_transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-20 md:pb-32 md:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full border border-[var(--color-blue)]/30 bg-[var(--color-blue)]/10 px-4 py-1.5 text-sm font-medium text-[var(--color-blue)]">
              {t('badge')}
            </span>
            <h1 className="mt-8 text-4xl font-bold leading-tight tracking-tight text-[var(--color-white)] md:text-6xl md:leading-tight">
              {t('heroTitle')}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[var(--color-gray-light)] md:text-xl">
              {t('heroSubtitle')}
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-blue)] px-8 py-3.5 text-base font-semibold text-[var(--color-white)] transition-colors hover:bg-[var(--color-blue-hover)]"
              >
                {t('heroPrimaryCta')}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-8 py-3.5 text-base font-semibold text-[var(--color-white)] transition-colors hover:bg-white/5"
              >
                {t('heroSecondaryCta')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-[var(--color-border)] bg-[var(--color-white)]">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.labelKey} className="text-center">
                <stat.icon className="mx-auto h-6 w-6 text-[var(--color-teal)]" />
                <p className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-navy)]">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-[var(--color-gray)]">{t(stat.labelKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-[var(--color-light)]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--color-navy)] md:text-4xl">
              {t('servicesTitle')}
            </h2>
            <p className="mt-4 text-lg text-[var(--color-gray)]">
              {t('servicesSubtitle')}
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {SERVICES.map((service) => (
              <div
                key={service.titleKey}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-white)] p-8 transition-shadow hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--color-blue)]/10">
                  <service.icon className="h-6 w-6 text-[var(--color-blue)]" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-[var(--color-navy)]">
                  {t(service.titleKey)}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-[var(--color-gray)]">
                  {t(service.descriptionKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-[var(--color-white)]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--color-navy)] md:text-4xl">
              {t('howItWorksTitle')}
            </h2>
            <p className="mt-4 text-lg text-[var(--color-gray)]">
              {t('howItWorksSubtitle')}
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {STEPS.map((step) => (
              <div key={step.step} className="relative">
                <span className="text-5xl font-bold text-[var(--color-blue)]/10">
                  {step.step}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-[var(--color-navy)]">
                  {t(step.titleKey)}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-[var(--color-gray)]">
                  {t(step.descriptionKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Positioning */}
      <section className="bg-[var(--color-light)]">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--color-navy)] md:text-4xl">
            {t('positioningTitleLine1')}
            <br />
            {t('positioningTitleLine2')}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-gray)]">
            {t('positioningDescription')}
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[var(--color-white)]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <h2 className="text-center text-3xl font-bold tracking-tight text-[var(--color-navy)] md:text-4xl">
            {t('testimonialsTitle')}
          </h2>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {TESTIMONIALS.map((item) => (
              <div
                key={item.name}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-light)] p-8"
              >
                <p className="text-base leading-relaxed text-[var(--color-text-muted)]">
                  &ldquo;{t(item.quoteKey)}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-blue)]/10 text-sm font-bold text-[var(--color-blue)]">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--color-navy)]">{item.name}</p>
                    <p className="text-sm text-[var(--color-gray)]">{t(item.roleKey)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTABanner
        headline={t('finalCtaHeadline')}
        buttonText={t('finalCtaButton')}
        buttonHref="/signup"
      />
    </>
  );
}
