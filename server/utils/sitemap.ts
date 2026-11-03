const escapeXml = (value: string) => value.replace(/[<>&"']/g, character => ({
  '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&apos;',
})[character]!)

export const renderSitemap = (urls: string[], type: 'urlset' | 'sitemapindex') => {
  const entry = type === 'urlset' ? 'url' : 'sitemap'
  return '<?xml version="1.0" encoding="UTF-8"?>\n'
    + `<${type} xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`
    + urls.map(url => `  <${entry}><loc>${escapeXml(url)}</loc></${entry}>`).join('\n')
    + `\n</${type}>\n`
}
