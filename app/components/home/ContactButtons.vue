<template>
  <section class="mb-12 lg:mb-16">
    <CommonSectionHeader title="Contact" />
    
    <div class="flex flex-wrap gap-3 justify-center">
      <UButton
        v-for="contact in contacts"
        :key="contact.label"
        :to="contact.url"
        target="_blank"
        rel="noopener noreferrer"
        variant="outline"
        color="neutral"
        size="md"
        class="linear-button-secondary"
      >
        <template #leading>
          <Icon :name="contact.icon" size="1.2em" />
        </template>
        {{ contact.label }}
      </UButton>
    </div>
  </section>
</template>

<script setup lang="ts">
interface ContactLink {
  label: string
  url: string
  icon: string
}

// Query the profile data to get social contacts using shared composable
const { data: profile } = useProfile()

// Transform profile social data to match ContactLink interface
const contacts = computed<ContactLink[]>(() => {
  if (!profile.value?.social) return []
  
  return profile.value.social.map((social) => ({
    label: social.platform.charAt(0).toUpperCase() + social.platform.slice(1),
    url: social.url,
    icon: social.icon
  }))
})
</script>
