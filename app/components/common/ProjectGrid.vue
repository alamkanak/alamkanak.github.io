<template>
  <div>
    <!-- Loading state -->
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

    <!-- Projects grid with smooth transitions -->
    <TransitionGroup
      v-else-if="projects && projects.length > 0"
      name="project-list"
      tag="div"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      appear
    >
      <NuxtLink
        v-for="(project, index) in projects"
        :key="project.path"
        :to="project.path"
        class="group linear-card hover:bg-elevated transition-all duration-300 hover:shadow-lg cursor-pointer"
        :style="{ animationDelay: `${index * 80}ms` }"
      >
        <!-- Thumbnail -->
        <div v-if="project.thumbnail" class="overflow-hidden rounded-t-md bg-muted aspect-square">
          <NuxtImg
            :src="project.thumbnail"
            :alt="project.title"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>
        <div v-else class="mb-4 bg-muted rounded-md flex items-center justify-center aspect-square group-hover:bg-accented transition-colors duration-300">
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
              v-for="tag in project.tags.slice(0, 3)"
              :key="tag"
              variant="soft"
              color="neutral"
              size="sm"
              class="transition-transform duration-200"
            >
              {{ tag }}
            </UBadge>
            <UBadge
              v-if="project.tags.length > 3"
              variant="soft"
              color="neutral"
              size="sm"
              class="transition-transform duration-200"
            >
              +{{ project.tags.length - 3 }}
            </UBadge>
          </div>
        </div>
      </NuxtLink>
    </TransitionGroup>

    <!-- Empty state -->
    <div v-else class="text-center py-16">
      <div class="linear-animate-fade-in">
        <Icon name="carbon:folder-open" size="3em" class="text-dimmed mx-auto mb-4" />
        <p class="text-muted text-lg">No projects found.</p>
        <p class="text-dimmed text-sm mt-2">Try adjusting your search or filter criteria.</p>
      </div>
    </div>
  </div>
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
  projects: Project[] | null
  pending: boolean
}

defineProps<Props>()
</script>

<style scoped>
.project-list-move,
.project-list-enter-active,
.project-list-leave-active {
  transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1);
}

.project-list-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.95);
}

.project-list-leave-to {
  opacity: 0;
  transform: translateY(-10px) scale(0.95);
}

.project-list-leave-active {
  position: absolute;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
