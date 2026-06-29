'use client';

import DOMPurify from 'isomorphic-dompurify';
import Image from 'next/image';
import styles from './BlogArticle.module.scss';

interface BlogArticleProps {
  title: string;
  author: string;
  date: string;
  image?: string | null;
  content: string;
}

export default function BlogArticle({ title, author, date, image, content }: BlogArticleProps) {
  const sanitizedContent = DOMPurify.sanitize(content);

  return (
    <article className={styles.article}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.meta}>
        By {author} — {date}
      </p>

      {image && (
        <Image
          src={image}
          alt={title}
          width={800}
          height={400}
          className={styles.image}
          priority
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
