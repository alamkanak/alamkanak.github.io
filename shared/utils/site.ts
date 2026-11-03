export const site = {
  url: 'https://alamkanak.github.io/',
  name: 'Raquib Ul Alam',
  title: 'Raquib Ul Alam | Staff Machine Learning Engineer & Researcher',
  description: 'Raquib Ul Alam is a Staff Machine Learning Engineer and researcher building LLM applications, on-device ML, and medical image and signal processing systems.',
  image: '/social-card.png',
  imageAlt: 'Raquib Ul Alam — Staff Machine Learning Engineer & Researcher',
}

// Independently deployed project sitemaps, verified on the portfolio's host.
// Register new project sitemaps here once they have been published.
export const projectSitemaps = [
  '/pdfweld/sitemap.xml',
  '/sequence/sitemap.xml',
]

// Content thumbnails use both /image.png and ./image.png for public assets.
export const siteUrl = (path = '/') => new URL(path.replace(/^\.\//, '/'), site.url).href

export const serializeJsonLd = (value: unknown) => JSON.stringify(value).replace(/</g, '\\u003c')
