'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const CONSENT_KEY = 'danicare_cookie_consent';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(CONSENT_KEY);
      if (stored === null) {
        setVisible(true);
      }
    } catch {
      // localStorage may be unavailable in some environments
    }
  }, []);

  const notifyChange = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('danicare-consent-change'));
    }
  };

  const handleAccept = () => {
    try {
      localStorage.setItem(CONSENT_KEY, 'granted');
    } catch {
      /* ignore */
    }
    setVisible(false);

    // Update Google Consent Mode
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        ad_storage: 'granted',
        analytics_storage: 'granted',
        ad_user_data: 'granted',
        ad_personalization: 'granted',
      });
    }

    notifyChange();
  };

  const handleDecline = () => {
    try {
      localStorage.setItem(CONSENT_KEY, 'denied');
    } catch {
      /* ignore */
    }
    setVisible(false);
    notifyChange();
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        background: '#ffffff',
        borderTop: '4px solid #FFCC00',
        boxShadow: '0 -4px 20px rgba(0,0,0,0.1)',
        padding: '1.25rem 1rem',
        fontFamily: 'var(--font-dm-sans), sans-serif',
        fontSize: '0.9rem',
        color: '#333132',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
        }}
      >
        <p style={{ margin: 0, flex: '1 1 300px', lineHeight: 1.6 }}>
          We use cookies and similar technologies to enhance your experience, analyze traffic, and for marketing purposes.
          By clicking &quot;Accept All&quot;, you consent to our use of cookies.{" "}
          <Link
            href="/privacy-policy"
            style={{ color: '#E66926', textDecoration: 'underline', fontWeight: 500 }}
          >
            Privacy Policy
          </Link>
        </p>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.75rem',
            flexShrink: 0,
          }}
        >
          <button
            onClick={handleDecline}
            style={{
              padding: '0.6rem 1.25rem',
              borderRadius: '36px',
              border: '2px solid #333132',
              background: 'transparent',
              color: '#333132',
              fontFamily: 'var(--font-outfit), sans-serif',
              fontWeight: 700,
              fontSize: '0.8rem',
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              cursor: 'pointer',
              transition: 'all 200ms ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#f5f5f5';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
            }}
          >
            Decline
          </button>

          <button
            onClick={handleAccept}
            style={{
              padding: '0.6rem 1.25rem',
              borderRadius: '36px',
              border: 'none',
              background: '#FFCC00',
              color: '#333132',
              fontFamily: 'var(--font-outfit), sans-serif',
              fontWeight: 700,
              fontSize: '0.8rem',
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              cursor: 'pointer',
              transition: 'all 200ms ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#e6b800';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#FFCC00';
            }}
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
