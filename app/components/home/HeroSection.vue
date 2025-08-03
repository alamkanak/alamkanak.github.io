<template>
  <section class="mb-12 lg:mb-16 flex flex-col items-center gap-8">
    <NuxtImg
      :src="profileData?.avatar?.src || '/avatar.jpg'" 
      :alt="profileData?.avatar?.alt || 'Profile picture'" 
      :width="profileData?.avatar?.width || 150" 
      :height="profileData?.avatar?.height || 150"
      class="rounded-full" />

    <h1 class="text-3xl lg:text-4xl font-bold text-highlighted">
      {{ profileData?.bio?.greeting || "" }}
    </h1>
    <p class="text-lg text-default leading-relaxed text-center">
      {{ profileData?.bio?.description || "Loading..." }}
    </p>

  </section>
</template>

<script setup lang="ts">
// Fetch profile data from Nuxt Content using shared composable
const { data: profileData } = useProfile()
</script>
