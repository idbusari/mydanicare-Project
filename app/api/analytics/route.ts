import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

function getDeviceType(ua: string): string {
  if (/mobile|android|iphone|ipad|ipod/i.test(ua)) return 'mobile';
  if (/tablet|ipad/i.test(ua)) return 'tablet';
  return 'desktop';
}

function getSource(referrer: string, ua: string): string {
  if (referrer.includes('facebook.com')) return 'facebook';
  if (referrer.includes('instagram.com')) return 'instagram';
  if (referrer.includes('whatsapp')) return 'whatsapp';
  if (referrer.includes('google.com')) return 'seo';
  if (referrer.includes('bing.com')) return 'seo';
  if (referrer) return 'referrer';
  return 'direct';
}

export async function GET() {
  const views = await prisma.pageView.findMany({ orderBy: { createdAt: 'desc' }, take: 1000 });
  return NextResponse.json(views);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const ua = req.headers.get('user-agent') || '';
  const referrer = req.headers.get('referer') || '';
  const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';

  const view = await prisma.pageView.create({
    data: {
      page: body.page || '/',
      ip: String(ip).split(',')[0].trim(),
      userAgent: ua,
      referrer,
      device: getDeviceType(ua),
      source: getSource(referrer, ua),
    },
  });

  return NextResponse.json(view);
}
