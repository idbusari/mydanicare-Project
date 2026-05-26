'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './ADHDPopup.scss';

const cards = [
  {
    icon: 'fa-clipboard-list',
    title: 'Comprehensive assessment',
    desc: 'We look at attention, focus, memory, symptoms, and how ADHD shows up in daily life.',
  },
  {
    icon: 'fa-file-medical-alt',
    title: 'Detailed clinical report',
    desc: 'You receive a clear report with findings your psychiatrist uses as part of your care plan.',
  },
  {
    icon: 'fa-user-md',
    title: 'Psychiatrist evaluation',
    desc: 'Your psychiatrist does an evaluation with the report to guide next steps and treatment options.',
  },
];

export default function ADHDPopup() {
  const [visible, setVisible] = useState(true);
  const dismiss = () => setVisible(false);

  if (!visible) return null;

  return (
    <div className="adhd-popup-overlay" onClick={dismiss} role="dialog" aria-modal="true" aria-label="ADHD Evaluation">
      <div className="adhd-popup-card" onClick={(e) => e.stopPropagation()}>

        <button className="adhd-popup-close" onClick={dismiss} aria-label="Close">
          <i className="fas fa-times" />
        </button>

        {/* ── LEFT: content ── */}
        <div className="adhd-popup-left">

          {/* Top row: logo + badge */}
          <div className="adhd-popup-toprow">
            <Image src="/images/danicareLogo.svg" alt="DaniCare" width={110} height={28} />
            <span className="adhd-popup-right-badge">
              <i className="fas fa-star" /> New Service
            </span>
          </div>

          {/* Heading */}
          <div className="adhd-popup-heading-wrap">
            <h2 className="adhd-popup-heading">
              Your brain<br />
              <span className="adhd-popup-heading-green">works differently.</span><br />
              Let&apos;s understand how.
            </h2>
            <div className="adhd-popup-divider" />
          </div>

          {/* Subheading + body */}
          <p className="adhd-popup-strong-sub">
            Restless, distracted, forgetful, or stuck in your own head?
          </p>
          <p className="adhd-popup-sub">
            A focused ADHD evaluation brings clarity to what you&apos;re experiencing—so your
            psychiatrist has better insight to guide your care.
          </p>

          {/* 3-column feature cards */}
          <div className="adhd-popup-cards">
            {cards.map((c, i) => (
              <div className="adhd-card" key={i}>
                <div className="adhd-card-icon">
                  <i className={`fas ${c.icon}`} />
                </div>
                <strong>{c.title}</strong>
                <span>{c.desc}</span>
              </div>
            ))}
          </div>

          {/* Trust bar */}
          <div className="adhd-popup-trust">
            <div className="adhd-trust-left">
              <div className="adhd-trust-icon"><i className="fas fa-shield-alt" /></div>
              <div>
                <strong>Medical Doctor–Led Care in Laredo</strong>
                <span>Compassionate. Thorough. Focused on you.</span>
              </div>
            </div>
          </div>

          {/* Price + CTA */}
          <div className="adhd-popup-bottom">
            <div className="adhd-popup-price">
              <i className="fas fa-tag" />
              <div>
                <strong>$220</strong>
                <span>Cash pay only</span>
              </div>
            </div>
            <Link href="/adhd-get-started" className="adhd-popup-cta" onClick={dismiss}>
              <i className="fas fa-arrow-right" />
              Start ADHD Evaluation
            </Link>
          </div>

          <p className="adhd-popup-cta-sub">
            <i className="fas fa-clock me-1" />Takes less than 2 minutes to begin.
          </p>

        </div>

        {/* ── RIGHT: image ── */}
        <div
          className="adhd-popup-right"
          style={{
            backgroundImage: 'url(/images/adhdTreatment3.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center 10%',
          }}
        />

      </div>
    </div>
  );
}
