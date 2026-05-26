import type { Metadata } from 'next';
import { contactInfo } from '@/lib/contacts';
import { ContactForm } from '@/components/ui/ContactForm/ContactForm';
import { SocialIcon } from '@/components/ui/SocialIcon/SocialIcon';
import { H1, H2, P } from '@/components/ui/Typography/Typography';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'https://desinfect.vercel.app');

export const metadata: Metadata = {
  title: 'Контакты',
  description:
    'Свяжитесь с нами для заказа услуг дезинфекции, дезинсекции и дератизации. Работаем по Минску и области. Звоните!',
  openGraph: {
    title: 'Контакты | Дезинфект',
    description:
      'Свяжитесь с нами для заказа услуг дезинфекции, дезинсекции и дератизации. Работаем по Минску и области.',
    url: `${SITE_URL}/contact`,
    siteName: 'Дезинфект',
    images: [
      {
        url: `${SITE_URL}/og`,
        secureUrl: `${SITE_URL}/og`,
        width: 1200,
        height: 630,
        alt: 'Контакты Дезинфект',
        type: 'image/png',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Контакты | Дезинфект',
    description:
      'Свяжитесь с нами для заказа услуг дезинфекции, дезинсекции и дератизации.',
    images: [`${SITE_URL}/og`],
  },
};

export default function Contact() {
  return (
    <div className="space-y-16">
      <section className="text-center section-padding rounded-2xl shadow-sm bg-gradient-to-br from-primary-light to-secondary-light dark:from-primary-light/20 dark:to-secondary-light/20">
        <div className="max-w-4xl mx-auto px-4">
          <H1 className="mb-6">Контакты</H1>
          <P className="mb-8 max-w-3xl mx-auto text-lg">
            Свяжитесь с нами для заказа услуг или получения консультации
          </P>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <H2 className="mb-6">Как нас найти</H2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/40 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Адрес
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {contactInfo.address.city}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 dark:bg-green-900/40 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Телефон
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {contactInfo.phone}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    {contactInfo.workHours.emergency}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-100 dark:bg-amber-900/40 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Email
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {contactInfo.email}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    Ответим в течение часа
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 dark:bg-green-900/40 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Режим работы
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {contactInfo.workHours.weekdays}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {contactInfo.workHours.weekends}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {contactInfo.workHours.emergency}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Мы в соцсетях
            </h3>
            <div className="flex space-x-4">
              {/* <SocialIcon type="vk" size="md" /> */}
              <SocialIcon type="telegram" size="md" />
              <SocialIcon type="instagram" size="md" />
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
