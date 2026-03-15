import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    excerpt: z.string().optional(),
    featured: z.boolean().default(false)
  })
});

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    featured: z.boolean().default(false),
    status: z.enum(['active', 'completed', 'paused']).optional(),
    tags: z.array(z.string()).default([]),
    links: z.object({
      website: z.string().url().optional(),
      github: z.string().url().optional(),
      paper: z.string().url().optional()
    }).optional()
  })
});

const pages = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional()
  })
});

export const collections = { blog, projects, pages };
