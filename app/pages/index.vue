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
import { serializeJsonLd, site, siteUrl } from '~~/shared/utils/site'

const { data: profileData } = await useProfile()

useSiteSeo({
  title: () => profileData.value?.seo.title || site.title,
  description: () => profileData.value?.seo.description || site.description,
})

useHead(() => ({
  script: [{
    key: 'page-schema',
    type: 'application/ld+json',
    innerHTML: serializeJsonLd({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          '@id': `${site.url}#website`,
          url: site.url,
          name: site.name,
          inLanguage: 'en',
          publisher: { '@id': `${site.url}#person` },
        },
        {
          '@type': 'Person',
          '@id': `${site.url}#person`,
          name: profileData.value?.name || site.name,
          jobTitle: profileData.value?.seo.jobTitle,
          description: profileData.value?.seo.description || site.description,
          url: site.url,
          image: siteUrl(profileData.value?.avatar.src || '/avatar.jpg'),
          sameAs: profileData.value?.social.filter(link => link.url.startsWith('https://')).map(link => link.url),
          knowsAbout: profileData.value?.expertise,
        },
        {
          '@type': 'ProfilePage',
          '@id': `${site.url}#page`,
          url: site.url,
          name: profileData.value?.seo.title || site.title,
          description: profileData.value?.seo.description || site.description,
          inLanguage: 'en',
          isPartOf: { '@id': `${site.url}#website` },
          mainEntity: { '@id': `${site.url}#person` },
        },
      ],
    }),
  }],
}))
</script>
