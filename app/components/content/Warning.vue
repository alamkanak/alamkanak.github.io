<script setup lang="ts">
interface Props {
  title?: string
}

const { title = 'WARNING' } = defineProps<Props>()
</script>

<template>
  <UAlert
    color="warning"
    icon="mdi:alert-outline"
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
