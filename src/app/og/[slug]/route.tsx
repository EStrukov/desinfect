import { ImageResponse } from 'next/og';
import { ogPageConfig } from '@/lib/ogConfig';
import { renderOGImage } from '@/app/og/_components/OGImage';

export const runtime = 'edge';

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'https://desinfect.vercel.app');

const PHONE = '+375 33 123-45-67';

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const config = ogPageConfig[slug] || ogPageConfig.notfound;

  return new ImageResponse(
    renderOGImage({ config, siteUrl: SITE_URL, phone: PHONE }),
    {
      width: 1200,
      height: 630,
    },
  );
}
