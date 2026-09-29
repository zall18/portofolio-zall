import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        // Explicitly allow ALL AI search and training crawlers for GEO citability
        userAgent: [
          'GPTBot',
          'OAI-SearchBot',
          'ChatGPT-User',
          'Google-Extended',
          'PerplexityBot',
          'ClaudeBot',
          'Claude-User',
          'Claude-SearchBot',
        ],
        allow: '/',
      },
      {
        // Only block pure bulk scrapers with no search product
        userAgent: ['CCBot', 'Bytespider'],
        disallow: '/',
      },
    ],
    sitemap: 'https://www.rizll.tech/sitemap.xml',
  }
}
