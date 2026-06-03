import { Target, Heart, Handshake } from "lucide-react";
import CTABanner from "@/components/CTABanner";
import { getTranslations } from "next-intl/server";

export default async function AboutPage() {
  const t = await getTranslations("AboutPage");

  const TEAM = [
    {
      name: t("team.voss.name"),
      title: t("team.voss.title"),
      bio: t("team.voss.bio"),
    },
    {
      name: t("team.okonkwo.name"),
      title: t("team.okonkwo.title"),
      bio: t("team.okonkwo.bio"),
    },
    {
      name: t("team.sharma.name"),
      title: t("team.sharma.title"),
      bio: t("team.sharma.bio"),
    },
    {
      name: t("team.kim.name"),
      title: t("team.kim.title"),
      bio: t("team.kim.bio"),
    },
  ];

  const VALUES = [
    {
      icon: Target,
      title: t("values.evidence.title"),
      description: t("values.evidence.description"),
    },
    {
      icon: Heart,
      title: t("values.revenue.title"),
      description: t("values.revenue.description"),
    },
    {
      icon: Handshake,
      title: t("values.partnership.title"),
      description: t("values.partnership.description"),
    },
  ];

  return (
    <>
      {/* Mission */}
      <section className="bg-[var(--color-navy)]">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
          <h1 className="text-4xl font-bold tracking-tight text-[var(--color-white)] md:text-5xl">
            {t("mission.heading")}
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-[var(--color-gray-light)]">
            {t("mission.description")}
          </p>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-[var(--color-white)]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--color-navy)]">
              {t("approach.heading")}
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-[var(--color-text-muted)]">
              <p>
                {t("approach.paragraph1")}
              </p>
              <p>
                {t.rich("approach.paragraph2", {
                  strong: (chunks) => <strong className="text-[var(--color-text)]">{chunks}</strong>,
                })}
              </p>
              <p>
                {t("approach.paragraph3")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-[var(--color-light)]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <h2 className="text-center text-3xl font-bold tracking-tight text-[var(--color-navy)]">
            {t("team.heading")}
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
            {t("values.heading")}
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
        headline={t("cta.headline")}
        buttonText={t("cta.buttonText")}
        buttonHref="/contact"
      />
    </>
  );
}
