<script setup lang="ts">
interface ProjectNavigationItem {
  path: string
  title: string
  description?: string
  thumbnail?: string
}

interface Props {
  surround: (ProjectNavigationItem | null)[]
}

const props = defineProps<Props>()

const prevProject = computed(() => props.surround[0])
const nextProject = computed(() => props.surround[1])
</script>

<template>
  <div class="border-t border-default pt-12">
    <div class="flex flex-col lg:flex-row justify-between gap-8">
      <!-- Previous Project -->
      <div v-if="prevProject" class="flex-1">
        <ULink 
          :to="prevProject.path"
          class="group block linear-card p-6 hover:bg-muted transition-all duration-300 hover:shadow-md"
        >
          <div class="flex items-center gap-4">
            <div class="flex-shrink-0">
              <UIcon 
                name="mingcute:arrow-left-fill" 
                size="1.25em"
                class="text-muted group-hover:text-primary transition-colors"
              />
            </div>
            <div class="min-w-0 flex-1">
              <p class="text-sm text-muted font-medium mb-1">Previous Project</p>
              <h3 class="text-lg font-semibold text-highlighted group-hover:text-primary transition-colors line-clamp-1">
                {{ prevProject.title }}
              </h3>
              <p v-if="prevProject.description" class="text-sm text-toned line-clamp-1 mt-1">
                {{ prevProject.description }}
              </p>
            </div>
            <div v-if="prevProject.thumbnail" class="flex-shrink-0 hidden sm:block">
              <NuxtImg
                :src="prevProject.thumbnail"
                :alt="prevProject.title"
                class="w-16 h-16 rounded-lg object-cover"
                loading="lazy"
                format="webp"
                quality="75"
              />
            </div>
          </div>
        </ULink>
      </div>

      <!-- Spacer when only one project exists -->
      <div v-else-if="nextProject" class="flex-1 hidden lg:block" />

      <!-- Next Project -->
      <div v-if="nextProject" class="flex-1">
        <ULink 
          :to="nextProject.path"
          class="group block linear-card p-6 hover:bg-muted transition-all duration-300 hover:shadow-md"
        >
          <div class="flex items-center gap-4">
            <div v-if="nextProject.thumbnail" class="flex-shrink-0 hidden sm:block">
              <NuxtImg
                :src="nextProject.thumbnail"
                :alt="nextProject.title"
                class="w-16 h-16 rounded-lg object-cover"
                loading="lazy"
                format="webp"
                quality="75"
              />
            </div>
            <div class="min-w-0 flex-1 text-right">
              <p class="text-sm text-muted font-medium mb-1">Next Project</p>
              <h3 class="text-lg font-semibold text-highlighted group-hover:text-primary transition-colors line-clamp-1">
                {{ nextProject.title }}
              </h3>
              <p v-if="nextProject.description" class="text-sm text-toned line-clamp-1 mt-1">
                {{ nextProject.description }}
              </p>
            </div>
            <div class="flex-shrink-0">
              <UIcon 
                name="mingcute:arrow-right-fill" 
                size="1.25em"
                class="text-muted group-hover:text-primary transition-colors"
              />
            </div>
          </div>
        </ULink>
      </div>

      <!-- Spacer when only previous project exists -->
      <div v-else-if="prevProject" class="flex-1 hidden lg:block" />
    </div>

    <!-- Return to portfolio -->
    <div class="mt-12 text-center">
      <UButton
        to="/"
        color="neutral"
        variant="outline"
        icon="si:grid-line"
        size="lg"
        class="font-medium"
      >
        View All Projects
      </UButton>
    </div>
  </div>
</template>

<style>
.line-clamp-1 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  overflow: hidden;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  overflow: hidden;
}
</style>
