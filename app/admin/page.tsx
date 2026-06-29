import { prisma } from '@/lib/prisma';
import DashboardContent from '@/components/Admin/DashboardContent';

export default async function AdminDashboard() {
  const [totalPosts, views, leads] = await Promise.all([
    prisma.blogPost.count({ where: { published: true } }),
    prisma.pageView.findMany({ orderBy: { createdAt: 'desc' }, take: 5000 }),
    prisma.lead.findMany({ orderBy: { createdAt: 'desc' }, take: 2000 }),
  ]);

  const viewsData = views.map((v) => ({
    page: v.page,
    device: v.device,
    source: v.source,
    city: v.city,
    createdAt: v.createdAt.toISOString(),
  }));

  const leadsData = leads.map((l) => ({
    source: l.source,
    status: l.status,
    createdAt: l.createdAt.toISOString(),
  }));

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <h1 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#1a3c6e', margin: 0 }}>
            Marketing Dashboard
          </h1>
          <p style={{ color: '#5e6883', margin: '4px 0 0', fontSize: '0.9rem' }}>
            Real-time insights into your website performance, lead generation, and content marketing ROI.
          </p>
        </div>
      </div>
      <DashboardContent views={viewsData} leads={leadsData} totalPosts={totalPosts} />
    </div>
  );
}
