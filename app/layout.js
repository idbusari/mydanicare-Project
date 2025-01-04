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
import seoConfig from '../config/seo.config'; // Import SEO Configuration

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
        {/* Dynamic SEO Meta Tags */}
        <title>{seoConfig.title}</title>
        <meta name="description" content={seoConfig.description} />
        <meta property="og:title" content={seoConfig.openGraph.title} />
        <meta property="og:description" content={seoConfig.openGraph.description} />
        <meta property="og:url" content={seoConfig.openGraph.url} />
        <meta property="og:image" content={seoConfig.openGraph.images[0].url} />
        <meta name="twitter:card" content={seoConfig.twitter.cardType} />
        <meta name="twitter:site" content={seoConfig.twitter.site} />
        <meta name="twitter:creator" content={seoConfig.twitter.handle} />

        {/* Adding Swiper CDN links */}
        <link
          rel="stylesheet"
          href="https://unpkg.com/swiper/swiper-bundle.min.css"
        />
        <script
          src="https://unpkg.com/swiper/swiper-bundle.min.js"
          defer
        ></script>
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