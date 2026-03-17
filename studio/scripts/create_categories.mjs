import { createClient } from '@sanity/client'

const client = createClient({
    projectId: 'jacmba2p',
    dataset: 'production',
    useCdn: false,
    token: process.env.SANITY_API_TOKEN, // Precisaremos ter certeza que o token está disponível
    apiVersion: '2023-05-03',
})

const categories = [
    { _id: 'category-beleza', _type: 'category', title: 'Beleza', slug: { current: 'beleza' }, icon: '💄', order: 1 },
    { _id: 'category-saude', _type: 'category', title: 'Saúde', slug: { current: 'saude' }, icon: '🏋️', order: 2 },
    { _id: 'category-cabelo', _type: 'category', title: 'Cabelo', slug: { current: 'cabelo' }, icon: '💇', order: 3 },
    { _id: 'category-pele', _type: 'category', title: 'Pele', slug: { current: 'pele' }, icon: '✨', order: 4 },
    { _id: 'category-emagrecimento', _type: 'category', title: 'Emagrecimento', slug: { current: 'emagrecimento' }, icon: '🥗', order: 5 },
    { _id: 'category-maquiagem', _type: 'category', title: 'Maquiagem', slug: { current: 'maquiagem' }, icon: '🎨', order: 6 },
    { _id: 'category-produtos', _type: 'category', title: 'Produtos', slug: { current: 'produtos' }, icon: '🛍️', order: 7 },
]

async function createCategories() {
    for (const category of categories) {
        try {
            await client.createOrReplace(category)
            console.log(`Categoria criada/atualizada: ${category.title}`)
        } catch (err) {
            console.error(`Erro ao criar categoria ${category.title}:`, err.message)
        }
    }
}

createCategories()
