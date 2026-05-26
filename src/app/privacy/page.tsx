import { H1, H2, P } from '@/components/ui/Typography/Typography';
import { createPageMetadata, getSiteUrl } from '@/lib/og';

const SITE_URL = getSiteUrl();
export const metadata = createPageMetadata('privacy', `${SITE_URL}/privacy`);

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <H1>Политика обработки персональных данных</H1>

      <H2 className="mt-8 mb-4">1. Общие положения</H2>
      <P>
        Настоящая политика обработки персональных данных составлена в
        соответствии с требованиями законодательства Республики Беларусь.
      </P>

      <H2 className="mt-6 mb-4">2. Какие данные мы собираем</H2>
      <P>
        Мы можем собирать следующие данные: имя, контактный телефон,
        email-адрес, а также информацию об использовании сайта с помощью
        cookies.
      </P>

      <H2 className="mt-6 mb-4">3. Использование cookies</H2>
      <P>
        Cookies — это небольшие текстовые файлы, которые сохраняются на вашем
        устройстве при посещении сайта. Они помогают нам анализировать трафик и
        улучшать работу сайта.
      </P>

      <H2 className="mt-6 mb-4">4. Ваши права</H2>
      <P>
        Вы можете отказаться от использования cookies в настройках браузера или
        используя специальную кнопку на нашем сайте.
      </P>

      <H2 className="mt-6 mb-4">5. Контакты</H2>
      <P>
        По вопросам обработки персональных данных вы можете связаться с нами по
        телефону: +375 XX XXX-XX-XX.
      </P>
    </div>
  );
}
