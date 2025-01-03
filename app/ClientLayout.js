"use client";

import { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';


export default function ClientLayout({ children }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing function
      once: true, // Only animate once
    });
  }, []);

  return <>{children}</>; // Render the children
}
