import React, { useEffect, useState } from 'react';
import { Brain, Sparkles, Droplets, Heart, Dumbbell, Leaf } from 'lucide-react';
import './HeroParallax.css';
const HeroParallax = () => {
    const [offsetY, setOffsetY] = useState(0);

    const handleScroll = () => {
        // Limitar até certo ponto para não calcular quando passar da tela
        if (window.scrollY <= window.innerHeight) {
            setOffsetY(window.scrollY);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="hero-parallax">

            {/* Texto Gigante ao Fundo */}
            <div className="hero-bg-text" style={{ transform: `translateY(${offsetY * 0.2}px)` }}>
                BELEZA
            </div>

            <div className="hero-center-content">

                {/* Imagem Central com Parallax mais forte */}
                <div
                    className="hero-main-image"
                    style={{ transform: `translateY(${offsetY * -0.3}px)` }}
                >
                    {/* Imagem impactante representando beleza/saúde feminina */}
                    <img
                        src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                        alt="Beleza e Saúde Feminina"
                        width="1000"
                        height="667"
                        fetchpriority="high"
                    />
                </div>

                {/* Elementos Flutuantes (Inspirados na ref Cloud9) */}
                <div className="floating-badge badge-1" style={{ transform: `translateY(${offsetY * -0.1}px)` }}>
                    <div className="badge-icon-box"><Brain size={18} strokeWidth={2.5} /></div>
                    <div className="badge-text-box">Mentalidade</div>
                </div>

                <div className="floating-badge badge-2" style={{ transform: `translateY(${offsetY * -0.15}px)` }}>
                    <div className="badge-icon-box"><Sparkles size={18} strokeWidth={2.5} /></div>
                    <div className="badge-text-box">Auto-estima</div>
                </div>

                <div className="floating-badge badge-3" style={{ transform: `translateY(${offsetY * -0.05}px)` }}>
                    <div className="badge-icon-box"><Droplets size={18} strokeWidth={2.5} /></div>
                    <div className="badge-text-box">Cuidados</div>
                </div>

                <div className="floating-badge badge-4" style={{ transform: `translateY(${offsetY * -0.2}px)` }}>
                    <div className="badge-icon-box"><Heart size={18} strokeWidth={2.5} /></div>
                    <div className="badge-text-box">Bem-estar</div>
                </div>

                <div className="floating-badge badge-5" style={{ transform: `translateY(${offsetY * -0.12}px)` }}>
                    <div className="badge-icon-box"><Dumbbell size={18} strokeWidth={2.5} /></div>
                    <div className="badge-text-box">Fitness</div>
                </div>

                <div className="floating-badge badge-6" style={{ transform: `translateY(${offsetY * -0.18}px)` }}>
                    <div className="badge-icon-box"><Leaf size={18} strokeWidth={2.5} /></div>
                    <div className="badge-text-box">Natural</div>
                </div>

            </div>

            <div className="hero-cta">
                <h1>Revele a sua melhor versão</h1>
                <p>Conteúdos exclusivos sobre bem-estar, emagrecimento, produtos e muito mais para você brilhar todos os dias.</p>
                <button className="btn-hero" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
                    Explorar Conteúdo 🚀
                </button>
            </div>

        </section>
    );
};

export default HeroParallax;
