<script setup lang="ts">
interface Props {
  title?: string
}

const { title = 'NOTE' } = defineProps<Props>()
</script>

<template>
  <UAlert
    color="info"
    icon="material-symbols:info-outline"
    variant="soft"
    class="my-6"
  >
    <template #title>
      <span class="font-semibold">{{ title }}</span>
    </template>
    <template #description>
      <div class="prose prose-sm max-w-none">
        <slot />
      </div>
    </template>
  </UAlert>
</template>
