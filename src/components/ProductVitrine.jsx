import React, { useState, useEffect } from 'react';
import { client as sanityClient } from '../sanityClient';
import imageUrlBuilder from '@sanity/image-url';
import './ProductVitrine.css';

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

const ProductVitrine = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "product"]{
          title,
          slug,
          linkDestino,
          buttonText,
          image{
            asset->{
              _id,
              url
            },
            alt
          }
        }`
      )
      .then((data) => setProducts(data))
      .catch(console.error);
  }, []);

  if (!products) {
    return <section className="vitrine-container loading"><p>Carregando Vitrine...</p></section>;
  }

  if (products.length === 0) {
    return null;
  }

  return (
    <section className="vitrine-section" id="vitrine">
      <div className="vitrine-container">
        <div className="vitrine-header">
          <h2>Produtos Recomendados</h2>
          <p>Seleção exclusiva de suplementos para potencializar seus resultados.</p>
        </div>

        <div className="vitrine-grid">
          {products.map((product, index) => (
            <div className="product-card" key={product.slug?.current || index}>
              <div className="product-image-wrapper">
                {product.image && (
                  <img
                    src={urlFor(product.image).width(1200).quality(100).url()}
                    alt={product.image.alt || `Imagem do produto ${product.title}`}
                    className="product-image"
                    loading="lazy"
                    width="400"
                    height="400"
                  />
                )}
              </div>
              <div className="product-info">
                <h3 className="product-title">{product.title}</h3>
                <a 
                  href={product.linkDestino} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="product-btn"
                >
                  {product.buttonText || 'SAIBA MAIS'} ➔
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductVitrine;
