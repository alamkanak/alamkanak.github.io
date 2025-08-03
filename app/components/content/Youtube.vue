<script setup lang="ts">
interface Props {
  src: string
  title?: string
}

const props = defineProps<Props>()

const videoId = computed(() => {
  const regex = /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/
  const match = props.src.match(regex)
  return match ? match[1] : null
})

const embedUrl = computed(() => {
  if (!videoId.value) return null
  return `https://www.youtube.com/embed/${videoId.value}`
})
</script>

<template>
  <div v-if="embedUrl" class="my-8">
    <div v-if="title" class="mb-4">
      <h3 class="text-lg font-semibold text-highlighted">{{ title }}</h3>
    </div>
    <div class="relative w-full" style="padding-bottom: 56.25%;">
      <iframe
        :src="embedUrl"
        :title="title || 'YouTube video'"
        class="absolute top-0 left-0 w-full h-full rounded-lg"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
  </div>
</template>
