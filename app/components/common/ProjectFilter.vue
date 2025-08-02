<template>
  <div class="mb-8 space-y-4">

    <!-- Filter Tags -->
    <div class="flex flex-wrap gap-2 justify-center md:justify-start">
      <UButton
        v-for="filter in filters"
        :key="filter.value || 'all'"
        :label="filter.label"
        :variant="activeFilter === filter.value ? 'solid' : 'ghost'"
        :color="activeFilter === filter.value ? 'primary' : 'neutral'"
        class="transition-all duration-200 cursor-pointer"
        @click="$emit('filterChange', filter.value)"
      >
        <template v-if="filter.icon" #leading>
          <Icon :name="filter.icon" size="1.3em" />
        </template>
        {{ filter.label }}
        <template v-if="filter.count !== undefined" #trailing>
          <UBadge
            :label="filter.count.toString()"
            size="sm"
            :color="activeFilter === filter.value ? 'primary' : 'neutral'"
            :variant="activeFilter === filter.value ? 'solid' : 'soft'"
          />
        </template>
      </UButton>
    </div>

  </div>
</template>

<script setup lang="ts">
interface Filter {
  label: string
  value: string | null
  icon?: string
  count?: number
}

interface Props {
  filters: Filter[]
  activeFilter: string | null
}

defineProps<Props>()

defineEmits<{
  filterChange: [value: string | null]
}>()
</script>
