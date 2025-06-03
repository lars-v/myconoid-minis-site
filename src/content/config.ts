import { defineCollection, z } from 'astro:content';

const miniaturesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    faction: z.string(),
    scale: z.string(),
    status: z.string(),
    image: z.string(),
    gallery: z.array(z.object({
      image: z.string(),
      description: z.string().optional(),
    })).optional(),
    forSale: z.boolean().default(false),
    price: z.number().optional(),
    techniques: z.array(z.string()).optional(),
    paintScheme: z.string().optional(),
  }),
});

export const collections = {
  'miniatures': miniaturesCollection,
};
