"use client";

import { useState } from "react";
import { CheckCircle2, Search, PenLine, Rocket } from "lucide-react";

const ARR_RANGES = [
  "Pre-revenue",
  "$0 - $1M ARR",
  "$1M - $5M ARR",
  "$5M - $20M ARR",
  "$20M - $100M ARR",
  "$100M+ ARR",
];

const NEXT_STEPS = [
  {
    icon: Search,
    title: "Free Diagnostic Call",
    description:
      "We review your current pricing model, identify quick wins, and assess the opportunity.",
  },
  {
    icon: PenLine,
    title: "Custom Proposal",
    description:
      "Based on the diagnostic, we build a tailored engagement plan with clear deliverables and timeline.",
  },
  {
    icon: Rocket,
    title: "Pricing Transformation",
    description:
      "We execute the strategy together — from research through design to rollout support.",
  },
];

export default function SignupPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <section className="bg-[var(--color-navy)]">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
          <h1 className="text-4xl font-bold tracking-tight text-[var(--color-white)] md:text-5xl">
            Get started with a free pricing diagnostic.
          </h1>
          <p className="mt-4 text-lg text-[var(--color-gray-light)]">
            Tell us about your company and we&apos;ll schedule a complimentary 30-minute pricing review.
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-light)]">
        <div className="mx-auto max-w-3xl px-6 py-20">
          {submitted ? (
            <div className="rounded-xl border border-[var(--color-teal)]/30 bg-[var(--color-teal)]/5 p-12 text-center">
              <CheckCircle2 className="mx-auto h-12 w-12 text-[var(--color-teal)]" />
              <h2 className="mt-4 text-2xl font-bold text-[var(--color-navy)]">
                You&apos;re in!
              </h2>
              <p className="mt-2 text-[var(--color-gray)]">
                We&apos;ll reach out within one business day to schedule your free diagnostic call.
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
                    Full name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="mt-2 w-full rounded-lg border border-[var(--color-border)] px-4 py-3 text-base text-[var(--color-text)] placeholder:text-[var(--color-gray-light)] focus:border-[var(--color-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--color-blue)]/20"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[var(--color-text)]">
                    Work email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="mt-2 w-full rounded-lg border border-[var(--color-border)] px-4 py-3 text-base text-[var(--color-text)] placeholder:text-[var(--color-gray-light)] focus:border-[var(--color-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--color-blue)]/20"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-[var(--color-text)]">
                    Company name
                  </label>
                  <input
                    type="text"
                    id="company"
                    required
                    className="mt-2 w-full rounded-lg border border-[var(--color-border)] px-4 py-3 text-base text-[var(--color-text)] placeholder:text-[var(--color-gray-light)] focus:border-[var(--color-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--color-blue)]/20"
                    placeholder="Company name"
                  />
                </div>
                <div>
                  <label htmlFor="arr" className="block text-sm font-medium text-[var(--color-text)]">
                    Current ARR range
                  </label>
                  <select
                    id="arr"
                    required
                    className="mt-2 w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-white)] px-4 py-3 text-base text-[var(--color-text)] focus:border-[var(--color-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--color-blue)]/20"
                  >
                    <option value="">Select range</option>
                    {ARR_RANGES.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="challenge" className="block text-sm font-medium text-[var(--color-text)]">
                  Biggest pricing challenge
                </label>
                <textarea
                  id="challenge"
                  rows={4}
                  required
                  className="mt-2 w-full resize-none rounded-lg border border-[var(--color-border)] px-4 py-3 text-base text-[var(--color-text)] placeholder:text-[var(--color-gray-light)] focus:border-[var(--color-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--color-blue)]/20"
                  placeholder="e.g. We're not sure if our tiers are right, we think we're underpricing enterprise..."
                />
              </div>

              <button
                type="submit"
                className="mt-8 w-full rounded-lg bg-[var(--color-blue)] px-8 py-3.5 text-base font-semibold text-[var(--color-white)] transition-colors hover:bg-[var(--color-blue-hover)]"
              >
                Request Free Diagnostic
              </button>
            </form>
          )}
        </div>
      </section>

      {/* What Happens Next */}
      <section className="bg-[var(--color-white)]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-center text-2xl font-bold tracking-tight text-[var(--color-navy)]">
            What happens next?
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
