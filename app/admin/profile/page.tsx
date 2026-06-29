'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';

export default function ProfilePage() {
  const { data: session } = useSession();
  const user = session?.user as { name?: string; email?: string; role?: string } | undefined;

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMsg('');
    setError('');

    if (newPassword.length < 6) {
      setError('New password must be at least 6 characters.');
      return;
    }
    if (newPassword !== confirmPassword) {
      setError('New passwords do not match.');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ currentPassword, newPassword }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to update password');
      setMsg('Password updated successfully.');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to update password';
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '24px', color: '#1a3c6e' }}>
        My Profile
      </h1>

      {msg && (
        <div style={{ padding: '12px 16px', borderRadius: '8px', marginBottom: '16px', background: '#dcfce7', color: '#166534', fontWeight: 500 }}>
          {msg}
        </div>
      )}
      {error && (
        <div style={{ padding: '12px 16px', borderRadius: '8px', marginBottom: '16px', background: '#fee2e2', color: '#991b1b', fontWeight: 500 }}>
          {error}
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
        {/* Profile Info Card */}
        <div style={{ background: '#fff', borderRadius: '12px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '16px', color: '#1a3c6e' }}>Account Info</h2>
          <div style={{ marginBottom: '16px' }}>
            <label style={{ fontSize: '0.8rem', fontWeight: 600, color: '#5e6883', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block', marginBottom: '4px' }}>Name</label>
            <div style={{ fontSize: '1rem', fontWeight: 500, color: '#111' }}>{user?.name || '—'}</div>
          </div>
          <div style={{ marginBottom: '16px' }}>
            <label style={{ fontSize: '0.8rem', fontWeight: 600, color: '#5e6883', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block', marginBottom: '4px' }}>Email</label>
            <div style={{ fontSize: '1rem', fontWeight: 500, color: '#111' }}>{user?.email || '—'}</div>
          </div>
          <div>
            <label style={{ fontSize: '0.8rem', fontWeight: 600, color: '#5e6883', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block', marginBottom: '4px' }}>Role</label>
            <span style={{
              padding: '4px 12px',
              borderRadius: '12px',
              fontSize: '0.8rem',
              fontWeight: 600,
              background: user?.role === 'admin' ? '#dc262615' : user?.role === 'editor' ? '#e6692615' : '#1a3c6e15',
              color: user?.role === 'admin' ? '#dc2626' : user?.role === 'editor' ? '#e66926' : '#1a3c6e',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}>
              {user?.role || '—'}
            </span>
          </div>
        </div>

        {/* Change Password Card */}
        <div style={{ background: '#fff', borderRadius: '12px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '16px', color: '#1a3c6e' }}>Change Password</h2>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '16px' }}>
              <label style={{ fontSize: '0.85rem', fontWeight: 600, display: 'block', marginBottom: '6px' }}>Current Password</label>
              <input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                required
                style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.95rem' }}
              />
            </div>
            <div style={{ marginBottom: '16px' }}>
              <label style={{ fontSize: '0.85rem', fontWeight: 600, display: 'block', marginBottom: '6px' }}>New Password</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                minLength={6}
                style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.95rem' }}
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ fontSize: '0.85rem', fontWeight: 600, display: 'block', marginBottom: '6px' }}>Confirm New Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                minLength={6}
                style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.95rem' }}
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              style={{ padding: '10px 24px', borderRadius: '8px', border: 'none', background: '#1a3c6e', color: '#fff', fontWeight: 600, cursor: 'pointer', opacity: loading ? 0.7 : 1 }}
            >
              {loading ? 'Updating...' : 'Update Password'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
