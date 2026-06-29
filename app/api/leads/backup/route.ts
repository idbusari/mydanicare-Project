import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session || (session.user as { role?: string }).role !== 'admin') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
  }

  const leads = await prisma.lead.findMany({ orderBy: { createdAt: 'desc' } });

  const headers = ['ID', 'Source', 'First Name', 'Last Name', 'Email', 'Phone', 'State', 'DOB', 'Insurance', 'Reason', 'Message', 'Notes', 'Status', 'Created At'];

  const rows = leads.map((l) => [
    l.id,
    l.source,
    l.firstName || '',
    l.lastName || '',
    l.email || '',
    l.phone || '',
    l.state || '',
    l.dob || '',
    l.insurance || '',
    l.reason || '',
    l.message || '',
    l.notes || '',
    l.status,
    l.createdAt.toISOString(),
  ]);

  const csv = [
    headers.join(','),
    ...rows.map((row) =>
      row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(',')
    ),
  ].join('\n');

  return new NextResponse(csv, {
    headers: {
      'Content-Type': 'text/csv',
      'Content-Disposition': `attachment; filename="leads-backup-${new Date().toISOString().split('T')[0]}.csv"`,
    },
  });
}
