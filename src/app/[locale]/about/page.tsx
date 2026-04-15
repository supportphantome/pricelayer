import { Target, Heart, Handshake } from "lucide-react";
import CTABanner from "@/components/CTABanner";
import {getTranslations} from "next-intl/server";

export default async function AboutPage() {
  const t = await getTranslations('AboutPage');

  const TEAM = [
    {
      name: t('team.elenaVoss.name'),
      title: t('team.elenaVoss.title'),
      bio: t('team.elenaVoss.bio'),
    },
    {
      name: t('team.jamesOkonkwo.name'),
      title: t('team.jamesOkonkwo.title'),
      bio: t('team.jamesOkonkwo.bio'),
    },
    {
      name: t('team.priyaSharma.name'),
      title: t('team.priyaSharma.title'),
      bio: t('team.priyaSharma.bio'),
    },
    {
      name: t('team.danielKim.name'),
      title: t('team.danielKim.title'),
      bio: t('team.danielKim.bio'),
    },
  ];

  const VALUES = [
    {
      icon: Target,
      title: t('values.evidenceOverIntuition.title'),
      description: t('values.evidenceOverIntuition.description'),
    },
    {
      icon: Heart,
      title: t('values.revenueWithoutResentment.title'),
      description: t('values.revenueWithoutResentment.description'),
    },
    {
      icon: Handshake,
      title: t('values.longTermPartnership.title'),
      description: t('values.longTermPartnership.description'),
    },
  ];

  return (
    <>
      {/* Mission */}
      <section className="bg-[var(--color-navy)]">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
          <h1 className="text-4xl font-bold tracking-tight text-[var(--color-white)] md:text-5xl">
            {t('title')}
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-[var(--color-gray-light)]">
            {t('mission')}
          </p>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-[var(--color-white)]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--color-navy)]">
              {t('approachHeading')}
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-[var(--color-text-muted)]">
              <p>
                {t('approachP1')}
              </p>
              <p>
                {t.rich('approachP2', {
                  strong: (chunks) => <strong className="text-[var(--color-text)]">{chunks}</strong>,
                })}
              </p>
              <p>
                {t('approachP3')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-[var(--color-light)]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <h2 className="text-center text-3xl font-bold tracking-tight text-[var(--color-navy)]">
            {t('teamHeading')}
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
                <p className="text-sm font-medium text-[var(--color-blue)]">{member.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-gray)]">
                  {member.bio}
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
            {t('valuesHeading')}
          </h2>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {VALUES.map((value) => (
              <div key={value.title} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--color-teal)]/10">
                  <value.icon className="h-7 w-7 text-[var(--color-teal)]" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-[var(--color-navy)]">
                  {value.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-[var(--color-gray)]">
                  {value.description}
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
