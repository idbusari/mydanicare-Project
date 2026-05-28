"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import 'aos/dist/aos.css';
import AOS from 'aos';
import ADHDPopup from '../components/ADHDPopup/ADHDPopup';


export default function ClientLayout({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <>
      {pathname === '/' && <ADHDPopup />}
      {children}
    </>
  );
}
