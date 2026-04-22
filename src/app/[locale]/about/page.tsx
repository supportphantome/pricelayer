import {Target, Heart, Handshake} from 'lucide-react';
import {getTranslations} from 'next-intl/server';
import CTABanner from '@/components/CTABanner';

const TEAM = [
  {name: 'Elena Voss', roleKey: 'team1Role', bioKey: 'team1Bio'},
  {name: 'James Okonkwo', roleKey: 'team2Role', bioKey: 'team2Bio'},
  {name: 'Priya Sharma', roleKey: 'team3Role', bioKey: 'team3Bio'},
  {name: 'Daniel Kim', roleKey: 'team4Role', bioKey: 'team4Bio'},
] as const;

const VALUES = [
  {icon: Target, titleKey: 'value1Title', descriptionKey: 'value1Description'},
  {icon: Heart, titleKey: 'value2Title', descriptionKey: 'value2Description'},
  {icon: Handshake, titleKey: 'value3Title', descriptionKey: 'value3Description'},
] as const;

export default async function AboutPage() {
  const t = await getTranslations('AboutPage');

  return (
    <>
      {/* Mission */}
      <section className="bg-[var(--color-navy)]">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
          <h1 className="text-4xl font-bold tracking-tight text-[var(--color-white)] md:text-5xl">
            {t('heroTitle')}
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-[var(--color-gray-light)]">
            {t('heroSubtitle')}
          </p>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-[var(--color-white)]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--color-navy)]">
              {t('approachTitle')}
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-[var(--color-text-muted)]">
              <p>{t('approachP1')}</p>
              <p>
                {t('approachP2Prefix')}
                <strong className="text-[var(--color-text)]">{t('approachP2Term1')}</strong>
                {t('approachP2Middle1')}
                <strong className="text-[var(--color-text)]">{t('approachP2Term2')}</strong>
                {t('approachP2Middle2')}
                <strong className="text-[var(--color-text)]">{t('approachP2Term3')}</strong>
                {t('approachP2Suffix')}
              </p>
              <p>{t('approachP3')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-[var(--color-light)]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <h2 className="text-center text-3xl font-bold tracking-tight text-[var(--color-navy)]">
            {t('teamTitle')}
          </h2>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-white)] p-6"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-blue)]/10 text-xl font-bold text-[var(--color-blue)]">
                  {member.name.charAt(0)}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[var(--color-navy)]">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-[var(--color-blue)]">{t(member.roleKey)}</p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-gray)]">
                  {t(member.bioKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[var(--color-white)]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <h2 className="text-center text-3xl font-bold tracking-tight text-[var(--color-navy)]">
            {t('valuesTitle')}
          </h2>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {VALUES.map((value) => (
              <div key={value.titleKey} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--color-teal)]/10">
                  <value.icon className="h-7 w-7 text-[var(--color-teal)]" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-[var(--color-navy)]">
                  {t(value.titleKey)}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-[var(--color-gray)]">
                  {t(value.descriptionKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline={t('ctaHeadline')}
        buttonText={t('ctaButton')}
        buttonHref="/contact"
      />
    </>
  );
}
