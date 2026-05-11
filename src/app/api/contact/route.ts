import { NextRequest, NextResponse } from 'next/server';

// Telegram Bot configuration
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

// Хранилище для rate limiting (в продакшене используйте Redis)
const submissionLog = new Map<string, number[]>();

// Очистка старых записей каждые 10 минут
setInterval(() => {
  const now = Date.now();
  for (const [ip, timestamps] of submissionLog.entries()) {
    const recent = timestamps.filter(t => now - t < 300000); // 5 минут
    if (recent.length === 0) {
      submissionLog.delete(ip);
    } else {
      submissionLog.set(ip, recent);
    }
  }
}, 600000);

function checkRateLimit(ip: string): { allowed: boolean; message?: string } {
  const now = Date.now();
  const userSubmissions = submissionLog.get(ip) || [];
  
  // Очищаем старые записи (старше 5 минут)
  const recentSubmissions = userSubmissions.filter(time => now - time < 300000);
  
  // Не более 3 отправок за 5 минут
  if (recentSubmissions.length >= 3) {
    return { 
      allowed: false, 
      message: 'Слишком много запросов. Попробуйте через 5 минут.' 
    };
  }
  
  // Не чаще 1 раза в 30 секунд
  const lastSubmission = recentSubmissions[recentSubmissions.length - 1];
  if (lastSubmission && now - lastSubmission < 30000) {
    return { 
      allowed: false, 
      message: 'Пожалуйста, подождите 30 секунд перед следующей отправкой.' 
    };
  }
  
  recentSubmissions.push(now);
  submissionLog.set(ip, recentSubmissions);
  return { allowed: true };
}

async function sendTelegramMessage(message: string): Promise<boolean> {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.warn('Telegram credentials not configured');
    return false;
  }

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: 'HTML',
        }),
      },
    );

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Telegram API error: ${response.status} - ${error}`);
    }

    return true;
  } catch (error) {
    console.error('Failed to send Telegram message:', error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    // Получаем IP адрес
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 
               request.headers.get('x-real-ip') || 
               'unknown';
    
    // 1. Rate limiting
    const rateLimit = checkRateLimit(ip);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { error: rateLimit.message },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { 
      firstName, 
      lastName, 
      phone, 
      service, 
      message,
      _token,
      _timestamp,
      _userAgent 
    } = body;

    // 2. Проверка токена (опционально, если передаётся с клиента)
    // if (_token && !verifyToken(_token)) {
    //   return NextResponse.json(
    //     { error: 'Неверный токен безопасности' },
    //     { status: 400 }
    //   );
    // }

    // 3. Проверка timestamp (форма не старше 5 минут)
    if (_timestamp && Date.now() - _timestamp > 300000) {
      return NextResponse.json(
        { error: 'Форма устарела. Обновите страницу и попробуйте снова.' },
        { status: 400 }
      );
    }

    // 4. Validate required fields
    if (!firstName || firstName.trim().length < 2) {
      return NextResponse.json(
        { error: 'Имя должно содержать минимум 2 символа' },
        { status: 400 },
      );
    }

    if (!phone) {
      return NextResponse.json(
        { error: 'Телефон обязателен для заполнения' },
        { status: 400 },
      );
    }

    // Очистка номера телефона от лишних символов
    const cleanPhone = phone.replace(/[^\d+]/g, '');
    if (cleanPhone.length < 9) {
      return NextResponse.json(
        { error: 'Введите корректный номер телефона' },
        { status: 400 },
      );
    }

    // Format the message for Telegram
    const serviceMap: Record<string, string> = {
      desinfection: 'Дезинфекция помещений',
      desinsection: 'Дезинсекция',
      deratization: 'Дератизация',
      complex: 'Комплексная обработка',
      transport: 'Обработка транспорта',
      other: 'Другое',
    };

    const serviceName = service && service !== '' 
      ? serviceMap[service] || service 
      : 'Не указана';

    const telegramMessage = `
🔔 <b>Новая заявка с сайта!</b>

👤 <b>Имя:</b> ${firstName.trim()}
${lastName ? `👤 <b>Фамилия:</b> ${lastName.trim()}\n` : ''}📱 <b>Телефон:</b> ${cleanPhone}
🏢 <b>Услуга:</b> ${serviceName}
${message && message.trim() ? `💬 <b>Сообщение:</b>\n${message.trim()}` : ''}
🌐 <b>IP:</b> ${ip}
⏰ <b>Время:</b> ${new Date().toLocaleString('ru-RU')}
    `.trim();

    // Send notification to Telegram
    const telegramSent = await sendTelegramMessage(telegramMessage);

    if (!telegramSent) {
      console.warn(
        'Telegram notification failed, but continuing with success response',
      );
    }

    // Log the submission (you can also save to database here)
    console.log('Form submission:', {
      firstName,
      lastName,
      phone: cleanPhone,
      service,
      message,
      ip,
      userAgent: _userAgent,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: 'Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.',
      telegramSent,
    });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Произошла ошибка при обработке заявки. Попробуйте еще раз.' },
      { status: 500 },
    );
  }
}

// Handle OPTIONS for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}