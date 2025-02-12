import styles from "./blog.module.scss";
import Link from "next/link";
import Image from "next/image";
import { getSortedPostsData } from "@/lib/posts";

export default async function BlogPage() {
  const posts = await getSortedPostsData();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Latest Blog Posts</h1>
      <div className={styles.grid}>
        {posts.map(({ id, title, date, excerpt, image, author }) => (
          <div key={id} className={styles.card}>
            <Link href={`/blog/${id}`}>
              <Image src={image} alt={title} width={400} height={250} className={styles.image} />
            </Link>
            <div className={styles.content}>
              <h2 className={styles.postTitle}>
                <Link href={`/blog/${id}`}>{title}</Link>
              </h2>
              <p className={styles.meta}>
                By {author} • {date}
              </p>
              <p className={styles.excerpt}>{excerpt}</p>
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
