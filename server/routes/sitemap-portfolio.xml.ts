import { queryCollection } from '@nuxt/content/nitro'
import { defineEventHandler, setHeader } from 'h3'
import { siteUrl } from '../../shared/utils/site'
import { renderSitemap } from '../utils/sitemap'

export default defineEventHandler(async (event) => {
  const projects = await queryCollection(event, 'project').select('path').all()
  const urls = ['/', ...projects.map(project => project.path)].map(siteUrl)
  setHeader(event, 'Content-Type', 'application/xml; charset=utf-8')

  return renderSitemap(urls, 'urlset')
})
