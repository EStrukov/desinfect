import {
  Building2,
  Bug,
  Rat,
  Wind,
  Bus,
  Combine,
  type LucideIcon,
} from 'lucide-react';

export interface ServiceCardData {
  id: string;
  title: string;
  description: string;
  icon: keyof typeof iconMap;
  benefits: string[];
  colorClass: string;
}

export const iconMap: Record<string, LucideIcon> = {
  Building2,
  Bug,
  Rat,
  Wind,
  Bus,
  Combine,
};

export const services: ServiceCardData[] = [
  {
    id: 'disinfection',
    title: 'Дезинфекция помещений',
    description:
      'Полная дезинфекция жилых и коммерческих помещений с использованием современных средств.',
    icon: 'Building2',
    benefits: ['Обработка поверхностей', 'Дезинфекция воздуха', 'Уничтожение бактерий и вирусов'],
    colorClass: 'primary',
  },
  {
    id: 'disinsection',
    title: 'Дезинсекция',
    description: 'Борьба с насекомыми-вредителями: тараканы, муравьи, клопы и другие.',
    icon: 'Bug',
    benefits: ['Безопасные препараты', 'Гарантия результата', 'Профилактика повторного появления'],
    colorClass: 'secondary',
  },
  {
    id: 'deratization',
    title: 'Дератизация',
    description: 'Уничтожение грызунов: крысы, мыши с использованием гуманных методов.',
    icon: 'Rat',
    benefits: ['Экологичные приманки', 'Профессиональное оборудование', 'Полная ликвидация популяции'],
    colorClass: 'accent',
  },
  {
    id: 'deodorization',
    title: 'Дезодорация',
    description: 'Удаление неприятных запахов и освежение воздуха в помещениях.',
    icon: 'Wind',
    benefits: ['Нейтрализация запахов', 'Экологичные средства', 'Долговременный эффект'],
    colorClass: 'secondary',
  },
  {
    id: 'transport',
    title: 'Обработка транспорта',
    description: 'Дезинфекция автомобилей, общественного транспорта и спецтехники.',
    icon: 'Bus',
    benefits: ['Полная обработка салона', 'Антибактериальная защита', 'Безопасно для пассажиров'],
    colorClass: 'primary',
  },
  {
    id: 'complex',
    title: 'Комплексная обработка',
    description: 'Полный комплекс мероприятий по санитарной обработке объектов.',
    icon: 'Combine',
    benefits: ['Осмотр и диагностика', 'Выбор оптимальных средств', 'Контроль качества'],
    colorClass: 'secondary',
  },
];