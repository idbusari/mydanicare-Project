'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { Eye, Trash2, Download } from 'lucide-react';

interface Lead {
  id: string;
  source: string;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  phone: string | null;
  state: string | null;
  dob: string | null;
  insurance: string | null;
  reason: string | null;
  message: string | null;
  notes: string | null;
  createdAt: string;
  status: string;
}

export default function LeadsPage() {
  const { data: session } = useSession();
  const isAdmin = (session?.user as { role?: string })?.role === 'admin';

  const [leads, setLeads] = useState<Lead[]>([]);
  const [filter, setFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [loading, setLoading] = useState(true);
  const [viewing, setViewing] = useState<Lead | null>(null);

  useEffect(() => {
    loadLeads();
  }, []);

  const loadLeads = () => {
    setLoading(true);
    fetch('/api/leads')
      .then((r) => r.json())
      .then((data) => {
        setLeads(data);
        setLoading(false);
      });
  };

  const filtered = leads.filter((l) => {
    const matchSource = filter === 'all' || l.source === filter;
    const matchStatus = statusFilter === 'all' || l.status === statusFilter;
    return matchSource && matchStatus;
  });

  const sources = ['all', 'register', 'adhd-waitlist', 'referral', 'imm', 'partner', 'contact'];
  const statuses = ['all', 'new', 'contacted', 'converted', 'archived'];

  const updateStatus = async (id: string, status: string) => {
    await fetch(`/api/leads/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    });
    setLeads((prev) => prev.map((l) => (l.id === id ? { ...l, status } : l)));
  };

  const remove = async (id: string) => {
    if (!window.confirm('Delete this lead permanently?')) return;
    const res = await fetch(`/api/leads/${id}`, { method: 'DELETE' });
    if (res.ok) loadLeads();
  };

  if (loading) return <p>Loading leads...</p>;

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#1a3c6e', margin: 0 }}>
          Leads
        </h1>
        {isAdmin && (
          <a
            href="/api/leads/backup"
            download
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 20px', borderRadius: '8px', border: 'none', background: '#059669', color: '#fff', fontWeight: 600, textDecoration: 'none', fontSize: '0.9rem', cursor: 'pointer' }}
          >
            <Download size={18} />
            Backup CSV
          </a>
        )}
      </div>

      <div style={{ display: 'flex', gap: '16px', marginBottom: '24px', flexWrap: 'wrap' }}>
        <div>
          <label style={{ fontSize: '0.85rem', fontWeight: 600, color: '#5e6883', display: 'block', marginBottom: '6px' }}>Form Source</label>
          <select value={filter} onChange={(e) => setFilter(e.target.value)} style={{ padding: '10px 14px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.95rem' }}>
            {sources.map((s) => (
              <option key={s} value={s}>{s === 'all' ? 'All Sources' : s}</option>
            ))}
          </select>
        </div>
        <div>
          <label style={{ fontSize: '0.85rem', fontWeight: 600, color: '#5e6883', display: 'block', marginBottom: '6px' }}>Status</label>
          <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} style={{ padding: '10px 14px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.95rem' }}>
            {statuses.map((s) => (
              <option key={s} value={s}>{s === 'all' ? 'All Statuses' : s}</option>
            ))}
          </select>
        </div>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'flex-end' }}>
          <span style={{ fontSize: '0.9rem', color: '#5e6883', fontWeight: 500 }}>
            {filtered.length} lead{filtered.length !== 1 ? 's' : ''}
          </span>
        </div>
      </div>

      <div style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
          <thead>
            <tr style={{ background: '#f1f5f9', textAlign: 'left' }}>
              <th style={{ padding: '14px 16px', fontWeight: 600, color: '#1a3c6e' }}>Name</th>
              <th style={{ padding: '14px 16px', fontWeight: 600, color: '#1a3c6e' }}>Email</th>
              <th style={{ padding: '14px 16px', fontWeight: 600, color: '#1a3c6e' }}>Phone</th>
              <th style={{ padding: '14px 16px', fontWeight: 600, color: '#1a3c6e' }}>Source</th>
              <th style={{ padding: '14px 16px', fontWeight: 600, color: '#1a3c6e' }}>Status</th>
              <th style={{ padding: '14px 16px', fontWeight: 600, color: '#1a3c6e' }}>Date</th>
              <th style={{ padding: '14px 16px', fontWeight: 600, color: '#1a3c6e' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((lead) => (
              <tr key={lead.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                <td style={{ padding: '12px 16px' }}>{lead.firstName} {lead.lastName}</td>
                <td style={{ padding: '12px 16px' }}>{lead.email || '-'}</td>
                <td style={{ padding: '12px 16px' }}>{lead.phone || '-'}</td>
                <td style={{ padding: '12px 16px' }}>
                  <span style={{ background: '#e0f2fe', color: '#0369a1', padding: '4px 10px', borderRadius: '12px', fontSize: '0.8rem', fontWeight: 500 }}>
                    {lead.source}
                  </span>
                </td>
                <td style={{ padding: '12px 16px' }}>
                  <select
                    value={lead.status}
                    onChange={(e) => updateStatus(lead.id, e.target.value)}
                    style={{ padding: '6px 10px', borderRadius: '6px', border: '1px solid #e2e8f0', fontSize: '0.85rem' }}
                  >
                    {statuses.filter((s) => s !== 'all').map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </td>
                <td style={{ padding: '12px 16px', color: '#5e6883', fontSize: '0.85rem' }}>
                  {new Date(lead.createdAt).toLocaleDateString()}
                </td>
                <td style={{ padding: '12px 16px' }}>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <button
                      onClick={() => setViewing(lead)}
                      style={{ padding: '6px 10px', borderRadius: '6px', border: 'none', background: '#1a3c6e', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
                      title="View"
                    >
                      <Eye size={14} />
                    </button>
                    {isAdmin && (
                      <button
                        onClick={() => remove(lead.id)}
                        style={{ padding: '6px 10px', borderRadius: '6px', border: 'none', background: '#dc2626', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
                        title="Delete"
                      >
                        <Trash2 size={14} />
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* View Modal */}
      {viewing && (
        <div
          onClick={() => setViewing(null)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.55)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ background: '#fff', borderRadius: '12px', width: '100%', maxWidth: '500px', maxHeight: '85vh', overflowY: 'auto', boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}
          >
            <div style={{ padding: '20px 24px', borderBottom: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 600, color: '#1a3c6e' }}>Lead Details</h3>
              <button onClick={() => setViewing(null)} style={{ background: 'none', border: 'none', fontSize: '1.4rem', cursor: 'pointer', color: '#5e6883' }}>
                ×
              </button>
            </div>
            <div style={{ padding: '24px' }}>
              {[
                { label: 'Name', value: `${viewing.firstName || ''} ${viewing.lastName || ''}`.trim() || '—' },
                { label: 'Email', value: viewing.email || '—' },
                { label: 'Phone', value: viewing.phone || '—' },
                { label: 'State', value: viewing.state || '—' },
                { label: 'Date of Birth', value: viewing.dob || '—' },
                { label: 'Insurance', value: viewing.insurance || '—' },
                { label: 'Reason', value: viewing.reason || '—' },
                { label: 'Message', value: viewing.message || '—' },
                { label: 'Source', value: viewing.source },
                { label: 'Status', value: viewing.status },
                { label: 'Submitted', value: new Date(viewing.createdAt).toLocaleString() },
              ].map((field) => (
                <div key={field.label} style={{ marginBottom: '14px' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#5e6883', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>{field.label}</div>
                  <div style={{ fontSize: '0.95rem', color: '#111', fontWeight: 500, lineHeight: 1.4 }}>{field.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
