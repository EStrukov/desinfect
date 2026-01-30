'use client';

import { contactInfo } from '@/lib/contacts';

interface ContactFormProps {
  onSubmit?: (data: any) => void;
  onClose?: () => void;
  showTitle?: boolean;
  className?: string;
}

export function ContactForm({
  onSubmit,
  onClose,
  showTitle = true,
  className = '',
}: ContactFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    if (onSubmit) {
      onSubmit(data);
    } else {
      // Имитация отправки
      alert('Форма отправлена! Мы свяжемся с вами в ближайшее время.');
    }

    // Закрываем форму после отправки
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className={className}>
      {showTitle && (
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
          Связаться с нами
        </h2>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Имя *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Фамилия
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Телефон *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            placeholder="+7 (___) ___-__-__"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label
            htmlFor="service"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Тип услуги
          </label>
          <select
            id="service"
            name="service"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Выберите услугу</option>
            <option value="desinfection">Дезинфекция помещений</option>
            <option value="desinsection">Дезинсекция</option>
            <option value="deratization">Дератизация</option>
            <option value="complex">Комплексная обработка</option>
            <option value="transport">Обработка транспорта</option>
            <option value="other">Другое</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Сообщение
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            placeholder="Опишите вашу проблему или задайте вопрос..."
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          ></textarea>
        </div>

        <button type="submit" className="w-full btn-primary">
          Отправить сообщение
        </button>
      </form>
    </div>
  );
}
