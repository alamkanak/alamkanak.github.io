<template>
  <section class="mb-12 lg:mb-16">
    <CommonSectionHeader title="Contact" />
    
    <div class="flex flex-wrap gap-3">
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

const contacts: ContactLink[] = [
  {
    label: 'GitHub',
    url: 'https://github.com/alamkanak',
    icon: 'mdi:github'
  },
  {
    label: 'Stack Overflow',
    url: 'https://stackoverflow.com/users/1113765/raquib-ul-alam',
    icon: 'mdi:stack-overflow'
  },
  {
    label: 'Email',
    url: 'mailto:alam.kanak@gmail.com',
    icon: 'mdi:email'
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/alamkanak/',
    icon: 'mdi:linkedin'
  },
  {
    label: 'Dribbble',
    url: 'https://dribbble.com/kanak',
    icon: 'mdi:dribbble'
  }
]
</script>
