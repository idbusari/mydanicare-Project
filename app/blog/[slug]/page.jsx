import { getSortedPostsData } from "@/lib/posts";
import DOMPurify from "isomorphic-dompurify";
import styles from "./post.module.scss";
import Image from "next/image";
import { notFound } from "next/navigation";
import ShareButtons from "@/components/ShareButtons"; // ✅ Import share button

export async function generateMetadata({ params }) {
  const posts = getSortedPostsData();
  const post = posts.find((p) => p.id === params.slug);

  if (!post) {
    return {
      title: "Post Not Found | Danicare Blog",
      description: "This blog post could not be found.",
    };
  }

  return {
    title: post.seo?.title || post.title,
    description: post.seo?.description || post.excerpt,
  };
}

export default function BlogPostPage({ params }) {
  const posts = getSortedPostsData();
  const post = posts.find((p) => p.id === params.slug);

  if (!post) return notFound();

  const sanitizedContent = DOMPurify.sanitize(post.content);

  return (
    <article className={styles.post}>
      <h1 className={styles.title}>{post.title}</h1>
      <p className={styles.meta}>
        By {post.author} — {post.date}
      </p>

      <Image
        src={post.image}
        alt={post.title}
        width={800}
        height={400}
        className={styles.image}
      />

      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: sanitizedContent }}
      />

      {/* ✅ Share Buttons inserted below blog content */}
      <ShareButtons title={post.title} />
    </article>
    
  );
}

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({ slug: post.id }));
}
