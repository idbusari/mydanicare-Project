// app/blog/[slug]/page.jsx
import { getSortedPostsData } from "@/lib/posts";
import Image from "next/image";
import Link from "next/link";
import styles from "./post.module.scss";
import { Metadata } from "next";

export async function generateMetadata({ params }) {
  const posts = getSortedPostsData();
  const post = posts.find((p) => p.id === params.slug);

  if (!post) {
    return {
      title: "Post Not Found | My Blog",
      description: "This blog post could not be found.",
    };
  }

  return {
    title: post.seo?.title || post.title,
    description: post.seo?.description || post.excerpt,
    keywords: post.seo?.keywords || "mental health, psychology, psychiatry",
    openGraph: {
      title: post.seo?.title || post.title,
      description: post.seo?.description || post.excerpt,
      url: `https://yourwebsite.com/blog/${post.id}`,
      images: [
        {
          url: `https://yourwebsite.com${post.image}`,
          width: 800,
          height: 400,
          alt: post.title,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.seo?.title || post.title,
      description: post.seo?.description || post.excerpt,
      images: [`https://yourwebsite.com${post.image}`],
    },
  };
}

export default function BlogPost({ params }) {
  const posts = getSortedPostsData();
  const post = posts.find((p) => p.id === params.slug);

  if (!post) {
    return <div className={styles.notFound}>404 - Post not found</div>;
  }

  return (
    <div className={styles.postContainer}>
      <h1 className={styles.title}>{post.title}</h1>
      <p className={styles.meta}>
        By <strong>{post.author}</strong> • {post.date}
      </p>
      <Image src={post.image} alt={post.title} width={800} height={400} className={styles.image} />
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: post.content }} />
      <Link href="/blog" className={styles.backLink}>← Back to Blog</Link>
    </div>
  );
}
