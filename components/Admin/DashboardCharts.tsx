'use client';

import { useMemo } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, AreaChart, Area, Legend,
} from 'recharts';

interface DashboardChartsProps {
  views: Array<{ page: string; device: string | null; source: string | null; createdAt: string }>;
  leads: Array<{ source: string; status: string; createdAt: string }>;
}

const COLORS = ['#1a3c6e', '#FFCC00', '#e66926', '#5e6883', '#059669', '#7c3aed', '#f59e0b'];

export default function DashboardCharts({ views, leads }: DashboardChartsProps) {
  // --- TRAFFIC SOURCES PIE ---
  const sourceData = useMemo(() => {
    const counts: Record<string, number> = {};
    views.forEach((v) => {
      const s = v.source || 'direct';
      counts[s] = (counts[s] || 0) + 1;
    });
    return Object.entries(counts)
      .map(([name, value]) => ({ name: name.charAt(0).toUpperCase() + name.slice(1), value }))
      .sort((a, b) => b.value - a.value);
  }, [views]);

  // --- LEAD SOURCES BAR ---
  const leadSourceData = useMemo(() => {
    const counts: Record<string, number> = {};
    leads.forEach((l) => {
      counts[l.source] = (counts[l.source] || 0) + 1;
    });
    const labelMap: Record<string, string> = {
      register: 'Registration',
      'adhd-waitlist': 'ADHD Waitlist',
      referral: 'Refer Patient',
      imm: 'Immigration Consult',
      partner: 'Partner With Us',
      contact: 'Contact Form',
    };
    return Object.entries(counts)
      .map(([name, value]) => ({ name: labelMap[name] || name, value }))
      .sort((a, b) => b.value - a.value);
  }, [leads]);

  // --- VIEWS OVER TIME (last 30 days) ---
  const viewsTrendData = useMemo(() => {
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - 30);
    const days: Record<string, number> = {};
    for (let i = 0; i < 30; i++) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      days[d.toISOString().split('T')[0]] = 0;
    }
    views.forEach((v) => {
      const date = new Date(v.createdAt).toISOString().split('T')[0];
      if (days[date] !== undefined) days[date] = (days[date] || 0) + 1;
    });
    return Object.entries(days)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([date, value]) => ({
        date: new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        value,
      }));
  }, [views]);

  // --- LEADS OVER TIME (last 30 days) ---
  const leadsTrendData = useMemo(() => {
    const days: Record<string, number> = {};
    for (let i = 0; i < 30; i++) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      days[d.toISOString().split('T')[0]] = 0;
    }
    leads.forEach((l) => {
      const date = new Date(l.createdAt).toISOString().split('T')[0];
      if (days[date] !== undefined) days[date] = (days[date] || 0) + 1;
    });
    return Object.entries(days)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([date, value]) => ({
        date: new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        value,
      }));
  }, [leads]);

  // --- FUNNEL DATA ---
  const funnelData = useMemo(() => {
    const totalLeads = leads.length;
    const contacted = leads.filter((l) => l.status === 'contacted').length;
    const converted = leads.filter((l) => l.status === 'converted').length;
    return [
      { name: 'Total Leads', value: totalLeads, fill: '#1a3c6e' },
      { name: 'Contacted', value: contacted, fill: '#FFCC00' },
      { name: 'Converted', value: converted, fill: '#059669' },
    ];
  }, [leads]);

  // --- TOP PAGES ---
  const topPagesData = useMemo(() => {
    const counts: Record<string, number> = {};
    views.forEach((v) => {
      counts[v.page] = (counts[v.page] || 0) + 1;
    });
    return Object.entries(counts)
      .map(([name, value]) => ({ name, value }))
      .sort((a, b) => b.value - a.value)
      .slice(0, 8);
  }, [views]);

  // --- DEVICE BREAKDOWN ---
  const deviceData = useMemo(() => {
    const counts: Record<string, number> = {};
    views.forEach((v) => {
      const d = v.device || 'unknown';
      counts[d] = (counts[d] || 0) + 1;
    });
    return Object.entries(counts).map(([name, value]) => ({ name: name.charAt(0).toUpperCase() + name.slice(1), value }));
  }, [views]);

  return (
    <div>
      {/* ROW 1: Funnel + Traffic Sources */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', marginBottom: '24px' }}>
        <ChartCard title="Lead Conversion Funnel">
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={funnelData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis type="number" tick={{ fontSize: 12 }} />
              <YAxis dataKey="name" type="category" width={90} tick={{ fontSize: 12 }} />
              <Tooltip
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
              />
              <Bar dataKey="value" radius={[0, 8, 8, 0]} barSize={32}>
                {funnelData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Traffic Sources (Where Visitors Come From)">
          {sourceData.length === 0 ? (
            <div style={{ height: 260, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8', fontSize: '0.9rem' }}>
              No traffic data yet.
            </div>
          ) : (
            <ResponsiveContainer width="100%" height={260}>
              <PieChart>
                <Pie
                  data={sourceData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={4}
                  dataKey="value"
                  stroke="none"
                >
                  {sourceData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                />
                <Legend verticalAlign="bottom" height={36} iconType="circle" />
              </PieChart>
            </ResponsiveContainer>
          )}
        </ChartCard>
      </div>

      {/* ROW 2: Views & Leads Trend */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', marginBottom: '24px' }}>
        <ChartCard title="Page Views Trend (Last 30 Days)">
          <ResponsiveContainer width="100%" height={260}>
            <AreaChart data={viewsTrendData}>
              <defs>
                <linearGradient id="viewsGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#1a3c6e" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#1a3c6e" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="date" tick={{ fontSize: 11 }} interval={4} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
              />
              <Area type="monotone" dataKey="value" stroke="#1a3c6e" strokeWidth={2} fill="url(#viewsGrad)" />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Leads Trend (Last 30 Days)">
          <ResponsiveContainer width="100%" height={260}>
            <AreaChart data={leadsTrendData}>
              <defs>
                <linearGradient id="leadsGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#059669" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#059669" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="date" tick={{ fontSize: 11 }} interval={4} />
              <YAxis tick={{ fontSize: 12 }} allowDecimals={false} />
              <Tooltip
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
              />
              <Area type="monotone" dataKey="value" stroke="#059669" strokeWidth={2} fill="url(#leadsGrad)" />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* ROW 3: Top Pages + Lead Sources + Device */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '24px' }}>
        <ChartCard title="Top Performing Pages">
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={topPagesData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis type="number" tick={{ fontSize: 12 }} />
              <YAxis dataKey="name" type="category" width={120} tick={{ fontSize: 11 }} />
              <Tooltip
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
              />
              <Bar dataKey="value" fill="#1a3c6e" radius={[0, 6, 6, 0]} barSize={20} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Lead Sources (Which Forms Convert)">
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={leadSourceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="name" tick={{ fontSize: 11 }} angle={-25} textAnchor="end" height={60} />
              <YAxis tick={{ fontSize: 12 }} allowDecimals={false} />
              <Tooltip
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
              />
              <Bar dataKey="value" fill="#e66926" radius={[6, 6, 0, 0]} barSize={32} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* ROW 4: Device Breakdown */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
        <ChartCard title="Device Breakdown">
          <ResponsiveContainer width="100%" height={240}>
            <PieChart>
              <Pie
                data={deviceData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                paddingAngle={4}
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                stroke="none"
              >
                {deviceData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </div>
  );
}

function ChartCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ background: '#fff', borderRadius: '12px', padding: '20px', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}>
      <h3 style={{ fontSize: '0.95rem', fontWeight: 600, marginBottom: '16px', color: '#1a3c6e' }}>{title}</h3>
      {children}
    </div>
  );
}
