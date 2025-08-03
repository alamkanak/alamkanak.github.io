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
      routes: ['/'],
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
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    buildAssetsDir: process.env.NUXT_APP_BUILD_ASSETS_DIR || '/_nuxt/'
  },
  // Optimize for static generation
  experimental: {
    payloadExtraction: false
  }
})