'use client';

import { useState } from 'react';
import { contactInfo } from '@/lib/contacts';
import { Button } from '../Button/Button';
import { FormField } from '../FormField/FormField';

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        // Show success message
        setSubmitStatus({
          type: 'success',
          message:
            result.message ||
            'Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.',
        });

        // Call onSubmit callback if provided
        if (onSubmit) {
          onSubmit(data);
        }

        // Close the modal after 3 seconds
        setTimeout(() => {
          if (onClose) {
            onClose();
          }
        }, 3000);
      } else {
        // Show error message
        setSubmitStatus({
          type: 'error',
          message:
            result.error ||
            'Произошла ошибка при отправке заявки. Попробуйте еще раз.',
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({
        type: 'error',
        message:
          'Произошла ошибка при отправке заявки. Проверьте подключение к интернету и попробуйте еще раз.',
      });
    } finally {
      setIsSubmitting(false);
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
          <FormField label="Имя" name="firstName" required autoFocus />
          <FormField label="Фамилия" name="lastName" />
        </div>

        <FormField
          label="Телефон"
          name="phone"
          type="input"
          inputMode="tel"
          placeholder="+7 (___) ___-__-__"
          required
        />

        <FormField label="Тип услуги" name="service" type="select">
          <option value="">Выберите услугу</option>
          <option value="desinfection">Дезинфекция помещений</option>
          <option value="desinsection">Дезинсекция</option>
          <option value="deratization">Дератизация</option>
          <option value="complex">Комплексная обработка</option>
          <option value="transport">Обработка транспорта</option>
          <option value="other">Другое</option>
        </FormField>

        <FormField
          label="Сообщение"
          name="message"
          type="textarea"
          rows={3}
          placeholder="Опишите вашу проблему или задайте вопрос..."
        />

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <div className="flex items-center gap-2">
              <svg
                className="animate-spin h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Отправка...
            </div>
          ) : (
            'Отправить сообщение'
          )}
        </Button>

        {submitStatus.type && (
          <div
            className={`mt-4 p-4 rounded-lg ${
              submitStatus.type === 'success'
                ? 'bg-green-50 text-green-800 border border-green-200'
                : 'bg-red-50 text-red-800 border border-red-200'
            }`}
          >
            <div className="flex items-center">
              {submitStatus.type === 'success' ? (
                <svg
                  className="w-5 h-5 mr-2 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 mr-2 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
              <span className="text-sm font-medium">
                {submitStatus.message}
              </span>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
