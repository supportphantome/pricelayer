import { Target, Heart, Handshake } from "lucide-react";
import { getTranslations } from "next-intl/server";
import CTABanner from "@/components/CTABanner";

const TEAM = [
  {
    nameKey: "team1Name",
    titleKey: "team1Title",
    bioKey: "team1Bio",
  },
  {
    nameKey: "team2Name",
    titleKey: "team2Title",
    bioKey: "team2Bio",
  },
  {
    nameKey: "team3Name",
    titleKey: "team3Title",
    bioKey: "team3Bio",
  },
  {
    nameKey: "team4Name",
    titleKey: "team4Title",
    bioKey: "team4Bio",
  },
];

const VALUES = [
  {
    icon: Target,
    titleKey: "value1Title",
    descriptionKey: "value1Description",
  },
  {
    icon: Heart,
    titleKey: "value2Title",
    descriptionKey: "value2Description",
  },
  {
    icon: Handshake,
    titleKey: "value3Title",
    descriptionKey: "value3Description",
  },
];

export default async function AboutPage() {
  const t = await getTranslations("AboutPage");

  return (
    <>
      {/* Mission */}
      <section className="bg-[var(--color-navy)]">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
          <h1 className="text-4xl font-bold tracking-tight text-[var(--color-white)] md:text-5xl">
            {t("title")}
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-[var(--color-gray-light)]">
            {t("subtitle")}
          </p>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-[var(--color-white)]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--color-navy)]">
              {t("approachTitle")}
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-[var(--color-text-muted)]">
              <p>
                {t("approachParagraph1")}
              </p>
              <p>
                {t.rich("approachParagraph2", {
                  strong: (chunks) => <strong className="text-[var(--color-text)]">{chunks}</strong>,
                })}
              </p>
              <p>
                {t("approachParagraph3")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-[var(--color-light)]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <h2 className="text-center text-3xl font-bold tracking-tight text-[var(--color-navy)]">
            {t("teamTitle")}
          </h2>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((member) => (
              <div
                key={member.nameKey}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-white)] p-6"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-blue)]/10 text-xl font-bold text-[var(--color-blue)]">
                  {t(member.nameKey).charAt(0)}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[var(--color-navy)]">
                  {t(member.nameKey)}
                </h3>
                <p className="text-sm font-medium text-[var(--color-blue)]">{t(member.titleKey)}</p>
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
            {t("valuesTitle")}
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
        headline={t("ctaHeadline")}
        buttonText={t("ctaButton")}
        buttonHref="/contact"
      />
    </>
  );
}
