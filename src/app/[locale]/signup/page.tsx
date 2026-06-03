"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { CheckCircle2, Search, PenLine, Rocket } from "lucide-react";

export default function SignupPage() {
  const t = useTranslations("SignupPage");
  const [submitted, setSubmitted] = useState(false);

  const arrRanges = [
    t("arrRanges.preRevenue"),
    t("arrRanges.0to1m"),
    t("arrRanges.1mTo5m"),
    t("arrRanges.5mTo20m"),
    t("arrRanges.20mTo100m"),
    t("arrRanges.100mPlus"),
  ];

  const nextSteps = [
    {
      icon: Search,
      title: t("nextSteps.diagnostic.title"),
      description: t("nextSteps.diagnostic.description"),
    },
    {
      icon: PenLine,
      title: t("nextSteps.proposal.title"),
      description: t("nextSteps.proposal.description"),
    },
    {
      icon: Rocket,
      title: t("nextSteps.transformation.title"),
      description: t("nextSteps.transformation.description"),
    },
  ];

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <section className="bg-[var(--color-navy)]">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
          <h1 className="text-4xl font-bold tracking-tight text-[var(--color-white)] md:text-5xl">
            {t("title")}
          </h1>
          <p className="mt-4 text-lg text-[var(--color-gray-light)]">
            {t("subtitle")}
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-light)]">
        <div className="mx-auto max-w-3xl px-6 py-20">
          {submitted ? (
            <div className="rounded-xl border border-[var(--color-teal)]/30 bg-[var(--color-teal)]/5 p-12 text-center">
              <CheckCircle2 className="mx-auto h-12 w-12 text-[var(--color-teal)]" />
              <h2 className="mt-4 text-2xl font-bold text-[var(--color-navy)]">
                {t("success.title")}
              </h2>
              <p className="mt-2 text-[var(--color-gray)]">
                {t("success.message")}
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-white)] p-8 md:p-10"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[var(--color-text)]">
                    {t("form.nameLabel")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="mt-2 w-full rounded-lg border border-[var(--color-border)] px-4 py-3 text-base text-[var(--color-text)] placeholder:text-[var(--color-gray-light)] focus:border-[var(--color-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--color-blue)]/20"
                    placeholder={t("form.namePlaceholder")}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[var(--color-text)]">
                    {t("form.emailLabel")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="mt-2 w-full rounded-lg border border-[var(--color-border)] px-4 py-3 text-base text-[var(--color-text)] placeholder:text-[var(--color-gray-light)] focus:border-[var(--color-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--color-blue)]/20"
                    placeholder={t("form.emailPlaceholder")}
                  />
                </div>
              </div>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-[var(--color-text)]">
                    {t("form.companyLabel")}
                  </label>
                  <input
                    type="text"
                    id="company"
                    required
                    className="mt-2 w-full rounded-lg border border-[var(--color-border)] px-4 py-3 text-base text-[var(--color-text)] placeholder:text-[var(--color-gray-light)] focus:border-[var(--color-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--color-blue)]/20"
                    placeholder={t("form.companyPlaceholder")}
                  />
                </div>
                <div>
                  <label htmlFor="arr" className="block text-sm font-medium text-[var(--color-text)]">
                    {t("form.arrLabel")}
                  </label>
                  <select
                    id="arr"
                    required
                    className="mt-2 w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-white)] px-4 py-3 text-base text-[var(--color-text)] focus:border-[var(--color-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--color-blue)]/20"
                  >
                    <option value="">{t("form.arrPlaceholder")}</option>
                    {arrRanges.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="challenge" className="block text-sm font-medium text-[var(--color-text)]">
                  {t("form.challengeLabel")}
                </label>
                <textarea
                  id="challenge"
                  rows={4}
                  required
                  className="mt-2 w-full resize-none rounded-lg border border-[var(--color-border)] px-4 py-3 text-base text-[var(--color-text)] placeholder:text-[var(--color-gray-light)] focus:border-[var(--color-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--color-blue)]/20"
                  placeholder={t("form.challengePlaceholder")}
                />
              </div>

              <button
                type="submit"
                className="mt-8 w-full rounded-lg bg-[var(--color-blue)] px-8 py-3.5 text-base font-semibold text-[var(--color-white)] transition-colors hover:bg-[var(--color-blue-hover)]"
              >
                {t("form.submitButton")}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* What Happens Next */}
      <section className="bg-[var(--color-white)]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-center text-2xl font-bold tracking-tight text-[var(--color-navy)]">
            {t("nextSteps.heading")}
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {nextSteps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-blue)]/10 text-sm font-bold text-[var(--color-blue)]">
                  {i + 1}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[var(--color-navy)]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-gray)]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
