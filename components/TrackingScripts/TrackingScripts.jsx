'use client';

import { useState, useEffect } from 'react';
import Script from 'next/script';

const CONSENT_KEY = 'danicare_cookie_consent';
const GTM_ID = 'GTM-PN7M6L9W';
const GA_ID = 'G-BVBHZ1NWSN';
const META_PIXEL_ID = '2239959983479799';

export default function TrackingScripts() {
  const [mounted, setMounted] = useState(false);
  const [consent, setConsent] = useState(null);

  useEffect(() => {
    setMounted(true);

    const readConsent = () => {
      try {
        setConsent(localStorage.getItem(CONSENT_KEY));
      } catch {
        setConsent(null);
      }
    };

    readConsent();

    const handleChange = () => readConsent();
    window.addEventListener('danicare-consent-change', handleChange);
    return () => window.removeEventListener('danicare-consent-change', handleChange);
  }, []);

  const granted = consent === 'granted';

  // Only render tracking scripts after hydration to avoid mismatch
  if (!mounted || !granted) return null;

  return (
    <>
      {/* Google Tag Manager */}
      <Script id="gtm-script" strategy="lazyOnload">
        {`
          (function(w,d,s,l,i){
            w[l]=w[l]||[];
            w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0], j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
            j.async=true; j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
        `}
      </Script>

      {/* Meta Pixel */}
      <Script id="meta-pixel" strategy="lazyOnload">
        {`
          !function(f,b,e,v,n,t,s){
            if(f.fbq)return; n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n; n.push=n; n.loaded=!0; n.version='2.0';
            n.queue=[]; t=b.createElement(e); t.async=!0;
            t.src=v; s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)
          }(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${META_PIXEL_ID}');
          fbq('track', 'PageView');
        `}
      </Script>

      {/* Google Analytics 4 */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="lazyOnload"
      />
      <Script id="ga-config" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
