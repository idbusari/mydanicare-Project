import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { STATIC_POSTS } from '@/lib/posts';

export async function POST() {
  let createdCount = 0;
  for (const post of STATIC_POSTS) {
    try {
      await prisma.blogPost.create({
        data: {
          slug: post.id,
          title: post.title,
          excerpt: post.excerpt,
          content: post.content,
          image: post.image,
          author: post.author,
          keywords: post.keywords,
          published: true,
          metaTitle: (post as { metaTitle?: string | null }).metaTitle || null,
          metaDesc: (post as { metaDesc?: string | null }).metaDesc || null,
        },
      });
      createdCount++;
    } catch {
      // slug already exists, skip
    }
  }

  return NextResponse.json({ message: 'Seeded ' + createdCount + ' posts', count: createdCount });
}
