const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const path = require('path');

const generateSitemap = async () => {
  const sitemapStream = new SitemapStream({ hostname: 'https://thedanicare.vercel.app' });

  // Add static URLs
  sitemapStream.write({ url: '/', changefreq: 'daily', priority: 1.0 });
  sitemapStream.write({ url: '/about', changefreq: 'weekly', priority: 0.8 });
  sitemapStream.write({ url: '/contact', changefreq: 'monthly', priority: 0.5 });

  // Dynamically add URLs (e.g., blog posts, patients pages, etc.)
  const dynamicRoutes = [
    { url: '/patients', changefreq: 'weekly', priority: 0.7 },
    // Add other dynamic routes here
  ];

  dynamicRoutes.forEach(route => sitemapStream.write(route));

  sitemapStream.end();

  const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');
  const writeStream = createWriteStream(sitemapPath);

  // Generate the sitemap
  await streamToPromise(sitemapStream).then(data => writeStream.write(data.toString()));

  console.log(`Sitemap successfully created at ${sitemapPath}`);
};

generateSitemap().catch(err => console.error('Error generating sitemap:', err));
