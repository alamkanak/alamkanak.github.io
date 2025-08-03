<template>
  <div class="bg-default min-h-screen">
    <div class="container mx-auto px-4 py-8 lg:py-12 max-w-7xl">
      <!-- Hero Section -->
      <HomeHeroSection />
      
      <!-- Contact Buttons -->
      <HomeContactButtons />
      
      <!-- Skills Section -->
      <HomeSkillsSection />
      
      <!-- Projects Section -->
      <HomeProjectsSection />
    </div>
  </div>
</template>

<script setup lang="ts">
// Fetch profile data from Nuxt Content using shared composable
const { data: profileData } = useProfile()

// SEO Meta
useHead({
  title: profileData.value?.seo?.title || '',
  meta: [
    {
      name: 'description',
      content: profileData.value?.seo?.description || ''
    },
    {
      name: 'keywords',
      content: profileData.value?.seo?.keywords || ''
    },
    {
      property: 'og:title',
      content: profileData.value?.seo?.title || ''
    },
    {
      property: 'og:description',
      content: profileData.value?.seo?.description || ''
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: profileData.value?.seo?.title || ''
    },
    {
      name: 'twitter:description',
      content: profileData.value?.seo?.description || ''
    }
  ]
})

// Add structured data to head
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: profileData.value?.name || '',
        jobTitle: profileData.value?.seo?.jobTitle || '',
        description: profileData.value?.seo?.description || '',
        url: profileData.value?.seo?.url || 'https://alamkanak.github.io',
        sameAs: profileData.value?.social?.map(s => s.url) || [],
        knowsAbout: profileData.value?.expertise || []
      })
    }
  ]
})
</script>
