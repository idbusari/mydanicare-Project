import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const posts = await prisma.blogPost.findMany({
    orderBy: { publishedAt: 'desc' },
  });
  return NextResponse.json(posts);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const post = await prisma.blogPost.create({
    data: {
      slug: body.slug,
      title: body.title,
      excerpt: body.excerpt,
      content: body.content,
      image: body.image,
      author: body.author,
      keywords: body.keywords,
      published: body.published ?? false,
      publishedAt: body.published ? new Date() : null,
      metaTitle: body.metaTitle,
      metaDesc: body.metaDesc,
    },
  });
  return NextResponse.json(post);
}

export async function PUT(req: NextRequest) {
  const body = await req.json();
  const post = await prisma.blogPost.update({
    where: { id: body.id },
    data: {
      slug: body.slug,
      title: body.title,
      excerpt: body.excerpt,
      content: body.content,
      image: body.image,
      author: body.author,
      keywords: body.keywords,
      published: body.published,
      publishedAt: body.published ? new Date() : null,
      metaTitle: body.metaTitle,
      metaDesc: body.metaDesc,
    },
  });
  return NextResponse.json(post);
}

export async function DELETE(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');
  if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });
  await prisma.blogPost.delete({ where: { id } });
  return NextResponse.json({ success: true });
}
