<template>
  <div class="bg-default min-h-screen flex items-center justify-center">
    <div class="text-center mx-auto px-4">
      <Icon name="mdi:alert-circle-outline" size="4em" class="text-warning mx-auto mb-6" />
      
      <h1 class="text-3xl font-bold text-highlighted mb-4">
        {{ error.statusCode === 404 ? 'Page Not Found' : 'Something went wrong' }}
      </h1>
      
      <p class="text-muted mb-8">
        {{ error.statusCode === 404 
          ? "The page you're looking for doesn't exist." 
          : 'An unexpected error occurred. Please try again later.' 
        }}
      </p>
      
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <UButton
          to="/"
          variant="solid"
          color="primary"
          size="lg"
        >
          <template #leading>
            <Icon name="mdi:home" size="1.2em" />
          </template>
          Go Home
        </UButton>
        
        <UButton
          variant="outline"
          color="neutral"
          size="lg"
          @click="refresh"
        >
          <template #leading>
            <Icon name="mdi:refresh" size="1.2em" />
          </template>
          Try Again
        </UButton>
      </div>
      
      <div v-if="error.statusCode !== 404" class="mt-8 p-4 bg-elevated rounded-lg text-left">
        <details>
          <summary class="cursor-pointer text-sm text-muted hover:text-default">
            Error Details
          </summary>
          <pre class="mt-2 text-xs text-dimmed overflow-auto">{{ error.stack || error.message || 'No additional details available' }}</pre>
        </details>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface NuxtError {
  statusCode: number
  statusMessage?: string
  message?: string
  stack?: string
}

interface Props {
  error: NuxtError
}

const props = defineProps<Props>()

// Refresh function to reload the page
const refresh = () => {
  window.location.reload()
}

// SEO
useHead({
  title: `Error ${props.error.statusCode} - Raquib Ul Alam`,
  meta: [
    {
      name: 'robots',
      content: 'noindex'
    }
  ]
})
</script>
