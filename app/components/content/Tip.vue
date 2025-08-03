<script setup lang="ts">
interface Props {
  type?: 'info' | 'warning' | 'success' | 'error',
  title?: string
}

const props = withDefaults(defineProps<Props>(), {
  type: 'success',
  title: 'HIGHLIGHTS'
})

const alertConfig = computed(() => {
  switch (props.type) {
    case 'warning':
      return {
        color: 'warning' as const,
        icon: 'mdi:alert-outline',
      }
    case 'success':
      return {
        color: 'success' as const,
        icon: 'akar-icons:light-bulb',
      }
    case 'error':
      return {
        color: 'error' as const,
        icon: 'mdi:alert-circle-outline',
      }
    default:
      return {
        color: 'info' as const,
        icon: 'material-symbols:info-outline',
      }
  }
})
</script>

<template>
  <UAlert
    :color="alertConfig.color"
    variant="soft"
    class="my-6"
  >
    <template #title>
      <span class="font-semibold">{{ title }}</span>
    </template>
    <template #description>
      <div class="prose prose-sm max-w-none mt-3">
        <slot />
      </div>
    </template>
  </UAlert>
</template>

<style>
.prose ul {
  margin-bottom: 0rem;
  padding-left: 0rem;
  list-style: none;
  position: relative;
}

.prose p {
  margin-bottom: 0.5rem;
}
</style>