import type { Metadata } from 'next';
import { ogPageConfig, type OGPageConfig } from './ogConfig';
export type { OGPageConfig } from './ogConfig';
export { ogPageConfig } from './ogConfig';

/**
 * Возвращает SITE_URL из переменных окружения.
 */
export function getSiteUrl(): string {
  return (
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'https://desinfect.vercel.app')
  );
}

/**
 * Возвращает URL для OG-изображения.
 * @param siteUrl - базовый URL сайта
 * @param slug - ключ страницы из ogConfig (опционально, для root не передавать)
 */
export function ogImageUrl(siteUrl: string, slug?: string): string {
  return slug ? `${siteUrl}/og/${slug}` : `${siteUrl}/og`;
}

/**
 * Создаёт Metadata для страницы на основе конфига ogConfig.
 *
 * @example
 * // Для главной:
 * const metadata = createPageMetadata('root');
 *
 * // Для услуг:
 * const metadata = createPageMetadata('services', `${SITE_URL}/services`);
 *
 * // С кастомным title/description:
 * const metadata = createPageMetadata('about', `${SITE_URL}/about`, {
 *   title: 'Мой заголовок',
 *   description: 'Моё описание',
 * });
 */
export function createPageMetadata(
  slug: keyof typeof ogPageConfig,
  pageUrl: string,
  overrides?: { title?: string; description?: string },
): Metadata {
  const config: OGPageConfig = ogPageConfig[slug] || ogPageConfig.notfound;
  const siteUrl = getSiteUrl();
  const ogUrl = ogImageUrl(siteUrl, slug === 'root' ? undefined : slug);

  const title = overrides?.title || config.title;
  const description = overrides?.description || config.description;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: 'Дезинфект',
      images: [
        {
          url: ogUrl,
          secureUrl: ogUrl,
          width: 1200,
          height: 630,
          alt: `${config.subtitle} — Дезинфект`,
          type: 'image/png',
        },
      ],
      locale: 'ru_RU',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogUrl],
    },
  };
}
