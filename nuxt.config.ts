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
    }
  },
  hooks: {
    async 'nitro:config'(nitroConfig) {
      if (nitroConfig.prerender?.routes) {
        // Dynamically add all project routes for prerendering
        try {
          // This will work during build time when content is available
          const fs = await import('fs')
          const path = await import('path')
          
          const contentDir = path.resolve('./content/project')
          if (fs.existsSync(contentDir)) {
            const files = fs.readdirSync(contentDir)
            const projectRoutes = files
              .filter(file => file.endsWith('.md'))
              .map(file => `/project/${file.replace('.md', '')}`)
            
            nitroConfig.prerender.routes.push(...projectRoutes)
          }
        } catch (error) {
          console.warn('Could not auto-generate project routes:', error)
        }
      }
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