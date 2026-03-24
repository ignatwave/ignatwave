export default function robots() {
  return {
    rules: {
      userAgent: "*",      // Apply to all search bots
      allow: "/",           // Allow crawling everything
    },
    sitemap: "https://www.ignatwave.com/sitemap.xml",
  };
}