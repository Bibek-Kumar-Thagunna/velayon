import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: '/private/',
            },
            {
                userAgent: ['AhrefsBot', 'SemrushBot', 'DotBot'],
                disallow: '/',
            }
        ],
        sitemap: 'https://bibek.velayon.com/sitemap.xml',
    }
}
