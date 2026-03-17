import React from 'react';
import './FeaturedPosts.css';

// Dados estáticos de fallback — exibidos enquanto o Sanity não carrega
const fallbackData = [
    {
        id: 'fallback-1',
        title: 'Esmalte vermelho, descubra como usar sem borrar',
        category: ['Beleza', 'Produtos'],
        imgUrl: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1024&q=80',
    },
    {
        id: 'fallback-2',
        title: 'Os benefícios da atividade física no metabolismo',
        category: ['Emagrecimento', 'Saúde'],
        imgUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 'fallback-3',
        title: 'Descubra como manter os lábios hidratados...',
        category: ['Beleza', 'Pele'],
        imgUrl: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=800&q=80',
    }
];

const FeaturedPosts = ({ posts = [], fallbackPosts = [] }) => {
    // Usa posts específicos (destaques), senão usa os recentes fornecidos, senão o fallback estático
    const displayPosts = posts.length >= 3
        ? posts.slice(0, 3)
        : (fallbackPosts.length >= 3 ? fallbackPosts.slice(0, 3) : fallbackData);

    return (
        <section className="featured-section">
            <div className="container">
                <div className="featured-grid">
                    {displayPosts.map((post, index) => {
                        // O primeiro post é o destaque principal
                        const isMain = index === 0;
                        // Ajusta categorias para o formato de exibição
                        const categories = Array.isArray(post.category)
                            ? post.category
                            : (post.category ? [post.category] : ['Geral']);

                        return (
                            <article key={post.id || post._id} className={`featured-item ${isMain ? 'featured-main' : 'featured-sub'}`}>
                                <a href="#" className="featured-link" aria-label={`Ler post: ${post.title}`}>
                                    <div className="img-wrap">
                                        <img
                                            src={post.imgUrl}
                                            alt={post.alt || post.title}
                                            width={isMain ? 800 : 400}
                                            height={isMain ? 500 : 300}
                                            loading={isMain ? "eager" : "lazy"}
                                            style={{ objectFit: 'cover' }}
                                        />
                                        <div className="item-overlay"></div>
                                    </div>

                                    <div className="item-content">
                                        <div className="item-categories">
                                            {categories.map((cat, i) => (
                                                <span key={i} className="cat-label">{cat}</span>
                                            ))}
                                        </div>
                                        <h2 className="item-title">{post.title}</h2>
                                    </div>
                                </a>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FeaturedPosts;
