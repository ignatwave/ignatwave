// app/sitemap.js
// Next.js automatically turns this into ignatwave.com/sitemap.xml

export default function sitemap() {
  return [

    // ── Your homepage ──────────────────────────
    {
      url: 'https://www.ignatwave.com',
      lastModified: new Date(),       // today's date
      changeFrequency: 'weekly',       // how often you update it
      priority: 1.0,                   // most important page (max 1.0)
    },

    // ── Malappuram local page ──────────────────
    {
      url: 'https://www.ignatwave.com/digital-marketing-malappuram',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },

    // ── Areekode local page ────────────────────
    {
      url: 'https://www.ignatwave.com/digital-marketing-areekode',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },

    // ── UAE page ───────────────────────────────
    {
      url: 'https://www.ignatwave.com/digital-marketing-uae',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },

  ];
}