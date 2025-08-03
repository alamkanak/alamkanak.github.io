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
    }),
    profile: defineCollection({
      type: 'data',
      source: 'profile.yml',
      schema: z.object({
        name: z.string(),
        avatar: z.object({
          src: z.string(),
          alt: z.string(),
          width: z.number(),
          height: z.number()
        }),
        bio: z.object({
          greeting: z.string(),
          description: z.string()
        }),
        seo: z.object({
          title: z.string(),
          description: z.string(),
          keywords: z.string(),
          jobTitle: z.string(),
          url: z.string()
        }),
        social: z.array(z.object({
          platform: z.string(),
          url: z.string(),
          icon: z.string()
        })),
        expertise: z.array(z.string())
      })
    }),
    projectTags: defineCollection({
      type: 'data',
      source: 'project-tags.yml',
      schema: z.object({
        tags: z.array(z.object({
          label: z.string(),
          icon: z.string()
        }))
      })
    })
  }
})
