import { ImageResponse } from 'next/og';
import { ogPageConfig } from '@/lib/ogConfig';
import { renderOGImage } from '@/app/og/_components/OGImage';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { contactInfo } from '@/lib/contacts';

async function getLogoBase64(): Promise<string | null> {
  try {
    const filePath = path.join(
      process.cwd(),
      'public',
      'assets',
      'logo-h-dark.png',
    );
    const buffer = await readFile(filePath);
    return buffer.toString('base64');
  } catch {
    return null;
  }
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const config = ogPageConfig[slug] || ogPageConfig.notfound;
  const logoBase64 = await getLogoBase64();

  return new ImageResponse(
    renderOGImage({
      title: config.title,
      description: config.description,
      subtitle: config.subtitle,
      phone: contactInfo.phone,
      logoBase64,
    }),
    {
      width: 1200,
      height: 630,
    },
  );
}
