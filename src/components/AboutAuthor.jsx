import React from 'react';
import './AboutAuthor.css';

const AboutAuthor = () => {
    return (
        <section className="about-section" id="quemsou">
            <div className="container">
                <div className="about-grid">

                    <div className="about-content">
                        <h2 className="section-title">Quem Sou?</h2>

                        <p>Acreditamos que a beleza vem de dentro para fora. Quando nos sentimos bem, radiamos essa energia para o mundo. No nosso blog, você encontrará dicas e informações para cuidar de si mesma, tanto por dentro quanto por fora. Porque você merece se sentir bonita e feliz!</p>

                        <p>Quer ter uma pele radiante e um corpo saudável? No nosso blog, você encontrará dicas de beleza e bem-estar que vão transformar a sua rotina.</p>

                        <p>Aprenda a cuidar da sua pele, a se alimentar de forma equilibrada e a encontrar o bem-estar que você merece.</p>

                        <p>Minha jornada para uma vida mais saudável e feliz começou há alguns anos. Através de pesquisas e experiências pessoais, descobri a importância de cuidar de si mesma. Neste blog, compartilho tudo o que aprendi, para que você também possa ter uma vida mais leve e feliz.</p>
                    </div>

                    <div className="about-image">
                        <div className="img-wrapper">
                            {/* Usando um placeholder feminino similar a foto "sobre mim" */}
                            <img 
                                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                                alt="Sobre a Autora" 
                                width="400"
                                height="400"
                                loading="lazy"
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutAuthor;
