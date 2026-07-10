import styles from "./blog.module.scss";
import Link from "next/link";
import Image from "next/image";
import { getSortedPostsData } from "@/lib/posts";
import DOMPurify from "isomorphic-dompurify";

export const revalidate = 60;

export const metadata = {
  title: 'Blog | DaniCare Psychiatry - Mental Health Insights',
  description:
    'Explore mental health insights, tips, and articles from DaniCare Psychiatry. Stay informed about psychiatry, wellness, and telehealth trends.',
  alternates: { canonical: 'https://www.mydanicare.com/blog' },
};

export default async function BlogPage() {
  const posts = await getSortedPostsData();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Latest Blog Posts</h1>
      <div className={styles.grid}>
        {posts.map(({ id, title, date, excerpt, image, author }) => (
          <div key={id} className={styles.card}>
            <Link href={`/blog/${id}`}>
              {image ? (
                <Image
                  src={image}
                  alt={title}
                  width={400}
                  height={250}
                  className={styles.image}
                />
              ) : (
                <div
                  className={styles.image}
                  style={{
                    height: '250px',
                    background: '#f1f5f9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#94a3b8',
                    fontSize: '0.9rem',
                  }}
                >
                  No image
                </div>
              )}
            </Link>

            <div className={styles.content}>
              <h2 className={styles.postTitle}>
                <Link href={`/blog/${id}`}>{title}</Link>
              </h2>

              <p className={styles.meta}>
                By {author} • {date}
              </p>

              <div
                className={styles.excerpt}
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(excerpt || '') }}
              />

              <Link href={`/blog/${id}`} className={styles.readMore}>
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
