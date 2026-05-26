import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        background:
          'linear-gradient(135deg, #0d9488 0%, #115e59 40%, #042f2e 100%)',
        fontFamily: 'Inter, sans-serif',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Декоративные элементы */}
      <div
        style={{
          position: 'absolute',
          top: '-50px',
          right: '-50px',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.03)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-100px',
          left: '-100px',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.03)',
        }}
      />

      {/* Логотип / Иконка */}
      <svg
        width="80"
        height="80"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#14b8a6"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        style={{ marginBottom: '24px' }}
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>

      {/* Название компании */}
      <h1
        style={{
          fontSize: '64px',
          fontWeight: 800,
          color: '#ffffff',
          letterSpacing: '-0.02em',
          margin: '0 0 16px 0',
          lineHeight: 1.1,
          textAlign: 'center',
        }}
      >
        Дезинфект
      </h1>

      {/* Слоган */}
      <p
        style={{
          fontSize: '28px',
          fontWeight: 400,
          color: '#5eead4',
          margin: '0 0 32px 0',
          lineHeight: 1.3,
          textAlign: 'center',
          opacity: 0.9,
        }}
      >
        Профессиональная обработка помещений
      </p>

      {/* Дополнительная информация */}
      <div
        style={{
          display: 'flex',
          gap: '24px',
          alignItems: 'center',
        }}
      >
        <span
          style={{
            fontSize: '18px',
            color: '#99f6e4',
            opacity: 0.8,
          }}
        >
          Дезинфекция
        </span>
        <span
          style={{
            width: '4px',
            height: '4px',
            borderRadius: '50%',
            background: '#14b8a6',
          }}
        />
        <span
          style={{
            fontSize: '18px',
            color: '#99f6e4',
            opacity: 0.8,
          }}
        >
          Дезинсекция
        </span>
        <span
          style={{
            width: '4px',
            height: '4px',
            borderRadius: '50%',
            background: '#14b8a6',
          }}
        />
        <span
          style={{
            fontSize: '18px',
            color: '#99f6e4',
            opacity: 0.8,
          }}
        >
          Дератизация
        </span>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      // Шрифт Inter загружать не будем, используем системный
      // emoji: 'twemoji',
    },
  );
}
