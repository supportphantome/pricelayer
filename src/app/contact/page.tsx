"use client";

import { useState } from "react";
import { Mail, Clock, MessageSquare } from "lucide-react";

const COMPANY_SIZES = [
  "1-10 employees",
  "11-50 employees",
  "51-200 employees",
  "201-1000 employees",
  "1000+ employees",
];

export default function ContactPage() {
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
            Let&apos;s talk pricing.
          </h1>
          <p className="mt-4 text-lg text-[var(--color-gray-light)]">
            Tell us about your company and we&apos;ll get back to you within one business day.
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-light)]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="rounded-xl border border-[var(--color-teal)]/30 bg-[var(--color-teal)]/5 p-12 text-center">
                  <MessageSquare className="mx-auto h-12 w-12 text-[var(--color-teal)]" />
                  <h2 className="mt-4 text-2xl font-bold text-[var(--color-navy)]">
                    Message received!
                  </h2>
                  <p className="mt-2 text-[var(--color-gray)]">
                    We&apos;ll get back to you within one business day.
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
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="mt-2 w-full rounded-lg border border-[var(--color-border)] px-4 py-3 text-base text-[var(--color-text)] placeholder:text-[var(--color-gray-light)] focus:border-[var(--color-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--color-blue)]/20"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[var(--color-text)]">
                        Email
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
                        Company
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
                      <label htmlFor="size" className="block text-sm font-medium text-[var(--color-text)]">
                        Company size
                      </label>
                      <select
                        id="size"
                        required
                        className="mt-2 w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-white)] px-4 py-3 text-base text-[var(--color-text)] focus:border-[var(--color-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--color-blue)]/20"
                      >
                        <option value="">Select size</option>
                        {COMPANY_SIZES.map((size) => (
                          <option key={size} value={size}>
                            {size}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="mt-6">
                    <label htmlFor="message" className="block text-sm font-medium text-[var(--color-text)]">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      className="mt-2 w-full resize-none rounded-lg border border-[var(--color-border)] px-4 py-3 text-base text-[var(--color-text)] placeholder:text-[var(--color-gray-light)] focus:border-[var(--color-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--color-blue)]/20"
                      placeholder="Tell us about your pricing challenge..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-8 w-full rounded-lg bg-[var(--color-blue)] px-8 py-3.5 text-base font-semibold text-[var(--color-white)] transition-colors hover:bg-[var(--color-blue-hover)] sm:w-auto"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            <div className="space-y-8">
              <div className="flex gap-4">
                <Mail className="h-6 w-6 shrink-0 text-[var(--color-blue)]" />
                <div>
                  <h3 className="font-semibold text-[var(--color-navy)]">Email us</h3>
                  <p className="mt-1 text-sm text-[var(--color-gray)]">hello@pricelayer.com</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="h-6 w-6 shrink-0 text-[var(--color-blue)]" />
                <div>
                  <h3 className="font-semibold text-[var(--color-navy)]">Response time</h3>
                  <p className="mt-1 text-sm text-[var(--color-gray)]">
                    We respond within one business day, usually faster.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <MessageSquare className="h-6 w-6 shrink-0 text-[var(--color-blue)]" />
                <div>
                  <h3 className="font-semibold text-[var(--color-navy)]">What to expect</h3>
                  <p className="mt-1 text-sm text-[var(--color-gray)]">
                    A 30-minute intro call to understand your current pricing model,
                    challenges, and growth goals. No pitch, just a conversation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
