import { defineEventHandler, setHeader } from 'h3'
import { projectSitemaps, siteUrl } from '../../shared/utils/site'
import { renderSitemap } from '../utils/sitemap'

export default defineEventHandler((event) => {
  const urls = ['/sitemap-portfolio.xml', ...projectSitemaps].map(siteUrl)
  setHeader(event, 'Content-Type', 'application/xml; charset=utf-8')

  return renderSitemap(urls, 'sitemapindex')
})
