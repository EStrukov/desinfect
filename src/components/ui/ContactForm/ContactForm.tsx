'use client';

import { useState, useRef, useEffect } from 'react';
import { Loader2, Check, X, Shield, Clock } from 'lucide-react';
import { Button } from '../Button/Button';
import { FormField } from '../FormField/FormField';

interface ContactFormProps {
  onSubmit?: (data: any) => void;
  onClose?: () => void;
  showTitle?: boolean;
  className?: string;
}

interface FormData {
  firstName: string;
  phone: string;
  service: string;
  message: string;
}

export function ContactForm({
  onSubmit,
  onClose,
  showTitle = true,
  className = '',
}: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isPending, setIsPending] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const [honeypotValue, setHoneypotValue] = useState('');
  const [submitCount, setSubmitCount] = useState(0);
  const [lastSubmitTime, setLastSubmitTime] = useState(0);
  const [isRateLimited, setIsRateLimited] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const generateToken = () => {
    return (
      Math.random().toString(36).substring(2, 15) + Date.now().toString(36)
    );
  };

  const [formToken] = useState(generateToken);

  useEffect(() => {
    if (isRateLimited) {
      const timer = setTimeout(() => setIsRateLimited(false), 60000);
      return () => clearTimeout(timer);
    }
  }, [isRateLimited]);

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const checkRateLimit = (): boolean => {
    const now = Date.now();
    const timeSinceLastSubmit = now - lastSubmitTime;

    if (submitCount >= 3 && timeSinceLastSubmit < 300000) {
      setIsRateLimited(true);
      setSubmitStatus({
        type: 'error',
        message:
          'Слишком много заявок. Пожалуйста, подождите 5 минут перед следующей отправкой.',
      });
      return false;
    }

    if (timeSinceLastSubmit < 30000 && submitCount > 0) {
      setSubmitStatus({
        type: 'error',
        message: 'Пожалуйста, подождите 30 секунд перед следующей отправкой.',
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!checkRateLimit()) return;

    // Honeypot
    if (honeypotValue.length > 0) {
      setSubmitStatus({
        type: 'success',
        message:
          'Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.',
      });
      return;
    }

    // Client-side validation
    if (formData.firstName.trim().length < 2) {
      setSubmitStatus({
        type: 'error',
        message: 'Пожалуйста, введите корректное имя (минимум 2 символа).',
      });
      return;
    }

    if (formData.phone.replace(/\D/g, '').length < 9) {
      setSubmitStatus({
        type: 'error',
        message: 'Пожалуйста, введите корректный номер телефона.',
      });
      return;
    }

    setIsPending(true);
    setSubmitCount((prev) => prev + 1);
    setLastSubmitTime(Date.now());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: formData.firstName,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          _token: formToken,
          _timestamp: Date.now(),
          _userAgent: navigator.userAgent,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus({
          type: 'success',
          message:
            result.message ||
            'Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.',
        });

        if (onSubmit) onSubmit(formData);

        setTimeout(() => {
          if (onClose) onClose();
        }, 3000);
      } else {
        const errorMessage =
          result.error ||
          'Произошла ошибка при отправке заявки. Попробуйте еще раз.';
        setSubmitStatus({
          type: 'error',
          message: errorMessage,
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
      setIsPending(false);
    }
  };

  return (
    <div className={className}>
      {showTitle && (
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Связаться с нами
        </h2>
      )}

      {isRateLimited && (
        <div className="mb-4 p-3 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg border border-yellow-200 dark:border-yellow-800">
          <div className="flex items-center gap-2 text-yellow-800 dark:text-yellow-200">
            <Clock className="w-5 h-5" />
            <span className="text-sm font-medium">
              Вы отправили слишком много заявок. Подождите 5 минут.
            </span>
          </div>
        </div>
      )}

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="space-y-4 md:space-y-6"
      >
        <div className="hidden">
          <label htmlFor="_website">Website</label>
          <input
            type="text"
            name="_website"
            id="_website"
            tabIndex={-1}
            autoComplete="off"
            value={honeypotValue}
            onChange={(e) => setHoneypotValue(e.target.value)}
          />
        </div>

        <FormField
          label="Имя"
          name="firstName"
          required
          value={formData.firstName}
          onChange={(e) =>
            updateField('firstName', (e.target as HTMLInputElement).value)
          }
        />
        <FormField
          label="Телефон"
          name="phone"
          type="input"
          inputMode="tel"
          placeholder="+375 __ ___-__-__"
          required
          value={formData.phone}
          onChange={(e) =>
            updateField('phone', (e.target as HTMLInputElement).value)
          }
        />

        <FormField
          label="Тип услуги"
          name="service"
          type="select"
          value={formData.service}
          onChange={(e) =>
            updateField('service', (e.target as HTMLSelectElement).value)
          }
        >
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
          value={formData.message}
          onChange={(e) =>
            updateField('message', (e.target as HTMLTextAreaElement).value)
          }
        />

        <Button
          type="submit"
          variant="default"
          disabled={isPending || isRateLimited}
        >
          {isPending ? (
            <div className="flex items-center gap-2">
              <Loader2 className="animate-spin h-4 w-4" />
              Отправка...
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Отправить сообщение
            </div>
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
