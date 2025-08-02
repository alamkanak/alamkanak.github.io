<template>
  <section class="mb-12 lg:mb-16">
    <CommonSectionHeader title="Projects" />
    
    <div v-if="pending" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="i in 6"
        :key="i"
        class="linear-card p-6 animate-pulse"
      >
        <div class="bg-muted h-48 rounded-md mb-4" />
        <div class="bg-muted h-4 rounded mb-2" />
        <div class="bg-muted h-3 rounded mb-4" />
        <div class="flex gap-2">
          <div class="bg-muted h-6 w-16 rounded" />
          <div class="bg-muted h-6 w-20 rounded" />
        </div>
      </div>
    </div>

    <div v-else-if="projects && projects.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <NuxtLink
        v-for="project in projects"
        :key="project._path"
        :to="project._path"
        class="group linear-card p-6 hover:bg-elevated transition-all duration-200 hover:shadow-md"
      >
        <!-- Thumbnail -->
        <div v-if="project.thumbnail" class="mb-4 overflow-hidden rounded-md bg-muted">
          <NuxtImg
            :src="project.thumbnail"
            :alt="project.title"
            class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
            loading="lazy"
          />
        </div>
        <div v-else class="mb-4 h-48 bg-muted rounded-md flex items-center justify-center">
          <Icon name="mdi:image" size="2em" class="text-dimmed" />
        </div>

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
      </NuxtLink>
    </div>

    <div v-else class="text-center py-12">
      <Icon name="mdi:folder-open" size="3em" class="text-dimmed mx-auto mb-4" />
      <p class="text-muted">No projects found.</p>
    </div>
  </section>
</template>

<script setup lang="ts">
interface ProjectData {
  _path: string
  title: string
  description: string
  thumbnail?: string
  tags?: string[]
  date: string
}

// Mock projects data for now - replace with actual content when API is working
const projects = ref<ProjectData[]>([
  {
    _path: '/project/android-week-view',
    title: 'Android Week View',
    description: 'An android library to render calendars (week view or day view).',
    thumbnail: '/android-week-view-thumb.png',
    tags: ['Android Development', 'UX Design'],
    date: '2020-08-01'
  },
  {
    _path: '/project/android-libs',
    title: 'Android Libraries',
    description: 'Collection of useful Android libraries and utilities.',
    tags: ['Android Development', 'Library'],
    date: '2019-06-15'
  },
  {
    _path: '/project/thesis',
    title: 'Research Thesis',
    description: 'Medical image and signal processing research.',
    tags: ['Machine Learning', 'Research'],
    date: '2021-12-01'
  }
])

const pending = ref(false)
</script>
