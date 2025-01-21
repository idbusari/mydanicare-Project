'use client';  // Add this line at the very top

import { useEffect } from 'react';
import Image from 'next/image';
import './FooterBottom.scss';

export const FooterBottom = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://member.psychologytoday.com/verified-seal.js";
    script.type = "text/javascript";
    script.setAttribute('data-badge', '13');
    script.setAttribute('data-id', '1210394');
    script.setAttribute('data-code', 'aHR0cHM6Ly93d3cucHN5Y2hvbG9neXRvZGF5LmNvbS9hcGkvdmVyaWZpZWQtc2VhbC9zZWFscy8xMy9wcm9maWxlLzEyMTAzOTQ/Y2FsbGJhY2s9c3hjYWxsYmFjaw==');
    document.body.appendChild(script);
  }, []);

  return (
    <div className="row mt-4 bg-white">
      <div className="col-12 text-center">
        <Image
          src={"/images/hipaa.jpg"}
          layout="intrinsic"
          width={159}
          height={32}
          alt="DaniCare Logo"
          style={{ color: "transparent" }}
        />
        <a href="https://www.psychologytoday.com/profile/1210394" className="sx-verified-seal"></a>
        <p style={{ color: "#333" }}>
          &copy; {new Date().getFullYear()} DaniCare Psychiatry. All rights reserved.
        </p>
      </div>
    </div>
  );
};
