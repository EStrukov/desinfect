import { ImageResponse } from 'next/og';
import { ogPageConfig } from '@/lib/ogConfig';
import { renderOGImage } from '@/app/og/_components/OGImage';
import { contactInfo } from '@/lib/contacts';

export const runtime = 'edge';

export async function GET() {
  const config = ogPageConfig.root;

  return new ImageResponse(
    renderOGImage({
      title: config.title,
      description: config.description,
      subtitle: config.subtitle,
      phone: contactInfo.phone,
    }),
    {
      width: 1200,
      height: 630,
    },
  );
}
