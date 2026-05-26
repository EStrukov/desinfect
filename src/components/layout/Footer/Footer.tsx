import Link from 'next/link';
import { Mail, Phone, Clock } from 'lucide-react';
import { Logo } from '@/components/ui/Logo/Logo';
import { SocialIcon } from '@/components/ui/SocialIcon/SocialIcon';
import { contactInfo } from '@/lib/contacts';

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Бренд */}
            <div className="md:col-span-2">
              <Logo variant="footer" />
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 max-w-md">
                Профессиональная дезинфекция и дезинсекция в Минске. Гарантия
                качества и безопасности для вашего здоровья.
              </p>
              <div className="flex space-x-3">
                {/* <SocialIcon type="vk" size="sm" /> */}
                <SocialIcon type="telegram" size="sm" />
                <SocialIcon type="instagram" size="sm" />
              </div>
            </div>

            {/* Быстрые ссылки */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Услуги
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="/services#desinfection"
                    className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 transition-colors"
                  >
                    Дезинфекция помещений
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#desinsection"
                    className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 transition-colors"
                  >
                    Дезинсекция
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#deratization"
                    className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 transition-colors"
                  >
                    Дератизация
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#transport"
                    className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 transition-colors"
                  >
                    Обработка транспорта
                  </Link>
                </li>
              </ul>
            </div>

            {/* Контакты */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Контакты
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <Phone className="w-4 h-4 mr-2 text-green-600 dark:text-green-400" />
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="md:inline-flex text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 transition-colors font-medium mr-2"
                  >
                    {contactInfo.phone}
                  </a>
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <Mail className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400" />
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="md:inline-flex text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 transition-colors font-medium mr-2"
                  >
                    {contactInfo.email}
                  </a>
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <Clock className="w-4 h-4 mr-2 text-amber-600 dark:text-amber-400" />
                  {contactInfo.workHours.weekdays}
                </li>
              </ul>
            </div>
          </div>

          {/* Нижняя часть */}
          <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-500">
                © {CURRENT_YEAR} Дезинфект. Все права защищены.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 text-sm text-gray-500 items-center">
                <Link
                  href="/about"
                  className="hover:text-primary dark:hover:text-blue-400 transition-colors"
                >
                  О компании
                </Link>
                <Link
                  href="/contact"
                  className="hover:text-primary dark:hover:text-blue-400 transition-colors"
                >
                  Контакты
                </Link>
                <Link
                  href="/privacy"
                  className="hover:text-primary dark:hover:text-blue-400 transition-colors"
                >
                  Конфиденциальность
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
