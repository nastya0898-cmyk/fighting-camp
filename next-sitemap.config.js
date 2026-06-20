/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://elitewrestlingcamp.ch",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  additionalPaths: async () => [
    { loc: "/", priority: 1.0, changefreq: "weekly" },
    { loc: "/coaches", priority: 0.9, changefreq: "monthly" },
    { loc: "/program", priority: 0.9, changefreq: "monthly" },
    { loc: "/pricing", priority: 0.9, changefreq: "monthly" },
    { loc: "/faq", priority: 0.8, changefreq: "monthly" },
    { loc: "/contact", priority: 0.8, changefreq: "monthly" },
  ],
};
