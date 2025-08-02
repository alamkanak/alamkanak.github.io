<template>
  <section class="mb-12 lg:mb-16">
    <CommonSectionHeader title="Projects" />
    
    <div v-if="pending" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="i in 6"
        :key="i"
        class="linear-card p-6 animate-pulse"
      >
        <div class="bg-muted rounded-md mb-4 aspect-square" />
        <div class="bg-muted h-4 rounded mb-2" />
        <div class="bg-muted h-3 rounded mb-4" />
        <div class="flex gap-2">
          <div class="bg-muted h-6 w-16 rounded" />
          <div class="bg-muted h-6 w-20 rounded" />
        </div>
      </div>
    </div>

    <div v-else-if="projects && projects.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <NuxtLink
        v-for="project in projects"
        :key="project.path"
        :to="project.path"
        class="group linear-card hover:bg-elevated transition-all duration-200 hover:shadow-md"
      >
        <!-- Thumbnail -->
        <div v-if="project.thumbnail" class="overflow-hidden rounded-t-md bg-muted aspect-square">
          <NuxtImg
            :src="project.thumbnail"
            :alt="project.title"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
            loading="lazy"
          />
        </div>
        <div v-else class="mb-4 bg-muted rounded-md flex items-center justify-center aspect-square">
          <Icon name="mdi:image" size="2em" class="text-dimmed" />
        </div>
        <div class="px-4 pt-3 pb-4">
          <!-- Content -->
          <h3 class="text-lg font-semibold text-highlighted mb-2 group-hover:text-primary transition-colors">
            {{ project.title }}
          </h3>
          
          <p class="text-muted text-sm mb-4 line-clamp-3">
            {{ project.description }}
          </p>

          <!-- Tags -->
          <div v-if="project.tags && project.tags.length > 0" class="flex flex-wrap gap-2">
            <UBadge
              v-for="tag in project.tags.slice(0, 3)"
              :key="tag"
              variant="soft"
              color="neutral"
              size="sm"
            >
              {{ tag }}
            </UBadge>
            <UBadge
              v-if="project.tags.length > 3"
              variant="soft"
              color="neutral"
              size="sm"
            >
              +{{ project.tags.length - 3 }}
            </UBadge>
          </div>
        </div>
      </NuxtLink>
    </div>

    <div v-else class="text-center py-12">
      <Icon name="mdi:folder-open" size="3em" class="text-dimmed mx-auto mb-4" />
      <p class="text-muted">No projects found.</p>
    </div>
  </section>
</template>

<script setup lang="ts">
// Fetch projects dynamically from Nuxt Content
const { data: projects, pending } = await useAsyncData('projects', () => {
  return queryCollection('project')
    .order('date', 'DESC')
    .all()
})
</script>
