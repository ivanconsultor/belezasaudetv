import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: 'jacmba2p', // ID do seu projeto Sanity
    dataset: 'production', // Dataset de produção
    useCdn: true, // Use o CDN do Sanity para velocidade máxima de entrega
    apiVersion: '2024-03-10', // Data atual da configuração
});

// Helper para construir as URLs das imagens baseadas nos ativos do Sanity
const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
    return builder.image(source);
};
