import 'bootstrap/dist/css/bootstrap.min.css';
import { Outfit, DM_Sans } from 'next/font/google';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./globals.css";
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import ClientLayout from './ClientLayout';
import { FooterBottom } from '../components/FooterBottom/FooterBottom';
import HeaderTop from '../components/HeaderTop/HeaderTop';
import seoConfig from '../config/seo.config';
import Script from 'next/script';
import TrackingScripts from '../components/TrackingScripts/TrackingScripts';
import CookieConsent from '../components/CookieConsent/CookieConsent';
import OrganizationSchema from '../components/StructuredData/OrganizationSchema';
import HideOnAdmin from '../components/HideOnAdmin';
import PWARegister from '../components/PWARegister';

// Import FooterETop
import FooterETop from '../components/FooterETop/FooterETop';
import SocialMediaSidebar from "../components/SocialMediaSidebar/SocialMediaSidebar";
import SocialMediaRow from '../components/SocialMediaRow/SocialMediaRow';

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        <meta property="og:title" content={seoConfig.openGraph.title} />
        <meta property="og:description" content={seoConfig.openGraph.description} />
        <meta property="og:url" content={seoConfig.openGraph.url} />
        <meta property="og:image" content={seoConfig.openGraph.images[0].url} />
        <meta name="twitter:card" content={seoConfig.twitter.cardType} />
        <meta name="twitter:site" content={seoConfig.twitter.site} />
        <meta name="twitter:creator" content={seoConfig.twitter.handle} />

        {/* Google Consent Mode — default denied before user choice */}
        <Script id="consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'analytics_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied'
            });
          `}
        </Script>
        <OrganizationSchema />
      </head>
      <body className={`${outfit.variable} ${dmSans.variable}`}>
        <PWARegister />
        <HideOnAdmin>
          <a
            href="#main-content"
            className="skip-to-content"
          >
            Skip to main content
          </a>
          <HeaderTop />
          <SocialMediaSidebar />
          <Header />
        </HideOnAdmin>
        <main id="main-content">
          <ClientLayout>
            {children}
          </ClientLayout>
        </main>
        <HideOnAdmin>
          <Footer />
          <FooterETop />
          <SocialMediaRow />
          <FooterBottom />
          <TrackingScripts />
          <CookieConsent />
        </HideOnAdmin>
      </body>
    </html>
  );
}