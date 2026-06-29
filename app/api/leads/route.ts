import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const source = searchParams.get('source');
  const status = searchParams.get('status');

  const where: Record<string, string> = {};
  if (source) where.source = source;
  if (status) where.status = status;

  const leads = await prisma.lead.findMany({
    where,
    orderBy: { createdAt: 'desc' },
  });

  return NextResponse.json(leads);
}
