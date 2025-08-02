<template>
  <div class="bg-default min-h-screen">
    <div class="container mx-auto px-4 py-8 lg:py-12 max-w-4xl">
      <div v-if="pending" class="animate-pulse">
        <div class="bg-muted h-8 w-3/4 rounded mb-4" />
        <div class="bg-muted h-4 w-1/2 rounded mb-8" />
        <div class="bg-muted h-64 rounded mb-8" />
        <div class="space-y-4">
          <div class="bg-muted h-4 rounded" />
          <div class="bg-muted h-4 rounded" />
          <div class="bg-muted h-4 w-3/4 rounded" />
        </div>
      </div>

      <div v-else-if="project">
        <!-- Back Navigation -->
        <div class="mb-8">
          <UButton
            to="/"
            variant="ghost"
            color="neutral"
            size="sm"
            class="linear-button-ghost"
          >
            <template #leading>
              <Icon name="mdi:arrow-left" size="1.2em" />
            </template>
            Back to Home
          </UButton>
        </div>

        <!-- Project Header -->
        <header class="mb-8">
          <h1 class="text-3xl lg:text-4xl font-bold text-highlighted mb-4">
            {{ project.title }}
          </h1>
          
          <div class="flex flex-wrap items-center gap-4 mb-6">
            <div v-if="project.tags" class="flex flex-wrap gap-2">
              <UBadge
                v-for="tag in project.tags"
                :key="tag"
                variant="soft"
                color="primary"
                size="sm"
              >
                {{ tag }}
              </UBadge>
            </div>
            
            <div v-if="project.date" class="text-muted text-sm">
              {{ formatDate(project.date) }}
            </div>
          </div>

          <p class="text-lg text-default leading-relaxed mb-6">
            {{ project.description }}
          </p>

          <!-- Links -->
          <div v-if="project.links" class="flex flex-wrap gap-3">
            <UButton
              v-for="link in project.links"
              :key="link.url"
              :to="link.url"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              color="primary"
              size="md"
            >
              <template v-if="link.icon" #leading>
                <Icon :name="getIconName(link.icon)" size="1.2em" />
              </template>
              {{ link.text }}
            </UButton>
          </div>
        </header>

        <!-- Project Content -->
        <div class="prose prose-neutral dark:prose-invert max-w-none">
          <div v-if="project.body">
            <p v-for="(child, index) in project.body.children" :key="index">
              {{ child.children.join(' ') }}
            </p>
          </div>
          <div v-else>
            <p>{{ project.description }}</p>
          </div>
        </div>
      </div>

      <div v-else class="text-center py-12">
        <Icon name="mdi:file-document-remove" size="3em" class="text-dimmed mx-auto mb-4" />
        <h1 class="text-2xl font-semibold text-highlighted mb-2">Project Not Found</h1>
        <p class="text-muted mb-6">The project you're looking for doesn't exist.</p>
        <UButton to="/" variant="solid" color="primary">
          Go Back Home
        </UButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface ProjectData {
  _path: string
  title: string
  description: string
  thumbnail?: string
  tags?: string[]
  date: string
  links?: Array<{
    url: string
    text: string
    icon?: string[]
  }>
  info?: Array<{
    key: string
    value: string | string[]
  }>
  body?: {
    children: Array<{
      type: string
      tag: string
      children: string[]
    }>
  }
}

const route = useRoute()

// Mock project data - replace with actual content when ready
const mockProjects: Record<string, ProjectData> = {
  'android-week-view': {
    _path: '/project/android-week-view',
    title: 'Android Week View',
    description: 'An android library to render calendars (week view or day view).',
    thumbnail: '/android-week-view-thumb.svg',
    tags: ['Android Development', 'UX Design'],
    date: '2020-08-01',
    links: [
      {
        url: 'https://github.com/alamkanak/Android-Week-View',
        text: 'View on Github',
        icon: ['fab', 'github']
      }
    ],
    body: {
      children: [
        {
          type: 'element',
          tag: 'p',
          children: ['Android Week View is an android library to display calendars (week view or day view) within the app. It supports custom styling.']
        }
      ]
    }
  }
}

const project = ref<ProjectData | null>(
  route.params.slug ? mockProjects[route.params.slug as string] || null : null
)
const pending = ref(false)

// Helper function to format date
const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// Helper function to get icon name from array
const getIconName = (iconArray: string[]) => {
  if (!iconArray || iconArray.length === 0) return 'mdi:link'
  if (iconArray.length === 2 && iconArray[0] === 'fab') {
    return `mdi:${iconArray[1]}`
  }
  return iconArray.join(':')
}

// SEO
useHead(() => ({
  title: project.value ? `${project.value.title} - Raquib Ul Alam` : 'Project Not Found',
  meta: [
    {
      name: 'description',
      content: project.value?.description || 'Project details by Raquib Ul Alam'
    },
    {
      property: 'og:title',
      content: project.value ? `${project.value.title} - Raquib Ul Alam` : 'Project Not Found'
    },
    {
      property: 'og:description',
      content: project.value?.description || 'Project details by Raquib Ul Alam'
    }
  ]
}))
</script>
