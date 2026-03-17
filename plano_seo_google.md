# Plano de Otimização SEO (Diretrizes Oficiais do Google)

Este documento descreve as exigências oficiais do Google para ranqueamento e como aplicaremos essas melhores práticas no projeto beleza-saude-tv.

## 1. Core Web Vitals (Métricas Essenciais da Web)
As Core Web Vitals são métricas do Google que medem a experiência real do usuário em relação à velocidade, tempo de resposta e estabilidade visual.

*   **LCP (Largest Contentful Paint):** Mede a performance de **carregamento**. O ideal é que o maior elemento visível na tela (uma imagem hero, um bloco de texto) carregue em até **2.5 segundos**.
    *   *Ação no React:* Otimização do tempo de resposta, uso de cache, pré-carregamento (preload) de recursos críticos (fontes principais, imagem hero).
*   **INP (Interaction to Next Paint):** Mede a **interatividade**. O ideal é que a página responda a cliques e toques em até **200 milissegundos**.
    *   *Ação no React:* Minimização do bloqueio da thread principal, uso de code splitting (React.lazy).
*   **CLS (Cumulative Layout Shift):** Mede a **estabilidade visual**. O ideal é ter uma pontuação menor que **0.1**.
    *   *Ação no React:* Definiremos as dimensões (`width` e `height` explícitos) em CSS para todas as imagens.

## 2. Imagens WebP / AVIF
O Google recomenda fornecer imagens em formatos modernos.
*   **Ação:** Configurar o Sanity Image Builder para retornar automaticamente o formato WebP (`auto=format`).

## 3. Lazy Loading (Carregamento Preguiçoso)
*   **Ação:** Implementaremos o atributo nativo `loading="lazy"` em todas as imagens (tags `<img>` em componentes React) que estiverem abaixo da "dobra".

## 4. Prevenção de CLS (Estabilidade Visual)
*   **Ação:** Todas as `<img>` receberão classes ou atributos que respeitem o `aspect-ratio` para reservar espaço antes do carregamento.

## 5. HTML Semântico
*   **Ação:** Revisar componentes em `src/components` e `src/App.jsx` ou páginas. Garantir uso de `<header>`, `<main>`, `<article>`, `<nav>` e única tag `<h1>` por página.

## 6. Mapa do Site (Sitemap) e Robots.txt
*   **Ação:** Utilizar bibliotecas ou scripts para gerar arquivos `sitemap.xml` baseados nas rotas do React e nos dados do Sanity, e criar o `robots.txt` na pasta `public`.

## 7. Meta Tags, Open Graph e Schema.org (Dados Estruturados)
*   **Ação:** 
    *   Uso do React Helmet (ou recurso do framework) para inserção dinâmica de `<title>` e `<meta description>`.
    *   Implementação de tags **Open Graph** (`og:title`, `og:image`, `og:description`).
    *   Adição de schema JSON-LD para os artigos do blog.

## 8. Tratamento de Palavras Chaves (Keywords) e URLs
*   **Ação:** Estruturação das URLs no frontend consumindo dados amigáveis (slugs) vindos do Sanity CMS.

---

Acompanharemos a implementação dessas regras passo a passo.
