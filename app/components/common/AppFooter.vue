<template>
  <footer class="bg-default border-t border-default">
    <UContainer class="pt-8 mb-10">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6">
        <!-- Social Links -->
        <div class="flex items-center gap-4">
          <span class="text-muted text-sm font-medium">Connect with me:</span>
          <div class="flex items-center gap-3">
            <UButton
              to="https://github.com/alamkanak"
              target="_blank"
              color="neutral"
              variant="ghost"
              icon="mdi:github"
              size="md"
              class="hover:bg-muted transition-colors p-2"
            />
            <UButton
              to="https://www.linkedin.com/in/alamkanak/"
              target="_blank"
              color="neutral"
              variant="ghost"
              icon="mdi:linkedin"
              size="md"
              class="hover:bg-muted transition-colors p-2"
            />
            <UButton
              to="https://stackoverflow.com/users/1113765/raquib-ul-alam"
              target="_blank"
              color="neutral"
              variant="ghost"
              icon="mdi:stack-overflow"
              size="md"
              class="hover:bg-muted transition-colors p-2"
            />
            <UButton
              to="https://dribbble.com/kanak"
              target="_blank"
              color="neutral"
              variant="ghost"
              icon="mdi:dribbble"
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
</script>
