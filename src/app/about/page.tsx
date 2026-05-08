import React from 'react';
import { H1, H2, H3, P, Lead } from '@/components/ui/Typography/Typography';
import { Button } from '@/components/ui/Button/Button';
import { CheckCircle, Globe, Clock } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center section-padding bg-gradient-to-br from-primary-light to-secondary-light dark:from-primary-light/20 dark:to-secondary-light/20">
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
              <div className="w-16 h-16 bg-primary-light dark:bg-primary-light/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary dark:text-primary-dark" />
              </div>
              <H3 className="mb-3">Качество</H3>
              <P>
                Гарантируем высочайшее качество услуг с использованием
                сертифицированных средств и проверенных методик.
              </P>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-secondary-light dark:bg-secondary-light/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-secondary dark:text-secondary-dark" />
              </div>
              <H3 className="mb-3">Экологичность</H3>
              <P>
                Используем только безопасные для окружающей среды и здоровья
                человека препараты.
              </P>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-accent-light dark:bg-accent-light/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-accent dark:text-accent-dark" />
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


      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-light to-secondary-light dark:from-primary-light/20 dark:to-secondary-light/20">
        <div className="text-center max-w-3xl mx-auto px-4">
          <H2 className="mb-4">Готовы к сотрудничеству?</H2>
          <Lead className="mb-8">
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