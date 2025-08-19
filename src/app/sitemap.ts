import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.marcantonioglobal.com'
  const paths = [
    '/',
    '/about',
    '/about/leadership',
    '/about/fact-sheet',
    '/about/contact',
    '/education',
    '/education/programs',
    '/education/fellowships',
    '/education/workshops',
    '/research',
    '/research/reports',
    '/research/journal',
    '/engagement',
    '/engagement/events',
    '/engagement/digital-programs',
    '/engagement/partnerships',
    '/resources',
    '/careers',
    '/pricing'
  ]
  return paths.map((p) => ({ url: `${base}${p}`, changeFrequency: 'weekly', priority: p === '/' ? 1 : 0.6 }))
}


