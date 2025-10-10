import { z, defineCollection } from 'astro:content';

const blog = defineCollection({
    schema: z.object({
        // Titolo del blog
        title: z.string(),

        // Data del blog
        date: z.string(),

        // Descrizione breve
        description: z.string(),

        // Tag visibili nelle card della pagina "blogs"
        tags: z.array(z.string()).optional(),

        // Ulteriori tag
        extratags: z.array(z.string()).optional(),

        // Icona associata
        icon: z.string().optional()
    })
});

export const collections = { blog };
