/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://thedanicare.vercel.app', // Replace with your website's URL
    generateRobotsTxt: true, // Optional: generates a robots.txt file
    sitemapSize: 7000, // Optional: you can adjust this if you have a large sitemap
    changefreq: 'daily', // Optional: adjust how often the content changes
    priority: 0.7, // Optional: set the default priority for pages
    exclude: ['/admin/**'], // Optional: exclude specific paths from the sitemap
    // Additional customization based on your requirements
  };
  