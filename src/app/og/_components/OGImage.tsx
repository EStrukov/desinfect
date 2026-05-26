import type { OGPageConfig } from '@/lib/ogConfig';

interface OGImageProps {
  config: OGPageConfig;
  siteUrl: string;
  phone: string;
}

export function renderOGImage({ config, siteUrl, phone }: OGImageProps) {
  const { title, description, subtitle, logo } = config;
  const logoSrc = `${siteUrl}${logo}`;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        background:
          'linear-gradient(135deg, #2563eb 0%, #1d4ed8 40%, #1e3a5f 100%)',
        fontFamily: 'Inter, "Helvetica Neue", Arial, sans-serif',
        position: 'relative',
        overflow: 'hidden',
        padding: '60px 80px',
      }}
    >
      {/* Декоративные элементы */}
      <div
        style={{
          position: 'absolute',
          top: '-60px',
          right: '-60px',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.04)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-120px',
          left: '-120px',
          width: '550px',
          height: '550px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.04)',
        }}
      />

      {/* Логотип */}
      <img
        src={logoSrc}
        alt="Дезинфект"
        width="320"
        height="64"
        style={{
          objectFit: 'contain',
          marginBottom: '32px',
        }}
      />

      {/* Разделитель */}
      <div
        style={{
          width: '80px',
          height: '3px',
          background: '#16a34a',
          borderRadius: '2px',
          marginBottom: '28px',
        }}
      />

      {/* Заголовок страницы */}
      <h1
        style={{
          fontSize: '46px',
          fontWeight: 800,
          color: '#ffffff',
          letterSpacing: '-0.02em',
          margin: '0 0 16px 0',
          lineHeight: 1.15,
          textAlign: 'center',
          maxWidth: '900px',
        }}
      >
        {title}
      </h1>

      {/* Описание */}
      <p
        style={{
          fontSize: '22px',
          fontWeight: 400,
          color: '#bfdbfe',
          margin: '0 0 24px 0',
          lineHeight: 1.4,
          textAlign: 'center',
          maxWidth: '800px',
        }}
      >
        {description}
      </p>

      {/* Подзаголовок */}
      <span
        style={{
          fontSize: '16px',
          fontWeight: 500,
          color: '#86efac',
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          marginBottom: '32px',
        }}
      >
        {subtitle}
      </span>

      {/* CTA — телефон */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '14px 36px',
          border: '2px solid #16a34a',
          borderRadius: '50px',
          background: 'rgba(22, 163, 74, 0.15)',
        }}
      >
        {/* Phone icon */}
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#16a34a"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
        <span
          style={{
            fontSize: '24px',
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '0.02em',
          }}
        >
          {phone}
        </span>
      </div>

      {/* Нижняя плашка с URL */}
      <div
        style={{
          position: 'absolute',
          bottom: '24px',
          fontSize: '14px',
          color: 'rgba(255,255,255,0.2)',
          letterSpacing: '0.1em',
        }}
      >
        desinfect.by
      </div>
    </div>
  );
}
