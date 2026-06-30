import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';

export async function POST(req: NextRequest) {
  const count = await prisma.user.count();

  if (count > 0) {
    return NextResponse.json(
      { error: 'Admin user already exists. This setup route can only be used once.' },
      { status: 400 }
    );
  }

  const body = await req.json().catch(() => ({}));

  const email = body.email || process.env.ADMIN_EMAIL || 'admin@mydanicare.com';
  const name = body.name || 'Admin';
  let password = body.password;

  if (!password && process.env.ADMIN_PASSWORD) {
    // If ADMIN_PASSWORD is already a bcrypt hash, use it directly
    const looksLikeHash = process.env.ADMIN_PASSWORD.startsWith('$2');
    if (looksLikeHash) {
      const user = await prisma.user.create({
        data: {
          name,
          email,
          password: process.env.ADMIN_PASSWORD,
          role: 'admin',
        },
      });
      return NextResponse.json({
        message: 'Admin created successfully using hashed password from env.',
        email: user.email,
      });
    }
    password = process.env.ADMIN_PASSWORD;
  }

  if (!password) {
    return NextResponse.json(
      { error: 'Password is required. Provide it in the request body or set ADMIN_PASSWORD in .env.local' },
      { status: 400 }
    );
  }

  const hashed = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashed,
      role: 'admin',
    },
  });

  return NextResponse.json({
    message: 'Admin created successfully.',
    email: user.email,
  });
}
