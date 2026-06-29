// scripts/generate-sitemap.js
const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream, readdirSync } = require('fs');
const path = require('path');

const APP_DIR = path.join(__dirname, 'app');
const PUBLIC_DIR = path.join(__dirname, 'public');

const generateSitemap = async () => {
  try {
    const hostname = 'https://mydanicare.com';
    const sitemapStream = new SitemapStream({ hostname });

    // ✅ Read all page files from app/ folder
    const getRoutes = (dir, baseRoute = '') => {
      const files = readdirSync(dir, { withFileTypes: true });
      let routes = [];

      for (const file of files) {
        const fullPath = path.join(dir, file.name);

        if (file.isDirectory()) {
          // Skip API routes, private folders, and route groups
          if (file.name === 'api' || file.name.startsWith('_') || file.name.startsWith('(')) continue;

          const childRoutes = getRoutes(fullPath, `${baseRoute}/${file.name}`);
          routes = routes.concat(childRoutes);
        } else if (
          file.name === 'page.js' ||
          file.name === 'page.jsx' ||
          file.name === 'page.ts' ||
          file.name === 'page.tsx'
        ) {
          const route = baseRoute || '/';
          routes.push(route);
        }
      }
      return routes;
    };

    const allRoutes = getRoutes(APP_DIR);

    // ✅ Write all routes to sitemap
    allRoutes.forEach((route) => {
      // Skip dynamic routes without actual params
      if (route.includes('[')) return;
      sitemapStream.write({ url: route, changefreq: 'weekly', priority: route === '/' ? 1.0 : 0.7 });
    });

    sitemapStream.end();

    const sitemapPath = path.join(PUBLIC_DIR, 'sitemap.xml');
    const writeStream = createWriteStream(sitemapPath);

    const sitemap = await streamToPromise(sitemapStream);
    writeStream.write(sitemap.toString());

    console.log(`✅ Sitemap successfully created at ${sitemapPath}`);
  } catch (err) {
    console.error('❌ Error generating sitemap:', err);
  }
};

generateSitemap();
