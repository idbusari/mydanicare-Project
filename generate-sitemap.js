// scripts/generate-sitemap.js
const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream, readdirSync } = require('fs');
const path = require('path');

const PAGES_DIR = path.join(__dirname, '..', 'pages'); // Adjust if your pages dir is elsewhere
const PUBLIC_DIR = path.join(__dirname, '..', 'public');

const generateSitemap = async () => {
  try {
    const hostname = 'https://mydanicare.com';
    const sitemapStream = new SitemapStream({ hostname });

    // ✅ Read all files from pages folder
    const getRoutes = (dir, baseRoute = '') => {
      const files = readdirSync(dir, { withFileTypes: true });
      let routes = [];

      for (const file of files) {
        if (file.isDirectory()) {
          routes = routes.concat(getRoutes(path.join(dir, file.name), `${baseRoute}/${file.name}`));
        } else {
          if (file.name.startsWith('_') || file.name.startsWith('[')) continue; // Skip Next.js special files
          if (!file.name.endsWith('.js') && !file.name.endsWith('.tsx')) continue;

          const route =
            file.name === 'index.js' || file.name === 'index.tsx'
              ? baseRoute || '/'
              : `${baseRoute}/${file.name.replace(/\.(js|tsx)$/, '')}`;

          routes.push(route);
        }
      }
      return routes;
    };

    const allRoutes = getRoutes(PAGES_DIR);

    // ✅ Write all routes to sitemap
    allRoutes.forEach((route) => {
      sitemapStream.write({ url: route, changefreq: 'weekly', priority: 0.7 });
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
