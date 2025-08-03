import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    project: defineCollection({
      type: 'page',
      source: 'project/*.md',
      schema: z.object({
        title: z.string(),
        lang: z.string().optional(),
        tags: z.array(z.string()).optional(),
        thumbnail: z.string().optional(),
        description: z.string(),
        links: z.array(z.object({
          url: z.string(),
          text: z.string(),
          icon: z.string()
        })).optional(),
        info: z.array(z.object({
          key: z.string(),
          value: z.union([z.string(), z.array(z.string())])
        })).optional(),
        date: z.date()
      })
    }),
    skills: defineCollection({
      type: 'data',
      source: 'skills.yml',
      schema: z.object({
        title: z.string(),
        subtitle: z.string(),
        skills: z.array(z.object({
          name: z.string(),
          description: z.string()
        }))
      })
    })
  }
})
