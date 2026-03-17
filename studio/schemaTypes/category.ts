import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'category',
    title: 'Categoria',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Nome',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'URL (Slug)',
            type: 'slug',
            description: 'URL amigável para a página de categoria',
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'description',
            title: 'Descrição',
            type: 'text',
            description: 'Breve descrição da categoria (para SEO)',
            rows: 3,
        }),
        defineField({
            name: 'icon',
            title: 'Ícone (Emoji)',
            type: 'string',
            description: 'Emoji representativo da categoria (ex: 💄, 🏋️, 💊)',
        }),
        defineField({
            name: 'order',
            title: 'Ordem de Exibição',
            type: 'number',
            description: 'Número para ordenar as categorias na navegação',
        }),
    ],
    orderings: [
        {
            title: 'Ordem de Exibição',
            name: 'orderAsc',
            by: [{ field: 'order', direction: 'asc' }],
        },
    ],
    preview: {
        select: {
            title: 'title',
            icon: 'icon',
            order: 'order',
        },
        prepare(selection) {
            const { title, icon, order } = selection
            return {
                title: `${icon || '📁'} ${title}`,
                subtitle: order ? `Posição: ${order}` : '',
            }
        },
    },
})
