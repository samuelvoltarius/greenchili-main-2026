import type { Metadata } from 'next';
import './globals.css';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Green Chili Productions | Digital Media Agency',
  description: 'Green Chili Productions - Deine Agentur für High-End Videoproduktion, Fotografie und digitales Marketing. Wir erwecken Deine Visionen mit modernster Technik zum Leben.',
  keywords: ['Videoproduktion', 'Digital Media', 'Fotografie', 'Marketing Agency', 'Green Chili Productions', 'Creative Content'],
  authors: [{ name: 'Green Chili Productions' }],
  openGraph: {
    title: 'Green Chili Productions | Digital Media Agency',
    description: 'High-End Videoproduktion & Digital Media - Wir erwecken Deine Visionen zum Leben.',
    locale: 'de_AT',
    type: 'website',
    siteName: 'Green Chili Productions',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Green Chili Productions | Digital Media Agency',
    description: 'High-End Videoproduktion & Digital Media - Wir erwecken Deine Visionen zum Leben.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
