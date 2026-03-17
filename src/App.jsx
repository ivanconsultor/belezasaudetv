import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from './components/Header';
import HeroParallax from './components/HeroParallax';
import FeaturedPosts from './components/FeaturedPosts';
import PostCarousel from './components/PostCarousel';
import AboutAuthor from './components/AboutAuthor';
import Footer from './components/Footer';
import ProductVitrine from './components/ProductVitrine';
import CookieBanner from './components/CookieBanner';
import { client, urlFor } from './sanityClient';
import './index.css';

// Categorias na mesma ordem do menu do site
const CATEGORIAS = [
  { key: 'beleza', label: 'Beleza', terms: ['beleza'] },
  { key: 'saude', label: 'Saúde', terms: ['saúde', 'saude'] },
  { key: 'cabelo', label: 'Cabelo', terms: ['cabelo'] },
  { key: 'pele', label: 'Pele', terms: ['pele'] },
  { key: 'emagrecimento', label: 'Emagrecimento', terms: ['emagrecimento'] },
  { key: 'maquiagem', label: 'Maquiagem', terms: ['maquiagem'] },
  { key: 'produtos', label: 'Produtos', terms: ['produtos'] },
];

// Imagens de fallback por categoria
const categoryImages = {
  'maquiagem': 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&q=80',
  'saúde': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80',
  'saude': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80',
  'emagrecimento': 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=600&q=80',
  'beleza': 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=600&q=80',
  'pele': 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=600&q=80',
  'cabelo': 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80',
  'produtos': 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=600&q=80',
};
const defaultImage = 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80';

const getFallbackImage = (categories) => {
  if (!categories || categories.length === 0) return defaultImage;
  for (const cat of categories) {
    const key = cat.toLowerCase();
    if (categoryImages[key]) return categoryImages[key];
  }
  return defaultImage;
};

function App() {
  const [allPosts, setAllPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const query = `*[_type == "post"] | order(publishedAt desc) {
          _id,
          title,
          mainImage {
            ...,
            asset->
          },
          "categories": categories[]->title,
          featured,
          excerpt,
          publishedAt
        }`;

        const posts = await client.fetch(query);
        console.log('Posts do Sanity:', posts);

        const mappedPosts = posts.map(post => {
          const categories = post.categories && post.categories.length > 0 ? post.categories : ['Geral'];
          let imgUrl;
          const altText = post.mainImage?.alt || post.title;

          if (post.mainImage) {
            try {
              imgUrl = urlFor(post.mainImage)
                .width(800)
                .format('webp')
                .quality(80)
                .url();
            }
            catch (e) { imgUrl = getFallbackImage(categories); }
          } else {
            imgUrl = getFallbackImage(categories);
          }

          return {
            id: post._id,
            title: post.title,
            imgUrl,
            alt: altText,
            category: categories,
            featured: post.featured
          };
        });

        setAllPosts(mappedPosts);
      } catch (error) {
        console.error("Erro ao buscar dados do Sanity:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  // Filtra posts por categoria
  const getPostsByCategory = (terms) => {
    return allPosts.filter(p =>
      p.category.some(c => terms.some(t => c.toLowerCase().includes(t)))
    );
  };

  const postsRecentes = allPosts.slice(0, 10);

  // Posts filtrados pela busca (Título + Categorias + Normalização de Acentos)
  const searchResults = searchTerm.trim().length > 0
    ? allPosts.filter(p => {
        const normalize = (str) => str ? str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase() : "";
        const term = normalize(searchTerm);
        const titleMatch = normalize(p.title).includes(term);
        const categoryMatch = p.category.some(cat => normalize(cat).includes(term));
        return titleMatch || categoryMatch;
      })
    : [];

  return (
    <div className="app">
      <Helmet>
        <title>Beleza Saúde TV | Dicas de Beleza, Saúde e Bem-Estar</title>
        <meta name="description" content="Beleza Saúde TV - O melhor portal de conteúdo sobre beleza, saúde, emagrecimento, cuidados com a pele, cabelo, maquiagem e produtos. Dicas de especialistas para você." />
        <link rel="canonical" href="https://belezasaudetv.com/" />
        
        {/* Open Graph / Facebook / WhatsApp */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://belezasaudetv.com/" />
        <meta property="og:title" content="Beleza Saúde TV | Dicas de Beleza, Saúde e Bem-Estar" />
        <meta property="og:description" content="Beleza Saúde TV - O melhor portal de conteúdo sobre beleza, saúde, emagrecimento, cuidados com a pele, cabelo, maquiagem e produtos." />
        <meta property="og:image" content="https://belezasaudetv.com/og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://belezasaudetv.com/" />
        <meta name="twitter:title" content="Beleza Saúde TV | Dicas de Beleza, Saúde e Bem-Estar" />
        <meta name="twitter:description" content="Beleza Saúde TV - O melhor portal de conteúdo sobre beleza, saúde, emagrecimento, cuidados com a pele, cabelo, maquiagem e produtos." />
        <meta name="twitter:image" content="https://belezasaudetv.com/og-image.jpg" />
      </Helmet>
      <Header searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      <main role="main" aria-label="Conteúdo principal">
        <Routes>
          <Route path="/" element={
            <>
              <section id="home">
                <HeroParallax />
              </section>

              <FeaturedPosts posts={allPosts.filter(p => p.featured).slice(0, 3)} fallbackPosts={allPosts.slice(0, 3)} />

              {/* Resultados da busca */}
              {searchTerm.trim().length > 0 && (
                <div id="search-results" style={{ padding: '30px 0' }}>
                  <PostCarousel
                    title={`Resultados para "${searchTerm}" (${searchResults.length} encontrado${searchResults.length !== 1 ? 's' : ''})`}
                    posts={searchResults}
                  />
                  {searchResults.length === 0 && (
                    <div style={{ textAlign: 'center', padding: '20px 0', color: '#999' }}>
                      Nenhum post encontrado para "{searchTerm}"
                    </div>
                  )}
                </div>
              )}

              {loading ? (
                <div style={{ textAlign: 'center', padding: '50px 0' }}>Carregando posts do Sanity...</div>
              ) : (
                <>
                  {/* Carrossel Posts Recentes */}
                  {postsRecentes.length > 0 && <PostCarousel title="Posts Recentes" posts={postsRecentes} />}

                  {/* Carrosséis por Categoria — mesma ordem do menu */}
                  {CATEGORIAS.map((cat, index) => {
                    const posts = getPostsByCategory(cat.terms).slice(0, 10);
                    if (posts.length === 0) return null;
                    return (
                      <React.Fragment key={cat.key}>
                        {/* Insere a seção Quem Sou ANTES da 4ª categoria (Pele) */}
                        {index === 3 && <section id="quemsou" aria-label="Sobre a autora"><AboutAuthor /></section>}
                        <section id={cat.key} aria-label={cat.label} style={index % 2 === 0 ? { backgroundColor: '#f9f9f9' } : {}}>
                          <PostCarousel title={cat.label} posts={posts} />
                        </section>
                      </React.Fragment>
                    );
                  })}

                  {/* Caso AboutAuthor não tenha sido inserido (menos de 4 categorias com posts) */}
                  {CATEGORIAS.filter(cat => getPostsByCategory(cat.terms).length > 0).length < 4 && <section id="quemsou" aria-label="Sobre a autora"><AboutAuthor /></section>}
                </>
              )}
            </>
          } />
          
          {/* Nova Rota Exclusiva da Vitrine */}
          <Route path="/vitrine" element={
            <div style={{ paddingTop: '80px', minHeight: '100vh', backgroundColor: '#FFFFFF' }}>
              <ProductVitrine />
            </div>
          } />
        </Routes>
      </main>

        {/* Os carrosséis e posts foram movidos para dentro da Route '/' */}

      <div id="contato">
        <Footer />
      </div>
      <CookieBanner />
    </div>
  );
}

export default App;
