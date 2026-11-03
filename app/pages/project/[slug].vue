<script setup lang="ts">
import { serializeJsonLd, site } from '~~/shared/utils/site'

const route = useRoute()
const router = useRouter()
const slug = route.params.slug as string

const { data } = await useAsyncData(route.path, () => Promise.all([
  queryCollection('project').path(`/project/${slug}`).first(),
  queryCollectionItemSurroundings('project', `/project/${slug}`, {
    fields: ['title', 'description', 'thumbnail'],
  }).order('date', 'DESC'),
]), {
  transform: ([page, surround]) => ({ page, surround }),
})

const page = computed(() => data.value?.page)
const surround = computed(() => data.value?.surround)

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Project not found' })
}

const { canonical, image } = useSiteSeo({
  title: () => `${page.value?.title} | ${site.name}`,
  description: () => page.value?.description || site.description,
  image: () => page.value?.thumbnail,
  imageAlt: () => page.value?.title || site.imageAlt,
})

useHead(() => ({
  script: [{
    key: 'page-schema',
    type: 'application/ld+json',
    innerHTML: serializeJsonLd({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': `${canonical.value}#page`,
          url: canonical.value,
          name: page.value?.title,
          description: page.value?.description,
          inLanguage: page.value?.lang || 'en',
          isPartOf: { '@id': `${site.url}#website` },
          breadcrumb: { '@id': `${canonical.value}#breadcrumbs` },
          mainEntity: { '@id': `${canonical.value}#project` },
        },
        {
          '@type': 'CreativeWork',
          '@id': `${canonical.value}#project`,
          name: page.value?.title,
          description: page.value?.description,
          url: canonical.value,
          image: image.value,
          dateCreated: page.value?.date,
          keywords: page.value?.tags,
          creator: { '@type': 'Person', '@id': `${site.url}#person`, name: site.name, url: site.url },
        },
        {
          '@type': 'BreadcrumbList',
          '@id': `${canonical.value}#breadcrumbs`,
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Portfolio', item: site.url },
            { '@type': 'ListItem', position: 2, name: page.value?.title, item: canonical.value },
          ],
        },
      ],
    }),
  }],
}))

// Back navigation function that preserves scroll position
const goBack = () => {
  // Check if there's a previous page in history
  if (window.history.length > 1) {
    router.back()
  } else {
    // Fallback to home page if no history
    router.push('/')
  }
}

// const formattedDate = computed(() => {
//   if (!page.value) return ''
//   return new Intl.DateTimeFormat('en-US', {
//     year: 'numeric',
//     month: 'long',
//   }).format(new Date(page.value.date))
// })

</script>

<template>
  <div class="min-h-screen bg-default">
    <UContainer class="py-8 lg:py-12">
      <!-- Back Navigation -->
      <div class="mb-8">
        <UButton 
          color="neutral" 
          variant="ghost" 
          icon="mingcute:arrow-left-fill"
          class="hover:bg-muted transition-colors cursor-pointer"
          @click="goBack"
        >
          Back to Portfolio
        </UButton>
      </div>

      <!-- Header -->
      <div v-if="page" class="space-y-4 mb-10">
        
        <!-- Title and Date -->
        <div class="space-y-4">
          <!-- <div class="flex items-center gap-3 text-muted">
            <UIcon name="uil:calender" size="1.25em" />
            <span class="text-sm font-medium">{{ formattedDate }}</span>
          </div> -->
          
          <h1 class="text-4xl lg:text-5xl font-bold text-highlighted leading-tight">
            {{ page.title }}
          </h1>
          
          <p class="text-lg text-toned leading-relaxed">
            {{ page.description }}
          </p>
        </div>

        <!-- Tags -->
        <div v-if="page.tags && page.tags.length > 0" class="flex flex-wrap gap-2">
          <UBadge
            v-for="tag in page.tags"
            :key="tag"
            :label="tag"
            color="primary"
            variant="soft"
            size="lg"
          />
        </div>

      </div>

      <!-- Mobile: Stack vertically, Desktop: Side by side -->
      <div class="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">

        <!-- Project Content -->
        <div class="w-full lg:flex-1 order-2 lg:order-1">
          <ProjectContent 
            v-if="page"
            :content="page"
          />
        </div>

        <!-- Project Sidebar -->
        <ProjectSidebar
          v-if="page"
          :title="page.title"
          :description="page.description"
          :thumbnail="page.thumbnail"
          :tags="page.tags"
          :links="page.links"
          :info="page.info"
          :date="new Date(page.date)"
          class="w-full lg:w-80 lg:flex-shrink-0 order-1 lg:order-2"
        />
      </div>

      <!-- Navigation between projects -->
      <ProjectNavigation 
        v-if="surround"
        :surround="surround"
        class="mt-16"
      />
    </UContainer>
  </div>
</template>
