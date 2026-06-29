'use client';

import { useState, useEffect } from 'react';

interface Integration {
  key: string;
  name: string;
  placeholder: string;
}

const INTEGRATIONS: Integration[] = [
  { key: 'ga_id', name: 'Google Analytics', placeholder: 'G-XXXXXXXXXX' },
  { key: 'gtm_id', name: 'Google Tag Manager', placeholder: 'GTM-XXXXXX' },
  { key: 'meta_pixel_id', name: 'Meta Pixel', placeholder: 'XXXXXXXXXXXXXXX' },
  { key: 'gsc_verify', name: 'Google Search Console', placeholder: 'Paste verification tag or meta content' },
];

export default function SEOPage() {
  const [score, setScore] = useState(0);
  const [checks, setChecks] = useState<Record<string, boolean>>({});
  const [settings, setSettings] = useState<Record<string, string>>({});
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetch('/api/seo-check').then((r) => r.json()).then((data) => {
      setChecks(data.checks);
      const passed = Object.values(data.checks).filter(Boolean).length;
      setScore(Math.round((passed / Object.keys(data.checks).length) * 100));
    });
    fetch('/api/settings').then((r) => r.json()).then(setSettings);
  }, []);

  const checkList = [
    { key: 'sitemap', label: 'Sitemap.xml exists' },
    { key: 'robots', label: 'Robots.txt exists' },
    { key: 'manifest', label: 'PWA Manifest exists' },
    { key: 'metaTitle', label: 'Meta titles on all pages' },
    { key: 'metaDesc', label: 'Meta descriptions on all pages' },
    { key: 'canonical', label: 'Canonical URLs set' },
    { key: 'structuredData', label: 'Structured data (JSON-LD)' },
    { key: 'ssl', label: 'SSL/HTTPS enabled' },
    { key: 'mobileFriendly', label: 'Mobile responsive' },
    { key: 'fastLoad', label: 'Fast loading (< 3s)' },
  ];

  const getScoreColor = () => {
    if (score >= 90) return '#059669';
    if (score >= 70) return '#FFCC00';
    return '#dc2626';
  };

  const handleChange = (key: string, value: string) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  const save = async () => {
    setSaving(true);
    setSaved(false);
    const payload: Record<string, string> = {};
    INTEGRATIONS.forEach((int) => {
      payload[int.key] = settings[int.key] || '';
    });
    await fetch('/api/settings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    setSaving(false);
    setSaved(true);
    setIsEditing(false);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div>
      <h1 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '24px', color: '#1a3c6e' }}>SEO Dashboard</h1>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '32px' }}>
        <div style={{ background: '#fff', borderRadius: '12px', padding: '24px', textAlign: 'center', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <div style={{ fontSize: '3rem', fontWeight: 700, color: getScoreColor() }}>{score}</div>
          <div style={{ fontSize: '0.9rem', color: '#5e6883', fontWeight: 500 }}>SEO Score</div>
        </div>
        <div style={{ background: '#fff', borderRadius: '12px', padding: '24px', textAlign: 'center', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <div style={{ fontSize: '3rem', fontWeight: 700, color: '#1a3c6e' }}>{Object.values(checks).filter(Boolean).length}</div>
          <div style={{ fontSize: '0.9rem', color: '#5e6883', fontWeight: 500 }}>Checks Passed</div>
        </div>
      </div>

      <div style={{ background: '#fff', borderRadius: '12px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '16px', color: '#1a3c6e' }}>SEO Health Checks</h2>
        <div style={{ display: 'grid', gap: '12px' }}>
          {checkList.map((check) => (
            <div key={check.key} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', borderRadius: '8px', background: checks[check.key] ? '#dcfce7' : '#fef2f2' }}>
              <span style={{ fontSize: '0.95rem', fontWeight: 500, color: '#333132' }}>{check.label}</span>
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: checks[check.key] ? '#166534' : '#dc2626' }}>
                {checks[check.key] ? 'PASS' : 'FAIL'}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: '24px', background: '#fff', borderRadius: '12px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '12px' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#1a3c6e', margin: 0 }}>Integrations</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {saved && (
              <span style={{ color: '#059669', fontWeight: 600, fontSize: '0.9rem' }}>Saved!</span>
            )}
            {isEditing ? (
              <button
                onClick={save}
                disabled={saving}
                style={{ padding: '10px 24px', borderRadius: '8px', border: 'none', background: '#1a3c6e', color: '#fff', fontWeight: 600, cursor: 'pointer', opacity: saving ? 0.7 : 1 }}
              >
                {saving ? 'Saving...' : 'Save Integrations'}
              </button>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                style={{ padding: '10px 24px', borderRadius: '8px', border: '1px solid #e2e8f0', background: '#fff', color: '#1a3c6e', fontWeight: 600, cursor: 'pointer' }}
              >
                Edit Integrations
              </button>
            )}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
          {INTEGRATIONS.map((int) => {
            const value = settings[int.key] || '';
            const isActive = value.length > 0;
            return (
              <div key={int.key} style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <div style={{ fontWeight: 600, color: '#1a3c6e' }}>{int.name}</div>
                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    padding: '2px 10px',
                    borderRadius: '12px',
                    background: isActive ? '#dcfce7' : '#fef2f2',
                    color: isActive ? '#059669' : '#dc2626',
                    textTransform: 'uppercase',
                  }}>
                    {isActive ? 'Active' : 'Pending Setup'}
                  </span>
                </div>
                <input
                  value={value}
                  onChange={(e) => handleChange(int.key, e.target.value)}
                  placeholder={int.placeholder}
                  readOnly={!isEditing}
                  style={{
                    width: '100%',
                    padding: '8px 10px',
                    borderRadius: '6px',
                    border: '1px solid #e2e8f0',
                    fontSize: '0.9rem',
                    fontFamily: 'monospace',
                    background: isEditing ? '#fff' : '#f8fafc',
                    cursor: isEditing ? 'text' : 'not-allowed',
                  }}
                />
                <div style={{ fontSize: '0.75rem', color: '#5e6883', marginTop: '6px' }}>
                  {int.key === 'gsc_verify'
                    ? 'Paste your Google Search Console HTML tag content (e.g. abc123def456)'
                    : `Enter your ${int.name} tracking ID`}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
