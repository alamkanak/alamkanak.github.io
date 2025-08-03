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
      crawlLinks: true
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
  // Configure hooks for GitHub Pages SPA fallback
  hooks: {
    'nitro:build:public-assets': async () => {
      // Copy index.html to 404.html for GitHub Pages SPA fallback
      const { copyFile, access } = await import('node:fs/promises')
      const { join } = await import('node:path')
      
      const outputDir = process.env.NUXT_APP_BUILD_ASSETS_DIR || '_nuxt'
      const sourceIndex = join(outputDir, 'index.html')
      const target404 = join(outputDir, '404.html')
      
      try {
        await access(sourceIndex)
        await copyFile(sourceIndex, target404)
        console.log('✓ Copied index.html to 404.html for GitHub Pages SPA fallback')
      } catch (error) {
        console.warn('⚠ Could not copy index.html to 404.html:', (error as Error).message)
      }
    }
  },
  // Optimize for static generation
  experimental: {
    payloadExtraction: false
  }
})