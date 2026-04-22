'use client';

import {useState} from 'react';
import {Mail, Clock, MessageSquare} from 'lucide-react';
import {useTranslations} from 'next-intl';

const COMPANY_SIZE_KEYS = [
  'size1_10',
  'size11_50',
  'size51_200',
  'size201_1000',
  'size1000plus',
] as const;

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const t = useTranslations('ContactPage');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <section className="bg-[var(--color-navy)]">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
          <h1 className="text-4xl font-bold tracking-tight text-[var(--color-white)] md:text-5xl">
            {t('heroTitle')}
          </h1>
          <p className="mt-4 text-lg text-[var(--color-gray-light)]">
            {t('heroSubtitle')}
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
                    {t('successTitle')}
                  </h2>
                  <p className="mt-2 text-[var(--color-gray)]">
                    {t('successDescription')}
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
                        {t('labelName')}
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="mt-2 w-full rounded-lg border border-[var(--color-border)] px-4 py-3 text-base text-[var(--color-text)] placeholder:text-[var(--color-gray-light)] focus:border-[var(--color-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--color-blue)]/20"
                        placeholder={t('placeholderName')}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[var(--color-text)]">
                        {t('labelEmail')}
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="mt-2 w-full rounded-lg border border-[var(--color-border)] px-4 py-3 text-base text-[var(--color-text)] placeholder:text-[var(--color-gray-light)] focus:border-[var(--color-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--color-blue)]/20"
                        placeholder={t('placeholderEmail')}
                      />
                    </div>
                  </div>

                  <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-[var(--color-text)]">
                        {t('labelCompany')}
                      </label>
                      <input
                        type="text"
                        id="company"
                        required
                        className="mt-2 w-full rounded-lg border border-[var(--color-border)] px-4 py-3 text-base text-[var(--color-text)] placeholder:text-[var(--color-gray-light)] focus:border-[var(--color-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--color-blue)]/20"
                        placeholder={t('placeholderCompany')}
                      />
                    </div>
                    <div>
                      <label htmlFor="size" className="block text-sm font-medium text-[var(--color-text)]">
                        {t('labelCompanySize')}
                      </label>
                      <select
                        id="size"
                        required
                        className="mt-2 w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-white)] px-4 py-3 text-base text-[var(--color-text)] focus:border-[var(--color-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--color-blue)]/20"
                      >
                        <option value="">{t('placeholderCompanySize')}</option>
                        {COMPANY_SIZE_KEYS.map((key) => (
                          <option key={key} value={key}>
                            {t(key)}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="mt-6">
                    <label htmlFor="message" className="block text-sm font-medium text-[var(--color-text)]">
                      {t('labelMessage')}
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      className="mt-2 w-full resize-none rounded-lg border border-[var(--color-border)] px-4 py-3 text-base text-[var(--color-text)] placeholder:text-[var(--color-gray-light)] focus:border-[var(--color-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--color-blue)]/20"
                      placeholder={t('placeholderMessage')}
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-8 w-full rounded-lg bg-[var(--color-blue)] px-8 py-3.5 text-base font-semibold text-[var(--color-white)] transition-colors hover:bg-[var(--color-blue-hover)] sm:w-auto"
                  >
                    {t('submit')}
                  </button>
                </form>
              )}
            </div>

            <div className="space-y-8">
              <div className="flex gap-4">
                <Mail className="h-6 w-6 shrink-0 text-[var(--color-blue)]" />
                <div>
                  <h3 className="font-semibold text-[var(--color-navy)]">{t('emailHeading')}</h3>
                  <p className="mt-1 text-sm text-[var(--color-gray)]">{t('emailAddress')}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="h-6 w-6 shrink-0 text-[var(--color-blue)]" />
                <div>
                  <h3 className="font-semibold text-[var(--color-navy)]">{t('responseHeading')}</h3>
                  <p className="mt-1 text-sm text-[var(--color-gray)]">
                    {t('responseBody')}
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <MessageSquare className="h-6 w-6 shrink-0 text-[var(--color-blue)]" />
                <div>
                  <h3 className="font-semibold text-[var(--color-navy)]">{t('expectHeading')}</h3>
                  <p className="mt-1 text-sm text-[var(--color-gray)]">
                    {t('expectBody')}
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
