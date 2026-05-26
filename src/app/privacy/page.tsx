import type { Metadata } from 'next';
import { H1, H2, P } from '@/components/ui/Typography/Typography';

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'https://desinfect.vercel.app');

export const metadata: Metadata = {
  title: 'Политика конфиденциальности',
  description:
    'Политика обработки персональных данных компании Дезинфект. Узнайте, какие данные мы собираем и как их используем.',
  openGraph: {
    title: 'Политика конфиденциальности | Дезинфект',
    description: 'Политика обработки персональных данных компании Дезинфект.',
    url: `${SITE_URL}/privacy`,
    siteName: 'Дезинфект',
    images: [
      {
        url: `${SITE_URL}/og`,
        secureUrl: `${SITE_URL}/og`,
        width: 1200,
        height: 630,
        alt: 'Политика конфиденциальности Дезинфект',
        type: 'image/png',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Политика конфиденциальности | Дезинфект',
    description: 'Политика обработки персональных данных компании Дезинфект.',
    images: [`${SITE_URL}/og`],
  },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <H1>Политика обработки персональных данных</H1>

      <H2 className="mt-8 mb-4">1. Общие положения</H2>
      <P>
        Настоящая политика обработки персональных данных составлена в
        соответствии с требованиями законодательства Республики Беларусь.
      </P>

      <H2 className="mt-6 mb-4">2. Какие данные мы собираем</H2>
      <P>
        Мы можем собирать следующие данные: имя, контактный телефон,
        email-адрес, а также информацию об использовании сайта с помощью
        cookies.
      </P>

      <H2 className="mt-6 mb-4">3. Использование cookies</H2>
      <P>
        Cookies — это небольшие текстовые файлы, которые сохраняются на вашем
        устройстве при посещении сайта. Они помогают нам анализировать трафик и
        улучшать работу сайта.
      </P>

      <H2 className="mt-6 mb-4">4. Ваши права</H2>
      <P>
        Вы можете отказаться от использования cookies в настройках браузера или
        используя специальную кнопку на нашем сайте.
      </P>

      <H2 className="mt-6 mb-4">5. Контакты</H2>
      <P>
        По вопросам обработки персональных данных вы можете связаться с нами по
        телефону: +375 XX XXX-XX-XX.
      </P>
    </div>
  );
}
