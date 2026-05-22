'use client';

import { useState } from 'react';
import Link from 'next/link';

const S = {
  // colours
  navy:  '#1a3c6e',
  green: '#0d6e4f',
  gold:  '#FFCC00',
  orange:'#e66926',
};

const bullets = [
  {
    icon: 'fa-clipboard-list',
    text: <><strong style={{color:S.navy}}>A comprehensive evaluation</strong> to understand your symptoms and strengths.</>,
  },
  {
    icon: 'fa-file-alt',
    text: <><strong style={{color:S.navy}}>A detailed report</strong> summarizing findings and recommendations.</>,
  },
  {
    icon: 'fa-user-md',
    text: <>Your psychiatrist <strong style={{color:S.navy}}>reviews the report</strong> and incorporates it into their broader evaluation and treatment plan.</>,
  },
];

const quickFacts = [
  { icon: 'fa-users',         label: 'Children, teens & adults' },
  { icon: 'fa-map-marker-alt',label: 'TX · NY · NJ' },
  { icon: 'fa-video',         label: 'Telehealth' },
  { icon: 'fa-tag',           label: '$220 — Cash pay only' },
];

export default function ADHDWaitlistPage() {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    state: '', forWhom: '', notes: '',
  });
  const [status, setStatus]   = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    try {
      const res  = await fetch('/api/adhd-waitlist', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) { setErrorMsg(data.error || 'Something went wrong.'); setStatus('error'); return; }
      setStatus('success');
    } catch {
      setErrorMsg('Unable to submit. Please check your connection and try again.');
      setStatus('error');
    }
  };

  return (
    <main style={{ background: '#f4f6fb', minHeight: '100vh', paddingBottom: '80px' }}>

      {/* ── Hero banner ── */}
      <div style={{
        background: `linear-gradient(160deg, ${S.navy} 0%, #0d2b55 100%)`,
        padding: '3.5rem 1rem',
        textAlign: 'center',
      }}>
        <span style={{
          display: 'inline-block', background: S.gold, color: S.navy,
          fontFamily: 'Outfit, sans-serif', fontWeight: 700,
          fontSize: '10px', letterSpacing: '2.5px', textTransform: 'uppercase',
          padding: '4px 16px', borderRadius: '20px', marginBottom: '1rem',
        }}>
          <i className="fas fa-star me-1" />New Service
        </span>
        <h1 style={{
          fontFamily: 'Outfit, sans-serif', fontWeight: 700, color: '#fff',
          fontSize: 'clamp(1.6rem, 5vw, 2.2rem)', lineHeight: 1.2, marginBottom: '0.6rem',
        }}>
          Focused ADHD Evaluation.<br />Clearer Answers. Better Next Steps.
        </h1>
        <div style={{ width: '40px', height: '3px', background: S.green, borderRadius: '4px', margin: '0 auto 1rem' }} />
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', maxWidth: '480px', margin: '0 auto' }}>
          A focused ADHD evaluation designed to provide diagnostic clarity
          and support clinical decision-making.
        </p>
      </div>

      <div className="container" style={{ maxWidth: '680px', paddingTop: '2rem' }}>

        {/* ── What's included ── */}
        <div style={{
          background: '#fff', borderRadius: '16px',
          padding: '1.75rem', marginBottom: '1.5rem',
          boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
        }}>
          <h2 style={{ fontFamily: 'Outfit, sans-serif', color: S.navy, fontSize: '1.05rem', marginBottom: '1rem' }}>
            What this service includes
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.25rem' }}>
            {bullets.map((b, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'flex-start', gap: '0.75rem',
                padding: '0.65rem 0.85rem', borderRadius: '10px',
                border: '1.5px solid #eef2f0', background: '#fafcfb',
              }}>
                <div style={{
                  width: '34px', height: '34px', borderRadius: '8px',
                  background: 'rgba(13,110,79,0.1)', color: S.green,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, fontSize: '0.85rem',
                }}>
                  <i className={`fas ${b.icon}`} />
                </div>
                <div style={{ fontSize: '0.87rem', color: '#444', lineHeight: 1.55, paddingTop: '3px' }}>
                  {b.text}
                </div>
              </div>
            ))}
          </div>

          {/* Quick facts */}
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr',
            gap: '0.45rem', marginTop: '1rem',
          }}>
            {quickFacts.map((f) => (
              <span key={f.label} style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                background: '#f0f7f4', border: '1px solid #c8e6da',
                borderRadius: '20px', padding: '6px 14px',
                fontSize: '0.77rem', color: S.navy, fontWeight: 600,
              }}>
                <i className={`fas ${f.icon}`} style={{ color: S.green, fontSize: '0.7rem' }} />
                {f.label}
              </span>
            ))}
          </div>
        </div>

        {/* ── Form / Success ── */}
        {status === 'success' ? (
          <div style={{
            background: '#fff', border: `2px solid ${S.gold}`,
            borderRadius: '16px', padding: '2.5rem',
            textAlign: 'center', boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
          }}>
            <div style={{
              width: '60px', height: '60px',
              background: `linear-gradient(135deg, ${S.navy}, ${S.green})`,
              borderRadius: '50%', display: 'flex', alignItems: 'center',
              justifyContent: 'center', margin: '0 auto 1.25rem',
            }}>
              <i className="fas fa-check" style={{ color: S.gold, fontSize: '1.5rem' }} />
            </div>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', color: S.navy, marginBottom: '0.5rem' }}>
              You&apos;re all set!
            </h2>
            <p style={{ color: '#555', maxWidth: '380px', margin: '0 auto 1.5rem', fontSize: '0.9rem' }}>
              Our team will contact you within 1 business day to schedule your evaluation
              and walk you through next steps.
            </p>
            <Link href="/" style={{
              display: 'inline-block', background: S.gold, color: S.navy,
              fontFamily: 'Outfit, sans-serif', fontWeight: 700,
              fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase',
              padding: '14px 32px', borderRadius: '36px', textDecoration: 'none',
            }}>
              Back to Home
            </Link>
          </div>
        ) : (
          <div style={{
            background: '#fff', borderRadius: '16px',
            padding: '1.75rem', boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
          }}>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', color: S.navy, fontSize: '1.05rem', marginBottom: '0.2rem' }}>
              Get Started
            </h2>
            <p style={{ fontSize: '0.83rem', color: '#888', marginBottom: '1.25rem' }}>
              Fill in your details and our team will reach out within 1 business day to schedule your evaluation.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="row g-3">

                <div className="col-sm-6">
                  <label className="form-label fw-semibold" style={{ fontSize: '0.85rem' }}>First Name *</label>
                  <input className="form-control" name="firstName" value={form.firstName}
                    onChange={handleChange} required placeholder="Jane"
                    style={{ borderRadius: '10px', fontSize: '0.9rem' }} />
                </div>

                <div className="col-sm-6">
                  <label className="form-label fw-semibold" style={{ fontSize: '0.85rem' }}>Last Name *</label>
                  <input className="form-control" name="lastName" value={form.lastName}
                    onChange={handleChange} required placeholder="Smith"
                    style={{ borderRadius: '10px', fontSize: '0.9rem' }} />
                </div>

                <div className="col-sm-6">
                  <label className="form-label fw-semibold" style={{ fontSize: '0.85rem' }}>Email *</label>
                  <input type="email" className="form-control" name="email" value={form.email}
                    onChange={handleChange} required placeholder="jane@email.com"
                    style={{ borderRadius: '10px', fontSize: '0.9rem' }} />
                </div>

                <div className="col-sm-6">
                  <label className="form-label fw-semibold" style={{ fontSize: '0.85rem' }}>Phone *</label>
                  <input type="tel" className="form-control" name="phone" value={form.phone}
                    onChange={handleChange} required placeholder="(956) 000-0000"
                    style={{ borderRadius: '10px', fontSize: '0.9rem' }} />
                </div>

                <div className="col-sm-6">
                  <label className="form-label fw-semibold" style={{ fontSize: '0.85rem' }}>State *</label>
                  <select className="form-select" name="state" value={form.state}
                    onChange={handleChange} required
                    style={{ borderRadius: '10px', fontSize: '0.9rem' }}>
                    <option value="">Select state</option>
                    <option value="TX">Texas (TX)</option>
                    <option value="NY">New York (NY)</option>
                    <option value="NJ">New Jersey (NJ)</option>
                  </select>
                </div>

                <div className="col-sm-6">
                  <label className="form-label fw-semibold" style={{ fontSize: '0.85rem' }}>Evaluation is for</label>
                  <select className="form-select" name="forWhom" value={form.forWhom}
                    onChange={handleChange}
                    style={{ borderRadius: '10px', fontSize: '0.9rem' }}>
                    <option value="">Select one</option>
                    <option value="Myself (Adult)">Myself (Adult)</option>
                    <option value="My child / teen">My child / teen</option>
                  </select>
                </div>

                <div className="col-12">
                  <label className="form-label fw-semibold" style={{ fontSize: '0.85rem' }}>
                    Additional notes&nbsp;
                    <span style={{ fontWeight: 400, color: '#aaa' }}>(optional)</span>
                  </label>
                  <textarea className="form-control" name="notes" value={form.notes}
                    onChange={handleChange} rows={3}
                    placeholder="Age, previous evaluations, school concerns, preferred times..."
                    style={{ borderRadius: '10px', resize: 'vertical', fontSize: '0.9rem' }} />
                </div>

                {status === 'error' && (
                  <div className="col-12">
                    <div className="alert alert-danger py-2 mb-0" style={{ borderRadius: '10px', fontSize: '0.87rem' }}>
                      {errorMsg}
                    </div>
                  </div>
                )}

                <div className="col-12">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    style={{
                      display: 'block', width: '100%',
                      background: S.gold, color: S.navy,
                      fontFamily: 'Outfit, sans-serif', fontWeight: 700,
                      fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase',
                      padding: '15px', borderRadius: '36px', border: 'none',
                      cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                      opacity: status === 'loading' ? 0.7 : 1,
                      boxShadow: '0 4px 16px rgba(255,204,0,0.3)',
                      transition: 'opacity 0.2s',
                    }}
                  >
                    {status === 'loading'
                      ? <><i className="fas fa-spinner fa-spin me-2" />Submitting…</>
                      : <><i className="fas fa-arrow-right me-2" />Get Started</>
                    }
                  </button>
                  <p style={{ textAlign: 'center', fontSize: '0.74rem', color: '#aaa', marginTop: '0.6rem', marginBottom: 0 }}>
                    Your information is confidential. A team member will contact you within 1 business day.
                  </p>
                </div>

              </div>
            </form>
          </div>
        )}

      </div>
    </main>
  );
}
