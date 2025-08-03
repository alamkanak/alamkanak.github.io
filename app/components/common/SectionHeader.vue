<template>
  <div class="mb-8 text-center">
    <h2 class="text-2xl font-semibold text-highlighted mb-2">
      {{ title }}
    </h2>
    <p v-if="subtitle" class="text-muted">
      {{ subtitle }}
    </p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  subtitle?: string
}

defineProps<Props>()
</script>
