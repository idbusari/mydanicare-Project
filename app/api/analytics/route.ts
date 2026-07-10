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

async function getCityFromIP(ip: string, req: NextRequest): Promise<string | null> {
  // 1. Check platform-specific headers (Vercel, Cloudflare, etc.)
  const vercelCity = req.headers.get('x-vercel-ip-city');
  if (vercelCity) return vercelCity;

  const cfCity = req.headers.get('cf-ipcity');
  if (cfCity) return cfCity;

  // 2. Skip private/local IPs and unusable values
  if (
    !ip ||
    ip === 'unknown' ||
    ip === 'null' ||
    ip.startsWith('127.') ||
    ip.startsWith('10.') ||
    ip.startsWith('192.168.') ||
    ip.startsWith('172.')
  ) {
    return null;
  }

  // 3. Best-effort free IP geolocation (ipapi.co — 45 requests/min free)
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 1500);
    const res = await fetch(`https://ipapi.co/${ip}/json/`, { signal: controller.signal });
    clearTimeout(timeout);
    if (!res.ok) return null;
    const data = await res.json() as { city?: string; error?: boolean };
    if (data.error) return null;
    return data.city || null;
  } catch {
    return null;
  }
}

export async function GET() {
  try {
    const views = await prisma.pageView.findMany({ orderBy: { createdAt: 'desc' }, take: 1000 });
    return NextResponse.json(views);
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Failed to load analytics';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const ua = req.headers.get('user-agent') || '';
    const referrer = req.headers.get('referer') || '';
    const forwarded = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip');
    const cleanIp = forwarded ? String(forwarded).split(',')[0].trim() : 'unknown';

    const city = await getCityFromIP(cleanIp, req);

    const view = await prisma.pageView.create({
      data: {
        page: body.page || '/',
        ip: cleanIp,
        userAgent: ua,
        referrer,
        device: getDeviceType(ua),
        source: getSource(referrer, ua),
        city,
      },
    });

    return NextResponse.json(view);
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Failed to record view';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
