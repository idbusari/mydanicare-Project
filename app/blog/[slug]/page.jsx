import { getSortedPostsData } from "@/lib/posts";
import { notFound } from "next/navigation";
import ShareButtons from "@/components/ShareButtons";
import BlogArticle from "@/components/BlogArticle/BlogArticle";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const posts = await getSortedPostsData();
  const post = posts.find((p) => p.id === slug);

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

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const posts = await getSortedPostsData();
  const post = posts.find((p) => p.id === slug);

  if (!post) return notFound();

  return (
    <>
      <BlogArticle
        title={post.title}
        author={post.author}
        date={post.date}
        image={post.image}
        content={post.content}
      />
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem 2rem' }}>
        <ShareButtons title={post.title} />
      </div>
    </>
  );
}

export async function generateStaticParams() {
  const posts = await getSortedPostsData();
  return posts.map((post) => ({ slug: post.id }));
}
