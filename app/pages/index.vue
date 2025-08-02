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
// SEO Meta
useHead({
  title: 'Raquib Ul Alam - Senior Android Engineer & ML Researcher',
  meta: [
    {
      name: 'description',
      content: 'Senior Android Engineer with 10+ years experience, specializing in on-device ML deployment and signal processing. Academic researcher in medical image and signal processing.'
    },
    {
      name: 'keywords',
      content: 'Android Engineer, Machine Learning, Signal Processing, Medical Image Processing, Mobile Development, On-device ML, TensorFlow'
    },
    {
      property: 'og:title',
      content: 'Raquib Ul Alam - Senior Android Engineer & ML Researcher'
    },
    {
      property: 'og:description',
      content: 'Senior Android Engineer with 10+ years experience, specializing in on-device ML deployment and signal processing.'
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
      content: 'Raquib Ul Alam - Senior Android Engineer & ML Researcher'
    },
    {
      name: 'twitter:description',
      content: 'Senior Android Engineer with 10+ years experience, specializing in on-device ML deployment and signal processing.'
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
        name: 'Raquib Ul Alam',
        jobTitle: 'Senior Android Engineer',
        description: 'Senior Android Engineer with specialization in on-device deployment of machine learning and signal processing models',
        url: 'https://alamkanak.github.io',
        sameAs: [
          'https://github.com/alamkanak',
          'https://stackoverflow.com/users/1113765/raquib-ul-alam',
          'https://www.linkedin.com/in/alamkanak/',
          'https://dribbble.com/kanak'
        ],
        knowsAbout: [
          'Android Development',
          'Machine Learning',
          'Signal Processing',
          'Computer Vision',
          'TensorFlow',
          'Medical Image Processing'
        ]
      })
    }
  ]
})
</script>
