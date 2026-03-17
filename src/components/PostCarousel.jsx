import React, { useRef } from 'react';
import './PostCarousel.css';

const PostCarousel = ({ title, posts }) => {
    const carouselRef = useRef(null);

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    return (
        <section className="section-carousel">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">{title}</h2>
                    <div className="carousel-controls">
                        <button className="ctrl-btn prev" onClick={scrollLeft} aria-label="Previous">
                            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                        </button>
                        <button className="ctrl-btn next" onClick={scrollRight} aria-label="Next">
                            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                        </button>
                    </div>
                </div>

                <div className="carousel-track" ref={carouselRef}>
                    {posts.map((post) => (
                        <article key={post.id || post._id} className="carousel-card">
                            <a href="#" className="card-link" aria-label={`Ler post: ${post.title}`}>
                                <div className="card-img-wrap">
                                    <img
                                        src={post.imgUrl}
                                        alt={post.alt || post.title}
                                        width="300"
                                        height="200"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="card-content">
                                    <h3 className="card-title">{post.title}</h3>
                                </div>
                            </a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PostCarousel;
