<script setup lang="ts">


interface ProjectInfo {
  key: string
  value: string | string[]
}

interface ProjectLink {
  url: string
  text: string
  icon: string
}

interface Props {
  info?: ProjectInfo[],
  links?: ProjectLink[]
}
defineProps<Props>()

</script>

<template>
  <div class="linear-card-elevated p-4 rounded-2xl">
    
    <!-- Project Info -->
    <div v-if="info && info.length > 0" class="space-y-4">

      <!-- Action Links -->
      <div v-if="links && links.length > 0" class="flex flex-col gap-3">
        <UButton
          v-for="link in links"
          :key="link.url"
          :to="link.url"
          target="_blank"
          rel="noopener noreferrer"
          color="primary"
          variant="solid"
          :icon="link.icon"
          size="lg"
          class="w-full flex justify-center items-center"
        >
          {{ link.text }}
        </UButton>
      </div>

      <div class="grid gap-4">
        <div
          v-for="item in info"
          :key="item.key"
          class="flex flex-col gap-2 p-4 bg-muted rounded-lg"
        >
          <dt class="text-xs font-bold min-w-32 uppercase text-muted">
            {{ item.key }}
          </dt>
          <dd class="text-sm text-default">
            <template v-if="Array.isArray(item.value)">
              <div class="flex flex-wrap gap-2">
                <UBadge
                  v-for="val in item.value"
                  :key="val"
                  :label="val"
                  color="neutral"
                  variant="subtle"
                  size="md"
                />
              </div>
            </template>
            <template v-else>
              {{ item.value }}
            </template>
          </dd>
        </div>
      </div>
    </div>

  </div>
</template>
