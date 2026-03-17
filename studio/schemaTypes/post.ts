import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Título',
            type: 'string',
            validation: (Rule) => Rule.required().min(10).max(120),
        }),
        defineField({
            name: 'slug',
            title: 'URL (Slug)',
            type: 'slug',
            description: 'URL amigável gerada a partir do título. Clique em "Generate" para criar automaticamente.',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'author',
            title: 'Autor',
            type: 'reference',
            to: { type: 'author' },
        }),
        defineField({
            name: 'mainImage',
            title: 'Imagem Principal',
            type: 'image',
            description: 'Imagem de capa do post (recomendado: 1200x630px)',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Texto Alternativo (SEO)',
                    description: 'Descreva a imagem para acessibilidade e SEO',
                },
            ],
        }),
        defineField({
            name: 'categories',
            title: 'Categorias',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'category' } }],
            validation: (Rule) => Rule.required().min(1),
        }),
        defineField({
            name: 'excerpt',
            title: 'Resumo',
            type: 'text',
            description: 'Breve descrição do post para exibir na listagem e SEO (máx. 200 caracteres)',
            validation: (Rule) => Rule.max(200),
            rows: 3,
        }),
        defineField({
            name: 'publishedAt',
            title: 'Data de Publicação',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
        }),
        defineField({
            name: 'featured',
            title: 'Post em Destaque?',
            type: 'boolean',
            description: 'Marque para exibir este post na seção de destaques da home',
            initialValue: false,
        }),
        defineField({
            name: 'body',
            title: 'Conteúdo',
            type: 'blockContent',
        }),
    ],

    orderings: [
        {
            title: 'Data de Publicação (Recente)',
            name: 'publishedAtDesc',
            by: [{ field: 'publishedAt', direction: 'desc' }],
        },
        {
            title: 'Data de Publicação (Antigo)',
            name: 'publishedAtAsc',
            by: [{ field: 'publishedAt', direction: 'asc' }],
        },
        {
            title: 'Título A-Z',
            name: 'titleAsc',
            by: [{ field: 'title', direction: 'asc' }],
        },
    ],

    preview: {
        select: {
            title: 'title',
            author: 'author.name',
            media: 'mainImage',
            category: 'categories.0.title',
        },
        prepare(selection) {
            const { author, category } = selection
            const subtitles = [
                author && `por ${author}`,
                category && `em ${category}`,
            ].filter(Boolean)
            return { ...selection, subtitle: subtitles.join(' | ') }
        },
    },
})
