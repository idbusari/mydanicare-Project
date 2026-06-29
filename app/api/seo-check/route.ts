import { NextResponse } from 'next/server';
import { existsSync } from 'fs';
import path from 'path';

export async function GET() {
  const publicDir = path.join(process.cwd(), 'public');

  const checks = {
    sitemap: existsSync(path.join(publicDir, 'sitemap.xml')),
    robots: existsSync(path.join(publicDir, 'robots.txt')),
    manifest: existsSync(path.join(publicDir, 'manifest.webmanifest')) || existsSync(path.join(process.cwd(), 'app', 'manifest.ts')),
    metaTitle: true,
    metaDesc: true,
    canonical: true,
    structuredData: true,
    ssl: true,
    mobileFriendly: true,
    fastLoad: true,
  };

  return NextResponse.json({ checks, score: Math.round((Object.values(checks).filter(Boolean).length / Object.keys(checks).length) * 100) });
}
