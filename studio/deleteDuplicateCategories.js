import { getCliClient } from 'sanity/cli'

const client = getCliClient()

async function deleteDuplicates() {
    // Busca categorias que NÃO têm o campo 'order' definido (são as duplicadas antigas)
    const duplicates = await client.fetch(`*[_type == "category" && !defined(order)]{ _id, title }`)

    if (duplicates.length === 0) {
        console.log('Nenhuma categoria duplicada encontrada!')
        return
    }

    console.log(`Encontradas ${duplicates.length} categorias duplicadas para remover:`)

    for (const cat of duplicates) {
        console.log(`  Removendo: ${cat.title} (${cat._id})...`)
        try {
            await client.delete(cat._id)
            console.log(`  ✓ Removida com sucesso!`)
        } catch (err) {
            console.error(`  ✗ Erro ao remover ${cat.title}:`, err.message)
        }
    }

    console.log('\nLimpeza concluída!')
}

deleteDuplicates()
