import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import './ProductDetail.scss';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

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
            <img src={product.image} alt={product.name} className="product-image" />
          </div>
          
          <div className="product-info">
            <h1>{product.name}</h1>
            <p className="product-description">{product.description}</p>
            
            <div className="specifications">
              <h3>Especificações Técnicas</h3>
              <div className="specs-grid">
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