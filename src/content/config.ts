import { defineCollection, z } from 'astro:content';

const pages = defineCollection({
    schema: z.object({
        color: z.string().optional(),
        callToAction: z.string().optional(),
        category: z.string().optional(),
        description: z.string().optional(),
        title: z.string(),
        subtitle: z.string().optional(),
        shortTitle: z.string().optional(),
        icon: z.string().optional(),
        pack: z.string().optional(),
        image: z.string().optional(),
        imageAlt: z.string().optional(),
        index: z.number(),
        seoTitle: z.string().optional(),
        status: z.string().optional(),
        tags: z.array(z.string()).optional(),
    })
});

const projects = defineCollection({
    schema: z.object({
        title: z.string(),
        icon: z.string().optional(),
        pack: z.string().optional(),
        image: z.string().optional(),
        headerImage: z.string().optional(),
        imageAlt: z.string().optional(),
        hook: z.string().optional(),
        status: z.string().optional(),
        subtitle: z.string().optional(),
        shortTitle: z.string().optional(),
        tags: z.array(z.string()).optional(),
    })
});


const linkcasts = defineCollection({
    schema: z.object({
        title: z.string(),
        subtitle: z.string().optional(),
        seoTitle: z.string().optional(),
        imageAlt: z.string().optional(),
        image: z.string().optional(),
        imageratio: z.string().optional(),
        date: z.date().optional(),
        url: z.string().optional(),
        color: z.string().optional(),
    })
});

export const collections = { pages, projects };
