import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        // Allow AI search agents for real-time discovery and RAG queries
        userAgent: ['Google-Extended', 'PerplexityBot', 'ChatGPT-User'],
        allow: '/',
      },
      {
        // Disallow AI bulk scrapers used exclusively for model training
        userAgent: ['GPTBot', 'CCBot', 'ClaudeBot', 'anthropic-ai', 'Bytespider'],
        disallow: '/',
      },
    ],
    sitemap: 'https://www.rizll.tech/sitemap.xml',
  }
}
