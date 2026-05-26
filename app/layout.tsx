import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react";
import type { Metadata, Viewport } from 'next';
import { Inter, Fraunces, JetBrains_Mono } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { siteConfig } from '@/lib/site.config';
import { JsonLd, organizationSchema, localBusinessSchema, websiteSchema } from '@/lib/schema';

const sans = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
  weight: ['400', '500', '600', '700']
});

// Distinctive display face — Fraunces gives a confident, characterful editorial feel
// without being corporate. Pairs cleanly with Inter body.
const display = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
  weight: ['400', '500', '600', '700']
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
  weight: ['400', '500']
});

export const viewport: Viewport = {
  themeColor: '#0A0D12',
  width: 'device-width',
  initialScale: 1
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Automated Quote Follow-Up for Australian Tradies`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: [
    'quote follow up',
    'quote follow up system',
    'automated quote follow up',
    'tradie quote follow up',
    'follow up after quote',
    'customer follow up tradies',
    'quote conversion',
    'lead follow up Australia',
    'tradie business systems',
    'lead recovery'
  ],
  authors: [{ name: siteConfig.business.legalName }],
  creator: siteConfig.business.legalName,
  publisher: siteConfig.business.legalName,
  formatDetection: { email: false, address: false, telephone: false },
  alternates: { canonical: siteConfig.url },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [{ url: '/og-default.png', width: 1200, height: 630, alt: siteConfig.name }]
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: ['/og-default.png']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 }
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID;
  const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID;

  return (
    <html lang="en-AU" className={`${sans.variable} ${display.variable} ${mono.variable}`}>
      <head>
        <JsonLd data={organizationSchema()} />
        <JsonLd data={localBusinessSchema()} />
        <JsonLd data={websiteSchema()} />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>

        <Header />
        <main id="main">{children}</main>
        <Footer />

        {/* GA4 */}
        {GA4_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA4_ID}', { anonymize_ip: true });
              `}
            </Script>
          </>
        )}

        {/* Microsoft Clarity */}
        {CLARITY_ID && (
          <Script id="clarity-init" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${CLARITY_ID}");
            `}
          </Script>
        )}
      <Analytics />
      <SpeedInsights />
      </body>
    </html>
  );
}
