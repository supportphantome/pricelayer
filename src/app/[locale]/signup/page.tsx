"use client";

import { useState } from "react";
import { CheckCircle2, Search, PenLine, Rocket } from "lucide-react";
import { useTranslations } from "next-intl";

export default function SignupPage() {
  const t = useTranslations("SignupPage");
  const [submitted, setSubmitted] = useState(false);

  const ARR_RANGES = [
    { value: "Pre-revenue", label: t("arr.preRevenue") },
    { value: "$0 - $1M ARR", label: t("arr.0to1m") },
    { value: "$1M - $5M ARR", label: t("arr.1to5m") },
    { value: "$5M - $20M ARR", label: t("arr.5to20m") },
    { value: "$20M - $100M ARR", label: t("arr.20to100m") },
    { value: "$100M+ ARR", label: t("arr.100mPlus") },
  ];

  const NEXT_STEPS = [
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
                {t("successTitle")}
              </h2>
              <p className="mt-2 text-[var(--color-gray)]">
                {t("successMessage")}
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
                    {t("fullNameLabel")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="mt-2 w-full rounded-lg border border-[var(--color-border)] px-4 py-3 text-base text-[var(--color-text)] placeholder:text-[var(--color-gray-light)] focus:border-[var(--color-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--color-blue)]/20"
                    placeholder={t("fullNamePlaceholder")}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[var(--color-text)]">
                    {t("workEmailLabel")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="mt-2 w-full rounded-lg border border-[var(--color-border)] px-4 py-3 text-base text-[var(--color-text)] placeholder:text-[var(--color-gray-light)] focus:border-[var(--color-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--color-blue)]/20"
                    placeholder={t("emailPlaceholder")}
                  />
                </div>
              </div>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-[var(--color-text)]">
                    {t("companyNameLabel")}
                  </label>
                  <input
                    type="text"
                    id="company"
                    required
                    className="mt-2 w-full rounded-lg border border-[var(--color-border)] px-4 py-3 text-base text-[var(--color-text)] placeholder:text-[var(--color-gray-light)] focus:border-[var(--color-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--color-blue)]/20"
                    placeholder={t("companyPlaceholder")}
                  />
                </div>
                <div>
                  <label htmlFor="arr" className="block text-sm font-medium text-[var(--color-text)]">
                    {t("arrLabel")}
                  </label>
                  <select
                    id="arr"
                    required
                    className="mt-2 w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-white)] px-4 py-3 text-base text-[var(--color-text)] focus:border-[var(--color-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--color-blue)]/20"
                  >
                    <option value="">{t("selectRangePlaceholder")}</option>
                    {ARR_RANGES.map((range) => (
                      <option key={range.value} value={range.value}>
                        {range.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="challenge" className="block text-sm font-medium text-[var(--color-text)]">
                  {t("challengeLabel")}
                </label>
                <textarea
                  id="challenge"
                  rows={4}
                  required
                  className="mt-2 w-full resize-none rounded-lg border border-[var(--color-border)] px-4 py-3 text-base text-[var(--color-text)] placeholder:text-[var(--color-gray-light)] focus:border-[var(--color-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--color-blue)]/20"
                  placeholder={t("challengePlaceholder")}
                />
              </div>

              <button
                type="submit"
                className="mt-8 w-full rounded-lg bg-[var(--color-blue)] px-8 py-3.5 text-base font-semibold text-[var(--color-white)] transition-colors hover:bg-[var(--color-blue-hover)]"
              >
                {t("submitButton")}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* What Happens Next */}
      <section className="bg-[var(--color-white)]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-center text-2xl font-bold tracking-tight text-[var(--color-navy)]">
            {t("nextStepsHeading")}
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {NEXT_STEPS.map((step, i) => (
              <div key={step.title} className="text-center">
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
