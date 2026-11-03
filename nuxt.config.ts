import { site } from './shared/utils/site'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: true,
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/fonts',
    '@nuxt/icon'
  ],
  css: ['~/assets/css/main.css'],
  image: {
    // Configure for static generation
    provider: 'ipx',
    presets: {
      avatar: {
        modifiers: {
          format: 'webp',
          quality: 80
        }
      }
    }
  },
  ui: {
    theme: {
      colors: [
        'primary',
        'secondary', 
        'tertiary',
        'neutral',
        'success',
        'warning',
        'error',
        'info'
      ]
    }
  },
  fonts: {
    // Define Linear.app inspired fonts
    families: [
      {
        name: 'Inter',
        provider: 'google',
        weights: [300, 400, 500, 600, 700]
      }
    ]
  },
  nitro: {
    // Configure for GitHub Pages deployment
    preset: process.env.NITRO_PRESET || 'static',
    // Prerender routes for static generation
    prerender: {
      routes: ['/', '/sitemap.xml', '/sitemap-portfolio.xml'],
      crawlLinks: true,
      autoSubfolderIndex: false
    },
    // GitHub Pages specific configuration
    output: {
      publicDir: process.env.NUXT_APP_BUILD_ASSETS_DIR || '_nuxt'
    }
  },
  // GitHub Pages deployment configuration
  app: {
    head: {
      title: site.title,
      htmlAttrs: { lang: 'en' },
      // Successful pages override this; generated fallback shells stay out of search.
      meta: [{ name: 'robots', content: 'noindex, follow' }],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico', sizes: '16x16 32x32 48x48' },
        { rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes: '96x96' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg', sizes: 'any' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' },
        { rel: 'sitemap', type: 'application/xml', href: '/sitemap.xml' }
      ]
    },
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    buildAssetsDir: process.env.NUXT_APP_BUILD_ASSETS_DIR || '/_nuxt/'
  },
  // Optimize for static generation
  experimental: {
    payloadExtraction: false
  }
})
