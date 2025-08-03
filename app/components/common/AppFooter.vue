<template>
  <footer class="bg-default border-t border-default">
    <UContainer class="pt-8 mb-10">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6">
        <!-- Social Links -->
        <div class="flex items-center gap-4">
          <span class="text-muted text-sm font-medium">Connect with me:</span>
          <div class="flex items-center gap-3">
            <UButton
              v-for="social in socialLinks"
              :key="social.platform"
              :to="social.url"
              target="_blank"
              color="neutral"
              variant="ghost"
              :icon="social.icon"
              size="md"
              class="hover:bg-muted transition-colors p-2"
            />
          </div>
        </div>

        <!-- Fork Button -->
        <div class="flex items-center gap-4">
          <span class="text-muted text-sm font-medium hidden md:block">Like this portfolio?</span>
          <UButton
            to="https://github.com/alamkanak/alamkanak.github.io"
            target="_blank"
            color="primary"
            variant="outline"
            icon="mdi:source-fork"
            trailing-icon="mdi:open-in-new"
            size="md"
            class="transition-colors"
          >
            Fork on GitHub
          </UButton>
        </div>
      </div>

      <!-- Copyright -->
      <div class="pt-4">
        <div class="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted">
          <p>© {{ currentYear }} Raquib Ul Alam. All rights reserved.</p>
          <p class="flex items-center gap-1">
            Built with
            <UIcon name="mdi:heart" size="1em" class="text-red-500" />
            using Nuxt & Tailwind CSS
          </p>
        </div>
      </div>
    </UContainer>
  </footer>
</template>

<script setup lang="ts">
// Get current year for copyright
const currentYear = new Date().getFullYear()

// Query the profile data to get social contacts using shared composable
const { data: profile } = useProfile()

// Filter out email from social links for footer (showing only platform links)
const socialLinks = computed(() => {
  if (!profile.value?.social) return []
  return profile.value.social
})
</script>
