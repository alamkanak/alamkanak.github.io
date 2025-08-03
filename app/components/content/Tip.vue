<script setup lang="ts">
interface Props {
  type?: 'info' | 'warning' | 'success' | 'error'
}

const props = withDefaults(defineProps<Props>(), {
  type: 'success'
})

const alertConfig = computed(() => {
  switch (props.type) {
    case 'warning':
      return {
        color: 'warning' as const,
        icon: 'mdi:alert-outline',
        title: 'HIGHLIGHTS'
      }
    case 'success':
      return {
        color: 'success' as const,
        icon: 'akar-icons:light-bulb',
        title: 'HIGHLIGHTS'
      }
    case 'error':
      return {
        color: 'error' as const,
        icon: 'mdi:alert-circle-outline',
        title: 'ERROR'
      }
    default:
      return {
        color: 'info' as const,
        icon: 'material-symbols:info-outline',
        title: 'INFO'
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
      <span class="font-semibold">{{ alertConfig.title }}</span>
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
</style>