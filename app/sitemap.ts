import type { MetadataRoute } from 'next';
import { getSortedPostsData } from '@/lib/posts';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.mydanicare.com';

  // Static routes
  const staticRoutes = [
    '',
    '/become-a-patient',
    '/psychiatry-service-provider',
    '/psychiatry-treatment',
    '/we-accept-insurance',
    '/partner-with-us',
    '/our-faqs',
    '/blog',
    '/reviews',
    '/immigration-psychiatry-service',
    '/psychiatrist',
    '/psychiatry-care-registration',
    '/privacy-policy',
    '/partners',
    '/adhd-get-started',
    '/refer-a-patient',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.7,
  }));

  // Blog posts
  const posts = await getSortedPostsData();
  const blogRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}
