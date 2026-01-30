import React from 'react';
import { H1, H2, H3, P, Lead } from '@/components/ui/Typography/Typography';
import { Button } from '@/components/ui/Button/Button';

const AboutPage = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center section-padding bg-gradient-to-br from-primary-light to-secondary-light">
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

      {/* Миссия и ценности */}
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
            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <H3 className="mb-3">Качество</H3>
              <P>
                Гарантируем высочайшее качество услуг с использованием
                сертифицированных средств и проверенных методик.
              </P>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-secondary-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-secondary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
                  />
                </svg>
              </div>
              <H3 className="mb-3">Экологичность</H3>
              <P>
                Используем только безопасные для окружающей среды и здоровья
                человека препараты.
              </P>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-accent-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <H3 className="mb-3">Оперативность</H3>
              <P>
                Быстро реагируем на заявки и выполняем работы в кратчайшие сроки
                с гарантией результата.
              </P>
            </div>
          </div>
        </div>
      </section>

      {/* Команда */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <H2 className="mb-4">Наша команда</H2>
            <P className="max-w-3xl mx-auto">
              Профессиональные дезинфекторы с многолетним опытом и регулярным
              обучением современным технологиям и методам.
            </P>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">И</span>
              </div>
              <H3 className="mb-2">Иван Иванов</H3>
              <P className="text-gray-600 mb-3">Главный дезинфектор</P>
              <P className="text-sm">
                Специалист с 15-летним опытом работы в сфере дезинфекции.
              </P>
            </div>

            <div className="card text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-secondary to-secondary-dark rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">М</span>
              </div>
              <H3 className="mb-2">Мария Петрова</H3>
              <P className="text-gray-600 mb-3">Биолог-дезинсектор</P>
              <P className="text-sm">
                Кандидат биологических наук, специалист по борьбе с насекомыми.
              </P>
            </div>

            <div className="card text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-accent to-accent-dark rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">А</span>
              </div>
              <H3 className="mb-2">Алексей Сидоров</H3>
              <P className="text-gray-600 mb-3">Технический специалист</P>
              <P className="text-sm">
                Обслуживает и настраивает профессиональное оборудование.
              </P>
            </div>
          </div>
        </div>
      </section>

      {/* Сертификаты */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <H2 className="mb-4">Сертификаты и лицензии</H2>
            <P className="max-w-3xl mx-auto">
              Работаем только с лицензией и подтверждаем качество услуг
              соответствующими сертификатами.
            </P>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-success-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-success"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <H3 className="mb-2 text-lg">Лицензия ФС РАР</H3>
              <P className="text-sm">
                Федеральная служба по надзору в сфере защиты прав потребителей.
              </P>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <H3 className="mb-2 text-lg">ГОСТ Р</H3>
              <P className="text-sm">
                Сертификация средств дезинфекции по государственным стандартам.
              </P>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-secondary-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-secondary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <H3 className="mb-2 text-lg">ISO 9001</H3>
              <P className="text-sm">
                Международный стандарт управления качеством.
              </P>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-accent-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <H3 className="mb-2 text-lg">Сертификат Роспотребнадзора</H3>
              <P className="text-sm">
                Подтверждение соответствия санитарным нормам.
              </P>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-light to-secondary-light">
        <div className="text-center max-w-3xl mx-auto px-4">
          <H2 className="mb-4 text-gray-900">Готовы к сотрудничеству?</H2>
          <Lead className="mb-8 text-gray-700">
            Свяжитесь с нами для получения консультации и обсуждения ваших
            потребностей.
          </Lead>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-primary">Обсудить проект</Button>
            <Button variant="outline" className="btn-outline">
              Посмотреть услуги
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
