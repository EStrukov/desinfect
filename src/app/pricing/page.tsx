import React from 'react';
import { H1, H2, H3, P, Lead } from '@/components/ui/Typography/Typography';
import { Button } from '@/components/ui/Button/Button';
import Test from '@/components/ui/Button/test';

export default function Pricing() {
  return (
    <div className="space-y-16">
      <Test />
      {/* Hero Section */}
      <section className="text-center section-padding bg-gradient-to-br from-primary-light to-secondary-light">
        <div className="max-w-4xl mx-auto px-4">
          <H1 className="mb-6">Цены на услуги</H1>
          <Lead className="mb-8 max-w-3xl mx-auto">
            Прозрачное ценообразование без скрытых платежей
          </Lead>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card relative">
              <div className="text-center mb-6">
                <H3 className="mb-2">1-комнатная квартира</H3>
                <div className="text-4xl font-bold text-primary mb-2">
                  от 2 500 ₽
                </div>
                <P>до 40 м²</P>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  Дезинфекция всех поверхностей
                </li>
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  Обработка санузла
                </li>
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  Дезинсекция (тараканы, муравьи)
                </li>
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  Гарантия 30 дней
                </li>
              </ul>

              <Button className="w-full btn-primary">Заказать</Button>
            </div>

            <div className="card relative border-2 border-secondary">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-secondary text-white px-4 py-1 rounded-full text-sm font-medium">
                  Популярный
                </span>
              </div>

              <div className="text-center mb-6">
                <H3 className="mb-2">2-комнатная квартира</H3>
                <div className="text-4xl font-bold text-secondary mb-2">
                  от 3 500 ₽
                </div>
                <P>до 60 м²</P>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  Дезинфекция всех поверхностей
                </li>
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  Обработка санузла и кухни
                </li>
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  Дезинсекция + дератизация
                </li>
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  Гарантия 60 дней
                </li>
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  Повторная обработка бесплатно
                </li>
              </ul>

              <Button className="w-full bg-secondary hover:bg-secondary-dark">
                Заказать
              </Button>
            </div>

            <div className="card">
              <div className="text-center mb-6">
                <H3 className="mb-2">3-комнатная квартира</H3>
                <div className="text-4xl font-bold text-accent mb-2">
                  от 4 500 ₽
                </div>
                <P>до 80 м²</P>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  Полная дезинфекция
                </li>
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  Комплексная обработка
                </li>
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  Дезинсекция + дератизация
                </li>
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  Гарантия 90 дней
                </li>
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  Контрольная обработка
                </li>
              </ul>

              <Button className="w-full">Заказать</Button>
            </div>

            <div className="card">
              <div className="text-center mb-6">
                <H3 className="mb-2">Частный дом</H3>
                <div className="text-4xl font-bold text-primary mb-2">
                  от 8 000 ₽
                </div>
                <P>от 100 м²</P>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  Обработка всех помещений
                </li>
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  Придомовая территория
                </li>
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  Дератизация фундамента
                </li>
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  Гарантия 6 месяцев
                </li>
              </ul>

              <Button className="w-full">Заказать</Button>
            </div>

            <div className="card">
              <div className="text-center mb-6">
                <H3 className="mb-2">Офис/магазин</H3>
                <div className="text-4xl font-bold text-primary mb-2">
                  от 5 000 ₽
                </div>
                <P>от 50 м²</P>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  Профессиональная обработка
                </li>
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  Безопасно для персонала
                </li>
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  Сертификат обработки
                </li>
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  Гарантия качества
                </li>
              </ul>

              <Button className="w-full">Заказать</Button>
            </div>

            <div className="card">
              <div className="text-center mb-6">
                <H3 className="mb-2">Транспорт</H3>
                <div className="text-4xl font-bold text-primary mb-2">
                  от 1 500 ₽
                </div>
                <P>автомобиль/мотоцикл</P>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  Обработка салона
                </li>
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  Антибактериальная защита
                </li>
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  Удаление запахов
                </li>
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  Быстрая обработка
                </li>
              </ul>

              <Button className="w-full">Заказать</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <H2 className="mb-4">Дополнительные услуги</H2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card flex justify-between items-center">
              <div>
                <H3 className="font-semibold">Выезд специалиста</H3>
                <P className="text-sm">Осмотр и консультация</P>
              </div>
              <span className="text-lg font-bold text-success">Бесплатно</span>
            </div>

            <div className="card flex justify-between items-center">
              <div>
                <H3 className="font-semibold">Экспресс обработка</H3>
                <P className="text-sm">В день обращения</P>
              </div>
              <span className="text-lg font-bold text-accent">+ 50%</span>
            </div>

            <div className="card flex justify-between items-center">
              <div>
                <H3 className="font-semibold">Повторная обработка</H3>
                <P className="text-sm">В рамках гарантии</P>
              </div>
              <span className="text-lg font-bold text-success">Бесплатно</span>
            </div>

            <div className="card flex justify-between items-center">
              <div>
                <H3 className="font-semibold">Контрольная проверка</H3>
                <P className="text-sm">Через 14 дней</P>
              </div>
              <span className="text-lg font-bold text-primary">500 ₽</span>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <P className="mb-4">
            Цены указаны ориентировочно. Точная стоимость рассчитывается
            индивидуально после осмотра объекта.
          </P>
          <P className="text-sm">
            * Цены действительны на территории Москвы и МО. Для других регионов
            стоимость уточняйте.
          </P>
        </div>
      </section>
    </div>
  );
}
