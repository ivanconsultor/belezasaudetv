import fs from 'fs';
import { createClient } from '@sanity/client';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const client = createClient({
    projectId: 'jacmba2p', // ID do projeto Sanity
    dataset: 'production',
    useCdn: false, // Buscar dados sempre atualizados para sitemap
    apiVersion: '2024-03-10',
});

async function generateSitemap() {
    try {
        console.log('Buscando posts do Sanity para Sitemap...');
        // Buscar apenas slugs dos posts e a data de atualização
        const posts = await client.fetch(`*[_type == "post" && defined(slug.current)]{
            "slug": slug.current,
            _updatedAt
        }`);

        const baseUrl = 'https://belezasaudetv.com';
        
        let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
        xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

        // Home Page
        xml += `  <url>\n`;
        xml += `    <loc>${baseUrl}/</loc>\n`;
        xml += `    <lastmod>${new Date().toISOString()}</lastmod>\n`;
        xml += `    <changefreq>daily</changefreq>\n`;
        xml += `    <priority>1.0</priority>\n`;
        xml += `  </url>\n`;

        // Pages for each Post
        posts.forEach(post => {
            xml += `  <url>\n`;
            // Redirecionamento correto conforme o routing da sua aplicação (ex: /post/slug-aqui)
            // Se as páginas tiverem uma rota própria, ajuste '/post/'
            xml += `    <loc>${baseUrl}/post/${post.slug}</loc>\n`;
            xml += `    <lastmod>${new Date(post._updatedAt).toISOString()}</lastmod>\n`;
            xml += `    <changefreq>weekly</changefreq>\n`;
            xml += `    <priority>0.8</priority>\n`;
            xml += `  </url>\n`;
        });

        xml += `</urlset>`;

        const publicDir = path.resolve(__dirname, '../dist');
        
        // Verifica se a pasta dist existe antes de escrever, ou escreve em public se rodado em dev 
        // (Será normalmente rodado pós-build, então dist fará sentido para a pasta de hospedagem estática).
        // Por via das dúvidas vamos escrever no public e também no dist se existir.
        
        const publicPath = path.resolve(__dirname, '../public/sitemap.xml');
        fs.writeFileSync(publicPath, xml, 'utf8');
        console.log(`Sitemap gerado em: ${publicPath}`);

        if (fs.existsSync(publicDir)) {
            const distPath = path.resolve(publicDir, 'sitemap.xml');
            fs.writeFileSync(distPath, xml, 'utf8');
            console.log(`Sitemap copiado para: ${distPath}`);
        }

    } catch (error) {
        console.error('Erro ao gerar sitemap:', error);
    }
}

generateSitemap();
