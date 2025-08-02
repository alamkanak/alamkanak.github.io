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

// Filter state
const activeFilter = ref<string | null>(null)

// Compute unique tags from all projects
const allTags = computed(() => {
  if (!projects.value) return []
  
  const tagSet = new Set<string>()
  projects.value.forEach((project: Project) => {
    if (project.tags) {
      project.tags.forEach(tag => tagSet.add(tag))
    }
  })
  
  return Array.from(tagSet).sort()
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
      'iOS Development': 'logos:apple',
      'Mobile Development': 'carbon:mobile',
      'AI': 'carbon:ai-results',
      'Data Science': 'carbon:data-analytics'
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

// Handle filter changes
const handleFilterChange = (filterValue: string | null) => {
  activeFilter.value = filterValue
}
</script>
