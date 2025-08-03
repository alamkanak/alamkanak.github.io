<template>
  <section class="mb-12 lg:mb-16">
    <CommonSectionHeader title="Projects" />
    
    <!-- Filter -->
    <CommonProjectFilter
      :filters="filters"
      :active-filter="activeFilter"
      @filter-change="handleFilterChange"
    />

    <!-- Project Grid -->
    <CommonProjectGrid
      :projects="filteredProjects"
      :pending="pending"
    />
  </section>
</template>

<script setup lang="ts">
interface Project {
  path: string
  title: string
  description: string
  thumbnail?: string
  tags?: string[]
}

// Fetch projects dynamically from Nuxt Content
const { data: projects, pending } = await useAsyncData('projects', () => {
  return queryCollection('project')
    .order('date', 'DESC')
    .all()
})

// Router for URL management
const route = useRoute()

// Initialize filter state from URL query parameter using useState for SSR compatibility
const activeFilter = useState<string | null>('projects-active-filter', () => {
  // Only access route.query on client side to prevent hydration mismatch
  if (import.meta.client) {
    return (route.query.tag as string) || null
  }
  return null
})

// Sync activeFilter with URL query on client-side after hydration
onMounted(() => {
  // Initialize from URL on client side
  activeFilter.value = (route.query.tag as string) || null
})

// Define custom order for tags
const tagOrder = [
  'Machine Learning',
  'Android Development',
  'Web Development',
  'UX Design',
  'Drawing'
]

// Compute unique tags from all projects with custom ordering
const allTags = computed(() => {
  if (!projects.value) return []
  
  const tagSet = new Set<string>()
  projects.value.forEach((project: Project) => {
    if (project.tags) {
      project.tags.forEach(tag => tagSet.add(tag))
    }
  })
  
  const availableTags = Array.from(tagSet)
  
  // Sort tags based on custom order, putting ordered tags first
  return availableTags.sort((a, b) => {
    const aIndex = tagOrder.indexOf(a)
    const bIndex = tagOrder.indexOf(b)
    
    // If both tags are in the custom order, sort by their position
    if (aIndex !== -1 && bIndex !== -1) {
      return aIndex - bIndex
    }
    
    // If only 'a' is in custom order, it comes first
    if (aIndex !== -1) return -1
    
    // If only 'b' is in custom order, it comes first
    if (bIndex !== -1) return 1
    
    // If neither is in custom order, sort alphabetically
    return a.localeCompare(b)
  })
})

// Compute filters with counts (dynamic based on current search)
const filters = computed(() => {
  const projectCount = projects.value?.length || 0

  const baseFilters = [
    {
      label: 'All',
      value: null,
      icon: 'mynaui:grid',
      count: projectCount
    }
  ]
  
  const tagFilters = allTags.value.map(tag => {
    const count = projects.value?.filter(project => 
      project.tags?.includes(tag)
    ).length || 0
    
    // Map tag names to appropriate icons
    const iconMap: Record<string, string> = {
      'Android Development': 'material-symbols:android',
      'Web Development': 'carbon:web-services-container',
      'Machine Learning': 'carbon:machine-learning-model',
      'UX Design': 'mdi:art',
      'Drawing': 'carbon:draw',
    }
    
    return {
      label: tag,
      value: tag,
      icon: iconMap[tag] || 'carbon:tag',
      count
    }
  }).filter(filter => filter.count > 0) // Only show tags that have projects
  
  return [...baseFilters, ...tagFilters]
})

// Compute filtered projects with smooth animation
const filteredProjects = computed(() => {
  if (!projects.value) return null
  
  let filtered = projects.value
  
  // Apply tag filter
  if (activeFilter.value) {
    filtered = filtered.filter((project: Project) => 
      project.tags?.includes(activeFilter.value!)
    )
  }
  
  return filtered
})

// Handle filter changes and update URL
const handleFilterChange = async (filterValue: string | null) => {
  activeFilter.value = filterValue
  
  // Update URL query parameter using navigateTo for better SSR compatibility
  const query = { ...route.query }
  
  if (filterValue) {
    query.tag = filterValue
  } else {
    delete query.tag
  }
  
  // Update the URL without triggering a page reload
  await navigateTo({ 
    path: route.path, 
    query 
  }, { replace: true })
}

// Watch for URL changes (browser back/forward navigation)
watch(
  () => route.query.tag,
  (newTag) => {
    activeFilter.value = (newTag as string) || null
  }
)

// Validate that the initial tag from URL exists in available tags
watchEffect(() => {
  if (activeFilter.value && allTags.value.length > 0) {
    if (!allTags.value.includes(activeFilter.value)) {
      // If the tag from URL doesn't exist, reset to null and update URL
      activeFilter.value = null
      if (import.meta.client) {
        const query = { ...route.query }
        delete query.tag
        navigateTo({ path: route.path, query }, { replace: true })
      }
    }
  }
})
</script>
