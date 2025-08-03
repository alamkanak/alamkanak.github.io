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
    // Configure for static site generation
    provider: 'ipxStatic',
    presets: {
      avatar: {
        modifiers: {
          format: 'webp',
          width: 300,
          height: 300
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
    // Configure for static site generation and GitHub Pages
    preset: 'github-pages',
    prerender: {
      routes: ['/'],
      crawlLinks: true
    }
  },
  // Configure for GitHub Pages deployment
  app: {
    // Base URL for GitHub Pages (if not using custom domain)
    // Uncomment and modify if your GitHub Pages URL is https://alamkanak.github.io/repository-name/
    // baseURL: '/repository-name/',
    
    head: {
      // Ensure proper meta tags for GitHub Pages
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  // Ensure static generation compatibility
  experimental: {
    payloadExtraction: false
  }
})