'use client';

import { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

interface PageView {
  page: string;
  device: string | null;
  source: string | null;
  city: string | null;
  createdAt: string;
}

const COLORS = ['#1a3c6e', '#FFCC00', '#e66926', '#5e6883', '#059669', '#7c3aed'];

export default function AnalyticsPage() {
  const [views, setViews] = useState<PageView[]>([]);
  const [range, setRange] = useState('7');

  useEffect(() => {
    fetch('/api/analytics').then((r) => r.json()).then(setViews);
  }, []);

  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - parseInt(range));
  const filtered = views.filter((v) => new Date(v.createdAt) >= cutoff);

  const pageCounts: Record<string, number> = {};
  filtered.forEach((v) => { pageCounts[v.page] = (pageCounts[v.page] || 0) + 1; });
  const pageData = Object.entries(pageCounts).map(([name, value]) => ({ name, value })).sort((a, b) => b.value - a.value).slice(0, 10);

  const deviceCounts: Record<string, number> = {};
  filtered.forEach((v) => { const d = v.device || 'unknown'; deviceCounts[d] = (deviceCounts[d] || 0) + 1; });
  const deviceData = Object.entries(deviceCounts).map(([name, value]) => ({ name, value }));

  const sourceCounts: Record<string, number> = {};
  filtered.forEach((v) => { const s = v.source || 'direct'; sourceCounts[s] = (sourceCounts[s] || 0) + 1; });
  const sourceData = Object.entries(sourceCounts).map(([name, value]) => ({ name, value }));

  const cityCounts: Record<string, number> = {};
  filtered.forEach((v) => { const c = v.city || 'Unknown'; cityCounts[c] = (cityCounts[c] || 0) + 1; });
  const cityData = Object.entries(cityCounts).map(([name, value]) => ({ name, value })).sort((a, b) => b.value - a.value).slice(0, 10);

  return (
    <div>
      <h1 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '24px', color: '#1a3c6e' }}>Analytics</h1>

      <div style={{ marginBottom: '24px' }}>
        <label style={{ fontSize: '0.85rem', fontWeight: 600, marginRight: '8px' }}>Time Range:</label>
        <select value={range} onChange={(e) => setRange(e.target.value)} style={{ padding: '8px 12px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
          <option value="7">Last 7 days</option>
          <option value="30">Last 30 days</option>
          <option value="90">Last 90 days</option>
        </select>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '24px' }}>
        <div style={{ background: '#fff', borderRadius: '12px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '16px', color: '#1a3c6e' }}>Top Pages</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={pageData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#1a3c6e" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div style={{ background: '#fff', borderRadius: '12px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '16px', color: '#1a3c6e' }}>Device Types</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={deviceData} cx="50%" cy="50%" outerRadius={80} dataKey="value" label>
                {deviceData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
        <div style={{ background: '#fff', borderRadius: '12px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '16px', color: '#1a3c6e' }}>Traffic Sources</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={sourceData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" width={100} tick={{ fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="value" fill="#FFCC00" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div style={{ background: '#fff', borderRadius: '12px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '16px', color: '#1a3c6e' }}>Visitor Cities</h3>
          {cityData.length === 0 ? (
            <div style={{ height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8', fontSize: '0.9rem' }}>
              No city data yet.
            </div>
          ) : (
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={cityData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" width={110} tick={{ fontSize: 12 }} />
                <Tooltip />
                <Bar dataKey="value" fill="#7c3aed" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>
    </div>
  );
}
