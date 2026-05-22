'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './ADHDPopup.scss';

const bullets = [
  {
    icon: 'fa-clipboard-check',
    title: 'Comprehensive evaluation',
    desc: 'Understand attention, focus, symptoms, and day-to-day functioning.',
  },
  {
    icon: 'fa-file-medical-alt',
    title: 'Detailed clinical report',
    desc: 'Receive a clear summary of findings and recommendations.',
  },
  {
    icon: 'fa-user-md',
    title: 'Psychiatrist review',
    desc: 'Your psychiatrist reviews the report and uses it to guide your treatment plan.',
  },
];

export default function ADHDPopup() {
  const [visible, setVisible] = useState(true);
  const dismiss = () => setVisible(false);

  if (!visible) return null;

  return (
    <div
      className="adhd-popup-overlay"
      onClick={dismiss}
      role="dialog"
      aria-modal="true"
      aria-label="ADHD Evaluation"
    >
      <div className="adhd-popup-card" onClick={(e) => e.stopPropagation()}>

        {/* Close button — top right of card */}
        <button className="adhd-popup-close" onClick={dismiss} aria-label="Close">
          <i className="fas fa-times" />
        </button>

        {/* ── LEFT: content ── */}
        <div className="adhd-popup-left">

          {/* Logo */}
          <div className="adhd-popup-logo">
            <Image src="/images/danicareLogo.svg" alt="DaniCare" width={120} height={32} />
          </div>

          {/* Heading */}
          <h2 className="adhd-popup-heading">
            Focused ADHD Evaluation.<br />
            Clear answers.<br />
            <span className="adhd-popup-heading-green">Better next steps.</span>
          </h2>

          {/* Subtitle */}
          <p className="adhd-popup-sub">
            A structured ADHD evaluation designed to support diagnostic clarity
            and help your psychiatrist make informed treatment decisions.
          </p>

          {/* Bullets */}
          <div className="adhd-popup-bullets">
            {bullets.map((b, i) => (
              <div className="adhd-bullet-row" key={i}>
                <div className="adhd-bullet-icon">
                  <i className={`fas ${b.icon}`} />
                </div>
                <div className="adhd-bullet-text">
                  <strong>{b.title}</strong>
                  <span>{b.desc}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Callout */}
          <div className="adhd-popup-callout">
            <i className="fas fa-shield-alt" />
            <p>Our goal is to provide <strong>clarity, support, and a path forward.</strong></p>
          </div>

          {/* CTA */}
          <Link href="/get-started" className="adhd-popup-cta" onClick={dismiss}>
            <i className="fas fa-arrow-right" />
            Get Started
          </Link>

          <p className="adhd-popup-cta-sub">
            <i className="fas fa-clock me-1" />Takes less than 2 minutes.
          </p>

          {/* Pricing */}
          <div className="adhd-popup-price">
            <i className="fas fa-tag" />
            <span><strong>$220</strong> — Cash pay only</span>
          </div>


        </div>

        {/* ── RIGHT: image ── */}
        <div
          className="adhd-popup-right"
          style={{
            backgroundImage: 'url(/images/adhdTreatment3.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center 10%',
          }}
        >
          <span className="adhd-popup-right-badge">
            <i className="fas fa-star" /> New Service
          </span>
        </div>

      </div>
    </div>
  );
}
