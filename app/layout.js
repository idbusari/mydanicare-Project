import 'bootstrap/dist/css/bootstrap.min.css';
import { Outfit, DM_Sans } from 'next/font/google';
import '@fortawesome/fontawesome-free/css/all.min.css';

import "./globals.css";
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import ClientLayout from './ClientLayout';
import { FooterBottom } from '../components/FooterBottom/FooterBottom';
import HeaderTop from '../components/HeaderTop/HeaderTop';
import { GoogleAnalytics } from '@next/third-parties/google'; // Import GA4 component
import { NextSeo } from 'next-seo'; // Import NextSeo for dynamic SEO management
import seoConfig from '../config/seo.config'; // Import SEO Configuration
import SchemaMarkup from '../components/SchemaMarkup'; // Schema Import

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], 
  variable: '--font-outfit', 
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans',
});

export const metadata = {
  title: seoConfig.title, // Use the title from seoConfig
  description: seoConfig.description, // Use the description from seoConfig
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Dynamic SEO Meta Tags with NextSeo */}
        <NextSeo
          title={seoConfig.title}
          description={seoConfig.description}
          openGraph={{
            title: seoConfig.openGraph.title,
            description: seoConfig.openGraph.description,
            url: seoConfig.openGraph.url,
            images: [
              {
                url: seoConfig.openGraph.images[0].url,
                width: 800,
                height: 600,
                alt: 'Open Graph Image',
              },
            ],
            site_name: seoConfig.openGraph.site_name,
          }}
          twitter={{
            handle: seoConfig.twitter.handle,
            site: seoConfig.twitter.site,
            cardType: seoConfig.twitter.cardType,
          }}
        />
        
        {/* Google Analytics - GA4 */}
        <GoogleAnalytics gaId="G-BVBHZ1NWSN" />

        {/* Add Schema Markup */}
        <SchemaMarkup />
      </head>
      <body className={`${outfit.variable} ${dmSans.variable}`}>
        {/* Page Layout */}
        <HeaderTop />
        <Header />
        <ClientLayout>
          {children}
        </ClientLayout>
        <Footer />
        <FooterBottom />
      </body>
    </html>
  );
}
