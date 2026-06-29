'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import BlogForm from '../../BlogForm';

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string | null;
  author: string;
  keywords: string | null;
  published: boolean;
  metaTitle: string | null;
  metaDesc: string | null;
}

export default function EditPostPage() {
  const params = useParams();
  const id = params.id as string;
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/blog')
      .then((r) => r.json())
      .then((posts: BlogPost[]) => {
        const found = posts.find((p) => p.id === id);
        setPost(found || null);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <p style={{ padding: '24px', color: '#5e6883' }}>Loading post...</p>;
  if (!post) return <p style={{ padding: '24px', color: '#dc2626' }}>Post not found.</p>;

  return (
    <BlogForm
      initial={{
        id: post.id,
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt,
        content: post.content,
        image: post.image || '',
        author: post.author,
        keywords: post.keywords || '',
        published: post.published,
        metaTitle: post.metaTitle || '',
        metaDesc: post.metaDesc || '',
      }}
    />
  );
}
