'use client';

import DOMPurify from 'isomorphic-dompurify';
import Image from 'next/image';
import { useState } from 'react';
import styles from './BlogArticle.module.scss';

interface BlogArticleProps {
  title: string;
  author: string;
  date: string;
  image?: string | null;
  content: string;
}

export default function BlogArticle({ title, author, date, image, content }: BlogArticleProps) {
  const sanitizedContent = DOMPurify.sanitize(content || '');
  const [hasError, setHasError] = useState(false);

  const placeholder = (
    <div
      className={styles.image}
      style={{
        width: '100%',
        height: '250px',
        background: '#f1f5f9',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#94a3b8',
        fontSize: '0.9rem',
        borderRadius: '1rem',
        marginBottom: '2rem',
      }}
    >
      No image
    </div>
  );

  return (
    <article className={styles.article}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.meta}>
        By {author} — {date}
      </p>

      {!image || hasError ? (
        placeholder
      ) : image.startsWith('data:') ? (
        <img
          src={image}
          alt={title}
          className={styles.image}
          style={{ width: '100%', height: '400px', objectFit: 'cover' }}
          onError={() => setHasError(true)}
        />
      ) : (
        <Image
          src={image}
          alt={title}
          width={800}
          height={400}
          className={styles.image}
          priority
          onError={() => setHasError(true)}
        />
      )}

      <div
        className={styles.content}
        lang="en"
        dangerouslySetInnerHTML={{ __html: sanitizedContent }}
      />
    </article>
  );
}
