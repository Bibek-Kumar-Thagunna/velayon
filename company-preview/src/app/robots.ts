import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
            },
            {
                userAgent: ['AhrefsBot', 'SemrushBot', 'DotBot'],
                disallow: '/',
            }
        ],
        sitemap: 'https://velayon.com/sitemap.xml',
    }
}
