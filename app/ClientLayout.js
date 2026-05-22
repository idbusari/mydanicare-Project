"use client";

import { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import ADHDPopup from '../components/ADHDPopup/ADHDPopup';


export default function ClientLayout({ children }) {
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
      <ADHDPopup />
      {children}
    </>
  );
}
