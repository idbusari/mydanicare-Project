'use client';

import { useState, useMemo } from 'react';
import DashboardCharts from './DashboardCharts';
import { Users, Target, Eye, TrendingUp, Rocket, FileText } from 'lucide-react';

interface View {
  page: string;
  device: string | null;
  source: string | null;
  createdAt: string;
}

interface Lead {
  source: string;
  status: string;
  createdAt: string;
}

interface DashboardContentProps {
  views: View[];
  leads: Lead[];
  totalPosts: number;
}

const RANGES = [
  { label: 'Today', days: 1 },
  { label: '7 Days', days: 7 },
  { label: '30 Days', days: 30 },
  { label: '90 Days', days: 90 },
  { label: 'All Time', days: 0 },
];

function formatNumber(n: number) {
  if (n >= 1000) return (n / 1000).toFixed(1) + 'k';
  return String(n);
}

export default function DashboardContent({ views, leads, totalPosts }: DashboardContentProps) {
  const [rangeDays, setRangeDays] = useState(30);

  const cutoff = useMemo(() => {
    if (rangeDays === 0) return null;
    const d = new Date();
    d.setDate(d.getDate() - rangeDays);
    return d;
  }, [rangeDays]);

  const filteredViews = useMemo(() => {
    if (!cutoff) return views;
    return views.filter((v) => new Date(v.createdAt) >= cutoff);
  }, [views, cutoff]);

  const filteredLeads = useMemo(() => {
    if (!cutoff) return leads;
    return leads.filter((l) => new Date(l.createdAt) >= cutoff);
  }, [leads, cutoff]);

  const totalViews = filteredViews.length;
  const totalLeads = filteredLeads.length;
  const convertedCount = filteredLeads.filter((l) => l.status === 'converted').length;
  const contactedCount = filteredLeads.filter((l) => l.status === 'contacted').length;
  const conversionRate = totalLeads > 0 ? Math.round((convertedCount / totalLeads) * 100) : 0;
  const contactRate = totalLeads > 0 ? Math.round((contactedCount / totalLeads) * 100) : 0;
  const avgDailyViews = totalViews > 0 && rangeDays > 0 ? Math.round(totalViews / rangeDays) : 0;

  const sourceCounts: Record<string, number> = {};
  filteredViews.forEach((v) => {
    const s = v.source || 'direct';
    sourceCounts[s] = (sourceCounts[s] || 0) + 1;
  });
  const topSource = Object.entries(sourceCounts)
    .sort((a, b) => b[1] - a[1])[0];

  const kpiCards = [
    {
      label: 'Total Leads',
      value: totalLeads,
      sub: `${convertedCount} converted`,
      icon: Users,
    },
    {
      label: 'Conversion Rate',
      value: `${conversionRate}%`,
      sub: `${contactRate}% contacted`,
      icon: Target,
    },
    {
      label: 'Page Views',
      value: formatNumber(totalViews),
      sub: rangeDays > 0 ? `${rangeDays} day total` : 'All time',
      icon: Eye,
    },
    {
      label: 'Daily Views',
      value: avgDailyViews,
      sub: 'per day average',
      icon: TrendingUp,
    },
    {
      label: 'Top Source',
      value: topSource ? topSource[0].charAt(0).toUpperCase() + topSource[0].slice(1) : 'Direct',
      sub: 'drives most visits',
      icon: Rocket,
    },
    {
      label: 'Blog Posts',
      value: totalPosts,
      sub: 'published on site',
      icon: FileText,
    },
  ];

  return (
    <div>
      {/* FILTER BAR */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', flexWrap: 'wrap' }}>
        {RANGES.map((r) => (
          <button
            key={r.label}
            onClick={() => setRangeDays(r.days)}
            style={{
              padding: '8px 18px',
              borderRadius: '8px',
              border: '1px solid #e2e8f0',
              background: rangeDays === r.days ? '#1a3c6e' : '#fff',
              color: rangeDays === r.days ? '#fff' : '#1a3c6e',
              fontWeight: 600,
              fontSize: '0.85rem',
              cursor: 'pointer',
            }}
          >
            {r.label}
          </button>
        ))}
      </div>

      {/* KPI ROW */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px', marginBottom: '32px' }}>
        {kpiCards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.label}
              style={{
                background: '#fff',
                borderRadius: '20px',
                padding: '24px',
                boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 500, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  {card.label}
                </span>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '10px',
                    background: '#f8fafc',
                    color: '#94a3b8',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Icon size={16} strokeWidth={1.5} />
                </div>
              </div>
              <div>
                <span style={{ fontSize: '1.75rem', fontWeight: 700, color: '#0f172a', lineHeight: 1.2, letterSpacing: '-0.5px' }}>
                  {card.value}
                </span>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '6px', fontWeight: 400 }}>
                  {card.sub}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* CONVERSION FUNNEL INSIGHT */}
      <div style={{ background: '#fff', borderRadius: '12px', padding: '20px 24px', marginBottom: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.08)', display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
        <div style={{ fontSize: '1.8rem' }}>🎯</div>
        <div style={{ flex: 1 }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#1a3c6e', margin: '0 0 4px' }}>
            Conversion Funnel Insight
          </h3>
          <p style={{ color: '#5e6883', margin: 0, fontSize: '0.9rem' }}>
            <strong>{totalLeads}</strong> total leads → <strong>{contactedCount}</strong> contacted ({contactRate}%) → <strong>{convertedCount}</strong> converted ({conversionRate}%).
            {' '}
            {conversionRate >= 10
              ? 'Your conversion rate is strong — scaling ad spend could yield significant ROI.'
              : conversionRate >= 5
              ? 'Good traction. Consider retargeting campaigns to improve conversion.'
              : 'Focus on nurturing leads. Email sequences and follow-up calls can boost conversions.'}
          </p>
        </div>
      </div>

      {/* CHARTS */}
      <DashboardCharts views={filteredViews} leads={filteredLeads} />
    </div>
  );
}
