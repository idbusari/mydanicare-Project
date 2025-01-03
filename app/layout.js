import 'bootstrap/dist/css/bootstrap.min.css';
import { Outfit, DM_Sans } from 'next/font/google';
import '@fortawesome/fontawesome-free/css/all.min.css';

import "./globals.css";
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import ClientLayout from './ClientLayout';
import { FooterBottom } from '../components/FooterBottom/FooterBottom';
import HeaderTop from '../components/HeaderTop/HeaderTop';

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
  title: "Danicare",
  description: "Psychiatry Tailored to Suit Yo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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
        <HeaderTop/>
        <Header />
        <ClientLayout>
          {children}
        </ClientLayout>
        <Footer />
        <FooterBottom/>
      </body>
    </html>
  );
}
