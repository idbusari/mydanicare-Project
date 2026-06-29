'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
        callbackUrl: '/admin',
      });

      console.log('SignIn result:', result);

      if (!result) {
        setError('No response from server. Please try again.');
        setLoading(false);
        return;
      }

      if (result.error) {
        setError('Invalid email or password');
        setLoading(false);
        return;
      }

      if (result.ok) {
        window.location.href = '/admin';
        return;
      }

      setError('Login failed. Please try again.');
      setLoading(false);
    } catch (err) {
      console.error('Login error:', err);
      const message = err instanceof Error ? err.message : 'Something went wrong. Please try again.';
      setError(message);
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #1a3c6e 0%, #2d5a9d 100%)',
        fontFamily: 'var(--font-dm-sans), sans-serif',
      }}
    >
      <div
        style={{
          background: '#fff',
          borderRadius: '16px',
          padding: '40px',
          width: '100%',
          maxWidth: '420px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <img
            src="/images/crisislogo.png"
            alt="DaniCare Logo"
            style={{ width: '100px', height: 'auto', marginBottom: '16px', display: 'inline-block' }}
          />
          <h1
            style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              color: '#1a3c6e',
              marginBottom: '4px',
            }}
          >
            DaniCare Admin
          </h1>
          <p style={{ color: '#5e6883', fontSize: '0.9rem' }}>
            Sign in to manage your dashboard
          </p>
        </div>

        {error && (
          <div
            style={{
              background: '#fef2f2',
              color: '#dc2626',
              padding: '12px 16px',
              borderRadius: '8px',
              fontSize: '0.9rem',
              marginBottom: '16px',
            }}
          >
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '16px' }}>
            <label
              style={{
                display: 'block',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: '#333132',
                marginBottom: '6px',
              }}
            >
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '12px 14px',
                borderRadius: '8px',
                border: '1px solid #e2e8f0',
                fontSize: '0.95rem',
                outline: 'none',
                transition: 'border-color 0.2s',
              }}
              placeholder="Enter your email"
            />
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label
              style={{
                display: 'block',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: '#333132',
                marginBottom: '6px',
              }}
            >
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '12px 14px',
                borderRadius: '8px',
                border: '1px solid #e2e8f0',
                fontSize: '0.95rem',
                outline: 'none',
                transition: 'border-color 0.2s',
              }}
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '14px',
              borderRadius: '8px',
              border: 'none',
              background: loading ? '#93c5fd' : '#1a3c6e',
              color: '#fff',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: loading ? 'not-allowed' : 'pointer',
              transition: 'background 0.2s',
            }}
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <p
          style={{
            textAlign: 'center',
            marginTop: '20px',
            fontSize: '0.8rem',
            color: '#94a3b8',
          }}
        >
          DaniCare Psychiatry Admin Portal
        </p>
      </div>
    </div>
  );
}
