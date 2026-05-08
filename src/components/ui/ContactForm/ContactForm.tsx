'use client';

import { useState } from 'react';
import { Loader2, Check, X } from 'lucide-react';
import { contactInfo } from '@/lib/contacts';
import { Button } from '../Button/Button';
import { FormField } from '../FormField/FormField';
import { useFormState, useFormStatus } from 'react-dom';

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
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const { pending, data, method, action } = useFormStatus();

  const handleSubmit = async (prev: any, formData: FormData) => {
    setSubmitStatus({ type: null, message: '' });
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus({
          type: 'success',
          message: result.message || 'Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.',
        });

        if (onSubmit) onSubmit(data);

        setTimeout(() => {
          if (onClose) onClose();
        }, 3000);
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.error || 'Произошла ошибка при отправке заявки. Попробуйте еще раз.',
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Произошла ошибка при отправке заявки. Проверьте подключение к интернету и попробуйте еще раз.',
      });
    }
  };

  const [state, formAction] = useFormState(handleSubmit, null);

  return (
    <div className={className}>
      {showTitle && (
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Связаться с нами
        </h2>
      )}

      <form action={formAction} className="space-y-4 md:space-y-6">
          <FormField label="Имя" name="firstName" required autoFocus />
          <FormField
            label="Телефон"
            name="phone"
            type="input"
            inputMode="tel"
            placeholder="+375 __ ___-__-__"
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

          <Button type="submit" disabled={pending}>
            {pending ? (
              <div className="flex items-center gap-2">
                <Loader2 className="animate-spin h-4 w-4" />
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
                  ? 'bg-green-50 dark:bg-green-900/30 text-green-800 dark:text-green-200 border border-green-200 dark:border-green-800'
                  : 'bg-red-50 dark:bg-red-900/30 text-red-800 dark:text-red-200 border border-red-200 dark:border-red-800'
              }`}
            >
              <div className="flex items-center">
                {submitStatus.type === 'success' ? (
                  <Check className="w-5 h-5 mr-2 text-green-600 dark:text-green-400" />
                ) : (
                  <X className="w-5 h-5 mr-2 text-red-600 dark:text-red-400" />
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