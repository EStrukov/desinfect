import { NextRequest, NextResponse } from 'next/server';

// Telegram Bot configuration
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

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
      throw new Error(`Telegram API error: ${response.status}`);
    }

    return true;
  } catch (error) {
    console.error('Failed to send Telegram message:', error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, phone, service, message } = body;

    // Validate required fields
    if (!firstName || !phone) {
      return NextResponse.json(
        { error: 'Имя и телефон обязательны для заполнения' },
        { status: 400 },
      );
    }

    // Format the message for Telegram
    const telegramMessage = `
🔔 <b>Новая заявка с сайта!</b>

👤 <b>Имя:</b> ${firstName}
${lastName ? `👤 <b>Фамилия:</b> ${lastName}\n` : ''}📱 <b>Телефон:</b> ${phone}
${service && service !== '' ? `🏢 <b>Услуга:</b> ${service}\n` : ''}${message ? `💬 <b>Сообщение:</b>\n${message}` : ''}

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
      phone,
      service,
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message:
        'Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.',
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
