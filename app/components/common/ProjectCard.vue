<template>
  <NuxtLink
    :to="project.path"
    class="group linear-card hover:bg-elevated transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer block"
  >
    <!-- Thumbnail -->
    <div v-if="project.thumbnail" class="overflow-hidden rounded-t-md bg-muted aspect-square">
      <NuxtImg
        :src="project.thumbnail"
        :alt="project.title"
        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        loading="lazy"
      />
    </div>
    <div 
      v-else 
      class="aspect-square bg-muted rounded-t-md flex items-center justify-center group-hover:bg-accented transition-colors duration-300"
    >
      <Icon name="carbon:image" size="2em" class="text-dimmed group-hover:text-muted transition-colors duration-300" />
    </div>
    
    <div class="px-4 pt-3 pb-4">
      <!-- Content -->
      <h3 class="text-lg font-semibold text-highlighted mb-2 group-hover:text-primary transition-colors duration-300">
        {{ project.title }}
      </h3>
      
      <p class="text-muted text-sm mb-4 line-clamp-3 group-hover:text-toned transition-colors duration-300">
        {{ project.description }}
      </p>

      <!-- Tags -->
      <div v-if="project.tags && project.tags.length > 0" class="flex flex-wrap gap-2">
        <UBadge
          v-for="tag in project.tags.slice(0, maxTags)"
          :key="tag"
          variant="soft"
          color="neutral"
          size="sm"
          class="group-hover:scale-105 transition-transform duration-200"
        >
          {{ tag }}
        </UBadge>
        <UBadge
          v-if="project.tags.length > maxTags"
          variant="soft"
          color="neutral"
          size="sm"
          class="group-hover:scale-105 transition-transform duration-200"
        >
          +{{ project.tags.length - maxTags }}
        </UBadge>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
interface Project {
  path: string
  title: string
  description: string
  thumbnail?: string
  tags?: string[]
}

interface Props {
  project: Project
  maxTags?: number
}

withDefaults(defineProps<Props>(), {
  maxTags: 3
})
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
