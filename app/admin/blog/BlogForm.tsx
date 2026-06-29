'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';

// @ts-expect-error CSS import has no type declarations
import 'react-quill-new/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });

interface BlogFormProps {
  initial?: {
    id?: string;
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    image: string;
    author: string;
    keywords: string;
    published: boolean;
    metaTitle: string;
    metaDesc: string;
  };
}

export default function BlogForm({ initial }: BlogFormProps) {
  const router = useRouter();
  const isEdit = !!initial?.id;
  const [form, setForm] = useState({
    slug: initial?.slug || '',
    title: initial?.title || '',
    excerpt: initial?.excerpt || '',
    content: initial?.content || '',
    image: initial?.image || '',
    author: initial?.author || 'DaniCare Team',
    keywords: initial?.keywords || '',
    published: initial?.published ?? false,
    metaTitle: initial?.metaTitle || '',
    metaDesc: initial?.metaDesc || '',
  });
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState('');
  const [uploading, setUploading] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const handleChange = (key: string, value: string | boolean) => {
    setForm((f) => ({ ...f, [key]: value }));
  };

  const generateSlug = () => {
    const slug = form.title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-+|-+$/g, '');
    setForm((f) => ({ ...f, slug }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMsg('');
    const body = isEdit ? { ...form, id: initial!.id } : form;

    try {
      const res = await fetch('/api/blog', {
        method: isEdit ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error('Save failed');
      setMsg(isEdit ? 'Post updated.' : 'Post created.');
      setTimeout(() => router.push('/admin/blog'), 800);
    } catch {
      setMsg('Error saving post.');
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const fd = new FormData();
    fd.append('file', file);
    try {
      const res = await fetch('/api/upload', { method: 'POST', body: fd });
      const data = await res.json();
      if (data.url) setForm((f) => ({ ...f, image: data.url }));
      else setMsg('Upload failed.');
    } catch {
      setMsg('Upload error.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <h1 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '24px', color: '#1a3c6e' }}>
        {isEdit ? 'Edit Post' : 'Create New Post'}
      </h1>

      {msg && (
        <div style={{ padding: '12px 16px', borderRadius: '8px', marginBottom: '16px', background: msg.includes('failed') || msg.includes('Error') ? '#fee2e2' : '#dcfce7', color: msg.includes('failed') || msg.includes('Error') ? '#991b1b' : '#166534' }}>
          {msg}
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ background: '#fff', borderRadius: '12px', padding: '24px', marginBottom: '32px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        <div style={{ marginBottom: '16px' }}>
          <label style={{ fontSize: '0.85rem', fontWeight: 600, display: 'block', marginBottom: '6px' }}>Title *</label>
          <input value={form.title} onChange={(e) => handleChange('title', e.target.value)} required style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.95rem' }} />
        </div>

        <div style={{ marginBottom: '16px' }}>
          <label style={{ fontSize: '0.85rem', fontWeight: 600, display: 'block', marginBottom: '6px' }}>Slug *</label>
          <div style={{ display: 'flex', gap: '8px' }}>
            <input value={form.slug} onChange={(e) => handleChange('slug', e.target.value)} required style={{ flex: 1, padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.95rem' }} />
            <button type="button" onClick={generateSlug} style={{ padding: '10px 16px', borderRadius: '8px', border: '1px solid #e2e8f0', background: '#f8fafc', color: '#5e6883', fontWeight: 600, cursor: 'pointer', fontSize: '0.85rem', whiteSpace: 'nowrap' }}>
              Generate Slug
            </button>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
          <div>
            <label style={{ fontSize: '0.85rem', fontWeight: 600, display: 'block', marginBottom: '6px' }}>Meta Title (SEO)</label>
            <input value={form.metaTitle} onChange={(e) => handleChange('metaTitle', e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.95rem' }} />
          </div>
          <div>
            <label style={{ fontSize: '0.85rem', fontWeight: 600, display: 'block', marginBottom: '6px' }}>Meta Description (SEO)</label>
            <input value={form.metaDesc} onChange={(e) => handleChange('metaDesc', e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.95rem' }} />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
          <div>
            <label style={{ fontSize: '0.85rem', fontWeight: 600, display: 'block', marginBottom: '6px' }}>Author</label>
            <input value={form.author} onChange={(e) => handleChange('author', e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.95rem' }} />
          </div>
          <div>
            <label style={{ fontSize: '0.85rem', fontWeight: 600, display: 'block', marginBottom: '6px' }}>Keywords</label>
            <input value={form.keywords} onChange={(e) => handleChange('keywords', e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.95rem' }} />
          </div>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <label style={{ fontSize: '0.85rem', fontWeight: 600, display: 'block', marginBottom: '6px' }}>Upload Image</label>
          <input type="file" accept="image/*" onChange={handleImageUpload} style={{ width: '100%', padding: '8px', borderRadius: '8px', border: '1px solid #e2e8f0' }} />
          {uploading && <span style={{ fontSize: '0.8rem', color: '#5e6883' }}>Uploading...</span>}
          {form.image && <div style={{ fontSize: '0.75rem', color: '#166534', marginTop: '4px' }}>Saved: {form.image}</div>}
        </div>

        <div style={{ marginBottom: '16px' }}>
          <label style={{ fontSize: '0.85rem', fontWeight: 600, display: 'block', marginBottom: '6px' }}>Excerpt</label>
          <textarea value={form.excerpt} onChange={(e) => handleChange('excerpt', e.target.value)} rows={3} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.95rem' }} />
        </div>

        <div style={{ marginBottom: '16px' }}>
          <label style={{ fontSize: '0.85rem', fontWeight: 600, display: 'block', marginBottom: '6px' }}>Content</label>
          <div style={{ minHeight: '320px' }}>
            <ReactQuill
              key={isEdit ? initial!.id : 'new'}
              theme="snow"
              value={form.content}
              onChange={(val: string) => handleChange('content', val)}
              style={{ height: '260px', marginBottom: '40px' }}
            />
          </div>
        </div>

        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginTop: '24px', flexWrap: 'wrap' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
            <input type="checkbox" checked={form.published} onChange={(e) => handleChange('published', e.target.checked)} />
            <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>Published</span>
          </label>
          <button type="submit" disabled={loading} style={{ padding: '12px 24px', borderRadius: '8px', border: 'none', background: '#1a3c6e', color: '#fff', fontWeight: 600, cursor: 'pointer', opacity: loading ? 0.7 : 1 }}>
            {loading ? 'Saving...' : isEdit ? 'Update Post' : 'Create Post'}
          </button>
          <button type="button" onClick={() => setShowPreview((s) => !s)} style={{ padding: '12px 24px', borderRadius: '8px', border: '1px solid #e2e8f0', background: '#fff', color: '#1a3c6e', fontWeight: 600, cursor: 'pointer' }}>
            {showPreview ? 'Hide Preview' : 'Preview'}
          </button>
          <button type="button" onClick={() => router.push('/admin/blog')} style={{ padding: '12px 24px', borderRadius: '8px', border: '1px solid #e2e8f0', background: '#fff', color: '#5e6883', cursor: 'pointer' }}>
            Cancel
          </button>
        </div>
      </form>

      {showPreview && (
        <div
          onClick={() => setShowPreview(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.55)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#fff',
              borderRadius: '12px',
              width: '100%',
              maxWidth: '800px',
              maxHeight: '85vh',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
            }}
          >
            <div
              style={{
                padding: '16px 24px',
                borderBottom: '1px solid #f1f5f9',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexShrink: 0,
              }}
            >
              <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#1a3c6e' }}>Preview</span>
              <button
                onClick={() => setShowPreview(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '1.2rem',
                  cursor: 'pointer',
                  color: '#5e6883',
                  padding: '4px 8px',
                  lineHeight: 1,
                }}
              >
                ×
              </button>
            </div>

            <div style={{ overflowY: 'auto', padding: '24px', flex: 1 }}>
              <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#111', marginBottom: '0.5rem', lineHeight: 1.2 }}>
                {form.title || 'Untitled Post'}
              </h1>
              <p style={{ color: '#777', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                By {form.author} — {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                <span style={{ marginLeft: '12px', color: form.published ? '#059669' : '#e66926', fontWeight: 600, fontSize: '0.85rem' }}>
                  {form.published ? '● Published' : '● Draft'}
                </span>
              </p>

              {form.image && (
                <img
                  src={form.image}
                  alt={form.title}
                  style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', borderRadius: '1rem', marginBottom: '2rem' }}
                />
              )}

              {form.content && (
                <div
                  lang="en"
                  style={{
                    fontSize: '1.1rem',
                    lineHeight: 1.7,
                    color: '#333',
                    textAlign: 'justify',
                    hyphens: 'auto',
                    WebkitHyphens: 'auto',
                    msHyphens: 'auto',
                    maxWidth: '100%',
                  }}
                  dangerouslySetInnerHTML={{ __html: form.content }}
                />
              )}

              {form.keywords && (
                <div style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid #eee', fontSize: '0.8rem', color: '#999' }}>
                  Tags: {form.keywords}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
