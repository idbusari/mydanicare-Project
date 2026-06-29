'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  createdAt: string;
}

const ROLE_LABELS: Record<string, string> = {
  admin: 'Admin',
  editor: 'Editor',
  business: 'Business',
};

const ROLE_COLORS: Record<string, string> = {
  admin: '#dc2626',
  editor: '#e66926',
  business: '#1a3c6e',
};

export default function UsersPage() {
  const { data: session } = useSession();
  const myRole = (session?.user as { role?: string })?.role || '';
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [msg, setMsg] = useState('');
  const [error, setError] = useState('');

  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'business' });
  const [editing, setEditing] = useState<User | null>(null);
  const [editRole, setEditRole] = useState('');

  const load = () => {
    fetch('/api/users')
      .then((r) => r.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load users');
        setLoading(false);
      });
  };

  useEffect(() => {
    load();
  }, []);

  const invite = async (e: React.FormEvent) => {
    e.preventDefault();
    setMsg('');
    setError('');
    try {
      const res = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to create user');
      setMsg(`User "${data.name}" invited successfully.`);
      setForm({ name: '', email: '', password: '', role: 'business' });
      load();
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to create user';
      setError(message);
    }
  };

  const updateRole = async (id: string) => {
    setMsg('');
    setError('');
    try {
      const res = await fetch('/api/users', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, role: editRole }),
      });
      if (!res.ok) throw new Error('Failed to update role');
      setMsg('Role updated successfully.');
      setEditing(null);
      load();
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to update role';
      setError(message);
    }
  };

  const remove = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this user?')) return;
    setMsg('');
    setError('');
    try {
      const res = await fetch(`/api/users?id=${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete user');
      setMsg('User deleted.');
      load();
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to delete user';
      setError(message);
    }
  };

  return (
    <div>
      <h1 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '24px', color: '#1a3c6e' }}>
        User Management
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

      {/* Invite Form */}
      <div style={{ background: '#fff', borderRadius: '12px', padding: '24px', marginBottom: '32px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        <h2 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '16px', color: '#1a3c6e' }}>Invite New User</h2>
        <form onSubmit={invite}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '16px' }}>
            <div>
              <label style={{ fontSize: '0.85rem', fontWeight: 600, display: 'block', marginBottom: '6px' }}>Full Name *</label>
              <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.95rem' }} />
            </div>
            <div>
              <label style={{ fontSize: '0.85rem', fontWeight: 600, display: 'block', marginBottom: '6px' }}>Email *</label>
              <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.95rem' }} />
            </div>
            <div>
              <label style={{ fontSize: '0.85rem', fontWeight: 600, display: 'block', marginBottom: '6px' }}>Password *</label>
              <input type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} required minLength={6} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.95rem' }} />
            </div>
            <div>
              <label style={{ fontSize: '0.85rem', fontWeight: 600, display: 'block', marginBottom: '6px' }}>Role</label>
              <select value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.95rem' }}>
                <option value="admin">Admin — Full Access</option>
                <option value="editor">Editor — Blog, Settings, SEO</option>
                <option value="business">Business — Dashboard, Leads, SEO</option>
              </select>
            </div>
          </div>
          <button type="submit" style={{ padding: '10px 24px', borderRadius: '8px', border: 'none', background: '#1a3c6e', color: '#fff', fontWeight: 600, cursor: 'pointer' }}>
            + Invite User
          </button>
        </form>
      </div>

      {/* Users Table */}
      <div style={{ background: '#fff', borderRadius: '12px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
        <h2 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '16px', color: '#1a3c6e' }}>All Users</h2>
        {loading ? (
          <p style={{ color: '#5e6883' }}>Loading users...</p>
        ) : users.length === 0 ? (
          <p style={{ color: '#5e6883' }}>No users found.</p>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ background: '#f1f5f9', textAlign: 'left' }}>
                <th style={{ padding: '14px 16px', fontWeight: 600 }}>Name</th>
                <th style={{ padding: '14px 16px', fontWeight: 600 }}>Email</th>
                <th style={{ padding: '14px 16px', fontWeight: 600 }}>Role</th>
                <th style={{ padding: '14px 16px', fontWeight: 600 }}>Joined</th>
                <th style={{ padding: '14px 16px', fontWeight: 600 }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '12px 16px', fontWeight: 500 }}>{user.name}</td>
                  <td style={{ padding: '12px 16px', color: '#5e6883' }}>{user.email}</td>
                  <td style={{ padding: '12px 16px' }}>
                    {editing?.id === user.id ? (
                      <select value={editRole} onChange={(e) => setEditRole(e.target.value)} style={{ padding: '6px 10px', borderRadius: '6px', border: '1px solid #e2e8f0', fontSize: '0.85rem' }}>
                        <option value="admin">Admin</option>
                        <option value="editor">Editor</option>
                        <option value="business">Business</option>
                      </select>
                    ) : (
                      <span style={{
                        padding: '4px 12px',
                        borderRadius: '12px',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        background: ROLE_COLORS[user.role] + '15',
                        color: ROLE_COLORS[user.role],
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                      }}>
                        {ROLE_LABELS[user.role] || user.role}
                      </span>
                    )}
                  </td>
                  <td style={{ padding: '12px 16px', color: '#5e6883', fontSize: '0.85rem' }}>
                    {new Date(user.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </td>
                  <td style={{ padding: '12px 16px', display: 'flex', gap: '8px' }}>
                    {editing?.id === user.id ? (
                      <>
                        <button onClick={() => updateRole(user.id)} style={{ padding: '6px 14px', borderRadius: '6px', border: 'none', background: '#059669', color: '#fff', fontSize: '0.85rem', cursor: 'pointer' }}>Save</button>
                        <button onClick={() => setEditing(null)} style={{ padding: '6px 14px', borderRadius: '6px', border: '1px solid #e2e8f0', background: '#fff', color: '#5e6883', fontSize: '0.85rem', cursor: 'pointer' }}>Cancel</button>
                      </>
                    ) : (
                      <>
                        <button onClick={() => { setEditing(user); setEditRole(user.role); }} style={{ padding: '6px 14px', borderRadius: '6px', border: 'none', background: '#1a3c6e', color: '#fff', fontSize: '0.85rem', cursor: 'pointer' }}>Edit Role</button>
                        <button onClick={() => remove(user.id)} style={{ padding: '6px 14px', borderRadius: '6px', border: 'none', background: '#dc2626', color: '#fff', fontSize: '0.85rem', cursor: 'pointer' }}>Delete</button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
