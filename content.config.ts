import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**',
    }),
    blog: defineCollection({
      type: 'page',
      source: 'blog/**',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string(),
        image: z.string().optional(),
        author: z.string().optional(),
      }),
    }),
    caseStudies: defineCollection({
      type: 'page',
      source: 'case-studies/**',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string(),
        image: z.string().optional(),
        company: z.string().optional(),
        industry: z.string().optional(),
      }),
    }),
    helpCenter: defineCollection({
      type: 'page',
      source: 'help-center/**',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        category: z.string().optional(),
      }),
    }),
  },
})
