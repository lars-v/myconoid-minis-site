import { defineCollection, z } from 'astro:content';

const miniaturesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    // Basic Info
    title: z.string().optional(), // Name
    description: z.string().optional(),
    scale: z.enum(['32mm', '54mm', 'Other']).optional(),
    creatureType: z.enum([
      'Hero',
      'Undead',
      'Goblinoid',
      'Monstrosity',
      'Beast',
      'Dragon',
      'Demon',
      'Cultist',
      'Construct',
      'Elemental',
      'Giant',
      'Humanoid',
      'Aberration',
      'Other'
    ]).optional(),
    
    // Photos
    photos: z.array(z.object({
      image: z.string(),
      caption: z.string().optional(),
    })).optional(),
    
    // Creator Info
    designer: z.enum([
      'Yasashii Kyojin Studio',
      'Brite Mins',
      'Artisan Guild',
      'Clay Cyanide',
      'Dragon Trappers Lodge', 
      'Flesh of Gods',
      'Highland Miniatures',
      'Loot Studios',
      'Medbury Miniatures',
      'Mini Monster Mayhem',
      'Norkers',
      'Punga Miniatures',
      'Rocket Pig Games',
      'Wargames Atlantic',
      'Other'
    ]).optional(),
    
    // Simplified Pricing Structure
    pricing: z.object({
      // Finishing options: OSR Priming OR Unprimed
      osrPriming: z.object({
        tabletop: z.number().optional(), // Standard tabletop scale
        display: z.number().optional(),  // 54mm display scale
      }).optional(),
      unprimed: z.object({
        tabletop: z.number().optional(), // Standard tabletop scale  
        display: z.number().optional(),  // 54mm display scale
      }).optional(),
    }).optional(),
    
    // Flags
    featured: z.boolean().default(false),
    forSale: z.boolean().default(false),
  }),
});

export const collections = {
  'miniatures': miniaturesCollection,
};