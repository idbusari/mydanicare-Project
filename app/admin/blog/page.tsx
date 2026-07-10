'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

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
  publishedAt: string | null;
  createdAt: string;
  metaTitle: string | null;
  metaDesc: string | null;
}

function formatDate(value: string | null) {
  if (!value) return '—';
  return new Date(value).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export default function BlogAdmin() {
  const router = useRouter();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [jsonImport, setJsonImport] = useState('');
  const [showImport, setShowImport] = useState(false);
  const [msg, setMsg] = useState('');

  const loadPosts = () => {
    fetch('/api/blog')
      .then((r) => r.json())
      .then(setPosts)
      .catch(() => setPosts([]));
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const remove = async (id: string) => {
    if (!confirm('Delete this post?')) return;
    await fetch(`/api/blog?id=${id}`, { method: 'DELETE' });
    loadPosts();
  };

  const importJson = async () => {
    setMsg('');
    try {
      const arr = JSON.parse(jsonImport);
      if (!Array.isArray(arr)) throw new Error('JSON must be an array');
      for (const item of arr) {
        const mapped = {
          slug: item.slug || item.id || '',
          title: item.title || '',
          excerpt: item.excerpt || item.summary || item.description || '',
          content: item.content || item.body || item.html || '',
          image: item.image || item.coverImage || item.featuredImage || '',
          author: item.author || item.byline || 'DaniCare Team',
          keywords: item.keywords || item.tags?.join?.(', ') || item.tags || '',
          published: item.published ?? (item.status === 'published' ? true : undefined) ?? true,
          metaTitle: item.metaTitle || item.meta?.title || item.seo?.title || '',
          metaDesc: item.metaDesc || item.meta?.description || item.seo?.description || '',
        };
        await fetch('/api/blog', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(mapped),
        });
      }
      setMsg(`Imported ${arr.length} posts.`);
      setJsonImport('');
      loadPosts();
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Invalid JSON';
      setMsg('JSON import failed: ' + message);
    }
  };

  const seedStatic = async () => {
    setMsg('');
    try {
      const res = await fetch('/api/blog/seed', { method: 'POST' });
      const data = await res.json();
      setMsg(data.message);
      loadPosts();
    } catch {
      setMsg('Seed failed.');
    }
  };

  return (
    <div>
      <h1 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '24px', color: '#1a3c6e' }}>Blog CMS</h1>

      {msg && (
        <div style={{ padding: '12px 16px', borderRadius: '8px', marginBottom: '16px', background: msg.includes('failed') || msg.includes('Error') ? '#fee2e2' : '#dcfce7', color: msg.includes('failed') || msg.includes('Error') ? '#991b1b' : '#166534' }}>
          {msg}
        </div>
      )}

      <div style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', overflow: 'hidden', marginBottom: '32px' }}>
        <div style={{ padding: '20px 24px', borderBottom: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 600, margin: 0, color: '#1a3c6e' }}>All Posts ({posts.length})</h2>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button onClick={() => setShowImport((s) => !s)} style={{ padding: '8px 16px', borderRadius: '8px', border: '1px solid #e2e8f0', background: '#fff', color: '#5e6883', fontWeight: 600, cursor: 'pointer', fontSize: '0.85rem' }}>
              {showImport ? '▾' : '▸'} Bulk Import JSON
            </button>
            <button onClick={seedStatic} style={{ padding: '8px 16px', borderRadius: '8px', border: '1px solid #1a3c6e', background: '#fff', color: '#1a3c6e', fontWeight: 600, cursor: 'pointer', fontSize: '0.85rem' }}>Seed from Static</button>
            <button onClick={() => router.push('/admin/blog/new')} style={{ padding: '8px 16px', borderRadius: '8px', border: 'none', background: '#1a3c6e', color: '#fff', fontWeight: 600, cursor: 'pointer', fontSize: '0.85rem' }}>+ Create Post</button>
          </div>
        </div>

        {showImport && (
          <div style={{ padding: '20px 24px', borderBottom: '1px solid #f1f5f9', background: '#fafafa' }}>
            <p style={{ fontSize: '0.85rem', color: '#5e6883', marginBottom: '12px' }}>Paste an array of post objects. Fields: slug, title, excerpt, content, image, author, keywords, published, metaTitle, metaDesc</p>
            <textarea
              value={jsonImport}
              onChange={(e) => setJsonImport(e.target.value)}
              rows={4}
              placeholder='[{"slug":"hello-world","title":"Hello","content":"..."}]'
              style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0', fontFamily: 'monospace', fontSize: '0.85rem', marginBottom: '12px' }}
            />
            <button onClick={importJson} style={{ padding: '10px 20px', borderRadius: '8px', border: 'none', background: '#1a3c6e', color: '#fff', fontWeight: 600, cursor: 'pointer' }}>Import JSON</button>
          </div>
        )}

        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
          <thead>
            <tr style={{ background: '#f1f5f9', textAlign: 'left' }}>
              <th style={{ padding: '14px 16px', fontWeight: 600 }}>Title</th>
              <th style={{ padding: '14px 16px', fontWeight: 600 }}>Slug</th>
              <th style={{ padding: '14px 16px', fontWeight: 600 }}>Author</th>
              <th style={{ padding: '14px 16px', fontWeight: 600 }}>Published</th>
              <th style={{ padding: '14px 16px', fontWeight: 600 }}>Status</th>
              <th style={{ padding: '14px 16px', fontWeight: 600 }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.length === 0 && (
              <tr>
                <td colSpan={6} style={{ padding: '24px 16px', textAlign: 'center', color: '#5e6883' }}>
                  No posts yet. Click &quot;Seed from Static&quot; to import existing blogs.
                </td>
              </tr>
            )}
            {posts.map((post) => (
              <tr key={post.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                <td style={{ padding: '12px 16px' }}>{post.title}</td>
                <td style={{ padding: '12px 16px', fontSize: '0.85rem', color: '#5e6883' }}>{post.slug}</td>
                <td style={{ padding: '12px 16px', fontSize: '0.85rem', color: '#5e6883' }}>{post.author}</td>
                <td style={{ padding: '12px 16px', fontSize: '0.85rem', color: '#5e6883' }}>{formatDate(post.publishedAt)}</td>
                <td style={{ padding: '12px 16px' }}>
                  <span style={{ padding: '4px 10px', borderRadius: '12px', fontSize: '0.8rem', fontWeight: 500, background: post.published ? '#dcfce7' : '#f1f5f9', color: post.published ? '#166534' : '#5e6883' }}>
                    {post.published ? 'Published' : 'Draft'}
                  </span>
                </td>
                <td style={{ padding: '12px 16px', display: 'flex', gap: '8px' }}>
                  <button onClick={() => router.push(`/admin/blog/edit/${post.id}`)} style={{ padding: '6px 14px', borderRadius: '6px', border: 'none', background: '#1a3c6e', color: '#fff', fontSize: '0.85rem', cursor: 'pointer' }}>Edit</button>
                  <button onClick={() => window.open(`/blog/${post.slug}`, '_blank')} style={{ padding: '6px 14px', borderRadius: '6px', border: '1px solid #e2e8f0', background: '#fff', color: '#1a3c6e', fontSize: '0.85rem', cursor: 'pointer' }}>Preview</button>
                  <button onClick={() => remove(post.id)} style={{ padding: '6px 14px', borderRadius: '6px', border: 'none', background: '#dc2626', color: '#fff', fontSize: '0.85rem', cursor: 'pointer' }}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
