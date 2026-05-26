import HomePageContent from './HomePageContent';
import { createPageMetadata, getSiteUrl } from '@/lib/og';

const SITE_URL = getSiteUrl();
export const metadata = createPageMetadata('root', SITE_URL);

export default function HomePage() {
  return <HomePageContent />;
}
