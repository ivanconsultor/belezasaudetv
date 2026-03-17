# Estrutura de Execução SEO Google - Beleza Saúde TV

Este arquivo é um guia prático consolidado do plano aprovado, listando as alterações arquiteturais e arquivos que serão modificados para adequação ao SEO Google (Core Web Vitals, HTML Semântico e Metadados).

## 1. Dependências Novas
Serão instaladas as seguintes bibliotecas no React:
- **`react-helmet-async`**: Para gerenciar de forma segura e assíncrona as tags `<head>` (como title, description, e Open Graph) em uma SPA (Single Page Application).
- **Gerador de Sitemap**: Usaremos um script Node local que consumirá os dados do Sanity e gerará o `sitemap.xml` na pasta `public/`.

## 2. Ajustes Arquiteturais

### `index.html` e `src/main.jsx`
- Reestruturação das meta tags estáticas no HTML.
- Injeção do `<HelmetProvider>` na raiz da aplicação (`main.jsx`).

### `src/App.jsx`
- Inserção de um componente `<Helmet>` global (Title e Description pardrão).
- Verificação do uso correto das tags `<main>`, `<section>` e inserção do Schema.Org (Organization e WebSite) principal.

### Otimizações Visuais e de Performance (CLS & LCP)
Modificaremos os componentes abaixo para adicionar lazy loading e controle de aspect-ratio.
- **`src/components/AboutAuthor.jsx`**: Imagem com `loading="lazy"` e dimensões declaradas.
- **`src/components/PostCarousel.jsx`**: Capas dos posts com carregamento assíncrono atrasado.
- **`src/components/FeaturedPosts.jsx`**: Marcação semântica correta. As imagens desta seção terão prioridade mais alta de carregamento (pois são acima da dobra).
- **`src/components/HeroParallax.jsx`**: A imagem principal usará `fetchpriority="high"` e sem "lazy loading".

## 3. SEO Técnico (Arquivos na Raiz Pública)
- **`public/robots.txt`**: Será criado para guiar rastreadores e apontar pro sitemap.
- **`public/sitemap.xml`**: Atualizado via script pre-build com links home e para posts dinâmicos.

---
_Este arquivo serve de referência para desenvolvedores durante a implantação._
