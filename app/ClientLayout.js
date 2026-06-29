"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { SessionProvider } from 'next-auth/react';
import 'aos/dist/aos.css';
import ADHDPopup from '../components/ADHDPopup/ADHDPopup';

export default function ClientLayout({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    // Lazy-load Bootstrap JS only when needed (navbar toggles, modals, dropdowns)
    import('bootstrap/dist/js/bootstrap.bundle.min.js');

    // Initialize AOS with reduced-motion respect
    const initAOS = async () => {
      const AOS = (await import('aos')).default;
      const prefersReducedMotion =
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      AOS.init({
        duration: prefersReducedMotion ? 0 : 800,
        easing: 'ease-in-out',
        once: true,
        disable: prefersReducedMotion,
      });
    };

    initAOS();
  }, []);

  // Track page views on route change
  useEffect(() => {
    if (!pathname) return;
    // Skip admin routes
    if (pathname.startsWith('/admin')) return;

    fetch('/api/analytics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ page: pathname }),
    }).catch(() => {});
  }, [pathname]);

  return (
    <SessionProvider>
      {pathname === '/' && <ADHDPopup />}
      {children}
    </SessionProvider>
  );
}
