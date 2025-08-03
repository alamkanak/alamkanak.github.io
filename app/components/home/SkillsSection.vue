<template>
  <section class="mb-12 lg:mb-16">
    <CommonSectionHeader 
      :title="skillsData?.title || 'Skills'"
      :subtitle="skillsData?.subtitle || 'Loading...'"
    />
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="skill in skillsData?.skills"
        :key="skill.name"
        class="linear-card p-6 hover:bg-elevated transition-colors duration-200"
      >
        <h3 class="text-lg font-semibold text-highlighted mb-2">
          {{ skill.name }}
        </h3>
        <p class="text-muted text-sm">
          {{ skill.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Fetch skills data from Nuxt Content
const { data: skillsData } = await useAsyncData('skills', () => {
  return queryCollection('skills').first()
})
</script>
