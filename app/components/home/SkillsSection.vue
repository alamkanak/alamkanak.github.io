<template>
  <section class="mb-12 lg:mb-16">
    <CommonSectionHeader 
      title="Skills" 
      subtitle="Machine Learning - 4 years experience" 
    />
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="skill in skills"
        :key="skill.name"
        class="linear-card p-6 hover:bg-elevated transition-colors duration-200"
      >
        <h3 class="text-lg font-semibold text-highlighted mb-2">
          {{ skill.name }}
        </h3>
        <p class="text-muted text-sm">
          {{ skill.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Skill {
  name: string
  description: string
}

const skills: Skill[] = [
  {
    name: 'Agentic LLM, RAG',
    description: 'Have worked with various agentic LLMs and RAG systems in multiple projects'
  },
  {
    name: 'Classical machine learning',
    description: 'Accustomed to using various classical machine learning algorithms in different projects'
  },
  {
    name: 'Computer vision',
    description: 'In my projects, I employed OpenCV and traditional computer vision techniques in medical images'
  },
  {
    name: 'Tensorflow',
    description: 'Have used tensorflow extensively in several research projects'
  },
  {
    name: 'Data processing',
    description: 'Have numerous publications in the field of medical signal and image processing'
  },
  {
    name: 'Data visualization',
    description: 'Strive to produce meaningful and digestable visualization of big data'
  }
]
</script>
