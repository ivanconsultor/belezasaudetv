import { getCliClient } from 'sanity/cli'

const client = getCliClient()

const categories = [
    { _type: 'category', title: 'Emagrecimento', description: 'Posts sobre emagrecimento, dietas e exercícios.' },
    { _type: 'category', title: 'Saúde', description: 'Dicas de saúde e bem-estar em geral.' },
    { _type: 'category', title: 'Maquiagem', description: 'Tutoriais e resenhas de maquiagem.' }
]

async function createCategories() {
    for (const cat of categories) {
        console.log(`Criando categoria: ${cat.title}...`)
        try {
            // Use createIfNotExists or just create. We'll use create.
            const res = await client.create(cat)
            console.log(`Sucesso! Categoria criada com ID: ${res._id}`)
        } catch (err) {
            console.error(`Erro ao criar ${cat.title}:`, err.message)
        }
    }
}

createCategories()
