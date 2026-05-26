import type { Metadata } from 'next';
import { H1, H2, H3, P, Lead } from '@/components/ui/Typography/Typography';
import { CheckCircle, Globe, Clock } from 'lucide-react';
import { AnimatedCard } from '@/components/ui/AnimatedCard/AnimatedCard';

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'https://desinfect.vercel.app');

export const metadata: Metadata = {
  title: 'О компании',
  description:
    'Более 10 лет профессиональной дезинфекции, дезинсекции и дератизации в Минске и области. Современные технологии, экологичные средства, гарантия качества.',
  openGraph: {
    title: 'О компании | Дезинфект',
    description:
      'Более 10 лет профессиональной дезинфекции, дезинсекции и дератизации в Минске и области.',
    url: `${SITE_URL}/about`,
    siteName: 'Дезинфект',
    images: [
      {
        url: `${SITE_URL}/og`,
        secureUrl: `${SITE_URL}/og`,
        width: 1200,
        height: 630,
        alt: 'О компании Дезинфект',
        type: 'image/png',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'О компании | Дезинфект',
    description:
      'Более 10 лет профессиональной дезинфекции, дезинсекции и дератизации.',
    images: [`${SITE_URL}/og`],
  },
};

export default function AboutPage() {
  return (
    <div className="space-y-16">
      <section className="text-center section-padding rounded-2xl shadow-sm bg-gradient-to-br from-primary-light to-secondary-light dark:from-primary-light/20 dark:to-secondary-light/20">
        <div className="max-w-4xl mx-auto px-4">
          <H1 className="mb-6">О компании Дезинфект</H1>
          <Lead className="mb-8 max-w-3xl mx-auto">
            Мы специализируемся на профессиональной дезинфекции и дезинсекции
            более 10 лет. Наша команда экспертов обеспечивает полную защиту от
            вредителей и инфекций с использованием современных технологий и
            экологичных средств.
          </Lead>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <H2 className="mb-4">Наша миссия</H2>
            <P className="max-w-3xl mx-auto">
              Создавать безопасную и здоровую среду для жизни и работы наших
              клиентов, используя передовые методы борьбы с вредителями и
              инфекциями.
            </P>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedCard className="card text-center" index={0}>
              <div className="w-16 h-16 bg-primary-light dark:bg-primary-light/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary dark:text-primary-dark" />
              </div>
              <H3 className="mb-3">Качество</H3>
              <P>
                Гарантируем высочайшее качество услуг с использованием
                сертифицированных средств и проверенных методик.
              </P>
            </AnimatedCard>

            <AnimatedCard className="card text-center" index={1}>
              <div className="w-16 h-16 bg-secondary-light dark:bg-secondary-light/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-secondary dark:text-secondary-dark" />
              </div>
              <H3 className="mb-3">Экологичность</H3>
              <P>
                Используем только безопасные для окружающей среды и здоровья
                человека препараты.
              </P>
            </AnimatedCard>

            <AnimatedCard className="card text-center" index={2}>
              <div className="w-16 h-16 bg-accent-light dark:bg-accent-light/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-accent dark:text-accent-dark" />
              </div>
              <H3 className="mb-3">Оперативность</H3>
              <P>
                Быстро реагируем на заявки и выполняем работы в кратчайшие сроки
                с гарантией результата.
              </P>
            </AnimatedCard>
          </div>
        </div>
      </section>
    </div>
  );
}
