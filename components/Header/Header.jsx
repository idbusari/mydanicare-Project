"use client";
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation'; // Use the correct hook for App Router
import './Header.scss';

export const Header = () => {
  const pathname = usePathname(); // Get the current path

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
        <div className="container">
          <Link className="navbar-brand" href="/">
            <Image
              alt="logo"
              src={'/images/danicareLogo.svg'}
              width={159}
              height={32}
              layout="intrinsic"
            />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-center">
              {[
                { href: '/psychiatry-service-provider', label: 'About Us' },
                { href: '/psychiatry-treatment', label: 'Treatment' },
                { href: '/become-a-patient', label: 'Patients' },
                { href: '/we-accept-insurance', label: 'Insurance' },
                { href: '/partner-with-us', label: 'Partner' },
                { href: '/refer-a-patient', label: 'Refer Patient' },
                { href: '/our-faqs', label: 'FAQ' },
               
              ].map((item, idx) => (
                <li key={idx} className="nav-item">
                  <Link
                    className={`nav-link ${
                      pathname === item.href ? 'active' : ''
                    }`}
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}

{/* Patient Login */}
<li className="nav-item">
                <Link 
                  className="nav-link" 
                  href="https://portal.kareo.com/pp-webapp/app/new/login" 
                  target="_blank"
                >
                  Patient Login
                </Link>
              </li>
<Link href="/become-a-patient" className="cta ms-lg-3">
              Get Started
            </Link>
              
            </ul>
            
         
          </div>
        </div>
      </nav>
    </header>
  );
};
