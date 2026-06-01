export interface PricingFeature {
  text: string;
}

export interface PricingCardData {
  id: string;
  title: string;
  priceFrom: number;
  priceFormatted: string;
  area: string;
  features: PricingFeature[];
  isPopular?: boolean;
  buttonVariant?: 'primary' | 'secondary';
  priceColor?: 'primary' | 'secondary' | 'accent';
}

export const pricingCards: PricingCardData[] = [
  {
    id: '1-room',
    title: '1-комнатная квартира',
    priceFrom: 250,
    priceFormatted: '250 BYN',
    area: 'до 40 м²',
    features: [
      { text: 'Дезинфекция всех поверхностей' },
      { text: 'Обработка санузла' },
      { text: 'Дезинсекция (тараканы, муравьи)' },
      { text: 'Гарантия 30 дней' },
    ],
    buttonVariant: 'primary',
    priceColor: 'primary',
  },
  {
    id: '2-room',
    title: '2-комнатная квартира',
    priceFrom: 350,
    priceFormatted: '350 BYN',
    area: 'до 60 м²',
    features: [
      { text: 'Дезинфекция всех поверхностей' },
      { text: 'Обработка санузла и кухни' },
      { text: 'Дезинсекция + дератизация' },
      { text: 'Гарантия 60 дней' },
      { text: 'Повторная обработка бесплатно' },
    ],
    isPopular: true,
    buttonVariant: 'secondary',
    priceColor: 'secondary',
  },
  {
    id: '3-room',
    title: '3-комнатная квартира',
    priceFrom: 450,
    priceFormatted: '450 BYN',
    area: 'до 80 м²',
    features: [
      { text: 'Полная дезинфекция' },
      { text: 'Комплексная обработка' },
      { text: 'Дезинсекция + дератизация' },
      { text: 'Гарантия 90 дней' },
      { text: 'Контрольная обработка' },
    ],
    buttonVariant: 'primary',
    priceColor: 'accent',
  },
  {
    id: 'house',
    title: 'Частный дом',
    priceFrom: 800,
    priceFormatted: '800 BYN',
    area: 'от 100 м²',
    features: [
      { text: 'Обработка всех помещений' },
      { text: 'Придомовая территория' },
      { text: 'Дератизация фундамента' },
      { text: 'Гарантия 6 месяцев' },
    ],
    buttonVariant: 'primary',
    priceColor: 'primary',
  },
  {
    id: 'office',
    title: 'Офис/магазин',
    priceFrom: 500,
    priceFormatted: '500 BYN',
    area: 'от 50 м²',
    features: [
      { text: 'Профессиональная обработка' },
      { text: 'Безопасно для персонала' },
      { text: 'Сертификат обработки' },
      { text: 'Гарантия качества' },
    ],
    buttonVariant: 'primary',
    priceColor: 'primary',
  },
  {
    id: 'transport',
    title: 'Транспорт',
    priceFrom: 150,
    priceFormatted: '150 BYN',
    area: 'автомобиль/мотоцикл',
    features: [
      { text: 'Обработка салона' },
      { text: 'Антибактериальная защита' },
      { text: 'Удаление запахов' },
      { text: 'Быстрая обработка' },
    ],
    buttonVariant: 'primary',
    priceColor: 'primary',
  },
];

// Дополнительные услуги
export interface ExtraServiceData {
  id: string;
  title: string;
  description: string;
  price: string;
  priceType?: 'free' | 'percent' | 'fixed';
  priceColor?: 'success' | 'accent' | 'primary';
}

export const extraServices: ExtraServiceData[] = [
  {
    id: 'visit',
    title: 'Выезд специалиста',
    description: 'Осмотр и консультация',
    price: 'Бесплатно',
    priceType: 'free',
    priceColor: 'success',
  },
  {
    id: 'express',
    title: 'Экспресс обработка',
    description: 'В день обращения',
    price: '+50%',
    priceType: 'percent',
    priceColor: 'accent',
  },
  {
    id: 'repeat',
    title: 'Повторная обработка',
    description: 'В рамках гарантии',
    price: 'Бесплатно',
    priceType: 'free',
    priceColor: 'success',
  },
  {
    id: 'check',
    title: 'Контрольная проверка',
    description: 'Через 14 дней',
    price: '50 BYN',
    priceType: 'fixed',
    priceColor: 'primary',
  },
];
