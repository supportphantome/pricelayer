import {getRequestConfig} from 'next-intl/server';
import {hasLocale} from 'next-intl';
import {routing} from './routing';

const messageImports = {
  en: () => import('../../messages/en.json'),
  de: () => import('../../messages/de.json'),
  fr: () => import('../../messages/fr.json'),
  es: () => import('../../messages/es.json'),
  ar: () => import('../../messages/ar.json'),
} as const;

export default getRequestConfig(async ({requestLocale}) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  return {
    locale,
    messages: (await messageImports[locale as keyof typeof messageImports]()).default,
    onError(error) {
      if (error.code === 'MISSING_MESSAGE') {
        console.error(error);
      } else {
        throw error;
      }
    },
    getMessageFallback({namespace, key}) {
      return `${namespace}.${key}`;
    },
  };
});
