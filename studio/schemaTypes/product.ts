import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'product',
  title: 'Produto Afiliado (Vitrine)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nome do Produto',
      type: 'string',
      validation: (Rule) => Rule.required().error('O nome do produto é obrigatório.'),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      description: 'Caminho amigável, apenas aperte Generate',
    }),
    defineField({
      name: 'linkDestino',
      title: 'URL do Botão (Seu Subdomínio WP/Elementor)',
      type: 'url',
      description: 'Cole aqui o seu link final de afiliado atual (Ex: https://liftdetox.belezasaudetv.com)',
      validation: (Rule) => Rule.required().uri({ scheme: ['http', 'https'] }),
    }),
    defineField({
      name: 'image',
      title: 'Imagem do Produto',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Texto Alternativo (Acessibilidade)',
        }
      ],
      description: 'Suba o frasco com fundo transparente (PNG) ou branco para manter a qualidade.',
    }),
    defineField({
      name: 'buttonText',
      title: 'Texto do Botão',
      type: 'string',
      initialValue: 'SAIBA MAIS ➔',
      description: 'O texto que vai aparecer no botão roxo.',
    }),
    defineField({
      name: 'category',
      title: 'Categoria relacionada (Opcional)',
      type: 'reference',
      to: [{ type: 'category' }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      subtitle: 'linkDestino'
    },
  },
})
