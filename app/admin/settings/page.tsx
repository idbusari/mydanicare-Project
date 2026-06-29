'use client';

import { useState, useEffect } from 'react';

export default function SettingsPage() {
  const [settings, setSettings] = useState<Record<string, string>>({});
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch('/api/settings').then((r) => r.json()).then(setSettings);
  }, []);

  const handleChange = (key: string, value: string) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = async () => {
    await fetch('/api/settings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(settings),
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const fields = [
    { key: 'header_phone', label: 'Header Phone Number', default: '(956) 267-8020' },
    { key: 'header_email', label: 'Header Email', default: 'info@mydanicare.com' },
    { key: 'footer_address', label: 'Footer Address', default: '5910 San Bernardo Ave Ste A, Laredo, TX 78041' },
    { key: 'popup_title', label: 'Popup Title', default: 'Schedule Your Free Consultation' },
    { key: 'popup_message', label: 'Popup Message', default: 'Take the first step towards better mental health. Book your appointment today.' },
    { key: 'popup_button', label: 'Popup Button Text', default: 'Book Appointment' },
    { key: 'popup_link', label: 'Popup Button Link', default: '/psychiatry-care-registration' },
  ];

  return (
    <div>
      <h1 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '24px', color: '#1a3c6e' }}>Site Settings</h1>

      {saved && (
        <div style={{ background: '#dcfce7', color: '#166534', padding: '12px 16px', borderRadius: '8px', marginBottom: '16px', fontWeight: 500 }}>
          Settings saved successfully!
        </div>
      )}

      <div style={{ background: '#fff', borderRadius: '12px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        {fields.map((field) => (
          <div key={field.key} style={{ marginBottom: '20px' }}>
            <label style={{ fontSize: '0.85rem', fontWeight: 600, color: '#333132', display: 'block', marginBottom: '6px' }}>{field.label}</label>
            {field.key.includes('message') ? (
              <textarea
                value={settings[field.key] || field.default}
                onChange={(e) => handleChange(field.key, e.target.value)}
                rows={3}
                style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.95rem' }}
              />
            ) : (
              <input
                value={settings[field.key] || field.default}
                onChange={(e) => handleChange(field.key, e.target.value)}
                style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.95rem' }}
              />
            )}
          </div>
        ))}

        <button
          onClick={handleSave}
          style={{ padding: '12px 32px', borderRadius: '8px', border: 'none', background: '#1a3c6e', color: '#fff', fontWeight: 600, cursor: 'pointer', fontSize: '1rem' }}
        >
          Save Settings
        </button>
      </div>
    </div>
  );
}
