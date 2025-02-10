import 'bootstrap/dist/css/bootstrap.min.css';
import { Outfit, DM_Sans } from 'next/font/google';
import '@fortawesome/fontawesome-free/css/all.min.css';

import "./globals.css";
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import ClientLayout from './ClientLayout';
import { FooterBottom } from '../components/FooterBottom/FooterBottom';
import HeaderTop from '../components/HeaderTop/HeaderTop';
import { GoogleAnalytics } from '@next/third-parties/google';
import seoConfig from '../config/seo.config';

// Import FooterETop
import FooterETop from '../components/FooterETop/FooterETop';

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
  title: seoConfig.title,
  description: seoConfig.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{seoConfig.title}</title>
        <meta name="description" content={seoConfig.description} />
        <meta property="og:title" content={seoConfig.openGraph.title} />
        <meta property="og:description" content={seoConfig.openGraph.description} />
        <meta property="og:url" content={seoConfig.openGraph.url} />
        <meta property="og:image" content={seoConfig.openGraph.images[0].url} />
        <meta name="twitter:card" content={seoConfig.twitter.cardType} />
        <meta name="twitter:site" content={seoConfig.twitter.site} />
        <meta name="twitter:creator" content={seoConfig.twitter.handle} />

        <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
        <script src="https://unpkg.com/swiper/swiper-bundle.min.js" defer></script>
        <GoogleAnalytics gaId="G-BVBHZ1NWSN" />
      </head>
      <body className={`${outfit.variable} ${dmSans.variable}`}>
        <HeaderTop />
        <Header />
        <ClientLayout>
          {children}
        </ClientLayout>
        <Footer />
        {/* FooterETop now appears here, after Footer but before FooterBottom */}
        <FooterETop />
        <FooterBottom />
      </body>
    </html>
  );
}
