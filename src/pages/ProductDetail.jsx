import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { products } from '../data/products';
import './ProductDetail.scss';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || null);
  const [currentImage, setCurrentImage] = useState(product?.image || '');

  const handleSizeChange = (size) => {
    setSelectedSize(size);
    setCurrentImage(size.image);
  };

  if (!product) {
    return (
      <div className="product-detail">
        <div className="container">
          <h1>Produto não encontrado</h1>
          <Link to="/catalogo" className="btn">Voltar ao Catálogo</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="product-detail">
      <div className="container">
        <Link to="/catalogo" className="back-link">← Voltar ao Catálogo</Link>
        
        <div className="product-content">
          <div className="product-image-container">
            <img src={currentImage} alt={product.name} className="product-image" />
            {selectedSize?.additionalImages && (
              <div className="additional-images">
                <div className="thumbnail" onClick={() => setCurrentImage(selectedSize.image)}>
                  <img src={selectedSize.image} alt={`${product.name} principal`} />
                </div>
                {selectedSize.additionalImages.map((img, index) => (
                  <div key={index} className="thumbnail" onClick={() => setCurrentImage(img)}>
                    <img src={img} alt={`${product.name} ${index + 2}`} />
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <div className="product-info">
            <h1>{product.name}</h1>
            <p className="product-description">{product.description}</p>
            
            {product.sizes && (
              <div className="size-selector">
                <h3>Escolha o Diâmetro:</h3>
                <div className="size-options">
                  {product.sizes.map((size, index) => (
                    <button
                      key={index}
                      className={`size-option ${selectedSize?.diameter === size.diameter ? 'active' : ''}`}
                      onClick={() => handleSizeChange(size)}
                    >
                      {size.diameter}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            <div className="specifications">
              <h3>Especificações Técnicas</h3>
              <div className="specs-grid">
                {selectedSize && (
                  <div className="spec-item">
                    <span className="spec-label">Diâmetro:</span>
                    <span className="spec-value">{selectedSize.diameter}</span>
                  </div>
                )}
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="spec-item">
                    <span className="spec-label">{key}:</span>
                    <span className="spec-value">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;